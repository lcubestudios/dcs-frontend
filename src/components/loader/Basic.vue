<template>
	<div class="loader-progress-bar w-full h-full content-center">
		<div class="w-full md:w-7/12 lg:w-6/12 flex flex-col items-center">
			<header>
				<h4 class="title-text mb-4">Loading...</h4> 
				<p v-if="message">{{ message }}</p>
			</header>
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
})

const {
	message,
} = toRefs(props)
</script>