import { createApp } from "vue";

import "./index.scss";

import { createRouter, createWebHistory } from "vue-router";

import { Store, createStore } from "vuex";
import { type HostState } from "./types/Store";
import { updateAppState } from "../../../packages/state/index";

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

const store: Store<HostState> = createStore({
  state() {
    return {
      isAuth: false,
    };
  },
});

addEventListener("login", () => {
  updateAppState("state", { isAuth: true, user: { name: "Vivian" } });
});

addEventListener("logout", () => {
  updateAppState("state", { isAuth: false });
});

createApp(App).use(router).use(store).mount("#app");
