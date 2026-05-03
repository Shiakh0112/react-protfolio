// ── Projects ─────────────────────────────────────────────────────────

//
import movie7 from "./images2/7 movie.png";
import moviedetail7 from "./images2/7 moviedetail.png";
import authenticaion8 from "./images2/8 authentication.png";
import authenticaiondetail8 from "./images2/8 authenticaionDetail.png";
import reset_password9 from "./images2/9 reset password.png";
import recipi10 from "./images2/10 recipi api.png";
import recipidetail10 from "./images2/10 recipi api Detail.png";

// best project images
import hostel1 from "./images2/bestproject/1 bestimg hostel.png";
import hostelDetail1 from "./images2/bestproject/1 bestimg hostell detail.png";
import job2 from "./images2/bestproject/2bestimg job.png";
import jobDetail2 from "./images2/bestproject/2bestimg jobsdetails.png";
import recipe3 from "./images2/bestproject/3 bestimg recipi.png";
import recipedetail3 from "./images2/bestproject/3 bestimg recipidetails.png";
import expense4 from "./images2/bestproject/4 bestimg expense.png";
import dashboard5 from "./images2/bestproject/5 bestimg dashboard.png";
import cityguard1 from "./images2/bestproject/5 bestimg dashboard.png";
import cityguardDetail1 from "./images2/bestproject/5 bestimg dashboard.png";
import ProjectManagement11 from "./images2/Project Management 11.png";
import ProjectManagementDetail11 from "./images2/11 Project Management details .png";
export const allProjects = [
  {
    id: 1,
    category: "frontend",
    title: "Movie Search App (OMDB API)",
    desc: "• Developed a full-featured movie search application using ReactJS with external API integration.\n• Integrated OMDB API to fetch real-time movie data including search results and detailed information.\n• Implemented a dynamic search bar allowing users to search movies by title or keywords.\n• Displayed search results in a responsive grid layout with movie posters, titles, and basic details.\n• Built pagination system to efficiently handle large sets of movie results.\n• Created a dedicated movie details page with complete information including poster, release year, genre, plot, ratings, and cast.\n• Implemented React Router for smooth navigation between search page and movie detail page.\n• Added dropdown filter using API query parameters for optimized performance.\n• Handled API errors gracefully with user-friendly error messages.\n• Ensured responsive design using Tailwind CSS for seamless experience across devices.",
    tags: ["React", "React Router", "JavaScript", "Tailwind CSS", "OMDB API"],
    link: "https://soft-kulfi-0a4286.netlify.app/",
    github: "https://github.com/Shiakh0112/Movie-Searching-app",
    img: movie7,
    detailImg: moviedetail7,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 2,
    category: "backend",
    title: "User Authentication & Authorization (JWT)",
    desc: "• Developed a secure authentication and authorization system using Node.js and Express.js.\n• Implemented MVC architecture for scalable and maintainable backend structure.\n• Integrated MongoDB using Mongoose for efficient user data storage and management.\n• Implemented password hashing using bcrypt to ensure secure storage of user credentials.\n• Generated JSON Web Token (JWT) upon successful login for secure session handling.\n• Implemented Bearer Token authentication system for protected routes.\n• Created middleware to verify JWT from request headers and authorize users.\n• Documented all API endpoints using Postman with sample requests and responses.\n• Deployed backend server on Render for live API access.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Authentication",
    ],
    link: "https://authenticaion.onrender.com/",
    github: "https://github.com/Shiakh0112/authenticaion",
    img: authenticaion8,
    detailImg: authenticaiondetail8,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "Node.js",
  },
  {
    id: 3,
    category: "fullstack",
    title: "Password Reset Flow Authentication System",
    desc: "• Developed a complete full-stack authentication system with secure password reset functionality.\n• Built frontend using ReactJS with modern UI/UX and responsive design using Tailwind CSS.\n• Implemented user signup and login system with real-time form validation.\n• Integrated JWT-based authentication for secure user sessions.\n• Designed and implemented 'Forgot Password' flow with email verification.\n• Generated secure reset tokens using crypto and implemented token expiry (1 hour).\n• Integrated Brevo email service to send password reset links dynamically.\n• Built Reset Password page with token validation and secure password update functionality.\n• Deployed frontend on Vercel and backend on Render for live production access.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Authentication",
    ],
    link: "https://reset-flow-password-brqy.vercel.app",
    github: "https://github.com/Shiakh0112/reset-flow-password",
    img: reset_password9,
    detailImg: reset_password9,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 4,
    category: "backend",
    title: "Recipes CRUD API",
    desc: "Developed a complete RESTful Recipes API using Node.js, Express.js, and MongoDB following the MVC architecture pattern. Implemented full CRUD operations including creating new recipes, retrieving all recipes, fetching individual recipes by ID, updating existing recipes, and deleting recipes. Integrated MongoDB with Mongoose for efficient data modeling and database interaction. Ensured proper validation and structured error handling for all API endpoints. Designed scalable and maintainable code by separating concerns into models, controllers, and routes. Documented all endpoints using Postman with sample requests and responses for easy testing and developer understanding.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Postman",
      "REST API",
    ],
    link: "https://recipeapi-517n.onrender.com/",
    github: "https://github.com/Shiakh0112/recipeAPI/tree/main",
    img: recipi10,
    detailImg: recipidetail10,
    startDate: "Dec 2023",
    endDate: "Dec 2023",
    language: "JavaScript",
  },
];

