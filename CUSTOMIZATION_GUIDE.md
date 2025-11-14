# Common Customization Examples

This guide shows you exactly how to add your content with copy-paste examples.

## 1. Adding Your Profile Picture

### Step 1: Add your photo to `public/images/`
Place your portrait/profile picture as:
- `public/images/profile.jpg` (recommended name)

**Requirements**:
- Square format (800x800px or larger)
- Professional photo showing you clearly
- JPG, PNG, or WebP format

### Step 2: Verify in `components/About.tsx`
The image path is set on line ~23:
```typescript
<Image
  src="/images/profile.jpg"  // ← Must match your filename
  alt="Sajan Maharjan - Musician and Researcher"
  width={400}
  height={400}
  className="w-full h-full object-cover"
  priority
/>
```

If you use a different filename, update the `src` path.

## 2. Adding Your Performance Photos to the Gallery

### Step 1: Add photos to `public/images/`
Place your photos like:
- `public/images/performance1.jpg`
- `public/images/concert2024.jpg`
- `public/images/festival.jpg`

### Step 2: Update `components/MediaGallery.tsx`

Find this section (around line 20):
```typescript
const mediaItems: MediaItem[] = [
```

Replace the sample items with your photos:

```typescript
const mediaItems: MediaItem[] = [
  // Your actual photos
  {
    id: 1,
    type: "image",
    src: "/images/performance1.jpg",
    title: "Solo Performance at Cultural Center",
    description: "Traditional Newari music performance, 2024",
  },
  {
    id: 2,
    type: "image",
    src: "/images/concert2024.jpg",
    title: "Annual Music Festival",
    description: "Performing at Kathmandu Music Festival",
  },
  {
    id: 3,
    type: "image",
    src: "/images/festival.jpg",
    title: "Community Festival",
    description: "Traditional instrument showcase",
  },
  // Add more photos...
];
```

## 3. Adding Your YouTube Videos

### Get Your Video IDs
From a YouTube URL like: `https://www.youtube.com/watch?v=ABC123xyz`
The video ID is: `ABC123xyz`

### Update `components/MediaGallery.tsx`

Add YouTube videos to the `mediaItems` array:

```typescript
{
  id: 4,
  type: "youtube",
  src: "https://www.youtube.com/embed/ABC123xyz",
  thumbnail: "https://img.youtube.com/vi/ABC123xyz/maxresdefault.jpg",
  title: "Live Performance at XYZ Hall",
  description: "Full concert recording from 2024",
},
{
  id: 5,
  type: "youtube",
  src: "https://www.youtube.com/embed/DEF456uvw",
  thumbnail: "https://img.youtube.com/vi/DEF456uvw/maxresdefault.jpg",
  title: "Traditional Song Collection",
  description: "Compilation of traditional Newari songs",
},
```

## 4. Updating Your Biography

### Edit `components/About.tsx`

Find the paragraph sections (around line 18-36) and update with your info:

```typescript
<p className="text-lg text-gray-700 leading-relaxed">
  Hello! I'm Sajan Maharjan, a passionate musician and researcher
  dedicated to preserving and promoting the beautiful traditions of
  Newari music. [YOUR CUSTOM TEXT HERE]
</p>
<p className="text-lg text-gray-700 leading-relaxed">
  [YOUR BACKGROUND STORY]
</p>
<p className="text-lg text-gray-700 leading-relaxed">
  [YOUR MISSION OR GOALS]
</p>
```

## 5. Updating Contact Information

### Edit `components/Contact.tsx`

Find the email section (around line 80):

```typescript
<a
  href="mailto:your.actual.email@example.com"  // ← Change this
  className="text-gray-600 hover:text-primary-600 transition-colors"
>
  your.actual.email@example.com  // ← Change this
</a>
```

Update the location (around line 90):
```typescript
<p className="text-gray-600">Kathmandu, Nepal</p>  // ← Change if needed
```

## 6. Adding Social Media Links

### Edit `components/Footer.tsx`

Find the social links section (around line 59):

```typescript
<a
  href="https://youtube.com/@YourChannel"  // ← Add your channel
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-primary-400 transition-colors"
  aria-label="YouTube"
>
  <FiYoutube size={20} />
</a>
<a
  href="https://linkedin.com/in/yourprofile"  // ← Add your profile
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-primary-400 transition-colors"
  aria-label="LinkedIn"
>
  <FiLinkedin size={20} />
</a>
```

## 7. Adding Your Research Paper

### Step 1: Add PDF to `public/papers/`
Place your file as:
`public/papers/preservation-of-newari-music.pdf`

### Step 2: Verify link in `components/Publications.tsx`

The download link is already set (around line 49):
```typescript
<a
  href="/papers/preservation-of-newari-music.pdf"
  download
  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
>
  <FiDownload className="mr-2" />
  Download PDF
</a>
```

## 8. Changing Colors

### Edit `tailwind.config.ts`

To change the primary color (currently red):

```typescript
primary: {
  50: '#fef2f2',
  // ... keep other values or change them
  600: '#dc2626',  // ← Main color used throughout site
  // ... rest of values
}
```

Popular alternatives:
- Blue: `#2563eb`
- Purple: `#9333ea`
- Green: `#16a34a`
- Teal: `#0d9488`

## 9. Updating Hero Section Text

### Edit `components/Hero.tsx`

Main heading (line 23):
```typescript
<h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
  Sajan Maharjan
</h1>
```

Subtitle (line 27):
```typescript
<p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
  Musician & Cultural Researcher
</p>
```

Description (line 32):
```typescript
<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
  Dedicated to preserving and celebrating the rich heritage of Newari
  music through performance, research, and education.
</p>
```

## 10. Adding More Publications

### Edit `components/Publications.tsx`

After the main publication card, add new ones:

```typescript
{/* Add a second publication */}
<div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <FiFileText className="w-12 h-12 text-primary-600" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Your Second Paper Title
      </h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Description of your second publication...
      </p>
      <a
        href="/papers/second-paper.pdf"
        download
        className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
      >
        <FiDownload className="mr-2" />
        Download PDF
      </a>
    </div>
  </div>
</div>
```

## 11. Updating SEO Metadata

### Edit `app/layout.tsx`

Find the metadata export (around line 15):

```typescript
export const metadata: Metadata = {
  title: "Sajan Maharjan - Musician & Researcher",
  description: "Portfolio of Sajan Maharjan - Musician, performer, and researcher specializing in Newari music preservation.",
  keywords: "Sajan Maharjan, musician, Newari music, music preservation, performer, Nepal, traditional music",
  // Add more fields:
  authors: [{ name: "Sajan Maharjan" }],
  openGraph: {
    title: "Sajan Maharjan - Musician & Researcher",
    description: "Preserving and celebrating Newari musical traditions",
    type: "website",
  },
};
```

## Quick Reference: File Locations

| What to Change | File to Edit |
|---------------|-------------|
| Profile Picture | Add to `public/images/profile.jpg` |
| Photos/Videos | `components/MediaGallery.tsx` |
| Biography | `components/About.tsx` |
| Hero text | `components/Hero.tsx` |
| Contact info | `components/Contact.tsx` |
| Social links | `components/Footer.tsx` |
| Publications | `components/Publications.tsx` |
| Colors | `tailwind.config.ts` |
| SEO/Meta | `app/layout.tsx` |

## Need Help?

1. Make sure you're in the correct directory: `/Users/pmanandhar/sajan-portfolio/sajan-website`
2. Save all changes before refreshing the browser
3. The dev server auto-reloads when you save files
4. Check browser console (F12) for any errors

---

**Tip**: Make one change at a time and check the result in your browser!
