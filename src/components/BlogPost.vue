<template>
    <div class='blog-post' :style='{ borderColor: color }'>
        <p class='date'>{{ publishDate }}</p>
        <a v-on:click='views += 1' :href='blogPostUrl' target='_blank'>
            <h3 class='title' :style='{ color }'>{{ title }}</h3>
        </a>
        <div class='flex'>
            <author-component
                v-for='(author, index) in authors'
                :key='index'
                :name='author.name'
                :imageUrl='author.image.url'
            />
        </div>
        <p class='views'>{{ viewsCounter }}</p>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import AuthorComponent from './Author.vue';

export default Vue.extend({
    props: {
        title: String,
        color: String,
        publishDate: String,
        authors: Array,
        slug: String
    },
    data() {
        return {
            views: 0
        }
    },
    components: {
        AuthorComponent
    },
    computed: {
        blogPostUrl(): string {
            return 'https://www.voorhoede.nl/en/blog/' + this.slug;
        },
        viewsCounter(): string {
            return 'Views: ' + this.views;
        }
    }
});
</script>

<style>
.blog-post {
    border-style: solid;
    border-width: medium;
    padding: 10px 20px;
    margin: 20px;
    width: 300px;
    flex: auto;
    position: relative;
}
.date {
    float: right;
    font-size: 12px;
    margin-top: 0;
}
.views {
    font-size: 14px;
    font-weight: bold;
    right: 20px;
    bottom: 0;
    position: absolute;
}
a {
    text-decoration: none;
}
</style>
