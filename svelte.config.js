import preprocess from 'svelte-preprocess';
import adapterCFW from '@sveltejs/adapter-cloudflare-workers';
import { defineConfig } from 'vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: true
    }),

    kit: {
        files: {
            assets: "public"
        },
        adapter: adapterCFW(),
        target: '#svelte',
        vite: () => {
            return defineConfig({
                server: {
                    hmr: {
                        port: 3000,
                        host: "localhost",
                        open: true
                    }
                }
            })
        }
    }
}

export default config;