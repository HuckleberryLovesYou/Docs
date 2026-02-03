# 🚀 Obsidian Publish Alternative: Implementation Plan

## Project Overview

**Goal:** Create a 100% free, automated, and performant personal wiki/website from an existing Obsidian vault, mirroring the functionality of Obsidian Publish (including full-text search and wikilinks).
**No modifications to the original Obsidian notes are required.**

## Tech Stack

- **Generator:** Quartz 4 (Natively supports Obsidian wikilinks and syntax)
- **Runtime & Package Manager:** Bun (Extremely fast JavaScript runtime)
- **IDE:** Project IDX ("Antigravity" - Google Cloud IDE)
- **Version Control:** Git & GitHub
- **Hosting/CD:** Vercel

---

## 🛠️ Step-by-Step Implementation

### Phase 1: Environment Setup in Project IDX (Antigravity)

1. **Initialize Workspace:** Open a new or existing workspace in Project IDX.
2. **Verify Bun Installation:** Open the terminal and check if Bun is installed:
   `bun --version`
   _(If not installed, run: `curl -fsSL https://bun.sh/install | bash`)_

### Phase 2: Quartz 4 Installation & Vault Connection

1. **Initialize Quartz:**
   Run the Quartz setup using Bun in your terminal:
   `bunx quartz create`
   - _Prompts:_ Choose the "Empty" configuration.

2. **Connect Obsidian Vault (Symlinking):**
   Instead of copying files, we create a symlink so your local Obsidian setup remains the single source of truth.
   - Upload your Obsidian vault to your Project IDX workspace (or clone it if it's in a repo).
   - Delete the default `content` folder inside the Quartz directory.
   - Create the symlink:
     `ln -s /path/to/your/obsidian/vault /path/to/quartz/content`
   - _Note:_ Ensure your `.gitignore` inside the Quartz folder does _not_ ignore the `content` folder, so the notes get pushed to GitHub.

### Phase 3: Configuration & Customization (`quartz.config.ts`)

1. **Privacy & Ignored Files:**
   Modify `quartz.config.ts` to exclude private folders and Obsidian config files:
   `ignorePatterns: ["private", "templates", ".obsidian", "drafts"],`
2. **Search Verification:**
   Ensure the Search plugin is active in `quartz.layout.ts`:
   `Component.Search(), // This enables the local full-text search`
3. **Theming:**
   Adjust the `theme` object in `quartz.config.ts` to match Obsidian's default Inter font and color palette.

### Phase 4: Local Testing

1. **Run the local dev server using Bun:**
   `bunx quartz build --serve`
2. **Validate:** Use the IDX browser preview to check wikilink navigation, callout rendering, and verify that the search indexing works instantly.

### Phase 5: Git & GitHub Pipeline

1. **Initialize Git:**
   `git init`
   `git add .`
   `git commit -m "Initial commit: Quartz setup with Obsidian vault"`
2. **Push to GitHub:**
   - Create a new empty repository on GitHub.
   - Link and push your local IDX workspace:
     `git branch -M main`
     `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`
     `git push -u origin main`

### Phase 6: Vercel Deployment

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project** and import the GitHub repository created in Phase 5.
3. **Configure Build Settings:**
   - **Framework Preset:** Other
   - **Install Command:** `bun install`
   - **Build Command:** `bunx quartz build`
   - **Output Directory:** `public`
4. Click **Deploy**. Vercel will now automatically rebuild the site whenever you push new notes to the `main` branch.
