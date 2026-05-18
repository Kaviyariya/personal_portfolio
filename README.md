# Kaviya Balamurugan — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Kaviyariya/personal_portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kaviyariya/personal_portfolio/actions/workflows/deploy.yml)

> A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🔗 Live Demo

**[https://kaviyariya.github.io/personal_portfolio](https://kaviyariya.github.io/personal_portfolio)**

## ✨ Features

- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Smooth Animations** — Polished UI with transitions and hover effects
- **Dark Mode Ready** — Built with Tailwind CSS theming
- **SEO Optimized** — Meta tags, Open Graph, and structured content
- **Fast Performance** — Vite-powered build for optimal loading speeds
- **Accessible** — Semantic HTML and ARIA-friendly components

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [React 19](https://react.dev/) |
| Router | [TanStack Router](https://tanstack.com/router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |

## 📁 Project Structure

```
personal_portfolio/
├── .github/workflows/    # CI/CD deployment workflow
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── sections/     # Page section components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── routes/           # TanStack Router routes
│   ├── router.jsx        # Router configuration
│   └── styles.css        # Global styles
├── dist/                 # Build output (generated)
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kaviyariya/personal_portfolio.git
cd personal_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:static` | Build static site for GitHub Pages |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌐 Deployment

This project is automatically deployed to **GitHub Pages** via GitHub Actions on every push to the `master` branch.

The deployment workflow:
1. Installs dependencies with `npm ci`
2. Builds the static site with `npm run build:static`
3. Deploys the `dist-static/` folder to GitHub Pages

To enable GitHub Pages:
1. Go to **Settings → Pages** in your repository
2. Under **Build and deployment**, select **GitHub Actions**
3. The workflow `.github/workflows/deploy.yml` will run automatically on push
4. Your site will be live at `https://kaviyariya.github.io/personal_portfolio`

## 🎨 Customization

### Update Your Information

Edit the relevant files to customize your portfolio:
- **Personal Details** — Update in component files
- **Project Information** — Modify project data in your components
- **Styling** — Customize Tailwind CSS theme in `tailwind.config.js`

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Add the route in `src/routes/`
3. Update the router configuration in `src/router.jsx`

## 📦 Dependencies

All dependencies are listed in `package.json`. Key packages:
- **react** — UI library
- **vite** — Build tool and dev server
- **tailwindcss** — Utility-first CSS framework
- **shadcn/ui** — Pre-built UI components
- **react-hook-form** — Form management
- **zod** — Schema validation

## 🧪 Testing & Linting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Found a bug or have a feature suggestion? Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

Feel free to reach out if you have any questions or suggestions!

- **GitHub**: [@Kaviyariya](https://github.com/Kaviyariya)
- **Portfolio**: [https://kaviyariya.github.io/personal_portfolio](https://kaviyariya.github.io/personal_portfolio)

---

Built with ❤️ by **Kaviya Balamurugan**
