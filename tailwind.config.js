/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0a192f",
                "light-navy": "#112240",
                "lightest-navy": "#233554",
                "custom-slate": "#8892b0",
                "light-slate": "#a8b2d1",
                "lightest-slate": "#ccd6f6",
                "off-white": "#e6f1ff",
                green: "#64ffda",
            },
            fontFamily: {
                sans: ["Inter", "Calibre", "San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
}
