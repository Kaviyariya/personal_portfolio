export function PageHeading({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-up">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h1>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
