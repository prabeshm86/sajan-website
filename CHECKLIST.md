# Content Checklist for Sajan Maharjan Portfolio

## ✅ Completed
- [x] Next.js project setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Responsive navigation bar
- [x] Hero/landing section
- [x] About section with biography
- [x] Media gallery with lightbox
- [x] YouTube video integration
- [x] Publications section
- [x] Contact form
- [x] Footer with social links
- [x] Mobile-responsive design
- [x] Development server running at http://localhost:3000

## 📝 TODO: Add Your Content

### 1. Photos (Priority: High)
- [ ] Add performance photos to `public/images/`
  - Suggested: 6-12 high-quality photos
  - Formats: JPG, PNG, or WebP
  - Minimum size: 1920x1080px
- [ ] Update photo paths in `components/MediaGallery.tsx`

### 2. YouTube Videos (Priority: High)
- [ ] Collect your YouTube video IDs
- [ ] Update video URLs in `components/MediaGallery.tsx`
  - Replace `dQw4w9WgXcQ` with your actual video IDs
  - Update titles and descriptions

### 3. Research Paper (Priority: High)
- [ ] Add "Preservation of Newari Music" PDF to `public/papers/`
- [ ] Verify download link in `components/Publications.tsx`

### 4. Personal Information (Priority: Medium)
- [ ] Review and update biography in `components/About.tsx`
- [ ] Update contact email in `components/Contact.tsx`
- [ ] Add social media links in `components/Footer.tsx`
  - YouTube channel URL
  - LinkedIn profile (if applicable)
  - Other social platforms

### 5. Customization (Priority: Low)
- [ ] Adjust color scheme in `tailwind.config.ts` if desired
- [ ] Add more details about performances in `components/About.tsx`
- [ ] Update metadata in `app/layout.tsx` (SEO)

## 🚀 Deployment Checklist

### Before Deploying
- [ ] Test on mobile devices (responsive design)
- [ ] Test all navigation links
- [ ] Verify all images load correctly
- [ ] Test YouTube video embeds
- [ ] Test PDF download link
- [ ] Test contact form (currently client-side only)

### Deploy Steps
1. [ ] Push code to GitHub
2. [ ] Create Vercel account (free)
3. [ ] Import repository in Vercel
4. [ ] Configure custom domain (optional)
5. [ ] Test live website

## 💡 Optional Enhancements

### Future Features to Consider
- [ ] Add email functionality to contact form
  - Suggested services: EmailJS, Resend, or SendGrid
- [ ] Add more research papers/publications
- [ ] Create a blog section for music articles
- [ ] Add an events/calendar section for upcoming performances
- [ ] Integrate Google Analytics for visitor tracking
- [ ] Add dark mode toggle
- [ ] Create an audio player section for music samples
- [ ] Add testimonials from collaborators
- [ ] Implement multi-language support (Nepali/English)

## 📧 Contact Form Integration

Currently the contact form is client-side only. To make it functional:

### Option 1: EmailJS (Free, Easy)
1. Sign up at https://www.emailjs.com
2. Create email service
3. Add EmailJS SDK to project
4. Update `components/Contact.tsx`

### Option 2: Vercel API Route
1. Create API route in `app/api/contact/route.ts`
2. Use nodemailer or similar
3. Update form to call API

### Option 3: Third-party form service
- Formspree
- Netlify Forms
- Getform

## 📊 Files to Update

| File | What to Change | Priority |
|------|---------------|----------|
| `components/MediaGallery.tsx` | Add photos & YouTube videos | High |
| `components/About.tsx` | Update biography | High |
| `components/Hero.tsx` | Review hero text | Medium |
| `components/Contact.tsx` | Update email/contact info | High |
| `components/Footer.tsx` | Add social media links | Medium |
| `components/Publications.tsx` | Verify paper details | High |
| `app/layout.tsx` | Update SEO metadata | Medium |
| `public/papers/` | Add PDF files | High |
| `public/images/` | Add photos | High |

## 🎨 Design Customization

If you want to change colors, edit `tailwind.config.ts`:

```typescript
primary: {
  // Current: Red tones
  // You can change to any color
  600: '#dc2626', // Main brand color
}
```

---

**Current Status**: Development server is running at http://localhost:3000
**Next Steps**: Add your photos, videos, and PDF paper, then test!
