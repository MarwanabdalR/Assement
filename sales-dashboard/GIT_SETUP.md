# Git Repository Setup Instructions

Since Git is not available in the current environment, here are the steps to set up the repository on your local machine:

## Prerequisites
- Install Git from https://git-scm.com/downloads
- Create a GitHub account if you don't have one

## Setup Steps

1. **Initialize Git Repository**
```bash
cd sales-dashboard
git init
```

2. **Add All Files**
```bash
git add .
```

3. **Create Initial Commit**
```bash
git commit -m "Initial commit: Sales Dashboard with Next.js 15, TypeScript, and Tailwind CSS"
```

4. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository named "sales-dashboard"
   - Don't initialize with README (we already have one)

5. **Add Remote Origin**
```bash
git remote add origin https://github.com/YOUR_USERNAME/sales-dashboard.git
```

6. **Push to GitHub**
```bash
git branch -M main
git push -u origin main
```

## Project Features Implemented

✅ **Next.js 15 with TypeScript and Tailwind CSS**
✅ **Atomic Design Structure** (atoms, molecules, organisms)
✅ **Mock Sales Data** for 2022, 2023, 2024
✅ **Multiple Chart Types** (Bar, Line, Pie) using Recharts
✅ **Custom Filter Input** for sales threshold
✅ **Responsive Dashboard** with modern UI
✅ **Comprehensive README** with setup instructions

## Running the Project

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to see the dashboard.
