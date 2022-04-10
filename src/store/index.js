import { createStore } from 'vuex' 
import axios from 'axios'

const state = () => {
	return {
		files: []
	}
}

const mutations = {
	setFiles(state, val) {
		state.files = val
	}
}

const actions = {
	async getFiles({ commit }) {
		const list = await axios.get('https://api.lcubestudios.io/master/dcs-api/trigger.php')
			.then(res => {
				return res.data
			})

		commit('setFiles', list)
	},
	clearFiles({ commit }) {
		commit('setFiles', [])
	}
}

const getters = {
	files(state) {
		return state.files
	}
}

export default createStore({
	state,
	mutations,
	actions,
	getters
})