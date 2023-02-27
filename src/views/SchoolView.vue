<template>
    <div id="parent">
        <h1>{{ name }}</h1>
        <p>{{ text }}</p>
        <a v-bind:href="href">{{ link }}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24">
                <polygon fill="red"
                    points=" 7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
            </svg>
        </a>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['name', 'text', 'href', 'link'],
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
    margin-bottom: 29px;

}

h1 {
    padding-top: 18px;
}

p {
    margin-top: 6px;
}

a {
    margin-top: 6px;
    margin-bottom: 29px;
}
</style>