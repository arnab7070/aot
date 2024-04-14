/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
  plugins: [require("tailwindcss-animate")],
}