<script setup>
    import { useToDoStore } from './store/ToDoStore';
    import AddTask_Modal from './components/AddTask_Modal.vue';
    import ToDoHeader from './components/ToDoHeader.vue';
    import tasksList from './components/tasksList.vue';
    import ToDoFooter from './components/ToDoFooter.vue';
    

    const ToDoStore = useToDoStore();
</script>

<template>  
    <ToDoHeader class="flex justify-between h-8  p-1 bg-emerald-200 items-center" />
    <tasksList class="grow overflow-auto" />
    <ToDoFooter class="flex justify-between h-8  p-1 bg-emerald-200" />    
    <Teleport to="body">
    <AddTask_Modal v-if="ToDoStore.visibility" class="w-3/12 flex flex-col absolute self-center"  />
    </Teleport>
</template>

<style scoped>
    
</style>
