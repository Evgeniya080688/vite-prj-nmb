import { defineConfig } from "vite";
import { resolve } from 'path'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const FRONT_PATH = 'src';


export default defineConfig({
    base: "/vite-prj-nmb/",
    root: 'src',
    plugins: [
        createSvgSpritePlugin({
            svgFolder: resolve(__dirname,`${FRONT_PATH}/assets/images/svg`),
        }),
        ViteImageOptimizer({
            jpg: {
                quality: 75
            },
            png: {
                quality: 75
            },
            jpeg: {
                quality: 75
            }
        })
    ],    
    test: {
        // Здесь можно настроить параметры Vitest
        globals: true, // Включает использование глобальных функций тестирования, таких как describe и it
        environment: "jsdom", // Среда тестирования, например, jsdom для тестирования DOM
        setupFiles: "./vitest.setup.js", // Путь к файлу настройки (если требуется)
        coverage: {
            exclude: ["node_modules/"], // Исключаемые файлы и папки
        },
    },
    build: {
        minify: true,
        cssMinify: true,
        rolldownOptions: {
            input: {
                index: resolve(__dirname, `${FRONT_PATH}/index.html`),
                catalog: resolve(__dirname, `${FRONT_PATH}/html/catalog/index.html`),
                about: resolve(__dirname, `${FRONT_PATH}/html/about/index.html`),
            }
        }
    }
});