
import axios from 'axios'

const courses = {
	namespaced: true,
	state: {
		courses: '',
		payment: '',
		boughts: '',
		boughtsIds: []
  	},
	mutations: {
		SET_COURSES(state, courses){
			state.courses = courses
		},
		SET_PAYMENT(state, payload){
			state.payment = payload
		},
		CLEAR_FRAME(state){
			state.payment = ''
		},
		SET_BOUGHTS(state, payload){
			state.boughts = payload
			payload.forEach(item =>{
				state.boughtsIds.push(item.id)
			})	
		},
		CLEAR_BOUGHTS(state){
			state.boughts = ''
			state.boughtsIds = ''
		}

	},
	actions: {
       async LOAD_COURSES({commit}){
	       	try{
	       		const {data} = await axios.get('https://nikitapugachev.com/wp-json/np/v1/get/courses')
	       		console.log(data)
	       		return commit('SET_COURSES', data)
	       	}
	       	catch(err){
	       		alert(err)
	       	}
       },
       async BUY_COURSE({commit}, payload){
	       	try{
	       		const {data} = await axios.post('https://nikitapugachev.com/wp-json/np/v1/buy/course', payload)
	       		return commit('SET_PAYMENT', data)
	       	}
	       	catch(err){
	       		console.log(err)

	       	}
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
       CLEAR_FRAME({commit}){
       		commit('CLEAR_FRAME')
       },
       CLEAR_BOUGHTS({commit}){
       		commit('CLEAR_BOUGHTS')
       }
	},
	getters: {
  		getCourses(state){
  			return state.courses
  		},
  		getSingleCourse: (state) => (id) =>{
  			return state.courses.find(item => item.id == id)
  		},
  		getPayment(state){
  			return state.payment
  		},
  		getPokupki(state){
  			return state.boughts
  		}
	}
}

export default courses


