<template>
	<div>
		<button @click="setToken">Set Token</button>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>