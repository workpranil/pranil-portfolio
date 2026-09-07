"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers3,
  LockKeyhole,
  Maximize2,
  Settings2,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const project = {
  title: "HR Payroll Management System",
  category: "Featured Project",
  description:
    "A complete HR and Payroll Management System designed to manage employees, departments, designations, attendance, leaves and payroll operations through a modern and user-friendly interface.",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "HTML",
    "Bootstrap 5",
    "JavaScript",
    "AdminLTE",
  ],
};

const screenshots = [
  {
    id: 1,
    title: "Login",
    label: "Authentication",
    image: "/images/projects/hr-payroll/login.png",
  },
  {
    id: 2,
    title: "Dashboard",
    label: "Admin Dashboard",
    image: "/images/projects/hr-payroll/dashboard.png",
  },
  {
    id: 3,
    title: "Employees",
    label: "Employee Management",
    image: "/images/projects/hr-payroll/employees.png",
  },
  {
    id: 4,
    title: "Departments",
    label: "Department Management",
    image: "/images/projects/hr-payroll/departments.png",
  },
  {
    id: 5,
    title: "Designations",
    label: "Designation Management",
    image: "/images/projects/hr-payroll/designations.png",
  },
  {
    id: 6,
    title: "Attendance",
    label: "Attendance Tracking",
    image: "/images/projects/hr-payroll/attendance.png",
  },
  {
    id: 7,
    title: "Leaves",
    label: "Leave Management",
    image: "/images/projects/hr-payroll/leaves.png",
  },
  {
    id: 8,
    title: "Payroll",
    label: "Payroll Operations",
    image: "/images/projects/hr-payroll/payroll.png",
  },
  {
    id: 9,
    title: "Employee Profile",
    label: "Employee Details",
    image: "/images/projects/hr-payroll/employee-profile.png",
  },
];

const modules = [
  {
    icon: Users,
    number: "01",
    title: "Employee Management",
    description:
      "Manage employee profiles, departments, designations and employment information.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Attendance & Leave",
    description:
      "Track attendance and manage employee leave workflows through one system.",
  },
  {
    icon: Database,
    number: "03",
    title: "Payroll Operations",
    description:
      "Handle salary-related information and payroll operations in a structured workflow.",
  },
  {
    icon: LockKeyhole,
    number: "04",
    title: "Role-based Access",
    description:
      "Application functionality designed around authenticated users and access levels.",
  },
];

const architecture = [
  "Laravel MVC",
  "Eloquent ORM",
  "MySQL Database",
  "Blade Templates",
  "Bootstrap 5",
  "JavaScript",
  "AdminLTE",
];

const features = [
  "Employee Management",
  "Department Management",
  "Designation Management",
  "Attendance Tracking",
  "Leave Management",
  "Payroll Operations",
  "Authentication",
  "Role-based Access",
];

