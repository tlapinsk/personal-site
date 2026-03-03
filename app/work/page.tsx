export const metadata = {
  title: "Work — Tim Lapinskas",
  description: "Selected work",
};

export default function WorkPage() {
  const items = [
    {
      title: "Charles Schwab",
      role: "Product",
      description:
        "GenAI Brokerage Experience & AI Platform: Rebuilding the brokerage experience and accelerating safe GenAI application development.",
      href: "https://www.schwabjobs.com/technology",
      imageSrc: "/work/schwab-logo.jpeg",
      imageFit: "cover",
    },
    {
      title: "Bristol Myers Squibb",
      role: "Product & Design",
      description:
        "Agentic Frameworks & Data Platforms: Core building blocks and governance patterns for agentic workflows, plus data and knowledge foundations.",
      href: "https://www.bms.com/about-us/our-company/our-technologies.html",
      imageSrc: "/work/Research_principles_AI.jpeg",
      imageFit: "contain",
    },
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        <section className="pt-10 sm:pt-12">
          <h1 className="text-2xl font-semibold tracking-tight">Select Work</h1>
          <div className="mt-6 space-y-4 text-[13px] leading-6 text-muted">
            <p>
              Building AI platforms and internal products across financial
              services and biopharma.
            </p>
            <p>
              Focused on accelerating application development with strong
              governance, reusable primitives, and practical workflows teams
              actually adopt.
            </p>
            <p>Interested in learning more?</p>
          </div>

          <div className="mt-4">
            <a
              href="mailto:tim.lapinskas@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm hover:bg-card-muted transition"
            >
              Email
              <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-border text-[12px] text-muted">
                ↗
              </span>
            </a>
          </div>
        </section>

        <div className="mt-12 border-t border-border" />

        <section className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-xl border border-border bg-card shadow-sm hover:bg-card-muted transition"
              >
                <div className="p-4">
	                  <div className="rounded-xl bg-background p-4 ring-1 ring-border">
	                    {/* eslint-disable-next-line @next/next/no-img-element */}
	                    <img
	                      src={item.imageSrc}
	                      alt=""
	                      className={
	                        "aspect-[16/10] w-full rounded-lg bg-background " +
	                        (item.imageFit === "contain"
	                          ? "object-contain"
	                          : "object-cover")
	                      }
	                    />
	                  </div>
	                </div>

                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[14px] font-medium text-foreground">
                      {item.title}
                    </div>
                    <div className="text-[12px] text-muted group-hover:text-foreground transition">
                      View →
                    </div>
                  </div>
                  <div className="mt-1 text-[12px] text-muted">{item.role}</div>
                  <div className="mt-3 text-[13px] leading-6 text-muted">
                    {item.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
