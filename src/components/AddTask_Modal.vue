<template>
    <div>
        <input type="text" v-model.trim="ToDoStore.task.title">
        <textarea v-model="ToDoStore.task.comment"></textarea>
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