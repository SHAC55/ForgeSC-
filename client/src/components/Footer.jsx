import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import Container from "./ui/Container";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-[#111111]/10 bg-[#111111] text-[#f6f1e9]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Top */}
          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                to="/"
                className="font-display text-4xl font-bold tracking-[-0.06em]"
              >
                ForgeSC
                <span className="text-[#f4d35e]">.</span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
                Software for businesses.
                <br />
                Products of our own.
              </p>
            </motion.div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 sm:gap-x-20">
              {/* Explore */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  Explore
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/55">
                  <Link
                    to="/"
                    className="transition-colors hover:text-white"
                  >
                    Home
                  </Link>

                  <button
                    type="button"
                    onClick={() => scrollToSection("work")}
                    className="w-fit text-left transition-colors hover:text-white"
                  >
                    Work
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="w-fit text-left transition-colors hover:text-white"
                  >
                    Services
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection("products")}
                    className="w-fit text-left transition-colors hover:text-white"
                  >
                    Products
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection("about")}
                    className="w-fit text-left transition-colors hover:text-white"
                  >
                    About
                  </button>
                </div>
              </div>

              {/* Connect */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  Connect
                </p>

                <div className="flex flex-col gap-3 text-sm text-white/55">
                  <Link 
                    to="mailto:foragesc@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    Email
                  </Link>

                  <a
                    href="https://www.linkedin.com/company/bizezy/?viewAsMember=true"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/forgesc_/"
                    className="transition-colors hover:text-white"
                  >
                    Instagram
                  </a>

                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Start */}
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  Start
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Start a project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Large wordmark */}
          <div className="mt-20 overflow-hidden border-t border-white/10 pt-10 sm:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(5rem,18vw,17rem)] font-bold leading-[0.75] tracking-[-0.09em] text-white/[0.055]"
            >
              FORGE
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row">
            <p>
              © {new Date().getFullYear()} ForgeSC. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="transition-colors hover:text-white/60"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-white/60"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;