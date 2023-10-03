/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				bgmain: {
					DEFAULT: '#020534',
				},
				mainblue: {
					DEFAULT: '#1aa9ff'
				}
			},
			fontFamily: {
				'syne-regular': ['Syne-Regular', 'system-ui', 'sans-serif'],
				'syne-bold': ['Syne-Bold', 'system-ui', 'sans-serif'],
				'syne-medium': ['Syne-Medium', 'system-ui', 'sans-serif'],
				'general-sans-regular': ['GeneralSans-Regular', 'system-ui', 'sans-serif'],
				'general-sans-bold': ['GeneralSans-Bold', 'system-ui', 'sans-serif'],
				'general-sans-medium': ['GeneralSans-Medium', 'system-ui', 'sans-serif']
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	]
}
