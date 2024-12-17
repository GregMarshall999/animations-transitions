<template>
	<div class="about">
		<Transition 
			name="fade" 
			appear
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
		>
			<h1 v-if="showTitle">A Propos</h1>
		</Transition>
		
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil, recusandae eligendi ratione exercitationem blanditiis laboriosam maxime, laborum labore porro inventore! Nemo quae et nihil est ab maiores saepe natus?</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis quidem maxime non doloremque officia eos veniam deserunt quis sit perferendis sequi fuga facilis sint quos quibusdam, dolor modi voluptate.</p>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eum aliquam laborum ab praesentium rerum molestias quos voluptatibus harum sapiente dolore corporis, nemo magnam culpa eos voluptatum dignissimos odit porro.</p>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const showTitle = ref(true);

const beforeEnter = e => {
	console.log('before enter', e);
}

const enter = e => {
	console.log('enter');
	e.style.color = 'red';
}

const afterEnter = e => {
	console.log('after enter');

	e.style.color = 'black';

	//setTimeout(() => showTitle.value = false, 2000);
}

const beforeLeave = () => {
	console.log('before leave');
}

const leave = () => {
	console.log('leave');
}

const afterLeave = () => {
	console.log('after leave');

	setTimeout(() => showTitle.value = true, 1000);
}

</script>

<style>

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: all 3s ease;
}

.about {
	max-width: 600px;
	margin: 20px auto;
}
</style>
