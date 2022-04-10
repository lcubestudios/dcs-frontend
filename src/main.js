import { createApp } from 'vue'
import App from '@/App.vue'

import router from "@/router/index.js"
import store from "@/store/index.js"

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import UiButton from './components/ui/Button.vue'
// import UiHeader from './components/ui/Header.vue'
// import UiContent from './components/ui/Content.vue'
import Toolbar from './components/Toolbar.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

createApp(App)
	.use(router)
	.use(store)
	.use(mdiVue, {
		icons: mdijs
	})
	.component('UiButton', UiButton)
	// .component('UiHeader', UiHeader)
	// .component('UiContent', UiContent)
	.component('Toolbar', Toolbar)
	.mount('#app')
