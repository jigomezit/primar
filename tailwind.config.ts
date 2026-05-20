import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        red: {
          DEFAULT: '#DC2626',
        },
        cream: '#F5F1EA',
        ink: '#1A1A1A',
        gold: '#B8924A',
        charcoal: '#0F0F0F',
        electric: '#FFE600',
      },
      fontFamily: {
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'fraunces': ['var(--font-fraunces)', 'serif'],
        'jakarta': ['var(--font-jakarta)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'grotesk': ['var(--font-grotesk)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config

