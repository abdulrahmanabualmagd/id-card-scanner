import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"), // => import { index... } from '@/components';
            components: path.resolve(__dirname, "./src/components/index.jsx"),
            pages: path.resolve(__dirname, "./src/pages/index.jsx"),
            contexts: path.resolve(__dirname, "./src/contexts/index.jsx"),
            routes: path.resolve(__dirname, "./src/routes.jsx"),
            globalStyles: path.resolve(__dirname, "./src/style/style.jsx"),
            css: path.resolve(__dirname, "./src/lib/css/index.css"),
            utils: path.resolve(__dirname, "./src/utils/index.js"),
            apis: path.resolve(__dirname, "./src/api/index.js"),
            services: path.resolve(__dirname, "./src/services/index.js"),
            svgs: path.resolve(__dirname, "./src/svgs/index.js"),
        },
    },
});
