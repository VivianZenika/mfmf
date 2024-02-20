// vite.config.js
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      remotes: {
        remote: {
          external: "http://localhost:5151/dist/assets/remoteEntry.js",
          from: "vite",
        },
      },
      shared: ["vue"],
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
});
