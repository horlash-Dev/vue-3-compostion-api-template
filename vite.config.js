import { fileURLToPath, URL } from "url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        login: resolve(root, "login", "index.html"),
        register: resolve(root, "register", "index.html"),
      },
    },
  },
});
