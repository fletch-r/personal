/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cals: ['Cal Sans'],
        inter: ['Inter']
      },
      colors: {
        steal: {
          main: '#202426',
          '50': '#FBFBFB',
          '100': '#EEF0F1',
          '200': '#c3cbcc',
          '300': '#9da8ab',
          '400': '#788589',
          '500': '#5e696e',
          '600': '#4a5357',
          '700': '#3d4548',
          '800': '#34393b',
          '900': '#2e3133',
          '950': '#202426',
        },
        denim: {
          main: '#2d5ca9',
          '50': '#f3f5fc',
          '100': '#e6ecf8',
          '200': '#c8d7ef',
          '300': '#97b5e2',
          '400': '#5f8ed1',
          '500': '#3b70bc',
          '600': '#2d5ca9',
          '700': '#234681',
          '800': '#213c6b',
          '900': '#20355a',
          '950': '#15213c',
        },
        oxford: {
          main: '#3e4b5c',
          '50': '#f3f6f8',
          '100': '#e1e7ec',
          '200': '#c6d2db',
          '300': '#9fb1c1',
          '400': '#7089a0',
          '500': '#556d85',
          '600': '#495b71',
          '700': '#3e4b5c',
          '800': '#3a4350',
          '900': '#333a46',
          '950': '#1f242d',
        },
        javascript: {
          main: '#F1E05A'
        },
        typescript: {
          main: '#3077C6'
        }
      },
      keyframes: {
        "slide-up-40": {
          "0%": {
            transform: "translateY(40px)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
            visibility: "visible"
          }
        }
      },
      animation: {
        "slide-up": "0.5s ease-in-out slide-up-40",
        "slide-up-1": "0.5s ease-in-out 0.1s 1 forwards slide-up-40",
        "slide-up-2": "0.5s ease-in-out 0.2s 1 forwards slide-up-40",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}
