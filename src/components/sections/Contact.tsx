"use client";

import {
    ArrowUpRight,
    Mail,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const contactItems = [
    {
        key: "email",
        icon: Mail,
        href: null,
    },
    {
        key: "linkedin",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/brayan-alexander-suarez-ropero-0197101b3",
    },
    {
        key: "github",
        icon: FaGithub,
        href: "https://github.com/brayansu44",
    },
] as const;

export default function Contact() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Contacto",

            title: "¿Construimos algo juntos?",

            description:
                "Estoy abierto a conectar con equipos y empresas donde pueda aportar desde el desarrollo backend, la ingeniería de software y la construcción de soluciones tecnológicas.",

            availability:
                "Disponible para nuevas oportunidades",

            availabilityDescription:
                "Si quieres conocer más sobre mi trabajo o conversar sobre una oportunidad profesional, puedes encontrarme por correo, LinkedIn o GitHub.",

            contacts: {
                email: {
                    label: "Correo",
                    value: "brayansayrez400@gmail.com",
                },

                linkedin: {
                    label: "LinkedIn",
                    value:
                        "Brayan Alexander Suarez Ropero",
                },

                github: {
                    label: "GitHub",
                    value: "@brayansu44",
                },
            },
        },

        en: {
            eyebrow: "Contact",

            title: "Shall we build something together?",

            description:
                "I am open to connecting with teams and companies where I can contribute through backend development, software engineering and the creation of technology solutions.",

            availability:
                "Open to new opportunities",

            availabilityDescription:
                "If you would like to learn more about my work or discuss a professional opportunity, you can reach me through email, LinkedIn or GitHub.",

            contacts: {
                email: {
                    label: "Email",
                    value: "brayansayrez400@gmail.com",
                },

                linkedin: {
                    label: "LinkedIn",
                    value:
                        "Brayan Alexander Suarez Ropero",
                },

                github: {
                    label: "GitHub",
                    value: "@brayansu44",
                },
            },
        },
    };

    const t = content[language];

    return (
        <section
            id="contacto"
            className="relative border-t border-border py-20 sm:py-24"
        >
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
                    {/* Information */}
                    <Reveal>
                        <div>
                            <SectionTitle
                                eyebrow={t.eyebrow}
                                title={t.title}
                                description={t.description}
                            />

                            <div className="mt-7 rounded-2xl border border-primary/20 bg-primary-soft p-5 sm:mt-8 sm:rounded-3xl sm:p-6">
                                <h3 className="text-lg font-semibold leading-7 text-foreground sm:text-xl">
                                    {t.availability}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted">
                                    {
                                        t.availabilityDescription
                                    }
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact methods */}
                    <div className="grid gap-3 sm:gap-4">
                        {contactItems.map(
                            (item, index) => {
                                const Icon = item.icon;

                                const translatedItem =
                                    t.contacts[item.key];

                                return (
                                    <Reveal
                                        key={item.key}
                                        delay={index * 0.08}
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:p-5"
                                            >
                                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                                    <div className="shrink-0 rounded-xl bg-primary-soft p-3 text-primary">
                                                        <Icon
                                                            size={20}
                                                        />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="font-medium text-foreground">
                                                            {
                                                                translatedItem.label
                                                            }
                                                        </p>

                                                        <p className="mt-1 break-words text-sm text-muted">
                                                            {
                                                                translatedItem.value
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <ArrowUpRight
                                                    size={18}
                                                    className="shrink-0 text-muted transition group-hover:text-primary"
                                                />
                                            </a>
                                        ) : (
                                            <div className="flex min-w-0 items-center rounded-2xl border border-border bg-surface p-4 sm:p-5">
                                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                                    <div className="shrink-0 rounded-xl bg-primary-soft p-3 text-primary">
                                                        <Icon
                                                            size={20}
                                                        />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="font-medium text-foreground">
                                                            {
                                                                translatedItem.label
                                                            }
                                                        </p>

                                                        <p className="mt-1 break-words text-sm text-muted">
                                                            {
                                                                translatedItem.value
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Reveal>
                                );
                            }
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}