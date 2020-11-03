import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import courses from './courses'
import login from './login'
import signup from './signup'
import forgot from './forgot'

export default new Vuex.Store({
	modules: {
		courses,
		login,
		signup,
		forgot
	}
}) 