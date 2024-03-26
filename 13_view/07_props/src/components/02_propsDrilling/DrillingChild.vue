<template>
    <h2>child : {{ injectCount }}</h2>
    <Child/>
</template>

<script setup>
    import {inject} from "vue";
    import Child from "./DrillingGrandChild.vue";
    
    const injectCount = inject('count');
    
</script>

<style scoped>

</style>