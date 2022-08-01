import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "npm",
  define: {
    NAME: "ha",
  },
  history: { type: "hash" },
  locale: {
    antd: false,
  },
  plugins: ["@umijs/plugins/dist/locale"],
});
