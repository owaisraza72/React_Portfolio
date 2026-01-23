# Deployment Guide

This portfolio is built with React, Vite, and Tailwind CSS. Below are the steps to deploy it to popular hosting platforms.

## One-Click Deployment (Recommended)

Most platforms support connecting your GitHub repository directly. This is the easiest way to deploy and ensures continuous deployment (automatic updates when you push code).

1.  Push your code to a GitHub repository.
2.  Log in to Vercel or Netlify.
3.  "Add New Site" / "Import Project".
4.  Select your repository.
5.  The settings (Framework: Vite, Command: `npm run build`, Output: `dist`) should be detected automatically.
6.  Click Deploy.

---

## Manual Deployment Options

### 1. Vercel

Vercel is the recommended host for React applications.

**Using CLI:**

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts.

### 2. Netlify

**Using Drag & Drop:**

1.  Run `npm run build` locally.
2.  This generates a `dist` folder.
3.  Log in to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag and drop the `dist` folder onto the page.

### 3. GitHub Pages

Since this is a client-side router app (SPA), GitHub Pages requires some configuration.

**Step 1: Install gh-pages**

```bash
npm install gh-pages --save-dev
```

**Step 2: Update `package.json`**
Add a `homepage` field and deployment scripts:

```json
{
  "homepage": "https://<your-username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

_Note: Replace `<your-username>` and `<repo-name>` with your actual details._

**Step 3: Update `vite.config.js`**
Set the base path to match your repo name:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/<repo-name>/", // Add this line if deploying to https://<user>.github.io/<repo-name>/
});
```

**Step 4: Deploy**
Run:

```bash
npm run deploy
```

---

## Build Command Verification

The project is configured to build using:

```bash
npm run build
```

This outputs to the `dist/` directory.
