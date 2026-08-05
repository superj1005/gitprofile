// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'janisarakhtakkkk', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'janisarakhtar/github-center-api',
          'janisarakhtar/githubcenter-client',
          'janisarakhtar/Colonelz-frontend',
          'janisarakhtar/colonelz-backend',
          'janisarakhtar/vidly',
          'janisarakhtar/Journal-app',
          'janisarakhtar/dream-house',
          'janisarakhtar/threads_app',
          'janisarakhtar/blogai',
          'janisarakhtar/me-tubee',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Github Center',
          description: `A GitHub PR management platform with **multi-account** support and a centralized dashboard to view and organize repos. Features include **workflow monitoring**, pull request tracking, repo grouping, and one-click PR navigation with an **AI-powered PR assistant** that reviews code, **suggests improvements**, recommends test cases, and auto-generates commit details.`,
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777881133/final_gc_logo_y1pqvc.jpg',
          link: 'https://githubcenter.vercel.app',
          glink: 'https://github.com/janisarakhtar/githubcenter-client',
          tech: [
            'Reactjs, Nodejs',
            'Tailwind',
            'Clerk',
            'Github API',
            'Gemini API',
            'Expressjs',
          ],
        },
        {
          title: 'Colonelz CRM',
          description: `A scalable CRM application designed to manage **1,200+ users** and **8,000+ tasks** with structured workflows. Features include **lead-to-project tracking**, task management, role-based access control (RBAC), and timeline visualization. Implemented **secure communication**, distributed logging, and fail-safe request handling to ensure reliability and data consistency.`,
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777880575/colo_w7vcwf.jpg',
          link: 'https://colonelz-frontend-one.vercel.app/',
          glink: 'https://github.com/janisarakhtar/Colonelz-frontend',
          tech: [
            'Reactjs, Nodejs',
            'MongoDB',
            'TypeScript',
            'Redux',
            'Tailwind CSS',
            'Expressjs',
          ],
        },
        {
          title: 'BlogAI',
          description: `An AI-powered blogging platform that allows users to create, edit, and publish blogs with a rich-text editor and **multi-level comments**. Includes AI features to **auto-generate full blogs** and suggest trending keywords, reducing content creation time. Built with **SEO-friendly server-side rendering** using meta tags and structured content for improved visibility.`,
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1756463697/mern_uploads/mzmtch35hurp0k4sjlne.png',
          link: 'https://blogai-rose.vercel.app',
          glink: 'https://github.com/janisarakhtar/blogai',
          tech: [ 
            'Reactjs, Nodejs',
            'MongoDB',
            'Expressjs',
            'JavaScript',
            'Redux',
            'Tailwind CSS',
          ],
        },
        {
          title: 'Initializ Deployment SaaS',
          description: `A full-stack deployment platform similar to Vercel, enabling developers to push code and get **instant cloud deployments**. Contributed to backend services managing **500+ daily deployments**, including build pipelines, domain mapping, and serverless execution. Built UI for deployment history, logs, and environment configs, and worked on **Docker-based builds** with AWS ECS scaling for improved reliability.`,
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777880559/initial_wxwhjc.jpg',
          link: 'https://www.initializ.ai/',
          glink: 'https://www.initializ.ai/',
          tech: [
            'Reactjs, Nodejs',
            'MongoDB',
            'TypeScript',
            'Docker',
            'AWS ECS',
            'S3',
          ],
        },

        {
          title: 'Dream House',
          description:
            'A **real estate marketplace** where users can list and manage properties for sale or rent. Built an **advanced search** system with **6+ dynamic filters** (location, price, property type, etc.), improving property discovery efficiency by **70%**. Designed the platform to **support 1000+ property** listings with a seamless, centralized experience for buyers and sellers.',
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777881302/dream_house_gdqfeq.jpg',
          link: 'https://dream-house-y0uy.onrender.com',
          glink: 'https://github.com/janisarakhtar/dream-house',
          tech: [
            'Reactjs',
            'Nodejs',
            'Shadcn',
            'Tailwind',
            'Auth0',
            'JavaScript',
            'Postman',
            'Expressjs',
          ],
        },
        {
          title: 'Me Tube',
          description:
            'A YouTube Clone using React.js, Redux, Node.js, and **SASS**, integrated with the YouTube API. The platform enables users to search, watch, and interact with videos through comments, replicating **core YouTube functionalities**. Designed with a scalable frontend and efficient state management, it delivers a **smooth video streaming experience**.',
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777881423/yt_kfzbc7.jpg',
          link: 'https://me-tube-pro.web.app/',
          glink: 'https://github.com/janisarakhtar/me-tubee',
          tech: [
            'Reactjs',
            'Youtube API',
            'Tailwind',
            'OAuth',
            'JavaScript',
            'Postman',
          ],
        },
        {
          title: 'Threads Clone',
          description:
            'It is a Threads Clone using Next.js, Node.js, Clerk, and TypeScript, featuring **robust authentication** and scalable **community management** that reduced account-related issues by 30%. Implemented **multi-level commenting**, increasing user engagement by 30% while supporting high concurrency. Additionally, I integrated advanced moderation pipelines to proactively **detect fraudulent activities** and ensure a safe community experience.',
          imageUrl:
            'https://res.cloudinary.com/dblftsuim/image/upload/v1777881599/thread_ovppjv.jpg',
          link: 'https://threads-app-flame-seven.vercel.app',
          glink: 'https://github.com/janisarakhtar/threads_app',
          tech: [
            'Nextjs',
            'Nodejs',
            'Shadcn',
            'Tailwind',
            'Clerk',
            'TypeScript',
            'Postman',
            'Expressjs',
          ],
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Janisar Akhtar', description: '', imageURL: '' },
  social: {
    linkedin: 'janisaransari',
    x: 'xjanisarakhtar',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.githubcenter.vercel.app',
    phone: '',
    email: 'janisarakhtaransari007@gmail.com',
  },
  resume: {
    fileUrl:
      'https://firebasestorage.googleapis.com/v0/b/my-portfolio-c2d51.appspot.com/o/gitportfolio%2Fjanisar_Aigc.pdf?alt=media&token=3574f6db-ec0d-461e-97d8-b4e7f28cf108', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'TypeScript',
    'JavaScript',
    'React.js',
    'Node.js',
    'AWS',
    'MySQL',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Postman',
    'Express.js',
    'Docker',
    'Linux',
    'CSS',
    'Next.js',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Initializ lab pvt ltd',
      position: 'Software Engineer Intern',
      from: 'May 2024',
      to: 'April 2025',
      companyLink: 'https://initializ.ai/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Dr. Ambedkar Institute of Technology Kanpur',
      degree: 'BTech (Information Technology)',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Saraswati Vidya Mandir Gonda',
      degree: 'Intermediate',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Saraswati Vidya Mandir Gonda',
      degree: 'High School',
      from: '2016',
      to: '2017',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/janisarakhtar/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
