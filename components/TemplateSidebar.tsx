"use client";

import { useState } from "react";
import { Template } from "@/lib/templates";
import { motion, AnimatePresence } from "framer-motion";

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
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (t: Template) => {
        onSelect(t);
        setIsOpen(false); // Close drawer on mobile after selection
    };

    return (
        <>
            {/* MOBILE HEADER - Only visible on small screens */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-panel/80 backdrop-blur-md border-b border-stroke z-40 flex items-center justify-between px-6">
                <h1 className="font-display text-xl text-gold tracking-tight">
                    AsyncPrompts
                </h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-gold hover:bg-gold-muted rounded-lg transition-colors"
                >
                    {isOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* SIDEBAR CONTAINER */}
            <aside
                className={`
                fixed inset-y-0 left-0 z-50 w-[280px] bg-panel border-r border-stroke flex flex-col overflow-hidden transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
                ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"}
            `}
            >
                {/* Branding Header */}
                <header className="pt-10 pb-8 px-7 hidden lg:block">
                    <h1 className="font-display text-2xl text-gold tracking-tight italic">
                        AsyncPrompts
                    </h1>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="h-[1px] w-3 bg-gold/30"></span>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-content-muted">
                            fill • build • copy
                        </p>
                    </div>
                </header>

                {/* Navigation Content */}
                <div className="flex-1 overflow-y-auto px-3 pb-6 mt-20 lg:mt-0">
                    <div className="mb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-content-muted opacity-50">
                        Prompt Library
                    </div>

                    <nav className="space-y-1">
                        {templates.map((t) => {
                            const isActive = t.id === selected.id;

                            return (
                                <button
                                    key={t.id}
                                    onClick={() => handleSelect(t)}
                                    className="group relative w-full flex items-start gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 outline-none border-none cursor-pointer text-left bg-transparent"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gold-muted border-l-2 border-gold rounded-r-sm shadow-[inset_1px_0_10px_rgba(212,168,67,0.05)]"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    <div className="relative z-10 flex gap-4 w-full items-center">
                                        <span
                                            className={`text-xl transition-transform duration-300 ${
                                                isActive
                                                    ? "scale-110 drop-shadow-[0_0_8px_rgba(212,168,67,0.4)]"
                                                    : "group-hover:scale-110 opacity-60"
                                            }`}
                                        >
                                            {t.icon}
                                        </span>

                                        <div className="flex flex-col items-start overflow-hidden">
                                            <span
                                                className={`text-[13px] leading-snug truncate w-full transition-colors ${
                                                    isActive
                                                        ? "text-gold font-medium"
                                                        : "text-content-primary"
                                                }`}
                                            >
                                                {t.name}
                                            </span>
                                            <span className="text-[10px] font-mono text-content-muted mt-0.5">
                                                {t.fields.length} variables
                                            </span>
                                        </div>
                                    </div>

                                    {!isActive && (
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-panel-hover transition-opacity rounded-xl -z-0" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Spacer for mobile layout to prevent content hiding under header */}
            <div className="h-16 lg:hidden" />
        </>
    );
}
