"use client";

import { useState, useEffect } from "react";

interface Props {
  prompt: string;
  onClose: () => void;
}

export default function PreviewModal({ prompt, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  // Close on Escape
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
      // Fallback
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
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          zIndex: 100,
          animation: "fadeIn 0.15s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            width: "100%",
            maxWidth: 760,
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            animation: "slideUp 0.2s ease",
          }}
        >
          {/* Modal header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              borderBottom: "1px solid var(--border)",
              flexShrink: 0,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  color: "var(--text-primary)",
                }}
              >
                Prompt Preview
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  marginTop: 2,
                }}
              >
                {wordCount} words · {charCount} chars
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button
                onClick={handleCopy}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: copied ? "var(--success)" : "var(--accent)",
                  color: copied ? "#fff" : "#0e0e0f",
                  border: "none",
                  borderRadius: 7,
                  padding: "9px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "background 0.2s ease, color 0.2s ease",
                  letterSpacing: "0.01em",
                  minWidth: 130,
                  justifyContent: "center",
                }}
              >
                {copied ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="4" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 1h8.5A.5.5 0 0113 1.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Copy to Clipboard
                  </>
                )}
              </button>
              <button
                onClick={onClose}
                style={{
                  background: "var(--bg-hover)",
                  border: "1px solid var(--border)",
                  borderRadius: 7,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  fontSize: 16,
                  flexShrink: 0,
                }}
                title="Close (Esc)"
              >
                ×
              </button>
            </div>
          </div>

          {/* Prompt body */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                lineHeight: 1.8,
                color: "var(--text-primary)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {prompt}
            </pre>
          </div>

          {/* Footer hint */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "12px 24px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 5.5v3M6 4h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Copy this prompt and paste it into ChatGPT, Claude, Gemini, or any AI chatbot.
            Press <kbd style={{ fontFamily: "var(--font-mono)", background: "var(--border)", padding: "0 4px", borderRadius: 3 }}>Esc</kbd> to close.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
