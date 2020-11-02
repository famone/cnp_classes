import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import courses from './courses'
import login from './login'

export default new Vuex.Store({
	modules: {
		courses,
		login
	}
}) 