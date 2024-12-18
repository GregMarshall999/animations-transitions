<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink :to="{ name: 'About' }">A Propos</RouterLink>
    <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
	</nav>

	<RouterView v-slot="{ Component }">
		<Transition 
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
			<component :is="Component"></component>
		</Transition>
  </RouterView>
</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const prevRoute = ref(route.path);

const router = useRouter().getRoutes().map(r => r.path);

const getXDirection = () => {
  const currentIndex = router.indexOf(route.path);
  const prevIndex = router.indexOf(prevRoute.value);
  
  if(currentIndex < prevIndex) {
    return -100;
  }
  else {
    return 100;
  }
}

const transitionDuration = 0.4;

const beforeEnter = e => {
  e.style.opacity = 0;
  e.style.transform = `translateX(${getXDirection()}px)`;

  prevRoute.value = route.path;
}

const enter = e => {
  gsap.to(e, {
    duration: transitionDuration, 
    opacity: 1, 
    x: 0, 
    ease: 'ease-out'
  })
}

const leave = (e, done) => {
  gsap.to(e, {
    duration: transitionDuration, 
    opacity: 0, 
    x: -getXDirection(), 
    ease: 'ease-in', 
    onComplete: done
  })
}

</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f2f2f2;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