const marqueeItems = [
  "LARAVEL",
  "PHP",
  "MYSQL",
  "HTML",
  "BOOTSTRAP 5",
  "JAVASCRIPT",
  "ADMINLTE",
  "HR SYSTEM",
  "PAYROLL",
  "EMPLOYEES",
  "ATTENDANCE",
  "LEAVES",
  "LARAVEL",
  "PHP",
  "MYSQL",
  "HTML",
  "BOOTSTRAP 5",
  "JAVASCRIPT",
  "ADMINLTE",
  "HR SYSTEM",
  "PAYROLL",
  "EMPLOYEES",
  "ATTENDANCE",
  "LEAVES",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeScreenshot, setActiveScreenshot] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  const imageY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [50, 0, -35]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1.04, 1, 1.02]
  );

  const contentY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [35, 0, -15]
  );

  const currentScreenshot =
    screenshots.find(
      (screenshot) => screenshot.id === activeScreenshot
    ) ?? screenshots[0];

  const previousScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 1 ? screenshots.length : current - 1
    );
  };

  const nextScreenshot = () => {
    setActiveScreenshot((current) =>
      current === screenshots.length ? 1 : current + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="portfolio-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-orange-500/[0.035] blur-[150px]" />

        <div
          className="absolute -left-48 bottom-20 h-[450px] w-[450px] rounded-full blur-[140px]"
          style={{
            background: "var(--ambient)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500/70" />

            <p
              className="text-[10px] font-bold uppercase tracking-[0.45em]"
              style={{ color: "var(--muted)" }}
            >
              Selected Work
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,90,31,0.9)]" />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2
              className="max-w-5xl text-4xl font-black leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              style={{ color: "var(--foreground)" }}
            >
              One project.
              <br />

              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--foreground), var(--muted-dark), var(--line-strong))",
                }}
              >
                Built with purpose.
              </span>
            </h2>

            <p
              className="max-w-md text-sm leading-7 sm:text-base"
              style={{ color: "var(--muted)" }}
            >
              A practical full-stack application built to solve real
              business workflows through structured software.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT HERO
        ====================================================== */}

        <motion.article
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border"
          style={{
            borderColor: "var(--line)",
            background: "var(--glass)",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* Top Line */}
          <div className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

          {/* =================================================
              PROJECT SCREENSHOT GALLERY
          ================================================== */}

          <div
            className="relative"
            style={{
              background: "var(--surface)",
            }}
          >
            {/* Main Screenshot */}

            <div className="relative h-[350px] overflow-hidden sm:h-[480px] lg:h-[650px]">

              {/* Orange Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.07] blur-[100px]" />

              {/* Screenshot */}
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                  borderColor: "var(--line)",
                  boxShadow: "var(--shadow)",
                }}
                className="absolute inset-5 z-10 overflow-hidden rounded-2xl border sm:inset-10 lg:inset-16"
              >
                <motion.img
                  key={currentScreenshot.image}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  src={currentScreenshot.image}
                  alt={`${currentScreenshot.title} - HR Payroll Management System`}
                  className="h-full w-full object-cover object-top"
                />

                {/* Image Overlay */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5), transparent 45%, rgba(255,255,255,0.035))",
                  }}
                />

                {/* Scan Line */}
                <motion.div
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "200%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    delay: 0.4,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-transparent via-orange-500/[0.08] to-transparent"
                />

                {/* Screenshot Label */}
                <div className="absolute bottom-4 left-4 z-20 sm:bottom-5 sm:left-5">
                  <div
                    className="rounded-xl border px-4 py-3 backdrop-blur-xl"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--overlay)",
                    }}
                  >
                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-orange-500">
                      {currentScreenshot.label}
                    </p>

                    <p
                      className="mt-1 text-sm font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {currentScreenshot.title}
                    </p>
                  </div>
                </div>

                {/* Fullscreen */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  aria-label="View screenshot fullscreen"
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:text-orange-500 sm:right-5 sm:top-5"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--overlay)",
                    color: "var(--muted)",
                  }}
                >
                  <Maximize2 size={16} />
                </button>
              </motion.div>

              {/* Project Number */}
              <div
                className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border font-mono text-xs backdrop-blur-xl sm:left-7 sm:top-7"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--overlay)",
                  color: "var(--muted)",
                }}
              >
                01
              </div>

              {/* Featured */}
              <div
                className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 backdrop-blur-xl sm:right-7 sm:top-7"
                style={{
                  borderColor: "rgba(255,90,31,0.2)",
                  background: "var(--overlay)",
                }}
              >
                <Sparkles size={12} />
                Featured Project
              </div>

              {/* Previous */}
              <button
                type="button"
                onClick={previousScreenshot}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500 sm:left-6"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--overlay)",
                  color: "var(--muted)",
                }}
              >
                <ArrowLeft size={16} />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={nextScreenshot}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500 sm:right-6"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--overlay)",
                  color: "var(--muted)",
                }}
              >
                <ArrowRight size={16} />
              </button>

              {/* Case Study */}
              <div className="absolute bottom-5 left-5 z-20 sm:bottom-7 sm:left-7">
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.35em]"
                  style={{ color: "var(--muted-dark)" }}
                >
                  Case Study / 001
                </p>
              </div>

              {/* Counter */}
              <div
                className="absolute bottom-5 right-5 z-20 rounded-full border px-4 py-2 font-mono text-[9px] backdrop-blur-xl sm:bottom-7 sm:right-7"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--overlay)",
                  color: "var(--muted)",
                }}
              >
                {String(activeScreenshot).padStart(2, "0")} / 09
              </div>
            </div>

            {/* =================================================
                SCREENSHOT THUMBNAILS
            ================================================== */}

            <div
              className="border-t px-5 py-5 sm:px-8"
              style={{
                borderColor: "var(--line)",
                background: "var(--glass)",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.35em]"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    System Screens
                  </p>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--muted-strong)" }}
                  >
                    Explore the application interface
                  </p>
                </div>

                <span
                  className="font-mono text-[9px]"
                  style={{ color: "var(--muted-dark)" }}
                >
                  09 VIEWS
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
                {screenshots.map((screenshot) => {
                  const isActive =
                    screenshot.id === activeScreenshot;

                  return (
                    <button
                      type="button"
                      key={screenshot.id}
                      onClick={() =>
                        setActiveScreenshot(screenshot.id)
                      }
                      className="group relative overflow-hidden rounded-xl border transition-all duration-300"
                      style={{
                        borderColor: isActive
                          ? "rgba(255,90,31,0.6)"
                          : "var(--line)",
                        background: isActive
                          ? "rgba(255,90,31,0.08)"
                          : "var(--glass)",
                      }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className={`h-full w-full object-cover object-top transition-all duration-500 ${
                            isActive
                              ? "scale-105 opacity-100"
                              : "opacity-50 grayscale group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                          }`}
                        />
                      </div>

                      <div className="flex items-center gap-2 px-2 py-2">
                        <span
                          className="font-mono text-[8px]"
                          style={{
                            color: isActive
                              ? "#ff5a1f"
                              : "var(--muted-dark)",
                          }}
                        >
                          {String(screenshot.id).padStart(2, "0")}
                        </span>

                        <span
                          className="truncate text-[8px] font-semibold uppercase tracking-[0.08em]"
                          style={{
                            color: isActive
                              ? "var(--foreground)"
                              : "var(--muted-dark)",
                          }}
                        >
                          {screenshot.title}
                        </span>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="activeScreenshot"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              PROJECT INFORMATION
          ================================================== */}

          <motion.div
            style={{ y: contentY }}
            className="grid lg:grid-cols-[1.05fr_0.95fr]"
          >
            {/* LEFT */}
            <div
              className="border-b p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14"
              style={{
                borderColor: "var(--line)",
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-500/80">
                {project.category}
              </p>

              <h3
                className="mt-5 max-w-2xl text-3xl font-black leading-[1] tracking-[-0.035em] sm:text-4xl lg:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                {project.title}
              </h3>

              <p
                className="mt-7 max-w-2xl text-sm leading-8 sm:text-base"
                style={{ color: "var(--muted)" }}
              >
                {project.description}
              </p>

              {/* Tech */}
              <div className="mt-10">
                <p
                  className="mb-4 text-[9px] font-bold uppercase tracking-[0.35em]"
                  style={{ color: "var(--muted-dark)" }}
                >
                  Built With
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      whileHover={{ y: -3 }}
                      className="rounded-full border px-4 py-2 text-xs transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.06] hover:text-orange-500"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--glass)",
                        color: "var(--muted-strong)",
                      }}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-3">
                  <Settings2
                    size={15}
                    style={{ color: "var(--muted-dark)" }}
                  />

                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    Architecture & Tools
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {architecture.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      <span className="h-1 w-1 rounded-full bg-orange-500/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.35em]"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    System Overview
                  </p>

                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Core modules of the application
                  </p>
                </div>

                <Layers3
                  size={20}
                  className="text-orange-500/50"
                />
              </div>

              {/* Modules */}
              <div className="mt-9 space-y-3">
                {modules.map((module, index) => {
                  const Icon = module.icon;

                  return (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      whileHover={{ x: 5 }}
                      className="group/module relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:border-orange-500/20 hover:bg-orange-500/[0.025]"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--glass)",
                      }}
                    >
                      <div className="flex gap-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover/module:border-orange-500/20 group-hover/module:bg-orange-500/[0.06]"
                          style={{
                            borderColor: "var(--line)",
                            background: "var(--glass)",
                          }}
                        >
                          <Icon
                            size={17}
                            className="text-orange-500/60 transition-colors group-hover/module:text-orange-500"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h4
                              className="text-sm font-semibold"
                              style={{
                                color: "var(--foreground)",
                              }}
                            >
                              {module.title}
                            </h4>

                            <span
                              className="font-mono text-[9px] tracking-[0.2em]"
                              style={{
                                color: "var(--muted-dark)",
                              }}
                            >
                              {module.number}
                            </span>
                          </div>

                          <p
                            className="mt-2 text-xs leading-6"
                            style={{
                              color: "var(--muted)",
                            }}
                          >
                            {module.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Status */}
              <div
                className="mt-9 flex items-center gap-3 rounded-2xl border px-5 py-4"
                style={{
                  borderColor: "rgba(255,90,31,0.12)",
                  background: "rgba(255,90,31,0.025)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>

                <p
                  className="text-[10px] font-medium uppercase tracking-[0.2em]"
                  style={{ color: "var(--muted)" }}
                >
                  Built as a practical full-stack application
                </p>
              </div>
            </div>
          </motion.div>
        </motion.article>

        {/* =====================================================
            FEATURE STRIP
        ====================================================== */}

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className="group flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-400 hover:border-orange-500/20 hover:bg-orange-500/[0.025]"
              style={{
                borderColor: "var(--line)",
                background: "var(--glass)",
              }}
            >
              <CheckCircle2
                size={15}
                className="shrink-0 text-orange-500/50 transition-colors group-hover:text-orange-500"
              />

              <span
                className="text-xs transition-colors group-hover:text-orange-500"
                style={{ color: "var(--muted)" }}
              >
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            PROJECT FOOTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-7 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--line)",
          }}
        >
          <div>
            <p
              className="font-mono text-[9px] uppercase tracking-[0.35em]"
              style={{ color: "var(--muted-dark)" }}
            >
              Project / HR Payroll
            </p>

            <p
              className="mt-3 text-sm"
              style={{ color: "var(--muted)" }}
            >
              Designed, developed and continuously improved as a practical
              full-stack project.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/workpranil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-medium transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.05] hover:text-orange-500"
              style={{
                borderColor: "var(--line)",
                color: "var(--muted)",
              }}
            >
              <span className="font-bold">GH</span>
              GitHub
              <ArrowUpRight size={14} />
            </a>

            {/* Live Demo */}
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full px-5 py-3 text-xs font-medium opacity-60"
              style={{
                background: "var(--glass)",
                color: "var(--muted-dark)",
              }}
            >
              <ExternalLink size={14} />
              Live Demo
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            END MARQUEE
        ====================================================== */}

        <div
          className="mt-20 overflow-hidden border-y py-5"
          style={{
            borderColor: "var(--line)",
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-10 whitespace-nowrap"
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-10"
              >
                <span
                  className="text-[10px] font-bold tracking-[0.35em]"
                  style={{ color: "var(--muted-dark)" }}
                >
                  {item}
                </span>

                <span className="h-1 w-1 rounded-full bg-orange-500/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FULLSCREEN SCREENSHOT MODAL
      ====================================================== */}

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl sm:p-8"
          style={{
            background: "var(--modal)",
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen screenshot"
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:text-orange-500 sm:right-8 sm:top-8"
            style={{
              borderColor: "var(--line)",
              background: "var(--glass)",
              color: "var(--muted)",
            }}
          >
            <X size={18} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={previousScreenshot}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500 sm:left-8"
            style={{
              borderColor: "var(--line)",
              background: "var(--overlay)",
              color: "var(--muted)",
            }}
          >
            <ArrowLeft size={18} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextScreenshot}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500 sm:right-8"
            style={{
              borderColor: "var(--line)",
              background: "var(--overlay)",
              color: "var(--muted)",
            }}
          >
            <ArrowRight size={18} />
          </button>

          <motion.div
            key={currentScreenshot.image}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface)",
            }}
          >
            <img
              src={currentScreenshot.image}
              alt={`${currentScreenshot.title} - HR Payroll Management System`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />

            <div
              className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-14"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88), transparent)",
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-orange-500">
                {currentScreenshot.label}
              </p>

              <p
                className="mt-1 text-lg font-bold"
                style={{ color: "#ffffff" }}
              >
                {currentScreenshot.title}
              </p>
            </div>
          </motion.div>

          {/* Modal Counter */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border px-4 py-2 font-mono text-[9px] backdrop-blur-xl"
            style={{
              borderColor: "var(--line)",
              background: "var(--overlay)",
              color: "var(--muted)",
            }}
          >
            {String(activeScreenshot).padStart(2, "0")} / 09
          </div>
        </div>
      )}
    </section>
  );
}
