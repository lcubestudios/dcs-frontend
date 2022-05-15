<template>
	<div class="loader-progress-bar w-full h-full content-center">
		<div class="w-full md:w-7/12 lg:w-6/12 flex flex-col items-center">
			<header>
				<h4 class="title-text mb-4">Uploading...</h4> 
				<p v-if="message">{{ message }}</p>
			</header>
			<section class="progress-bar-container w-11/12 md:w-full flex flex-col items-end my-12">
				<div class="w-full progress-bar bg-loader-bg">
					<div 
						class="bg-loader-fg h-full"
						:style="{
							width: progress + '%'
						}"
					></div>
				</div>
				<div class="text-loader-fg mt-2"><small>{{ progress }}%</small></div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
	message: {
		type: String,
		default: null
	},
	progress: {
		type: [String, Number],
		default: 0
	}
})

const {
	message,
	progress
} = toRefs(props)
</script>

<style scoped>
.progress-bar-container { 
	width: 100%;
	max-width: 600px; 
}

.progress-bar { height: 4px; }
</style>