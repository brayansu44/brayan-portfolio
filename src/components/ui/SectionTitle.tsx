interface SectionTitleProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionTitleProps) {
    const alignment =
        align === "center"
            ? "mx-auto items-center text-center"
            : "items-start text-left";

    return (
        <div className={`flex max-w-3xl flex-col ${alignment}`}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}