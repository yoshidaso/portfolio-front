"use client";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import BlogSection from "@/app/components/sections/BlogSection";
import ContactSection from "@/app/components/sections/ContactSection";
import FooterSection from "@/app/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
