<template>
    <div>
        <ul>
            <li v-for="task in ToDoStore.filterTasks" :key="task.id" :title="task.comment">{{ task.title }}
                <input type="checkbox" id="task.id" v-model="task.isDone">
                <button @click="ToDoStore.deleteTask(task.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </li>
            <h3 v-show="ToDoStore.filterTasks.length === 0">No Tasks</h3>
        </ul>
    </div>
</template>
<script setup>
import { useToDoStore } from '../store/ToDoStore';

const ToDoStore = useToDoStore()
</script>
<style></style>