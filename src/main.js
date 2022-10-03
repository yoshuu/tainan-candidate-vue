import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueMasonryPlugin } from "vue-masonry";
// import { VueMasonryPlugin } from "vue-masonry/src/masonry-vue3.plugin";
const app = createApp(App);

app.use(router).use(VueMasonryPlugin).mount("#app");
// app.use(VueMasonryPlugin);
// app.use(VueMasonryPlugin);

// app.mount("#app");
