import { acclinate, marathon, sr, cascade, scrapper, leaves, capsule } from "../assets/images";

import {
    apache,
    arrow,
    car,
    contact,
    css,
    django,
    docker,
    estate,
    express,
    flask,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    numpy,
    openAI,
    pandas,
    pricewise,
    pyTorch,
    react,
    redis,
    redux,
    scikit,
    snapgram,
    soundon,
    soundoff,
    sql,
    summiz,
    tailwindcss,
    tensorflow,
    threads,
    twitter,
    typescript
} from "../assets/icons";

export const skills = [
    // Frontend Technologies
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

    // AI and Machine Learning
    {
        imageUrl: scikit,
        name: "Scikit-learn",
        type: "AI, ML, DL",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "AI, ML, DL",
    },
    {
        imageUrl: openAI,
        name: "OpenAI",
        type: "AI, ML, DL",
    },
    {
        imageUrl: pyTorch,
        name: "PyTorch",
        type: "AI, ML, DL",
    },

    // Data Manipulation
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Manipulation",
    },
    {
        imageUrl: numpy,
        name: "numpy",
        type: "Data Manipulation",
    },
    {
        imageUrl: apache,
        name: "Apache Spark",
        type: "Data Manipulation",
    },

    // Backend Technologies
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },

    // Database Technologies
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },

    // Version Control and Quality Assurance
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Quality Assurance",
    },

    // Other Skills
];

export const experiences = [
    {
        title: "Refining Engineer I",
        company_name: "Marathon Petroleum Corporation",
        icon: marathon,
        iconBg: "#16499D",
        date: "Aug 2018 - Aug 2020",
        points: [
            "Technical Service Co-op Galveston Bay, Texas City Refinery: Evaluated unit pumping system and recommended a project to increase production by 11 MBPD ($16 million/yr.) while improving sustainability by 30%.",
            "Refining Operations Research, Data Validation Engineer Findlay OH, Headquarters: Developed company-specific software tools to manage key indicators for 16 total refineries and implemented coding solutions to automate a daily task, creating 93 hours of monthly capacity.",
            "Technical Service Co-op Catlettsburg, Kentucky Refinery: Oversaw reactor loading of $4 million of precious metal catalyst while tracking loading metrics and recognized with a safety award for preventing the load of faulty catalyst."
        ],
    },
    {
        title: "Project Manager",
        company_name: "Acclinate Inc.",
        icon: acclinate,
        iconBg: "#FE9876",
        date: "Aug 2021 - Jun 2022",
        points: [
            "Designed, communicated, and executed project plans to project teams for 6 major projects simultaneously.",
            "Composed project documentation and tracked metrics with various software tools including Monday.com.",
            "Coordinated task scheduling and prioritization across departments utilizing Microsoft Planner."
        ],
    },
    {
        title: "Strategic Operations Lead",
        company_name: "Southern Research Institute",
        icon: sr,
        iconBg: "#333333",
        date: "Jul 2022 - Sep 2023",
        points: [
            "Facilitated transformation across company departments by assessing needs, developing processes & implementing solutions to address $1.5M in technical debt.",
            "Led project teams evaluating and implementing software systems (i.e., ERP, HRIS, CRM, and Office 365) across departments.",
            "Created 350 hours of monthly capacity by utilizing learnings from discovery during software implementations to optimize business processes.",
            "Designed, developed, and launched multiple software tools including a refreshed and integrated intranet utilizing Microsoft SharePoint, and an automated sales workflow utilizing Salesforce Developer."
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/marvinhamilton',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mdhiii/',
    }
];

export const projects = [
    {
        iconUrl: cascade,
        theme: 'btn-back-red',
        name: 'Cascade Flow Automation',
        description: 'This project was developed to automate the data processing tasks for John Carl Begly, a Neuroscience PhD Candidate at Charite University. The automation significantly streamlines the collection, analysis, and visualization of neuroscience data, enhancing research efficiency and accuracy.',
        link: 'https://github.com/marvinhamilton',
    },
    {
        iconUrl: capsule,
        theme: 'btn-back-green',
        name: 'Capsule Closet',
        description: 'A bespoke categorization tool designed to digitalize personal wardrobes, aiding in outfit planning. The software provides intuitive interfaces for users to manage their clothing items, categorize them into versatile outfits, and plan their wardrobe usage with smart recommendations.',
        link: 'https://github.com/marvinhamilton', // Update the URL to reflect actual project repository if different
    },
    {
        iconUrl: scrapper,
        theme: 'btn-back-blue',
        name: 'Scrappy',
        description: 'Scrappy is a web scraper designed to compile a comprehensive listing of potential contacts for company outreach. It automates the extraction of relevant contact data from specified web sources, enabling efficient and targeted business networking.',
        link: 'https://www.notion.so/Scrappy-761ba33a9ab7476cbb29ff47fec28bc6', // Update the URL to reflect actual project repository
    },
    {
        iconUrl: leaves,
        theme: 'btn-back-yellow',
        name: 'Leaves',
        description: 'Leaves is an innovative venture that involved the development and pitching of an aquaponic container farm. This project aims to revolutionize urban agriculture through sustainable container farms that utilize aquaponic systems for high-efficiency, low-water usage farming.',
        link: 'https://youtu.be/yKngcSZ5K28', // Update the URL to reflect actual project repository
    }
];