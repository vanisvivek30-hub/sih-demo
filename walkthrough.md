# SIH 2026 Project Showcase — Build Complete ✅

## Live Dev Server
**http://localhost:5174/**

> [!IMPORTANT]
> The site is currently running. Visit the link above in your browser. Run `npm run dev` from your workspace folder to restart the server any time.

---

## What Was Built

A fully functional, 12-section premium project showcase website with:

- **Zero build errors** — `npm run build` passes cleanly
- **0 console errors** in the browser
- Framer Motion scroll animations on every section
- Animated canvas particle + grid background
- Glassmorphism cards with neon border hover effects
- Responsive on all screen sizes
- Mobile floating quick-nav button

---

## Screenshots

````carousel
![Hero Section](C:\Users\Vivek\.gemini\antigravity-ide\brain\73168e41-e794-431e-948b-d454f89e9fe5\hero_section_1788439072429.png)
<!-- slide -->
![Problem Section](C:\Users\Vivek\.gemini\antigravity-ide\brain\73168e41-e794-431e-948b-d454f89e9fe5\problem_section_1788439207088.png)
<!-- slide -->
![Solution Section](C:\Users\Vivek\.gemini\antigravity-ide\brain\73168e41-e794-431e-948b-d454f89e9fe5\solution_section_1788439310596.png)
<!-- slide -->
![Demo Section](C:\Users\Vivek\.gemini\antigravity-ide\brain\73168e41-e794-431e-948b-d454f89e9fe5\demo_section_1788439392982.png)
<!-- slide -->
![Workflow Section](C:\Users\Vivek\.gemini\antigravity-ide\brain\73168e41-e794-431e-948b-d454f89e9fe5\workflow_section_captured_1788439861076.png)
````

---

## Project File Structure

```
sih demo/
├── index.html                    ← SEO meta tags, Google Fonts
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── index.css                 ← Global styles, glassmorphism, animations
    ├── main.jsx                  ← Entry point
    ├── App.jsx                   ← Assembles all 12 sections + mobile nav
    │
    ├── data/                     ← ✏️ EDIT THESE FILES TO UPDATE CONTENT
    │   ├── projectData.js        ← Project info, workflow, problems, impacts
    │   ├── teamData.js           ← All 6 team members
    │   ├── videosData.js         ← Video URLs and thumbnails
    │   ├── galleryData.js        ← Gallery image paths
    │   └── techStackData.js      ← Tech stack categories
    │
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx              ← Animated scanning illustration
        ├── Problem.jsx           ← Challenge cards + comparison
        ├── Solution.jsx          ← 6 feature cards
        ├── DemoSection.jsx       ← Video showcase + modal
        ├── Gallery.jsx           ← Filterable grid + lightbox
        ├── Workflow.jsx          ← Animated step timeline
        ├── Innovations.jsx       ← 7 innovation cards
        ├── TechStack.jsx         ← 8 tech category cards
        ├── Timeline.jsx          ← Project journey
        ├── Team.jsx              ← 6 member cards
        ├── Impact.jsx            ← Animated counting stats
        ├── CTA.jsx               ← Call to action
        ├── Footer.jsx
        └── ui/
            ├── AnimatedBackground.jsx  ← Canvas particles + grid
            ├── VideoModal.jsx          ← Video modal player
            └── Lightbox.jsx            ← Image fullscreen viewer
```

---

## How to Customize

### ✏️ Update Team Members
Edit [`teamData.js`](file:///c:/Users/Vivek/Desktop/sih%20demo/src/data/teamData.js):
```js
{
  name: "Your Name",
  role: "Your Role",
  contribution: "What you built",
  skills: ["React", "Python"],
  photo: "/images/team/yourphoto.jpg",  // add to public/images/team/
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourhandle",
}
```

### ▶️ Connect Real Videos
Edit [`videosData.js`](file:///c:/Users/Vivek/Desktop/sih%20demo/src/data/videosData.js):
```js
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### 🖼️ Add Real Screenshots
Edit [`galleryData.js`](file:///c:/Users/Vivek/Desktop/sih%20demo/src/data/galleryData.js):
```js
src: "/images/gallery/your-screenshot.png"  // place files in public/images/gallery/
```

### 🏷️ Update Team Name
Edit [`projectData.js`](file:///c:/Users/Vivek/Desktop/sih%20demo/src/data/projectData.js):
```js
teamName: "Team YourActualName",
```

### 📊 Update Impact Stats
Edit the `impact` array in `projectData.js` with real measured values.

---

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

---

> [!TIP]
> To share with judges via QR code: run `npm run build`, then deploy the `dist/` folder to Netlify, Vercel, or GitHub Pages for free in minutes.

