<template>
	<LoaderBasic 
		v-if="isLoading"
	/>
	<LoaderProgressBar
		v-else-if="isUpload"
		:progress="uploadProgress"
	/>
	<div 
		v-else-if="!isLoading && !isUpload && files.length > 0" 
		class="file-list-container w-full h-full px-7 py-5 md:px-11 md:py-7 lg:px-16 lg:py-11 overflow-auto"
	>
		<div class="file-list">
			<header class="flex flex-row gap-3 title-text text-small pb-3 border-b border-outershadow">
				<span class="w-6/12 text-secondary">Name</span>
				<span class="w-2/12 text-secondary">Size</span>
				<span class="w-4/12 text-secondary">Created</span>
			</header>
			<FileItem 
				v-for="(file, ndx) in files"
				:key="ndx"
				:index="ndx"
				:name="file.file_name"
				:size="file.file_size"
				:created="file.timestamp_created"
			/>
		</div>
	</div>
	<div 
		v-else-if="!isLoading && !isUpload && files.length <= 0" 
		class="w-full h-full content-center"
	>
		<div class="text-center">
			<h3 class="text-body-2 md:text-h3 title-text mb-3">Hey there!</h3>
			<p class="text-small md:text-body mb-6">
				No Files
			</p>
			<UiButton>Upload</UiButton>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// const sort = ref('none')

const isLoading = computed(() => {
	return store.getters.filesLoading
})

const isUpload = computed(() => {
	return store.getters.fileUpload
})

const uploadProgress = computed(() => {
	return store.getters.fileUploadProgress
})

const files = computed(() => {
	return store.getters.files
})
</script>

<style scoped>
.file-list-container { overflow: auto}

.file-list { min-width: 225%; }

@media (min-width: 517px) {
	.file-list { min-width: 100%; }
}
</style>