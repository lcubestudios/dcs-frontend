<template>
	<div 
		class="icon rounded-default content-center shadow-outer" 
		:class="`bg-${ bgColor } text-${ textColor }`"
		:style="{
			width: size + 'px',
			height: size + 'px'
		}">
		<mdicon :name="name" :size="icon_size" />
	</div>
</template>

<script setup>
import { computed, toRefs, defineProps } from 'vue'

const props = defineProps({
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
		default: 'white'
	},
	textColor: {
		type: String,
		default: 'primary'
	}
})

const {
	size,
	name,
	bgColor,
	textColor
} = toRefs(props)

const icon_size = computed(() => {
	return size.value * 0.6
})
</script>