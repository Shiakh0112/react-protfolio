// ── Projects ─────────────────────────────────────────────────────────

//
import reset_password9 from "./images2/9 reset password.png";

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
    category: "fullstack",
    title: "TaskFlow — SaaS Project Management",
    desc: "Developed a production-ready full-stack SaaS Project Management application using the MERN stack, inspired by tools like Notion and Trello.\n• Implemented secure JWT authentication with refresh token rotation, OTP-based email verification via Brevo SMTP, and Google OAuth 2.0 integration.\n• Built real-time collaboration using Socket.io with live task updates, notifications, typing indicators, and user presence tracking.\n• Created dynamic Kanban boards with drag-and-drop, task priorities, due dates, labels, checklists, and file attachments.\n• Integrated Stripe payment gateway for subscription-based plans (Free, Pro, Enterprise) with billing history tracking.\n• Implemented Role-Based Access Control (Owner, Admin, Member, Viewer) for secure team collaboration.\n• Used Cloudinary for scalable file uploads and applied bcrypt, Helmet, rate limiting, and CORS protection for security.\n• Built a fully responsive React + Redux Toolkit UI with dark mode, toast notifications, and optimized state management.\n• Followed MVC architecture with Express.js, MongoDB, and Mongoose for scalable backend design.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Socket.io", "Stripe", "JWT", "OAuth 2.0", "Cloudinary", "MERN Stack", "REST API"],
    link: "https://saa-s-project-management-app-cigz.vercel.app",
    github: "https://github.com/Shiakh0112/SaaS-Project-Management-App",
    githubFrontend: "https://github.com/Shiakh0112/SaaS-Project-Management-App/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/SaaS-Project-Management-App/tree/main/backend",
    img: ProjectManagement11,
    detailImg: ProjectManagementDetail11,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    language: "JavaScript",
  },
  {
    id: 2,
    category: "fullstack",
    title: "City Guard — Police Command Dashboard",
    desc: "Developed a scalable full-stack Police Command Dashboard using the MERN stack to manage real-time law enforcement operations.\n• Implemented secure JWT-based authentication with Role-Based Access Control (Admin, Officer, Viewer) to ensure system security and data integrity.\n• Built complete incident and officer management modules with full CRUD functionality, advanced filtering, and real-time status updates.\n• Designed an interactive analytics dashboard with charts, crime trends, zone-based heatmaps, and data visualization using Recharts.\n• Integrated global search, live notifications system, and weather API for enhanced situational awareness.\n• Developed protected routes and middleware-based authorization for secure API access.\n• Implemented Redux Toolkit for efficient state management and Axios interceptors for API requests and auth flow.\n• Created a responsive dark/light mode UI with Tailwind CSS following mobile-first design principles.\n• Followed modular architecture and RESTful API design for scalability and performance.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "RBAC", "Recharts", "Tailwind CSS", "MERN Stack", "REST API"],
    link: "https://city-guard-police-command-center-da.vercel.app",
    github: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard",
    githubFrontend: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard/tree/main/backend",
    img: dashboard5,
    detailImg: dashboard5,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    language: "JavaScript",
  },
  {
    id: 3,
    category: "fullstack",
    title: "Hostel Management System",
    desc: "Built a full-featured Hostel Management System using the MERN stack to streamline hostel operations including room allocation, maintenance management, billing, and resident tracking.\n• Implemented a dynamic room allocation module allowing administrators to assign rooms based on availability and manage check-ins/check-outs in real-time.\n• Developed a maintenance request system where residents can raise issues with priority levels and staff can track, update, and resolve them efficiently.\n• Integrated a billing system to manage room charges, utilities, and additional services with invoice generation and payment tracking.\n• Designed a robust resident management module to store and update personal and accommodation details.\n• Implemented Role-Based Access Control (Admin, Staff, Resident) for secure and organized system usage.\n• Added financial reporting features with insights into revenue, expenses, and occupancy rates using visual data representation.\n• Integrated modern UI with Tailwind CSS for a responsive and user-friendly experience.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT", "RBAC", "REST API", "MERN Stack"],
    link: "https://hostel-bazar.vercel.app/",
    github: "https://github.com/Shiakh0112/hostel_Bazar",
    githubFrontend: "https://github.com/Shiakh0112/hostel_Bazar/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/hostel_Bazar/tree/main/backend",
    img: hostel1,
    detailImg: hostelDetail1,
    startDate: "Feb 2024",
    endDate: "Mar 2024",
    language: "JavaScript",
  },
  {
    id: 4,
    category: "fullstack",
    title: "Password Reset Flow — Auth System",
    desc: "Developed a complete full-stack authentication system with secure password reset functionality using the MERN stack.\n• Built frontend using React.js with modern UI/UX and responsive design using Tailwind CSS.\n• Implemented user signup and login system with real-time form validation.\n• Integrated JWT-based authentication for secure user sessions with protected routes.\n• Designed and implemented a 'Forgot Password' flow with email verification link delivery.\n• Generated secure reset tokens using Node.js crypto module with 1-hour token expiry.\n• Integrated Brevo SMTP email service to send password reset links dynamically.\n• Built Reset Password page with token validation and secure password update functionality.\n• Deployed frontend on Vercel and backend on Render for live production access.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Brevo SMTP", "Tailwind CSS", "MERN Stack", "Authentication"],
    link: "https://reset-flow-password-brqy.vercel.app",
    github: "https://github.com/Shiakh0112/reset-flow-password",
    githubFrontend: "https://github.com/Shiakh0112/reset-flow-password/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/reset-flow-password/tree/main/backend",
    img: reset_password9,
    detailImg: reset_password9,
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: 5,
    category: "frontend",
    title: "DreamHire — Job Portal",
    desc: "Built a fully functional frontend Job Portal application using HTML, CSS, and JavaScript with no backend dependency.\n• Implemented complete user authentication system using localStorage including register, login, logout, and session handling.\n• Designed a modern responsive UI with multiple pages: Home, Login, Register, Jobs, Job Details, Profile, and Skill Test modules.\n• Developed advanced job listing system with real-time search and multi-filter functionality (salary, location, role, work mode, shift).\n• Implemented dynamic pagination system with smart navigation and result count display.\n• Built a job application system with duplicate prevention and application tracking using localStorage.\n• Designed user profile dashboard with editable profile, applied jobs history, and test score tracking.\n• Developed a complete skill assessment module with 20+ tests, timer-based quiz system, and score calculation.\n• Implemented smooth animations using ScrollReveal and interactive UI components using Swiper.js.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper.js", "ScrollReveal", "LocalStorage"],
    link: "https://job-portal-livid-psi.vercel.app/",
    github: "https://github.com/Shiakh0112/job-Portal-",
    img: job2,
    detailImg: jobDetail2,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: 6,
    category: "frontend",
    title: "Recipe Finder App",
    desc: "Developed a dynamic Recipe Finder application using React.js that allows users to browse, search, and filter recipes using data from a public meals API.\n• Implemented a responsive UI to display recipes with key details such as name, image, and category in a clean card-based layout.\n• Integrated search functionality to find recipes by keywords and added filtering options based on categories and ingredients.\n• Built a detailed recipe view page showing complete cooking instructions, ingredients list, and video tutorials when available.\n• Utilized API integration with Axios for real-time data retrieval and handled loading and error states efficiently.\n• Ensured smooth navigation between listing and detail pages for better user experience.\n• Designed the UI using Tailwind CSS to ensure responsiveness across all devices.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "REST API", "Axios"],
    link: "https://recipe-appclon.netlify.app/",
    github: "https://github.com/Shiakh0112/assignment-7-recipe-app-GOVI",
    img: recipe3,
    detailImg: recipedetail3,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
  {
    id: 7,
    category: "frontend",
    title: "Smart Expense Tracker",
    desc: "Developed a Smart Expense Tracker application using React.js to help users manage and analyze their daily expenses efficiently.\n• Implemented features to add, view, and delete expense entries with details such as amount, category, date, and notes.\n• Designed category-wise tracking to calculate and display total spending per category dynamically.\n• Integrated advanced filtering and sorting options to filter expenses by date, category, and amount range.\n• Built interactive data visualizations using Recharts to display expense distribution through pie charts and bar graphs.\n• Ensured persistent data storage using localStorage so that user data remains saved across sessions.\n• Created a responsive and clean user interface using Tailwind CSS for seamless experience across devices.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Recharts", "localStorage"],
    link: "https://smarkexpensestrack.netlify.app/",
    github: "https://github.com/Shiakh0112/GUVI-smart-Expense-tracker",
    img: expense4,
    detailImg: expense4,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
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
    githubFrontend: "https://github.com/Shiakh0112/SaaS-Project-Management-App/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/SaaS-Project-Management-App/tree/main/backend",
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
    github: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard",
    githubFrontend: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/City-Guard-Police-Command-center-Dashboard/tree/main/backend",
    img: cityguard1,
    detailImg: cityguardDetail1,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    language: "JavaScript",
  },
  {
    id: "b3",
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
    githubFrontend: "https://github.com/Shiakh0112/hostel_Bazar/tree/main/frontend",
    githubBackend: "https://github.com/Shiakh0112/hostel_Bazar/tree/main/backend",
    img: hostel1,
    detailImg: hostelDetail1,
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    language: "JavaScript",
  },
];

