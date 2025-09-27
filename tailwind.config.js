/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                brandPurple: '#d791ff',
                brandBlue: '#3A5BC4',
                brandGreen: '#CDF4AF',
                brandWhite: '#ffffff',
                brandBlack: '#000000',
            },
            fontFamily: {
                sans: ['"Advent Pro"', 'ui-sans-serif', 'system-ui'],
                mono: ['"Source Code Pro"', 'ui-monospace', 'SFMono-Regular'],
            },
        },
    },
    plugins: [],
}