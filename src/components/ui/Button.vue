<template>
	<button
		v-if="icon"
		class="btn btn-icon shadow-outer content-center"
		:class="colors"
		:style="{
			'width': size + 'px',
			'height': size + 'px',
			'border-radius': rounded + 'px'
		}"
	>
		<mdicon :name="icon" :size="icon_size" />
	</button>
	<button 
		v-else
		class="btn btn-button p-4 shadow-outer content-center rounded-default"
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
		default: 'primary'
	},
	size: {
		type: Number,
		default: 50
	},
	icon: {
		type: String,
		default: null
	},
	bgColor: {
		type: String,
		default: null
	},
	textColor: {
		type: String,
		default: null
	},
	bgHoverColor: {
		type: String,
		default: null
	},
	textHoverColor: {
		type: String,
		default: null
	},
	hover: {
		type: Boolean,
		default: true
	}
})

const {
	type,
	size,
	icon,
	bgColor,
	textColor,
	bgHoverColor,
	textHoverColor,
	hover
} = toRefs(props)

const icon_size = computed(() => {
	return size.value * 0.6
})

const rounded = computed(() => {
	return size.value * 0.2
})

const colors = computed(() => {
	const bg = bgColor.value ||
		type.value === 'secondary'
		? 'btn-bg-002'
		: 'btn-bg-001'
	const text = textColor.value ||
		type.value === 'secondary'
		? 'btn-text-002'
		: 'btn-text-001'
	/* Hover */
	const bgHover = bgHoverColor.value || textColor.value ||
		type.value === 'secondary'
		? 'btn-text-002'
		: 'btn-text-001'
	const textHover = textHoverColor.value || bgColor.value ||
		type.value === 'secondary'
		? 'btn-bg-002'
		: 'btn-bg-001'

	return `bg-${ bg } 
		text-${ text } 
		${ 
			hover.value 
			? `hover:bg-${ bgHover } hover:text-${ textHover }` 
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