# 🚀 Shaikh Ashfaq — Developer Portfolio

A modern, fully responsive personal portfolio built with **React + Vite**, featuring smooth GSAP animations, dark/light theme, real project showcases, and a working contact form.

---

## 🌐 Live Demo

> [Coming Soon — Deploy link here]

---

## 📸 Preview

| Dark Mode | Light Mode |
|-----------|------------|
| ![dark](#) | ![light](#) |

---

## ✨ Features

- ⚡ **Blazing Fast** — Built with Vite for instant HMR and optimized builds
- 🎨 **GSAP Animations** — Smooth scroll-triggered animations on every section
- 🌙 **Dark / Light Theme** — Toggle with Context API, saved in localStorage
- 📱 **Fully Responsive** — Mobile, Tablet, Desktop optimized
- 📧 **Working Contact Form** — EmailJS integration, messages land in inbox
- 🗺️ **Real Map** — Leaflet.js with Jalgaon, Maharashtra location
- 🔗 **Project Detail Pages** — React Router with full project info
- 🎯 **3D Cube Cards** — Interactive 3D flip animation on project cards
- 📜 **Pagination** — 6 cards per page (desktop), 4 per page (mobile)
- 🔄 **Rotating Roles** — Animated role text in hero section
- 📌 **Fixed Social Sidebar** — GitHub & LinkedIn always visible

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React.js, Vite, Tailwind CSS |
| Animations | GSAP, ScrollTrigger |
| Routing | React Router DOM |
| Map | Leaflet.js, React Leaflet |
| Email | EmailJS |
| State | Context API |
| Styling | Tailwind CSS + CSS Variables |
| Fonts | Playfair Display, Montserrat |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── data.js          # All project, education, skills data
│   └── images/          # Profile photos
├── components/
│   ├── Navbar.jsx        # Fixed navbar with theme toggle
│   ├── Hero.jsx          # Hero with rotating roles
│   ├── About.jsx         # About with image and skills
│   ├── Projects.jsx      # Projects with 3D cards + pagination
│   ├── BestProjects.jsx  # Featured projects with pinned scroll
│   ├── Skills.jsx        # Skill bars with animation
│   ├── Education.jsx     # Accordion education rows
│   ├── Contact.jsx       # Contact form + map
│   ├── Footer.jsx        # Footer with marquee
│   ├── SocialSidebar.jsx # Fixed social icons
│   └── ProjectDetail.jsx # Project detail page
├── context/
│   └── ThemeContext.jsx  # Dark/Light theme context
└── index.css            # Global styles + theme variables
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Shiakh0112/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your EmailJS credentials in .env

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your keys from [EmailJS Dashboard](https://www.emailjs.com/)

---

## 📬 Contact Form Setup (EmailJS)

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Add Email Service (Gmail)
3. Create Template with variables:
   - `{{from_name}}` — Sender name
   - `{{from_email}}` — Sender email
   - `{{subject}}` — Subject
   - `{{message}}` — Message
4. Copy Service ID, Template ID, Public Key to `.env`

---

## 📦 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, rotating roles, photo, download resume |
| **About** | Bio, skills, info, profile image |
| **Projects** | All projects with 3D cards, filter tabs, pagination |
| **Best Projects** | Featured projects with cinematic scroll |
| **Skills** | Animated skill bars by category |
| **Education** | Timeline accordion with images |
| **Contact** | Form with EmailJS + Leaflet map |
| **Footer** | Links, socials, marquee |

---

## 🎨 Theme

The portfolio supports **Dark** and **Light** modes:

- Toggle button in Navbar (☀️ / 🌙)
- Theme saved in `localStorage`
- Implemented via React Context API
- CSS Variables for seamless switching

---

## 👤 Author

**Shaikh Ashfaq Shaikh Qayyum**
- 📧 khatikashfaq992@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/shaikh-ashfaq-shaikh-qayyum)
- 🐙 [GitHub](https://github.com/Shiakh0112)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you like this portfolio, give it a star on GitHub!
