export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
