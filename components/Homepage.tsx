"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { templates } from "@/lib/templates";
import TemplateSidebar from "./TemplateSidebar";
import TemplateForm from "./TemplateForm";
import PreviewModal from "./PreviewModal";
import { Template } from "@/types";
import ResourceSection from "./ResourceSection";

// Define the Resource type to match the Sidebar update
interface Resource {
    id: string;
    name: string;
    icon: string;
}

export default function Homepage() {
    // State can now be a Template or a string (resource ID)
    const [selected, setSelected] = useState<Template | Resource>(templates[0]);
    const [fields, setFields] = useState<Record<string, string>>({});
    const [preview, setPreview] = useState<string | null>(null);

    // Helper to determine if we are looking at a template or a resource
    const isTemplate = (item: Template | Resource): item is Template => {
        return (item as Template).body !== undefined;
    };

    const handleSelect = useCallback((item: Template | Resource) => {
        setSelected(item);
        setFields({});
        setPreview(null);
    }, []);

    const handleFieldChange = useCallback((id: string, value: string) => {
        setFields((prev) => ({ ...prev, [id]: value }));
    }, []);

    const buildPrompt = useCallback(() => {
        if (!isTemplate(selected)) return "";
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

    // Memoize stats only if a template is selected
    const stats = useMemo(() => {
        if (!isTemplate(selected)) return null;
        const filled = selected.fields.filter((f: { id: string | number }) =>
            fields[f.id]?.trim(),
        ).length;
        const total = selected.fields.length;
        return {
            filled,
            total,
            isComplete: filled === total && total > 0,
            progress: total > 0 ? (filled / total) * 100 : 0,
        };
    }, [selected, fields]);

    return (
        <div className="flex min-h-screen bg-background selection:bg-gold-muted selection:text-gold">
            <TemplateSidebar
                templates={templates}
                selected={selected}
                onSelect={handleSelect}
            />

            <main className="flex-1 flex flex-col items-center overflow-y-auto scroll-smooth mt-5 md:mt-0">
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-3xl px-6 py-16 sm:px-8"
                >
                    {/* Header Section */}
                    <header className="mb-12">
                        <div className="flex items-center gap-6 mb-8">
                            <span className="text-4xl sm:text-5xl bg-panel p-4 rounded-2xl border border-stroke shadow-2xl flex items-center justify-center">
                                {selected.icon}
                            </span>
                            <div>
                                <h1 className="font-display text-3xl sm:text-4xl text-content-primary mb-2 tracking-tight">
                                    {selected.name}
                                </h1>
                                <p className="text-content-secondary text-sm sm:text-base max-w-md leading-relaxed">
                                    {isTemplate(selected)
                                        ? selected.description
                                        : `Expert guide and curated content for ${selected.name}.`}
                                </p>
                            </div>
                        </div>

                        {/* Progress bar only shows for templates */}
                        {stats && (
                            <div className="bg-panel border border-stroke p-5 rounded-2xl shadow-sm">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-mono text-[10px] text-content-muted tracking-[0.2em] uppercase">
                                        Data Integrity
                                    </span>
                                    <span
                                        className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${stats.isComplete ? "text-success-green" : "text-gold"}`}
                                    >
                                        {stats.filled} / {stats.total} PARAMS
                                        DEFINED
                                    </span>
                                </div>
                                <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-stroke/50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${stats.progress}%`,
                                        }}
                                        className={`h-full transition-colors duration-500 ${stats.isComplete ? "bg-success-green shadow-[0_0_12px_rgba(16,185,129,0.3)]" : "bg-gold shadow-[0_0_12px_rgba(212,168,67,0.3)]"}`}
                                    />
                                </div>
                            </div>
                        )}
                    </header>

                    {/* Content Switching Logic */}
                    <section className="bg-panel/40 border border-stroke rounded-[2rem] p-6 sm:p-10 backdrop-blur-md shadow-xl">
                        {isTemplate(selected) ? (
                            <>
                                <TemplateForm
                                    template={selected}
                                    fields={fields}
                                    onChange={handleFieldChange}
                                />
                                <div className="mt-10 pt-8 border-t border-stroke/60">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.01,
                                            backgroundColor:
                                                "var(--color-gold-bright)",
                                            boxShadow:
                                                "0 20px 40px -15px rgba(212, 168, 67, 0.25)",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleGenerate}
                                        className="w-full py-4 bg-gold text-background font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                        <span className="uppercase tracking-widest text-sm">
                                            Generate Prompt
                                        </span>
                                    </motion.button>
                                    <p className="text-center text-[10px] text-content-muted mt-4 font-mono uppercase tracking-tighter opacity-40">
                                        Variables are auto-injected into the
                                        prompt body
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="prose prose-invert max-w-none">
                                <ResourceSection id={selected.id} />
                            </div>
                        )}
                    </section>
                </motion.div>
            </main>

            <AnimatePresence mode="wait">
                {preview && (
                    <PreviewModal
                        prompt={preview}
                        onClose={() => setPreview(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
