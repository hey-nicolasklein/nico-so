/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    dark: "media",
    theme: {
        fontFamily: {
            sans: [
                "Poppins",
                "sans-serif",
                '"Helvetica Neue"',
                "Arial",
                '"Apple Color Emoji"',
            ],
            serif: ["Merriweather", "serif"],
            mono: ["Space Grotesk", "mono"],
        },
        extend: {
            fontSize: {
                title: "11rem",
                "title-large": "14rem",
            },
            dropShadow: {
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.25)",
                    "0 45px 65px rgba(0, 0, 0, 0.15)",
                ],
                nav: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
            animation: {
                "spin-slow": "spin 25s linear infinite",
                "pulse-slow-3": "pulse 5s linear infinite",
                "pulse-slow-5": "pulse 7s linear infinite",
                "pulse-slow-7": "pulse 9s linear infinite",
                sideways: "sideways 1s ease-in-out infinite",
                "fade-in-l": "fade-in-l 1s ease-in-out",
                "fade-in-r": "fade-in-r 1s ease-in-out",
                "fade-in-l-slow": "fade-in-l 2s ease-in-out",
                "fade-in-r-slow": "fade-in-r 2s ease-in-out",
                "scale-in": "scale 1s ease-in-out",
                "twist-in": "twist-in 1s ease-in-out",
                "fade-in-up": "fade-in-up 2000ms ease-in-out",
                rotations: "rotations 120s linear infinite",
                rotationsRev: "rotationsRev 120s linear infinite",
            },
            keyframes: {
                sideways: {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                    },
                    "50%": {
                        transform: "translateX(0)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: 100,
                        transform: "translateY(0)",
                    },
                },
                "fade-in-l": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(100px) translateX(-100px)",
                    },
                    "100%": {
                        opacity: 100,
                        transform: "translateY(0) translateX(0)",
                    },
                },
                "fade-in-r": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(100px) translateX(100px)",
                    },
                    "100%": {
                        opacity: 100,
                        transform: "translateY(0) translateX(0)",
                    },
                },
                scale: {
                    "0%": {
                        opacity: 0,
                        transform: "scale(0.95) translateY(100px)",
                    },
                    "100%": {
                        opacity: 100,
                        transform: "scale(1) translateY(0)",
                    },
                },
                "twist-in": {
                    "0%": {
                        transform: "rotate(-15deg)",
                    },
                    "100%": {
                        transform: "rotate(0)",
                    },
                },
                rotations: {
                    to: {
                        transform: "rotate(360deg)",
                    },
                },
                rotationsRev: {
                    to: {
                        transform: "rotate(-360deg)",
                    },
                },
            },
            borderWidth: {
                DEFAULT: "1px",
                0: "0",
                2: "2px",
                3: "3px",
                4: "4px",
                6: "6px",
                8: "8px",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: colors.violet,
                white: colors.white,
                black: colors.black,
                gray: colors.gray,
                red: colors.red,
                blue: colors.sky,
                yellow: colors.amber,
                sky: colors.sky,
                emerald: colors.emerald,
                rose: colors.rose,
                orange: colors.orange,
                pink: colors.pink,
                slate: colors.slate,
                background: "#08070b",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
