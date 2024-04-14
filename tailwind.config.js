/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'egyptian_blue': {
          DEFAULT: '#0a369d',
          100: '#020b20',
          200: '#04163f',
          300: '#06215f',
          400: '#082c7f',
          500: '#0a369d',
          600: '#0e4dde',
          700: '#3e74f3',
          800: '#7fa3f7',
          900: '#bfd1fb'
        },
        'wisteria': {
          DEFAULT: '#bfafe9',
          100: '#1f1240',
          200: '#3d2380',
          300: '#5c35c0',
          400: '#8d6fd8',
          500: '#bfafe9',
          600: '#ccbfed',
          700: '#d9cff2',
          800: '#e6dff6',
          900: '#f2effb'
        },
        'baby_powder': {
          DEFAULT: '#fdfffc',
          100: '#226500',
          200: '#43ca00',
          300: '#75ff30',
          400: '#b8ff95',
          500: '#fdfffc',
          600: '#fcfffb',
          700: '#fdfffc',
          800: '#fefffd',
          900: '#fefffe'
        },
        'vanilla': {
          DEFAULT: '#f5ee9e',
          100: '#494308',
          200: '#92870f',
          300: '#dbca17',
          400: '#ede155',
          500: '#f5ee9e',
          600: '#f7f1b1',
          700: '#f9f5c5',
          800: '#fbf8d8',
          900: '#fdfcec'
        },
        'tomato': {
          DEFAULT: '#f06543',
          100: '#390f05',
          200: '#711e09',
          300: '#aa2d0e',
          400: '#e23c12',
          500: '#f06543',
          600: '#f38468',
          700: '#f6a38e',
          800: '#f9c1b4',
          900: '#fce0d9'
        }
      }
    },
  },
  plugins: [],
};
