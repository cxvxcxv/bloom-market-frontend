import type { Config } from 'tailwindcss';

import { COLORS } from './src/constants/color.constants';

const config: Config = {
  darkMode: 'media',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: COLORS,
    extend: {
      spacing: {
        sidebar: '30rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        DEFAULT: '266ms',
      },
    },
  },
  plugins: [],
};
export default config;
