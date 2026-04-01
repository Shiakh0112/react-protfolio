// ── Projects ─────────────────────────────────────────────────────────

import blog1 from "./images2/1 blog.png";
import blogdetail1 from "./images2/1 blogdetail.png";
import blog2 from "./images2/2 blog.png";
import blogdetail2 from "./images2/2 blogdetail.png";
import memry3 from "./images2/3 memry card .png";
//
import incom4 from "./images2/4 Income Expense Calculator Task .png";
//
import product5 from "./images2/5 product page .png";
//
import router6 from "./images2/6 router.png";
//
import movie7 from "./images2/7 movie.png";
import moviedetail7 from "./images2/7 moviedetail.png";
import authenticaion8 from "./images2/8 authentication.png";
import authenticaiondetail8 from "./images2/8 authenticaionDetail.png";
import reset_password9 from "./images2/9 reset password.png";
//
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

export const allProjects = [
  {
    id: 1,
    category: "frontend",
    title: "Responsive Landing Page",
    desc: "Designed and developed a responsive landing page based on Figma design. Implemented clean UI structure using HTML and CSS. Ensured cross-device compatibility with responsive layouts. Focused on pixel-perfect design, proper spacing, and modern styling techniques.",
    tags: ["HTML", "CSS", "Responsive Design", "Figma"],
    link: "https://shaikh-landing-page.netlify.app/",
    github:
      "https://github.com/Shiakh0112/GUVI-class-1-assignment-completed-HTML-CSS-Landing-Page-Task",
    img: blog1,
    detailImg: blogdetail1,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "HTML & CSS",
  },
  {
    id: 2,
    category: "frontend",
    title: "Tailwind CSS Landing Page",
    desc: "Designed and developed a modern landing page using HTML and Tailwind CSS based on a Figma design. Implemented a utility-first approach to build clean and maintainable UI components efficiently. Ensured mobile-first responsive design using Tailwind breakpoints for seamless performance across all devices. Focused on pixel-perfect implementation, consistent spacing, typography, and alignment. Improved development speed by leveraging reusable utility classes and optimized layout structure for better readability and scalability.",
    tags: ["HTML", "Tailwind CSS", "Responsive Design", "Figma"],
    link: "https://tailwindlandingpag.netlify.app/",
    github: "https://github.com/Shiakh0112/landing-page2-tailwind",
    img: blog2,
    detailImg: blogdetail2,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "HTML & Tailwind CSS",
  },
  {
    id: 3,
    category: "frontend",
    title: "Memory Card Game",
    desc: "Developed an interactive memory card matching game using HTML, CSS, and JavaScript (DOM manipulation). Implemented core game logic including card flipping, matching pairs, and maintaining game state. Added a shuffle algorithm to randomize card positions at the start of each game for better gameplay experience. Designed logic to compare flipped cards and handle matched and unmatched states with delay-based animations. Included a restart functionality to reset and replay the game seamlessly. Ensured responsive design for smooth gameplay across desktop and mobile devices. Focused on clean code structure, modular logic, and user-friendly interface.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "Game Logic",
      "Responsive Design",
    ],
    link: "https://memory-gamenet.netlify.app/",
    github: "https://github.com/Shiakh0112/GUVI-assignment-3-Memory-Card-Game",
    img: memry3,
    detailImg: memry3,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 4,
    category: "frontend",
    title: "Income Expense Calculator",
    desc: "Developed a fully functional Income and Expense Calculator using HTML, CSS, and JavaScript with complete CRUD operations. Implemented features to add, edit, and delete financial entries dynamically, allowing users to manage their income and expenses efficiently. Designed filtering functionality (All, Income, Expense) using radio buttons to view specific data categories. Integrated real-time calculations to display total income, total expenses, and net balance. Utilized Local Storage to persist user data across sessions, ensuring data is retained even after page refresh. Built a responsive and user-friendly interface with clean layout, proper input handling, and reset functionality. Focused on modular code structure, DOM manipulation, and optimized performance for smooth user interaction.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "CRUD Operations",
      "Local Storage",
      "DOM Manipulation",
      "Responsive Design",
    ],
    link: "https://incom-expense-calculatore.netlify.app/",
    github:
      "https://github.com/Shiakh0112/GUVI-class-assignment-3-Incom-Expense-Calculatore",
    img: incom4,
    detailImg: incom4,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 5,
    category: "frontend",
    title: "Add to Cart Product App (React + Modal)",
    desc: "• Developed a dynamic e-commerce product interface using ReactJS with API integration.\n• Fetched real-time product data from Fake Store API and rendered it dynamically on the UI.\n• Implemented reusable React components for product listing, navbar, and cart modal.\n• Designed a responsive product grid layout using Tailwind CSS for better user experience.\n• Built Add to Cart functionality with state management to track selected items.\n• Implemented duplicate product prevention logic with alert notification system.\n• Created a cart modal popup that displays all selected items with full details.\n• Added Remove from Cart functionality allowing users to manage cart items efficiently.\n• Displayed live cart count in the navbar that updates instantly on user actions.\n• Used props to pass data between components ensuring clean component architecture.\n• Maintained proper state synchronization between UI and cart data.\n• Ensured smooth user interaction with real-time updates and modal transitions.\n• Built fully responsive UI compatible with mobile, tablet, and desktop screens.\n• Followed clean coding practices with modular structure and readable code.",
    tags: ["React", "JavaScript", "Tailwind CSS", "API", "react-router"],
    link: "https://productpag.netlify.app/",
    github:
      "https://github.com/Shiakh0112/assignment-4-e-comporiduct-page-GOVI",
    img: product5,
    detailImg: product5,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 6,
    category: "frontend",
    title: "E-Commerce Cart App with Routing",
    desc: "• Built a multi-page e-commerce application using ReactJS with proper routing implementation.\n• Integrated Fake Store API to fetch and display real-time product data dynamically.\n• Designed separate Product and Cart pages using React Router for smooth navigation.\n• Developed a responsive product listing page showing image, title, price, and description.\n• Implemented Add to Cart and Remove from Cart functionality with dynamic state management.\n• Added conditional rendering to toggle between 'Add to Cart' and 'Remove from Cart' buttons.\n• Created a dedicated Cart page displaying selected products with quantity controls.\n• Implemented Increase/Decrease quantity feature for each cart item.\n• Calculated total price dynamically based on product quantity.\n• Applied 10% discount on the final cart value with real-time updates.\n• Displayed individual item totals and overall cart summary for better user experience.\n• Ensured state synchronization across components using props and React state.\n• Designed clean and modern UI using Tailwind CSS for responsiveness across all devices.\n• Implemented smooth navigation between pages without reload using React Router.\n• Followed modular and scalable component-based architecture for maintainability.\n• Maintained clean, readable, and well-structured codebase.",
    tags: ["React", "React Router", "JavaScript", "Tailwind CSS", "API"],
    link: "https://product-routing-base-app.netlify.app/contact",
    github:
      "https://github.com/Shiakh0112/Add-to-Cart-Task-Using-Router_GUVI_Assignment",
    img: router6,
    detailImg: router6,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 7,
    category: "frontend",
    title: "Movie Search App (OMDB API)",
    desc: "• Developed a full-featured movie search application using ReactJS with external API integration.\n• Integrated OMDB API to fetch real-time movie data including search results and detailed information.\n• Implemented a dynamic search bar allowing users to search movies by title or keywords.\n• Displayed search results in a responsive grid layout with movie posters, titles, and basic details.\n• Built pagination system to efficiently handle large sets of movie results.\n• Created a dedicated movie details page with complete information including poster, release year, genre, plot, ratings, and cast.\n• Implemented React Router for smooth navigation between search page and movie detail page.\n• Added dropdown filter using API query parameters (without using array.filter) for optimized performance.\n• Handled API errors gracefully with user-friendly error messages.\n• Managed edge cases such as no results found and invalid search queries.\n• Ensured responsive design using Tailwind CSS for seamless experience across devices.\n• Followed modular component-based architecture for better scalability and maintainability.\n• Maintained clean, readable, and well-structured codebase with proper separation of concerns.",
    tags: ["React", "React Router", "JavaScript", "Tailwind CSS", "API"],
    link: "https://soft-kulfi-0a4286.netlify.app/",
    github: "https://github.com/Shiakh0112/Movie-Searching-app",
    img: movie7,
    detailImg: moviedetail7,
    startDate: "Jan 2024",
    endDate: "Jan 2024",
    language: "JavaScript",
  },
  {
    id: 8,
    category: "backend",
    title: "User Authentication & Authorization (JWT + Bearer Token)",
    desc: "• Developed a secure authentication and authorization system using Node.js and Express.js.\n• Implemented MVC architecture (Model-View-Controller) for scalable and maintainable backend structure.\n• Integrated MongoDB using Mongoose for efficient user data storage and management.\n• Created User model with schema validation for fields like username, email, and password.\n• Built user registration API with proper input validation and error handling.\n• Implemented password hashing using bcrypt to ensure secure storage of user credentials.\n• Developed login API with credential verification and authentication flow.\n• Generated JSON Web Token (JWT) upon successful login for secure session handling.\n• Implemented Bearer Token authentication system for protected routes.\n• Created middleware to verify JWT from request headers and authorize users.\n• Decoded token to extract user information and attached it to request object.\n• Built protected API endpoint to fetch authenticated user data securely.\n• Documented all API endpoints using Postman with sample requests and responses.\n• Implemented robust error handling for invalid tokens, unauthorized access, and validation failures.\n• Deployed backend server on Render for live API access.\n• Maintained clean, modular, and well-documented code following best practices.",
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
    language: "JavaScript , node.js",
  },
  {
    id: 9,
    category: "fullstack",
    title: "Password Reset Flow Authentication System",
    desc: "• Developed a complete full-stack authentication system with secure password reset functionality.\n• Built frontend using ReactJS with modern UI/UX and responsive design using Tailwind CSS.\n• Implemented user signup and login system with real-time form validation.\n• Integrated JWT-based authentication for secure user sessions.\n• Created protected routes ensuring only authenticated users can access profile data.\n• Designed and implemented 'Forgot Password' flow with email verification.\n• Generated secure reset tokens using crypto and implemented token expiry (1 hour).\n• Integrated Brevo email service to send password reset links dynamically.\n• Built Reset Password page with token validation and secure password update functionality.\n• Implemented password hashing using bcrypt for enhanced security.\n• Ensured tokens are single-use and cleared after successful password reset.\n• Developed RESTful APIs using Node.js and Express.js following MVC architecture.\n• Integrated MongoDB using Mongoose for efficient data storage and schema management.\n• Handled edge cases like invalid/expired tokens and non-existent users.\n• Added loading states, alerts, and error handling for better user experience.\n• Implemented clean component structure and reusable UI components.\n• Deployed frontend on Vercel and backend on Render for live production access.\n• Maintained well-structured, scalable, and production-ready codebase.",
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
    id: 10,
    category: "backend",
    title: "Recipes CRUD API",
    desc: "Developed a complete RESTful Recipes API using Node.js, Express.js, and MongoDB following the MVC architecture pattern. Implemented full CRUD operations including creating new recipes, retrieving all recipes, fetching individual recipes by ID, updating existing recipes, and deleting recipes. Integrated MongoDB with Mongoose for efficient data modeling and database interaction. Ensured proper validation and structured error handling for all API endpoints. Designed scalable and maintainable code by separating concerns into models, controllers, and routes. Documented all endpoints using Postman with sample requests and responses for easy testing and developer understanding. The API is fully deployed and can be used as a backend service for any recipe management application.",
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
    id: " b1",
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
    id: "b2",
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
    id: "b3",
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
    id: "b4",
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
  {
    id: "b5",
    category: "fullstack",
    title: "CityGuard — Smart City Crime & Emergency Management Dashboard",
    desc: "• Developed a modern Smart City Command Center Dashboard for managing real-time incidents, officers, analytics, and emergency operations.\n• Built a complete incident management system with CRUD operations, status updates, severity filtering, and real-time alert generation.\n• Designed officer management module with dynamic card UI, zone-based filtering, profile view, and status updates.\n• Implemented detailed officer profile pages with assigned cases tracking and performance analytics.\n• Integrated Redux Toolkit for centralized state management of incidents, officers, alerts, and user profile.\n• Created advanced analytics dashboard using Recharts including line, bar, radar, and hourly distribution charts.\n• Built interactive crime heatmap visualization to represent zone-wise crime density using dynamic grid system.\n• Developed real-time notification system with unread tracking, alert types, and dropdown interaction.\n• Implemented global search functionality across incidents and officers with dynamic navigation.\n• Designed settings panel with dark/light mode, preferences, and localStorage persistence using custom hooks.\n• Integrated external API (Open-Meteo) using Axios to display real-time weather data with fallback handling.\n• Developed responsive UI using Tailwind CSS with custom design system and reusable components.\n• Implemented React Router for multi-page navigation with protected and dynamic routes.\n• Built reusable components and modular architecture for scalability and maintainability.\n• Ensured smooth UX with animations, live clock, theme switching, and optimized performance.\n• Followed clean code practices with proper folder structure, separation of concerns, and maintainable codebase.",
    tags: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "JavaScript",
    ],
    link: "https://city-guard-dashboard.vercel.app/",
    github: "https://github.com/Shiakh0112/City-Guard-dashboard",
    img: dashboard5,
    detailImg: dashboard5,
    startDate: "Mar 2024",
    endDate: "Mar 2024",
    language: "JavaScript",
  },
  ,
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
