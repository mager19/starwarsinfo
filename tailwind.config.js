/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			background: "#100b0e",
			gray: {
				DEFAULT: "#393438",
				light: "#645D65",
			},
			"spacial-blue": "#3E73AD",
			light: "#D6DFE7",
			orange: "#B98256",
			bobba: "#6E989E",
		},
		extend: {},
	},
	plugins: [],
};
