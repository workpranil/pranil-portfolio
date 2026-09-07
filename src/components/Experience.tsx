"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const experience = {
  company: "Zapcodex",
  location: "Ishwarpur, Maharashtra",
  role: "Web Developer Intern",
  type: "Internship",
  period: "08/2026 — 09/2026",

  description:
    "Gained hands-on experience in PHP, Laravel, MySQL, Bootstrap, Git and GitHub through practical web development work. Worked with Laravel MVC architecture, database-driven applications and responsive user interfaces.",

  technologies: [
    "PHP",
    "Laravel",
    "MySQL",
    "HTML",
    "JavaScript",
    "Bootstrap 5",
    "AdminLTE",
    "Git & GitHub",
  ],

  responsibilities: [
    "Worked with Laravel MVC architecture, including routes, controllers, models and database integration.",
    "Worked with MySQL for database design, data management and application development.",
    "Developed responsive and user-friendly interfaces using HTML, JavaScript and Bootstrap 5.",
    "Contributed to the development of an HR Payroll Management System using Laravel, PHP, MySQL, Bootstrap 5, JavaScript and AdminLTE.",
    "Worked on employee management, departments, designations, attendance, leaves, payroll, announcements and company management modules.",
    "Implemented and practiced authentication, role-based access, database relationships, form validation and HR workflows using Laravel MVC.",
    "Worked on a responsive Admin Dashboard using AdminLTE and Bootstrap 5.",
  ],
};

const highlights = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    text: "Developed responsive and user-friendly web interfaces using HTML, JavaScript and Bootstrap 5.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Laravel & MVC",
    text: "Worked with routes, controllers, models, database integration and Laravel MVC architecture.",
  },
  {
    icon: Database,
    number: "03",
    title: "MySQL",
    text: "Worked with database design, data management and database-driven application features.",
  },
];

