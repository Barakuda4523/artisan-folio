import { Project } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/project/${project.id}`} className="group block h-full">
        <article className="relative h-full flex flex-col overflow-hidden rounded-sm border border-white/5 bg-card hover:border-primary/50 transition-colors duration-300">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-black/50 backdrop-blur-sm border border-white/10 rounded-sm text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </div>
            
            <div className="mt-auto pt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              View Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
