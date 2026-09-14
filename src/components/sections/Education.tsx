"use client";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Education() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Formación",

            title: "Aprendizaje que acompaña mi crecimiento.",

            description:
                "Formación académica, técnica y complementaria que ha construido la base de mi perfil profesional en desarrollo de software.",

            education: [
                {
                    degree: "Ingeniería Informática",
                    institution: "ESEIT",
                    period: "2022 — Actualidad",
                    status: "En curso",
                    description:
                        "Formación profesional enfocada en ingeniería de software, desarrollo de sistemas y tecnologías de la información. Graduación estimada en 2027.",
                },
                {
                    degree:
                        "Técnico y Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
                    institution: "SENA",
                    period: "2018 — 2021",
                    status: "Completado",
                    description:
                        "Formación técnica y tecnológica orientada al análisis, diseño y desarrollo de soluciones de software.",
                },
            ],

            certificationsTitle: "Certificaciones",

            certifications: [
                {
                    name: "Programación C# en .NET y muchísimo más",
                    institution: "Udemy",
                    year: "2026",
                    duration: "23 horas",
                    status: "Completado",
                    description:
                        "Curso orientado al desarrollo con C# y .NET, fortaleciendo fundamentos de programación orientada a objetos y desarrollo de aplicaciones.",
                },
                {
                    name: "Python Project for AI and Application Development",
                    institution: "Coursera",
                    year: "2024",
                    duration: null,
                    status: "Completado",
                    description:
                        "Certificación enfocada en desarrollo de aplicaciones y proyectos con Python.",
                },
            ],
        },

        en: {
            eyebrow: "Education",

            title: "Learning that supports my growth.",

            description:
                "Academic, technical and complementary education that has built the foundation of my professional profile in software development.",

            education: [
                {
                    degree: "Computer Engineering",
                    institution: "ESEIT",
                    period: "2022 — Present",
                    status: "In progress",
                    description:
                        "Professional education focused on software engineering, systems development and information technologies. Expected graduation in 2027.",
                },
                {
                    degree:
                        "Technical and Technologist Program in Information Systems Analysis and Development",
                    institution: "SENA",
                    period: "2018 — 2021",
                    status: "Completed",
                    description:
                        "Technical education focused on the analysis, design and development of software solutions.",
                },
            ],

            certificationsTitle: "Certifications",

            certifications: [
                {
                    name: "Programming C# in .NET and much more",
                    institution: "Udemy",
                    year: "2026",
                    duration: "23 hours",
                    status: "Completed",
                    description:
                        "Course focused on C# and .NET development, strengthening object-oriented programming fundamentals and application development.",
                },
                {
                    name: "Python Project for AI and Application Development",
                    institution: "Coursera",
                    year: "2024",
                    duration: null,
                    status: "Completed",
                    description:
                        "Certification focused on application and project development with Python.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section
            id="formacion"
            className="relative border-t border-border py-20 sm:py-24"
        >
            <Container>
                <Reveal>
                    <SectionTitle
                        eyebrow={t.eyebrow}
                        title={t.title}
                        description={t.description}
                    />
                </Reveal>

                <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
                    {t.education.map((item, index) => {
                        const isCompleted =
                            item.status === "Completado" ||
                            item.status === "Completed";

                        return (
                            <Reveal
                                key={item.degree}
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <article className="h-full rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:rounded-3xl sm:p-6">
                                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                                        <div className="min-w-0">
                                            <h3 className="text-base font-semibold leading-6 text-foreground sm:text-lg">
                                                {item.degree}
                                            </h3>

                                            <p className="mt-2 text-sm font-medium text-primary">
                                                {item.institution}
                                            </p>

                                            <p className="mt-1 text-sm text-muted">
                                                {item.period}
                                            </p>
                                        </div>

                                        <div className="shrink-0">
                                            <Badge
                                                variant={
                                                    isCompleted
                                                        ? "success"
                                                        : "primary"
                                                }
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm leading-6 text-muted sm:mt-5">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="mt-5 sm:mt-6">
                    <Reveal delay={0.12}>
                        <h3 className="mb-4 text-base font-semibold text-foreground sm:text-lg">
                            {t.certificationsTitle}
                        </h3>
                    </Reveal>

                    <div className="grid gap-4 md:grid-cols-2">
                        {t.certifications.map(
                            (certification, index) => (
                                <Reveal
                                    key={certification.name}
                                    delay={0.12 + index * 0.08}
                                    className="h-full"
                                >
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:rounded-3xl sm:p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                                <h4 className="font-medium leading-6 text-foreground">
                                                    {certification.name}
                                                </h4>

                                                <p className="mt-2 text-sm font-medium text-primary">
                                                    {certification.institution}
                                                </p>

                                                <p className="mt-1 text-sm text-muted">
                                                    {certification.year}
                                                    {certification.duration
                                                        ? ` · ${certification.duration}`
                                                        : ""}
                                                </p>
                                            </div>

                                            <div className="shrink-0">
                                                <Badge variant="success">
                                                    {certification.status}
                                                </Badge>
                                            </div>
                                        </div>

                                        <p className="mt-3 text-sm leading-6 text-muted">
                                            {certification.description}
                                        </p>
                                    </article>
                                </Reveal>
                            )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}