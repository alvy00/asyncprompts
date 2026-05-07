import { Resource } from ".";

export const RESOURCES: Resource[] = [
    { id: "interview", name: "Interview Prep", icon: "💬" },
    { id: "misc", name: "Misc", icon: "📚" },
    { id: "best-practices", name: "Best Practices", icon: "✨" },
];

export const RESOURCE_DATA = [
    {
        category: "JavaScript Core",
        tag: "JS",
        links: [
            {
                title: "Technical Docs & LeetCode",
                type: "Docs",
                url: "https://docs.google.com/document/d/1YeeWzKycMEQulCUlOJOwtFLeCpVVLuIwOytvzwgKSiY/edit?usp=sharing",
            },
            {
                title: "Masterclass Recording",
                type: "Video",
                url: "https://drive.google.com/file/d/1cGaZqA0CpkAwzRvuVwafhvFR-hRBPwZ-/view?usp=sharing",
            },
            {
                title: "Deep Dive Slides",
                type: "Notion",
                url: "https://www.notion.so/JavaScript-GAP-2b1e6b9c449a809289f1d1513087bdd6?source=copy_link",
            },
        ],
    },
    {
        category: "React Architecture",
        tag: "RE",
        links: [
            {
                title: "Practice Materials",
                type: "Docs",
                url: "https://docs.google.com/document/d/1jUdj1qkerC49fBkZ_qC8zHazgN9SIjwJp-fn2huSjX0/edit?usp=sharing",
            },
            {
                title: "Interview Prep Session",
                type: "Video",
                url: "https://drive.google.com/file/d/12tGrDDlQVSfTqbjVW90drCGYBqefXVuy/view?usp=sharing",
            },
            {
                title: "Architecture Slides",
                type: "Notion",
                url: "https://www.notion.so/React-Interview-Preparation-30be6b9c449a8021b0d6f6e9fec7aba4?source=copy_link",
            },
        ],
    },
    {
        category: "Next.js Mastery",
        tag: "NX",
        links: [
            {
                title: "Practice Materials",
                type: "Docs",
                url: "https://docs.google.com/document/d/1pZPj-CbeS_Q15oXx2HU5Cad-7csGbb7jexR7ytg-Vuw/edit?usp=sharing",
            },
            {
                title: "Session Recording",
                type: "Video",
                url: "https://drive.google.com/file/d/1UMn-pInAxvwBoVQCVtuq9AmOBlj-F-lx/view?usp=sharing",
            },
            {
                title: "Next.js Roadmap Slides",
                type: "Notion",
                url: "https://www.notion.so/Next-Js-Interview-Prep-319e6b9c449a80e0b05df500baa1f49b?source=copy_link",
            },
        ],
    },
    {
        category: "Backend Engineering",
        tag: "ND",
        links: [
            {
                title: "Node & Express Tasks",
                type: "Docs",
                url: "https://docs.google.com/document/d/16mFIQrJsdbU1DG04KjZz5kasNh0jJ2Jh0DIHXfxl3BY/edit?usp=drivesdk",
            },
            {
                title: "Backend Session Video",
                type: "Video",
                url: "https://drive.google.com/file/d/1hxscHicKY_PX6kQ4GshDHqnQpe2JcpGy/view?usp=sharing",
            },
            {
                title: "Backend Session Slides",
                type: "Notion",
                url: "https://www.notion.so/Node-Express-and-MongoDB-312e6b9c449a8008a537c970327fa46e?source=copy_link",
            },
        ],
    },
];

export const MISC_RESOURCES = [
    {
        category: "Useful Links",
        tag: "01",
        links: [
            {
                title: "Leading companies for early careers",
                type: "Website",
                url: "https://devhubbd.com/companies",
            },
        ],
    },
];
