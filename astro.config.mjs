// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://lumen-media.github.io',
	base: '/docs/',
	trailingSlash: 'always',
	output: 'static',
	integrations: [
		starlight({
			title: 'Lumen-media Docs',
			description: 'Centralized documentation for Lumen-media organization',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Lumen-media' },
			],
			sidebar: [
				{
					label: 'Lumen',
					items: [
						{ label: 'Overview', slug: 'lumen/overview' },
						{ label: 'Getting Started', slug: 'lumen/getting-started' },
					],
				},
				{
					label: 'Module SDK',
					items: [
						{ label: 'Overview', slug: 'module-sdk/overview' },
						{ label: 'API Reference', slug: 'module-sdk/api' },
					],
				},
				{
					label: 'Community Modules',
					items: [
						{ autogenerate: { directory: 'community-modules' } }
					],
				},
				{
					label: 'Locales',
					items: [
						{ autogenerate: { directory: 'lumen-locales' } }
					],
				},
				{
					label: 'Rust API Docs',
					items: [
						{ label: 'Lumen', link: '/rust/lumen/' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/Lumen-media/docs/edit/main/',
			},
		}),
	],
});