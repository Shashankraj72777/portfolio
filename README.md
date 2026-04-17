# Shashank Raj — Portfolio

A modern, animated personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🌙 **Dark / Light Mode** — system preference detected, toggle in navbar
- 🎬 **Animated Hero** — canvas particle network, typewriter role switcher
- 📜 **Scroll Reveal** — sections animate in as you scroll
- 💻 **Terminal Code Block** — interactive profile card
- 🧩 **Microservices Project Showcase** — with tech stack tags & highlights
- 📊 **Skills Grid** — color-coded by category
- 📬 **Contact Form** — ready to hook up to Formspree/EmailJS
- ⚡ **Responsive** — mobile-first, works on all screen sizes
- 🔤 **Custom Fonts** — Syne (display) + Space Grotesk (body) + JetBrains Mono

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # CSS variables, animations, utilities
├── components/
│   ├── ThemeProvider.tsx  # Dark/light mode context
│   ├── Navbar.tsx         # Fixed nav with active section tracking
│   ├── Hero.tsx           # Canvas particles, typewriter, stats
│   ├── About.tsx          # Bio, education, LeetCode card
│   ├── Experience.tsx     # Animated timeline
│   ├── Projects.tsx       # Project showcase cards
│   ├── Skills.tsx         # Tech arsenal grid
│   ├── Contact.tsx        # Contact form + info
│   └── Footer.tsx         # Footer with socials
└── lib/
    └── data.ts            # All resume data (edit this!)
```

## ✏️ Customization

All your data lives in **`src/lib/data.ts`** — update name, email, projects, skills etc. there.

To connect the contact form, update `handleSubmit` in `Contact.tsx` to use [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com).

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (available, extend as needed)
- **Lucide React** (icons)
- **Google Fonts** — Syne, Space Grotesk, JetBrains Mono

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

One-click deploy on **Vercel**:
1. Push to GitHub
2. Import repo at vercel.com
3. Deploy (zero config needed for Next.js)
