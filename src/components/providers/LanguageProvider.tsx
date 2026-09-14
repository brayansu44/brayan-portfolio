"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
    language: Language;
    toggleLanguage: () => void;
}

interface LanguageProviderProps {
    children: ReactNode;
    initialLanguage?: Language;
}

const LanguageContext = createContext<
    LanguageContextValue | undefined
>(undefined);

export default function LanguageProvider({
    children,
    initialLanguage = "es",
}: LanguageProviderProps) {
    const [language, setLanguage] =
        useState<Language>(initialLanguage);

    function toggleLanguage() {
        const nextLanguage: Language =
            language === "es" ? "en" : "es";

        setLanguage(nextLanguage);

        localStorage.setItem(
            "language",
            nextLanguage
        );

        document.cookie = `language=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;

        document.documentElement.lang =
            nextLanguage;
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage debe usarse dentro de LanguageProvider"
        );
    }

    return context;
}