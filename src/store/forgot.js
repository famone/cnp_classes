
import axios from 'axios'

const forgot = {
	namespaced: true,
	state: {
		
  	},
	mutations: {
		SENT_ON_MAIL(state, payload){
			alert(payload)
		}
	},
	actions: {
        async REMEMBER_PASS({commit}, payload){
            
            try {
                const { data } = await axios.get(`https://nikitapugachev.com/wp-json/np/v1/forgot/user?email=${payload}`)
                console.log(data)   
                return commit('SENT_ON_MAIL', data)       
            }
            catch (err) {
            	console.log(err)
            }
        }
	},
	getters: {
		
	}
}

export default forgot


