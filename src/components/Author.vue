<template>
  <div class="author">
    <img
      :src="imageUrl"
      height="60"
      width="60"
    >
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        name: {
            type: String,
            default: "Jon Snow"
        },
        imageUrl: {
            type: String,
            default: "https://www.placecage.com/200/300"
        }
    }
});
</script>

<style>
.author {
    text-align: center;
    margin-right: 10px;
}
.author p {
    margin-top: 0;
}
img {
    border-radius: 50%;
}
</style>
