const SectionHeading = ({
  eyebrow,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full border border-[#111111] bg-[#f4d35e]" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]/55">
            {eyebrow}
          </p>
        </div>
      )}

      <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#111111]/55 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;