import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [require('../../libs/ui/tailwind.config')],
  content: ['./**/*.{ts,tsx}', '../../libs/ui/**/*.{ts,tsx}'],
};
export default config;
