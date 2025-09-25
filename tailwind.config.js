/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                'bs-pink': '#FBD3D9',
                'bs-teal': '#2DD4BF',
                'bs-purple': '#6D28D9',
                'bs-dark': '#0F172A'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        },
    },
    plugins: [],
}