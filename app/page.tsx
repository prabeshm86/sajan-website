import Hero from "@/components/Hero";
import About from "@/components/About";
import MediaGallery from "@/components/MediaGallery";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MediaGallery />
      <Publications />
      <Contact />
    </>
  );
}
