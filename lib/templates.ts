import { Template } from "@/types";

export const templates: Template[] = [
    {
        id: "resume-job-match",
        name: "Career Objective",
        description:
            "A prompt to redefine your career objective to a specific job posting",
        icon: "📄",
        fields: [
            {
                id: "job_description",
                label: "Job Description",
                placeholder: "Paste the job posting here...",
                type: "textarea",
                rows: 10,
            },
        ],
        body: `ROLE: Act as an expert Resume Writer and Tech Recruiter with 10+ years of experience crafting ATS-optimized resumes for software engineering roles.
          TASK: Write a highly customized, ATS-friendly Career Objective for my resume, strictly tailored to the Job Description provided below.

          MY PROFILE
            Experience Level: Fresher (0-1 year)
            Tech Stack:
              Frontend : HTML | CSS | Tailwind CSS | React.js | Next.js  | JavaScript | TypeScript | REST API Integration
              Backend : Node.js | Express.js | MongoDB | PostgreSQL  | JWT Authentication | Firebase | WebSockets
              Tools & Others : Git & GitHub | VS Code | Jira | Chrome DevTools | Postman | Vercel | Figma | npm/yarn
              Practices & Methodology: Agile | Scrum | API Design & Integration | Responsive Design | Version Control | Code Review 
              Soft Skills : Problem-Solving | Team Leadership | Scrum Management | Communication | Adaptability
            Key Strengths:
              Strong in JavaScript — especially logic building & problem solving
              Fast learner who adapts quickly to new tools and frameworks
              Good communication & collaboration skills in team environments
              competitive programmer, adaptive
            JOB DESCRIPTION:
              {{job_description}}

          WRITING RULES — follow all strictly:
            Tailor every word to the JD — no copy-paste generics
            Length: 2-3 lines max (50-70 words)
            Open with a strong action verb (Engineered, Developed, Built, Leveraged, etc.)
            Mention 1-2 specific technologies from the JD
            Include a value proposition — what you bring to the employer
            Reference the company name or role title if available in the JD
            Never use vague phrases like:
            "Seeking a challenging position"
            "Passionate fresher looking for an opportunity"
            "Hardworking and dedicated individual"
            Tone: Natural, professional, confident — human-written, not robotic
            
          OUTPUT FORMAT:
            Deliver exactly 2 variations, formatted like this:
            Variation 1 — [Focus e.g., Frontend-Heavy] (Career Objective text)
            Variation 2 — [Focus e.g., Full-Stack / Growth-Oriented] (Career Objective text)
            After both variations, add a one-line note explaining what makes each one different and when to use which.`,
    },
    {
        id: "email",
        name: "Email",
        description:
            "Prompt to generate a compelling, personalised email for the HR",
        icon: "✉️",
        fields: [
            {
                id: "resume",
                label: "Your Resume",
                placeholder: "Paste your full resume text here...",
                type: "textarea",
                rows: 8,
            },
            {
                id: "job_description",
                label: "Job Description",
                placeholder: "Paste the job posting here...",
                type: "textarea",
                rows: 8,
            },
        ],
        body: `You are a senior technical recruiter and career strategist with 15+ years of experience placing candidates at top-tier tech companies. Your job is to write a job application email so natural, specific, and compelling that a hiring manager would forward it internally with the note: "Talk to this person."

              BEFORE writing anything, silently perform this analysis:

              PHASE 1 — DEEP RESUME PARSING
              • Extract the candidate's core technical stack (languages, frameworks, tools, platforms)
              • Identify their 3 strongest demonstrable skills — not self-described, but evidenced by projects or outcomes
              • Find their 1–2 most impressive projects that produced measurable results or solved real problems
              • Note any leadership, ownership, or initiative signals (built from scratch, led, designed, shipped, etc.)
              • Flag any skill gaps vs. the JD — these must be neutralized, not exposed

              PHASE 2 — JD DECODING
              • Extract the top 3 hard skills the employer is hiring for
              • Identify the implicit pain point this role solves for the team
              • Extract the company's culture signals and growth stage (startup energy vs. enterprise scale)
              • Note any preferred qualifications that the candidate actually meets

              PHASE 3 — STRATEGIC MAPPING
              • Map candidate's strongest projects → JD's core needs
              • Convert any experience gaps into project-proof statements
              • Build one "genuine resonance" hook — a specific, non-generic reason why this company, this role, right now

              PHASE 4 — EMAIL DRAFTING RULES
              • Word count: strictly 160–200 words (count before outputting)
              • Voice: confident but not boastful — write like a sharp human, not a LinkedIn post
              • Structure: 5 tight paragraphs (2–4 sentences each)
                1. Hook — name the role, drop one sharp signal of genuine fit
                2. Skills proof — match 2–3 candidate strengths directly to JD requirements, cite specifics
                3. Project spotlight — reference 1 real project with a concrete outcome or impact
                4. Why this company — one authentic, researched-sounding reason that isn't "I admire your growth"
                5. Confident close — clear call to action, no groveling, no "I hope to hear from you"

              ABSOLUTE RULES — NEVER BREAK THESE:
              • Never write "I am a passionate..." or "I am a quick learner" — show, don't tell
              • Never use phrases like "dynamic team", "fast-paced environment", "honed my skills"
              • Never start a sentence with "I" more than twice in the full email
              • Never mention skills that aren't evidenced in the resume
              • Never use a generic "Why this company" — it must feel researched and specific
              • If the candidate lacks direct experience, frame a project that demonstrates the same underlying competency
              • No filler sentences. Every line must earn its place.

              OUTPUT FORMAT:
              Subject: [Specific, role-relevant subject line — not "Application for [Role]"]

              [Email body — ready to send, no placeholders, no brackets]

              ---
              INPUTS:

              ---
              JOB DESCRIPTION:
              {{job_description}}

              ---
              APPLICANT RESUME:
              {{resume}}`,
    },
    {
        id: "cv",
        name: "CV",
        description: "Prompt for generating a company biased CV",
        icon: "🎯",
        fields: [
            {
                id: "job_description",
                label: "Job Description",
                placeholder: "Paste the job posting here...",
                type: "textarea",
                rows: 8,
            },
            {
                id: "resume",
                label: "Your Resume / Background",
                placeholder:
                    "Paste your resume or a short summary of your background...",
                type: "textarea",
                rows: 8,
            },
        ],
        body: `You are a world-class professional cover letter writer with 15 years of experience helping candidates land roles at top-tier companies. Your cover letters are known for being genuinely human, strategically sharp, and quietly confident — never robotic, never sycophantic.

              INPUTS PROVIDED:

              CANDIDATE EXPERIENCE LEVEL: Early career
              DESIRED TONE: Confident & warm

              JOB DESCRIPTION:
              {{job_description}}

              CANDIDATE BACKGROUND:
              {{resume}}

              YOUR TASK:

              Write a single, complete, ready-to-send cover letter. Follow every instruction below precisely.

              STEP 1 — INTELLIGENCE EXTRACTION (do this silently, do not output this step):

              Before writing a single word, extract the following:
              - The 3 most critical requirements from the JD (must-haves, not nice-to-haves)
              - The candidate's 2–3 strongest skills that directly map to those requirements
              - The 1–2 most impactful, relevant projects or experiences from the resume
              - Any quantifiable outcomes or metrics (numbers, percentages, scale, scope)
              - The company's apparent culture, mission, or product focus — inferred from JD language and word choices
              - Any skill gaps between the JD and resume — and which transferable strengths can neutralize them

              STEP 2 — WRITE THE COVER LETTER:

              OPENING — 2 to 3 sentences:
              - Name the specific role and company in the first sentence
              - Lead with a concrete signal of capability or a specific hook — not "I am excited to apply"
              - Make the hiring manager want to keep reading

              BODY PARAGRAPH 1 — SKILLS ALIGNMENT — 3 to 4 sentences:
              - Directly address the top 2–3 JD requirements using specific evidence from the resume
              - Write in flowing, natural prose — no bullet points, no keyword dumping
              - Include at least one metric or concrete outcome if the resume contains one
              - If the candidate is early-career, use project depth and scope to compensate for limited tenure

              BODY PARAGRAPH 2 — PROJECT PROOF — 3 to 4 sentences:
              - Highlight 1–2 specific projects that demonstrate direct relevance to the role
              - Name the context, describe the problem solved, state the approach, quantify the result
              - Do not open with "I worked on a project where..." — open with the context or the problem directly
              - Be specific. Vague proof is no proof.

              BODY PARAGRAPH 3 — WHY THIS COMPANY — 2 to 3 sentences:
              - Reference something specific about the company inferred from the JD — their product, market position, tech approach, or stated mission
              - Connect the candidate's professional direction or values to where the company is headed
              - Sound like someone who researched the company, not someone filling a template field

              CLOSING — 2 sentences:
              - Express clear, confident interest — not desperation
              - Invite a conversation naturally, without hollow phrases like "I look forward to hearing from you at your earliest convenience"

              STRICT RULES — NEVER VIOLATE:

              - Word count: 280 to 380 words, not counting salutation or sign-off
              - No bullet points anywhere inside the letter
              - Never use these phrases under any circumstance: "I am passionate about," "team player," "fast learner," "hard worker," "I believe I would be a great fit," "I am excited to apply," "I am writing to express my interest"
              - Never use these AI-tell words: "delve," "tapestry," "keen," "leverage" (unless naturally warranted), "navigate," "landscape," "showcasing," "harnessing"
              - Do not use decorative em-dashes as a stylistic crutch
              - Vary sentence length throughout — deliberately alternate short punchy sentences with longer, more layered ones. This is the single most important thing separating human prose from AI prose.
              - Write in first person, active voice throughout
              - Every claim must be traceable to something in the resume — do not fabricate skills, roles, or outcomes
              - If a required skill from the JD is absent from the resume, do not invent it — either bridge to an adjacent transferable strength or omit it entirely
              - The letter must read like a real person wrote it at 9am with full clarity and intent — not a system running a template

              OUTPUT FORMAT:

              Output only the cover letter itself — nothing else. No preamble. No "Here is your cover letter." No explanation after. Start directly with the salutation or the opening line of the letter.`,
    },
    {
        id: "interview-questions",
        name: "Interview Questions",
        description:
            "A prompt to generate interview questions to a specific job posting",
        icon: "📄",
        fields: [
            {
                id: "job_description",
                label: "Job Description",
                placeholder: "Paste the job posting here...",
                type: "textarea",
                rows: 10,
            },
            {
                id: "questions_amount",
                label: "Amount of Qustions",
                placeholder: "Specify the amount of question you want",
                type: "textarea",
                rows: 2,
            },
        ],
        body: `ROLE: Act as a world-class Interview Coach, Tech Recruiter (15+ years experience), and Behavioral Psychology Expert who helps candidates — especially freshers — ace interviews and psychologically guide interviewers toward a favorable decision.

            TASK: Based on my profile and the job description below, generate the most frequently asked, industry-standard interview questions for this role. For each question, provide a short impressive answer, likely follow-up questions, and a psychological strategy to steer the conversation in my favor.

            ──────────────────────────────────────
            MY PROFILE
            ──────────────────────────────────────
            Experience Level: Fresher (0–1 year)
            Tech Stack:
            Frontend  : HTML | CSS | Tailwind CSS | React.js | Next.js | JavaScript | TypeScript | REST API Integration
            Backend   : Node.js | Express.js | MongoDB | PostgreSQL | JWT Authentication | Firebase | WebSockets
            Tools     : Git & GitHub | VS Code | Jira | Chrome DevTools | Postman | Vercel | Figma | npm/yarn
            Practices : Agile | Scrum | API Design & Integration | Responsive Design | Version Control | Code Review
            Soft Skills: Problem-Solving | Team Leadership | Scrum Management | Communication | Adaptability

            Key Strengths:
            - Strong in JavaScript — especially logic building & problem solving
            - Fast learner who adapts quickly to new tools and frameworks
            - Good communication & collaboration skills in team environments
            - Competitive programmer, adaptive mindset

            ──────────────────────────────────────
            JOB DESCRIPTION
            ──────────────────────────────────────
            {{job_description}}

            ──────────────────────────────────────
            OUTPUT INSTRUCTIONS
            ──────────────────────────────────────
            Generate exactly {{questions_amount}} questions. For EACH question, follow this exact format:

            QUESTION [N] — [Category: Behavioral / Technical / Situational / HR / Role-fit]
            Q: [The exact interview question]

            MY ANSWER:
            [2–5 sentence answer. Short, sharp, confident, human tone. Not robotic or textbook. Mention 1 specific technology or skill from the JD where relevant. Sound like a self-aware, capable fresher — not a nervous one.]

            WHY THIS WORKS:
            [1 sentence explaining why this answer impresses interviewers.]

            LIKELY FOLLOW-UP QUESTIONS:
            FQ1: [Follow-up question the interviewer will probably ask next]
            FA1: [2–3 sentence answer — equally sharp and confident]

            FQ2: [Second follow-up question]
            FA2: [2–3 sentence answer]

            PSYCHOLOGICAL STRATEGY:
            [1 tactical tip on HOW to deliver this answer — e.g., pause before answering, end with a redirecting question, use a specific story arc, drop a number or result, mirror their language, etc. — to psychologically steer the interviewer in your favor.]

            TRAP TO AVOID:
            [The single most common mistake candidates make on this question — and how to sidestep it.]

            ──────────────────────────────────────
            RULES — follow all strictly
            ──────────────────────────────────────
            - Tailor every question and answer to the JD — no generic filler
            - Questions must be the most frequently asked in real interviews for this role — not theory, not edge cases
            - Answers must be SHORT (2–5 sentences max), natural, and confident
            - Never use vague phrases like "I am a hardworking individual" or "I am passionate about technology"
            - Tone: human, direct, impressive — like a sharp candidate who knows their worth
            - The follow-up questions should be ones the interviewer naturally asks AFTER hearing a good answer — so the candidate can pre-plant hooks in their main answer
            - Psychological strategies must be practical and tactical — not motivational fluff
            - Cover a mix of: HR/intro questions, technical questions relevant to the JD, behavioral questions, situational questions, and role-fit questions
            - End with a BONUS SECTION: "3 Smart Questions To Ask The Interviewer" — questions that make the candidate look curious, strategic, and genuinely interested in the role`,
    },
];
