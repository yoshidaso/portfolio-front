"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { HeroGeometric } from "@/app/components/ui/shape-landing-hero";
import Image from "next/image";
import { getPosts, PostData, useOgp } from "./hooks/useQiita";
import Link from "next/link";
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

export default function Home() {
  const { postData, isLoading, error } = getPosts();
  const { allOgpData, isLoading: ogpLoading, error: ogpError } = useOgp();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroGeometric
        badge="FluenceCode"
        title1="Full Stack"
        title2="Developer"
      />

      {/* About Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
                alt="Profile"
                width={500}
                height={300}
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
              <p className="text-lg mb-6">
                I&apos;m a passionate full-stack developer with over 5 years of
                experience in building modern web applications. I specialize in
                React, Node.js, and cloud technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "TypeScript",
                  "Golang",
                  "React",
                  "Next.js",
                  "Tailwind",
                  "MySQL",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/10"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-primary/10"
              >
                <CardHeader>
                  <CardTitle className="text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/10 text-accent px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            Latest Posts
          </h2>
          {isLoading || ogpLoading ? (
            <div className="text-center py-8">Loading posts...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              Error loading posts
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {(postData || []).map((post: PostData, index: number) => (
                <Link href={post.url} key={index} target="_blank">
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-shadow duration-300 border-primary/10 h-full flex flex-col"
                  >
                    <div className="w-full h-48 relative overflow-hidden bg-gray-100 rounded-t-lg">
                      {allOgpData[index]?.image ? (
                        <Image
                          src={allOgpData[index].image}
                          alt={post.title}
                          width={800}
                          height={400}
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <CardTitle className="text-xl text-primary">
                            {post.title}
                          </CardTitle>
                        </div>
                      )}
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="text-sm text-muted-foreground">
                        {post.created_at.split("T")[0]}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center">
            <Link href="https://qiita.com/FluenceCode" target="_blank">
              <Button>View All Posts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            Get in Touch
          </h2>
          <Card className="border-primary/10">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md h-32 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    required
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} FluenceCode. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
