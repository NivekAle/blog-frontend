/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			colors: {
				roxo: {
					'50': '#faf2fc',
					'100': '#f1e1f7',
					'200': '#ddb9ed',
					'300': '#c692e0',
					'400': '#9850cc',
					'500': '#6918b4',
					'600': '#5914a3',
					'700': '#440e87',
					'800': '#33096e',
					'900': '#210552',
					'950': '#130236'
				},
				'perfume': {
					'50': '#fefcff',
					'100': '#fdfaff',
					'200': '#faf2ff',
					'300': '#f5e8ff',
					'400': '#ead9ff',
					'500': '#dbc8ff',
					'600': '#b8a1e6',
					'700': '#876fbf',
					'800': '#5f4899',
					'900': '#3b2873',
					'950': '#1e114a'
				}
			}
		},
	},
	plugins: [],
}