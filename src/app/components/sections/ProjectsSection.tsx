import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";

type Github = {
  front: string;
  api?: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: Github;
  demo: string;
};

const PROJECTS: Project[] = [
  {
    title: "shift-app",
    description: "シフト管理アプリ",
    tech: ["Next.js", "TypeScript", "Go", "Prisma", "MySQL"],
    github: {
      front: "https://github.com/yoshidaso/shift-app-front",
      api: "https://github.com/yoshidaso/shift-app-api",
    },
    demo: "https://shift-app-front.vercel.app/",
  },
  {
    title: "Workout App",
    description: "筋トレ記録アプリ",
    tech: ["Next.js", "TypeScript", "Go", "Prisma", "MySQL"],
    github: {
      front: "https://github.com/yoshidaso/workout-app-front",
    },
    demo: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Featured Projects
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mx-auto">
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
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
                <div className="flex gap-4 justify-center">
                  {Object.entries(project.github).map(([key, value]) => (
                    <Link
                      key={key}
                      href={value}
                      target="_blank"
                      className="flex items-center gap-2 border px-4 rounded-md"
                    >
                      <FaGithub size={16} />
                      {key === "front" ? "Front" : "API"}
                    </Link>
                  ))}
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 border px-4 rounded-md"
                  >
                    <FaExternalLinkAlt size={16} />
                    Link
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
