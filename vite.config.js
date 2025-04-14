import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    root: 'assets', // Carpeta con los archivos fuente
    build: {
        outDir: 'built', // Carpeta de salida
        emptyOutDir: true, // Limipia la carpeta builr antes de compilar
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'assets/ts/main.ts'),
                style: path.resolve(__dirname, 'assets/css/screen.css'),
            },
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'screen.css',
            }
        }
    },
    css: {
        postcss: './postcss.config.js', // Configuración de PostCss para tailwind
    }
});