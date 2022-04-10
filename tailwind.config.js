module.exports = {
	important: true,
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['ff-real-headline-pro', 'Helvetica', 'Arial', 'sans-serif'],
			},
      fontSize: {
        'h1': ['var(--h1-font-size)', {
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--h1-font-weight)'
        }],
        'h2': ['var(--h2-font-size)', {
          lineHeight: 'var(--h2-line-height)',
          fontWeight: 'var(--h2-font-weight)'
        }],
        'h3': ['var(--h3-font-size)', {
          lineHeight: 'var(--h3-line-height)',
          fontWeight: 'var(--h3-font-weight)'
        }],
        'h4': ['var(--h4-font-size)', {
          lineHeight: 'var(--h4-line-height)',
          fontWeight: 'var(--h4-font-weight)'
        }],
        'h5': ['var(--h5-font-size)', {
          lineHeight: 'var(--h5-line-height)',
          fontWeight: 'var(--h5-font-weight)'
        }],
        'h6': ['var(--h6-font-size)', {
          lineHeight: 'var(--h6-line-height)',
          fontWeight: 'var(--h6-font-weight)'
        }],
        'body': ['var(--body-font-size)', {
          lineHeight: 'var(--body-line-height)',
          fontWeight: 'var(--body-font-weight)'
        }],
        'body-2': ['var(--body-2-font-size)', {
          lineHeight: 'var(--body-2-line-height)',
          fontWeight: 'var(--body-2-font-weight)'
        }],
        'subtitle-1': ['var(--subtitle-1-font-size)', {
          lineHeight: 'var(--subtitle-line-height)',
          fontWeight: 'var(--subtitle-font-weight)'
        }],
        'subtitle-2': ['var(--subtitle-2-font-size)', {
          lineHeight: 'var(--subtitle-2-line-height)',
          fontWeight: 'var(--subtitle-2-font-weight)'
        }],
        'small': ['var(--small-font-size)', {
          lineHeight: 'var(--small-line-height)',
          fontWeight: 'var(--small-font-weight)'
        }],
        'tiny': ['var(--tiny-font-size)', {
          lineHeight: 'var(--tiny-line-height)',
          fontWeight: 'var(--tiny-font-weight)'
        }]
      },
			colors: {
				'black': 'var(--color-black)',
				'white': 'var(--color-white)',
				'gray-001': 'var(--color-gray-001)',
				'gray-002': 'var(--color-gray-002)',
				'black': 'var(--color-black)',
				'white': 'var(--color-white)',
				'gray-001': 'var(--color-gray-001)',
				'gray-002': 'var(--color-gray-002)',
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)',
				'innershadow': 'var(--color-innershadow)',
				'outershadow': 'var(--color-outershadow)',
			},
			boxShadow: {
				'outer': '0px 3px 6px var(--color-outershadow)',
				'inner': 'inset 0px 3px 6px var(--color-innershadow)',
			},
			width: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			minWidth: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			maxWidth: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			height: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			minHeight: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			maxHeight: {
				'24px': '24px',
				'40px': '40px',
				'48px': '48px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'100px': '100px',
				'120px': '120px',
				'150px': '150px',
				'240px': '240px',
				'320px': '320px',
				'360px': '360px',
			},
			borderRadius: {
				'default': 'var(--border-radius)'
			},
			screens: {
				'sm': '517px',
				'md': '769px',
				'lg': '1025px',
				'xl': '1281px',
			},
		},
	},
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: true,
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js', './**/*.html'],
    options: {
      safelist: {
        standard: [/([a-zA-Z0-9\-:_])*/],
        deep: [/([a-zA-Z0-9\-:_])*/],
        greedy: [/([a-zA-Z0-9\-:_/])*/],
      }
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    }
  }
}