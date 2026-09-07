"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MousePointer2,
} from "lucide-react";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene"),
  {
    ssr: false,
    loading: () => null,
  }
);

const technologies = [
  "LARAVEL",
  "PHP",
  "JAVASCRIPT",
  "MYSQL",
  "CORE JAVA",
  "HTML",
  "BOOTSTRAP 5",
  "ADMINLTE",
  "GIT & GITHUB",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Orange glow */}
        <div
          className="
            absolute
            left-[72%]
            top-[45%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#ff5a1f]/[0.065]
            blur-[130px]
            max-sm:left-1/2
            max-sm:top-[37%]
            max-sm:h-[360px]
            max-sm:w-[360px]
          "
        />

        {/* Soft secondary glow */}
        <div
          className="
            absolute
            left-[76%]
            top-[44%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--foreground)]/[0.025]
            blur-[100px]
            max-sm:left-1/2
            max-sm:top-[37%]
            max-sm:h-[250px]
            max-sm:w-[250px]
          "
        />

        {/* Editorial grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.7]
            [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)]
            [background-size:80px_80px]
            max-sm:[background-size:45px_45px]
          "
        />
      </div>

      {/* =====================================================
          3D SCENE
      ===================================================== */}

      <HeroScene />

      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      <div className="hero-overlay" />

      {/* =====================================================
          LEFT / MOBILE FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(90deg,color-mix(in_srgb,var(--background)_24%,transparent)_0%,color-mix(in_srgb,var(--background)_4%,transparent)_48%,transparent_72%)]
          max-sm:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_5%,transparent)_0%,color-mix(in_srgb,var(--background)_8%,transparent)_35%,color-mix(in_srgb,var(--background)_72%,transparent)_58%,var(--background)_78%)]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1600px]
          flex-col
          px-5
          pb-8
          pt-28
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            TOP METADATA
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--line)]
            pb-5
          "
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="flex items-center gap-3"
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#ff5a1f]
                shadow-[0_0_12px_rgba(255,90,31,0.65)]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[var(--muted)]
                sm:text-xs
              "
            >
              PHP Laravel Developer
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.15,
            }}
            className="
              hidden
              text-xs
              uppercase
              tracking-[0.25em]
              text-[var(--muted-dark)]
              sm:block
            "
          >
            2026 / Portfolio
          </motion.span>
        </div>

        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div className="flex flex-1 items-center">
          <div className="w-full">
            <div className="relative">
              {/* SMALL LABEL */}

              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#ff5a1f]" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[var(--muted)]
                  "
                >
                  I design & build
                </span>
              </motion.div>

              {/* NAME */}

              <div className="relative">
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    select-none
                    text-[18vw]
                    font-black
                    leading-[0.72]
                    tracking-[-0.075em]
                    text-[var(--foreground)]
                    sm:text-[15vw]
                    lg:text-[13vw]
                    max-sm:text-[17vw]
                  "
                >
                  PRANIL
                </motion.h1>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-10
                    select-none
                    text-[18vw]
                    font-black
                    leading-[0.82]
                    tracking-[-0.075em]
                    text-transparent
                    [-webkit-text-stroke:1px_var(--line-strong)]
                    sm:text-[15vw]
                    lg:text-[13vw]
                    max-sm:text-[17vw]
                  "
                >
                  MALEKAR
                </motion.h1>

                {/* Accent line */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "clamp(80px, 15vw, 230px)",
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="
                    mt-5
                    h-[3px]
                    bg-[#ff5a1f]
                    shadow-[0_0_18px_rgba(255,90,31,0.45)]
                  "
                />
              </div>

              {/* DESCRIPTION */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.58,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  mt-10
                  grid
                  gap-8
                  lg:grid-cols-[1fr_auto]
                  max-sm:mt-8
                "
              >
                {/* Description + buttons */}

                <div className="max-w-xl">
                  <p
                    className="
                      text-base
                      leading-7
                      text-[var(--muted)]
                      sm:text-lg
                    "
                  >
                    I build modern web applications with a focus on
                    clean interfaces, scalable backend systems and
                    meaningful user experiences.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {/* Work button */}

                    <a
                      href="#projects"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[#ff5a1f]
                        px-6
                        py-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#111111]
                        transition-all
                        duration-300
                        hover:scale-[1.03]
                        hover:bg-[#ff6a32]
                        hover:shadow-[0_0_30px_rgba(255,90,31,0.3)]
                      "
                    >
                      <span>View My Work</span>

                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </a>

                    {/* Resume button */}

                    <a
                      href="/resume.pdf"
                      download
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-[var(--line-strong)]
                        bg-[var(--glass)]
                        px-6
                        py-3
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[var(--foreground)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[#ff5a1f]/50
                        hover:bg-[#ff5a1f]/[0.06]
                      "
                    >
                      <span>Resume</span>

                      <Download
                        size={15}
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-y-1
                        "
                      />
                    </a>
                  </div>
                </div>

                {/* Current focus */}

                <div className="flex items-end lg:pr-10">
                  <div
                    className="
                      border-l
                      border-[var(--line)]
                      pl-5
                    "
                  >
                    <p
                      className="
                        mb-2
                        text-[9px]
                        uppercase
                        tracking-[0.28em]
                        text-[var(--muted-dark)]
                      "
                    >
                      Currently focused on
                    </p>

                    <p
                      className="
                        text-sm
                        font-medium
                        text-[var(--foreground)]
                      "
                    >
                      PHP Laravel Development
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-[var(--muted)]
                      "
                    >
                      Laravel / PHP / MySQL
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-[var(--line)]
            pt-5
            sm:flex-row
            sm:items-center
          "
        >
          {/* Cursor hint */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[var(--muted-dark)]
            "
          >
            <MousePointer2 size={14} />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
            >
              Move your cursor
            </span>
          </div>

          {/* Technologies */}

          <div
            className="
              flex
              max-w-full
              items-center
              gap-4
              overflow-hidden
            "
          >
            <div
              className="
                flex
                animate-[marquee_24s_linear_infinite]
                gap-6
                whitespace-nowrap
              "
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.22em]
                    text-[var(--muted-dark)]
                    transition-colors
                    duration-300
                    hover:text-[#ff5a1f]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll */}

          <motion.a
            href="#about"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              items-center
              gap-2
              text-[var(--muted)]
              transition-colors
              duration-200
              hover:text-[var(--foreground)]
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
            >
              Scroll
            </span>

            <ArrowDown size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

