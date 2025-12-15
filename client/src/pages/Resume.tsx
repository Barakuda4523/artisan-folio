import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

export function Resume() {
  const hasPdf = Boolean(site.resumeUrl);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Resume
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Placeholder page. Later I’ll replace this with a polished PDF and
            updated experience/projects.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {hasPdf ? (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Download PDF
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center rounded-md bg-primary/40 px-5 py-3 text-primary-foreground/70 font-medium cursor-not-allowed"
              >
                PDF coming soon
              </button>
            )}

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 font-medium hover:bg-white/5 transition"
            >
              Contact
            </a>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-display font-bold mb-3">Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unreal Engine 5 Technical Artist focused on performance
                optimization and tools/pipeline workflows. (Replace later.)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-3">
                Core Skills
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                <li>• Profiling & optimization (FPS / frame time / memory)</li>
                <li>• UE5 rendering & shaders (HLSL basics)</li>
                <li>• Tools & pipeline (Python / Blueprints)</li>
                <li>• Blender → UE5 environment workflow</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-3">
                Experience / Projects
              </h2>
              <div className="rounded-xl border border-white/10 p-5 text-muted-foreground">
                Add your case studies here later (title → bullets → measurable
                results).
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-3">
                Education
              </h2>
              <div className="rounded-xl border border-white/10 p-5 text-muted-foreground">
                Add courses/certificates here later.
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
