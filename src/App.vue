<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink :to="{ name: 'About' }">A Propos</RouterLink>
    <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
	</nav>

	<RouterView v-slot="{ Component }">
		<Transition name="route" mode="out-in">
			<component :is="Component"></component>
		</Transition>
  	</RouterView>
</template>

<style>
.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}
.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}
.route-enter-active {
	transition: all 0.3s ease-out;
}
.route-leave-active {
	transition: all 0.3s ease-in;
}

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
