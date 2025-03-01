// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://aishwarya.weds.sahilarora.in',
	server: {
		headers: {
			'access-control-allow-origin': '*',
		},
	},
	security: {
		checkOrigin: false,
	},
	integrations: [
		starlight({
			title: 'Aishwarya Weds Sahil ❤️',
			description: 'Aishwarya & Sahil are getting married!',
			favicon: '/favicon.png',
			logo: {
				src: '/src/assets/logo.png',
			},
			head: [{
				tag: 'script',
				attrs: {
					src: 'https://cloud.umami.is/script.js',
					'data-website-id': "439d83d7-0f48-4666-b189-bf1605056e45",
					defer: true,
				}
			}],
			sidebar: [
				{
					label: 'Event Guide',
					autogenerate: { directory: 'guides' },
				},
			],
			social: {
				github: 'https://github.com/sahilarora535/aishwarya-weds-sahil',
				email: 'mailto:aishwarya.weds@sahilarora.in',
			},
			customCss: ['./src/tailwind.css',
				'@fontsource/atma/400.css',
				'@fontsource/atma/500.css',
				'@fontsource/atma/600.css',
				'@fontsource/atma/700.css',
				'./src/styles/custom.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