// certificate images
import cert1 from "./certificates/GuviCertification - MQ8W3IUFkX3t71jI.png";
import cert2 from "./certificates/GuviCertification - Tt9UEUuRIzoZ1neA.png";
import cert3 from "./certificates/GuviCertification - mj3a2oCKpMpmK8np.png";
import cert4 from "./certificates/GuviCertification - S5AYDqLDhnQe6fmM.png";
import cert5 from "./certificates/GuviCertification - 7Us98DjNyNQELrm2.png";
import cert6 from "./certificates/GuviCertification - 9mpbkVWGGnQ08WcK (1).png";

// ── Certifications ───────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "GUVI Geek Network Private Limited",
    date: "31st January 2026",
    grade: "A",
    studentId: "CAN_38591677",
    partners: "HCL | Skill India | NSDC",
    credentialUrl: "https://drive.google.com/file/d/1pPUVFdMPdlhkZG-5DDtSI3semFmn2Vom/view",
    desc: "Successfully completed Full Stack Development with Grade A from GUVI Geek Network, in association with HCL, Skill India & NSDC. Covered MongoDB, Express.js, React.js, Node.js, JWT, REST APIs, and deployment.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Full Stack", "HCL"],
  },
];

// ── Extra Certifications (image cards) ───────────────────────────
export const extraCertifications = [
  {
    id: 1,
    title: "HTML, CSS & Tailwind CSS",
    course: "Full Stack Development Programme — Zen Class",
    issuer: "GUVI Geek Network",
    partners: "HCL | IITM | Google for Education",
    date: "January 19, 2026",
    img: cert1,
    tags: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "IIT-M Pravartak Full Stack with AI Tools",
    course: "IIT-M Pravartak Certified Full Stack Development Course With AI Tools",
    issuer: "GUVI Geek Network",
    partners: "IIT-M Pravartak | IITM | Google for Education",
    date: "January 19, 2026",
    duration: "May 2025 – November 2025",
    img: cert2,
    tags: ["Full Stack", "AI Tools", "IIT-M", "Pravartak"],
  },
  {
    id: 3,
    title: "JS Basics",
    course: "Full Stack Development Programme — Zen Class",
    issuer: "GUVI Geek Network",
    partners: "HCL | IITM | Google for Education",
    date: "January 19, 2026",
    img: cert3,
    tags: ["JavaScript", "JS Basics", "Frontend"],
  },
  {
    id: 4,
    title: "JS Basics (Advanced)",
    course: "Full Stack Development Programme — Zen Class",
    issuer: "GUVI Geek Network",
    partners: "HCL | IITM | Google for Education",
    date: "January 19, 2026",
    img: cert4,
    tags: ["JavaScript", "JS Basics", "Frontend"],
  },
  {
    id: 5,
    title: "Node.js",
    course: "Full Stack Development Programme — Zen Class",
    issuer: "GUVI Geek Network",
    partners: "HCL | IITM | Google for Education",
    date: "January 19, 2026",
    img: cert5,
    tags: ["Node.js", "Backend", "Server"],
  },
  {
    id: 6,
    title: "ReactJS",
    course: "Full Stack Development Programme — Zen Class",
    issuer: "GUVI Geek Network",
    partners: "HCL | IITM | Google for Education",
    date: "January 19, 2026",
    img: cert6,
    tags: ["React.js", "Frontend", "UI"],
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
