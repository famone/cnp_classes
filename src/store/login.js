
import axios from 'axios'

const login = {
	namespaced: true,
	state: {
		user: null,
		token: null,
		snack: false,
        purchase: '',
        purchaseId: []
  	},
	mutations: {
		SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_LESSONS(state, lessons){
            state.lessons = lessons
        },
        SNACKBAR(state){
            state.snack = !state.snack

            setTimeout(function(){
                state.snack = false;
            }, 5000);
        },
        SET_BOUGHTS(state, purchase){
            state.purchase = purchase
            state.purchaseId = []
            purchase.forEach(item =>{
                state.purchaseId.push(item.id)
            })
            console.log(state.purchase)
             console.log(state.purchaseId)
        },
        CLEAR_BOUGHTS(state){
            state.purchase = ''
            state.purchaseId = []
        }
	},
	actions: {
       async AUTH_REQUEST({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(`https://nikitapugachev.com/wp-json/jwt-auth/v1/token`, payload)
                return dispatch('VALIDATE', data)
            }
            catch (err) {
            	commit('SNACKBAR')
            }
        },
        async VALIDATE({ commit, state, dispatch }, user) {
            if (user) {
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
                dispatch("GET_BOUGHTS", user.id)
            }

            if (!state.user) {
                return
            }

            try {
                const response = await axios({
                    url: `https://nikitapugachev.com/wp-json/jwt-auth/v1/token/validate`,
                    method: 'post',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                localStorage.setItem("user", JSON.stringify(user));
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
            }
            catch (err) {
                localStorage.removeItem("user");
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },
         async SIGN_OUT({ commit }) {
            localStorage.removeItem("user");
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
            commit("CLEAR_BOUGHTS")
        },
        async GET_BOUGHTS({commit}, payload){
            try{
                const {data} = await axios.get('https://nikitapugachev.com/wp-json/np/v1/get/courses?user_id=' + payload)
                    return commit('SET_BOUGHTS', data)
            }
            catch(err){
                console.log(err)
            }
       },
       CLEAR_BOUGHTS({commit}){
            commit("CLEAR_BOUGHTS")
       }
	},
	getters: {
  		getUser(state) {
            return state.user
        },
        getAuthenticated(state) {
            return state.token && state.user
        },
        getPurchase(state){
            return state.purchase
        },
        getPurchaseId(state){
            return state.purchaseId
        }
	}
}

export default login


