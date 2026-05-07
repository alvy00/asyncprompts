"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
    prompt: string;
    onClose: () => void;
}

export default function PreviewModal({ prompt, onClose }: Props) {
    const [copied, setCopied] = useState(false);

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
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const el = document.createElement("textarea");
            el.value = prompt;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const wordCount = prompt.trim().split(/\s+/).filter(Boolean).length;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                className="relative w-full max-w-4xl h-[85vh] bg-panel border border-stroke rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
                {/* Header */}
                <header className="flex items-center justify-between px-8 py-5 border-b border-stroke bg-panel/50">
                    <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl text-content-primary italic">
                            Prompt
                        </h3>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold border border-gold/20 uppercase tracking-widest">
                            {wordCount} Words
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleCopy}
                            className={`px-5 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                                copied
                                    ? "bg-success-green text-white"
                                    : "bg-gold text-background hover:bg-gold-bright"
                            }`}
                        >
                            {copied ? "Copied" : "Copy to Clipboard"}
                        </button>
                        <button
                            onClick={onClose}
                            className="text-content-muted hover:text-white transition-colors"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto bg-[#0c0c0e] relative selection:bg-gold/30 selection:text-gold">
                    <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-stroke/30" />
                    <pre className="p-10 pl-16 font-mono text-[14px] leading-[1.7] text-content-primary/90 whitespace-pre-wrap break-words">
                        {prompt.trim()}
                    </pre>
                </div>

                <footer className="px-8 py-3 border-t border-stroke bg-panel/30">
                    <p className="text-[10px] font-mono text-content-muted uppercase tracking-[0.2em]">
                        Paste it on Claude, Gemini or an ai agent of your choice
                    </p>
                </footer>
            </motion.div>
        </div>
    );
}
