export const metadata = {
  title: "About — Tim Lapinskas",
  description: "About Tim Lapinskas",
};

export default function AboutPage() {
  const workingOn = [
    {
      title: "Charles Schwab",
      href: "https://www.schwab.com/",
      description: "Financial services + AI platform work.",
    },
    // {
    //   title: "Bristol Myers Squibb",
    //   href: "https://www.bms.com/",
    //   description: "Agentic frameworks and knowledge/data platforms.",
    // },
  ] as const;

  const pastWork = [
    {
      role: "Group Product Manager",
      company: "Bristol Myers Squibb",
      years: "2020–2025",
    },
    {
      role: "Product Manager",
      company: "OneLegal (an Infotrack company)",
      years: "2020",
    },
    {
      role: "Full Stack Developer & Data Engineer",
      company: "Amy's Kitchen",
      years: "2017–2020",
    },
    {
      role: "Product Manager",
      company: "Renovate America",
      years: "2016",
    },
    {
      role: "Product + Growth",
      company: "LINE",
      years: "2014–2016",
    },
    {
      role: "Intern",
      company: "Samsung",
      years: "2012, 2013",
    },
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        <section className="pt-10 sm:pt-12">
          <div className="space-y-6 text-[13px] leading-6 text-muted">
            <p>
              Building at the intersection of financial services and AI at
              Charles Schwab to rethink the brokerage experience and
              accelerate GenAI application development.
            </p>
            <p>
              Previously built internal platforms at Bristol Myers Squibb,
              specializing in agentic framework development and data +
              knowledge platforms. Before that, I spent time as a full stack
              developer and data engineer at Amy's Kitchen supporting business
              operations.
            </p>
            <p>
              In 2016, I quit my job, packed my life into a 40L bag, 
              and embraced a nomadic lifestyle. Having explored 20+ countries, 
              I love to travel. 

              When I'm not building, you can find me in the mountains (hiking/skiing), 
              on the golf course, tennis court, working on cars, or spending
              quality time with family and friends.
            </p>
            <p>Based in Marin County.</p>
            <p>
              Need to get in touch? You can email me or reach out via LinkedIn.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:tim.lapinskas@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm hover:bg-card-muted transition"
            >
              Email
              <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-border text-[12px] text-muted">
                ↗
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/timlapinskas/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-foreground shadow-sm hover:bg-card-muted transition"
            >
              LinkedIn
              <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-border text-[12px] text-muted">
                ↗
              </span>
            </a>
          </div>
        </section>

        <div className="mt-16" />

        <section className="py-10">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Working on
          </h2>
          <div className="mt-4 border-t border-border" />
          <div className="mt-6 space-y-6">
            {workingOn.map((item) => (
              <div key={item.title} className="space-y-1">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13px] font-medium text-foreground underline underline-offset-4 decoration-border hover:opacity-90 transition"
                >
                  {item.title}
                </a>
                <p className="text-[13px] leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4" />

        <section className="py-10">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Past Work
          </h2>
          <div className="mt-4 border-t border-border" />
          <div className="mt-6 space-y-4">
            {pastWork.map((item) => (
              <div
                key={`${item.role} ${item.company} ${item.years}`}
                className="text-[13px] font-medium text-foreground"
              >
                {item.role} at {item.company}{" "}
                <span className="text-[12px] font-normal text-muted">
                  ({item.years})
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* <footer className="pb-14 pt-6 text-[12px] text-muted">
          Always be building.
        </footer> */}
      </div>
    </main>
  );
}
