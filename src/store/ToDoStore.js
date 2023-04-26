import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useToDoStore = defineStore('ToDoStore', () => {
    const task = ref({
        title: '',
        comment: '',
        id: Date.now(),
        isDone: false,
    })
    const tasks = ref([])

    const AddTask = () => {
        if(task.value.title.length > 0) {
          tasks.value.push(task.value);  
            clearTask();
        }
    }

    const clearTask = () => {        
        task.value = {title: '', comment: '', id: Date.now()};
    }

    return {
        task, tasks, AddTask
    }
})
