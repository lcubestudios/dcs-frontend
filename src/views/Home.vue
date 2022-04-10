<template>
	<div id="dashboard" class="container h-screen overflow-hidden grid grid-cols-12 grid-row-min gap-5">
		<header class="bg-bg-002 col-span-12 p-5 rounded-default shadow-outer">
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
							type="icon" 
							name="account-outline" 
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
					<button @click="selectFile">
						<UiButton
							type="icon" 
							name="upload" 
							:size="50" 
							bg-color="btn-bg-002" 
							text-color="btn-text-002" 
						/>
					</button>
				</div>
			</header>
			<div class="flex-1w-full h-full bg-bg-003 shadow-inner">
				<div class="w-full h-full content-center">
					<div class="text-center">
						<h3 class="text-body-2 md:text-h3 title-text mb-3">You don't have any files yet</h3>
						<p class="text-small md:text-body mb-6">
							Add your first file by<br>clicking the upload button below
						</p>
						<UiButton @click="selectFile">Upload</UiButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const fileUpload = ref(null)

const selectFile = () => {
	fileUpload.value.click()
}

const uploadFile = () => {
  const files = event.target.files
  let filename = files[0].name
  const fileReader = new FileReader()
  // fileReader.addEventListener('load', () => {
  //   this.imageUrl = fileReader.result
  // })
  // fileReader.readAsDataURL(files[0])
  // this.image = files[0]
	console.log(fileReader.result)
	console.log(filename)
}
</script>

<style scoped>
#dashboard {
  align-content: stretch;
  grid-template-rows: min-content;
}
</style>