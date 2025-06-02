import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: './', // Carpeta con los archivos fuente
    build: {
        outDir: 'assets/built', // Carpeta de salida
        emptyOutDir: true, // Limipia la carpeta built antes de compilar
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'scripts/main.ts'),
                style: path.resolve(__dirname, 'styles/screen.css'),
            },
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'screen.css',
            }
        }
    },
    css: {
        postcss: './postcss.config.js', // Configuración de PostCSS para tailwind
    }
});