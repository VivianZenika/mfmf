import { createApp } from "vue";

import "./index.scss";

import { createRouter, createWebHistory } from "vue-router";
import { Store, createStore } from "vuex";

import BlogMain from "blog/BlogMain";
import BlogArticle from "blog/BlogArticle";
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

export type State = { isAuth: boolean };
const store: Store<State> = createStore({
  state() {
    return {
      isAuth: false,
    };
  },
});

createApp(App).use(router).use(store).mount("#app");
