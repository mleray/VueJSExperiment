import Vue from "vue";
import HeaderComponent from "./components/Header.vue";
import BlogPostComponent from "./components/BlogPost.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <header-component
            :color="color"
            :colors="colors"
            v-on:change-color="changeColor"
        />
        <blog-post-component :color="color" />
    </div>
    `,
    data: {
        color: 'pink',
        colors: ['pink', 'orange', 'green', 'red']
    },
    components: {
        HeaderComponent,
        BlogPostComponent
    },
    methods: {
        changeColor(color: string) {
            if (this.colors.indexOf(color) !== -1) this.color = color;
            else console.log('This color is not available, sorry!');
        }
    }
});
