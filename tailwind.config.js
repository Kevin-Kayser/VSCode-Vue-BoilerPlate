module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ["./public/**/*.html", "./src/**/*.vue"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow: {
            card: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
        },
        flex: {
            "1/3": "1 0 33.333333%;"
        },
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                main: "var(--main)",
                background: "var(--background)",
                header: "var(--header)",
                accent: "var(--accent)"
            }
        }
    },
    variants: {
        extend: {
            boxShadow: ["hover"],
            opacity: ["disabled"],
            cursor: ["disabled"]
        }
    },
    plugins: []
};
