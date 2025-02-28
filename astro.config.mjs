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
			favicon: '/src/assets/logo.png',
			logo: {
				src: '/src/assets/logo.png'
			},
			head: [{
				tag: 'script',
				content: `
				!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
				posthog.init('phc_HvSm9i8NO9E5IcOxzC3vUxFsQCeMBNHzTJCm3MQe7JT', {
					api_host: 'https://us.i.posthog.com',
					person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
				})`,
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
