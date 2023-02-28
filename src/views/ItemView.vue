<template>
    <div id="parent">
        <h1>Kentnisse</h1>
        <div>
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

h1 {
    padding-top: 27px;
}
</style>