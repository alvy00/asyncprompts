"use client";

import { useState, useCallback } from "react";
import { templates, Template } from "@/lib/templates";
import TemplateSidebar from "./TemplateSidebar";
import TemplateForm from "./TemplateForm";
import PreviewModal from "./PreviewModal";

export default function Homepage() {
    const [selected, setSelected] = useState<Template>(templates[0]);
    const [fields, setFields] = useState<Record<string, string>>({});
    const [preview, setPreview] = useState<string | null>(null);

    const handleSelect = useCallback((t: Template) => {
        setSelected(t);
        setFields({});
        setPreview(null);
    }, []);

    const handleFieldChange = useCallback((id: string, value: string) => {
        setFields((prev) => ({ ...prev, [id]: value }));
    }, []);

    const buildPrompt = useCallback(() => {
        let body = selected.body;
        for (const field of selected.fields) {
            const val = fields[field.id] || `[${field.label}]`;
            body = body.replaceAll(`{{${field.id}}}`, val);
        }
        return body;
    }, [selected, fields]);

    const handleGenerate = () => {
        setPreview(buildPrompt());
    };

    const filledCount = selected.fields.filter((f) =>
        fields[f.id]?.trim(),
    ).length;
    const totalCount = selected.fields.length;

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "var(--bg)",
            }}
        >
            {/* Sidebar */}
            <TemplateSidebar
                templates={templates}
                selected={selected}
                onSelect={handleSelect}
            />

            {/* Main */}
            <main
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "48px 56px",
                    maxWidth: 820,
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: 40 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            marginBottom: 10,
                        }}
                    >
                        <span style={{ fontSize: 32 }}>{selected.icon}</span>
                        <h1
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 28,
                                fontWeight: 400,
                                color: "var(--text-primary)",
                                lineHeight: 1.2,
                            }}
                        >
                            {selected.name}
                        </h1>
                    </div>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: 15,
                            marginLeft: 46,
                        }}
                    >
                        {selected.description}
                    </p>

                    {/* Progress bar */}
                    <div style={{ marginTop: 20, marginLeft: 46 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: 6,
                                fontSize: 12,
                                color: "var(--text-muted)",
                                fontFamily: "var(--font-mono)",
                            }}
                        >
                            <span>
                                {filledCount}/{totalCount} fields filled
                            </span>
                            {filledCount === totalCount && (
                                <span style={{ color: "var(--success)" }}>
                                    ✓ ready to generate
                                </span>
                            )}
                        </div>
                        <div
                            style={{
                                height: 3,
                                background: "var(--border)",
                                borderRadius: 99,
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: `${totalCount ? (filledCount / totalCount) * 100 : 0}%`,
                                    background:
                                        filledCount === totalCount
                                            ? "var(--success)"
                                            : "var(--accent)",
                                    borderRadius: 99,
                                    transition:
                                        "width 0.3s ease, background 0.3s ease",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        background: "var(--border)",
                        marginBottom: 36,
                    }}
                />

                {/* Form */}
                <TemplateForm
                    template={selected}
                    fields={fields}
                    onChange={handleFieldChange}
                />

                {/* Generate button */}
                <div style={{ marginTop: 36 }}>
                    <button
                        onClick={handleGenerate}
                        style={{
                            background: "var(--accent)",
                            color: "#0e0e0f",
                            border: "none",
                            borderRadius: 8,
                            padding: "14px 32px",
                            fontSize: 15,
                            fontWeight: 600,
                            fontFamily: "var(--font-body)",
                            cursor: "pointer",
                            letterSpacing: "0.01em",
                            transition:
                                "background 0.15s ease, transform 0.1s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.background =
                                "var(--accent-hover)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.background =
                                "var(--accent)";
                        }}
                        onMouseDown={(e) => {
                            (e.target as HTMLButtonElement).style.transform =
                                "scale(0.98)";
                        }}
                        onMouseUp={(e) => {
                            (e.target as HTMLButtonElement).style.transform =
                                "scale(1)";
                        }}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2 8h12M8 2l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Build Prompt
                    </button>
                </div>
            </main>

            {/* Preview modal */}
            {preview && (
                <PreviewModal
                    prompt={preview}
                    onClose={() => setPreview(null)}
                />
            )}
        </div>
    );
}
