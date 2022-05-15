<template>
	<div class="fixed flex flex-row justify-end items-end w-full h-full p-14">
		<span class="text-9xl text-primary">{{ progress }}</span>
		<span class="text-9xl text-primary">TEST</span>
	</div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps({
	progress: {
		type: String,
		default: '0%'
	}
})

const {
	progress
} = toRefs(props)
</script>