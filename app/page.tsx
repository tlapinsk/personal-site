import Avatar from "./components/Avatar";
import LogoMark from "./components/LogoMark";

export default function Home() {
  const building = [
    {
      title: "Charles Schwab",
      description:
        "Rethinking the brokerage experience and leading AI Platform development.",
      href: "#selected-work",
      cta: "Learn more",
      ctaHref: "https://www.schwab.com/",
      logoCandidates: [
        "/logos/charles-schwab.png",
        "/logos/charles-schwab.jpg",
        "/logos/charles-schwab.svg",
      ],
    },
    {
      title: "Bristol Myers Squibb",
      description:
        "Oversaw portfolio of apps. Agentic AI Framework, Data & Knowledge Platforms, etc.",
      href: "#selected-work",
      cta: "Learn more",
      ctaHref: "https://www.bms.com/",
      logoCandidates: [
        "/logos/BMS.jpeg",
      ],
    },
    {
      title: "Amy's Kitchen",
      description:
        "Full stack web development and data pipelines.",
      href: "#selected-work",
      cta: "Learn more",
      ctaHref: "https://www.amys.com/",
      logoCandidates: [
        "/logos/amys.jpeg",
      ],
    },
    {
      title: "LINE",
      description:
        "Supported growth of the LINE app in the US (and abroad) and worked on new bets.",
      href: "#selected-work",
      cta: "Learn more",
      ctaHref: "https://line.me/",
      logoCandidates: [
        "/logos/line.png",
      ],
    },
  ] as const;

  const writing = [
    {
      title: "My First Product: Building a BMW E30",
      date: "Coming soon",
      href: "#writing",
      logoCandidates: [
        "/logos/bmw.png",
      ],
    },
    // {
    //   title: "From Engineer to Product Leader",
    //   date: "Coming soon",
    //   href: "#writing",
    // },
  ] as const;

  const videos = [
    {
      title: "Building AI Platforms That Scale",
      description:
        "How to set strategy, align incentives, and build durable systems that compound over time.",
      href: "#videos",
      cta: "Watch",
    },
    {
      title: "From Data to Decisions",
      description:
        "Practical approaches to building research and data platforms that teams actually adopt.",
      href: "#videos",
      cta: "Watch",
    },
    {
      title: "Operating Models for GenAI",
      description:
        "Governance patterns that balance velocity with safety, compliance, and real business outcomes.",
      href: "#videos",
      cta: "Watch",
    },
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        {/* Header */}
        <header className="pt-10 sm:pt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar
                srcCandidates={[
                  "/profile.jpg",
                ]}
                alt="Tim Lapinskas"
                size={56}
                fallbackText="Tim Lapinskas"
                shape="rounded"
                className="shrink-0"
              />

              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Tim Lapinskas
              </h1>
            </div>

            <div className="space-y-6 text-[14px] leading-6 text-muted">
              <p>
                Building at the intersection of financial services and AI at
                Charles Schwab to rethink the brokerage experience and
                accelerate GenAI application development.
              </p>
              <p>
                Previously built internal platforms at Bristol Myers Squibb,
                specializing in agentic framework development and data +
                knowledge platforms. Before that, I spent time as a full stack
	                developer and data engineer at Amy&apos;s Kitchen supporting their
	                business operations. Started my career in Product working on
	                the LINE mobile app and new bets.
	              </p>
              <p>I love working on compelling products with talented teams.</p>
              <p>Based in San Francisco.</p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <a
                href="/about"
                className="inline-block text-[13px] text-muted underline underline-offset-4 decoration-border hover:text-foreground transition"
              >
                More about me →
              </a>
              <a
                href="mailto:tim.lapinskas@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm hover:bg-card-muted transition"
              >
                Email
                <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-border text-[12px] text-muted">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </header>

        <div className="mt-12 border-t border-border" />

        {/* Building */}
        <section className="py-10">
          <h2 className="text-sm font-semibold tracking-tight">Select Experience</h2>

          <div className="mt-4 space-y-3">
            {building.map((item) => (
              <div
                key={item.title}
                className="group block rounded-lg border border-border bg-card px-4 py-3 shadow-sm hover:bg-card-muted transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <LogoMark
                      srcCandidates={item.logoCandidates}
                      alt={`${item.title} logo`}
                      size={36}
                      fallbackText={item.title}
                      className="shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-foreground">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-[12px] text-muted leading-5 line-clamp-2">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <a
                    href={item.ctaHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm group-hover:bg-background transition"
                  >
                    {item.cta}
                    <span className="text-muted">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Writing */}
        <section id="writing" className="py-10">
          <h2 className="text-sm font-semibold tracking-tight">Writing</h2>

          <div className="mt-4 space-y-2">
            {writing.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-card-muted transition"
              >
                {"logoCandidates" in post ? (
                  <LogoMark
                    srcCandidates={post.logoCandidates}
                    alt={`${post.title} logo`}
                    size={40}
                    fallbackText="BMW"
                    className="shrink-0"
                  />
                ) : (
                  <div className="h-10 w-10 shrink-0 rounded-md bg-slate-100 ring-1 ring-border" />
                )}
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-foreground">
                    {post.title}
                  </div>
                  <div className="mt-0.5 text-[12px] text-muted">
                    {post.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/*
        // Videos (disabled for now)
        <section id="videos" className="py-10">
          <h2 className="text-sm font-semibold tracking-tight">Videos</h2>

          <div className="mt-4 space-y-3">
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.href}
                className="group block rounded-lg border border-border bg-card px-4 py-3 shadow-sm hover:bg-card-muted transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-12 w-20 shrink-0 rounded-md bg-slate-100 ring-1 ring-border" />
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-foreground">
                        {video.title}
                      </div>
                      <div className="mt-0.5 text-[12px] text-muted leading-5 line-clamp-2">
                        {video.description}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm group-hover:bg-background transition">
                    {video.cta}
                    <span className="text-muted">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />
        */}

        {/* About */}
        {/* <section id="about" className="py-10">
          <h2 className="text-sm font-semibold tracking-tight">About</h2>

          <div className="mt-4 space-y-4 text-[13px] leading-6 text-muted">
            <p>
              I began my career in software engineering and data systems, then
              moved into product leadership where I focus on platforms that
              help researchers and decision-makers access knowledge more
              effectively.
            </p>
            <p>
              I care about elegant system design, clear incentives, and
              long-term thinking — especially where AI reshapes how teams
              build, discover, and decide.
            </p>
          </div>
        </section> */}
      </div>
    </main>
  );
}
