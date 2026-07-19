export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignment}`}>
      <div className="h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
