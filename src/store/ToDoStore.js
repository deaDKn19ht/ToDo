import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useToDoStore = defineStore("ToDoStore", () => {

  const task = ref({
    title: "",
    comment: "",
    id: Date.now(),
    isDone: false,
  });

  const tasks = ref([]);
  const selected = ref("all");
  const visibility = ref(false);

  const filterTasks = computed(() => {
    return selected.value === "completed"
      ? tasks.value.filter((t) => t.isDone)
      : selected.value === "not-completed"
      ? tasks.value.filter((t) => !t.isDone)
      : tasks.value;
  });

  const addTask = () => {
    if (task.value.title.length > 0) {
      tasks.value.push(task.value);
      clearTask();
      visibility.value = false;
    }
  };

  const changeVisibility = () => {
    visibility.value = !visibility.value;
    clearTask();
  };

  const clearTask = () => {
    task.value = { title: "", comment: "", id: Date.now() };
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((t) => t.id != id);
  };

  const cleareTasks = () => {
    tasks.value = tasks.value.filter((t) => !t);
  };

  const cleareCompleteTasks = () => {
    tasks.value = tasks.value.filter((t) => !t.isDone);
  };

  return {
    task,
    tasks,
    visibility,
    filterTasks,
    selected,
    addTask,
    changeVisibility,
    deleteTask,
    cleareTasks,
    cleareCompleteTasks,
  };
});
