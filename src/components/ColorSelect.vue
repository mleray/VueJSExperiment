<template>
    <select v-model="selected" v-on:change="changeColor">
      <option v-for="color in colors" :value="color">
          {{ color }}
      </option>
    </select>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['colors', 'selectedColor'],
    data() {
        return {
            selected: this.selectedColor,
        }
    },
    methods: {
        changeColor() {
            this.$parent.$emit('change-color', this.selected);
        }
    }
});
</script>
