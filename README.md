# Portfolio Project

A modern portfolio web application built with React and Vite.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features

- Responsive design with modern UI/UX
- Fast loading with Vite build system
- Component-based architecture with React
- Smooth animations and transitions
- Dark/Light mode support
- SEO optimized

## Tech Stack

- **Frontend:** React, Vite, CSS/SCSS
- **Build Tools:** Vite, ESLint
- **Deployment:** Vercel/Netlify/GitHub Pages

---

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (if needed):**
   - Copy `.env.example` to `.env.local`
   - Edit the file to match your environment

---

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## Build

To build the application for production:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import your project in Vercel
3. Configure build settings (Vite should be auto-detected)
4. Deploy

### Option 2: Netlify

1. Push your code to a GitHub repository
2. Import your project in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### Option 3: GitHub Pages

1. Update `vite.config.js` to include your base path:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // other config
   })
   ```
2. Build your project
3. Deploy using GitHub Actions or manually

---

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── styles/      # Global styles
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Entry point
├── .eslintrc.cjs    # ESLint configuration
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

---

## License

[MIT](LICENSE)


codebase
go through my code and enable or fix the notifications 