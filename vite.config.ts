import { defineConfig } from "vite";

export default defineConfig({
  base: "/ts-hw-05/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        page1: "src/html/task-01.html",
        page2: "src/html/task-02.html",
        page3: "src/html/task-03.html",
        page4: "src/html/task-04.html",
        page5: "src/html/task-05.html",
      },
    },
  },
});
