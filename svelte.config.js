import preprocess from 'svelte-preprocess';
import adapterCFW from '@sveltejs/adapter-cloudflare-workers';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: true
    }),

    kit: {
        files: {
            assets: "static"
        },
        adapter: adapterCFW(),
        target: '#svelte',
    },

    vite: defineConfig(({ command }) => {
        if (command == "build") {
            return {
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
            }
        } else {
            return {
                server: {
                    hmr: {
                        port: 3000,
                        host: "localhost",
                        https: true,
                        open: true
                    }
                }
            }
        }
    })
}

export default config;