const interests = [
  "Building Web Applications",
  "Learning New Technologies",
  "Cloud Computing",
  "Problem Solving",
  "Reading Tech Blogs",
];

export function InterestsContent() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {interests.map((i) => (
        <span
          key={i}
          className="rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur transition-smooth hover:border-accent hover:text-accent"
        >
          {i}
        </span>
      ))}
    </div>
  );
}
