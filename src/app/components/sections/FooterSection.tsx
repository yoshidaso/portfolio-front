import { FaGithub } from "react-icons/fa";
import { Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 bg-accent/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/yoshidaso"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <FaGithub size={24} />
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
  );
}
