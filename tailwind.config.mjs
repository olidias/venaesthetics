/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Raleway", "Inter"],
				raleway: ["Raleway"]
			},
			backgroundImage: {
				'hero': "linear-gradient(to top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)), url('/hero-background.webp')",
			},

		},
		colors: {
			'primary-dark': '#24242E',
			'primary-darker': '#14141E',
			'primary': '#132892',
			'dark': '#2F3161',
			'light': '#FFFFFF',
			'light-background': '#FAFBFF',
			'outline-dark': 'hsla(223, 59%, 21%, 0.31)'
		},

	},
	plugins: [],
}
