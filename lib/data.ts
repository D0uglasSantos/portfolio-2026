import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'dastechnologiescontato@gmail.com',
    location: 'Brasília/DF',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Douglas, I am reaching out to you because...',

    oldPortfolio: 'https://douglas-santos-portfolio.vercel.app/',
    portfolio: 'https://dastech-portfolio.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/douglas-aquino-santos/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/D0uglasSantos' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/douglas-aquino-santos/',
    },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.svg',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Vue.js',
            icon: '/logo/Vue.js.svg',
        },
        {
            name: 'Vite.js',
            icon: '/logo/Vite.js.svg',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
        {
            name: 'Firebase',
            icon: '/logo/Firebase.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Dbeaver',
            icon: '/logo/DBeaver.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/Postman.svg',
        },
        {
            name: 'Figma',
            icon: '/logo/Figma.svg',
        },
    ],
    studying: [
        {
            name: 'Laravel',
            icon: '/logo/Laravel.svg',
        },
        {
            name: 'Flutter',
            icon: '/logo/Flutter.svg',
        },
        {
            name: 'Python',
            icon: '/logo/Python.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Tennis Trend',
        slug: 'tennis-trend',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/worldtennis.png',
        longThumbnail: '/projects/long/worldtennis.jpg',
        images: [
            '/projects/images/world-tennis-1.png',
            '/projects/images/world-tennis-2.png',
        ],
        sourceCode: 'https://github.com/D0uglasSantos/tennis-trend',
        liveUrl: 'https://tennis-trend.vercel.app',
        year: 2024,
        description: `Tennis Trend Shop is an e-commerce landing page focused on tennis products. The project was developed to explore and deepen knowledge in Next.js and Tailwind CSS technologies, resulting in a modern and responsive interface.`,
        role: `Front-end Developer <br/>
        - Developed the complete user interface using Next.js and Tailwind CSS.<br/>
        - Ensured a fully responsive design and a modern aesthetic for the store.`,
    },
    {
        title: 'Fitlife Gym',
        slug: 'fitlife-gym',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
        thumbnail: '/projects/thumbnail/fitlife.png',
        longThumbnail: '/projects/long/fitlife.jpg',
        images: [
            '/projects/images/fitlife-1.png',
            '/projects/images/fitlife-2.png',
            '/projects/images/fitlife-3.png',
            '/projects/images/fitlife-4.png',
        ],
        sourceCode: 'https://github.com/D0uglasSantos/fitlife-gym',
        liveUrl: 'https://fit-life-gym.vercel.app/',
        year: 2024,
        description: `Fitlife Gym is a modern and interactive website for a gym. The project features a responsive layout and fluid animations, providing an engaging and dynamic user experience.`,
        role: `Front-end Developer <br/>
        - Built the frontend from scratch using Next.js and Tailwind CSS.<br/>
        - Implemented engaging animations using Framer Motion.<br/>
        - Designed a fully responsive layout, adaptable to all devices.`,
    },
    {
        title: 'Restaura',
        slug: 'restaura',
        techStack: ['React', 'Vite', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/restaura.png',
        longThumbnail: '/projects/long/restaura.jpg',
        images: [
            '/projects/images/restaura-1.png',
            '/projects/images/restaura-2.png',
            '/projects/images/restaura-3.png',
            '/projects/images/restaura-4.png',
            '/projects/images/restaura-5.png',
        ],
        sourceCode: 'https://github.com/D0uglasSantos/restaura',
        liveUrl: 'https://restaura-restaurant.vercel.app/',
        year: 2024,
        description: `Restaura is a study project focused on creating a landing page for a restaurant. The interface was designed to be clean and appetizing, elegantly highlighting the restaurant's menus and services.`,
        role: `Front-end Developer <br/>
        - Developed a fast and optimized landing page using React and Vite.<br/>
        - Styled the application with Tailwind CSS for a modern and attractive look.<br/>
        - Ensured a seamless user experience across different screen sizes.`,
    },
    {
        title: 'Roland GO:KEYS 5',
        slug: 'gokeys-site',
        techStack: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Lucide React'],
        thumbnail: '/projects/thumbnail/gokeys5.png',
        longThumbnail: '/projects/long/gokeys5.jpg',
        images: [
            '/projects/images/gokeys5-1.png',
            '/projects/images/gokeys5-2.png',
            '/projects/images/gokeys5-3.png',
            '/projects/images/gokeys5-4.png',
            '/projects/images/gokeys5-5.png',
            '/projects/images/gokeys5-6.png',
        ],
        sourceCode: 'https://github.com/D0uglasSantos/gokeys-site',
        liveUrl: 'https://gokeys-site.vercel.app',
        year: 2024,
        description: `An immersive and modern experience to showcase the Roland GO:KEYS 5 music creation keyboard. The project focuses on an elegant user interface (UI), smooth transitions, and an optimized navigation experience (UX), reflecting the quality and design of the physical product.`,
        role: `Front-end Developer <br/>
        - Built a responsive and high-converting interface using React and Vite.<br/>
        - Integrated advanced animations with GSAP for complex and high-performance web interactions.<br/>
        - Ensured extreme performance and excellent Core Web Vitals.`,
    },
    {
        title: 'Sanctorum',
        slug: 'sanctorum',
        techStack: ['Next.js', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/sactorum.png',
        longThumbnail: '/projects/long/sanctorum.jpg',
        images: [],
        sourceCode: 'https://github.com/D0uglasSantos/sanctorum',
        liveUrl: 'https://sanctorum-mmxxv.vercel.app',
        year: 2025,
        description: `Sanctorum is a modern web application built with the latest versions of Next.js and Tailwind CSS. The project's main focus is performance and a clean, minimalist design.`,
        role: `Front-end Developer <br/>
        - Developed the application using Next.js 15 and Tailwind CSS.<br/>
        - Focused on performance optimization and a fully responsive design.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Fullstack Developer / AI Frontend Engineer',
        company: 'Anova Investimentos',
        duration: '2024 — 2026',
        description:
            'Evolutionary development of web platforms, internal systems, and reusable components. API integrations, performance, responsiveness, UX improvements, and white-label interfaces with visual identity parametrization.',
    },
    {
        title: 'UX/UI and Web Developer',
        company: 'Ministry of the Environment — MMA/DF',
        duration: '2023 — 2024',
        description:
            'Prototyping and interface development for government projects such as DSISNAMA, CONAMA, and PNLA. Supported data and process analysis and technical communication with IT teams.',
    },
    {
        title: 'UX/UI and Junior Fullstack Developer',
        company: 'Incript',
        duration: '2022 — 2023',
        description:
            'Created interfaces and UX for apps and systems, evolving features of digital products end to end.',
    },
    {
        title: 'Web Designer and Fullstack Developer',
        company: 'Freelancer — DASTechnologies',
        duration: '2020 — Present',
        description:
            'End-to-end delivery of sites, landing pages, apps, and systems — including Domus, Confessio, clinic platforms, and web apps like Pray Rats and Gym Rats Challenge Hub. Frontend, backend, API integrations, authentication, data persistence, UI/UX design, and ongoing maintenance.',
    },
];

export const MY_EDUCATION = {
    title: 'Systems Analysis and Development',
    institution: 'CEUB, Brasília/DF',
    duration: '2021 — 2024',
    description:
        'Emphasis on systems development, project management, and process analysis.',
};