// ── Best Projects ─────────────────────────────────────────────────────
export const bestProjects = [
  {
    id: "b1",
    category: "fullstack",
    title: "TaskFlow — SaaS Project Management Platform",
    desc: "Developed a production-ready full-stack SaaS Project Management application inspired by modern tools like Notion and Trello using the MERN stack. Implemented secure authentication with JWT access and refresh token rotation, OTP-based email verification using Brevo SMTP, and Google OAuth 2.0 integration. Built a scalable and modular backend architecture following MVC pattern with Express.js, MongoDB, and Mongoose, ensuring maintainability and performance. Designed real-time collaboration features using Socket.io, enabling live task updates, notifications, typing indicators, and user presence tracking. Created dynamic Kanban boards with drag-and-drop functionality for task management, including lists, priorities, due dates, labels, checklists, and file attachments. Integrated Stripe payment gateway for subscription-based plans (Free, Pro, Enterprise) with secure payment verification and billing history tracking. Developed role-based access control (RBAC) for team collaboration with roles such as owner, admin, member, and viewer. Implemented Cloudinary for scalable file uploads and optimized asset management. Applied advanced security practices including bcrypt password hashing, rate limiting, Helmet headers, CORS protection, and input validation with Joi. Built a fully responsive UI using React, Redux Toolkit, Tailwind CSS, and modern UX patterns including dark mode, toast notifications, and optimized state management. Ensured high performance with efficient API handling, token auto-refresh mechanisms, and clean code architecture suitable for production deployment.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "Socket.io",
      "Stripe API",
      "JWT Authentication",
      "OAuth 2.0",
      "Cloudinary",
      "Tailwind CSS",
      "MERN Stack",
      "REST API",
      "Real-Time Applications",
      "SaaS Architecture",
      "RBAC",
      "WebSockets",
      "Scalable Systems",
    ],
    link: "https://saa-s-project-management-app-cigz.vercel.app",
    github: "https://github.com/Shiakh0112/SaaS-Project-Management-App",
    img: ProjectManagement11,
    detailImg: ProjectManagementDetail11,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    language: "JavaScript",
  },
  {
    id: "b2",
    category: "fullstack",
    title: "City Guard — Police Command Dashboard",
    desc: "Developed a scalable full-stack Police Command Dashboard using the MERN stack (MongoDB, Express.js, React.js, Node.js) to manage real-time law enforcement operations. Implemented secure JWT-based authentication with role-based access control (Admin, Officer, Viewer) to ensure system security and data integrity. Built complete incident and officer management modules with full CRUD functionality, advanced filtering, and real-time status updates. Designed an interactive analytics dashboard with charts, crime trends, zone-based heatmaps, and data visualization using Recharts. Integrated global search, live notifications system, and weather API for enhanced situational awareness. Developed protected routes and middleware-based authorization for secure API access. Implemented Redux Toolkit for efficient state management and Axios interceptors for handling API requests and authentication flow. Created a responsive and modern UI with Tailwind CSS, including dark/light mode and mobile-first design. Followed modular architecture, RESTful API design, and best practices to ensure scalability, maintainability, and performance.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "JWT Authentication",
      "Role-Based Access Control",
      "REST API",
      "Full Stack Development",
      "Dashboard",
      "Data Visualization",
      "Recharts",
      "Tailwind CSS",
      "Axios",
      "MERN Stack",
      "Protected Routes",
    ],
    link: "https://city-guard-police-command-center-da.vercel.app",
    github:
      "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard",
    img: cityguard1,
    detailImg: cityguardDetail1,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    language: "JavaScript",
  },
  {
    id: " b3",
    category: "fullstack",
    title: "Hostel Management System",
    desc: "Built a full-featured Hostel Management System using the MERN stack to streamline hostel operations such as room allocation, maintenance management, billing, and resident tracking. Implemented a dynamic room allocation module allowing administrators to assign rooms based on availability and manage check-ins/check-outs in real-time. Developed a maintenance request system where residents can raise issues with priority levels, and staff can track, update, and resolve them efficiently. Integrated a billing system to manage room charges, utilities, and additional services with invoice generation and payment tracking. Designed a robust resident management module to store and update personal and accommodation details. Implemented role-based access control (Admin, Staff, Resident) for secure and organized system usage. Added financial reporting features with insights into revenue, expenses, and occupancy rates using visual data representation. Integrated modern UI with Tailwind CSS for responsive and user-friendly experience. The application ensures scalability, clean architecture, and efficient data handling across both frontend and backend.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MERN Stack",
      "JWT",
      "REST API",
    ],
    link: "https://hostel-bazar.vercel.app/",
    github: "https://github.com/Shiakh0112/hostel_Bazar",
    img: hostel1,
    detailImg: hostelDetail1,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: "b4",
    category: "frontend",
    title: "Recipe Finder App",
    desc: "Developed a dynamic Recipe Finder application using React.js that allows users to browse, search, and filter recipes using data from a public meals API. Implemented a responsive UI to display recipes with key details such as name, image, and category in a clean card-based layout. Integrated search functionality to find recipes by keywords and added filtering options based on categories and ingredients for refined results. Built a detailed recipe view page showing complete cooking instructions, ingredients list, and video tutorials when available. Ensured smooth navigation between listing and detail pages for better user experience. Utilized API integration (fetch/Axios) for real-time data retrieval and handled loading and error states efficiently. Designed the UI using Tailwind CSS to ensure responsiveness across all devices. Optimized component structure for reusability and maintainability, creating a scalable frontend application.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Axios",
      "Frontend",
    ],
    link: "https://recipe-appclon.netlify.app/",
    github: "https://github.com/Shiakh0112/assignment-7-recipe-app-GOVI",
    img: recipe3,
    detailImg: recipedetail3,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: "b5",
    category: "frontend",
    title: "Smart Expense Tracker",
    desc: "Developed a Smart Expense Tracker application using React.js to help users manage and analyze their daily expenses efficiently. Implemented features to add, view, and delete expense entries with details such as amount, category, date, and notes. Designed category-wise tracking to calculate and display total spending per category dynamically. Integrated advanced filtering and sorting options allowing users to filter expenses by date, category, and amount range, as well as sort by recent or highest expenses. Built interactive data visualizations using chart libraries (Chart.js/Recharts) to display expense distribution through pie charts and bar graphs. Ensured persistent data storage using localStorage so that user data remains saved across sessions. Created a responsive and clean user interface using Tailwind CSS for seamless experience across devices. Structured the application with reusable components and optimized state management for scalability and performance.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Recharts",
      "localStorage",
      "Frontend",
    ],
    link: "https://smarkexpensestrack.netlify.app/",
    github: "https://github.com/Shiakh0112/GUVI-smart-Expense-tracker",
    img: expense4,
    detailImg: expense4,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: "b6",
    category: "frontend",
    title: "DreamHire - Job Portal",
    desc: "• Fully functional frontend Job Portal application built using HTML, CSS, and JavaScript with no backend dependency.\n• Implemented complete user authentication system using localStorage including register, login, logout, and session handling.\n• Designed a modern responsive UI with multiple pages such as Home, Login, Register, Jobs, Job Details, Profile, and Skill Test modules.\n• Developed advanced job listing system with real-time search and multi-filter functionality (salary, location, role, work mode, shift).\n• Implemented dynamic pagination system with smart navigation and result count display.\n• Created detailed job view page with complete information including skills, responsibilities, and apply functionality.\n• Built job application system with duplicate prevention and application tracking using localStorage.\n• Designed user profile dashboard with editable profile, applied jobs history, and test score tracking.\n• Developed complete skill assessment module with 20+ tests, timer-based quiz system, and score calculation.\n• Implemented auto-submit functionality on timer end and stored best scores in localStorage.\n• Created test result analytics with color-coded performance indicators.\n• Integrated dynamic data handling using JSON files for jobs and test questions.\n• Built reusable and modular JavaScript structure for authentication, jobs, profile, and test logic.\n• Implemented smooth animations using ScrollReveal and interactive UI components using Swiper.js.\n• Designed mobile-first fully responsive layout with optimized performance across devices.\n• Used clean code structure with separation of concerns (HTML, CSS, JS modules).",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Swiper.js",
      "ScrollReveal",
      "LocalStorage",
    ],
    link: "https://job-portal-livid-psi.vercel.app/",
    github: "https://github.com/Shiakh0112/job-Portal-",
    img: job2,
    detailImg: jobDetail2,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
];

