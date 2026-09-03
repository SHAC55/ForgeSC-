import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const Terms = () => {
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
              Terms
              <br />
              <span className="text-[#111111]/25">of Use.</span>
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
                  01. Acceptance
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  By accessing or using the ForgeSC website, you agree to
                  these Terms of Use. If you do not agree with these terms,
                  please do not use the website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  02. Our services
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  ForgeSC provides software development, product development,
                  web application development, and related technology
                  services. Specific project terms, deliverables, timelines,
                  and fees will be agreed separately with each client.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  03. Website content
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  Content on this website is provided for general informational
                  purposes. While we aim to keep information accurate and
                  current, we do not guarantee that every piece of content is
                  complete, accurate, or up to date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  04. Intellectual property
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  Unless otherwise stated, the ForgeSC name, branding, website
                  design, written content, graphics, and other original
                  materials are owned by or licensed to ForgeSC and may not be
                  reproduced without permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  05. Client projects
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  Ownership and usage rights for software, designs, source
                  code, assets, and other project deliverables will be
                  determined by the agreement applicable to the specific
                  project.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  06. Limitation of liability
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  To the extent permitted by applicable law, ForgeSC will not
                  be responsible for indirect, incidental, or consequential
                  losses arising from the use of this website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  07. Changes
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  We may update these Terms of Use from time to time. Any
                  changes will be reflected on this page with an updated
                  revision date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  08. Contact
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-[#111111]/60">
                  Questions regarding these terms can be sent to{" "}
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

export default Terms;