<template>
	<div class="home">
		<Toast v-if="showToast"/>
		<Todos @bad-value="triggerToast" />
	</div>

	<Transition name="fade">
		<div v-if="showP">Je suis une transition</div>
	</Transition>

	<button @click="showP = !showP">{{ showP ? 'Cacher' : 'Afficher' }}</button>
</template>

<script setup>
import Toast from '@/components/Toast.vue';
import Todos from '@/components/Todos.vue';
import { ref } from 'vue';

const showP = ref(false);

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

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s ease;
}

</style>