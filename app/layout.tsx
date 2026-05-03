import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AsyncPrompts — Your AI Prompt Workspace",
    description: "Fill in the blanks. Copy. Generate.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
