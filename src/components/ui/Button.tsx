import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost";

interface BaseProps {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

type LinkButtonProps = BaseProps &
    Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "children"
    > & {
        href: string;
    };

type NativeButtonProps = BaseProps &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
    > & {
        href?: undefined;
    };

type ButtonProps =
    | LinkButtonProps
    | NativeButtonProps;

const variants: Record<
    ButtonVariant,
    string
> = {
    primary:
        "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-blue-500/10",

    secondary:
        "border border-border bg-surface text-foreground hover:bg-surface-elevated",

    ghost:
        "text-muted hover:bg-surface-elevated hover:text-foreground",
};

export default function Button(
    props: ButtonProps
) {
    const variant =
        props.variant ?? "primary";

    const className =
        props.className ?? "";

    const classes = `
    inline-flex items-center justify-center gap-2
    rounded-xl px-5 py-3
    text-sm font-medium
    transition duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
    ${variants[variant]}
    ${className}
  `;

    if (typeof props.href === "string") {
        const {
            children,
            href,
            target,
            rel,
            title,
            id,
            role,
            tabIndex,
            "aria-label": ariaLabel,
            "aria-current": ariaCurrent,
            onClick,
        } = props;

        return (
            <a
                href={href}
                target={target}
                rel={rel}
                title={title}
                id={id}
                role={role}
                tabIndex={tabIndex}
                aria-label={ariaLabel}
                aria-current={ariaCurrent}
                onClick={onClick}
                className={classes}
            >
                {children}
            </a>
        );
    }

    const {
        children,
        type,
        disabled,
        title,
        id,
        name,
        value,
        role,
        tabIndex,
        "aria-label": ariaLabel,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        onClick,
    } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            title={title}
            id={id}
            name={name}
            value={value}
            role={role}
            tabIndex={tabIndex}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
}