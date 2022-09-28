import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/utility/_colors.scss";
        @import "@/assets/scss/utility/_reset.scss";
        @import "@/assets/scss/utility/_fonts.scss";
        @import "@/assets/scss/utility/_breakpoints.scss";
        @import "@/assets/scss/layout/_container.scss";
        @import "@/assets/scss/layout/_main.scss";
        `,
      },
    },
  },
});
