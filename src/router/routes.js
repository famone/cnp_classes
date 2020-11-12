import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import coursePeview from '../pages/coursePeview.vue'
import Login from '../pages/Login.vue'
import Lk from '../pages/Lk.vue'
import LkItem from '../pages/LkItem.vue'
import Courses from '../pages/Courses.vue'
import Signup from '../pages/Signup.vue'
import Recovery from '../pages/Recovery.vue'
import Politika from '../pages/Politika.vue'
import Soglashenie from '../pages/Soglashenie.vue'
import Platezhi from '../pages/Platezhi.vue'
import Lessons from '../pages/Lessons.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/courses/:id',
		component: coursePeview,
		props: true
	},
	{
		path: '/courses',
		component: Courses
	},
	{
		path: '/lessons',
		component: Lessons
	},
	{
		path: '/enter',
		component: Login
	},
	{
		path: '/recovery',
		component: Recovery
	},
	{
		path: '/signup',
		component: Signup
	},
	{
		path: '/politika',
		component: Politika,
	},
	{
		path: '/soglashenie',
		component: Soglashenie,
	},
	{
		path: '/platezhi',
		component: Platezhi,
	},
	{
		path: '/lk',
		component: Lk,
		beforeEnter: (to, from, next) => {

			if (store.getters["login/getAuthenticated"]) {

				next()

			} else {
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

			if (store.getters["login/getAuthenticated"]) {

				next()

			} else {
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