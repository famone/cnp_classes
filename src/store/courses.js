
import axios from 'axios'

const courses = {
	namespaced: true,
	state: {
		courses: '',
  	},
	mutations: {
		SET_COURSES(state, courses){
			state.courses = courses
			console.log(courses)
		}
	},
	actions: {
       async LOAD_COURSES({commit}){
	       	try{
	       		const {data} = await axios.get('https://nikitapugachev.com/wp-json/np/v1/get/courses')
	       		return commit('SET_COURSES', data)
	       	}
	       	catch(err){
	       		alert(err)
	       	}
       },
       async BUY_COURSE({commit}, payload){
	       	try{
	       		const {data} = await axios.post('https://nikitapugachev.com/wp-json/np/v1/buy/course', payload)
	       		return console.log(data)
	       	}
	       	catch(err){
	       		console.log(err)

	       	}
       }
	},
	getters: {
  		getCourses(state){
  			return state.courses
  		},
  		getSingleCourse: (state) => (id) =>{
  			return state.courses.find(item => item.id == id)
  		}
	}
}

export default courses


