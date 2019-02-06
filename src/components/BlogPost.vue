<template>
  <div
    class="blog-post"
    :style="{ borderColor: color }"
  >
    <p class="date">
      {{ publishDate }}
    </p>
    <a
      :href="blogPostUrl"
      target="_blank"
      @click="views += 1"
    >
      <h3
        class="title"
        :style="{ color }"
      >
        {{ title }}
      </h3>
    </a>
    <div class="flex">
      <author-component
        v-for="(author, index) in authors"
        :key="index"
        :name="author.name"
        :image-url="author.image.url"
      />
    </div>
    <p class="views">
      {{ viewsCounter }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AuthorComponent from "./Author.vue";

export default Vue.extend({
    components: {
        AuthorComponent
    },
    props: {
        title: {
            type: String,
            default: "Have you tried turning it off and on again?"
        },
        color: {
            type: String,
            required: true
        },
        publishDate: {
            type: String,
            default: "12/12/2012"
        },
        authors: {
            type: Array,
            default: () => []
        },
        slug: {
            type: String,
            default: "a-random-article"
        }
    },
    data() {
        return {
            views: 0
        }
    },
    computed: {
        blogPostUrl() {
            return "https://www.voorhoede.nl/en/blog/" + this.slug;
        },
        viewsCounter() {
            return "Views: " + this.views;
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
