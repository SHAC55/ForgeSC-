import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "./ui/Container";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#111111]">
      <Container>
        <section className="pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to="/"
              className="group mb-10 inline-flex items-center gap-2 text-sm text-[#111111]/45 transition-colors hover:text-[#111111]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back home
            </Link>

            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full border border-[#111111] bg-[#f4d35e]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/45">
                Start a project
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl font-display text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Let's build
              <br />
              <span className="text-[#111111]/30">
                something useful.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#111111]/55">
              Tell us what you're building, what you're trying to solve,
              or simply where you're stuck.
            </p>
          </motion.div>
        </section>

        {/* Contact */}
        <section className="border-t border-[#111111]/10 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
                Get in touch
              </p>

              <a
                href="mailto:hello@forgesc.com"
                className="mt-5 block font-display text-2xl font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60"
              >
                hello@forgesc.com
              </a>

              <p className="mt-10 max-w-sm text-sm leading-6 text-[#111111]/45">
                Tell us what you have in mind. We'll get back to you
                within 1–2 business days.
              </p>

              <div className="mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/35">
                  We can help with
                </p>

                <ul className="mt-5 space-y-3 text-sm text-[#111111]/55">
                  <li>→ Business software</li>
                  <li>→ Web applications</li>
                  <li>→ MVP development</li>
                  <li>→ Product development</li>
                  <li>→ Existing product improvements</li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-8"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border-b border-[#111111]/20 bg-transparent py-4 text-lg outline-none placeholder:text-[#111111]/25 transition-colors focus:border-[#111111]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full border-b border-[#111111]/20 bg-transparent py-4 text-lg outline-none placeholder:text-[#111111]/25 transition-colors focus:border-[#111111]"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full border-b border-[#111111]/20 bg-transparent py-4 text-lg outline-none placeholder:text-[#111111]/25 transition-colors focus:border-[#111111]"
                />
              </div>

              {/* Project */}
              <div>
                <label
                  htmlFor="project"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  What are you looking to build?
                </label>

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  required
                  className="w-full border-b border-[#111111]/20 bg-[#f6f1e9] py-4 text-lg outline-none focus:border-[#111111]"
                >
                  <option value="" disabled>
                    Select one
                  </option>

                  <option value="business-software">
                    Business software
                  </option>

                  <option value="web-app">
                    Web application
                  </option>

                  <option value="mvp">
                    MVP / New product
                  </option>

                  <option value="existing-product">
                    Existing product
                  </option>

                  <option value="other">
                    Something else
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  Approximate budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full border-b border-[#111111]/20 bg-[#f6f1e9] py-4 text-lg outline-none focus:border-[#111111]"
                >
                  <option value="" disabled>
                    Select one
                  </option>

                  <option value="under-1l">Under ₹1L</option>
                  <option value="1-3l">₹1L – ₹3L</option>
                  <option value="3-7l">₹3L – ₹7L</option>
                  <option value="7l-plus">₹7L+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]/40"
                >
                  Tell us about it
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="What are you trying to build?"
                  className="w-full resize-none border-b border-[#111111]/20 bg-transparent py-4 text-lg outline-none placeholder:text-[#111111]/25 transition-colors focus:border-[#111111]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-4 rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-[#f6f1e9] transition-all duration-300 hover:-translate-y-1"
              >
                Send enquiry

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4d35e] text-[#111111] transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </button>
            </motion.form>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Contact;