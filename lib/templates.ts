import { Template } from "@/types";

export const templates: Template[] = [
    // Objective
    {
        id: "resume-job-match",
        name: "Career Objective",
        description:
            "A prompt to redefine your career objective to a specific job posting",
        icon: "📄",
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
                rows: 10,
            },
        ],
        body: `
            ROLE
            Act as a 4-person expert panel collaborating on one output: a Senior Technical Recruiter (ATS + keyword matching), a Senior Software Engineer (technical credibility check), a Senior Prompt Engineer (output precision), and an Organizational Psychologist (persuasion + first-impression framing). Reconcile disagreements silently and produce one unified, high-quality result.

            TASK
            Write a highly customized, ATS-optimized Career Objective for a resume, strictly derived from the job description below — not from generic resume templates.

            MY PROFILE
            Experience Level: Fresher (0–1 year)

            Tech Stack

            Frontend: HTML, CSS, Tailwind CSS, React.js, Next.js, JavaScript, TypeScript, REST API Integration
            Backend: Node.js, Express.js, MongoDB, PostgreSQL, JWT Authentication, Firebase, WebSockets
            Tools: Git & GitHub, VS Code, Jira, Chrome DevTools, Postman, Vercel, Figma, npm/yarn
            Practices: Agile, Scrum, API Design & Integration, Responsive Design, Version Control, Code Review
            Soft Skills: Problem-Solving, Team Leadership, Scrum Management, Communication, Adaptability
            Key Strengths

            Strong in JavaScript — especially logic building & problem solving
            Fast learner who adapts quickly to new tools and frameworks
            Good communication & collaboration in team environments
            Competitive programmer, adaptive


            Proof points available (fill in before running the prompt — freshers must anchor claims in something concrete):

            Notable project(s): AuctaSync, CareerPilot
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            [RESUME]
            {{resume}}
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            [JOB DESCRIPTION]
            {{job_description}}
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROCESS — follow in order, show your work briefly for Step 1 only
            Step 1 — Extract from the JD:

            Exact job title
            Top 5–8 hard-skill keywords (exact phrasing as written in the JD)
            Top 2–3 soft-skill or culture keywords
            Company name and, if stated, its mission/product focus
            Seniority/tone signals (startup vs enterprise, fast-paced vs structured, etc.)
            Step 2 — Map: Match only the items from MY PROFILE that genuinely overlap with Step 1. Do not force-fit unrelated skills just to pad the list.

            Step 3 — Draft two variations following the WRITING RULES below.

            Step 4 — Self-audit: For each variation, list which exact JD keywords appear in it and confirm the word count is in range.

            WRITING RULES — follow strictly
            Every sentence must trace back to something specific in the JD — no interchangeable, copy-paste generics.
            Length: 2–3 lines, 40–60 words (tighter than typical advice — recruiters skim fast).
            Open with a strong, varied action verb or an impact-first construction — do not default to the same verb pattern every time (e.g. rotate between "Built," "Engineered," "Developed hands-on experience in," a metric-led opener, etc.).
            Weave in 2–3 exact-phrase keywords from the JD (ATS systems match strings, not synonyms).
            Include a genuine value proposition — not enthusiasm, but a specific reason this candidate is useful on day one.
            For a fresher, replace unverifiable "impact" claims with tangible proof: a project, a competitive programming result, a learning-speed indicator. Signal trajectory, not a fabricated track record.
            Reference the company name and/or exact role title from the JD.
            Never use: "seeking a challenging position," "passionate fresher looking for an opportunity," "hardworking and dedicated individual," "motivated team player," "results-driven," "dynamic professional," or any stacked-adjective opener.
            Tone: natural, confident, specific — human-written. Max 2 adjectives in a row anywhere in the text.
            Do not invent metrics, employers, or claims not present in MY PROFILE or the proof points above.
            OUTPUT FORMAT
            Variation 1 — Competence-First (leads with technical stack/project proof; best for JDs that read technical and skills-heavy) [Career Objective text]

            Variation 2 — Growth-Trajectory (leads with learning velocity, adaptability, collaboration; best for JDs that emphasize culture fit, mentorship, or startup pace) [Career Objective text]

            ATS Keyword Check:

            Variation 1 keywords matched: [list]
            Variation 2 keywords matched: [list]
            Word counts: V1 = __ words, V2 = __ words
            One-line guidance: [when to use which, based on how the JD reads]`,
    },
    // Email
    {
        id: "email",
        name: "Email",
        description:
            "Prompt to generate a compelling, personalised job inquiry email for the HR",
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
        body: `ROLE
            You are a senior technical recruiter and career strategist with 15+ years of experience placing candidates at top-tier tech companies. Write a job application email so natural, specific, and compelling that a hiring manager would forward it internally with the note: "Talk to this person."

            Before writing anything, silently perform this analysis:

            INPUTS:
            JOB DESCRIPTION:
            {{job_description}}
            APPLICANT RESUME:
            {{resume}}

            PHASE 1 — DEEP RESUME PARSING
            Extract the candidate's core technical stack (languages, frameworks, tools, platforms).
            Identify their 3 strongest demonstrable skills — evidenced by projects or outcomes, not self-description.
            Find their 1–2 most impressive projects that produced a measurable result or solved a real problem.
            Note any leadership, ownership, or initiative signals (built from scratch, led, designed, shipped, etc.).
            Flag any skill gaps vs. the JD.

            PHASE 2 — JD DECODING
            Extract the top 3 hard skills the employer is hiring for.
            Identify the implicit pain point this role solves for the team.
            Extract the company's culture signals and growth stage (startup energy vs. enterprise scale) — only from what's actually written in the JD, not assumed.
            Note any preferred qualifications the candidate actually meets.
            Note the hiring manager's name if it appears anywhere in the JD or posting; otherwise flag as unknown.
            
            PHASE 3 — STRATEGIC MAPPING
            Map the candidate's strongest projects → the JD's core needs.
            For any experience gap, reframe honestly via an adjacent project or transferable skill that demonstrates the same underlying competency. Never imply direct experience the candidate doesn't have — reframe, don't fabricate.
            Build one "genuine resonance" hook — a specific reason this company, this role, right now — sourced only from language actually present in the JD (its stated mission, product focus, team description, or listed problems). If the JD gives nothing usable for this, default to a specific technical/product reason tied to what the role actually builds, not a generic compliment.
            
            PHASE 4 — EMAIL DRAFTING RULES
            Word count: strictly 160–200 words.
            Voice: confident but not boastful — write like a sharp human, not a LinkedIn post.
            Structure: 5 tight paragraphs (2–4 sentences each):
            Hook — name the role, drop one sharp signal of genuine fit.
            Skills proof — match 2–3 candidate strengths directly to JD requirements, cite specifics.
            Project spotlight — reference 1 real project with a concrete outcome or impact.
            Why this company — one specific reason grounded in the JD itself, not a generic compliment.
            Confident close — clear call to action, no groveling, no "I hope to hear from you."
            Greeting: use the hiring manager's name if known from Phase 2. If unknown, use "Hi [Team Name] team," or "Hi [Company] hiring team," — never invent a name.
            Signature: sign off with the candidate's actual name and any contact links (GitHub, portfolio, LinkedIn) only if present in the resume text — never fabricate a link.
            
            PHASE 5 — SELF-AUDIT (perform silently before output)
            Check the drafted email against every rule below. If any fail, rewrite before showing the final version:

            Word count is between 160–200 (state the exact count)
            No sentence starts with "I" more than twice in the full email
            No banned phrase appears anywhere (see below)
            Every skill or project mentioned is traceable to the actual resume text
            The "why this company" line uses only facts present in the JD
            No placeholder brackets remain anywhere in the output
            ABSOLUTE RULES — NEVER BREAK THESE
            Never write "I am a passionate..." or "I am a quick learner" — show, don't tell.
            Never use "dynamic team," "fast-paced environment," "honed my skills," or similar filler phrases.
            Never start a sentence with "I" more than twice in the full email.
            Never mention a skill, tool, or outcome that isn't evidenced in the resume.
            Never invent a hiring manager's name, a company fact, or a metric not present in the inputs.
            Never leave a generic "why this company" — it must trace to specific JD language.
            No filler sentences. Every line earns its place.
            OUTPUT FORMAT
            Subject: [Specific, role-relevant subject line — use one of: "{Role} — {one sharp differentiator}" or "{Candidate's strongest matching skill} for {Company}'s {Role}"]

            [Email body — ready to send, no placeholders, no brackets]`,
    },
    // Cold Email
    {
        id: "cold-email",
        name: "Outreach Email",
        description:
            "Prompt to generate a compelling, personalised outreach email for the HR",
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
                id: "company_description",
                label: "Company Description",
                placeholder: "Paste the company description here...",
                type: "textarea",
                rows: 8,
            },
        ],
        body: `ROLE

                You are a world-class cold email strategist and career coach with 15 years of experience helping fresh graduates break into top companies without a referral. You write emails that read like they came from a real, specific, self-aware person — not a template, not an AI, not a cover-letter copy-paste.

                TASK

                Write a cold outreach email from a fresher web developer to a company that has no open internship listing. The email should read like it was written by someone who did real, specific digging and found a genuine reason to reach out — curious, self-aware, and interesting to talk to. Not desperate. Not performing intensity.

                INPUTS

                [RESUME] {{resume}}

                [COMPANY INFO] {{company_description}}

                PHASE 0 — GROUND BEFORE WRITING (perform silently)
                From RESUME: identify the candidate's 2–3 strongest evidenced skills or projects, and one standout project with a real, specific detail (what it does, what it solves, what was hard about it).
                From COMPANY INFO: pull 2–3 concrete details that are explicitly present in the text (a product feature, a stated mission, their stack, a described problem they solve). Do not use anything not present — no invented "recent launch," no invented blog post, no assumed culture traits.
                If COMPANY INFO is thin (a one-line description), do not compensate by inventing specifics. Anchor the hook in whatever real detail exists, even a small one — genuine but modest beats vivid but fabricated.
                
                SUBJECT LINE
                Under 10 words.
                Specific and personal — not clickbait, not generic.
                Should make the reader think "this isn't another mass email."
                Bad: "Internship Inquiry," "Aspiring Developer Seeking Opportunity."
                Good: "The developer who read your docs twice," "Noticed how you handle [specific thing]."
                Only use a "built something because of you" framing if the resume actually shows a project genuinely connected to this company — never imply a project exists that doesn't.
                
                OPENING LINE
                Must NOT start with "I," "My name is," or "I am writing to."
                Must hook instantly — lead with the one real, specific company detail from Phase 0, not a general compliment.
                Ground curiosity in something specific and true. Do not declare emotional intensity ("I can't stop thinking about you") — show engagement through the detail itself, not a stated feeling about it.
                BODY (2–3 short paragraphs)
                You know them, specifically — reference the real detail from Phase 0 (a product feature, their stack, their stated mission, something they actually describe doing). It should read like genuine engagement, not a 5-minute Google summary.
                Your strongest relevant proof — connect ONE real project or skill from the resume directly to something this company does or a problem they likely face. Don't list the resume. Pick the single strongest case, and don't stretch the connection further than the resume actually supports.
                Drive, demonstrated not declared — show the kind of person who builds things and figures things out, using something concrete from the resume (a project built independently, a problem solved without being asked). Not a statement of passion or hunger — an example of it.
                
                CLOSING
                Soft, confident call to action — not "please consider me," not "I would be honored."
                Offer something concrete: share a project, a quick call, or ask directly if there's room for someone like you.
                Sign off with the candidate's actual name, and a portfolio/GitHub/LinkedIn link only if one appears in the resume — never invent a link.
                Should leave the reader thinking a "no" would be their loss, not the sender's failure — without saying that outright.
                
                NON-NEGOTIABLE RULES
                Total length: 150–200 words. Every word earns its place.
                Zero corporate buzzwords: no "synergy," "leverage," "passionate learner," "team player," "go-getter."
                Sounds like a real 22-year-old who's genuinely engaged — not a LinkedIn post.
                No flattery that sounds fake ("Your company is amazing and inspiring").
                No begging, no desperation, no apologizing for being a fresher.
                The word "I" appears no more than 3 times in the entire email.
                If an HR/hiring manager name is given, use it. If not, avoid "Dear Sir/Madam" — use "Hi [Company] Team" or an equally natural alternative. Never invent a name.
                Never state a company fact, feature, launch, or post that isn't explicitly present in {{company_description}}.
                Never mention a skill, project, or outcome that isn't evidenced in {{resume}}.
                
                SELF-AUDIT (perform silently before output)
                Word count is 150–200 (state the count)
                "I" appears 3 times or fewer
                Subject line is under 10 words and passes the "not another mass email" test
                Opening line doesn't start with a banned phrase and doesn't declare emotional intensity
                Every company detail traces to {{company_description}}
                Every skill/project traces to {{resume}}
                No banned buzzwords appear anywhere
                Greeting follows the name-known / name-unknown fallback correctly
                
                OUTPUT FORMAT

                Subject: [subject line]

                [Email body — ready to send, no placeholders, no brackets]`,
    },
    // CV
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
    // Interview questions
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
