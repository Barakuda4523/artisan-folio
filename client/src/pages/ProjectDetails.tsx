import { Layout } from "@/components/layout/Layout";
import { projects } from "@/lib/data";
import { Link, useRoute } from "wouter";
import { ArrowLeft, CheckCircle2, Clock, Code, FileText, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="min-h-screen pb-20">
        {/* Header Image */}
        <div className="relative h-[50vh] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 max-w-4xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" /> Goal & Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.goal}
                </p>
              </div>
            </section>

            {project.techHighlights && (
              <section>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" /> Technical Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.techHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-4 border border-white/5 bg-white/[0.02] rounded-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.performanceNotes && (
              <section className="p-6 border border-primary/20 bg-primary/5 rounded-sm">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2 text-primary">
                  <Clock className="w-6 h-6" /> Performance Impact
                </h2>
                <p className="text-lg font-mono text-primary/80">
                  {project.performanceNotes}
                </p>
              </section>
            )}

            {project.lessonsLearned && (
              <section>
                <h2 className="text-2xl font-display font-bold mb-4">Lessons Learned</h2>
                <p className="text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
                  "{project.lessonsLearned}"
                </p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm space-y-6 sticky top-24">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Role</h3>
                <p className="text-lg font-medium">{project.role}</p>
              </div>
              
              <div className="w-full h-px bg-white/5" />
              
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Category</h3>
                <p className="text-lg font-medium">{project.category}</p>
              </div>

              <div className="w-full h-px bg-white/5" />

              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Pipeline / Tools</h3>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <p className="font-medium">{project.pipeline}</p>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full" size="lg">
                  View Source / Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
