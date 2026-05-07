"use client";

import { MISC_RESOURCES } from "@/types/constants";
import { motion } from "framer-motion";

export default function Misc() {
    return (
        <div className="space-y-12">
            {/* Resources Grid */}
            <div className="space-y-10">
                {MISC_RESOURCES.map((section) => (
                    <div key={section.category} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] bg-gold/10 text-gold border border-gold/20 px-2 py-0.5 rounded tracking-tighter">
                                {section.tag}
                            </span>
                            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-content-primary/80">
                                {section.category}
                            </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-panel/40 border border-stroke p-5 rounded-2xl hover:border-gold/30 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-mono text-gold/60 uppercase tracking-widest">
                                                {link.type}
                                            </span>
                                            <span className="text-[13px] text-content-secondary group-hover:text-content-primary transition-colors">
                                                {link.title}
                                            </span>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-gold"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
