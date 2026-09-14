"use client";

import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
    project: Project;
}

export default function ProjectDetail({
    project,
}: ProjectDetailProps) {
    const { language } = useLanguage();

    const content = {
        es: {
            back: "Volver a proyectos",
            completed: "Completado",
            development: "En desarrollo",
            featured: "Proyecto destacado",

            problem: "Problema",
            solution: "Solución",
            features: "Funcionalidades",
            architecture: "Arquitectura",
            technicalDecisions: "Decisiones técnicas",
            learnings: "Aprendizajes",
            currentStatus: "Estado actual",
            nextSteps: "Próximos pasos",

            caseStudyPending:
                "Este proyecto todavía no tiene un caso de estudio detallado disponible.",

            screenshots: "Capturas del proyecto",

            screenshotsPending:
                "Las capturas del proyecto se agregarán cuando estén listas para presentación.",
        },

        en: {
            back: "Back to projects",
            completed: "Completed",
            development: "In development",
            featured: "Featured project",

            problem: "Problem",
            solution: "Solution",
            features: "Features",
            architecture: "Architecture",
            technicalDecisions: "Technical decisions",
            learnings: "Learnings",
            currentStatus: "Current status",
            nextSteps: "Next steps",

            caseStudyPending:
                "A detailed case study is not available for this project yet.",

            screenshots: "Project screenshots",

            screenshotsPending:
                "Project screenshots will be added when they are ready for presentation.",
        },
    };

    const t = content[language];

    const isCompleted =
        project.status === "completed";

    const details = project.details;

    /*
     * Arquitectura visual.
     *
     * Cada proyecto utiliza una representación distinta
     * para evitar mostrar tecnologías que todavía no
     * están implementadas.
     */
    const architecture =
        project.slug === "carwash"
            ? {
                first: {
                    title: "Django Templates",
                    subtitle:
                        language === "es"
                            ? "Interfaz web"
                            : "Web interface",
                },

                second: {
                    title: "Django",
                    subtitle:
                        language === "es"
                            ? "Aplicación y lógica de negocio"
                            : "Application & business logic",
                },

                third: {
                    title: "SQLite",
                    subtitle:
                        language === "es"
                            ? "Persistencia de datos"
                            : "Data persistence",
                },

                support: {
                    title: "Django Apps",
                    subtitle:
                        language === "es"
                            ? "Clientes · Vehículos · Órdenes · Reportes"
                            : "Customers · Vehicles · Orders · Reports",
                },
            }
            : {
                first: {
                    title: "FastAPI",
                    subtitle: "API",
                },

                second: {
                    title: "SQLAlchemy",
                    subtitle:
                        language === "es"
                            ? "Capa de persistencia"
                            : "Persistence layer",
                },

                third: {
                    title: "PostgreSQL",
                    subtitle:
                        language === "es"
                            ? "Base de datos"
                            : "Database",
                },

                support: {
                    title: "Alembic",
                    subtitle:
                        language === "es"
                            ? "Migraciones de base de datos"
                            : "Database migrations",
                },
            };

    /*
     * Vista técnica del encabezado.
     *
     * StockWise representa una API.
     * CarWash representa el flujo de una aplicación
     * web tradicional con Django.
     */
    const terminal =
        project.slug === "carwash"
            ? {
                command: "GET /ordenes/",
                lines: [
                    "Django Templates",
                    "Django",
                    "SQLite",
                ],
            }
            : {
                command: "GET /api/products",
                lines: [
                    "FastAPI",
                    "SQLAlchemy",
                    "PostgreSQL",
                ],
            };

    const screenshotsDescription =
        project.slug === "carwash"
            ? language === "es"
                ? "Vista de algunas interfaces y funcionalidades del sistema CarWash."
                : "A look at some of the interfaces and features of the CarWash system."
            : language === "es"
                ? "Vista de algunas interfaces y funcionalidades desarrolladas para StockWise."
                : "A look at some of the interfaces and features developed for StockWise.";

    return (
        <main className="min-h-screen bg-background py-20 sm:py-24">
            <Container>
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <Reveal>
                        <Link
                            href="/projects"
                            className="inline-block text-sm font-medium text-primary transition hover:text-primary-hover"
                        >
                            ← {t.back}
                        </Link>

                        <header className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface sm:mt-8 sm:rounded-[2rem]">
                            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                                <div className="p-5 sm:p-8 lg:p-10">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge
                                            variant={
                                                isCompleted
                                                    ? "success"
                                                    : "primary"
                                            }
                                        >
                                            {isCompleted
                                                ? t.completed
                                                : t.development}
                                        </Badge>

                                        {project.featured && (
                                            <Badge variant="violet">
                                                {t.featured}
                                            </Badge>
                                        )}
                                    </div>

                                    <h1 className="mt-5 break-words text-3xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
                                        {project.title}
                                    </h1>

                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
                                        {project.description[language]}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {project.technologies
                                            .slice(0, 5)
                                            .map((technology) => (
                                                <Badge
                                                    key={technology}
                                                    variant="default"
                                                    className="px-3 py-1.5"
                                                >
                                                    {technology}
                                                </Badge>
                                            ))}
                                    </div>
                                </div>

                                {/* Technical preview */}
                                <div className="relative min-h-[260px] overflow-hidden border-t border-border bg-surface-elevated sm:min-h-[300px] lg:min-h-[320px] lg:border-l lg:border-t-0">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow-blue),transparent_45%),radial-gradient(circle_at_bottom_right,var(--glow-violet),transparent_40%)]" />

                                    <div className="relative flex h-full min-h-[260px] items-center justify-center p-5 sm:min-h-[300px] sm:p-8 lg:min-h-[320px]">
                                        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-surface/90 p-4 shadow-2xl backdrop-blur sm:rounded-3xl sm:p-5">
                                            <div className="flex items-center gap-2 border-b border-border pb-4">
                                                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />

                                                <span className="ml-2 text-xs font-medium text-muted">
                                                    {project.slug}
                                                </span>
                                            </div>

                                            <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
                                                <p className="text-muted">
                                                    <span className="text-primary">
                                                        $
                                                    </span>{" "}
                                                    {terminal.command}
                                                </p>

                                                {terminal.lines.map(
                                                    (line) => (
                                                        <p
                                                            key={line}
                                                            className="text-muted"
                                                        >
                                                            <span className="text-primary">
                                                                →
                                                            </span>{" "}
                                                            {line}
                                                        </p>
                                                    )
                                                )}

                                                <p className="pt-2 text-success">
                                                    200 OK
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </Reveal>

                    {details ? (
                        <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                            {/* 01 - 02 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <Reveal className="h-full">
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            01
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.problem}
                                        </h2>

                                        <p className="mt-4 text-sm leading-7 text-muted">
                                            {details.problem[language]}
                                        </p>
                                    </article>
                                </Reveal>

                                <Reveal
                                    delay={0.08}
                                    className="h-full"
                                >
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            02
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.solution}
                                        </h2>

                                        <p className="mt-4 text-sm leading-7 text-muted">
                                            {details.solution[language]}
                                        </p>
                                    </article>
                                </Reveal>
                            </div>

                            {/* 03 */}
                            <Reveal>
                                <article className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                        03
                                    </p>

                                    <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                        {t.features}
                                    </h2>

                                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                                        {details.features[
                                            language
                                        ].map((feature) => (
                                            <div
                                                key={feature}
                                                className="rounded-2xl border border-border bg-surface-elevated px-4 py-3 text-sm text-muted"
                                            >
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            </Reveal>

                            {/* 04 */}
                            <Reveal>
                                <article className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                        04
                                    </p>

                                    <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                        {t.architecture}
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                                        {
                                            details.architecture[
                                            language
                                            ]
                                        }
                                    </p>

                                    <div className="mt-8">
                                        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                                            <ArchitectureBox
                                                title={
                                                    architecture.first
                                                        .title
                                                }
                                                subtitle={
                                                    architecture.first
                                                        .subtitle
                                                }
                                            />

                                            <ArchitectureConnector />

                                            <ArchitectureBox
                                                title={
                                                    architecture.second
                                                        .title
                                                }
                                                subtitle={
                                                    architecture.second
                                                        .subtitle
                                                }
                                            />

                                            <ArchitectureConnector />

                                            <ArchitectureBox
                                                title={
                                                    architecture.third
                                                        .title
                                                }
                                                subtitle={
                                                    architecture.third
                                                        .subtitle
                                                }
                                            />
                                        </div>

                                        <div className="mt-3 flex justify-center sm:mt-4">
                                            <div className="w-full max-w-md">
                                                <ArchitectureBox
                                                    title={
                                                        architecture.support
                                                            .title
                                                    }
                                                    subtitle={
                                                        architecture.support
                                                            .subtitle
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>

                            {/* 05 */}
                            <Reveal>
                                <article className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                        05
                                    </p>

                                    <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                        {t.screenshots}
                                    </h2>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                                        {screenshotsDescription}
                                    </p>

                                    {details.screenshots &&
                                        details.screenshots.length >
                                        0 ? (
                                        <div className="mt-6 grid gap-5 md:grid-cols-2">
                                            {details.screenshots.map(
                                                (screenshot) => (
                                                    <figure
                                                        key={
                                                            screenshot.src
                                                        }
                                                        className="overflow-hidden rounded-2xl border border-border bg-surface-elevated"
                                                    >
                                                        <div className="relative aspect-video w-full">
                                                            <Image
                                                                src={
                                                                    screenshot.src
                                                                }
                                                                alt={
                                                                    screenshot.alt[
                                                                    language
                                                                    ]
                                                                }
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                                className="object-cover"
                                                            />
                                                        </div>

                                                        <figcaption className="p-4 text-sm leading-6 text-muted">
                                                            {
                                                                screenshot
                                                                    .caption[
                                                                language
                                                                ]
                                                            }
                                                        </figcaption>
                                                    </figure>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <div className="mt-5 flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-border bg-surface-elevated p-5 text-center sm:mt-6 sm:min-h-52 sm:p-8">
                                            <p className="max-w-md text-sm leading-7 text-muted">
                                                {t.screenshotsPending}
                                            </p>
                                        </div>
                                    )}
                                </article>
                            </Reveal>

                            {/* 06 - 07 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <Reveal className="h-full">
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            06
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.technicalDecisions}
                                        </h2>

                                        <div className="mt-5 space-y-4">
                                            {details
                                                .technicalDecisions[
                                                language
                                            ].map((decision) => (
                                                <div
                                                    key={
                                                        decision.title
                                                    }
                                                    className="rounded-2xl border border-border bg-surface-elevated p-4"
                                                >
                                                    <h3 className="font-semibold text-foreground">
                                                        {
                                                            decision.title
                                                        }
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-muted">
                                                        {
                                                            decision.description
                                                        }
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </article>
                                </Reveal>

                                <Reveal
                                    delay={0.08}
                                    className="h-full"
                                >
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            07
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.learnings}
                                        </h2>

                                        <ul className="mt-5 space-y-4">
                                            {details.learnings[
                                                language
                                            ].map((learning) => (
                                                <li
                                                    key={learning}
                                                    className="flex gap-3 rounded-2xl border border-border bg-surface-elevated p-4 text-sm leading-6 text-muted"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                                    <span>
                                                        {learning}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </Reveal>
                            </div>

                            {/* 08 - 09 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <Reveal className="h-full">
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            08
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.currentStatus}
                                        </h2>

                                        <p className="mt-4 text-sm leading-7 text-muted">
                                            {details.status[language]}
                                        </p>
                                    </article>
                                </Reveal>

                                <Reveal
                                    delay={0.08}
                                    className="h-full"
                                >
                                    <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                                            09
                                        </p>

                                        <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                                            {t.nextSteps}
                                        </h2>

                                        <ul className="mt-4 space-y-3">
                                            {details.nextSteps[
                                                language
                                            ].map((step) => (
                                                <li
                                                    key={step}
                                                    className="flex gap-3 text-sm leading-6 text-muted"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                                    <span>
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </Reveal>
                            </div>
                        </div>
                    ) : (
                        <Reveal className="mt-8">
                            <div className="rounded-3xl border border-border bg-surface p-6">
                                <p className="text-sm leading-7 text-muted">
                                    {t.caseStudyPending}
                                </p>
                            </div>
                        </Reveal>
                    )}
                </div>
            </Container>
        </main>
    );
}

function ArchitectureBox({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-2xl border border-border bg-surface-elevated p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-5">
            <p className="font-semibold text-foreground">
                {title}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                {subtitle}
            </p>
        </div>
    );
}

function ArchitectureConnector() {
    return (
        <div className="hidden items-center justify-center lg:flex">
            <div className="h-px w-12 bg-border" />

            <span className="mx-2 text-sm text-primary">
                →
            </span>

            <div className="h-px w-12 bg-border" />
        </div>
    );
}