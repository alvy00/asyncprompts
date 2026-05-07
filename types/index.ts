export interface Resource {
    id: string;
    name: string;
    icon: string;
}
export interface Props {
    templates: Template[];
    selected: Template | Resource;
    onSelect: (t: Template | Resource) => void;
}
export interface TemplateField {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea";
    rows?: number;
}

export interface Template {
    id: string;
    name: string;
    description: string;
    icon: string;
    fields: TemplateField[];
    body: string;
}
