import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  // Web3Forms Access Key (a képed alapján)
  const WEB3FORMS_ACCESS_KEY = "c48939dc-3832-4630-b8e3-7708c5e92036";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // honeypot (ha ezt kitölti egy bot, eldobjuk)
  const [botcheck, setBotcheck] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    msg: string;
  }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // Botcheck -> ha nem üres, ne küldjük el
    if (botcheck.trim().length > 0) {
      setStatus({ type: "error", msg: "Spam detected." });
      return;
    }

    // minimális validáció
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        msg: "Please fill in Name, Email, and Message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject || "Portfolio Contact");
      formData.append("message", message);

      // jó ha reply-to is megy
      formData.append("replyto", email);

      // honeypot mező (Web3Forms ismeri)
      formData.append("botcheck", botcheck);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data?.success) {
        setStatus({ type: "success", msg: "Message sent successfully! ✅" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setBotcheck("");
      } else {
        // Web3Forms ad vissza error message-et is
        setStatus({
          type: "error",
          msg: data?.message
            ? `Error: ${data.message}`
            : "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Interested in collaboration or have a technical question? I'm always
            open to discussing new projects, optimization challenges, or tool
            development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="bg-white/5 border-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      type="email"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry"
                    className="bg-white/5 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="min-h-[200px] bg-white/5 border-white/10"
                  />
                </div>

                {/* Honeypot - rejtett mező */}
                <div className="hidden">
                  <label>Do not fill this field</label>
                  <input
                    value={botcheck}
                    onChange={(e) => setBotcheck(e.target.value)}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {status && (
                  <p
                    className={
                      status.type === "success"
                        ? "text-sm text-green-400"
                        : "text-sm text-red-400"
                    }
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8 md:pl-12 md:border-l border-white/5">
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Mail className="w-5 h-5" />
                    <a
                      href="mailto:jancsocsaba9@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      jancsocsaba9@gmail.com
                    </a>
                  </li>

                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    Budapest, Hungary · San Francisco, CA, USA
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Socials</h3>

                <div className="flex gap-4">
                  {/* LinkedIn (JAVÍTVA - ékezetes URL) */}
                  <a
                    href="https://www.linkedin.com/in/csaba-jancs%C3%B3-65856339b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 flex items-center justify-center rounded-sm border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Barakuda4523"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-12 h-12 flex items-center justify-center rounded-sm border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.73.5.75 5.68.75 12.1c0 5.14 3.44 9.5 8.21 11.04.6.11.82-.27.82-.59v-2.1c-3.34.75-4.04-1.66-4.04-1.66-.55-1.45-1.34-1.83-1.34-1.83-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.07 1.88 2.8 1.34 3.49 1.03.11-.8.42-1.34.76-1.65-2.66-.31-5.46-1.37-5.46-6.08 0-1.34.46-2.44 1.22-3.3-.12-.31-.53-1.55.12-3.23 0 0 1-.33 3.3 1.26a10.9 10.9 0 0 1 3-.42c1.02 0 2.05.14 3 .42 2.3-1.59 3.3-1.26 3.3-1.26.65 1.68.24 2.92.12 3.23.76.86 1.22 1.96 1.22 3.3 0 4.72-2.8 5.77-5.47 6.08.43.38.82 1.13.82 2.28v3.38c0 .33.22.71.83.59 4.77-1.54 8.2-5.9 8.2-11.04C23.25 5.68 18.27.5 12 .5z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/CsabaJancso"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-12 h-12 flex items-center justify-center rounded-sm border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.7l-5.2-6.7L5.6 22H2.4l7.4-8.5L0.8 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.7L6.9 3.9H5.1L17.7 20z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
