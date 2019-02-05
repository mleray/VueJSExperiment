<template>
    <select v-model='selected' v-on:change='changeColor'>
      <option v-for='color in colors' :value='color'>
          {{ color }}
      </option>
    </select>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
    props: {
        selectedColor: String
    },
    data() {
        return {
            selected: this.selectedColor,
            colors: ['pink', 'orange', 'green', 'red']
        }
    },
    methods: {
        changeColor() {
            if (this.colors.indexOf(this.selected) !== -1) {
                this.$parent.$emit('change-color', this.selected);
            } else console.log('This color is not available, sorry!');
        }
    }
});
</script>
