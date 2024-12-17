<template>
    <div class="contact">
        <h1>Contact</h1>
        <ul>
            <li v-for="i in icons" :key="i.name">
                <span class="material-icons">{{ i.name }}</span>
                <div>{{ i.text }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
    { name: 'alternate_email', text: 'par email' }, 
    { name: 'local_phone', text: 'par telephone' },
    { name: 'local_post_office', text: 'par poste' },
    { name: 'local_fire_department', text: 'par signaux de fumée' }
])

</script>

<style>

.contact ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 60px auto;
}

.contact li {
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
}

</style>