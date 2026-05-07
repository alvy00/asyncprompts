export default function DosDonts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="text-success-green font-display text-lg uppercase tracking-widest">
                    Dos
                </h3>
                <ul className="space-y-3">
                    {[
                        "Keep prompts concise.",
                        "Use clear delimiters.",
                        "Provide context.",
                    ].map((text, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-content-secondary"
                        >
                            <span className="h-1 w-1 rounded-full bg-success-green" />{" "}
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-red-400 font-display text-lg uppercase tracking-widest">
                    Donts
                </h3>
                <ul className="space-y-3">
                    {[
                        "Avoid ambiguity.",
                        "Don't conflict rules.",
                        "Avoid over-explaining.",
                    ].map((text, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-content-secondary"
                        >
                            <span className="h-1 w-1 rounded-full bg-red-400" />{" "}
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
