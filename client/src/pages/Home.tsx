import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Layers, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_wireframe_node_graph_background.png";

export function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8">
              Technical Artist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                & Toolsmith
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Bridging the gap between art and code. Specializing in Unreal Engine 5 performance optimization, 
              pipeline automation, and shader development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-sm hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats / Pills Section */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-sm text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Performance First</h3>
                <p className="text-sm text-muted-foreground">Optimization is not an afterthought.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-sm text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Scalable Pipelines</h3>
                <p className="text-sm text-muted-foreground">Tools that save artists hours.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-sm text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Technical Depth</h3>
                <p className="text-sm text-muted-foreground">From Python to HLSL.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground max-w-md">
              A collection of optimization case studies, tools, and technical breakdowns.
            </p>
          </div>
          <div className="flex gap-2">
            {/* Filter buttons could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
