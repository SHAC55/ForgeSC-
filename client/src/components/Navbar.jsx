import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Already on homepage
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Go to homepage first
    navigate(`/#${sectionId}`);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-[-0.06em]"
        >
          ForgeSC
          <span className="text-[#f4d35e]">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {/* <Link
            to="/"
            className="text-sm text-[#111111]/60 transition-colors hover:text-[#111111]"
          >
            Home
          </Link> */}

          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="text-sm text-[#111111]/60 transition-colors hover:text-[#111111]"
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="text-sm text-[#111111]/60 transition-colors hover:text-[#111111]"
          >
            Services
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("products")}
            className="text-sm text-[#111111]/60 transition-colors hover:text-[#111111]"
          >
            Products
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-sm text-[#111111]/60 transition-colors hover:text-[#111111]"
          >
            About
          </button>
        </div>

        {/* Contact */}
        <a
          href="mailto:foragesc@gmail.com"
          className="rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-[#f6f1e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222222]"
        >
          Start a project
        </a>
        
      </nav>
    </motion.header>
  );
};

export default Navbar;