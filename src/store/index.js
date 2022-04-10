import { createStore } from 'vuex' 

const state = () => {
	return {
		token: null
	}
}

const mutations = {
}

const actions = {
}

const getters = {
	isAuth(state) {
		return !!state.token
	}
}

export default createStore({
	state,
	mutations,
	actions,
	getters
})