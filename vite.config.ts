import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/portafolio-alli/",
  server: {
    host: "::",//hace que el servidor sea accesible desde cualquier dirección IP (no solo localhost)
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});