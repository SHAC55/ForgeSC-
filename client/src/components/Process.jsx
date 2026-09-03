import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with the problem, the people and the outcome. Before writing code, we make sure we're solving the right thing.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We turn the idea into a clear product direction — structure, experience, priorities and a practical path forward.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and engineering move together. We build the product in focused iterations, keeping quality and simplicity at the center.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We take the product into the real world, learn from it and keep improving what matters.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="border-t border-[#111111]/10 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionHeading
              eyebrow="How we work"
              title="From rough idea to something real."
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl self-end text-lg leading-8 text-[#111111]/55 lg:pb-2"
          >
            No unnecessary layers. No disappearing after the handoff.
            We stay close to the problem and move from thinking to building
            to shipping.
          </motion.p>
        </div>

        {/* Process */}
        <div className="relative mt-20 lg:mt-28">
          {/* Connecting line */}
          <div className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-[#111111]/15 lg:left-1/2 lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative lg:grid lg:grid-cols-2 lg:items-center ${
                    index !== steps.length - 1
                      ? "lg:pb-24"
                      : ""
                  }`}
                >
                  {/* Left */}
                  <div
                    className={`${
                      isEven
                        ? "lg:order-2 lg:pl-20"
                        : "lg:pr-20"
                    }`}
                  >
                    <div className="group">
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#111111]/35">
                        {step.number}
                      </span>

                      <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-md text-base leading-7 text-[#111111]/55">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center marker */}
                  <div className="absolute left-0 top-1 hidden lg:left-1/2 lg:block lg:-translate-x-1/2">
                    <motion.div
                      whileHover={{
                        scale: 1.25,
                        rotate: 45,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/20 bg-[#f6f1e9]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
                    </motion.div>
                  </div>

                  {/* Decorative side visual */}
                  <div
                    className={`mt-8 flex h-44 items-center ${
                      isEven
                        ? "lg:order-1 lg:justify-start"
                        : "lg:justify-end"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        rotate: isEven ? -3 : 3,
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`relative h-32 w-48 overflow-hidden rounded-[1.5rem] border border-[#111111]/15 ${
                        index === 0
                          ? "bg-[#f4d35e]"
                          : index === 1
                          ? "bg-[#8bb8ff]"
                          : index === 2
                          ? "bg-[#c7b5f5]"
                          : "bg-[#f5a6a0]"
                      }`}
                    >
                      {/* Abstract visual */}
                      {index === 0 && (
                        <>
                          <div className="absolute left-7 top-7 h-16 w-16 rounded-full border border-[#111111]/30 bg-[#f6f1e9]" />
                          <div className="absolute bottom-5 right-6 h-8 w-16 rounded-full border border-[#111111]/30" />
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <div className="absolute left-8 top-8 h-14 w-24 rotate-[-8deg] rounded-xl border border-[#111111]/30 bg-[#f6f1e9]" />
                          <div className="absolute bottom-4 right-6 h-7 w-7 rounded-full bg-[#f5a6a0]" />
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <div className="absolute left-8 top-6 h-20 w-12 rounded-full border border-[#111111]/30 bg-[#f4d35e]" />
                          <div className="absolute right-7 top-8 h-10 w-10 rounded-full border border-[#111111]/30" />
                        </>
                      )}

                      {index === 3 && (
                        <>
                          <div className="absolute left-7 top-7 h-14 w-14 rotate-45 rounded-xl border border-[#111111]/30 bg-[#8bb8ff]" />
                          <div className="absolute bottom-5 right-6 text-2xl">
                            ↗
                          </div>
                        </>
                      )}

                      <span className="absolute bottom-3 left-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#111111]/40">
                        ForgeSC
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 border-t border-[#111111]/10 pt-8 lg:mt-28"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-[#111111]/45">
              The process stays flexible. Every project is different, but
              the standard stays high.
            </p>

            <span className="font-display text-sm font-semibold">
              Think → Build → Ship.
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;