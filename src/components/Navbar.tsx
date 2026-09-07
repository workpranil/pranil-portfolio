"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type Theme = "light" | "dark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();

  const width = useTransform(
    scrollY,
    [0, 120],
    ["100%", "92%"]
  );

  const top = useTransform(
    scrollY,
    [0, 120],
    [0, 14]
  );

  /* =====================================================
     THEME INITIALIZATION
  ===================================================== */

  useEffect(() => {
    setMounted(true);

    const savedTheme = window.localStorage.getItem(
      "pranil-theme"
    ) as Theme | null;

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
          ? "dark"
          : "light";

    setTheme(initialTheme);

    document.documentElement.setAttribute(
      "data-theme",
      initialTheme
    );
  }, []);

  /* =====================================================
     THEME TOGGLE
  ===================================================== */

  const toggleTheme = () => {
    const nextTheme: Theme =
      theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );

    window.localStorage.setItem(
      "pranil-theme",
      nextTheme
    );
  };

  /* =====================================================
     CLOSE MENU WHEN RESIZING TO DESKTOP
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}

      <motion.header
        style={{ width, top }}
        className="
          fixed
          left-1/2
          z-[100]
          -translate-x-1/2
          px-3
          sm:px-0
        "
      >
        <motion.div
          animate={{
            backgroundColor:
              theme === "dark"
                ? open
                  ? "rgba(8,8,8,0.98)"
                  : "rgba(8,8,8,0.78)"
                : open
                  ? "rgba(255,255,255,0.98)"
                  : "rgba(255,255,255,0.82)",

            borderColor:
              theme === "dark"
                ? open
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,255,255,0.09)"
                : open
                  ? "rgba(17,17,17,0.12)"
                  : "rgba(17,17,17,0.08)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            rounded-2xl
            border
            backdrop-blur-2xl
            shadow-[0_15px_60px_rgba(17,17,17,0.10)]
            dark:shadow-[0_15px_60px_rgba(0,0,0,0.35)]
          "
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">

            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="
                group
                flex
                items-center
                gap-3
                text-[var(--foreground)]
              "
            >
              <motion.div
                whileHover={{
                  rotate: 90,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--foreground)]
                  bg-[var(--foreground)]
                  text-[var(--background)]
                  shadow-sm
                "
              >
                <span className="text-sm font-black tracking-[-0.05em]">
                  P
                </span>

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2
                    w-2
                    rounded-full
                    bg-[#ff5a1f]
                    shadow-[0_0_12px_rgba(255,90,31,0.8)]
                  "
                />
              </motion.div>

              <div className="hidden leading-none sm:block">
                <p className="text-sm font-black tracking-[-0.04em]">
                  PRANIL
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--muted)]
                  "
                >
                  PHP Laravel Developer
                </p>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav className="hidden items-center lg:flex">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="
                    group
                    relative
                    px-3
                    py-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[var(--muted)]
                    transition-colors
                    duration-300
                    hover:text-[var(--foreground)]
                  "
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>

                  {/* Orange underline */}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-3
                      right-3
                      h-[1px]
                      origin-left
                      scale-x-0
                      bg-[#ff5a1f]
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />

                  {/* Active dot */}

                  {index === 0 && (
                    <span
                      className="
                        absolute
                        right-1
                        top-2
                        h-1
                        w-1
                        rounded-full
                        bg-[#ff5a1f]
                        shadow-[0_0_8px_rgba(255,90,31,0.9)]
                      "
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="flex items-center gap-2">

              {/* =================================================
                  THEME TOGGLE
              ================================================= */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                title={
                  theme === "light"
                    ? "Dark mode"
                    : "Light mode"
                }
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-[var(--line)]
                  bg-[var(--glass)]
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:border-[#ff5a1f]
                  hover:text-[#ff5a1f]
                "
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {theme === "light" ? (
                    <motion.span
                      key="moon"
                      initial={{
                        rotate: -90,
                        scale: 0.5,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        scale: 0.5,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Moon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{
                        rotate: 90,
                        scale: 0.5,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        scale: 0.5,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Sun
                        size={17}
                        strokeWidth={1.8}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Tiny accent indicator */}

                <span
                  className="
                    absolute
                    right-[5px]
                    top-[5px]
                    h-1
                    w-1
                    rounded-full
                    bg-[#ff5a1f]
                  "
                />
              </motion.button>

              {/* =================================================
                  LET'S TALK
              ================================================= */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#ff5a1f]
                  bg-[#ff5a1f]
                  px-5
                  py-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-[#ff5a1f]
                  sm:flex
                "
              >
                <span>Let&apos;s Talk</span>

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </motion.a>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <button
                type="button"
                aria-label={
                  open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
                onClick={() =>
                  setOpen((value) => !value)
                }
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
                  text-[var(--foreground)]
                  transition-colors
                  duration-300
                  hover:border-[#ff5a1f]
                  hover:text-[#ff5a1f]
                  lg:hidden
                "
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <X size={19} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Menu size={19} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* =================================================
              SMALL ORANGE BOTTOM LINE
          ================================================= */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-[1px]
              origin-left
              bg-gradient-to-r
              from-[#ff5a1f]
              via-[#ff5a1f]/40
              to-transparent
            "
          />
        </motion.div>
      </motion.header>

      {/* =====================================================
          FULLSCREEN MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-[90]
              flex
              flex-col
              justify-between
              bg-[var(--background)]
              px-6
              pb-8
              pt-32
              text-[var(--foreground)]
              sm:px-10
            "
          >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <div
              className="
                editorial-grid
                pointer-events-none
                absolute
                inset-0
                opacity-70
              "
            />

            {/* =================================================
                ORANGE GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-120px]
                top-[20%]
                h-[350px]
                w-[350px]
                rounded-full
                bg-[#ff5a1f]/10
                blur-[120px]
              "
            />

            <div className="relative z-10">

              {/* =================================================
                  MENU HEADER
              ================================================= */}

              <div className="mb-8 flex items-center justify-between">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#ff5a1f]
                  "
                >
                  Navigation
                </p>

                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--muted)]
                  "
                >
                  PM / 2026
                </p>
              </div>

              {/* =================================================
                  NAV ITEMS
              ================================================= */}

              <div className="overflow-hidden">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{
                      y: 80,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.07,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[var(--line)]
                      py-4
                    "
                  >
                    <span
                      className="
                        text-5xl
                        font-black
                        tracking-[-0.07em]
                        text-[var(--foreground)]
                        transition-colors
                        duration-300
                        group-hover:text-[#ff5a1f]
                        sm:text-6xl
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-wider
                        text-[var(--muted)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* =================================================
                BOTTOM AREA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                relative
                z-10
                flex
                items-end
                justify-between
                border-t
                border-[var(--line)]
                pt-6
              "
            >
              <div>
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted)]
                  "
                >
                  PHP Laravel Developer
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-bold
                    text-[var(--foreground)]
                  "
                >
                  Building practical digital experiences.
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[var(--muted)]
                  "
                >
                  Laravel • PHP • MySQL
                </p>
              </div>

              {/* =================================================
                  MOBILE THEME TOGGLE
              ================================================= */}

              <motion.button
                type="button"
                onClick={toggleTheme}
                whileTap={{
                  scale: 0.9,
                }}
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--line)]
                  bg-[var(--glass)]
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:border-[#ff5a1f]
                  hover:text-[#ff5a1f]
                "
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {theme === "light" ? (
                    <motion.span
                      key="mobile-moon"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                    >
                      <Moon size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="mobile-sun"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                    >
                      <Sun size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

