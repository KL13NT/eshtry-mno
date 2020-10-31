module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: false
	},

	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				blue: {
					300: '#F5F7FF',
					400: '#e5f2ff',
					600: '#0083FF'
				},
				transparent: 'transparent'
			},
			fontFamily: {
				rtl:
					'Tajawal, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
			}
		}
	},
	variants: {},
	plugins: []
}
