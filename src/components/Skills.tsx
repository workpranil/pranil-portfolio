"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Terminal,
  Wrench,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   SKILL DATA
========================================================= */

const skills = [
  {
    number: "01",
    name: "PHP",
    category: "BACKEND",
    description:
      "Server-side programming language used to develop dynamic and database-driven web applications.",
    icon: Code2,
    featured: true,
  },
  {
    number: "02",
    name: "Laravel",
    category: "FRAMEWORK",
    description:
      "PHP MVC framework used to build structured web applications, database-driven systems and HR workflows.",
    icon: Layers3,
    featured: true,
  },
  {
    number: "03",
    name: "MySQL",
    category: "DATABASE",
    description:
      "Relational database system used for application data management, relationships and business workflows.",
    icon: Database,
    featured: true,
  },
  {
    number: "04",
    name: "HTML",
    category: "WEB",
    description:
      "Markup language used to structure semantic, accessible and responsive web interfaces.",
    icon: Globe,
  },
  {
    number: "05",
    name: "JavaScript",
    category: "WEB",
    description:
      "Programming language used to create interactive interfaces and dynamic web application functionality.",
    icon: Code2,
  },
  {
    number: "06",
    name: "Bootstrap 5",
    category: "WEB",
    description:
      "Responsive frontend framework used to create clean layouts and reusable interface components.",
    icon: Globe,
  },
  {
    number: "07",
    name: "AdminLTE",
    category: "TOOLS",
    description:
      "Admin dashboard framework used to build responsive and structured management interfaces.",
    icon: BriefcaseBusiness,
  },
  {
    number: "08",
    name: "Git & GitHub",
    category: "TOOLS",
    description:
      "Version control and repository management tools used to track, manage and maintain development work.",
    icon: GitBranch,
  },
  {
    number: "09",
    name: "Core Java",
    category: "PROGRAMMING",
    description:
      "Object-oriented programming fundamentals including classes, objects, inheritance and core Java concepts.",
    icon: Terminal,
  },
  {
    number: "10",
    name: "C++",
    category: "PROGRAMMING",
    description:
      "Object-oriented programming language used to strengthen programming concepts and problem solving.",
    icon: Terminal,
  },
  {
    number: "11",
    name: "C",
    category: "PROGRAMMING",
    description:
      "Programming language used to develop strong fundamentals in logic, algorithms and problem solving.",
    icon: Terminal,
  },
];