// ── Certifications ───────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "GUVI Geek Network Private Limited",
    issuedBy: "Arun Prakash, Founder & CEO",
    date: "31st January 2026",
    grade: "A",
    studentId: "CAN_38591677",
    certificateId: "gy8sr5er3rshe7e8",
    partners: "HCL | Skill India | NSDC",
    credentialUrl: "https://drive.google.com/file/d/1pPUVFdMPdlhkZG-5DDtSI3semFmn2Vom/view",
    desc: "Successfully completed the Full Stack Development course with Grade A from GUVI Geek Network Private Limited, in association with HCL, Skill India & NSDC. Covered MongoDB, Express.js, React.js, Node.js, JWT, REST APIs, and deployment.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Full Stack", "HCL", "Skill India", "NSDC"],
  },
];

// ── Education ─────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    year: "2018 — 2019",
    degree: "HSC",
    school: "Maulana Abul Kalam Azad JR college faizpur",
    type: "HSC",
    desc: "Maulana Abul Kalam Azad Colleges are institutions named after the prominent Indian freedom fighter and educationist, Maulana Abul Kalam Azad. These colleges are known for providing quality higher education across various disciplines, with a focus on inclusivity and academic excellence in India.",
    tags: ["Maulana Abul Kalam Azad JR college"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvebR375hwUHNZ9p_SL2VB36rdBexeqYR_g&s",
    Grade: " 63.38%",
  },
  {
    id: 2,
    year: "2019 — 2022",
    degree: "Diploma in Mechanical Engineering",
    school: "Government Polytechnic Jalgaon | Jalgaon",
    type: "Diploma",
    desc: "Government Polytechnic Jalgaon is a polytechnic college established in 1960 in India. Spread over a land of 52 acres, its infrastructure facilities were enhanced and equipment procured under a World Bank Assisted Project implemented during 1992-97. The college started with one branch of civil engineering.",
    tags: [
      "Mechanical Engineering",
      "Government College",
      "Diploma",
      "3 Years",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPbzEmPENmVrZNBu6Iy-4OovHVg9OhAQqbA&s",
    Grade: "70.26%",
  },
  {
    id: 3,
    year: "2022 — 2025",
    degree: "B.E. in Mechanical Engineering",
    school: "Shri Sant Gadge Baba College of Engineering | bhusawal",
    type: "Bachelor's Degree",
    desc: "Pursued a Bachelor of Engineering in Mechanical Engineering from Shri Sant Gadge Baba College. Developed deep knowledge in advanced engineering subjects while simultaneously discovering a passion for software development and technology.",
    tags: ["B.E. Engineering", "Shri Sant Gadge Baba", "Degree", "3 Years"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURsw7DTy1p5b6zQeriSL3ISuoT-qNhWV4wQ&s",
  },
  {
    id: 4,
    year: "2024 — 2025",
    degree: "MERN Stack Development",
    school: "Guvi Institute",
    type: "Professional Course",
    desc: "Completed an intensive 1-year MERN Stack development course at Guvi. Mastered MongoDB, Express.js, React.js, and Node.js along with modern tools like GSAP, Socket.io, Redux, JWT authentication, REST APIs, and deployment on cloud platforms.",
    tags: ["MERN Stack", "Guvi", "1 Year", "Full Stack"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TgB9s79iB6Mk6XhfEtbtXZKxXCY9AeUf7g&s",
  },
];

// ── Skills ────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    label: "Frontend",
    icon: "◈",
    skills: [
      { name: "React.js", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "GSAP", level: 50 },
      { name: "Redux", level: 75 },
    ],
  },
  {
    label: "Backend",
    icon: "◉",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 75 },
      { name: "Socket.io", level: 50 },
      { name: "JWT / Auth", level: 75 },
    ],
  },
  {
    label: "Database",
    icon: "◎",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 82 },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "◇",
    skills: [
      { name: "Git & GitHub", level: 90 },

      { name: "Vercel / Netlify", level: 88 },
      { name: "Postman", level: 85 },
    ],
  },
];
