<template>
	<div 
		class="item flex flex-row gap-3 title-text py-8 border-b border-outershadow"
		:class="{
			'text-text-002': !isSelected,
			'text-text-003': isSelected
		}"
	>
		<div class="w-6/12">
			<span @click="selectItem">{{ name }}</span>	
		</div>
		<div class="w-2/12 whitespace-nowrap">
			<span @click="selectItem">{{ display_size }}</span>
		</div>
		<div class="w-4/12">
			<span @click="selectItem">{{ dt_created }}</span>
		</div>
	</div>
</template>

<script setup>
import { toRefs, defineProps, computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
	index: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		default: ''
	},
	size: {
		type: Number,
		default: 0
	},
	created: {
		type: Number,
		default: 0
	},
})

const {
	index,
	name,
	size,
	created
} = toRefs(props)

const isSelected = ref(false)

const display_size = computed(() => {
	return formatBytes(size.value)
})

const dt_created = computed(() => {
	return new Date(created.value * 1000).toDateString()
})

const selectItem = () => {
	isSelected.value = !isSelected.value
	if (isSelected.value) {
		store.dispatch('addSelectedFile', {
			index: index.value,
			name: name.value,
		})
	}
	else {
		store.dispatch('removeSelectedFile', {
			index: index.value,
			name: name.value,
		})
	}
}

function formatBytes(bytes, decimals = 2) {
	if (bytes === 0) return '0 Bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
</script>

<style scoped>
.item > div > span { cursor: pointer !important; }
</style>