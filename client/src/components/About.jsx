import { motion } from "framer-motion";
import Container from "./ui/Container";

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-[#111111]/10 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full border border-[#111111] bg-[#f5a6a0]" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/50">
            About ForgeSC
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 max-w-6xl"
        >
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            We believe good software
            <span className="text-[#111111]/30"> should feel inevitable.</span>
          </h2>
        </motion.div>

        {/* Philosophy */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-24 lg:mt-28">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-xl text-xl leading-8 text-[#111111]/70 sm:text-2xl sm:leading-9">
              ForgeSC is an independent software studio focused on building
              useful things.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#111111]/50">
              We work with businesses to solve real problems through
              thoughtful design and solid engineering. At the same time,
              we're building products of our own — exploring ideas that
              deserve to exist.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#111111]/15 bg-[#111111] p-7 text-[#f6f1e9] sm:p-10">
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Our principle
                </span>

                <span className="text-2xl text-[#f4d35e]">
                  ✦
                </span>
              </div>

              <p className="mt-20 font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                "Don't build more software.
                <br />
                Build better software."
              </p>

              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="text-xs text-white/35">
                  ForgeSC
                </span>
              </div>
            </div>

            {/* Decorative shape */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-[#111111]/20 bg-[#f4d35e]"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24 border-t border-[#111111]/10 lg:mt-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Clarity",
                text: "Understand the problem before solving it.",
              },
              {
                number: "02",
                title: "Craft",
                text: "Sweat the details that people actually experience.",
              },
              {
                number: "03",
                title: "Simplicity",
                text: "Use the simplest solution that does the job well.",
              },
              {
                number: "04",
                title: "Ownership",
                text: "Care about what happens after the code ships.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[#111111]/10 p-7 sm:p-8 lg:border-b-0 lg:border-r last:lg:border-r-0"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-[#111111]/30">
                  {value.number}
                </span>

                <h3 className="mt-12 font-display text-2xl font-semibold tracking-[-0.04em]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#111111]/50">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;