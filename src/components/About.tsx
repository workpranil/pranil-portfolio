"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  MapPin,
  Terminal,
} from "lucide-react";

const stats = [
  {
    value: "8+",
    label: "Technologies",
  },
  {
    value: "1",
    label: "Featured Project",
  },
  {
    value: "1",
    label: "Internship",
  },
  {
    value: "∞",
    label: "Learning",
  },
];

const technologies = [
  "PHP",
  "Laravel",
  "HTML",
  "JavaScript",
  "C",
  "C++",
  "Core Java",
  "MySQL",
  "Bootstrap 5",
  "AdminLTE",
  "Git",
  "GitHub",
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        duration-500
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Orange ambient glow */}
        <div
          className="
            absolute
            -left-40
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ff5a1f]/[0.035]
            blur-[140px]
          "
        />

        {/* Theme-aware grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.5]
            [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)]
            [background-size:100px_100px]
          "
        />

        {/* Top section transition */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[var(--background)]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1600px]
          px-5
          py-24
          sm:px-8
          sm:py-32
          lg:px-12
          lg:py-40
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          className="
            mb-16
            flex
            items-end
            justify-between
            gap-8
            border-b
            border-[var(--line)]
            pb-6
            sm:mb-20
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#ff5a1f] sm:w-12" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[var(--muted)]
                sm:text-xs
              "
            >
              01 / About Me
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[var(--muted-dark)]
              sm:block
            "
          >
            Developer / Builder / Learner
          </motion.span>
        </div>

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p
              className="
                mb-7
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#ff5a1f]
              "
            >
              Who I am
            </p>

            <h2
              className="
                max-w-5xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Turning ideas
              <br />

              <span className="text-[var(--muted-dark)]">
                into practical
              </span>

              <br />

              solutions.
            </h2>

            <div className="mt-10 max-w-2xl space-y-5">
              <p
                className="
                  text-base
                  leading-8
                  text-[var(--muted)]
                  sm:text-lg
                "
              >
                I&apos;m Pranil Malekar, a BSc IT student and aspiring
                PHP Laravel Developer who enjoys turning ideas into
                practical, modern and user-friendly web applications.
              </p>

              <p
                className="
                  text-base
                  leading-8
                  text-[var(--muted-dark)]
                  sm:text-lg
                "
              >
                My development journey focuses on programming, web
                development, database management and software development.
                I enjoy building applications using Laravel, PHP, MySQL,
                JavaScript and Bootstrap while continuously improving my
                technical skills through projects and practical experience.
              </p>
            </div>

            {/* Location */}
            <div
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                border-l
                border-[#ff5a1f]/40
                pl-4
                text-[var(--muted)]
              "
            >
              <MapPin
                size={16}
                className="shrink-0 text-[#ff5a1f]"
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  sm:text-xs
                  sm:tracking-[0.2em]
                "
              >
                Urun Ishwarpur, Maharashtra, India
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT TERMINAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-end"
          >
            {/* Terminal */}
            <div
              className="
                group
                relative
                overflow-hidden
                border
                border-[var(--line)]
                bg-[var(--glass)]
                p-5
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[var(--line-strong)]
                sm:p-8
              "
            >
              {/* Subtle terminal glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-[#ff5a1f]/[0.035]
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Terminal top bar */}
              <div
                className="
                  relative
                  mb-8
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--line)]
                  pb-4
                "
              >
                <div className="flex items-center gap-3">
                  <Terminal
                    size={15}
                    className="text-[#ff5a1f]"
                  />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[var(--muted-dark)]
                    "
                  >
                    developer.profile
                  </span>
                </div>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#ff5a1f]
                    shadow-[0_0_12px_#ff5a1f]
                  "
                />
              </div>

              {/* Code */}
              <div
                className="
                  relative
                  space-y-5
                  font-mono
                  text-[11px]
                  leading-relaxed
                  sm:text-sm
                "
              >
                <div>
                  <span className="text-[#ff5a1f]">
                    const
                  </span>{" "}
                  <span className="text-[var(--foreground)]">
                    developer
                  </span>{" "}
                  <span className="text-[var(--muted-dark)]">
                    =
                  </span>
                </div>

                <div className="pl-4 text-[var(--muted-dark)] sm:pl-5">
                  {"{"}
                </div>

                <div className="pl-7 sm:pl-10">
                  <span className="text-[var(--muted-dark)]">
                    name:
                  </span>{" "}
                  <span className="text-[var(--foreground)]/75">
                    &quot;Pranil Malekar&quot;
                  </span>
                  <span className="text-[var(--muted-dark)]">
                    ,
                  </span>
                </div>

                <div className="pl-7 sm:pl-10">
                  <span className="text-[var(--muted-dark)]">
                    education:
                  </span>{" "}
                  <span className="text-[var(--foreground)]/65">
                    &quot;BSc IT&quot;
                  </span>
                  <span className="text-[var(--muted-dark)]">
                    ,
                  </span>
                </div>

                <div className="pl-7 sm:pl-10">
                  <span className="text-[var(--muted-dark)]">
                    role:
                  </span>{" "}
                  <span className="text-[#ff5a1f]">
                    &quot;PHP Laravel Developer&quot;
                  </span>
                  <span className="text-[var(--muted-dark)]">
                    ,
                  </span>
                </div>

                <div className="pl-7 sm:pl-10">
                  <span className="text-[var(--muted-dark)]">
                    focus:
                  </span>{" "}
                  <span className="text-[var(--foreground)]/65">
                    &quot;Web Applications&quot;
                  </span>
                  <span className="text-[var(--muted-dark)]">
                    ,
                  </span>
                </div>

                <div className="pl-7 sm:pl-10">
                  <span className="text-[var(--muted-dark)]">
                    stack:
                  </span>{" "}
                  <span className="text-[var(--foreground)]/65">
                    &quot;Laravel / PHP / MySQL&quot;
                  </span>
                </div>

                <div className="pl-4 text-[var(--muted-dark)] sm:pl-5">
                  {"}"}
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-1/3
                  bg-[#ff5a1f]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#ff5a1f]
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#ff5a1f]
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-[var(--muted-dark)]
                  sm:text-[10px]
                "
              >
                Always learning & building
              </span>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <div
          className="
            mt-24
            border-y
            border-[var(--line)]
            sm:mt-28
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="
                  group
                  relative
                  border-[var(--line)]
                  px-5
                  py-8
                  transition-colors
                  duration-300
                  hover:bg-[var(--glass)]
                  sm:px-8
                  sm:py-10
                  md:border-r
                  md:last:border-r-0
                "
              >
                {/* Hover line */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[#ff5a1f]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <p
                  className="
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[var(--foreground)]
                    sm:text-5xl
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[var(--muted-dark)]
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================================
            TECHNOLOGY STRIP
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-16
            grid
            gap-8
            sm:mt-20
            lg:grid-cols-[auto_1fr]
          "
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <Code2
              size={17}
              className="text-[#ff5a1f]"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[var(--muted-dark)]
              "
            >
              Core Stack
            </span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  flex
                  cursor-default
                  items-center
                  gap-2
                  border
                  border-[var(--line)]
                  bg-[var(--glass)]
                  px-3.5
                  py-2.5
                  transition-all
                  duration-300
                  hover:border-[#ff5a1f]/50
                  hover:bg-[#ff5a1f]/[0.04]
                  sm:px-4
                "
              >
                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[var(--muted-dark)]
                    transition-colors
                    duration-300
                    group-hover:bg-[#ff5a1f]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[var(--muted)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--foreground)]
                  "
                >
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-24
            flex
            flex-col
            justify-between
            gap-8
            border-t
            border-[var(--line)]
            pt-8
            sm:mt-28
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <p
              className="
                mb-3
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[var(--muted-dark)]
              "
            >
              My approach
            </p>

            <p
              className="
                max-w-2xl
                text-xl
                font-medium
                leading-relaxed
                tracking-[-0.02em]
                text-[var(--muted)]
                sm:text-2xl
              "
            >
              Learn continuously. Build intentionally.
              <br />

              <span className="text-[var(--foreground)]">
                Improve every version.
              </span>
            </p>
          </div>

          <a
            href="#skills"
            className="
              group
              inline-flex
              items-center
              gap-3
              self-start
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[var(--muted)]
              transition-colors
              duration-300
              hover:text-[var(--foreground)]
              sm:self-auto
            "
          >
            Explore my skills

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[var(--line)]
                transition-all
                duration-300
                group-hover:border-[#ff5a1f]
                group-hover:bg-[#ff5a1f]
                group-hover:text-[#111111]
              "
            >
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

