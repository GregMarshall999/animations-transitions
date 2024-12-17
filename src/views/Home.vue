<template>
	<div class="home">
		<Transition name="toast">
			<Toast v-if="showToast"/>
		</Transition>
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

.toast-enter-from, .toast-leave-to {
	opacity: 0;
	transform: translateY(-60px);
}

.toast-enter-active, .toast-leave-active {
	transition: all 0.3s ease;
}

</style>