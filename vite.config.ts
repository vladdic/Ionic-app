import path from "path";
import vue from "@vitejs/plugin-vue";
import envPlugin from "vite-plugin-env";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), envPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
});