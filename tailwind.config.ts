import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)", ...fontFamily.sans]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			shine: 'shine var(--duration) infinite linear',
  			gradient: 'gradient 8s linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		backgroundImage: {
  			'retro-2': 'linear-gradient(90.42deg, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
  			'floral-1': 'linear-gradient(90deg, #FF4E9C 0%, #EA29DE 31.93%, #B723D8 63.03%, #5606EF 100%)',
  			'floral-2': 'linear-gradient(90deg, #8D2DE3 0%, #FF2497 97.34%)',
  			'grass-1': 'linear-gradient(90deg, #782AFD 0%, #2771F3 33.33%, #00B4E4 66.67%, #00D8B2 100%)',
  			'grass-2': 'linear-gradient(90deg, #1C45A6 0%, #44B5A2 50%, #D4FBB5 100%)',
  			'grass-3': 'linear-gradient(90deg, #FFDC27 0%, #46E3B7 95%)',
  			'dreamy-1': 'linear-gradient(73.19deg, #DC79FF 0%, #256BFA 95.06%)',
  			'dreamy-2': 'linear-gradient(96.01deg, #455EB5 10.43%, #5643CC 53.88%, #673FD7 97.33%)',
  			'rainbow-1': 'linear-gradient(90deg, #00DAF4 0%, #5EDC99 20%, #BADA6D 40%, #FFC800 60%, #FFAF00 80%, #FF7800 100%)',
  			'rainbow-2': 'linear-gradient(90deg, #DC36FA 0%, #A167EF 25%, #609FE4 50%, #3ABFDE 75%, #04D18E 100%)',
  			'retro-1': 'linear-gradient(69.55deg, #D400A5 12.23%, #1E76C9 55.91%, #35FCED 92.87%)',
  			'retro-3': 'linear-gradient(90deg, #566cec, #d749af 50%, #ff7c51)',
  			'sky-1': 'linear-gradient(90deg, #80D0F2 0%, #5C82FF 50%, #C480FF 100%)',
  			'sky-2': 'linear-gradient(90deg, #47189C 0%, #3861BC 50%, #80D6E1 100%)',
  			'sky-3': 'linear-gradient(90deg, #1584EB 0%, #24D6D9 97.34%)',
  			'rose-1': 'linear-gradient(73.19deg, #DF51AD 0%, #EB587D 95.06%)',
  			'rose-2': 'linear-gradient(73.19deg, #AE41C5 0%, #EA29DE 95.06%)',
  			'sunset-1': 'linear-gradient(90deg, #FFC800 0%, #FB6A19 50%, #FF0063 100%)',
  			'sunset-2': 'linear-gradient(90deg, #F06844 0%, #EE4C54 25%, #D45E95 50%, #9C6CA6 75%, #6583C1 100%)',
  			'sunset-3': 'linear-gradient(90deg, #F7BE2B 0%, #F537F9 100%)',
  			'coffee-1': 'linear-gradient(258.32deg, #FBFBFD 0%, #E795B7 32.71%, #935893 65.43%, #224D88 98.14%)',
  			'coffee-2': 'linear-gradient(270deg, #FA6E6E 0%, #A3387E 48.88%, #224D88 97.75%)',
  			'coffee-3': 'linear-gradient(99.66deg, #E84E38 10.18%, #BA2CB8 92.84%)',
			'hover-bg'  :'linear-gradient(90deg,rgba(255,233,244,0.4) 0%,rgba(234,243,255,0.7) 100%)',
			'dl-bg' : 'linear-gradient(90deg,rgba(203,212,255,0.3) 0%,rgba(226,211,255,0.2) 100%)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
