"use client";

import Link from "next/link";

import {
    ArrowRight,
    BrainCircuit,
    Code2,
    Database,
    Layers3,
    Mail,
    ServerCog,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

import {
    motion,
    useReducedMotion,
} from "motion/react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
    const { language } = useLanguage();
    const shouldReduceMotion =
        useReducedMotion();

    const content = {
        es: {
            badge: "Desarrollador Backend",
            intro: "Hola, soy",
            headline:
                "Desarrollo soluciones backend",
            headlineAccent:
                "pensadas para crecer.",

            description:
                "Desarrollo aplicaciones backend con enfoque en lógica de negocio, datos, arquitectura y código mantenible, buscando convertir necesidades reales en soluciones de software claras y escalables.",

            projects: "Explorar proyectos",
            about: "Sobre mí",
            email: "Email",

            flowTitle:
                "Arquitectura backend",
            flowSubtitle:
                "Flujo técnico simplificado",

            active: "En desarrollo",

            client: "Cliente",
            clientSubtitle:
                "Navegador / App",

            api: "API REST",

            backend: "FastAPI",
            backendSubtitle:
                "Lógica de aplicación",

            database: "PostgreSQL",
            databaseSubtitle:
                "Persistencia de datos",

            orm: "SQLAlchemy",
            ormSubtitle:
                "Capa de persistencia",

            appliedAi:
                "IA aplicada",
            learning:
                "En aprendizaje",

            sending:
                "Enviando solicitud...",
            processing:
                "Procesando en FastAPI...",
            querying:
                "Consultando PostgreSQL...",
        },

        en: {
            badge: "Backend Developer",
            intro: "Hi, I'm",
            headline:
                "I build backend solutions",
            headlineAccent:
                "designed to scale.",

            description:
                "I build backend applications with a focus on business logic, data, architecture and maintainable code, turning real-world needs into clear and scalable software solutions.",

            projects: "Explore projects",
            about: "About me",
            email: "Email",

            flowTitle:
                "Backend architecture",
            flowSubtitle:
                "Simplified technical flow",

            active: "In development",

            client: "Client",
            clientSubtitle:
                "Browser / App",

            api: "REST API",

            backend: "FastAPI",
            backendSubtitle:
                "Application logic",

            database: "PostgreSQL",
            databaseSubtitle:
                "Data persistence",

            orm: "SQLAlchemy",
            ormSubtitle:
                "Persistence layer",

            appliedAi:
                "Applied AI",
            learning:
                "Learning",

            sending:
                "Sending request...",
            processing:
                "Processing in FastAPI...",
            querying:
                "Querying PostgreSQL...",
        },
    };

    const t = content[language];

    return (
        <section
            id="inicio"
            className="relative overflow-hidden pb-16 pt-24 sm:pb-20 lg:pb-12"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                <div className="absolute right-[8%] top-[12%] h-96 w-96 rounded-full bg-violet-brand/10 blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <Container className="relative">
                <div className="grid gap-14 py-8 sm:py-12 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-0">
                    {/* Content */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 24,
                                }
                        }
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : {
                                    opacity: 1,
                                    y: 0,
                                }
                        }
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Badge
                            variant="primary"
                            className="mb-5 gap-2 px-3 py-1.5 uppercase"
                        >
                            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

                            {t.badge}
                        </Badge>

                        <p className="text-lg font-medium text-foreground/80 sm:text-xl">
                            {t.intro}
                        </p>

                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Brayan{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                                Suarez
                            </span>
                        </h1>

                        <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-foreground sm:mt-7 sm:text-4xl">
                            {t.headline}

                            <span className="block text-primary">
                                {t.headlineAccent}
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                            {t.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                            <Button
                                href="#proyectos"
                                className="group w-full rounded-lg px-6 py-3 sm:w-auto"
                            >
                                {t.projects}

                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>

                            <Button
                                href="#sobre-mi"
                                variant="secondary"
                                className="w-full rounded-lg px-6 py-3 sm:w-auto"
                            >
                                {t.about}
                            </Button>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
                            <a
                                href="https://github.com/brayansu44"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 transition hover:text-foreground"
                                aria-label="GitHub de Brayan Suarez"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/brayan-alexander-suarez-ropero-0197101b3"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 transition hover:text-foreground"
                                aria-label="LinkedIn de Brayan Suarez"
                            >
                                <FaLinkedinIn size={18} />
                                LinkedIn
                            </a>

                            <Link
                                href="/#contacto"
                                className="flex items-center gap-2 transition hover:text-foreground"
                            >
                                <Mail size={18} />
                                {t.email}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Architecture */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 28,
                                }
                        }
                        animate={
                            shouldReduceMotion
                                ? undefined
                                : {
                                    opacity: 1,
                                    y: 0,
                                }
                        }
                        transition={{
                            duration: 0.75,
                            delay: shouldReduceMotion
                                ? 0
                                : 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl" />

                        <div className="relative rounded-[1.5rem] border border-border bg-surface/80 p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-7">
                            <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8 sm:items-center">
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        {t.flowTitle}
                                    </p>

                                    <p className="mt-1 text-xs text-muted">
                                        {t.flowSubtitle}
                                    </p>
                                </div>

                                <Badge variant="primary">
                                    {t.active}
                                </Badge>
                            </div>

                            <div className="space-y-6">
                                {/* Main flow */}
                                <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                                    <FlowCard
                                        icon={
                                            <Code2 size={22} />
                                        }
                                        title={t.client}
                                        subtitle={
                                            t.clientSubtitle
                                        }
                                    />

                                    <HorizontalConnector />

                                    <FlowCard
                                        icon={
                                            <ServerCog
                                                size={22}
                                            />
                                        }
                                        title={t.api}
                                        subtitle="HTTP / JSON"
                                    />

                                    <HorizontalConnector />

                                    <FlowCard
                                        icon={
                                            <ServerCog
                                                size={22}
                                            />
                                        }
                                        title={t.backend}
                                        subtitle={
                                            t.backendSubtitle
                                        }
                                        featured
                                    />
                                </div>

                                {/* Branch */}
                                <div className="mx-auto hidden w-2/3 md:block">
                                    <div className="relative mx-auto h-12 w-1/2">
                                        <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-primary" />

                                        <div className="absolute left-1/4 right-1/4 top-5 h-px bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                                        <div className="absolute left-1/4 top-5 h-7 w-px bg-gradient-to-b from-primary to-primary/20" />

                                        <div className="absolute right-1/4 top-5 h-7 w-px bg-gradient-to-b from-primary to-violet-brand/30" />

                                        <span className="absolute left-1/2 top-5 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(96,165,250,0.9)]" />

                                        <span className="absolute bottom-0 left-1/4 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_rgba(96,165,250,0.8)]" />

                                        <span className="absolute bottom-0 right-1/4 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-violet-brand shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                    </div>
                                </div>

                                {/* Persistence */}
                                <div className="grid w-full gap-3 sm:grid-cols-2 md:ml-auto md:w-2/3 md:gap-4">
                                    <FlowCard
                                        icon={
                                            <Layers3
                                                size={22}
                                            />
                                        }
                                        title={t.orm}
                                        subtitle={
                                            t.ormSubtitle
                                        }
                                    />

                                    <FlowCard
                                        icon={
                                            <Database
                                                size={22}
                                            />
                                        }
                                        title={t.database}
                                        subtitle={
                                            t.databaseSubtitle
                                        }
                                    />
                                </div>

                                {/* Learning direction */}
                                <div className="rounded-xl border border-violet-brand/30 bg-violet-soft p-4 sm:rounded-2xl">
                                    <div className="flex items-start gap-3">
                                        <div className="inline-flex shrink-0 rounded-lg bg-violet-soft p-2 text-violet-brand">
                                            <BrainCircuit
                                                size={22}
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="font-semibold text-foreground">
                                                {t.appliedAi}
                                            </p>

                                            <p className="mt-1 text-xs text-muted">
                                                {t.learning}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Terminal */}
                            <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-background/70 p-4 font-mono text-[11px] leading-6 text-muted sm:mt-7 sm:text-xs">
                                <p>
                                    &gt; {t.sending}
                                </p>

                                <p>
                                    &gt; GET /products/
                                </p>

                                <p>
                                    &gt; {t.processing}
                                </p>

                                <p>
                                    &gt; {t.querying}
                                </p>

                                <p className="text-success">
                                    &gt; 200 OK ✓
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

function FlowCard({
    icon,
    title,
    subtitle,
    featured = false,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    featured?: boolean;
}) {
    return (
        <div
            className={[
                "rounded-xl border p-4 transition sm:rounded-2xl",
                featured
                    ? "border-primary/40 bg-primary-soft shadow-lg shadow-blue-500/10"
                    : "border-border bg-surface-elevated",
            ].join(" ")}
        >
            <div className="mb-3 inline-flex rounded-lg bg-primary-soft p-2 text-primary">
                {icon}
            </div>

            <p className="font-semibold text-foreground">
                {title}
            </p>

            <p className="mt-1 text-xs text-muted">
                {subtitle}
            </p>
        </div>
    );
}

function HorizontalConnector() {
    return (
        <div className="hidden items-center md:flex">
            <div className="relative h-px w-6 bg-gradient-to-r from-primary/20 via-primary to-primary/20">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
            </div>
        </div>
    );
}