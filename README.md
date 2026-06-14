# Aladdin Grill Esbjerg

A simple landing page for **Aladdin Grill**, a premium grill, kebab & pizza restaurant in Esbjerg. The site is built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for smooth animations.

---

## ✨ Features

- Responsive full‑screen hero section with a gradient background.
- Animated menu cards that fade‑in as they scroll into view.
- Call‑to‑action button (placeholder – hook up to your ordering system).
- Dark‑mode support via Tailwind's `dark:` utilities.
- Simple, maintainable code using the `pages` router (no custom `app` directory).

---

## 🛠️ Tech stack

| Technology | Version |
|------------|---------|
| Next.js    | 14.2.0 |
| React      | 18.2.0 |
| TypeScript | 5.5.2 |
| Tailwind CSS | 3.4.0 |
| Framer Motion | ^11.0.0 |

---

## 🚀 Getting started (local development)

```bash
# 1. Clone the repository (or copy the folder into your own repo)
# git clone <repo‑url>
# cd "ALADDIN GRILL ESBJERG"

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
# → Open http://localhost:3000 in your browser

# 4. Build for production
npm run build

# 5. Run the production build locally (optional)
npm start
```

> **Note** – The project is configured as a **private** package (`"private": true`) because it is meant to be deployed directly from the folder or a private repo.

---

## 📦 Deploy to Vercel

1. **Push the project to a Git provider** (GitHub, GitLab, or Bitbucket). Create a repository, add the files, and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your‑repo‑url>
   git push -u origin main
   ```
2. **Import the repository on Vercel**:
   - Go to <https://vercel.com/dashboard> and click **"New Project"**.
   - Choose the repository you just pushed.
   - Vercel automatically detects a **Next.js** project and sets the build command to `npm run build` and the output directory to `.next`.
   - No environment variables are required for this site.
3. **Deploy** – Click **"Deploy"**. Vercel will install the dependencies, run the build, and provide a live URL like `https://<project-name>.vercel.app`.
4. (Optional) **Custom domain** – Add your custom domain in the Vercel dashboard and point your DNS records to Vercel.

---

## 🎨 Customising the site

- **Hero text & tagline** – Edit the `<h1>` and `<p>` inside `pages/index.tsx`.
- **Menu items** – The `menu` array in `pages/index.tsx` defines name, description and price. Add, remove or edit items there.
- **Colours & spacing** – Adjust Tailwind utilities in `tailwind.config.js` or directly in the JSX classes.
- **Animations** – All motion components use Framer Motion; tweak the `initial`, `animate`, `whileHover`, etc., props for different effects.
- **Global styles** – Modify `styles/globals.css` for additional CSS or dark‑mode tweaks.

---

## 📄 License

This starter template is released under the **MIT License** – feel free to use it for commercial or personal projects.
