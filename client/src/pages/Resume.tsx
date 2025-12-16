import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

export function Resume() {
  const hasPdf = Boolean(site.resumeUrl);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Resume
          </h1>

          <p className="text-lg font-medium mb-2">
            Technical Artist — Performance &amp; Tools (Unreal Engine 5)
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Open to freelance and full-time opportunities.
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

          {/* Focus Areas */}
          <section className="mb-14">
            <h2 className="text-2xl font-display font-bold mb-4">
              Focus Areas
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Performance profiling",
                "Optimization workflows",
                "Tooling / pipeline helpers",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground"
                >
                  {label}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Building measurable UE5 case studies (FPS, frame time, memory,
              shader/material cost). Updates will be published under{" "}
              <span className="text-foreground/90 font-medium">Work</span> as
              they become production-ready.
            </p>
          </section>

          {/* Core Skills Snapshot */}
          <section className="mb-14">
            <div className="flex items-end justify-between gap-4 mb-4">
              <h2 className="text-2xl font-display font-bold">
                Core Skills Snapshot
              </h2>

              <a
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Full skills list → About
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display font-bold mb-3">Technical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unreal Engine 5</li>
                  <li>• Blueprints (intermediate)</li>
                  <li>• Unreal Insights</li>
                  <li>• GPU profiling</li>
                  <li>• LOD management</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display font-bold mb-3">
                  Content Workflow
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Blender</li>
                  <li>• Substance Designer</li>
                  <li>• Blender → UE5 environment workflow</li>
                  <li>• Optimization mindset (budgets, iteration)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Up */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-4">Next Up</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
              <li>
                • Environment optimization slice (LOD + texel density + material
                cost)
              </li>
              <li>
                • Blueprint workflow mini-tools (helpers for iteration and
                consistency)
              </li>
              <li>• RenderDoc deep dives (GPU bottlenecks)</li>
              <li>• Learning: Python, C++, Houdini</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </Layout>
  );
}
