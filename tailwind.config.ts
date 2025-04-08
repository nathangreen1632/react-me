import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [],
};

export default config;
