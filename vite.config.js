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