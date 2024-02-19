import { createApp } from "vue";

import "./index.scss";

import { createRouter, createWebHistory } from "vue-router";
import { type Store, createStore } from "vuex";
import { type BlogState } from "./types/Store";
import("../../../packages/state/eventListeners");

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

const store: Store<BlogState> = createStore({
  state() {
    return {
      visitedArticles: [],
    };
  },
});

createApp(App).use(router).use(store).mount("#app");
