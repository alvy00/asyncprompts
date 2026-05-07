"use client";

import BestPractices from "./Resources/BestPractices";
import InterviewPrep from "./Resources/InterviewPrep";
import Misc from "./Resources/Misc";

interface ResourceContentProps {
    id: string;
}

export default function ResourceSection({ id }: ResourceContentProps) {
    return (
        <div className="w-full">
            {(() => {
                switch (id) {
                    case "interview":
                        return <InterviewPrep />;
                    case "misc":
                        return <Misc />;
                    case "best-practices":
                        return <BestPractices />;
                    default:
                        return (
                            <div className="flex flex-col items-center justify-center py-20 text-content-muted/50 font-mono text-xs uppercase tracking-widest">
                                <span className="mb-2">404</span>
                                Resource context not found.
                            </div>
                        );
                }
            })()}
        </div>
    );
}
