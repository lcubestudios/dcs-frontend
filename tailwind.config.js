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
				'black-001': 'var(--color-black-001)',
				'black-002': 'var(--color-black-002)',
				'black-003': 'var(--color-black-003)',
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)',
				'tertiary': 'var(--color-tertiary)',
				'accent': 'var(--color-accent)',
				'gray-002': 'var(--color-gray-002)',
				'gray-001': 'var(--color-gray-001)',
				'white': 'var(--color-white)',
				'innershadow': 'var(--color-innershadow)',
				'outershadow': 'var(--color-outershadow)',
				'bg-001': 'var(--primary-bgcolor)',
				'bg-002': 'var(--secondary-bgcolor)',
				'bg-003': 'var(--tertiary-bgcolor)',
				'text-001': 'var(--primary-textcolor)',
				'text-002': 'var(--secondary-textcolor)',
				'text-003': 'var(--tertiary-textcolor)',
				'btn-bg-001': 'var(--primary-button-bgcolor)',
				'btn-text-001': 'var(--primary-button-textcolor)',
				'btn-bg-002': 'var(--secondary-button-bgcolor)',
				'btn-text-002': 'var(--secondary-button-textcolor)',
				'btn-bg-disabled': 'var(--disabled-button-bgcolor)',
				'btn-text-disabled': 'var(--disabled-button-textcolor)',
				'loader-bg': 'var(--loader-bg)',
				'loader-fg': 'var(--loader-fg)',
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