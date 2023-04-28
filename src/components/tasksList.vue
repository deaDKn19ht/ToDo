<template>
    <div>
        <ul class="p-5">
            <li v-for="task in ToDoStore.filterTasks" :key="task.id" 
                class="bg-emerald-200 rounded-md mb-1 justify-between flex p-1 items-center break-all text-emerald-900"><span :title="task.comment" class="w-full">{{ task.title }}</span>
                <span class="flex ml-5">
                    <input type="checkbox" id="task.id" v-model="task.isDone">
                    <button @click="ToDoStore.deleteTask(task.id)" title="Delete"
                        class="bg-emerald-100 rounded-md border-emerald-400 mr-1 h-6 ml-2 text-emerald-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </span>
            </li>
            <h3 v-show="ToDoStore.filterTasks.length === 0" class="flex justify-center items-center text-emerald-900 font-medium">No Tasks</h3>
        </ul>
    </div>
</template>
<script setup>
import { useToDoStore } from '../store/ToDoStore';

const ToDoStore = useToDoStore()
</script>
<style></style>