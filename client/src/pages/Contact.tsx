import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Copy, ExternalLink } from "lucide-react";

export function Contact() {
  // === CONFIG ===
  const EMAIL_ADDRESS = "jancsocsaba9@gmail.com";
  const DEFAULT_SUBJECT = "Portfolio Contact";

  // Formspree endpoint (a te linked)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbnvdkr";

  // === STATE ===
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

  // Copy feedback
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const mailtoHref = useMemo(() => {
    const sub = encodeURIComponent(DEFAULT_SUBJECT);
    return `mailto:${EMAIL_ADDRESS}?subject=${sub}`;
  }, []);

  const gmailComposeHref = useMemo(() => {
    const to = encodeURIComponent(EMAIL_ADDRESS);
    const su = encodeURIComponent(DEFAULT_SUBJECT);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`;
  }, []);

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
    } catch {
      setStatus({
        type: "error",
        msg: "Couldn't copy email. Please copy it manually.",
      });
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (isSubmitting) return;

    // Botcheck -> ha nem üres, ne küldjük el
    if (botcheck.trim().length > 0) {
      setStatus({ type: "error", msg: "Spam detected." });
      return;
    }

    const n = name.trim();
    const em = email.trim();
    const sub = (subject.trim() || DEFAULT_SUBJECT).trim();
    const msg = message.trim();

    // minimális validáció
    if (!n || !em || !msg) {
      setStatus({
        type: "error",
        msg: "Please fill in Name, Email, and Message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      // Ezeket a mezőket a Formspree szépen emailben továbbítja
      formData.append("name", n);
      formData.append("email", em);
      formData.append("subject", sub);
      formData.append("message", msg);

      // reply-to (hogy tudj válaszolni)
      formData.append("_replyto", em);

      // opcionális tárgy prefix a bejövő emailekhez
      formData.append("_subject", `Portfolio: ${sub}`);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent successfully! ✅" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setBotcheck("");
      } else {
        const msgText =
          data?.errors?.[0]?.message ||
          data?.message ||
          "Something went wrong. Please try again.";
        setStatus({ type: "error", msg: `Error: ${msgText}` });
      }
    } catch {
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
                    <label
                      className="text-sm font-medium"
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="bg-white/5 border-white/10"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      type="email"
                      className="bg-white/5 border-white/10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    autoComplete="off"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry"
                    className="bg-white/5 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="min-h-[200px] bg-white/5 border-white/10"
                    required
                  />
                </div>

                {/* Honeypot - rejtett mező */}
                <div className="hidden">
                  <label htmlFor="botcheck">Do not fill this field</label>
                  <input
                    id="botcheck"
                    name="botcheck"
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
                    aria-live="polite"
                    role="status"
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
                  {/* EMAIL: teljes sor kattintható + extra opciók */}
                  <li className="space-y-2">
                    <a
                      href={mailtoHref}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Send me an email"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="underline-offset-4 hover:underline">
                        {EMAIL_ADDRESS}
                      </span>
                    </a>

                    <div className="flex flex-wrap gap-3 pl-8">
                      <button
                        type="button"
                        onClick={onCopyEmail}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        {copied ? "Copied!" : "Copy email"}
                      </button>

                      <a
                        href={gmailComposeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open in Gmail
                      </a>
                    </div>
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
                  {/* LinkedIn */}
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
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/barakuda4523/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 flex items-center justify-center rounded-sm border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
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
