import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "./ui/Container";

const Products = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-[#111111]/10 py-24 sm:py-32 lg:py-40"
    >
      <Container>
        {/* Top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full border border-[#111111] bg-[#8bb8ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/55">
                Our products
              </span>
            </div>

            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Ideas we decided
              <br />
              to build ourselves.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-base leading-7 text-[#111111]/55"
          >
            We experiment, validate and build products around problems we
            believe are worth solving.
          </motion.p>
        </div>

        {/* Product showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden rounded-[2rem] border border-[#111111]/15 bg-[#111111] text-[#f6f1e9] lg:mt-24"
        >
          <div className="grid min-h-[600px] lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}
            <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-14">

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  01 / In the making
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </div>

              <div>
                <p className="mb-4 text-sm text-white/40">
                  Sports technology
                </p>

                <h3 className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  SportsHub
                </h3>

                <p className="mt-6 max-w-md text-base leading-7 text-white/50">
                  A platform we're building to make playing, organizing and
                  discovering sports easier.
                </p>

                <Link
                  to="/products/sportshub"
                  className="group/link mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm transition-all duration-300 hover:bg-[#f6f1e9] hover:text-[#111111]"
                >
                  Explore product

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative min-h-[420px] overflow-hidden bg-[#8bb8ff]">

              {/* Large typography */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -right-8 top-8 font-display text-[clamp(7rem,16vw,15rem)] font-bold leading-none tracking-[-0.1em] text-[#111111]/10"
              >
                SH
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  rotate: -8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: -4,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  rotate: 0,
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border-[7px] border-[#111111] bg-[#111111] p-2 shadow-[20px_20px_0px_rgba(17,17,17,0.15)] sm:w-[270px]"
              >
                <div className="overflow-hidden rounded-[2rem] bg-[#f6f1e9] text-[#111111]">

                  {/* Phone header */}
                  <div className="flex items-center justify-between px-5 py-5">
                    <div>
                      <p className="font-display text-base font-bold">
                        SportsHub
                      </p>

                      <p className="mt-0.5 text-[9px] uppercase tracking-wider text-black/40">
                        Find your game
                      </p>
                    </div>

                    <div className="h-8 w-8 rounded-full bg-[#f4d35e]" />
                  </div>

                  {/* Hero card */}
                  <div className="px-4">
                    <div className="rounded-2xl bg-[#c7b5f5] p-5">
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-black/40">
                        Near you
                      </p>

                      <h4 className="mt-2 font-display text-xl font-bold">
                        Football
                      </h4>

                      <div className="mt-5 flex gap-2">
                        <span className="rounded-full bg-[#f6f1e9] px-3 py-1 text-[9px]">
                          12 players
                        </span>

                        <span className="rounded-full bg-[#f6f1e9] px-3 py-1 text-[9px]">
                          2.4 km
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom cards */}
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="h-24 rounded-xl bg-[#f5a6a0]" />
                    <div className="h-24 rounded-xl bg-[#8bb8ff]" />
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 h-20 w-20 rounded-full border border-[#111111]/30 bg-[#f4d35e]"
              />

              <motion.div
                animate={{
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-10 top-24 h-14 w-14 rounded-2xl border border-[#111111]/20 bg-[#f5a6a0]"
              />

              <span className="absolute bottom-8 right-10 text-3xl text-[#111111]/50">
                ✦
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-12 flex flex-col gap-4 border-b border-[#111111]/10 pb-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#111111]/45">
            More products are currently taking shape.
          </p>

          <span className="font-display text-sm font-semibold">
            Built by ForgeSC.
          </span>
        </motion.div>
      </Container>
    </section>
  );
};

export default Products;