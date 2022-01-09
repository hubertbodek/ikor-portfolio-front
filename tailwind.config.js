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
					DEFAULT: '#219ebc',
					light: '#8acae6',
					dark: '#023047',
				},
				secondary: {
					DEFAULT: '#fb8500',
					light: '#ffb703',
				},
			},
			fontFamily: {
				josefin: ["'Josefin Sans', sans-serif"],
			},
		},
		variants: {},
		plugins: [],
	},
};
