import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/_variables.scss" as *;\n`
      }
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: true
  }
});
