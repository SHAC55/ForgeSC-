import { motion } from "framer-motion";

import Container from "./ui/Container";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <Container>
        <div className="relative min-h-[680px] border-b border-[#111111]/10 pb-16 lg:min-h-[760px]">

          {/* Decorative star */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[8%] top-[8%] hidden text-5xl lg:block"
          >
            ✦
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-10 flex items-center gap-3"
          >
            <span className="h-3 w-3 rounded-full border border-[#111111] bg-[#f4d35e]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/55">
              Independent software studio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-6xl font-display text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
          >
            We build
            <br />

            <span className="relative inline-block">
              what should
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -right-4 top-0 h-4 w-4 rounded-full bg-[#f5a6a0] sm:h-6 sm:w-6"
              />
            </span>

            <br />

            <span>
              exist<span className="text-[#111111]/30">.</span>
            </span>
          </motion.h1>

          {/* Hero bottom */}
          <div className="absolute bottom-16 left-0 right-0 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-md"
            >
              <p className="text-lg leading-7 text-[#111111]/60">
                Software for businesses.
                <br />
                Products of our own.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/contact">
                  Start a project ↗
                </Button>

                <Button
                  to="/work"
                  variant="secondary"
                >
                  See our work
                </Button>
              </div>
            </motion.div>

            {/* Decorative composition */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden h-44 w-64 lg:block"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-0 h-32 w-32 rounded-full border border-[#111111] bg-[#c7b5f5]"
              />

              <motion.div
                animate={{ y: [0, 7, 0], rotate: [-4, -1, -4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-4 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#111111] bg-[#8bb8ff]"
              >
                <span className="font-display text-3xl font-bold">
                  SC
                </span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 right-16 h-14 w-14 rounded-full border border-[#111111] bg-[#f4d35e]"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;