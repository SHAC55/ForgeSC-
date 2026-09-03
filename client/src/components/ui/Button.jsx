import { Link } from "react-router-dom";

const Button = ({
  children,
  to = "/",
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[#111111] text-[#f6f1e9] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#f4d35e]",

    secondary:
      "border border-[#111111]/20 bg-transparent text-[#111111] hover:-translate-y-0.5 hover:bg-[#111111] hover:text-[#f6f1e9]",
  };

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center justify-center
        rounded-full
        px-6 py-3.5
        text-sm font-medium
        transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Button;