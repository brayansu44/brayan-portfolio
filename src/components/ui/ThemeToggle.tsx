"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "dark";
    }

    const savedTheme = localStorage.getItem(
        "theme"
    ) as Theme | null;

    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dark"
        : "light";
}

export default function ThemeToggle() {
    const [theme, setTheme] =
        useState<Theme>(getInitialTheme);

    function toggleTheme() {
        const nextTheme: Theme =
            theme === "dark" ? "light" : "dark";

        setTheme(nextTheme);

        localStorage.setItem(
            "theme",
            nextTheme
        );

        document.documentElement.classList.toggle(
            "dark",
            nextTheme === "dark"
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={
                theme === "dark"
                    ? "Cambiar a modo claro"
                    : "Cambiar a modo oscuro"
            }
            title={
                theme === "dark"
                    ? "Cambiar a modo claro"
                    : "Cambiar a modo oscuro"
            }
            className="rounded-lg border border-border p-2 text-muted transition hover:border-primary/40 hover:text-foreground"
        >
            {theme === "dark" ? (
                <Sun size={16} />
            ) : (
                <Moon size={16} />
            )}
        </button>
    );
}