// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://aishwarya.weds.sahilarora.in',
	integrations: [
		starlight({
			title: 'Aishwarya Weds Sahil ❤️',
			description: 'Aishwarya & Sahil are getting married!',
			sidebar: [],
			customCss: ['./src/tailwind.css',
				'@fontsource/atma/400.css',
				'@fontsource/atma/500.css',
				'@fontsource/atma/600.css',
				'@fontsource/atma/700.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
