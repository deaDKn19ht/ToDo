<script setup>
    import { useToDoStore } from './store/ToDoStore';
    import AddTask_Modal from './components/AddTask_Modal.vue';
    import ToDoHeader from './components/ToDoHeader.vue';
    import tasksList from './components/tasksList.vue';
    

    const ToDoStore = useToDoStore();
</script>

<template>
    <ToDoHeader />
    <tasksList />
    <AddTask_Modal v-if="ToDoStore.visibility" />

</template>

<style scoped>

</style>
