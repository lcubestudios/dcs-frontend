import { createStore } from 'vuex' 
import axios from 'axios'

const state = () => {
	return {
		files: [],
		filesLoading: false,
		filesLoadingProgress: 0,
		selectedFiles: [],
		fileUpload: false,
		fileUploadProgress: 0,
	}
}

const mutations = {
	setFiles(state, val) {
		state.files = val
	},
	setFilesLoading(state, val) {
		state.filesLoading = val
	},
	setFilesLoadingProgress(state, val) {
		state.filesLoadingProgress = val
	},
	setFileUpload(state, val) {
		state.fileUpload = val
	},
	setFileUploadProgress(state, val) {
		state.fileUploadProgress = val
	},
	setSelectedFiles(state, val) {
		state.selectedFiles = val
 }}

const actions = {
	async getFiles({ dispatch, commit }) {
		commit('setFilesLoading', true)
		
		await dispatch('loadFiles')
		
		commit('setFilesLoading', false)
	},
	async loadFiles({ dispatch, commit }) {
		const list = await axios
			.get(process.env.VUE_APP_GET_FILES_URL)
			.then((res) => {
				return res.data.map((item) => {
					return {
						file_name: item?.key,
						file_size: item?.system?.content_length,
						timestamp_created: item?.system?.created,
					}
				})
			})
			.catch((err) => console.log(err))

		dispatch('clearSelectedFiles')
		commit('setFiles', list)
	},
	clearFiles({ commit }) {
		commit('setFiles', [])
	},
	addSelectedFile({ commit, state }, val) {
		const list = [val,...state.selectedFiles]
		commit('setSelectedFiles', list)
	},
	removeSelectedFile({ commit, state }, data) {
		const list = state.selectedFiles.filter((item) => item.index !== data.index)
		commit('setSelectedFiles', list)
	},
	clearSelectedFiles({ commit }) {
		commit('setSelectedFiles', [])
	},
	async uploadFile({ commit, dispatch }, file) {
		commit('setFileUpload', true)
		await axios
			.post(process.env.VUE_APP_UPLOAD_FILE_URL, file, {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress: (progressEvent) => {
					let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100) - 2

					const max = Math.floor(Math.random() * (98 - 90 + 1) + 90)

					if (progress > max) { progress = max }
					
					commit('setFileUploadProgress', progress)
				}
			})
			.then(async (res) => {
				await commit('setFileUploadProgress', 100)

				setTimeout(async () => {
					if (res.status === 200) console.log('complete')
					else console.log('error')
	
					await dispatch('loadFiles')
	
					commit('setFileUpload', false)
					commit('setFileUploadProgress', 0)
				}, 100)
			})
			.catch((err) => console.log(err))
	}
}

const getters = {
	files(state) {
		return state.files
	},
	filesLoading(state) {
		return state.filesLoading
	},
	filesLoadingProgress(state) {
		return state.filesLoadingProgress
	},
	fileUpload(state) {
		return state.fileUpload
	},
	fileUploadProgress(state) {
		return state.fileUploadProgress
	},
	selectedFiles(state) {
		return state.selectedFiles
	}
}

export default createStore({
	state,
	mutations,
	actions,
	getters
})