import VueRouter from 'vue-router'
import routes from './routes.js';

import store from '../store'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
       	 if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
});







export default router
