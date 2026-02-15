export const metadata = {
  title: "Work — Tim Lapinskas",
  description: "Selected work",
};

export default function WorkPage() {
  const items = [
    {
      title: "AI Platform at Charles Schwab",
      description:
        "Building systems and tooling to accelerate safe GenAI application development.",
    },
    {
      title: "Agentic Frameworks at Bristol Myers Squibb",
      description:
        "Core primitives and governance patterns for agentic workflows, plus data and knowledge foundations.",
    },
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        <section className="pt-10 sm:pt-12">
          <h1 className="text-2xl font-semibold tracking-tight">Select Work</h1>
          <p className="mt-4 text-[13px] leading-6 text-muted">
            A few projects and themes I’ve spent time on. More coming soon.
          </p>
        </section>

        <div className="mt-12 border-t border-border" />

        <section className="py-10">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.title} className="space-y-1">
                <div className="text-[13px] font-medium text-foreground">
                  {item.title}
                </div>
                <div className="text-[13px] leading-6 text-muted">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

