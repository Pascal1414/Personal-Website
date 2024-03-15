<template>
    <hr>
    <div class="footline">
        <p>Pascal Rieder</p>
        <p>01.03.2023</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FooterView'
}
</script>

<style scoped>
hr {
    border: 2px solid #EB240C;
    border-radius: 4px;
    margin-top: 30px;
}

.footline {
    padding-top: 7px;
    display: flex;
    justify-content: space-between;
}
</style>