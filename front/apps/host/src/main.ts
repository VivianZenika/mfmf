import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const HelloWorld = defineAsyncComponent(() => import("remote/HelloWorld"));

app.component("HelloWorld", HelloWorld);
app.mount("#app");
