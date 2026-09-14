"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Download,
    Languages,
    Menu,
    X,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navItems = {
    es: [
        ["Inicio", "/#inicio"],
        ["Sobre mí", "/#sobre-mi"],
        ["Experiencia", "/#experiencia"],
        ["Proyectos", "/#proyectos"],
        ["Tecnologías", "/#tecnologias"],
        ["Formación", "/#formacion"],
        ["Contacto", "/#contacto"],
    ],
    en: [
        ["Home", "/#inicio"],
        ["About", "/#sobre-mi"],
        ["Experience", "/#experiencia"],
        ["Projects", "/#proyectos"],
        ["Technologies", "/#tecnologias"],
        ["Education", "/#formacion"],
        ["Contact", "/#contacto"],
    ],
};

export default function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const content = {
        es: {
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
            changeLanguage: "Cambiar idioma a inglés",
            downloadCV: "Descargar CV",
        },
        en: {
            openMenu: "Open menu",
            closeMenu: "Close menu",
            changeLanguage: "Change language to Spanish",
            downloadCV: "Download CV",
        },
    };

    const t = content[language];

    function closeMobileMenu() {
        setMobileMenuOpen(false);
    }

    function handleLanguageChange() {
        toggleLanguage();
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <Link
                        href="/#inicio"
                        onClick={closeMobileMenu}
                        className="text-xl font-bold tracking-tight text-foreground"
                        aria-label="Brayan Suarez"
                    >
                        BS<span className="text-primary">.</span>
                    </Link>

                    {/* Navegación de escritorio */}
                    <div className="hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8">
                        {navItems[language].map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className="transition-colors hover:text-foreground"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Controles */}
                    <div className="flex items-center gap-2">
                        {/* Idioma escritorio */}
                        <button
                            type="button"
                            onClick={handleLanguageChange}
                            aria-label={t.changeLanguage}
                            className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-muted transition hover:border-primary/40 hover:text-foreground sm:flex"
                        >
                            <Languages size={15} />
                            {language.toUpperCase()}
                        </button>

                        {/* Tema */}
                        <div className="hidden sm:block">
                            <ThemeToggle />
                        </div>

                        {/* CV escritorio */}
                        <Button
                            href="/Brayan-Suarez-CV.pdf"
                            download="Brayan-Suarez-CV.pdf"
                            className="hidden rounded-lg px-4 py-2 xl:inline-flex"
                        >
                            {t.downloadCV}
                            <Download size={15} />
                        </Button>

                        {/* Menú móvil */}
                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen((current) => !current)
                            }
                            aria-expanded={mobileMenuOpen}
                            aria-label={
                                mobileMenuOpen
                                    ? t.closeMenu
                                    : t.openMenu
                            }
                            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted transition hover:border-primary/40 hover:text-foreground lg:hidden"
                        >
                            {mobileMenuOpen ? (
                                <X size={20} />
                            ) : (
                                <Menu size={20} />
                            )}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Menú móvil desplegable */}
            <div
                className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${mobileMenuOpen
                        ? "max-h-[650px] border-t opacity-100"
                        : "max-h-0 border-t-0 opacity-0"
                    }`}
            >
                <Container>
                    <div className="py-5">
                        <div className="flex flex-col">
                            {navItems[language].map(([label, href]) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface-elevated hover:text-foreground"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-4 border-t border-border pt-4">
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={handleLanguageChange}
                                    aria-label={t.changeLanguage}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition hover:border-primary/40 hover:text-foreground"
                                >
                                    <Languages size={17} />
                                    {language.toUpperCase()}
                                </button>

                                <div className="flex items-center justify-center rounded-xl border border-border">
                                    <ThemeToggle />
                                </div>
                            </div>

                            <Button
                                href="/Brayan-Suarez-CV.pdf"
                                download="Brayan-Suarez-CV.pdf"
                                className="mt-3 w-full"
                            >
                                {t.downloadCV}
                                <Download size={16} />
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}