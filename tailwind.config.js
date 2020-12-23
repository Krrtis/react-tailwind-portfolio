module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			dark: {
				900: 'rgba(24, 24, 24, 1)',
				800: 'rgba(48, 48, 48, 0.7)',
				700: '#49494a',
				primarytext: '#ffffff',
				secondarytext: '#dedede',
				disabledtext: '#bababa',
			},
			light: {
				900: '#E6E6E6',
				800: '#CCCCCC',
				700: '#B3B3B3',
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
