/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: 'var(--color-bg-primary)',
                    secondary: 'var(--color-bg-secondary)',
                },
                surface: 'var(--color-surface)',
                border: 'var(--color-border)',
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent)',
                    muted: 'var(--color-accent-muted)',
                },
                success: 'var(--color-success)',
                error: 'var(--color-error)',
                heading: 'var(--color-heading)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                sm: '0.4rem',
                md: '0.8rem',
                lg: '1.2rem',
            },
            boxShadow: {
                soft: '0 20px 45px rgba(15, 23, 42, 0.45)',
            }
        },
    },
    plugins: [],
}
