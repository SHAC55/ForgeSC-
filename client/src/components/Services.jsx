import { motion } from "framer-motion";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "Product\nEngineering",
    description:
      "We turn ideas into thoughtful, scalable products — from the first interface to production.",
    className: "bg-[#f4d35e]",
    accent: "bg-[#f6f1e9]",
  },
  {
    number: "02",
    title: "Business\nSoftware",
    description:
      "Custom software that fits the way your business actually works.",
    className: "bg-[#8bb8ff]",
    accent: "bg-[#f5a6a0]",
  },
  {
    number: "03",
    title: "Web\nApplications",
    description:
      "Fast, responsive web experiences built around real users and real outcomes.",
    className: "bg-[#c7b5f5]",
    accent: "bg-[#f4d35e]",
  },
  {
    number: "04",
    title: "MVP →\nProduction",
    description:
      "Move from rough idea to a reliable product without unnecessary complexity.",
    className: "bg-[#f5a6a0]",
    accent: "bg-[#8bb8ff]",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="border-t border-[#111111]/10 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow="What we do"
            title="Software built around the problem."
            description="We combine product thinking, design and engineering to build software that people actually want to use."
          />
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#111111]/15 p-7 sm:p-9 lg:p-10 ${service.className}`}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#111111]/50">
                  {service.number}
                </span>

                <motion.span
                  whileHover={{ rotate: 45 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/20 bg-[#f6f1e9] text-lg"
                >
                  ↗
                </motion.span>
              </div>

              {/* Title */}
              <h3 className="mt-20 whitespace-pre-line font-display text-4xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-5xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="absolute bottom-9 left-7 max-w-sm text-sm leading-6 text-[#111111]/60 sm:left-9 lg:left-10">
                {service.description}
              </p>

              {/* Decorative element */}
              <motion.div
                animate={{
                  rotate: [0, 6, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-[#111111]/15 ${service.accent}`}
              />

              {/* Small cross */}
              <motion.span
                animate={{
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-20 top-20 text-xl opacity-40"
              >
                ✦
              </motion.span>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-[#111111]/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-[#111111]/50">
              Need something different? We work from the problem first,
              not from a predefined package.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
            >
              Tell us what you're building
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;