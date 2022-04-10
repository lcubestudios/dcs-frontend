<template>
	<div id="dashboard" class="container h-full overflow-hidden grid grid-cols-12 grid-row-min gap-5">
		<header class="bg-bg-002 col-span-12 px-5 py-4 rounded-default shadow-outer">
			<div class="w-full flex flex-row flex-nowrap justify-between items-center">
				<div class="flex flex-row flex-nowrap items-center">
					<mdicon class="text-text-002 mr-5" name="cloud" :size="50" />
					<h1 class="hidden lg:block title-text text-h4">Decentralized Cloud Storage</h1>
				</div>
				<div class="flex flex-row flex-nowrap">
					<div class="flex flex-row flex-nowrap">
						<div class="flex flex-row flex-nowrap items-center mr-5 text-right">
							<h2 class="text-h6 title-text">Welcome!</h2>
							<span class="hidden text-body-2 leading-none">
								<span class="inline-block w-2 h-2 bg-secondary rounded-full mr-1"></span> Online
							</span>
						</div>
						<UiButton 
							type="secondary" 
							icon="account-outline" 
							:size="50" 
							:hover="false"
						/>
					</div>
				</div>
			</div>
		</header>
		<section class="bg-bg-002 flex flex-col col-span-12 p-5 rounded-default shadow-outer">
			<input 
				class="hidden"
				type="file"
				ref="fileUpload"
				@change="uploadFile"
			>
			<header class="flex flex-row flex-nowrap justify-between mb-5">
				<div>
				</div>
				<div>
					<!-- <UiButton
						class="mr-3"
						type="secondary" 
						icon="upload" 
						:size="35" 
						bg-color="btn-bg-002" 
						text-color="btn-text-002" 
						@click="selectFile"
					/>
					<UiButton
						type="secondary" 
						icon="download" 
						:size="35" 
						bg-color="btn-bg-002" 
						text-color="btn-text-002" 
					/> -->
					<UiButton
						type="secondary" 
						icon="autorenew" 
						:size="35" 
						bg-color="btn-bg-002" 
						text-color="btn-text-002" 
						@click="getFiles"
					/>
				</div>
			</header>
			<div class="flex-1w-full h-full bg-bg-003 shadow-inner overflow-x-hidden overflow-y-auto">
				<div v-if="files.length > 0" class="px-16 py-11">
					<header class="title-text text-small pb-3 border-b border-outershadow">
						<span class="text-secondary">Name</span>
					</header>
					<section 
						v-for="(file, ndx) in files"
						:key="ndx"
						class="title-text text-body-2 py-8 border-b border-outershadow">
						<span>{{ file.key }}</span>
					</section>
				</div>
				<div v-else class="w-full h-full content-center">
					<div class="text-center">
						<h3 class="text-body-2 md:text-h3 title-text mb-3">Hey there!</h3>
						<p class="text-small md:text-body mb-6">
							Click the button below to view files
						</p>
						<UiButton 
							@click="getFiles"
						>View Files</UiButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const files = computed(() => {
	return store.getters.files
})

const getFiles = async () => {
	await store.dispatch('getFiles')
}

// const selectFile = () => {
// 	fileUpload.value.click()
// }

// const uploadFile = () => {
//   const files = event.target.files
//   let filename = files[0].name
//   const fileReader = new FileReader()
//   fileReader.addEventListener('load', () => {
//     this.imageUrl = fileReader.result
//   })
//   fileReader.readAsDataURL(files[0])
//   this.image = files[0]
// 	console.log(fileReader.result)
// 	console.log(filename)
// }
</script>

<style scoped>
#dashboard {
  align-content: stretch;
  grid-template-rows: min-content;
}
</style>