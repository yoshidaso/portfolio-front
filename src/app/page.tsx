"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered platform for generating marketing content",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial data visualization platform",
      tech: ["Next.js", "D3.js", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#",
    },
  ];

  const posts = [
    {
      title: "Building Scalable Systems with Go",
      date: "2024-03-20",
      category: "Backend Development",
      excerpt:
        "Learn how to build highly scalable systems using Go and modern architecture patterns.",
    },
    {
      title: "React Performance Optimization",
      date: "2024-03-15",
      category: "Frontend Development",
      excerpt:
        "Deep dive into React performance optimization techniques and best practices.",
    },
    {
      title: "The Future of Web Development",
      date: "2024-03-10",
      category: "Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Building exceptional digital experiences with cutting-edge
            technologies
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Button size="lg">View Portfolio</Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6">
                Im a passionate full-stack developer with over 5 years of
                experience in building modern web applications. I specialize in
                React, Node.js, and cloud technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-background p-3 rounded-lg text-center shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm">Live Demo</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Posts</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.category} • {post.date}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">View All Posts</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md h-32"
                    required
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-primary">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
