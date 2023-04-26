<script setup>
    import { useToDoStore } from './store/ToDoStore';
    import AddTask_Modal from './components/AddTask_Modal.vue';
    import ToDoHeader from './components/ToDoHeader.vue';
    

    const ToDoStore = useToDoStore();
</script>

<template>
    <ToDoHeader />
    <AddTask_Modal v-if="ToDoStore.visibility" />

</template>

<style scoped>

</style>
