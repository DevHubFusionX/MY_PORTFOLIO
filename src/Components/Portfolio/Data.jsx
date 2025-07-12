import project1Image from "../../assets/Admin-Dashboard.png";
import project2Image from "../../assets/Portfolio-pic.png";
import project3Image from "../../assets/web-hosting.png";
import project4Image from "../../assets/financer-pic.png";
import devFinder from "../../assets/devFinder.png";
import movieSite from "../../assets/movie-site.png";

export const projectsData = [
  {
    id: 1,
    title: "Admin Dashboard",
    category: "Web Application",
    image: project1Image,
    link: "https://admin-dashboard-sigma-sable-16.vercel.app/",
    github: "https://github.com/username/admin-dashboard",
    description: "A comprehensive admin dashboard featuring real-time analytics, user management, and data visualization components.",
    longDescription: "This modern admin dashboard provides a complete solution for business management with intuitive data visualization, real-time analytics, and comprehensive user management features. Built with React and modern UI libraries, it offers seamless navigation and responsive design across all devices.",
    technologies: ["React", "Chart.js", "Material-UI", "Node.js", "MongoDB"],
    features: [
      "Real-time data visualization",
      "User role management",
      "Responsive design",
      "Dark/Light theme toggle",
      "Export functionality"
    ],
    challenges: "Implementing real-time data updates while maintaining optimal performance across multiple dashboard widgets.",
    solution: "Utilized React Context API for state management and implemented efficient data fetching strategies with caching mechanisms.",
    duration: "3 months",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Personal Branding",
    image: project2Image,
    link: "https://website2-eosin.vercel.app/",
    github: "https://github.com/username/portfolio",
    description: "A modern, responsive portfolio website showcasing professional work and technical expertise.",
    longDescription: "An elegant portfolio website designed to showcase professional projects and technical skills. Features smooth animations, modern design principles, and optimized performance for an exceptional user experience.",
    technologies: ["React", "Framer Motion", "CSS3", "Vercel"],
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Contact form integration",
      "Project showcase",
      "SEO optimized"
    ],
    challenges: "Creating smooth animations while maintaining excellent performance across all devices.",
    solution: "Implemented Framer Motion for optimized animations and used CSS Grid/Flexbox for responsive layouts.",
    duration: "2 months",
    role: "Frontend Developer & Designer"
  },
  {
    id: 3,
    title: "Eco Hosting Platform",
    category: "Business Website",
    image: project3Image,
    link: "https://vite-project-mu-two.vercel.app/",
    github: "https://github.com/username/eco-hosting",
    description: "An eco-friendly web hosting platform with sustainable hosting solutions and green technology focus.",
    longDescription: "A comprehensive web hosting platform emphasizing environmental sustainability. Features include hosting plans comparison, eco-friendly metrics, and user-friendly onboarding process for environmentally conscious businesses.",
    technologies: ["Vite", "React", "Tailwind CSS", "Node.js"],
    features: [
      "Hosting plan comparison",
      "Eco-friendly metrics",
      "User onboarding",
      "Payment integration",
      "Customer support chat"
    ],
    challenges: "Designing an intuitive interface for complex hosting plan comparisons while maintaining focus on sustainability messaging.",
    solution: "Created interactive comparison tables and integrated visual sustainability metrics to help users make informed decisions.",
    duration: "4 months",
    role: "Full Stack Developer"
  },
  {
    id: 4,
    title: "Financer App",
    category: "Financial Technology",
    image: project4Image,
    link: "https://company-lime-gamma.vercel.app/",
    github: "https://github.com/username/financer",
    description: "A comprehensive financial management application for personal and business finance tracking.",
    longDescription: "A sophisticated financial management platform offering comprehensive tools for expense tracking, budget planning, and financial analytics. Designed for both personal users and small businesses seeking better financial control.",
    technologies: ["React", "Redux", "Chart.js", "Express.js", "PostgreSQL"],
    features: [
      "Expense tracking",
      "Budget planning",
      "Financial analytics",
      "Multi-currency support",
      "Export reports"
    ],
    challenges: "Implementing secure financial data handling while providing intuitive user experience for complex financial operations.",
    solution: "Implemented robust authentication, data encryption, and created simplified UI flows for complex financial calculations.",
    duration: "5 months",
    role: "Lead Developer"
  },
  {
    id: 5,
    title: "DevFinder",
    category: "Developer Tool",
    image: devFinder,
    link: "https://dev-finder-five-murex.vercel.app/",
    github: "https://github.com/username/dev-finder",
    description: "A GitHub user search application with detailed developer profiles and repository insights.",
    longDescription: "An intuitive developer search platform that leverages GitHub's API to provide comprehensive developer profiles, repository statistics, and contribution insights. Perfect for recruiters and developers looking to connect.",
    technologies: ["React", "GitHub API", "Styled Components", "Axios"],
    features: [
      "GitHub user search",
      "Repository analytics",
      "Contribution graphs",
      "Profile statistics",
      "Responsive design"
    ],
    challenges: "Efficiently handling GitHub API rate limits while providing comprehensive user data visualization.",
    solution: "Implemented smart caching strategies and optimized API calls to provide seamless user experience within rate limits.",
    duration: "1 month",
    role: "Frontend Developer"
  },
  {
    id: 6,
    title: "TVFlix Streaming",
    category: "Entertainment Platform",
    image: movieSite,
    link: "https://fullstack-movie-app-master.vercel.app/",
    github: "https://github.com/username/tvflix",
    description: "A full-stack movie streaming platform with user authentication and personalized recommendations.",
    longDescription: "A comprehensive streaming platform offering extensive movie and TV show catalogs with personalized recommendations, user profiles, and seamless streaming experience. Built with modern web technologies for optimal performance.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "TMDB API"],
    features: [
      "User authentication",
      "Movie/TV show catalog",
      "Personalized recommendations",
      "Watchlist functionality",
      "Search and filtering"
    ],
    challenges: "Creating a Netflix-like user experience while managing large datasets and ensuring smooth video streaming.",
    solution: "Implemented efficient data pagination, lazy loading, and optimized video delivery for seamless streaming experience.",
    duration: "6 months",
    role: "Full Stack Developer"
  }
];