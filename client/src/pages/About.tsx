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
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-12">
            About
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-invert prose-lg">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  I’m an Unreal Engine 5 Technical Artist focused on performance
                  optimization and tools/pipeline workflows. I primarily work in
                  UE5 and Blender, building efficient environments, materials,
                  VFX, and small tools that keep projects stable, fast, and easy
                  to maintain.
                </p>

                <p className="text-muted-foreground">
                  Right now I’m building a portfolio of practical UE5
                  optimization and tooling case studies with measurable results
                  (FPS, frame time, memory, shader cost). I enjoy profiling,
                  fixing bottlenecks, and setting clear workflows (naming,
                  scale, pivots, budgets) so production stays predictable.
                </p>

                <p className="text-muted-foreground">
                  My background spans both traditional 3D art and programming,
                  allowing me to speak both languages fluently. I believe that
                  good tech art is invisible—it’s the frame rate you don’t
                  notice dropping, the tool that just works, and the workflow
                  that feels intuitive.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Technical Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {skillGroup.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="/portrait.png"
                  alt="Portrait"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold mb-2">Current Status</h3>
                <p className="text-muted-foreground mb-4">
                  Open to freelance and full-time opportunities.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
