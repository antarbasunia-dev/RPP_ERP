import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        // ── Standard Green-Blue Corporate Palette ──
        primary: {
          DEFAULT: "#0d9488", // Teal 600
          foreground: "#ffffff",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          50: "#ecfeff",
          100: "#cffafe",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        // ── Standardized Header & Navigation Color Roles ──
        "topbar-bg": "var(--topbar-bg)",
        "topbar-fg": "var(--topbar-fg)",
        "sidebar-bg": "var(--sidebar-bg)",
        "sidebar-fg": "var(--sidebar-fg)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-hover": "var(--sidebar-hover)",
        "sidebar-active": "var(--sidebar-active)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "topbar": "0 4px 20px -2px rgba(8, 63, 76, 0.15)",
        "sidebar": "2px 0 16px -2px rgba(13, 148, 136, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
