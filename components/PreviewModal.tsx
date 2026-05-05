"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
    prompt: string;
    onClose: () => void;
}

export default function PreviewModal({ prompt, onClose }: Props) {
    const [copied, setCopied] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            const el = document.createElement("textarea");
            el.value = prompt;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        }
    };

    const charCount = prompt.length;
    const wordCount = prompt.trim().split(/\s+/).filter(Boolean).length;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Animated Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-panel border border-stroke rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
            >
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-5 border-b border-stroke bg-panel/50 backdrop-blur-md">
                    <div>
                        <h3 className="font-display text-xl text-content-primary">
                            Prompt Preview
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="font-mono text-[10px] text-gold uppercase tracking-widest bg-gold-muted px-1.5 py-0.5 rounded">
                                Generated Output
                            </span>
                            <span className="text-[11px] font-mono text-content-muted">
                                {wordCount} words · {charCount} characters
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleCopy}
                            className={`flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                                copied
                                    ? "bg-success-green text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    : "bg-gold text-background hover:bg-gold-bright shadow-[0_0_15px_rgba(212,168,67,0.2)]"
                            }`}
                        >
                            {copied ? (
                                <>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path
                                            d="M20 6L9 17l-5-5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Copied
                                </>
                            ) : (
                                <>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <rect
                                            x="9"
                                            y="9"
                                            width="13"
                                            height="13"
                                            rx="2"
                                            ry="2"
                                        />
                                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                                    </svg>
                                    Copy Prompt
                                </>
                            )}
                        </button>

                        <button
                            onClick={onClose}
                            className="p-2 text-content-muted hover:text-content-primary hover:bg-panel-hover rounded-lg transition-colors border border-transparent hover:border-stroke"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-8 bg-background/30 custom-scrollbar">
                    <pre className="font-mono text-sm leading-relaxed text-content-primary whitespace-pre-wrap break-words selection:bg-gold/20 selection:text-gold">
                        {prompt}
                    </pre>
                </div>

                {/* Footer Hint */}
                <footer className="px-6 py-4 border-t border-stroke bg-panel/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-content-muted italic">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="gold"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path
                                d="M12 16v-4M12 8h.01"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Ready to be pasted into ChatGPT, Claude, or Gemini.
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-[10px] font-mono text-content-muted uppercase tracking-tighter opacity-50">
                            Press{" "}
                            <kbd className="bg-stroke px-1.5 py-0.5 rounded border border-stroke-active text-content-secondary">
                                ESC
                            </kbd>{" "}
                            to exit
                        </span>
                    </div>
                </footer>
            </motion.div>
        </div>
    );
}
