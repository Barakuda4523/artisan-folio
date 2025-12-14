import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-display font-bold">Csaba Jancsó</span>
          <a
            href="mailto:jancsocsaba9@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            jancsocsaba9@gmail.com
          </a>

          <p className="text-sm text-muted-foreground">
            Technical Artist • Performance • Tools
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:jancsocsaba9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Csaba Jancsó. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
