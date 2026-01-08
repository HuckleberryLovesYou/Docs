# Contributing to this Documentation

Thank you for your interest in contributing to the **Docs** repository! 🎉 This guide will help you get started with Git, GitHub, and our workflow so you can submit your first Pull Request (PR) with confidence.

---

## Table of Contents

- [[#Your First Contribution|Your First Contribution]]
- [[#Prerequisites|Prerequisites]]
- [[#Fork & Clone the Repository|Fork & Clone the Repository]]
- [[#Working on a Branch|Working on a Branch]]
- [[#Making Changes|Making Changes]]
		- [[#Stage your changes:|Stage your changes:]]
		- [[#Commit Changes|Commit Changes]]
		- [[#Commit Messages|Commit Messages]]
- [[#Opening a Pull Request|Opening a Pull Request]]
		- [[#Push your branch to your fork:|Push your branch to your fork:]]
		- [[#Fill out the PR template:|Fill out the PR template:]]
- [[#Review Process|Review Process]]
- [[#Getting Help|Getting Help]]


---
## Your First Contribution

If this is your first time contributing to an open-source project or to Git, welcome! The simplest way to start is:

1. Look for an [existing issue](https://github.com/HuckleberryLovesYou/Docs/issues) you’d like to work on.  
2. Comment on the issue to let us know you’re taking it.  
3. Follow the steps below to set up your environment.  
4. Make your changes, test locally (if applicable), and submit a PR.

Don’t see an issue you like? Feel free to [open a new issue](https://github.com/HuckleberryLovesYou/Docs/issues/new) with your feature idea or typo fix!

---

## Prerequisites

- **Git** installed on your computer.  
  - Download & instructions: https://git-scm.com/downloads  
- A **GitHub account** (free).  
  - Sign up: https://github.com/join  
- (Optional but recommended) [Obsidian](https://obsidian.md/download)

---

## Fork & Clone the Repository

1. **Fork** the official repo to your own GitHub account by clicking the “Fork” button at the top-right:  
   `https://github.com/HuckleberryLovesYou/Docs` → `https://github.com/<your-username>/Docs`
   
2. **Clone** your fork locally:  
   ```bash
   git clone https://github.com/<your-username>/Docs.git
   cd Docs
```

3. Add the upstream remote (the original repo) so you can stay in sync:
```bash
git remote add upstream https://github.com/HuckleberryLovesYou/Docs.git
git fetch upstream
```


4. Configure Git
   Set your name and email so your commits are attributed properly:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
5. Check your settings:
```bash
git config --list
```
## Working on a Branch
Always create a new branch for each logical change:
```bash
# Update your local main
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b fix-typo-module1
```

Branch naming suggestions:
- fix/... for typos or small fixes
- feature/... for new content or modules
- docs/... for substantial documentation changes

## Making Changes
Edit or add Markdown (.md) files in the appropriate folder.

Preview your changes locally in your editor or in Obsidian.

#### Stage your changes:
```bash
git add path/to/your-file.md
```

#### Commit Changes
```bash
git commit -m <commit_message>
```

#### Commit Messages
Clear commit messages make review easier. Use this template:
```

<type> (<scope>): <short summary>

[optional longer description]
```

type:
feat, fix, add, style, refactor

scope: 
directory or file name, e.g. _IPv4 or Home

short summary:
less than 50 characters

## Opening a Pull Request
#### Push your branch to your fork:

```bash
git push origin fix-typo-module1
```
Go to your fork on GitHub. You’ll see a “Compare & pull request” button—click it.

#### Fill out the PR template:
Title: same as your commit summary or following the [[CONTRIBUTING#Commit Messages|Commit Messages Template]].

Description: What did you change? Why? Screenshots or examples are welcome.

Submit the PR against HuckleberryLovesYou/Docs:main.

## Review Process
The repo maintainer (Tim Matheis) will review your changes, request modifications if needed, and merge once everything looks good.

You may be asked to rebase or update your branch if main has moved ahead.

## Getting Help
If you run into any issues:
Ask questions in an issue on GitHub and Ping @timmatheis in the issue or PR thread.

We’re happy to help you get started!

Code of Conduct & License
All contributions fall under the project’s GPL-3.0 License.

---

Thank you for helping making our Documentation better!