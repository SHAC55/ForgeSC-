import { motion } from "framer-motion";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 lg:py-40"
    >
      <Container>

        {/* Heading */}
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
            eyebrow="Selected work"
            title="Things we've brought to life."
            description="A few of the products and digital experiences we've designed and engineered."
          />
        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-8 lg:mt-24">

          {/* Bizezy */}
          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#111111]/15 bg-[#dce8f7]"
          >
            <div className="grid min-h-[560px] lg:grid-cols-2">

              {/* Content */}
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/50">
                      01 / Business software
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/15 bg-[#f6f1e9] transition-transform duration-500 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-16 font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    Bizezy
                  </h3>

                  <p className="mt-5 max-w-md text-base leading-7 text-[#111111]/60 sm:text-lg">
                    A business management platform designed to simplify
                    everyday operations, inventory, payments and customer
                    workflows.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {["Product", "Web App", "SaaS"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#111111]/15 px-4 py-2 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="relative min-h-[380px] overflow-hidden border-t border-[#111111]/10 bg-[#b9d4f5] lg:border-l lg:border-t-0">

                <motion.div
                  whileHover={{
                    y: -12,
                    rotate: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-[10%] top-[14%] w-[82%] overflow-hidden rounded-xl border border-[#111111]/20 bg-[#f8f8f8] shadow-[12px_12px_0px_rgba(17,17,17,0.12)]"
                >
                  {/* Browser bar */}
                  <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-white px-3">
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                  </div>

                  {/* Dashboard */}
                  <div className="p-5">
                    <div className="flex justify-between">
                      <div>
                        <div className="h-3 w-20 rounded bg-black/10" />
                        <div className="mt-2 h-6 w-32 rounded bg-black/80" />
                      </div>

                      <div className="h-8 w-8 rounded-full bg-[#f4d35e]" />
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-lg bg-[#dce8f7]" />
                      <div className="h-20 rounded-lg bg-[#f5a6a0]" />
                      <div className="h-20 rounded-lg bg-[#c7b5f5]" />
                    </div>

                    <div className="mt-5 h-32 rounded-lg bg-black/[0.04]" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-[#111111]/20 bg-[#f4d35e]"
                />

                <div className="absolute right-10 top-8 text-3xl">
                  ✦
                </div>
              </div>
            </div>
          </motion.article>

          {/* SportsHub */}
          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#111111]/15 bg-[#f5d9d5]"
          >
            <div className="grid min-h-[560px] lg:grid-cols-2">

              {/* Visual */}
              <div className="relative order-2 min-h-[380px] overflow-hidden border-t border-[#111111]/10 bg-[#f5a6a0] lg:order-1 lg:border-r lg:border-t-0">

                <motion.div
                  whileHover={{
                    rotate: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-[2rem] border-[6px] border-[#111111] bg-[#111111] p-2 shadow-[15px_15px_0px_rgba(17,17,17,0.15)]"
                >
                  <div className="overflow-hidden rounded-[1.4rem] bg-[#f6f1e9]">

                    <div className="flex items-center justify-between px-4 py-4">
                      <span className="font-display text-sm font-bold">
                        SportsHub
                      </span>

                      <span className="h-6 w-6 rounded-full bg-[#8bb8ff]" />
                    </div>

                    <div className="px-4 pb-5">

                      <div className="rounded-xl bg-[#8bb8ff] p-4">
                        <span className="text-[10px] uppercase tracking-wider text-black/50">
                          Upcoming
                        </span>

                        <p className="mt-1 font-display text-lg font-bold">
                          Football
                        </p>

                        <div className="mt-4 flex justify-between text-xs">
                          <span>12 Teams</span>
                          <span>Tomorrow</span>
                        </div>
                      </div>

                      <div className="mt-3 h-20 rounded-xl bg-black/5" />
                      <div className="mt-3 h-20 rounded-xl bg-black/5" />

                    </div>
                  </div>
                </motion.div>

                <div className="absolute left-10 top-10 text-4xl">
                  ✦
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 right-10 h-16 w-16 rounded-full border border-[#111111] bg-[#c7b5f5]"
                />
              </div>

              {/* Content */}
              <div className="order-1 flex flex-col justify-between p-7 sm:p-10 lg:order-2 lg:p-14">

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/50">
                      02 / Sports technology
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/15 bg-[#f6f1e9] transition-transform duration-500 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-16 font-display text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    SportsHub
                  </h3>

                  <p className="mt-5 max-w-md text-base leading-7 text-[#111111]/60 sm:text-lg">
                    A connected sports platform for players, organizers,
                    tournaments, venues and the communities around them.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {["Platform", "Sports", "Community"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#111111]/15 px-4 py-2 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </motion.article>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            Have a project in mind?

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Let's build it →
            </span>
          </a>
        </motion.div>

      </Container>
    </section>
  );
};

export default Work;