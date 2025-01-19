// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
    site: 'https://luckkrit.github.io',
    base: '/cos1101',
    integrations: [starlight({
        title: 'COS1101',
        social: {
            // github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            // {
            // 	label: 'Guides',
            // 	items: [
            // 		// Each item here is one entry in the navigation menu.
            // 		{ label: 'Example Guide', slug: 'guides/example' },
            // 	],
            // },
            // {
            // 	label: 'Reference',
            // 	autogenerate: { directory: 'reference' },
            // },
            {
                label: 'Labs',
                autogenerate: { directory: 'labs' },
            },
        ],
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/kbd.css',
            './src/tailwind.css',
        ],
    }), tailwind({
        applyBaseStyles: false,
    })],
});