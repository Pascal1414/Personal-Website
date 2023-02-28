<template>
    <div id="parent">
        <h1>Kentnisse</h1>
        <div class="items-container">
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />

            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />
            <KnowledgeItem title="HTML" content="Ich habe bereits einige Projekte mit HTML umgesetzt." />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KnowledgeItem from './KnowledgeItem.vue';
export default defineComponent({
    name: 'ItemView',
    components: {
        KnowledgeItem
    }
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

.items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    /* row-gap column gap */
}

h1 {
    padding-top: 27px;
}
</style>