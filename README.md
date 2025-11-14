# Sajan Maharjan - Musician Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS showcasing the work of musician and researcher Sajan Maharjan.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Hero Section**: Eye-catching landing page introducing Sajan Maharjan
- **About Section**: Detailed biography and areas of expertise
- **Media Gallery**: Interactive gallery with lightbox for photos and YouTube videos
- **Publications Section**: Showcase research papers with download capabilities
- **Contact Form**: Functional contact form for inquiries and collaborations
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling to sections

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sajan-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero/landing section
│   ├── About.tsx            # About section
│   ├── MediaGallery.tsx     # Photo/video gallery
│   ├── Publications.tsx     # Research papers section
│   └── Contact.tsx          # Contact form
├── public/
│   ├── images/              # Place your photos here
│   └── papers/              # Place PDF papers here
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization Guide

### Adding Your Content

1. **Photos and Videos**: 
   - Place your performance photos in `public/images/`
   - Update the `mediaItems` array in `components/MediaGallery.tsx` with your image paths

2. **YouTube Videos**:
   - In `components/MediaGallery.tsx`, update the YouTube video IDs in the `mediaItems` array
   - Replace `dQw4w9WgXcQ` with your actual YouTube video IDs

3. **Research Papers**:
   - Place your PDF papers in `public/papers/`
   - Update the download link in `components/Publications.tsx`

4. **Personal Information**:
   - Edit `components/About.tsx` to update your biography
   - Edit `components/Hero.tsx` for hero section text
   - Edit `components/Contact.tsx` for contact information

5. **Colors**:
   - Customize colors in `tailwind.config.ts` under the `colors` section
   - Primary colors (reds) and accent colors (yellows) can be adjusted

### Example: Adding Real Photos

Replace the placeholder images in `MediaGallery.tsx`:

```typescript
const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/performance1.jpg",  // Your actual image
    title: "Concert Performance",
    description: "Live at Cultural Festival 2024",
  },
  // Add more items...
];
```

### Example: Adding YouTube Videos

Update the YouTube embed URLs:

```typescript
{
  id: 1,
  type: "youtube",
  src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  title: "Your Performance Title",
}
```

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deployment

This project can be deployed to:

- **Vercel** (Recommended for Next.js): Simply connect your GitHub repo
- **Netlify**: Add build command `npm run build` and publish directory `.next`
- **Any Node.js hosting**: Build and run with `npm start`

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Environment Variables

If you add form submission functionality, create a `.env.local` file:

```env
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
# Add other environment variables as needed
```

## Features to Add (Optional)

- Email integration for contact form (using services like EmailJS, SendGrid, or Resend)
- Blog section for music-related posts
- Event calendar for upcoming performances
- Audio player for music samples
- Dark mode toggle
- Multi-language support
- SEO optimization with structured data

## License

This project is created for Sajan Maharjan's portfolio. All rights reserved.

## Support

For questions or issues, please reach out through the contact form on the website.

---

Built with ❤️ using Next.js and Tailwind CSS
