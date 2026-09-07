"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  School,
} from "lucide-react";

const education = [
  {
    number: "01",
    status: "CURRENT",
    period: "Pursuing",
    degree: "Bachelor of Science in Information Technology",
    shortDegree: "B.Sc. Information Technology",
    institution: "Karmaveer Bhaurao Patil College",
    location: "Urun Ishwarpur, Maharashtra",
    description:
      "Currently pursuing B.Sc. in Information Technology, building a strong foundation in programming, web development, databases and software development.",
    icon: Sparkles,
    tags: ["B.Sc. IT", "Programming", "Web Development"],
  },
  {
    number: "02",
    status: "COMPLETED",
    period: "2021",
    degree: "Diploma in Computer Engineering",
    shortDegree: "Diploma — Computer Engineering",
    institution: "Nanasaheb Mahadik Polytechnic Institute",
    location: "Peth, Maharashtra",
    description:
      "Completed Diploma in Computer Engineering with a strong technical foundation in programming, computer engineering concepts and software technologies.",
    grade: "78.47%",
    icon: GraduationCap,
    tags: ["Computer Engineering", "Programming", "Technical Studies"],
  },
  {
    number: "03",
    status: "COMPLETED",
    period: "HSC",
    degree: "Higher Secondary Certificate",
    shortDegree: "HSC",
    institution: "Karmaveer Bhaurao Patil College",
    location: "Urun Ishwarpur, Maharashtra",
    description:
      "Completed Higher Secondary Certificate education, providing the academic foundation for further studies in computer engineering and information technology.",
    grade: "47.23%",
    icon: School,
    tags: ["HSC", "Higher Secondary Education"],
  },
  {
    number: "04",
    status: "COMPLETED",
    period: "SSC",
    degree: "Secondary School Certificate",
    shortDegree: "SSC",
    institution: "Yashwant Highschool",
    location: "Ishwarpur, Maharashtra",
    description:
      "Completed Secondary School Certificate education and began the academic journey that led towards technical and information technology studies.",
    grade: "64.80%",
    icon: School,
    tags: ["SSC", "Secondary Education"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        portfolio-section
        relative
        scroll-mt-28
        overflow-hidden
        py-24
        transition-colors
        duration-500
        sm:py-32
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Orange ambient glow */}
        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#ff5a1f]/[0.045]
            blur-[150px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            bottom-[5%]
            right-[-12%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ff5a1f]/[0.025]
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-44
            bg-gradient-to-b
            from-[var(--background)]
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-32
            bg-gradient-to-t
            from-[var(--background)]
            to-transparent
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-5xl sm:mb-20"
        >
          {/* Label */}
          <div className="mb-6 flex items-center gap-4 sm:mb-7">
            <span className="h-px w-10 bg-[#ff5a1f] sm:w-12" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.32em]
                text-[#ff5a1f]
                sm:text-[11px]
                sm:tracking-[0.35em]
              "
            >
              EDUCATION
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[3.1rem]
              font-semibold
              leading-[0.92]
              tracking-[-0.065em]
              text-[var(--foreground)]
              sm:text-6xl
              md:text-7xl
              lg:text-[7rem]
            "
          >
            The foundation
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
              behind the developer.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-[var(--muted-dark)]
              sm:mt-9
              sm:text-lg
              sm:leading-8
            "
          >
            My academic journey from school education to Information
            Technology has built the technical foundation behind my
            development career.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">
          {/* Timeline line */}
          <div
            className="
              absolute
              bottom-8
              left-[23px]
              top-8
              hidden
              w-px
              bg-gradient-to-b
              from-[#ff5a1f]
              via-[var(--line-strong)]
              to-transparent
              md:block
            "
          />

          <div className="space-y-7 sm:space-y-8">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative md:pl-20"
                >
                  {/* =================================================
                      TIMELINE NODE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-[9px]
                      top-10
                      hidden
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ff5a1f]/40
                      bg-[var(--background)]
                      shadow-[0_0_20px_rgba(255,90,31,0.08)]
                      md:flex
                    "
                  >
                    <motion.div
                      initial={{
                        scale: 0.5,
                        opacity: 0.2,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08 + 0.2,
                      }}
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#ff5a1f]
                        shadow-[0_0_18px_rgba(255,90,31,0.9)]
                      "
                    />
                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[1.65rem]
                      border
                      border-[var(--line)]
                      bg-[var(--glass)]
                      shadow-[var(--shadow)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#ff5a1f]/30
                      sm:rounded-[2rem]
                    "
                  >
                    {/* Left accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[2px]
                        bg-gradient-to-b
                        from-[#ff5a1f]
                        via-[#ff5a1f]/40
                        to-transparent
                      "
                    />

                    {/* Hover glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-28
                        -top-28
                        h-72
                        w-72
                        rounded-full
                        bg-[#ff5a1f]/[0.055]
                        opacity-0
                        blur-[90px]
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                      "
                    />

                    {/* Background number */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-5
                        top-2
                        select-none
                        text-[95px]
                        font-bold
                        leading-none
                        tracking-[-0.1em]
                        text-[var(--muted)]
                        opacity-[0.18]
                        transition-opacity
                        duration-500
                        group-hover:opacity-[0.28]
                        sm:right-9
                        sm:text-[145px]
                      "
                    >
                      {item.number}
                    </div>

                    <div
                      className="
                        relative
                        grid
                        gap-8
                        p-6
                        sm:p-9
                        lg:grid-cols-[0.65fr_2fr]
                        lg:gap-14
                        lg:p-11
                      "
                    >
                      {/* =================================================
                          META
                      ================================================= */}

                      <div>
                        {/* Icon */}
                        <div
                          className="
                            mb-6
                            flex
                            h-13
                            w-13
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-[#ff5a1f]/20
                            bg-[#ff5a1f]/[0.06]
                            transition-all
                            duration-500
                            group-hover:border-[#ff5a1f]/35
                            group-hover:bg-[#ff5a1f]/[0.1]
                            sm:mb-7
                            sm:h-14
                            sm:w-14
                          "
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.5}
                            className="
                              text-[#ff5a1f]
                              transition-transform
                              duration-500
                              group-hover:scale-110
                            "
                          />
                        </div>

                        {/* Status */}
                        <p
                          className="
                            text-[9px]
                            font-bold
                            tracking-[0.28em]
                            text-[#ff5a1f]
                            sm:text-[10px]
                            sm:tracking-[0.3em]
                          "
                        >
                          {item.status}
                        </p>

                        {/* Period */}
                        <div
                          className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-[var(--muted-dark)]
                            sm:text-sm
                          "
                        >
                          <CalendarDays
                            size={15}
                            strokeWidth={1.5}
                            className="text-[var(--muted)]"
                          />

                          <span>{item.period}</span>
                        </div>

                        {/* Academic number */}
                        <p
                          className="
                            mt-8
                            hidden
                            font-mono
                            text-[10px]
                            tracking-[0.2em]
                            text-[var(--muted)]
                            lg:block
                          "
                        >
                          ACADEMIC / {item.number}
                        </p>
                      </div>

                      {/* =================================================
                          CONTENT
                      ================================================= */}

                      <div>
                        <div className="mb-5 flex items-start justify-between gap-5">
                          <div className="min-w-0">
                            {/* Small degree */}
                            <p
                              className="
                                mb-3
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-[var(--muted)]
                                sm:text-[10px]
                                sm:tracking-[0.2em]
                              "
                            >
                              {item.shortDegree}
                            </p>

                            {/* Degree */}
                            <h3
                              className="
                                max-w-3xl
                                text-[1.75rem]
                                font-semibold
                                leading-[1.08]
                                tracking-[-0.045em]
                                text-[var(--foreground)]
                                sm:text-4xl
                                lg:text-[3.2rem]
                              "
                            >
                              {item.degree}
                            </h3>
                          </div>

                          {/* Arrow */}
                          <ArrowUpRight
                            size={21}
                            strokeWidth={1.3}
                            className="
                              mt-1
                              shrink-0
                              text-[var(--muted)]
                              transition-all
                              duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:text-[#ff5a1f]
                            "
                          />
                        </div>

                        {/* Institution */}
                        <h4
                          className="
                            text-base
                            font-medium
                            leading-7
                            text-[var(--muted-strong)]
                            sm:text-xl
                          "
                        >
                          {item.institution}
                        </h4>

                        {/* Location */}
                        <div
                          className="
                            mt-2.5
                            flex
                            items-start
                            gap-2
                            text-xs
                            text-[var(--muted-dark)]
                            sm:mt-3
                            sm:text-sm
                          "
                        >
                          <MapPin
                            size={15}
                            strokeWidth={1.5}
                            className="
                              mt-0.5
                              shrink-0
                              text-[#ff5a1f]
                            "
                          />

                          <span>{item.location}</span>
                        </div>

                        {/* =================================================
                            SCORE
                        ================================================= */}

                        {item.grade && (
                          <div
                            className="
                              mt-6
                              inline-flex
                              items-center
                              gap-3
                              rounded-full
                              border
                              border-[#ff5a1f]/20
                              bg-[#ff5a1f]/[0.05]
                              px-3.5
                              py-2
                              transition-all
                              duration-300
                              group-hover:border-[#ff5a1f]/35
                              group-hover:bg-[#ff5a1f]/[0.07]
                              sm:mt-7
                              sm:gap-4
                              sm:px-4
                              sm:py-2.5
                            "
                          >
                            <span
                              className="
                                text-[8px]
                                font-bold
                                tracking-[0.22em]
                                text-[#ff5a1f]
                                sm:text-[9px]
                                sm:tracking-[0.25em]
                              "
                            >
                              SCORE
                            </span>

                            <span
                              className="
                                h-3
                                w-px
                                bg-[var(--line)]
                              "
                            />

                            <span
                              className="
                                text-xs
                                font-semibold
                                text-[var(--foreground)]
                                sm:text-sm
                              "
                            >
                              {item.grade}
                            </span>
                          </div>
                        )}

                        {/* Divider */}
                        <div className="my-6 h-px bg-[var(--line)] sm:my-7" />

                        {/* Description */}
                        <p
                          className="
                            max-w-3xl
                            text-sm
                            leading-7
                            text-[var(--muted-dark)]
                            sm:text-base
                            sm:leading-8
                          "
                        >
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                rounded-full
                                border
                                border-[var(--line)]
                                bg-[var(--glass)]
                                px-3
                                py-1.5
                                text-[9px]
                                font-medium
                                tracking-wide
                                text-[var(--muted-dark)]
                                transition-all
                                duration-300
                                group-hover:border-[var(--line-strong)]
                                group-hover:text-[var(--muted-strong)]
                                sm:px-3.5
                                sm:text-[10px]
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex items-center gap-4 sm:mt-16"
        >
          <span className="h-px w-8 bg-[#ff5a1f]/60 sm:w-10" />

          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.25em]
              text-[var(--muted)]
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            LEARNING • BUILDING • EVOLVING
          </span>
        </motion.div>
      </div>
    </section>
  );
}

