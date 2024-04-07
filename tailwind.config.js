/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': {'max': '375px'},

            'md': {'max': '475px'},

            'lg': {'max': '768px'},

            'xl': {'max': '1024px'},

            '2xl': {'min': '1440px'},
        },
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"]
            }
        },
    },
    plugins: [],
}