import { defineConfig } from "umi";
("umi");
export default defineConfig({
  npmClient: "npm",
  define: {
    NAME: "local",
  },
  forkTSChecker: {},
});
