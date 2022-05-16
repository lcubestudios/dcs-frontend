import { createStore } from 'vuex' 
import axios from 'axios'

const state = () => {
	return {
		files: [],
		filesLoading: false,
		selectedFiles: [],
		fileUpload: false,
		fileUploadProgress: 0,
		fileListLoad: false,
		fileListLoadTitle: null,
		fileListLoadMessage: null,
		fileListLoadProgress: null,
	}
}

const mutations = {
	setFiles(state, val) {
		state.files = val
	},
	setFilesLoading(state, val) {
		state.filesLoading = val
	},
	setFileUpload(state, val) {
		state.fileUpload = val
	},
	setFileUploadProgress(state, val) {
		state.fileUploadProgress = val
	},
	setFileListLoad(state, val) {
		state.fileListLoad = val
	},
	setFileListLoadTitle(state, val) {
		state.fileListLoadTitle = val
	},
	setFileListLoadProgress(state, val) {
		state.fileListLoadProgress = val
	},
	setFileListLoadMessage(state, val) {
		state.fileListLoadMessage = val
	},
	setSelectedFiles(state, val) {
		state.selectedFiles = val
 }}

const actions = {
	async getFiles({ dispatch, commit }) {
		commit('setFileListLoad', true)
		
		await dispatch('loadFiles')
		
		dispatch('clearFileListLoadSettings')
	},
	async loadFiles({ dispatch, commit }) {
		const list = await axios
			.get(process.env.VUE_APP_LIST_FILES_URL)
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
	clearFileListLoadSettings({ commit }) {
		commit('setFileListLoad', false)
		commit('setFileListLoadTitle', null)
		commit('setFileListLoadMessage', null)
		commit('setFileListLoadProgress', null)
	},
	clearFiles({ commit }) {
		commit('setFiles', [])
	},
	addSelectedFile({ commit, state }, val) {
		const list = [val,...state.selectedFiles]
		commit('setSelectedFiles', list)
	},
	removeSelectedFile({ commit, state }, data) {
		const list = state.selectedFiles.filter((item) => {
			return item.index !== data.index && item.filename === data.filename
		})
		commit('setSelectedFiles', list)
	},
	clearSelectedFiles({ commit }) {
		commit('setSelectedFiles', [])
	},
	async uploadFile({ commit, dispatch }, file) {
		commit('setFileListLoadProgress', 0)
		commit('setFileListLoadTitle', 'Uploading')
		commit('setFileListLoad', true)
		await axios
			.post(process.env.VUE_APP_UPLOAD_FILE_URL, file, {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress: (progressEvent) => {
					let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100)

					const max = Math.floor(Math.random() * (98 - 90 + 1) + 90)

					if (progress > max) { progress = max }
					
					commit('setFileListLoadProgress', progress)
				}
			})
			.then(async (res) => {
				await commit('setFileListLoadProgress', 100)

				setTimeout(async () => {
					if (res.status === 200) console.log('complete')
					else console.log('error')
	
					await dispatch('loadFiles')
	
					dispatch('clearFileListLoadSettings')
				}, 100)
			})
			.catch((err) => console.log(err))
	},
	async downloadFile({ dispatch }, files) {
		await axios
			.post(process.env.VUE_APP_DOWNLOAD_FILE_URL, JSON.stringify(files), {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
			})
			.then(async (res) => {
				if (res.data?.status === 200) {
					await dispatch('forceDownload', res.data)
				}
				else {
					console.log(res)
				}
			})
			.catch((err) => console.log(err))
	},
	async deleteFile({ dispatch, commit }, files) {
		commit('setFileListLoadTitle', 'Deleting')
		commit('setFileListLoadMessage', files.length + ' file(s)')
		commit('setFileListLoad', true)

		await axios
			.post(process.env.VUE_APP_DELETE_FILE_URL, JSON.stringify(files), {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress: (progressEvent) => {
					let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100)

					const max = Math.floor(Math.random() * (98 - 90 + 1) + 90)

					if (progress > max) { progress = max }
					
					commit('setFileListLoadProgress', progress)
				}
			})
			.then(async (res) => {
				if (res.data?.status === 200) {
					await commit('setFileListLoadProgress', 100)
	
					setTimeout(async () => {
						if (res.status === 200) console.log('complete')
						else console.log('error')
		
						await dispatch('loadFiles')
		
						dispatch('clearFileListLoadSettings')
					}, 100)
				}
				else {
					console.log(res)
				}
			})
			.catch((err) => console.log(err))
	},
}

const getters = {
	files(state) {
		return state.files
	},
	filesLoading(state) {
		return state.filesLoading
	},
	fileUpload(state) {
		return state.fileUpload
	},
	fileUploadProgress(state) {
		return state.fileUploadProgress
	},
	fileListLoad(state) {
		return state.fileListLoad
	},
	fileListLoadTitle(state) {
		return state.fileListLoadTitle
	},
	fileListLoadMessage(state) {
		return state.fileListLoadMessage
	},
	fileListLoadProgress(state) {
		return state.fileListLoadProgress
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