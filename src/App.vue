<script setup lang="ts">
import HeaderView from './views/HeaderView.vue'
import SchoolView from './views/SchoolView.vue'
import ItemView from './views/ItemView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <header>

  </header>
  <main>
    <HeaderView title="Pascal Rieder"
      content="Ich heisse Pascal und bin 17 Jahre alt. Ich wohne in Greifensee und bin im 2. Lehrjahr als Informatiker Applikationsentwickler." />

    <div class="split">
      <SchoolView link="Mehr zu BMZ" href="https://www.bms-zuerich.ch/" name="Berufsmaturitätsschule Zürich"
        text="Jeden Freitag besuche ich die BMS Zürich. " />
      <SchoolView link="Mehr zu TBZ" href="https://www.tbz.ch/" name="Technische Berufsschule Zürich"
        text="Jeden Donnerstag besuche ich die TBZ." />
    </div>
    <ItemView />

  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.split {
  display: flex;
  flex-direction: column;
}


@media (min-width: 1000px) {
  .split {
    flex-direction: row;
    justify-content: space-between;
  }

  .split>*:last-child {
    margin-left: 15px;
  }

  .split>*:first-child {
    margin-right: 15px;
  }
}
</style>