/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [
  {
    title: "BACKEND",
    description: "Application development",
    icon: Layers3,
    skills: ["PHP", "Laravel"],
  },
  {
    title: "DATABASE",
    description: "Data management",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "WEB",
    description: "Frontend technologies",
    icon: Globe,
    skills: ["HTML", "JavaScript", "Bootstrap 5"],
  },
  {
    title: "TOOLS",
    description: "Development workflow",
    icon: Wrench,
    skills: ["AdminLTE", "Git & GitHub"],
  },
  {
    title: "PROGRAMMING",
    description: "Programming fundamentals",
    icon: Terminal,
    skills: ["Core Java", "C++", "C"],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState("Laravel");

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const backgroundX = useTransform(
    springX,
    [-1, 1],
    [-25, 25]
  );

  const backgroundY = useTransform(
    springY,
    [-1, 1],
    [-15, 15]
  );

  /* =======================================================
     ACTIVE SKILL
  ======================================================= */

  const activeSkillData =
    skills.find((skill) => skill.name === activeSkill) ??
    skills[1];

  const ActiveIcon = activeSkillData.icon;

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="
        portfolio-section
        relative
        scroll-mt-28
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        py-24
        transition-colors
        duration-500
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="
          pointer-events-none
          absolute
          left-[70%]
          top-[25%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-[#ff5a1f]/[0.045]
          blur-[130px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)]
          [background-size:100px_100px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="editorial-container relative z-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[var(--line)]
              pb-6
              sm:pb-7
            "
          >
            <span className="section-number">
              03 / Skills
            </span>

            <span className="technical-text hidden sm:block">
              Technical Stack / 2026
            </span>
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <div
            className="
              grid
              gap-10
              py-14
              sm:py-20
              lg:grid-cols-[1.15fr_0.85fr]
              lg:py-28
            "
          >
            <div>
              <p className="technical-text mb-6">
                What I work with
              </p>

              <h2
                className="
                  max-w-5xl
                  text-[19vw]
                  font-black
                  leading-[0.76]
                  tracking-[-0.085em]
                  sm:text-[12vw]
                  lg:text-[9.5vw]
                "
              >
                MY
                <br />

                <span className="text-[var(--muted-dark)]">
                  STACK
                </span>

                <span className="text-[#ff5a1f]">.</span>
              </h2>
            </div>

            <div className="flex items-end lg:pb-3">
              <div className="max-w-md">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#ff5a1f]" />

                  <span className="technical-text">
                    11 technologies
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    text-[var(--muted-dark)]
                    sm:text-base
                  "
                >
                  A focused technology stack built around
                  PHP and Laravel, supported by frontend
                  technologies, databases, programming
                  fundamentals and development tools.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN SKILL AREA
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* ===================================================
              SKILL INDEX
          =================================================== */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                border-b
                border-[var(--line)]
                pb-4
              "
            >
              <span className="technical-text">
                Skill index
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  text-[var(--muted-dark)]
                "
              >
                CORE → SUPPORT
              </span>
            </div>

            <div>
              {skills.map((skill, index) => {
                const isActive =
                  activeSkill === skill.name;

                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onMouseEnter={() =>
                      setActiveSkill(skill.name)
                    }
                    onFocus={() =>
                      setActiveSkill(skill.name)
                    }
                    onClick={() =>
                      setActiveSkill(skill.name)
                    }
                    initial={{
                      opacity: 0,
                      x: -18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.12,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      border-b
                      border-[var(--line)]
                      py-5
                      text-left
                      transition-all
                      duration-200
                      sm:py-6
                      ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted-dark)] hover:text-[var(--foreground)]"
                      }
                    `}
                  >
                    {/* Active line */}

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? 34 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-px
                        -translate-y-1/2
                        bg-[#ff5a1f]
                      "
                    />

                    {/* Number */}

                    <span
                      className={`
                        w-11
                        pl-1
                        font-mono
                        text-[9px]
                        transition-colors
                        sm:w-16
                        ${
                          isActive
                            ? "text-[#ff5a1f]"
                            : "text-[var(--muted-dark)]"
                        }
                      `}
                    >
                      {skill.number}
                    </span>

                    {/* Skill name */}

                    <span
                      className={`
                        text-lg
                        font-bold
                        tracking-[-0.035em]
                        transition-transform
                        duration-200
                        sm:text-2xl
                        lg:text-3xl
                        ${
                          isActive
                            ? "translate-x-2"
                            : "group-hover:translate-x-1"
                        }
                      `}
                    >
                      {skill.name}

                      {skill.featured && (
                        <span
                          className="
                            ml-2
                            align-middle
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#ff5a1f]
                            sm:ml-3
                            sm:text-[8px]
                          "
                        >
                          Core
                        </span>
                      )}
                    </span>

                    {/* Category */}

                    <span
                      className={`
                        ml-auto
                        hidden
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        transition-colors
                        sm:block
                        ${
                          isActive
                            ? "text-[var(--muted)]"
                            : "text-[var(--muted-dark)]"
                        }
                      `}
                    >
                      {skill.category}
                    </span>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={16}
                      className={`
                        ml-3
                        transition-all
                        duration-200
                        sm:ml-5
                        ${
                          isActive
                            ? "translate-x-0 text-[#ff5a1f]"
                            : "-translate-x-2 text-transparent group-hover:translate-x-0 group-hover:text-[var(--muted)]"
                        }
                      `}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              ACTIVE SKILL PANEL
          =================================================== */}

          <motion.div
            layout
            className="
              group
              relative
              min-h-[400px]
              overflow-hidden
              border
              border-[var(--line)]
              bg-[var(--glass)]
              backdrop-blur-md
              transition-colors
              duration-500
              sm:min-h-[430px]
            "
          >
            {/* Background glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-[#ff5a1f]/[0.035]
                blur-3xl
              "
            />

            {/* Orange top line */}

            <motion.div
              animate={{
                width:
                  activeSkill === "Laravel"
                    ? "100%"
                    : activeSkillData.featured
                      ? "75%"
                      : "35%",
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                absolute
                left-0
                top-0
                h-px
                bg-[#ff5a1f]
              "
            />

            {/* Corner number */}

            <div
              className="
                absolute
                right-5
                top-5
                font-mono
                text-[9px]
                text-[var(--muted-dark)]
                sm:right-6
                sm:top-6
              "
            >
              {activeSkillData.number} / 11
            </div>

            {/* Content */}

            <div
              className="
                relative
                flex
                min-h-[400px]
                flex-col
                justify-between
                p-6
                sm:min-h-[430px]
                sm:p-9
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="technical-text">
                    Selected technology
                  </span>

                  <span className="h-px w-5 bg-[var(--line)]" />
                </div>

                <motion.div
                  key={activeSkill}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {/* Icon */}

                  <div
                    className="
                      mt-8
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-[#ff5a1f]/25
                      bg-[#ff5a1f]/[0.045]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <ActiveIcon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#ff5a1f]"
                    />
                  </div>

                  {/* Name */}

                  <h3
                    className="
                      mt-7
                      text-4xl
                      font-black
                      tracking-[-0.06em]
                      sm:text-5xl
                    "
                  >
                    {activeSkill}

                    <span className="text-[#ff5a1f]">
                      .
                    </span>
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-sm
                      text-sm
                      leading-7
                      text-[var(--muted-dark)]
                    "
                  >
                    {activeSkillData.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom information */}

              <div className="mt-10">
                <div
                  className="
                    mb-5
                    border-t
                    border-[var(--line)]
                    pt-5
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="technical-text">
                      Category
                    </span>

                    <span className="font-mono text-[9px] text-[#ff5a1f]">
                      {activeSkillData.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#ff5a1f]
                      shadow-[0_0_12px_rgba(255,90,31,0.8)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      text-[var(--muted-dark)]
                      sm:text-[10px]
                    "
                  >
                    Academic + Internship + Project
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative number */}

            <span
              className="
                pointer-events-none
                absolute
                -bottom-8
                -right-2
                select-none
                text-[140px]
                font-black
                leading-none
                tracking-[-0.1em]
                text-[var(--foreground)]
                opacity-[0.025]
                sm:text-[170px]
              "
            >
              {activeSkillData.number}
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            TECHNOLOGY GROUPS
        ====================================================== */}

        <div
          className="
            mt-24
            border-t
            border-[var(--line)]
            pt-10
            sm:mt-32
          "
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="technical-text">
              Stack overview
            </span>

            <span
              className="
                hidden
                font-mono
                text-[9px]
                text-[var(--muted-dark)]
                sm:block
              "
            >
              PRACTICAL CATEGORIES
            </span>
          </div>

          <div
            className="
              grid
              border-l
              border-t
              border-[var(--line)]
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    border-b
                    border-r
                    border-[var(--line)]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[var(--glass)]
                    sm:p-7
                  "
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="
                        text-[var(--muted)]
                        transition-colors
                        duration-300
                        group-hover:text-[#ff5a1f]
                      "
                    />

                    <span
                      className="
                        font-mono
                        text-[9px]
                        text-[var(--muted-dark)]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-9
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[var(--foreground)]
                      opacity-70
                    "
                  >
                    {category.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      text-[var(--muted-dark)]
                    "
                  >
                    {category.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {category.skills.map((skillName) => (
                      <button
                        key={skillName}
                        type="button"
                        onMouseEnter={() =>
                          setActiveSkill(skillName)
                        }
                        onFocus={() =>
                          setActiveSkill(skillName)
                        }
                        onClick={() =>
                          setActiveSkill(skillName)
                        }
                        className={`
                          block
                          text-left
                          text-xs
                          transition-all
                          duration-200
                          ${
                            activeSkill === skillName
                              ? "translate-x-1 text-[#ff5a1f]"
                              : "text-[var(--muted-dark)] hover:translate-x-1 hover:text-[var(--foreground)]"
                          }
                        `}
                      >
                        {skillName}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            border-t
            border-[var(--line)]
            py-20
            sm:py-28
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <p className="technical-text mb-6">
                Development direction
              </p>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-[0.88]
                  tracking-[-0.065em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                PHP.
                <br />

                <span className="text-[var(--muted-dark)]">
                  LARAVEL.
                </span>

                <br />

                BUILDING
                <span className="text-[#ff5a1f]">.</span>
              </h3>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                lg:pb-2
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#ff5a1f]/20
                  bg-[#ff5a1f]/[0.04]
                "
              >
                <Code2
                  size={17}
                  className="text-[#ff5a1f]"
                />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    text-[var(--foreground)]
                    opacity-70
                  "
                >
                  Focused on practical development
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    text-[var(--muted-dark)]
                  "
                >
                  Learn → Build → Improve
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}