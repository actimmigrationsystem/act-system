import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
