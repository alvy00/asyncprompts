"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarItem from "./ui/SidebarItem";
import { Props, Resource, Template } from "@/types";
import { RESOURCES } from "@/types/constants";

export default function TemplateSidebar({
    templates,
    selected,
    onSelect,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (item: Template | Resource) => {
        onSelect(item);
        setIsOpen(false);
    };

    const isActive = (id: string) => {
        return typeof selected === "string"
            ? selected === id
            : selected.id === id;
    };

    return (
        <>
            {/* MOBILE HEADER */}
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

                <div className="flex-1 overflow-y-auto px-3 pb-6 mt-20 lg:mt-0">
                    {/* SECTION 1: PROMPT LIBRARY */}
                    <div className="mb-4 mt-4 px-4 font-mono text-[10px] uppercase tracking-widest text-content-muted opacity-50">
                        Prompt Library
                    </div>
                    <nav className="space-y-1 mb-8">
                        {templates.map((t) => (
                            <SidebarItem
                                key={t.id}
                                icon={t.icon}
                                label={t.name}
                                sublabel={`${t.fields.length} variables`}
                                active={isActive(t.id)}
                                onClick={() => handleSelect(t)}
                            />
                        ))}
                    </nav>

                    {/* SECTION 2: RESOURCES */}
                    <div className="mb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-content-muted opacity-50">
                        Resources
                    </div>
                    <nav className="space-y-1">
                        {RESOURCES.map((r) => (
                            <SidebarItem
                                key={r.id}
                                icon={r.icon}
                                label={r.name}
                                active={isActive(r.id)}
                                onClick={() => handleSelect(r)}
                            />
                        ))}
                    </nav>
                </div>
            </aside>

            <div className="h-16 lg:hidden" />
        </>
    );
}
