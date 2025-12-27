import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        ring: 'var(--ring)',
        gold: {
          50: '#fdf9ef',
          100: '#f9f0d3',
          200: '#f2dea6',
          300: '#e9c76f',
          400: '#e2af42',
          500: '#d69628',
          600: '#bf771f',
          700: '#9e591c',
          800: '#81471d',
          900: '#6a3b1b',
          950: '#3c1d0b',
        },
        rose: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d9',
          300: '#f4a9b8',
          400: '#ed7892',
          500: '#e14d70',
          600: '#cc2c5a',
          700: '#ab204a',
          800: '#901e42',
          900: '#7b1d3d',
          950: '#450b1e',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f8f1e4',
          300: '#f2e4ce',
          400: '#e9d0ae',
          500: '#deb98f',
          600: '#d09e6f',
          700: '#b8805a',
          800: '#96674c',
          900: '#7a5540',
          950: '#412a21',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 30s linear infinite reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(214, 150, 40, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(214, 150, 40, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #d69628 0%, #e9c76f 50%, #d69628 100%)',
        'rose-gradient': 'linear-gradient(135deg, #cc2c5a 0%, #ed7892 50%, #cc2c5a 100%)',
        'cream-gradient': 'linear-gradient(135deg, #f8f1e4 0%, #fefdfb 50%, #f8f1e4 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(38, 64%, 50%, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(355, 70%, 55%, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(38, 64%, 50%, 0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(214, 150, 40, 0.3)',
        'glow-lg': '0 0 60px rgba(214, 150, 40, 0.4)',
        'inner-glow': 'inset 0 0 40px rgba(214, 150, 40, 0.1)',
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
