import { createApp } from "vue";

import "./index.scss";

import { createRouter, createWebHistory } from "vue-router";

import BlogMain from "./components/BlogMain.vue";
import BlogArticle from "./components/BlogArticle.vue";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: BlogMain,
  },
  {
    path: "/article/:id",
    component: BlogArticle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
