"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
    const { language } = useLanguage();

    const content = {
        es: {
            role: "Desarrollador Backend",
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
            builtBy: "Diseñado y desarrollado por Brayan Suarez.",
        },

        en: {
            role: "Backend Developer",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            builtBy: "Designed and developed by Brayan Suarez.",
        },
    };

    const t = content[language];

    return (
        <footer className="border-t border-border py-8">
            <Container>
                <div className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    {/* Brand */}
                    <div className="min-w-0">
                        <Link
                            href="/#inicio"
                            className="inline-block text-lg font-bold tracking-tight text-foreground"
                            aria-label="Brayan Suarez"
                        >
                            BS<span className="text-primary">.</span>
                        </Link>

                        <p className="mt-2 leading-6">
                            Brayan Suarez — {t.role}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:justify-end sm:gap-x-5">
                        <Link
                            href="/#sobre-mi"
                            className="transition hover:text-foreground"
                        >
                            {t.about}
                        </Link>

                        <Link
                            href="/#proyectos"
                            className="transition hover:text-foreground"
                        >
                            {t.projects}
                        </Link>

                        <Link
                            href="/#contacto"
                            className="transition hover:text-foreground"
                        >
                            {t.contact}
                        </Link>

                        <span
                            className="hidden text-border sm:inline"
                            aria-hidden="true"
                        >
                            •
                        </span>

                        <span>ES / EN</span>

                        <span
                            className="hidden text-border sm:inline"
                            aria-hidden="true"
                        >
                            •
                        </span>

                        <span>© 2026</span>
                    </div>
                </div>

                <div className="mt-6 border-t border-border pt-6 text-xs leading-6 text-muted">
                    {t.builtBy}
                </div>
            </Container>
        </footer>
    );
}