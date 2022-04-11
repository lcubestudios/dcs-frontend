import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store/index.js';
import Home from '@/views/Home.vue'
import { processExpression } from '@vue/compiler-core';
// import Auth from '@/views/Auth.vue'

const routes = [
	{
		path: process.env.BASE_URL,
		name: 'Home',
		component: Home,
		meta: {
			authRequired: true
		}
	},
	{
		path: '/:catchAll(.*)',
		redirect: process.env.BASE_URL,
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
