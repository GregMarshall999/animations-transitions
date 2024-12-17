<template>
    <div class="todos">
        <input
            type="text"
            v-model="newTodo"
            @keypress.enter="addTodo"
            placeholder="Ajouter une tache..."
        />

        <div v-if="todos.length">
            <TransitionGroup tag="ul" name="list" appear>
                <li 
                    v-for="t in todos" 
                    :key="t.id" 
                    @click="deleteTodo(t.id)"
                >
                    {{ t.text }}
                </li>
            </TransitionGroup>
        </div>
        <div v-else>Toutes les tâches sont terminées!</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['badValue']);

const newTodo = ref();

let id = 1;
const todos = ref([
    { id: id, text: 'Préparer le petit dej' }, 
    { id: id-1, text: 'Faire le lit' }
]);
id++;

const addTodo = () => {
    if(newTodo.value) {
        todos.value = [{ id: id++, text: newTodo.value }, ...todos.value];
        newTodo.value = undefined;
    }
    else {
        emit('badValue');
    }
}

const deleteTodo = pId => {
    todos.value = todos.value.filter(t => t.id != pId);
}

</script>

<style>

.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-active {
    transition: all 0.4s ease;
}

.list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
}

.list-move {
    transition: all 0.3s ease;
}

input {
    width: 100%;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.todos {
    width: 400px;
    margin: 20px auto;
    position: fixed;
}

.todos ul {
    position: relative;
    padding: 0;
}

.todos li {
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
}

</style>