<template>
    <div class="parent" v-on:mouseenter="mouseEnter()" v-on:mouseleave="mouseLeave()">
        <h1 :style="{ 'display': titledisplay }">{{ title }}</h1>
        <p :style="{ 'display': contentdisplay }">{{ content }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['title', 'content'],
    name: 'KnowledgeItem',
    data() {
        return {
            titledisplay: 'block',
            contentdisplay: 'none'
        }
    },
    methods: {
        mouseEnter() {
            this.titledisplay = 'none';
            this.contentdisplay = 'block';
        },
        mouseLeave() {
            this.titledisplay = 'block';
            this.contentdisplay = 'none';
        }
    }
});
</script>

<style scoped>
.parent {
    width: 250px;
    height: 187px;
    background: linear-gradient(180deg, rgba(235, 36, 12, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #27293D;
    border: 2px solid #EB240C;
    border-radius: 11px;
}

.parent * {
    display: ;
    user-select: none;
    text-align: center;
    top: calc(50% - 0.5em);
}
</style>