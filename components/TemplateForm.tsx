"use client";

import { Template } from "@/lib/templates";
import { motion } from "framer-motion";

interface Props {
    template: Template;
    fields: Record<string, string>;
    onChange: (id: string, value: string) => void;
}

export default function TemplateForm({ template, fields, onChange }: Props) {
    return (
        <div className="flex flex-col gap-10">
            {template.fields.map((field, idx) => {
                const filled = Boolean(fields[field.id]?.trim());

                return (
                    <div key={field.id} className="group flex flex-col gap-3">
                        {/* Label row */}
                        <div className="flex items-center justify-between px-1">
                            <label
                                htmlFor={field.id}
                                className={`flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                                    filled
                                        ? "text-gold"
                                        : "text-content-secondary group-focus-within:text-gold-bright"
                                }`}
                            >
                                <span
                                    className={`flex items-center justify-center w-6 h-6 rounded-md font-mono text-[10px] border transition-all duration-300 ${
                                        filled
                                            ? "bg-gold border-gold text-background shadow-[0_0_10px_rgba(212,168,67,0.4)]"
                                            : "bg-background border-stroke text-content-muted group-focus-within:border-gold/50"
                                    }`}
                                >
                                    {filled ? "✓" : idx + 1}
                                </span>
                                {field.label}
                            </label>

                            {fields[field.id] && (
                                <motion.button
                                    initial={{ opacity: 0, x: 5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    onClick={() => onChange(field.id, "")}
                                    className="text-[10px] uppercase tracking-tighter text-content-muted hover:text-error-red transition-colors font-mono"
                                >
                                    [ Clear Parameter ]
                                </motion.button>
                            )}
                        </div>

                        {/* Input / Textarea */}
                        <div className="relative">
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.id}
                                    value={fields[field.id] || ""}
                                    onChange={(e) =>
                                        onChange(field.id, e.target.value)
                                    }
                                    placeholder={field.placeholder}
                                    rows={field.rows || 5}
                                    className={`w-full bg-background/50 border rounded-xl px-4 py-3.5 text-sm text-content-primary placeholder:text-content-muted/30 outline-none transition-all duration-300 resize-none leading-relaxed ${
                                        filled
                                            ? "border-gold/40 shadow-[inset_0_0_12px_rgba(212,168,67,0.03)]"
                                            : "border-stroke focus:border-gold-bright focus:shadow-[0_0_20px_rgba(212,168,67,0.1)]"
                                    }`}
                                />
                            ) : (
                                <input
                                    id={field.id}
                                    type="text"
                                    value={fields[field.id] || ""}
                                    onChange={(e) =>
                                        onChange(field.id, e.target.value)
                                    }
                                    placeholder={field.placeholder}
                                    className={`w-full bg-background/50 border rounded-xl px-4 py-4 text-sm text-content-primary placeholder:text-content-muted/30 outline-none transition-all duration-300 ${
                                        filled
                                            ? "border-gold/40 shadow-[inset_0_0_12px_rgba(212,168,67,0.03)]"
                                            : "border-stroke focus:border-gold-bright focus:shadow-[0_0_20px_rgba(212,168,67,0.1)]"
                                    }`}
                                />
                            )}

                            {/* Subtle accent line for focused inputs */}
                            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-focus-within:via-gold/40 transition-all duration-500" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
