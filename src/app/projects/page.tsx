"use client";

import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProjectsPage() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Proyectos",
            title: "Soluciones que he construido y continúo desarrollando.",
            description:
                "Una selección de proyectos donde aplico desarrollo backend, arquitectura, datos y tecnologías modernas.",
            completed: "Completado",
            development: "En desarrollo",
            viewProject: "Ver proyecto",
        },

        en: {
            eyebrow: "Projects",
            title: "Solutions I have built and continue to develop.",
            description:
                "A selection of projects where I apply backend development, architecture, data and modern technologies.",
            completed: "Completed",
            development: "In development",
            viewProject: "View project",
        },
    };

    const t = content[language];

    return (
        <main className="min-h-screen bg-background py-20 sm:py-24">
            <Container>
                <Reveal>
                    <SectionTitle
                        eyebrow={t.eyebrow}
                        title={t.title}
                        description={t.description}
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.slug}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:rounded-3xl sm:p-6">
                                <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                                    <div className="min-w-0">
                                        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                                            {project.title}
                                        </h2>

                                        <p className="mt-3 text-sm leading-7 text-muted">
                                            {project.description[language]}
                                        </p>
                                    </div>

                                    <div className="shrink-0">
                                        <Badge
                                            variant={
                                                project.status === "completed"
                                                    ? "success"
                                                    : "primary"
                                            }
                                        >
                                            {project.status === "completed"
                                                ? t.completed
                                                : t.development}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                    {project.technologies.map((technology) => (
                                        <Badge
                                            key={technology}
                                            className="px-3 py-1.5"
                                        >
                                            {technology}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="mt-auto pt-7 sm:pt-8">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-hover sm:w-auto"
                                    >
                                        {t.viewProject}
                                    </Link>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </main>
    );
}