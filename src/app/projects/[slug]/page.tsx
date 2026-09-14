import { notFound } from "next/navigation";

import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}