# Quick Setup Guide

## Step 1: Verify Installation
Dependencies are already installed! If you need to reinstall:
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

Then open http://localhost:3000

## Step 3: Customize Your Content

### Add Your Photos
1. Place photos in `public/images/`
2. Edit `components/MediaGallery.tsx` - update the `mediaItems` array

### Add YouTube Videos
1. Get your YouTube video IDs (from the URL: youtube.com/watch?v=**VIDEO_ID**)
2. Edit `components/MediaGallery.tsx`:
   ```typescript
   {
     id: 1,
     type: "youtube",
     src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
     thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
     title: "Performance Title",
   }
   ```

### Add Your Research Paper
1. Place PDF in `public/papers/` (e.g., `preservation-of-newari-music.pdf`)
2. The download link in `components/Publications.tsx` already points to this location

### Update Personal Information
- **Biography**: Edit `components/About.tsx`
- **Hero text**: Edit `components/Hero.tsx`
- **Contact info**: Edit `components/Contact.tsx`
- **Footer links**: Edit `components/Footer.tsx`

## Step 4: Build for Production
```bash
npm run build
npm start
```

## Step 5: Deploy

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js and deploys!

### Other Hosting Options
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting service

---

**Need Help?** Check the main README.md for detailed instructions!
