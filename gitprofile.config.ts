// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'janisar007', // Your GitHub org/user name. (This is the only required config)
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
          'janisar007/vidly',
          'janisar007/Journal-app',
          'janisar007/github-center-api',
          'janisar007/dream-house',
          'janisar007/threads_app',
          'janisar007/githubcenter-client',
          'janisar007/blogai',
          'janisar007/me-tubee',
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
            'https://firebasestorage.googleapis.com/v0/b/my-portfolio-c2d51.appspot.com/o/gitportfolio%2Fgpost.jpg?alt=media&token=923460d9-9db2-4964-af9e-90b2ab41a2fd',
          link: 'https://githubcenter.vercel.app',
          glink: 'https://github.com/janisar007/githubcenter-client',
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
          title: 'Dream House',
          description:
            'A **real estate marketplace** where users can list and manage properties for sale or rent. Built an **advanced search** system with **6+ dynamic filters** (location, price, property type, etc.), improving property discovery efficiency by **70%**. Designed the platform to **support 1000+ property** listings with a seamless, centralized experience for buyers and sellers.',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/my-portfolio-c2d51.appspot.com/o/gitportfolio%2Fdpost.jpg?alt=media&token=f2b494d9-bb0e-419a-be79-c0a7bfdba18d',
          link: 'https://dream-house-y0uy.onrender.com',
          glink: 'https://github.com/janisar007/dream-house',
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
            'https://firebasestorage.googleapis.com/v0/b/my-portfolio-c2d51.appspot.com/o/gitportfolio%2Fypost.jpg?alt=media&token=079562b1-87cb-482f-ab0a-dc42dce4009b',
          link: 'https://me-tube-pro.web.app/',
          glink: 'https://github.com/janisar007/me-tubee',
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
            'https://firebasestorage.googleapis.com/v0/b/my-portfolio-c2d51.appspot.com/o/gitportfolio%2Ftpost.jpg?alt=media&token=a3a70116-c105-40f0-8680-32babb204e75',
          link: 'https://threads-app-flame-seven.vercel.app',
          glink: 'https://github.com/janisar007/threads_app',
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
    linkedin: 'janisar007',
    x: 'janisar_007',
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
      companyLink: 'https://example.com',
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
      class="text-primary" href="https://github.com/janisar007/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
