<template>
	<LoaderBasic 
		v-if="isLoading"
		:title="loadingTitle"
		:message="loadingMessage"
		:progress="loadingProgress"
	/>
	<div 
		v-else-if="!isLoading && files.length > 0" 
		class="file-list-container w-full h-full px-7 py-5 md:px-11 md:py-7 lg:px-16 lg:py-11 overflow-auto"
	>
		<div class="file-list list-table">
			<header class="list-table-row list-table-header title-text text-small border-b border-outershadow">
				<div 
					class="list-table-data w-6/12 text-secondary"
					:class="{
						'sort-by': sortBy && sortBy.key === 'file_name'
					}"
				>
					<span
						class="cursor-pointer"
						@click="sortList({
							'key': 'file_name',
							'type': 'alpha'
						})"
					>Name</span>
				</div>
				<div 
					class="list-table-data w-2/12 text-secondary"
					:class="{
						'sort-by': sortBy && sortBy.key === 'file_size'
					}"
				>
					<span
						class="cursor-pointer"
						@click="sortList({
							'key': 'file_size',
							'type': 'int'
						})"
					>Size</span>
				</div>
				<div 
					class="list-table-data w-4/12 text-secondary"
					:class="{
						'sort-by': sortBy && sortBy.key === 'timestamp_created'
					}"
				>
					<span
						class="cursor-pointer"
						@click="sortList({
							'key': 'timestamp_created',
							'type': 'date'
						})"
					>Created</span>
				</div>
			</header>
			<FileItem 
				v-for="(file, ndx) in files"
				:key="ndx"
				:index="ndx"
				:name="file.file_name"
				:size="file.file_size"
				:created="file.timestamp_created"
				:on-click="toggleSelect"
				:is-selected="selectedIndex === ndx"
			/>
		</div>
	</div>
	<div 
		v-else-if="!isLoading && files.length <= 0" 
		class="w-10/12 md:w-full h-full m-auto content-center"
	>
		<div class="text-center">
			<h3 class="text-body-2 md:text-h3 title-text mb-3">You don't have any files yet</h3>
			<div class="text-small md:text-body mb-6">
				Add your first file by clicking the Upload button below or <span class="inline-block relative text-text-002 top-1"><mdicon name="upload" :size="24" /></span> icon in the toolbar above
			</div>
			<input 	
				class="hidden"
				type="file"
				ref="inputUpload" 
				@change="uploadFile"
			>
			<UiButton @click="selectUpload">Upload</UiButton>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const sortBy = ref(null)
const sortOrder = ref('asc')

const isLoading = computed(() => {
	return store.getters.fileListLoad
})

const loadingTitle = computed(() => {
	return store.getters.fileListLoadTitle
})

const loadingMessage = computed(() => {
	return store.getters.fileListLoadMessage
})

const loadingProgress = computed(() => {
	return store.getters.fileListLoadProgress
})

const files = computed(() => {
	const data = store.getters.files
	const output = !sortBy.value
		? data
		: sortBy.value.type === 'alpha'
		? [...data].sort((a, b) => {
			const cond1 = a[sortBy.value.key].toLowerCase() < b[sortBy.value.key].toLowerCase()
			const cond2 = a[sortBy.value.key].toLowerCase() > b[sortBy.value.key].toLowerCase()

			const case1 = sortOrder.value === 'desc'
				? cond2
				:	cond1

			const case2 = sortOrder.value === 'desc'
				? cond1
				:	cond2

			if (case1) {
				return -1;
			}
			if (case2) {
				return 1;
			}
			return 0;
		})
		: sortBy.value.type === 'date'
		? sortOrder.value === 'desc'
			? [...data].sort((a, b) => new Date(b[sortBy.value?.key] * 1000) - new Date(a[sortBy.value.key] * 1000))
			: [...data].sort((a, b) => new Date(a[sortBy.value?.key] * 1000) - new Date(b[sortBy.value.key] * 1000))
		: sortOrder.value === 'desc'
			? [...data].sort((a, b) => b[sortBy.value.key] - a[sortBy.value.key])
			: [...data].sort((a, b) => a[sortBy.value.key] - b[sortBy.value.key])

	return output
})

const sortList = (choice) => {
	if (sortBy.value?.key === choice?.key) {
		if (sortOrder.value === 'asc') sortOrder.value = 'desc'
		else {
			sortBy.value = null
			sortOrder.value = 'asc'
		}
	}
	else {
		if (sortOrder.value === 'desc') sortOrder.value = 'asc'
		sortBy.value = choice
	}
}

const selectedIndex = ref(null)

const toggleSelect = (index, filename) => {
	if (selectedIndex.value === index) {
		selectedIndex.value = null
		store.dispatch('clearSelectedFiles')
	}
	else {
		selectedIndex.value = index
		store.dispatch('clearSelectedFiles')
		store.dispatch('addSelectedFile', {
			index,
			filename,
		})
	}
}

const inputUpload = ref(null)

const uploadFile = async () => {
	const formData = new FormData()
	formData.append('filename', inputUpload.value.files[0])
	await store.dispatch('uploadFile', formData)
	inputUpload.value.value = ''
}

const selectUpload = () => {
	inputUpload.value.click()
}
</script>

<style scoped>
.file-list-container { overflow: auto}

.file-list { min-width: 225%; }

@media (min-width: 517px) {
	.file-list { min-width: 100%; }
}
</style>

<style>
.sort-by { position: relative; }
.sort-by::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 20px;
	height: 2px;
	background: var(--color-primary);
}
</style>