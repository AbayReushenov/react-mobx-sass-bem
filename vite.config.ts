import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const analyze = process.env.ANALYZE === "true";
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const base = repo ? `/${repo}/` : "/";

  return {
    base,
    plugins: [
      react(),
      analyze && visualizer({ filename: "dist/stats.html", open: false, gzipSize: true, brotliSize: true })
    ].filter(Boolean),
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
    server: {
      open: true,
      port: 3000
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./src/test/setup.ts"],
      css: true
    }
  };
});
