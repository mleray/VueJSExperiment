<template>
  <div
    class="header"
    :style="{ backgroundColor: color }"
  >
    <h3>{{ title }}</h3>
    <color-select-component :selected-color="color" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ColorSelectComponent from "./ColorSelect.vue";

export default Vue.extend({
    components: {
        ColorSelectComponent
    },
    props: {
        color: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: "Front-end development blog"
        }
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
