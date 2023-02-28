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
#parent {
    background-color: #27293D;
    padding-left: 46px;
    padding-right: 46px;
    padding-bottom: 29px;
    border-radius: 11px;
    width: 100%;
    margin-bottom: 29px;
}

h1 {
    padding-top: 27px;
}

p {
    margin-top: 6px;
    height: 125px;
}
</style>

