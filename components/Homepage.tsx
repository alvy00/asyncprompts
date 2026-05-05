"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const isComplete = filledCount === totalCount && totalCount > 0;
    const progress = totalCount > 0 ? (filledCount / totalCount) * 100 : 0;

    return (
        <div className="flex min-h-screen bg-background selection:bg-gold-muted selection:text-gold">
            <TemplateSidebar
                templates={templates}
                selected={selected}
                onSelect={handleSelect}
            />

            <main className="flex-1 flex flex-col items-center overflow-y-auto scroll-smooth mt-5 md:mt-[-5]">
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-3xl px-6 py-16 sm:px-8"
                >
                    {/*Header Section */}
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
                                    {selected.description}
                                </p>
                            </div>
                        </div>

                        {/* Premium Progress Engine */}
                        <div className="bg-panel border border-stroke p-5 rounded-2xl shadow-sm">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-mono text-[10px] text-content-muted tracking-[0.2em] uppercase">
                                    Data Integrity
                                </span>
                                <span
                                    className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                                        isComplete
                                            ? "text-success-green"
                                            : "text-gold"
                                    }`}
                                >
                                    {filledCount} / {totalCount} PARAMS DEFINED
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-stroke/50">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className={`h-full transition-colors duration-500 ${
                                        isComplete
                                            ? "bg-success-green shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                                            : "bg-gold shadow-[0_0_12px_rgba(212,168,67,0.3)]"
                                    }`}
                                />
                            </div>
                        </div>
                    </header>

                    {/* Prompt Construction Area */}
                    <section className="bg-panel/40 border border-stroke rounded-[2rem] p-6 sm:p-10 backdrop-blur-md shadow-xl">
                        <TemplateForm
                            template={selected}
                            fields={fields}
                            onChange={handleFieldChange}
                        />

                        <div className="mt-10 pt-8 border-t border-stroke/60">
                            <motion.button
                                whileHover={{
                                    scale: 1.01,
                                    backgroundColor: "var(--color-gold-bright)",
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
                                <span className="uppercase tracking-widest text-sm cursor-pointer">
                                    Generate Prompt
                                </span>
                            </motion.button>

                            <p className="text-center text-[10px] text-content-muted mt-4 font-mono uppercase tracking-tighter opacity-40">
                                Variables are auto-injected into the prompt body
                            </p>
                        </div>
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
