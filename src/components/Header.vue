<template>
    <div class="header" :style="{ backgroundColor: color }">
        <span class="title">Frontend development tips</span>
        <color-select
            :colors="colors"
            :selectedColor="color"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ColorSelect from './ColorSelect.vue';

export default Vue.extend({
    props: ['color', 'colors'],
    components: {
        ColorSelect
    },
});
</script>

<style>
.header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
</style>
