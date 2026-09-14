"use client";

import {
    BrainCircuit,
    Code2,
    Layers3,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const pillarIcons = [
    Code2,
    Layers3,
    BrainCircuit,
];

export default function About() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Sobre mí",

            title:
                "Ingeniería, curiosidad y soluciones reales.",

            paragraph1:
                "Soy desarrollador de software y estudiante de Ingeniería Informática, con formación como Tecnólogo en Análisis y Desarrollo de Sistemas de Información. Mi experiencia combina desarrollo, análisis de software, documentación técnica y funcional, pruebas y apoyo a sistemas de información.",

            paragraph2:
                "Mi enfoque principal está en el desarrollo backend, trabajando con Python, Django, FastAPI, bases de datos y lógica de negocio. Me interesa construir aplicaciones organizadas, mantenibles y orientadas a resolver necesidades reales.",

            paragraph3:
                "Actualmente continúo fortaleciendo mis conocimientos en arquitectura de software, APIs, testing, Docker, automatización y desarrollo moderno, mientras avanzo hacia mi objetivo profesional de especializarme en soluciones backend con inteligencia artificial aplicada.",

            quote:
                "La tecnología cobra sentido cuando resuelve problemas reales.",

            pillars: [
                {
                    title: "Desarrollo Backend",
                    description:
                        "APIs, lógica de negocio, datos y aplicaciones mantenibles.",
                },
                {
                    title: "Ingeniería de Software",
                    description:
                        "Arquitectura, documentación, bases de datos, pruebas y buenas prácticas.",
                },
                {
                    title: "Aprendizaje continuo",
                    description:
                        "Crecimiento constante en automatización, cloud e inteligencia artificial aplicada.",
                },
            ],
        },

        en: {
            eyebrow: "About me",

            title:
                "Engineering, curiosity and real-world solutions.",

            paragraph1:
                "I am a software developer and Computer Engineering student with a background as a Technologist in Information Systems Analysis and Development. My experience combines software development and analysis, technical and functional documentation, testing and information systems support.",

            paragraph2:
                "My main focus is backend development, working with Python, Django, FastAPI, databases and business logic. I am interested in building organized, maintainable applications designed to solve real-world needs.",

            paragraph3:
                "I am currently strengthening my knowledge of software architecture, APIs, testing, Docker, automation and modern development while progressing toward my professional goal of specializing in backend solutions with applied artificial intelligence.",

            quote:
                "Technology makes sense when it solves real problems.",

            pillars: [
                {
                    title: "Backend Development",
                    description:
                        "APIs, business logic, data and maintainable applications.",
                },
                {
                    title: "Software Engineering",
                    description:
                        "Architecture, documentation, databases, testing and good practices.",
                },
                {
                    title: "Continuous Learning",
                    description:
                        "Continuous growth in automation, cloud and applied artificial intelligence.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section
            id="sobre-mi"
            className="relative border-t border-border py-20 sm:py-24"
        >
            <Container>
                <Reveal>
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
                        {/* Texto */}
                        <div>
                            <SectionTitle
                                eyebrow={t.eyebrow}
                                title={t.title}
                            />

                            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-muted sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
                                <p>{t.paragraph1}</p>

                                <p>{t.paragraph2}</p>

                                <p>{t.paragraph3}</p>
                            </div>

                            <blockquote className="mt-7 max-w-xl rounded-2xl border border-primary/20 bg-primary-soft px-4 py-4 text-sm italic leading-6 text-foreground/80 sm:mt-8 sm:px-5">
                                “{t.quote}”
                            </blockquote>
                        </div>

                        {/* Pilares */}
                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            {t.pillars.map(
                                (pillar, index) => {
                                    const Icon =
                                        pillarIcons[index];

                                    return (
                                        <article
                                            key={pillar.title}
                                            className="group rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:p-6"
                                        >
                                            <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-3 text-primary">
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="text-base font-semibold text-foreground sm:text-lg">
                                                {pillar.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-muted">
                                                {
                                                    pillar.description
                                                }
                                            </p>
                                        </article>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}