"use client";

import { Template } from "@/lib/templates";

interface Props {
    templates: Template[];
    selected: Template;
    onSelect: (t: Template) => void;
}

export default function TemplateSidebar({
    templates,
    selected,
    onSelect,
}: Props) {
    return (
        <aside
            style={{
                width: 260,
                minWidth: 260,
                background: "var(--bg-card)",
                borderRight: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                padding: "32px 0",
                position: "sticky",
                top: 0,
                height: "100vh",
                overflowY: "auto",
            }}
        >
            {/* Logo */}
            <div style={{ padding: "0 24px 28px" }}>
                <div
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        color: "var(--accent)",
                        letterSpacing: "-0.01em",
                    }}
                >
                    AsyncPrompts
                </div>
                <div
                    style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        marginTop: 2,
                    }}
                >
                    fill. build. copy.
                </div>
            </div>

            {/* Divider */}
            <div
                style={{
                    height: 1,
                    background: "var(--border)",
                    margin: "0 0 16px",
                }}
            />

            {/* Section label */}
            <div
                style={{
                    padding: "0 24px 10px",
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                }}
            >
                Templates
            </div>

            {/* Template list */}
            <nav style={{ flex: 1 }}>
                {templates.map((t) => {
                    const isActive = t.id === selected.id;
                    return (
                        <button
                            key={t.id}
                            onClick={() => onSelect(t)}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 12,
                                width: "100%",
                                padding: "12px 24px",
                                background: isActive
                                    ? "var(--accent-dim)"
                                    : "transparent",
                                border: "none",
                                borderLeft: isActive
                                    ? "2px solid var(--accent)"
                                    : "2px solid transparent",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "background 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive)
                                    (
                                        e.currentTarget as HTMLButtonElement
                                    ).style.background = "var(--bg-hover)";
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive)
                                    (
                                        e.currentTarget as HTMLButtonElement
                                    ).style.background = "transparent";
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 18,
                                    lineHeight: 1.4,
                                    flexShrink: 0,
                                }}
                            >
                                {t.icon}
                            </span>
                            <div>
                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive
                                            ? "var(--accent)"
                                            : "var(--text-primary)",
                                        lineHeight: 1.4,
                                        fontFamily: "var(--font-body)",
                                    }}
                                >
                                    {t.name}
                                </div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: "var(--text-muted)",
                                        marginTop: 2,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {t.fields.length} field
                                    {t.fields.length !== 1 ? "s" : ""}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </nav>

            {/* Footer hint */}
            <div
                style={{
                    padding: "20px 24px 0",
                    borderTop: "1px solid var(--border)",
                    fontSize: 11,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                }}
            >
                Add templates in{" "}
                <code
                    style={{
                        fontFamily: "var(--font-mono)",
                        background: "var(--border)",
                        padding: "1px 4px",
                        borderRadius: 3,
                        fontSize: 10,
                    }}
                >
                    lib/templates.ts
                </code>
            </div>
        </aside>
    );
}
