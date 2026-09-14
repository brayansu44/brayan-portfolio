"use client";

import Link from "next/link";
import {
    ArrowRight,
    ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
    projects,
    type ProjectStatus,
} from "@/data/projects";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Projects() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Proyectos destacados",
            title: "Proyectos que convierten ideas en soluciones.",
            description:
                "Aplicaciones reales donde pongo en práctica desarrollo backend, arquitectura, datos y tecnologías modernas.",
            viewAll: "Ver todos los proyectos",
            preview: "Vista previa del proyecto",
            featured: "Principal",
            viewProject: "Ver proyecto",
            githubPending: "GitHub pendiente",
            completed: "Completado",
            development: "En desarrollo",
            openProject: "Abrir",
        },

        en: {
            eyebrow: "Featured projects",
            title: "Projects that turn ideas into solutions.",
            description:
                "Real applications where I put backend development, architecture, data and modern technologies into practice.",
            viewAll: "View all projects",
            preview: "Project preview",
            featured: "Featured",
            viewProject: "View project",
            githubPending: "GitHub pending",
            completed: "Completed",
            development: "In development",
            openProject: "Open",
        },
    };

    const t = content[language];

    return (
        <section
            id="proyectos"
            className="relative border-t border-border py-20 sm:py-24"
        >
            <Container>
                <Reveal>
                    <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
                        <SectionTitle
                            eyebrow={t.eyebrow}
                            title={t.title}
                            description={t.description}
                        />

                        <Link
                            href="/projects"
                            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
                        >
                            {t.viewAll}

                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </Reveal>

                <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.slug}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-primary/30 sm:rounded-3xl">
                                {/* Project preview */}
                                <div className="relative h-48 overflow-hidden border-b border-border bg-surface-elevated sm:h-56">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <div className="w-full max-w-xs rounded-2xl border border-border bg-background/70 px-4 py-4 text-center backdrop-blur sm:px-6">
                                            <p className="text-xs text-muted sm:text-sm">
                                                {t.preview}
                                            </p>

                                            <p className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                                                {project.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                                        <StatusBadge
                                            status={project.status}
                                            completedLabel={t.completed}
                                            developmentLabel={t.development}
                                        />
                                    </div>
                                </div>

                                {/* Project information */}
                                <div className="p-5 sm:p-6">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                                                {project.title}
                                            </h3>

                                            <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
                                                {project.description[language]}
                                            </p>
                                        </div>

                                        {project.featured && (
                                            <div className="shrink-0">
                                                <Badge variant="violet">
                                                    {t.featured}
                                                </Badge>
                                            </div>
                                        )}
                                    </div>

                                    {/* Technologies */}
                                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                        {project.technologies.map((technology) => (
                                            <Badge
                                                key={technology}
                                                variant="default"
                                                className="px-3 py-1.5"
                                            >
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                                        <Button
                                            href={`/projects/${project.slug}`}
                                            className="group/button w-full rounded-lg px-4 py-2.5 sm:w-auto"
                                        >
                                            {t.viewProject}

                                            <ArrowRight
                                                size={15}
                                                className="transition-transform group-hover/button:translate-x-1"
                                            />
                                        </Button>

                                        {project.github ? (
                                            <Button
                                                href={project.github}
                                                variant="secondary"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full rounded-lg px-4 py-2.5 sm:w-auto"
                                            >
                                                <FaGithub size={16} />
                                                GitHub
                                            </Button>
                                        ) : (
                                            <Button
                                                type="button"
                                                variant="secondary"
                                                disabled
                                                className="w-full rounded-lg px-4 py-2.5 opacity-50 sm:w-auto"
                                                title={t.githubPending}
                                            >
                                                <FaGithub size={16} />
                                                GitHub
                                            </Button>
                                        )}

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hidden text-muted transition hover:text-foreground sm:ml-auto sm:block"
                                                aria-label={`${t.openProject} ${project.title}`}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function StatusBadge({
    status,
    completedLabel,
    developmentLabel,
}: {
    status: ProjectStatus;
    completedLabel: string;
    developmentLabel: string;
}) {
    const completed = status === "completed";

    return (
        <Badge
            variant={completed ? "success" : "primary"}
            className="gap-2 backdrop-blur"
        >
            <span
                className={`h-2 w-2 rounded-full ${completed ? "bg-success" : "bg-primary"
                    }`}
            />

            {completed
                ? completedLabel
                : developmentLabel}
        </Badge>
    );
}