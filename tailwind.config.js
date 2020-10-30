const { fontFamily: defaultFonts } = require('tailwindcss/defaultTheme')

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: false
	},

	purge: ['./src/**/*.jsx', './src/**/*.css', './src/**/*.js'],

	theme: {
		colors: {
			blue: {
				300: '#F5F7FF',
				600: '#0083FF'
			},
			transparent: 'transparent'
		},
		fontFamily: {
			rtl:
				'Tajawal, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
		}
	}
}
