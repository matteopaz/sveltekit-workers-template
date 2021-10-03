import preprocess from 'svelte-preprocess';
import adapterCFW from '@sveltejs/adapter-cloudflare-workers';
import nested from 'postcss-nested';
import calc from 'postcss-calc';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        sourceMap: false,
        postcss: {
            plugins: [
                nested,
                calc,
                postcssPresetEnv({ stage: 2 }),
                autoprefixer
            ]
        }
    }),

    kit: {
        files: {
            assets: "static"
        },
        adapter: adapterCFW(),
        target: '#svelte',
    },

    vite: ({ mode }) => {
        return defineConfig({
            plugins: [
                viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
            ],
            server: {
                hmr: {
                    port: 3000,
                    host: "localhost",
                    https: true,
                    open: true
                }
            }
        })
    }
}

export default config;