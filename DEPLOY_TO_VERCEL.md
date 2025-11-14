# Deploying to Vercel - Step by Step Guide

## Prerequisites ✅
- [x] Next.js project created
- [x] All components built
- [ ] GitHub account
- [ ] Vercel account (free)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
```bash
cd /Users/pmanandhar/sajan-portfolio/sajan-website
git init
git add .
git commit -m "Initial commit: Sajan Maharjan portfolio website"
```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name: `sajan-portfolio` (or any name you prefer)
   - Description: "Portfolio website for musician Sajan Maharjan"
   - Keep it Public or Private (both work with Vercel)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/sajan-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Sign Up" (use GitHub to sign in)

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your `sajan-portfolio` repository

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update DNS records

## Method 2: Deploy via Vercel CLI

### Install Vercel CLI:
```bash
npm i -g vercel
```

### Login:
```bash
vercel login
```

### Deploy:
```bash
cd /Users/pmanandhar/sajan-portfolio/sajan-website
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `sajan-portfolio`
- In which directory is your code located? `./`
- Auto-detected settings? **Y**

### Deploy to Production:
```bash
vercel --prod
```

## Environment Variables (If Needed)

If you add environment variables later:

1. Create `.env.local` file (already in .gitignore)
2. Add your variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. In Vercel Dashboard:
   - Go to "Settings" → "Environment Variables"
   - Add each variable
   - Redeploy

## Post-Deployment Checklist

- [ ] Visit your deployed site
- [ ] Test all navigation links
- [ ] Test gallery lightbox
- [ ] Test YouTube embeds
- [ ] Test on mobile devices
- [ ] Test PDF download link
- [ ] Update social media links with live URL
- [ ] Share with friends/colleagues!

## Updating Your Site

After making changes:

1. **Commit changes**:
```bash
git add .
git commit -m "Description of changes"
git push
```

2. **Vercel auto-deploys** from GitHub (usually takes 2-3 minutes)

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Make sure images are in `public/` folder and paths start with `/`

### Issue: Build fails
**Solution**: Check the build logs in Vercel dashboard. Usually it's:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test

### Issue: 404 on routes
**Solution**: Next.js App Router handles this automatically. Make sure you're using correct paths.

## Your Vercel Dashboard

After deployment, you'll have access to:
- **Deployments**: View all deployment history
- **Analytics**: See visitor statistics (on paid plans)
- **Settings**: Configure domains, environment variables
- **Logs**: View build and runtime logs

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited personal projects
- ✅ Automatic HTTPS
- ✅ Automatic CI/CD
- ✅ 100GB bandwidth/month
- ✅ Serverless functions

Perfect for your portfolio!

---

## Quick Start Commands

```bash
# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Or deploy via CLI
vercel --prod
```

Your site will be live in minutes! 🚀
