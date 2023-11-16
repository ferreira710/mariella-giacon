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
                text: '#101b0e',
                background: '#ecf4eb',
                primary: '#77b36f',
                secondary: '#cde3ca',
                accent: '#4f8547',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
