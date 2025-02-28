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
			favicon: '/src/assets/logo.png',
			logo: {
				src: '/public/favicon.png',
			},
			head: [{
				tag: 'script',
				content: `
				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "qgzywq6kv3");
				`,
			}],
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
