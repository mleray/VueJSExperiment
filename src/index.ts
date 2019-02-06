import Vue from "vue";

// Components
import HeaderComponent from "./components/Header.vue";
import BlogPostComponent from "./components/BlogPost.vue";

// API
import { getBlogPosts, getHeader } from "./api/requests.ts";

new Vue({
    el: "#app",
    template: `
    <div>
        <header-component
            :color="color"
            :title="header"
            v-on:change-color="changeColor"
        />
        <div class="flex flex-wrap">
            <blog-post-component
                v-for="(blogPost, index) in blogPosts"
                :title="blogPost.title"
                :publishDate="blogPost.publishDate"
                :authors="blogPost.authors"
                :slug="blogPost.slug"
                :color="color"
                :key="index"
            />
        </div>
    </div>
    `,
    data: {
        color: "orange",
        blogPosts: null,
        header: null
    },
    components: {
        HeaderComponent,
        BlogPostComponent
    },
    methods: {
        changeColor(color: string) { this.color = color; }
    },
    mounted() {
        getBlogPosts()
            .then(blogPosts => this.blogPosts = blogPosts);
        getHeader()
            .then(header => this.header = header);
    }
});
