<template>
    <div>
        <h1>ToDo</h1>
        <select v-model="ToDoStore.selected" class="bg-emerald-50 rounded-md">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <button @click="ToDoStore.changeVisibility" class="bg-emerald-100 rounded-md border-emerald-400" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</template>
<script setup>
    import { useToDoStore } from '../store/ToDoStore';

    const ToDoStore = useToDoStore();
</script>
<style>
button {
    border: 1px solid black;
}
</style>