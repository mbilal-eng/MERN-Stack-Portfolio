# Muhammad Bilal - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing my work as a MERN Stack Developer. The website features a clean design with smooth animations, dark/light theme support, and a comprehensive showcase of projects and skills.

## 🚀 Live Demo

[View Live Portfolio](https://mbilal-dev.netlify.app/) <!-- Replace with your actual deployment URL -->

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Theme Support**: Dark and light theme toggle
- **Interactive Components**: Smooth scrolling, hover effects, and animations
- **Project Showcase**: Detailed project cards with live links and technologies
- **Skills Visualization**: Interactive skill bars with proficiency levels
- **Contact Integration**: WhatsApp floating button and contact form
- **Resume Download**: Direct PDF download functionality
- **Performance Optimized**: Built with Next.js 16 for optimal performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library

### Backend & Database
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **PostgreSQL** - SQL database
- **Firebase** - Backend-as-a-Service

### Tools & Deployment
- **Git & GitHub** - Version control
- **Vercel** - Deployment platform
- **Docker** - Containerization
- **Postman** - API testing

## 📁 Project Structure

```
portfolio-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── education.tsx     # Education section
│   ├── experience.tsx    # Work experience
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills section
│   └── whatsapp-float.tsx # WhatsApp button
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-landing.git
   cd portfolio-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 🏠 Hero Section
- Professional introduction
- Call-to-action buttons
- Animated background with tech elements
- Resume download functionality

### 👨‍💻 About Section
- Personal introduction
- Professional summary
- Key highlights

### 🛠️ Skills Section
- Frontend technologies (React, Next.js, TypeScript, Tailwind CSS)
- Backend technologies (Node.js, Express.js, Nest.js)
- Database technologies (MongoDB, PostgreSQL, Firebase)
- Tools & platforms (Git, Docker, Postman, JWT)

### 🚀 Projects Section
- **Parrotix** - English Learning Mobile App (React Native, Firebase)
- **Multi-Tenant E-commerce** - Full-stack platform (MERN Stack, Stripe)
- **Movix** - Movie Trailer Platform (React.js, TMDB API)
- **ShortenURL** - URL Shortener with Analytics (MERN Stack)
- **Resumer** - Resume Builder (React.js, Tailwind CSS)
- **Multilingual Chat App** - Real-time chat with translation
- **Football Analytics** - Live scores and analytics dashboard

### 💼 Experience Section
- Work history and achievements
- Key responsibilities and technologies used

### 🎓 Education Section
- Academic background
- Certifications and courses

### 📞 Contact Section
- Contact form with validation
- Social media links
- WhatsApp integration

## 🎨 Customization

### Updating Personal Information
1. Edit `components/hero.tsx` for name and title
2. Update `components/about.tsx` for personal description
3. Modify `components/experience.tsx` for work history
4. Update `components/education.tsx` for academic background

### Adding New Projects
1. Add project details to the `projects` array in `components/projects.tsx`
2. Add project images to the `public/` directory
3. Update the project object with title, description, technologies, and links

### Updating Skills
1. Modify the `skillsData` array in `components/skills.tsx`
2. Add or remove skill categories and individual skills
3. Update proficiency levels (0-100)

### Styling Customization
- Global styles: `app/globals.css`
- Component-specific styles: Individual component files
- Theme configuration: `components/theme-provider.tsx`

## 📄 Resume

Download my latest resume: [Muhammad Bilal - MERN Stack Developer.pdf](/public/Muhammad%20Bilal%20-%20MERN%20Stack%20Developer.pdf)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/portfolio-landing/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Muhammad Bilal** - MERN Stack Developer

- Email: [your-email@example.com](mailto:your-email@example.com)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- GitHub: [@Muhammad-Bilal01](https://github.com/Muhammad-Bilal01)
- Portfolio: [Your Portfolio URL](https://your-portfolio-url.com)

---

⭐ If you found this project helpful, please give it a star!
