<template>
    <div class="border p-1 rounded-md bg-emerald-200">
        <input type="text" v-model.trim="ToDoStore.task.title" @keyup.enter="ToDoStore.addTask" maxlength="60" class="bg-emerald-50 border-emerald-100 rounded-md mb-1 p-1 text-emerald-900">
        <textarea v-model="ToDoStore.task.comment" @keyup.enter="ToDoStore.addTask" maxlength="240" class="resize-none h-48 bg-emerald-50 border-emerald-100 rounded-md mb-1 p-1 text-emerald-900"></textarea>
        <button @click="ToDoStore.addTask" class="rounded-md bg-emerald-100 border-emerald-400 text-emerald-900 hover:bg-emerald-900 hover:text-emerald-100">Add</button>
    </div>
</template>
<script setup>
    import { useToDoStore } from '../store/ToDoStore';

    const ToDoStore = useToDoStore()
</script>
<style>
    
</style>