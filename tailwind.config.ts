import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      divider: '#494C5F',
      'interface-100': '#04091E',
      'interface-200': '#091530',
      'interface-300': '#16213B',
      'interface-400': '#090E22',
      primary: '#DAED1A',
      'primary-text': '#F5F5F5',
      secondary: '#FFC403',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      pink: '#FA59C9',
    },
    fontSize: {
      xxs: '0.625rem',
      xs: ['0.75rem', '1.5'],
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: ['1.25rem', '1.5'], // h5
      xl: ['1.5rem', '1.5'], // h4
      '2xl': ['2.25rem', '1.2'], // h3
      '2.5xl': ['2.5rem', '1.2'],
      '3xl': ['3rem', '1.2'], // h2
      '3.5xl': ['3.75rem', '1.3'],
      '4xl': ['4.5rem', '1.3'], // h1
    },
    extend: {
      backgroundSize: {
        'full': '100%',
      },
      borderWidth: {
        3: '3px',
      },
      maxWidth: {
        '1920px': '1920px',
      },
      spacing: {
        unset: 'unset',
      },
      transitionProperty: {
        size: 'width, height',
      },
      width: {
        108: '27rem',
        128: '32rem',
        168: '42rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        'minus-1': '-1',
      },
    },
  },
  plugins: [],
};
export default config;
