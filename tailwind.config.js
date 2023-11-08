import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                profileImage: '1112px',
            },
            fontFamily: {
                saudagar: ['Saudagar'],
            },
            colors: {
                bg: {
                    DEFAULT: '#f7fafc',
                },
                container: {
                    DEFAULT: '#f0fdf5',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
