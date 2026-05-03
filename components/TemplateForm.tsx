"use client";

import { Template } from "@/lib/templates";

interface Props {
  template: Template;
  fields: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

export default function TemplateForm({ template, fields, onChange }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {template.fields.map((field, idx) => {
        const filled = Boolean(fields[field.id]?.trim());
        return (
          <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Label row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label
                htmlFor={field.id}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: filled ? "var(--text-primary)" : "var(--text-secondary)",
                  letterSpacing: "0.01em",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    background: filled ? "var(--success)" : "var(--border)",
                    fontSize: 10,
                    color: filled ? "#fff" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                >
                  {filled ? "✓" : idx + 1}
                </span>
                {field.label}
              </label>
              {fields[field.id] && (
                <button
                  onClick={() => onChange(field.id, "")}
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  clear
                </button>
              )}
            </div>

            {/* Input / Textarea */}
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                value={fields[field.id] || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                rows={field.rows || 6}
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: `1px solid ${filled ? "var(--border-active)" : "var(--border)"}`,
                  borderRadius: 8,
                  padding: "14px 16px",
                  fontSize: 14,
                  color: "var(--text-primary)",
                  resize: "vertical",
                  outline: "none",
                  lineHeight: 1.6,
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = filled
                    ? "var(--border-active)"
                    : "var(--border)";
                }}
              />
            ) : (
              <input
                id={field.id}
                type="text"
                value={fields[field.id] || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: `1px solid ${filled ? "var(--border-active)" : "var(--border)"}`,
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontSize: 14,
                  color: "var(--text-primary)",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = filled
                    ? "var(--border-active)"
                    : "var(--border)";
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
