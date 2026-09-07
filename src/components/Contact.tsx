"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "work.pranil@gmail.com",
    href: "mailto:work.pranil@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 75074 11313",
    href: "tel:+917507411313",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Urun Ishwarpur, Maharashtra, India",
    href: "#",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    short: "GH",
    href: "https://github.com/workpranil",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/pranil-malekar-03553b246/",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const glowX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-25, 25]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      onMouseMove={handleMouseMove}
      className="portfolio-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main Orange Glow */}
        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/[0.055] blur-[140px]"
        />

        {/* Ambient Glow */}
        <div
          className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full blur-[140px]"
          style={{
            background: "var(--ambient)",
          }}
        />

        <div className="absolute -right-48 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/[0.025] blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, var(--vignette) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500/70" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.45em]"
              style={{ color: "var(--muted)" }}
            >
              Get In Touch
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,90,31,0.9)]" />
          </div>

          <h2
            className="max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-[7rem]"
            style={{ color: "var(--foreground)" }}
          >
            LET&apos;S BUILD
            <br />

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--foreground), var(--muted-dark), var(--line-strong))",
              }}
            >
              SOMETHING GREAT.
            </span>
          </h2>

          <p
            className="mt-8 max-w-2xl text-sm leading-8 sm:text-base"
            style={{ color: "var(--muted)" }}
          >
            Have a project, opportunity, or idea in mind?
            Let&apos;s turn it into something useful, functional
            and visually engaging.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT — CONTACT DETAILS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl sm:p-9"
            style={{
              borderColor: "var(--line)",
              background: "var(--glass)",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-orange-500/[0.06] blur-[80px]" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.35em]"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    Contact Details
                  </p>

                  <h3
                    className="mt-3 text-2xl font-black tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    Let&apos;s talk.
                  </h3>
                </div>

                <Sparkles
                  size={19}
                  className="text-orange-500/60"
                />
              </div>

              {/* Contact Items */}
              <div className="mt-10 space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ x: 5 }}
                      className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.025]"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--overlay)",
                      }}
                    >
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:border-orange-500/20 group-hover:bg-orange-500/[0.06]"
                        style={{
                          borderColor: "var(--line)",
                          background: "var(--glass)",
                        }}
                      >
                        <Icon
                          size={17}
                          className="transition-colors duration-300 group-hover:text-orange-500"
                          style={{
                            color: "var(--muted)",
                          }}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.25em]"
                          style={{
                            color: "var(--muted-dark)",
                          }}
                        >
                          {item.label}
                        </p>

                        <p
                          className="mt-1 truncate text-sm font-medium transition-colors group-hover:text-orange-500"
                          style={{
                            color: "var(--muted-strong)",
                          }}
                        >
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="ml-auto transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                        style={{
                          color: "var(--muted-dark)",
                        }}
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Social */}
              <div
                className="mt-9 border-t pt-7"
                style={{
                  borderColor: "var(--line)",
                }}
              >
                <p
                  className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--muted-dark)",
                  }}
                >
                  Find me online
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 items-center gap-2 rounded-xl border px-4 text-xs font-bold transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.04] hover:text-orange-500"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--glass)",
                        color: "var(--muted)",
                      }}
                    >
                      <span>{social.short}</span>

                      <span className="font-medium">
                        {social.label}
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                className="mt-8 rounded-2xl border p-5"
                style={{
                  borderColor: "rgba(255,90,31,0.12)",
                  background: "rgba(255,90,31,0.025)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>

                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.25em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    Open to opportunities
                  </p>
                </div>

                <p
                  className="mt-3 text-xs leading-6"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Always interested in learning, building and
                  working on meaningful web projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <form
              action="mailto:work.pranil@gmail.com"
              method="post"
              encType="text/plain"
              className="relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl sm:p-9"
              style={{
                borderColor: "var(--line)",
                background: "var(--glass)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Form Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-500/[0.04] blur-[100px]" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.35em]"
                      style={{
                        color: "var(--muted-dark)",
                      }}
                    >
                      Start a conversation
                    </p>

                    <p
                      className="mt-3 text-xl font-bold"
                      style={{
                        color: "var(--foreground)",
                      }}
                    >
                      Tell me what you&apos;re building.
                    </p>
                  </div>

                  <span
                    className="font-mono text-[9px] tracking-[0.3em]"
                    style={{
                      color: "var(--muted-dark)",
                    }}
                  >
                    01 / 01
                  </span>
                </div>

                {/* Name + Email */}
                <div className="mt-9 grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--muted-dark)",
                      }}
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[var(--muted-dark)] focus:border-orange-500/40 focus:bg-orange-500/[0.02] focus:shadow-[0_0_25px_rgba(255,90,31,0.05)]"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--input)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--muted-dark)",
                      }}
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[var(--muted-dark)] focus:border-orange-500/40 focus:bg-orange-500/[0.02] focus:shadow-[0_0_25px_rgba(255,90,31,0.05)]"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--input)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--muted-dark)",
                    }}
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[var(--muted-dark)] focus:border-orange-500/40 focus:bg-orange-500/[0.02] focus:shadow-[0_0_25px_rgba(255,90,31,0.05)]"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--input)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--muted-dark)",
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[var(--muted-dark)] focus:border-orange-500/40 focus:bg-orange-500/[0.02] focus:shadow-[0_0_25px_rgba(255,90,31,0.05)]"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--input)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_45px_rgba(255,90,31,0.2)]"
                >
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  Send Message

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.button>

                <p
                  className="mt-4 text-center text-[10px]"
                  style={{
                    color: "var(--muted-dark)",
                  }}
                >
                  Your message will open your default email application.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            BIG CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border p-8 sm:p-12 lg:p-16"
          style={{
            borderColor: "rgba(255,90,31,0.12)",
            background: "rgba(255,90,31,0.025)",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[100px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-orange-500/70">
                Have an idea?
              </p>

              <h3
                className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Let&apos;s turn your idea into something real.
              </h3>
            </div>

            <a
              href="mailto:work.pranil@gmail.com"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ff5a1f] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff6a3d] hover:shadow-[0_0_45px_rgba(255,90,31,0.3)]"
            >
              Email Me

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-5 border-t pt-8 text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--line)",
            color: "var(--muted-dark)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Pranil Malekar
          </p>

          <div className="flex items-center gap-3">
            <span>Built with</span>

            <span style={{ color: "var(--muted)" }}>
              Next.js
            </span>

            <span>&</span>

            <span style={{ color: "var(--muted)" }}>
              Three.js
            </span>
          </div>

          <p>
            Keep building.
          </p>
        </motion.footer>

      </div>
    </section>
  );
}

