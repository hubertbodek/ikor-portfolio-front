const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '400px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0077b6',
					light: '#0096c7',
					dark: '#023e8a',
				},
				secondary: {
					DEFAULT: '#ff6d00',
					light: '#ff8500',
					dark: '#f55200',
				},
			},
			fontFamily: {
				poppins: ["'Sora', sans-serif"],
			},
		},
		variants: {},
		plugins: [],
	},
};
