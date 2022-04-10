<template>
	<button
		v-if="type === 'icon'"
		class="btn btn-icon shadow-outer content-center"
		:class="colors"
		:style="{
			'width': size + 'px',
			'height': size + 'px',
			'border-radius': rounded + 'px'
		}"
	>
		<mdicon :name="name" :size="icon_size" />
	</button>
	<button 
		v-else
		class="btn btn-button p-4 rounded-default shadow-outer"
		:class="colors"
	>
		<slot>
		</slot>
	</button>
</template>

<script setup>
import { computed, toRefs, defineProps } from 'vue'

const props = defineProps({
	type: {
		type: String,
		default: 'button'
	},
	size: {
		type: Number,
		default: 50
	},
	name: {
		type: String,
		default: null
	},
	bgColor: {
		type: String,
		default: 'btn-bg-001'
	},
	textColor: {
		type: String,
		default: 'btn-text-001'
	},
	hover: {
		type: Boolean,
		default: true
	}
})

const {
	type,
	size,
	name,
	bgColor,
	textColor,
	hover
} = toRefs(props)

const icon_size = computed(() => {
	return size.value * 0.6
})

const rounded = computed(() => {
	return size.value * 0.2
})

const colors = computed(() => {
	console.log(hover.value)
	return `bg-${ bgColor.value } 
		text-${ textColor.value } 
		${ 
			hover.value 
			? `hover:bg-${ textColor.value } hover:text-${ bgColor.value }` 
			: 'cursor-default' 
		}`
})
</script>

<style scoped>
.btn { display: inline-flex; }
.btn-button {
	min-width: 240px;
}
</style>