<template>
	<div class="home">
		<Toast v-if="showToast"/>
		<Todos @bad-value="triggerToast" />
	</div>
</template>

<script setup>
import Toast from '@/components/Toast.vue';
import Todos from '@/components/Todos.vue';
import { ref } from 'vue';

const showToast = ref(false);
const triggerToast = () => {
	showToast.value = true;
	setTimeout(() => showToast.value = false, 3000);
}
</script>

<style>

.home {
	display: flex;
	justify-content: center;
}

</style>