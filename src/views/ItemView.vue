<template>
    <div id="parent">
        <h1>Kentnisse</h1>
        <div class="items-container">
            <KnowledgeItem title="C#"
                content="Wärend mehreren Projekten habe ich zu C# Erfahrungen sammeln können. Darunter Web Apps mit Blazor oder Desktop Apps mit WPF." />
            <KnowledgeItem title="Java"
                content="Mit Java habe ich bereits mehrere Projekte für Android Apps realisiert. Zudem besuchte ich zwei Module in der Berufsschule, in denen ich meine Java-Kenntnisse verbessern konnte." />
            <KnowledgeItem title="Javascript"
                content="Wärend meiner Freizeit habe ich bereits öfters mit JavaScript Programme Umgesetzt. Wärend einem Ük konnte ich meine Kenntnisse weiter verbessern." />
            <KnowledgeItem title="SQL"
                content="In der Berufsschule und einem Überbetrieblichem Kurs habe vieles über SQL gelernt. " />
            <KnowledgeItem title="Clound computing"
                content="Wärend einem ÜK habe ich gelernt, wie Minikube und Kubernetes oder Docker verwendet wird. " />
            <KnowledgeItem title="Vue.js"
                content="In meiner Freizeit habe ich Projekte mit Vue realisiert. Diese Webseite ist ebenfalls mit Vue programmiert." />
            <KnowledgeItem title="Express"
                content="Mit Express habe ich bereits Backends für Webseiten erstellt. Dabei habe ich HTTP oder Sockets verwendet. " />
            <KnowledgeItem title="Python" content="Mit Python habe ich bereits mehrere Konsolenanwendungen erstellt. " />

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
    margin-bottom: 6px;
}
</style>