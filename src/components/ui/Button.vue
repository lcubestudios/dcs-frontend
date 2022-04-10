<template>
	<button 
		class="button p-4 rounded-default"
		:class="`bg-${ bgColor } text-${ textColor }`"
	>
		<slot>
		</slot>
	</button>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps({
	bgColor: {
		type: String,
		default: 'white'
	},
	textColor: {
		type: String,
		default: 'primary'
	}
})

const {
	bgColor,
	textColor
} = toRefs(props)
</script>

<style scoped>
button {
	min-width: 240px;
}
</style>