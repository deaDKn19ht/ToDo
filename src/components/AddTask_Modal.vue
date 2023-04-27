<template>
    <div>
        <input type="text" v-model.trim="ToDoStore.task.title" @keyup.enter="ToDoStore.addTask">
        <textarea v-model="ToDoStore.task.comment" @keyup.enter="ToDoStore.addTask"></textarea>
        <button @click="ToDoStore.addTask">Add</button>
    </div>
</template>
<script setup>
    import { useToDoStore } from '../store/ToDoStore';

    const ToDoStore = useToDoStore()
</script>
<style>
    input, textarea {
        border: 1px solid black;
    }
</style>