"use client";

import {
    Building2,
    Code2,
    Database,
    FileText,
    GitBranch,
    TestTube2,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const responsibilityIcons = [
    FileText,
    GitBranch,
    Database,
    TestTube2,
];

export default function Experience() {
    const { language } = useLanguage();

    const content = {
        es: {
            eyebrow: "Experiencia profesional",
            title: "Tecnología aplicada en entornos reales.",
            description:
                "Experiencia en desarrollo, análisis de software, documentación técnica y funcional, arquitectura, bases de datos, pruebas y soporte a sistemas de información.",

            ins: {
                period: "Abril 2025 — Agosto 2026",
                role: "Apoyo a la Gestión de Sistemas de Información",
                organization: "Instituto Nacional de Salud",
                office:
                    "Oficina de Tecnologías de la Información y las Comunicaciones",
                summary:
                    "Apoyo en actividades relacionadas con documentación, arquitectura, recopilación de información técnica, validación funcional y seguimiento de sistemas institucionales.",
                badges: [
                    "Documentación",
                    "Arquitectura",
                    "Bases de datos",
                    "Testing",
                    "Requerimientos",
                ],
            },

            responsibilitiesTitle:
                "Funciones destacadas en el INS",

            responsibilities: [
                {
                    title: "Documentación técnica y funcional",
                    description:
                        "Apoyo en la elaboración, actualización y organización de documentación asociada a sistemas de información.",
                },
                {
                    title: "Arquitectura de software",
                    description:
                        "Recopilación y estructuración de información técnica para documentos de arquitectura y componentes de software.",
                },
                {
                    title: "Aplicaciones y bases de datos",
                    description:
                        "Consolidación de información relacionada con aplicaciones, bases de datos, ambientes y tecnologías utilizadas.",
                },
                {
                    title: "Validación y seguimiento",
                    description:
                        "Apoyo en pruebas funcionales, revisión de requerimientos y seguimiento de actividades relacionadas con los sistemas.",
                },
            ],

            primestone: {
                period: "Febrero 2021 — Agosto 2021",
                role: "Desarrollador Practicante",
                organization: "Primestone S.A.S.",
                summary:
                    "Apoyo en actividades de desarrollo y mantenimiento de aplicaciones desarrolladas en .NET Framework, ejecución de pruebas unitarias y actualización de sistemas existentes.",
                badges: [
                    ".NET Framework",
                    "Desarrollo",
                    "Pruebas unitarias",
                    "Mantenimiento",
                ],
            },
        },

        en: {
            eyebrow: "Professional experience",
            title: "Technology applied in real-world environments.",
            description:
                "Experience in software development and analysis, technical and functional documentation, architecture, databases, testing and information systems support.",

            ins: {
                period: "April 2025 — August 2026",
                role: "Information Systems Management Support",
                organization: "National Institute of Health",
                office:
                    "Information and Communications Technology Office",
                summary:
                    "Support in activities related to documentation, architecture, technical information gathering, functional validation and monitoring of institutional systems.",
                badges: [
                    "Documentation",
                    "Architecture",
                    "Databases",
                    "Testing",
                    "Requirements",
                ],
            },

            responsibilitiesTitle:
                "Key responsibilities at INS",

            responsibilities: [
                {
                    title: "Technical and functional documentation",
                    description:
                        "Support in creating, updating and organizing documentation associated with information systems.",
                },
                {
                    title: "Software architecture",
                    description:
                        "Collection and structuring of technical information for architecture documents and software components.",
                },
                {
                    title: "Applications and databases",
                    description:
                        "Consolidation of information related to applications, databases, environments and technologies in use.",
                },
                {
                    title: "Validation and monitoring",
                    description:
                        "Support in functional testing, requirements review and monitoring of activities related to information systems.",
                },
            ],

            primestone: {
                period: "February 2021 — August 2021",
                role: "Developer Intern",
                organization: "Primestone S.A.S.",
                summary:
                    "Support in development and maintenance of applications built with .NET Framework, execution of unit tests and updates to existing systems.",
                badges: [
                    ".NET Framework",
                    "Development",
                    "Unit testing",
                    "Maintenance",
                ],
            },
        },
    };

    const t = content[language];

    return (
        <section
            id="experiencia"
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

                <div className="mt-10 sm:mt-12">
                    {/* INS */}
                    <Reveal>
                        <article className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6 lg:p-8">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                                    <div className="w-fit shrink-0 rounded-xl bg-primary-soft p-3 text-primary">
                                        <Building2 size={24} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-primary">
                                            {t.ins.period}
                                        </p>

                                        <h3 className="mt-2 text-xl font-semibold text-foreground sm:mt-3 sm:text-2xl">
                                            {t.ins.role}
                                        </h3>

                                        <p className="mt-2 font-medium text-foreground">
                                            {t.ins.organization}
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-muted">
                                            {t.ins.office}
                                        </p>

                                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5">
                                            {t.ins.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
                                    {t.ins.badges.map((badge) => (
                                        <Badge
                                            key={badge}
                                            className="px-3 py-1.5"
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </Reveal>

                    {/* INS responsibilities */}
                    <div className="mt-8">
                        <Reveal>
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                                {t.responsibilitiesTitle}
                            </p>
                        </Reveal>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {t.responsibilities.map(
                                (responsibility, index) => {
                                    const Icon =
                                        responsibilityIcons[index];

                                    return (
                                        <Reveal
                                            key={responsibility.title}
                                            delay={index * 0.08}
                                            className="h-full"
                                        >
                                            <article className="h-full rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated sm:p-6">
                                                <div className="mb-4 inline-flex rounded-xl bg-primary-soft p-3 text-primary">
                                                    <Icon size={21} />
                                                </div>

                                                <h3 className="text-base font-semibold text-foreground">
                                                    {responsibility.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-muted">
                                                    {
                                                        responsibility.description
                                                    }
                                                </p>
                                            </article>
                                        </Reveal>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    {/* Primestone */}
                    <Reveal delay={0.1}>
                        <article className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6 lg:p-8">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                                    <div className="w-fit shrink-0 rounded-xl bg-primary-soft p-3 text-primary">
                                        <Code2 size={24} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-primary">
                                            {t.primestone.period}
                                        </p>

                                        <h3 className="mt-2 text-xl font-semibold text-foreground sm:mt-3 sm:text-2xl">
                                            {t.primestone.role}
                                        </h3>

                                        <p className="mt-2 font-medium text-foreground">
                                            {t.primestone.organization}
                                        </p>

                                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5">
                                            {t.primestone.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
                                    {t.primestone.badges.map(
                                        (badge) => (
                                            <Badge
                                                key={badge}
                                                className="px-3 py-1.5"
                                            >
                                                {badge}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}