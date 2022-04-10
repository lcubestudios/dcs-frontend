<template>
  <main id="view">
		<UiLoader v-if="loading" :progress="loaded" />
		<router-view v-else />
	</main>
</template>

<script setup>
const loading = false;
</script>