const workflow = [
  {
    icon: ShieldCheck,
    label: "Authentication",
  },
  {
    icon: Layers3,
    label: "Role-Based Access",
  },
  {
    icon: Database,
    label: "Database Relations",
  },
  {
    icon: Code2,
    label: "CRUD & Validation",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  });

  const progressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const cardY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [50, 0, -30]
  );

  const glowY = useTransform(
    smoothProgress,
    [0, 1],
    ["15%", "85%"]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="portfolio-section relative overflow-hidden px-6 py-28 transition-colors duration-500 sm:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-48
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ff5a1f]/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[var(--foreground)]/[0.025]
            blur-[150px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ff5a1f]/70" />

            <p className="technical-text">
              Experience
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_12px_rgba(255,90,31,0.8)]" />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2
              className="
                max-w-5xl
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-[var(--foreground)]
                sm:text-5xl
                lg:text-7xl
              "
            >
              Learning by
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[var(--foreground)]
                  via-[var(--muted-dark)]
                  to-[var(--muted)]
                  bg-clip-text
                  text-transparent
                "
              >
                building real things.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[var(--muted-dark)] sm:text-base">
              My development journey combines academic knowledge with
              hands-on experience working on practical web applications.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          <div className="absolute left-3 top-0 hidden h-full w-px bg-[var(--line)] lg:block">
            <motion.div
              style={{ height: progressHeight }}
              className="
                absolute
                left-0
                top-0
                w-px
                bg-gradient-to-b
                from-[#ff5a1f]
                via-[#ff5a1f]/70
                to-transparent
                shadow-[0_0_15px_rgba(255,90,31,0.7)]
              "
            />

            <motion.div
              style={{ top: glowY }}
              className="
                absolute
                -left-[3px]
                h-2
                w-2
                rounded-full
                bg-[#ff5a1f]
                shadow-[0_0_18px_rgba(255,90,31,1)]
              "
            />
          </div>

          <div className="mb-8 hidden items-center gap-4 lg:flex">
            <div
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#ff5a1f]/40
                bg-[var(--background)]
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_10px_rgba(255,90,31,0.9)]" />
            </div>

            <span className="font-mono text-[10px] tracking-[0.35em] text-[var(--muted)]">
              01 — PROFESSIONAL EXPERIENCE
            </span>
          </div>

          {/* Main Card */}

          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:ml-16"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--line)]
                bg-[var(--glass)]
                shadow-[var(--shadow)]
                backdrop-blur-xl
                transition-all
                duration-700
                hover:border-[#ff5a1f]/25
              "
            >
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a1f]/60 to-transparent opacity-80" />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  rounded-full
                  bg-[#ff5a1f]/[0.035]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:bg-[#ff5a1f]/[0.075]
                "
              />

              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* Left */}

                <div
                  className="
                    relative
                    border-b
                    border-[var(--line)]
                    p-7
                    sm:p-10
                    lg:border-b-0
                    lg:border-r
                    lg:p-12
                  "
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--muted)]">
                      01 / EXPERIENCE
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#ff5a1f]/20
                        bg-[#ff5a1f]/[0.06]
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#ff5a1f]
                      "
                    >
                      {experience.type}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="
                      relative
                      mt-12
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-[1.3rem]
                      border
                      border-[var(--line)]
                      bg-[var(--glass)]
                    "
                  >
                    <BriefcaseBusiness
                      size={27}
                      strokeWidth={1.5}
                      className="text-[var(--muted-strong)]"
                    />

                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#ff5a1f] shadow-[0_0_14px_rgba(255,90,31,0.9)]" />
                  </motion.div>

                  <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--muted-dark)]">
                    {experience.period}
                  </p>

                  <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                    {experience.role}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-lg font-semibold text-[var(--muted-strong)]">
                      {experience.company}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[#ff5a1f] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-2 text-sm text-[var(--muted-dark)]">
                    {experience.location}
                  </p>

                  <div className="mt-8 h-px bg-[var(--line)]" />

                  <p className="mt-8 text-sm leading-8 text-[var(--muted-dark)] sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-9">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--muted-dark)]">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="
                            rounded-full
                            border
                            border-[var(--line)]
                            bg-[var(--glass)]
                            px-3
                            py-1.5
                            text-xs
                            text-[var(--muted-dark)]
                            transition-all
                            duration-300
                            hover:border-[#ff5a1f]/30
                            hover:bg-[#ff5a1f]/[0.06]
                            hover:text-[#ff5a1f]
                          "
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div className="relative p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--muted-dark)]">
                      What I worked on
                    </p>

                    <Sparkles
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#ff5a1f]/50"
                    />
                  </div>

                  <div className="mt-10 space-y-6">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <motion.div
                          key={responsibility}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{
                            once: true,
                            amount: 0.2,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="group/item flex gap-4"
                        >
                          <div
                            className="
                              relative
                              mt-0.5
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-[var(--line)]
                              bg-[var(--glass)]
                              transition-all
                              duration-300
                              group-hover/item:border-[#ff5a1f]/30
                              group-hover/item:bg-[#ff5a1f]/[0.06]
                            "
                          >
                            <CheckCircle2
                              size={16}
                              strokeWidth={1.5}
                              className="
                                text-[var(--muted)]
                                transition-colors
                                duration-300
                                group-hover/item:text-[#ff5a1f]
                              "
                            />
                          </div>

                          <p
                            className="
                              text-sm
                              leading-7
                              text-[var(--muted-dark)]
                              transition-colors
                              duration-300
                              group-hover/item:text-[var(--muted-strong)]
                              sm:text-base
                            "
                          >
                            {responsibility}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Workflow */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25,
                    }}
                    className="mt-11"
                  >
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
                      Development Workflow
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {workflow.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-[var(--line)]
                              bg-[var(--glass)]
                              px-3
                              py-3
                              transition-all
                              duration-300
                              hover:border-[#ff5a1f]/20
                              hover:bg-[#ff5a1f]/[0.035]
                            "
                          >
                            <Icon
                              size={15}
                              strokeWidth={1.5}
                              className="shrink-0 text-[#ff5a1f]/70"
                            />

                            <span className="text-[10px] font-medium text-[var(--muted-dark)]">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Mindset */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35,
                    }}
                    className="
                      mt-8
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#ff5a1f]/10
                      bg-[#ff5a1f]/[0.025]
                      p-6
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1 h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f] shadow-[0_0_12px_rgba(255,90,31,0.9)]" />

                      <div>
                        <p className="text-sm font-semibold text-[var(--foreground)]">
                          Development mindset
                        </p>

                        <p className="mt-3 text-sm leading-7 text-[var(--muted-dark)]">
                          Focused on understanding the complete development
                          workflow, applying Laravel MVC concepts and
                          continuously improving through practical work.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom progress */}

              <div className="relative h-px w-full bg-[var(--line)]">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-[#ff5a1f]/0 via-[#ff5a1f]/60 to-[#ff5a1f]/0"
                />
              </div>
            </div>
          </motion.div>

          {/* Highlights */}

          <div className="mt-5 grid gap-4 md:grid-cols-3 lg:ml-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -7 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    border
                    border-[var(--line)]
                    bg-[var(--glass)]
                    p-6
                    shadow-[var(--shadow)]
                    transition-all
                    duration-500
                    hover:border-[#ff5a1f]/20
                  "
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ff5a1f]/[0.035] blur-2xl transition-all duration-500 group-hover:bg-[#ff5a1f]/[0.09]" />

                  <div className="relative flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[var(--line)]
                        bg-[var(--glass)]
                        transition-all
                        duration-300
                        group-hover:border-[#ff5a1f]/20
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[var(--muted-dark)] transition-colors duration-300 group-hover:text-[#ff5a1f]"
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="relative mt-6 text-base font-bold text-[var(--foreground)]">
                    {item.title}
                  </h4>

                  <p className="relative mt-2 text-sm leading-6 text-[var(--muted-dark)]">
                    {item.text}
                  </p>

                  <div className="relative mt-6 h-px w-8 bg-[#ff5a1f]/40 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* End */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-[var(--line)] pt-7 sm:flex-row sm:items-center"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--muted)]">
            Experience / 01
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-dark)]">
              Keep building
            </span>

            <span className="h-px w-10 bg-[#ff5a1f]/40" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_10px_rgba(255,90,31,0.8)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}