<template>
	<div id="dashboard" class="container h-screen overflow-hidden grid grid-cols-12 grid-row-min gap-5">
		<header class="bg-gray-001 col-span-12 p-5 rounded-default shadow-outer">
			<div class="w-full flex flex-row flex-nowrap justify-between items-center">
				<div class="flex flex-row flex-nowrap items-center">
					<mdicon class="text-primary mr-5" name="cloud" :size="50" />
					<h1 class="hidden lg:block text-primary text-h4">Decentralized Cloud Storage</h1>
				</div>
				<div class="flex flex-row flex-nowrap">
					<div class="flex flex-row flex-nowrap">
						<div class="flex flex-row flex-nowrap items-center mr-5 text-right">
							<h2 class="text-h6 text-primary">Lorem Ipsum</h2>
							<span class="hidden text-body-2 leading-none">
								<span class="inline-block w-2 h-2 bg-secondary rounded-full mr-1"></span> Online
							</span>
						</div>
						<button>
							<UiIcon name="account-outline" :size="50" bg-color="primary" text-color="white"/>
						</button>
					</div>
				</div>
			</div>
		</header>
		<section class="flex flex-col bg-gray-001 col-span-12 p-5 rounded-default shadow-outer">
			<input 
				class="hidden"
				type="file"
				ref="fileUpload"
				@change="onFilePicked"
			>
			<header class="flex flex-row flex-nowrap justify-between mb-5">
				<div>
				</div>
				<div>
					<button @click="$refs.fileUpload.click()">
						<UiIcon name="upload" :size="50"/>
					</button>
				</div>
			</header>
			<div class="flex-1w-full h-full bg-white shadow-inner">
				<div class="w-full h-full content-center">
					<div class="text-center">
						<h3 class="text-body-2 md:text-h3 text-primary mb-3">You don't have any files yet</h3>
						<p class="text-small md:text-body mb-6">
							Add your first file by dragging it here or<br>
							use the upload new file button on the bottom
						</p>
						<UiButton bg-color="primary" text-color="white" @click="$refs.fileUpload.click()">Upload</UiButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
</script>

<style scoped>
#dashboard {
  align-content: stretch;
  grid-template-rows: min-content;
}
</style>