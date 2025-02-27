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
			social: {
				github: 'https://github.com/sahilarora535/aishwarya-weds-sahil',
				email: 'mailto:aishwarya.weds@sahilarora.in',
			},
			sidebar: [],
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
