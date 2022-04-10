import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store/index.js';
import Home from '@/views/Home.vue'
// import Auth from '@/views/Auth.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			authRequired: true
		}
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/',
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
