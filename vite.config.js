import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

const normalizeBase = (value = "") => {
  if (value === "" || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

export default defineConfig({
  base: normalizeBase(process.env.BASE_PATH),
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "about/index.html"),
        visit: resolve(rootDir, "visit/index.html"),
        inquiries: resolve(rootDir, "inquiries/index.html"),
        inquires: resolve(rootDir, "inquires/index.html"),
      },
    },
  },
});
