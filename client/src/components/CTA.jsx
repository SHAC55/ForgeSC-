import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "./ui/Container";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#111111]/10 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#f4d35e] px-7 py-20 sm:px-12 sm:py-24 lg:px-16 lg:py-32"
        >
          {/* Decorative typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute -right-10 -top-16 font-display text-[12rem] font-bold leading-none tracking-[-0.12em] text-[#111111]/[0.05] sm:text-[18rem] lg:text-[24rem]"
          >
            ?
          </motion.div>

          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[12%] h-16 w-16 rounded-full border border-[#111111]/25 bg-[#f5a6a0] sm:h-20 sm:w-20"
          />

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[18%] hidden h-20 w-20 rounded-[1.5rem] border border-[#111111]/20 bg-[#8bb8ff] sm:block"
          />

          <motion.span
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-12 left-[8%] text-4xl text-[#111111]/40"
          >
            ✦
          </motion.span>

          {/* Content */}
          <div className="relative z-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-3 w-3 rounded-full border border-[#111111] bg-[#f6f1e9]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/55">
                Start something
              </span>
            </motion.div>

            <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Have an idea?
              <br />
              <span className="text-[#111111]/35">
                Let's make it real.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#111111]/60">
              Tell us what you're thinking, what you're trying to solve,
              or simply where you're stuck. We'll figure out the next step
              together.
            </p>

            {/* CTA */}
            <Link
              to="mailto:foragesc@gmail.com"
              className="group mt-10 inline-flex items-center gap-5 rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-[#f6f1e9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(17,17,17,0.2)]"
            >
              Start a conversation

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6f1e9] text-[#111111] transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;