<template>
    <div class='header' :style='{ backgroundColor: color }'>
        <h3>{{ title }}</h3>
        <color-select :selectedColor='color' />
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ColorSelect from './ColorSelect.vue';

export default Vue.extend({
    props: {
        color: String,
        title: {
            type: String,
            default: 'Front-end development blog'
        }
    },
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
.header h3 {
    margin: 0;
}
</style>
