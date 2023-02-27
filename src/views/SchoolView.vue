<template>
    <div id="parent">
        <h1>{{ name }}</h1>
        <p>{{ text }}</p>
        <a>Link</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['name', 'text', 'href'],
    name: 'SchoolView'
});
</script>

<style scoped>
#parent {
    background-color: #27293D;
    padding-left: 46px;
    padding-right: 46px;
    padding-bottom: 29px;
    border-radius: 11px;
    width: 100%;
}

h1 {
    padding-top: 18px;
}

p {}

a {
    margin-bottom: 29px;
}
</style>