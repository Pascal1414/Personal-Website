<template>
    <div class="parent" v-html="message" v-on:mouseenter="mouseEnter($event)" v-on:mouseleave="mouseLeave($event)">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['title', 'content'],
    name: 'KnowledgeItem',
    data() {
        return {
            message: `<h1 class="content">${this.title}</h1>`
        }
    },
    methods: {
        mouseEnter(event) {
            this.message = `<p class="content">${this.content}</p>`;
        },
        mouseLeave(event) {
            this.message = `<h1 class="content">${this.title}</h1>`;

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

.content {
    text-align: center;
}
</style>