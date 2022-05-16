import { createApp } from 'vue'
import App from '@/App.vue'

import router from "@/router/index.js"
import store from "@/store/index.js"

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import LoaderBasic from './components/loader/Basic.vue'
import LoaderPercentage from './components/loader/Percentage.vue'
import UiButton from './components/ui/Button.vue'
// import UiHeader from './components/ui/Header.vue'
// import UiContent from './components/ui/Content.vue'
import Toolbar from './components/Toolbar.vue'
import FileToolbar from './components/FileToolbar.vue'
import FileList from './components/FileList.vue'
import FileItem from './components/FileItem.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

createApp(App)
	.use(router)
	.use(store)
	.use(mdiVue, {
		icons: mdijs
	})
	.component('LoaderBasic', LoaderBasic)
	.component('LoaderPercentage', LoaderPercentage)
	.component('UiButton', UiButton)
	// .component('UiHeader', UiHeader)
	// .component('UiContent', UiContent)
	.component('Toolbar', Toolbar)
	.component('FileToolbar', FileToolbar)
	.component('FileList', FileList)
	.component('FileItem', FileItem)
	.mount('#app')
