<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['title', 'content'],
    name: 'HeaderView'
});


</script>
<template>
    <div id="parent">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<style scoped>
h1 {
    padding-top: 27px;
}

p {
    margin-top: 6px;
    min-height: 100px;
    margin-bottom: 25px;
}
</style>

