"use client";

import {
    Boxes,
    Code2,
    Database,
    Wrench,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const technologyGroups = [
    {
        icon: Code2,
        technologies: [
            "Python",
            "Django",
            "FastAPI",
            "C#",
        ],
    },
    {
        icon: Database,
        technologies: [
            "PostgreSQL",
            "SQL Server",
            "MySQL",
        ],
    },
    {
        icon: Boxes,
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
        ],
    },
    {
        icon: Wrench,
        technologies: [
            "Git",
            "GitHub",
            "Docker",
            "Azure DevOps",
        ],
    },
];

export default function Technologies() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Tecnologías",
            title: "Herramientas con las que construyo.",
            description:
                "Tecnologías que utilizo para desarrollar aplicaciones, trabajar con datos y construir soluciones de software.",
            groups: [
                {
                    title: "Backend",
                    description:
                        "Tecnologías que utilizo para construir lógica de negocio, APIs y aplicaciones del lado del servidor.",
                },
                {
                    title: "Bases de datos",
                    description:
                        "Motores y herramientas que utilizo para trabajar con persistencia y gestión de información.",
                },
                {
                    title: "Frontend",
                    description:
                        "Tecnologías con las que puedo construir e integrar interfaces para aplicaciones web.",
                },
                {
                    title: "Herramientas y desarrollo",
                    description:
                        "Herramientas que forman parte de mi flujo de desarrollo, control de versiones y trabajo con proyectos.",
                },
            ],
            learning: "En aprendizaje continuo",
            learningDescription:
                "Áreas y prácticas que estoy fortaleciendo para ampliar mis capacidades en desarrollo backend y construcción de soluciones modernas.",
            learningItems: [
                "Inteligencia artificial aplicada",
                "Testing avanzado",
                "CI/CD",
                "Cloud",
            ],
        },

        en: {
            eyebrow: "Technologies",
            title: "Tools I use to build.",
            description:
                "Technologies I use to develop applications, work with data and build software solutions.",
            groups: [
                {
                    title: "Backend",
                    description:
                        "Technologies I use to build business logic, APIs and server-side applications.",
                },
                {
                    title: "Databases",
                    description:
                        "Database technologies I use for data persistence and information management.",
                },
                {
                    title: "Frontend",
                    description:
                        "Technologies I use to build and integrate interfaces for web applications.",
                },
                {
                    title: "Tools & Development",
                    description:
                        "Tools that are part of my development workflow, version control and project work.",
                },
            ],
            learning: "Continuous learning",
            learningDescription:
                "Areas and practices I am strengthening to expand my capabilities in backend development and modern software solutions.",
            learningItems: [
                "Applied artificial intelligence",
                "Advanced testing",
                "CI/CD",
                "Cloud",
            ],
        },
    };

    const t = content[language];

    return (
        <section
            id="tecnologias"
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
                    {technologyGroups.map((group, index) => {
                        const Icon = group.icon;
                        const translatedGroup = t.groups[index];

                        return (
                            <Reveal
                                key={translatedGroup.title}
                                delay={index * 0.08}
                                className="h-full"
                            >
                                <article className="h-full rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:rounded-3xl sm:p-6">
                                    <div className="flex flex-col items-start gap-4 sm:flex-row">
                                        <div className="shrink-0 rounded-xl bg-primary-soft p-3 text-primary">
                                            <Icon size={22} />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-base font-semibold text-foreground sm:text-lg">
                                                {translatedGroup.title}
                                            </h3>

                                            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                                                {translatedGroup.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                        {group.technologies.map((technology) => (
                                            <Badge
                                                key={technology}
                                                variant="default"
                                                className="px-3 py-1.5"
                                            >
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal delay={0.12}>
                    <div className="mt-5 rounded-2xl border border-primary/20 bg-primary-soft p-5 sm:mt-6 sm:rounded-3xl sm:p-6">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.18em]">
                                {t.learning}
                            </p>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                                {t.learningDescription}
                            </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                            {t.learningItems.map((item) => (
                                <Badge
                                    key={item}
                                    variant="primary"
                                    className="px-3 py-1.5"
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}