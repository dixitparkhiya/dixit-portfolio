import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'retro-2': 'linear-gradient(90.42deg, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
        'header-gradient': "url('/images/header-gradient.svg')",
        'footer-gradient': "url('/images/footer-gradient.svg')",
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
      },
      skew: {
        20: '20deg'
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        handwrite: 'var(--font-caveat)'
      },
      colors: {
        'retro-2c': '#566CEC',
        neutral: {
          1000: 'rgba(6, 6, 6)'
        },
        brand: {
          email: 'hsl(var(--email-color))',
          github: 'hsl(var(--github-color))',
          codepen: 'hsl(var(--codepen-color))',
          linkedin: 'hsl(var(--linkedin-color))',
          'stack-overflow': 'hsl(var(--stack-overflow-color))',
          reddit: 'hsl(var(--reddit-color))',
          twitter: 'hsl(var(--twitter-color))',
          instagram: 'hsl(var(--instagram-color))',
          arch: 'hsl(var(--arch-color))'
        }
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        typing: 'typing 1.8s ease-in .8s 1 normal both',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        shine: 'shine 4s linear 0s forwards',
        'custom-fade-down': 'custom-fade-down 200ms linear',
        'slide-left': 'slide-left 70ms linear',
        'slide-right': 'slide-right 70ms linear',
        'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 30s) linear infinite',
        'background-fade': 'background-fade 20s linear infinite'
      },
      keyframes: {
        typing: {
          from: {
            width: '1'
          },
          to: {
            width: '22.7rem'
          }
        },
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' }
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)'
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        shine: {
          '20%, 100%': {
            transform: 'translateX(300%) skewX(-20deg)'
          }
        },
        'custom-fade-down': {
          '0%': {
            opacity: '0',
            transform:
              'translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            opacity: '1',
            transform:
              'translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'slide-right': {
          '0%': {
            transform:
              'translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            transform:
              'translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'slide-left': {
          '0%': {
            transform:
              'translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            transform:
              'translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        'background-fade': {
          '0%': { background: colors.blue['600'] },
          '25%': { background: colors.yellow['600'] },
          '50%': { background: colors.green['600'] },
          '75%': { background: colors.red['600'] },
          '100%': { background: colors.blue['600'] }
        }
      },
      scale: {
        flip: '-1'
      }
    },
    keyframes: {
      ...defaultTheme.keyframes,
      ping: {
        '0%': {
          transform: 'scale(1)'
        },
        '100%': {
          transform: 'scale(3)',
          opacity: '0'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-animate'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements'
    })
  ]
}

export default config
