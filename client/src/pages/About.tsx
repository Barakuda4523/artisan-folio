import { Layout } from "@/components/layout/Layout";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-12">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-invert prose-lg">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  I'm a Technical Artist obsessed with the intersection of aesthetics and performance. 
                  Currently working with Unreal Engine 5, I specialize in building efficient pipelines, 
                  optimizing render time, and creating tools that empower artists to do their best work without fighting the engine.
                </p>
                <p className="text-muted-foreground">
                  My background spans both traditional 3D art and programming, allowing me to speak both languages fluently. 
                  I believe that good tech art is invisible—it's the frame rate you don't notice dropping, the tool that just works, 
                  and the workflow that feels intuitive.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-display font-bold mb-6">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="aspect-square rounded-sm overflow-hidden bg-muted border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
                  <h3 className="font-display font-bold mb-2">Current Status</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open to freelance and full-time opportunities for late 2025.
                  </p>
                  <a 
                    href="/contact" 
                    className="block w-full py-3 text-center bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
