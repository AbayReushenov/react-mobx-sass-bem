import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// Объединённый конфиг: сохраняем всё из вашего файла и фиксируем base для GitHub Pages
export default defineConfig(({ mode }) => {
  const analyze = process.env.ANALYZE === "true";

  // 1) Пытаемся взять имя репозитория из GITHUB_REPOSITORY (формат owner/repo)
  const repoFromGh = process.env.GITHUB_REPOSITORY?.split("/")[1];

  // 2) Разрешаем явное переопределение базового пути через VITE_BASE (напр. при локальном тесте предпросмотра)
  const baseFromEnv = process.env.VITE_BASE;

  // 3) Жёсткий дефолт для GitHub Pages этого репозитория
  const defaultRepo = "react-mobx-sass-bem";

  // Итоговый base:
  // - если задан VITE_BASE — используем его (например, "/" для локального preview)
  // - иначе если есть repoFromGh — "/<repo>/"
  // - иначе дефолт на "/react-mobx-sass-bem/"
  const base = typeof baseFromEnv === "string" ? baseFromEnv : `/${repoFromGh || defaultRepo}/`;

  return {
    base, // ключевой момент для GitHub Pages подкаталога
    plugins: [
      react(),
      analyze &&
        visualizer({
          filename: "dist/stats.html",
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/_variables.scss" as *;\n`,
        },
      },
    },

    server: {
      open: true,
      port: 3000,
    },

    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./src/test/setup.ts"],
      css: true,
    },
  };
});
