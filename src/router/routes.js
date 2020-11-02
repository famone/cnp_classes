import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import coursePeview from '../pages/coursePeview.vue'
import Login from '../pages/Login.vue'
import Lk from '../pages/Lk.vue'
import LkItem from '../pages/LkItem.vue'
import Courses from '../pages/Courses.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/courses/:id',
			component: coursePeview
		},
		{
			path: '/courses',
			component: Courses
		},
		{
			path: '/enter',
			component: Login
		},
		{
			path: '/lk',
			component: Lk,
			beforeEnter: (to, from, next) => {
				

					if(store.getters["login/getAuthenticated"]){
		        		
		        			next()
		   
			        }else {
				        if (to.path != "/enter") {
				            next("/enter")
				        }
				        else {
				            next()
				        }
				    }
				}
		},
		{
			path: '/lk/:id',
			component: LkItem,
			beforeEnter: (to, from, next) => {
				

					if(store.getters["login/getAuthenticated"]){
		        		
		        			next()
		   
			        }else {
				        if (to.path != "/enter") {
				            next("/enter")
				        }
				        else {
				            next()
				        }
				    }
				}
		},

	]

export default routes;