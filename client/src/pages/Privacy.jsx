import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#111111]">
      <Container>
        <section className="pb-24 pt-32 sm:pt-40 lg:pt-48">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-[#111111]/45 transition-colors hover:text-[#111111]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back home
            </Link>

            <p className="mt-14 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/40">
              Legal
            </p>

            <h1 className="mt-6 font-display text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Privacy
              <br />
              <span className="text-[#111111]/25">Policy.</span>
            </h1>

            <p className="mt-8 text-sm text-[#111111]/45">
              Last updated: September 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mt-20 max-w-3xl border-t border-[#111111]/10 pt-12"
          >
            <div className="space-y-14">
              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  01. Introduction
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  ForgeSC respects your privacy. This Privacy Policy explains
                  how we collect, use, and protect information when you visit
                  our website or communicate with us about our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  02. Information we collect
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  When you contact us or submit an enquiry, we may collect
                  information such as your name, email address, company name,
                  project details, and any information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  03. How we use information
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  We use the information you provide to respond to enquiries,
                  understand project requirements, provide our services, and
                  communicate with you regarding potential or existing work.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  04. Information sharing
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  We do not sell your personal information. Information may
                  only be shared with service providers when reasonably
                  necessary to operate our website, communicate with you, or
                  deliver requested services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  05. Data security
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  We take reasonable measures to protect information submitted
                  through our website. However, no internet transmission or
                  storage system can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  06. Your choices
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  You may contact us if you would like to request information
                  about the personal data we hold about you or ask us to
                  correct or delete information where applicable.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  07. Contact
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  If you have questions about this Privacy Policy, contact us
                  at{" "}
                  <a
                    href="mailto:hello@forgesc.com"
                    className="font-medium text-[#111111] underline underline-offset-4"
                  >
                    hello@forgesc.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </section>
      </Container>
    </main>
  );
};

export default Privacy;