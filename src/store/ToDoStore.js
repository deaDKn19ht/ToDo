import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useToDoStore = defineStore('ToDoStore', () => {

    const visibility = ref(false);

    const changeVisibility = () => {
        visibility.value = !visibility.value;
        
    };


    const task = ref({
        title: '',
        comment: '',
        id: Date.now(),
        isDone: false,
    })
    const tasks = ref([])

    const addTask = () => {
        if(task.value.title.length > 0) {
          tasks.value.push(task.value);  
            clearTask();
        }
    }

    const clearTask = () => {        
        task.value = {title: '', comment: '', id: Date.now()};
    }

    const deleteTask = (id) => {
        tasks.value = tasks.value.filter((t) => t.id != id)
    }

    return {
        task, tasks, visibility, addTask, changeVisibility, deleteTask,
    }
})
