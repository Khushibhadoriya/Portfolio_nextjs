# 🚀 Personal Portfolio – Next.js

A modern, responsive **developer portfolio website** built using **Next.js (App Router)**.  
This project showcases my skills, projects, and experience, along with a fully functional **contact form with email integration**.

🔗 **Live Demo:** https://portfolio-nextjs-rho-ebon.vercel.app/  
📂 **GitHub Repo:** https://github.com/Khushibhadoriya/Portfolio_nextjs

---

## ✨ Features

- ⚡ Built with **Next.js App Router**
- 🎨 Responsive UI using **Tailwind CSS**
- 🧭 Dynamic routing (`/projects/[slug]`)
<!-- - 🧠 Dynamic SEO metadata for each project -->
- 📬 Contact form with **API Routes + Nodemailer**
- 🔒 Environment variables for secure credentials
- 🌍 Deployed on **Vercel**

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Email Service:** Nodemailer (Gmail SMTP)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```bash
├── app/
│   ├── page.js                # Home page
│   ├── about/
│   ├── projects/
│   │   └── [slug]/            # Dynamic project pages
│   ├── api/
│   │   └── contact/route.js   # Contact form API
│   └── layout.js
├── components/
│   ├── Navbar.jsx
│   ├── ContactForm.jsx
│   └── ...
├── public/
├── .env.local                 # Environment variables (ignored)
├── tailwind.config.js
├── package.json
└── README.md
