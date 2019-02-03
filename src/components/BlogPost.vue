<template>
    <div class="blog-post" :style="{ borderColor: color }">
        <p class="title">{{ title }}</p>
        <p class="author">{{ author }}</p>
        <p class="content">{{ content }}</p>
        <p class="date">{{ date }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: [
        'author',
        'color',
        'content',
        'date',
        'title',
    ]
});
</script>

<style>
.blog-post {
    border-style: solid;
    border-width: medium;
    padding: 20px;
    margin-top: 20px;
    width: 300px;
}
</style>
