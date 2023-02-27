<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['title', 'content'],
    name: 'HeaderView',
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
    }
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
    border-radius: 11px;
    width: 100%;
}

h1 {
    padding-top: 27px;
}

p {
    height: 125px;
    padding-bottom: 23px;
}
</style>

