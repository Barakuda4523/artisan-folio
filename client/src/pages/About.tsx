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
            <div className="md:col-span-2 space-y-8 order-2 md:order-1">
              <div className="prose prose-invert prose-lg">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I’m a UE5 Technical Artist focused on performance
                    optimization and tools/pipeline workflows.
                  </p>

                  <div>
                    <p className="font-medium text-foreground">What I do:</p>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>
                        Profiling and bottleneck isolation (Unreal Insights,
                        RenderDoc)
                      </li>
                      <li>
                        Optimization workflows (LODs, texel density,
                        shader/material cost)
                      </li>
                      <li>
                        Tools &amp; pipeline automation (Blueprints/Python
                        utilities)
                      </li>
                    </ul>
                  </div>

                  <p>
                    I build efficient environments, materials, and VFX systems
                    that stay stable, fast, and easy to maintain. I like turning
                    “messy” production problems into clear budgets and workflows
                    that artists can follow without friction.
                  </p>

                  <p>
                    <span className="font-medium text-foreground">
                      Currently building:
                    </span>{" "}
                    measurable UE5 optimization and tooling case studies (FPS,
                    frame time, memory, shader cost). I’ll add selected
                    breakdowns here as they become production-ready.
                  </p>

                  <p>
                    If you have a performance or tooling challenge, I’m happy to
                    talk.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Technical Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Core Engine */}
                  <div>
                    <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                      Core Engine
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Unreal Engine 5</li>
                    </ul>
                  </div>

                  {/* DCC Tools */}
                  <div>
                    <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                      DCC Tools
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Blender</li>
                      <li>Substance Designer</li>
                    </ul>
                  </div>

                  {/* Programming / Tools */}
                  <div>
                    <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                      Programming / Tools
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Blueprints (intermediate)</li>
                    </ul>
                  </div>

                  {/* Performance */}
                  <div>
                    <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                      Performance
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Unreal Insights </li>
                      <li>GPU Profiling </li>
                      <li>LOD Management </li>
                    </ul>
                  </div>

                  {/* Currently Learning */}
                  <div className="sm:col-span-2">
                    <h3 className="font-bold text-primary mb-3 border-b border-primary/20 pb-2 inline-block">
                      Currently Learning
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>RenderDoc</li>
                      <li>Python</li>
                      <li>C++</li>
                      <li>Houdini</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8 order-1 md:order-2">
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
