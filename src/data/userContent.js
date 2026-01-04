export const userData = {
    name: "Saad Rashid",
    title: "Software Engineer | Python & Automation Specialist",
    tagline: "I build accessible, pixel-perfect, and performant web experiences & automation pipelines.",
    about: `I am a software engineer specializing in Python-backed applications, automation workflows, and full-stack web development. With a strong foundation in Natural Language Processing (NLP) and scraping technologies, I bridge the gap between complex data processing and user-friendly interfaces.

  My journey involves building intelligent agents and scalable automation solutions that solve real-world problems. I have extensive experience with the WordPress ecosystem (Kadence, Elementor, WooCommerce) and modern React stacks, allowing me to deliver high-performance web experiences.

  Currently, I am focused on developing advanced automation pipelines and SEO tools. My recent work includes a Legal Document Summarizer using RAG architecture and fine-tuned LLMs, as well as comprehensive scraping architectures for data verification. I thrive on optimizing workflows and creating robust, pixel-perfect applications that make an impact.`,
    socialLinks: {
        github: "https://github.com/SDRA123",
        linkedin: "https://www.linkedin.com/in/saad-rashid-a2814719a/",
        email: "mailto:saadrashidw@gmail.com", // Placeholder
    },
    experience: [
        {
            company: "Aurora Photon",
            title: "Python Developer",
            range: "Aug 2025 - Present",
            description:
                "Optimized Automation Solution, SEO optimized tools development, Cloud management, Project Management. Leading Development Teams, Development Coordination.",
            skills: ["Python", "Automation", "SEO Tools", "Cloud Management"],
        },
        {
            company: "Freelance / WordPress",
            title: "Web Developer",
            range: "2023 - Present",
            description:
                "Delivered high-performance websites for various clients. Specialized in Elementor, Kadence, and WooCommerce integrations.",
            links: [
                { name: "aetherrsx2.com", url: "https://aetherrsx2.com" },
                { name: "auroraphoton.com", url: "https://auroraphoton.com" },
                { name: "glamorix.pk", url: "https://glamorix.pk" },
            ],
            skills: ["WordPress", "Elementor", "WooCommerce", "Kadence"],
        },
    ],
    projects: [
        {
            title: "Email Verifier & Scraper",
            description:
                "A full-stack bulk website scraper and email verifier. Uses SMTP probing and structure checks to ensure data validity. Features a React frontend and Python backend with SQLite.",
            tech: ["Python", "React", "SQLite", "Scraping", "SMTP"],
            links: [
                { label: "GitHub", url: "https://github.com/SDRA123/email-verifier-scraper-v2" },
            ],
            hasDetails: true, // For the "Second Option"
            id: "email-verifier",
        },
        {
            title: "N8n Automation Suite",
            description:
                "A comprehensive automation suite including a LinkedIn agent connected to Slack, and a complex SEO content writing pipeline using semantic models (all-MiniLM-L6-v2) and custom Python scripts.",
            tech: ["n8n", "Python", "Gemini API", "Slack", "NLP"],
            links: [],
            hasDetails: true,
            id: "n8n-automation",
        },
        {
            title: "Legal Document Summarizer (FYP)",
            description:
                "An intelligent web app for summarizing and translating English legal documents into Urdu. Leverages fine-tuned Mistral 7B, Legal Pegasus, and GPT-4o Mini models with RAG architecture.",
            tech: ["React.js", "Flask", "Azure", "NLP", "Mistral 7B"],
            links: [],
            hasDetails: true,
            id: "legal-doc-summarizer",
        },
    ],
};
