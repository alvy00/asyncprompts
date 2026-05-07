import { motion } from "framer-motion";

export default function SidebarItem({
    icon,
    label,
    sublabel,
    active,
    onClick,
}: {
    icon: string;
    label: string;
    sublabel?: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="group relative w-full flex items-start gap-4 px-4 py-3 rounded-xl transition-all duration-200 outline-none border-none cursor-pointer text-left bg-transparent"
        >
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold-muted border-l-2 border-gold rounded-r-sm shadow-[inset_1px_0_10px_rgba(212,168,67,0.05)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}

            <div className="relative z-10 flex gap-4 w-full items-center">
                <span
                    className={`text-xl transition-transform duration-300 ${active ? "scale-110 drop-shadow-[0_0_8px_rgba(212,168,67,0.4)]" : "group-hover:scale-110 opacity-60"}`}
                >
                    {icon}
                </span>

                <div className="flex flex-col items-start overflow-hidden">
                    <span
                        className={`text-[13px] leading-snug truncate w-full transition-colors ${active ? "text-gold font-medium" : "text-content-primary"}`}
                    >
                        {label}
                    </span>
                    {sublabel && (
                        <span className="text-[10px] font-mono text-content-muted mt-0.5">
                            {sublabel}
                        </span>
                    )}
                </div>
            </div>

            {!active && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-panel-hover transition-opacity rounded-xl -z-0" />
            )}
        </button>
    );
}
