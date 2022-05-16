<template>
	<div class="file-toolbar flex flex-row gap-3">
		<UiButton
			:class="{ 
				'disabled': !hasSelected
			}"
			type="secondary" 
			icon="delete" 
			:size="35" 
			:bg-color="buttonBgColor" 
			:text-color="buttonTextColor" 
			@click="deleteFiles"
		/>
		<UiButton
			class="hidden"
			:class="{ 
				'disabled': !hasSelected
			}"
			type="secondary" 
			icon="download" 
			:size="35" 
			:bg-color="buttonBgColor" 
			:text-color="buttonTextColor" 
			@click="downloadFiles"
		/>
		<input 	
			class="hidden"
			type="file"
			ref="inputUpload" 
			@change="uploadFile"
		>
		<UiButton
			type="secondary" 
			icon="upload" 
			:size="35" 
			bg-color="btn-bg-002" 
			text-color="btn-text-002" 
			@click="selectUpload"
		/>
		<UiButton
			type="secondary" 
			icon="autorenew" 
			:size="35" 
			bg-color="btn-bg-002" 
			text-color="btn-text-002" 
			@click="getFiles"
		/>
	</div>
</template>

<script setup>
import { computed, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()

const getFiles = async () => {
	await store.dispatch('getFiles')
}

const inputUpload = ref(null)

const selectedFiles = computed(() => {
	return store.getters.selectedFiles
})

const hasSelected = computed(() => {
	return selectedFiles.value.length > 0
})

const buttonBgColor = computed(() => {
	return hasSelected.value ? 'btn-bg-002' : 'btn-bg-disabled'
})

const buttonTextColor = computed(() => {
	return hasSelected.value ? 'btn-text-002' : 'btn-text-disabled'
})

const selectUpload = () => {
	inputUpload.value.click()
}

const uploadFile = async () => {
	const formData = new FormData()
	formData.append('filename', inputUpload.value.files[0])
	await store.dispatch('uploadFile', formData)
	inputUpload.value.value = ''
}

const downloadFiles = async () => {
	if (selectedFiles.value.length > 0) await store.dispatch('downloadFile', selectedFiles.value[0])
	else console.log('no Files selected')
}

const deleteFiles = async () => {
	if (selectedFiles.value.length > 0) await store.dispatch('deleteFile', selectedFiles.value)
	else console.log('no Files selected')
}
</script>

<style scoped>
.file-toolbar > .disabled { pointer-events: none !important; }
</style>