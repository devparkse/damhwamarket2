/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        minHeight: {
            "1/2": "600px",
        },
        extend: {
            width: {
                imgwidth: "280px",
                filterwidth: "350px",
            },
            colors: {},
            fontWeight: {
                fw800: 800,
            },
            fontSize: {
                fs15: "15px",
            },
            spacing: {
                "84px": "84px",
            },
        },
    },
    plugins: [],
};
