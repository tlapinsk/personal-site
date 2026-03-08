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
      companyHref: "https://www.bms.com/",
      years: "2020–2025",
    },
    {
      role: "Product Manager",
      company: "OneLegal (an InfoTrack company)",
      companyHref: "https://www.onelegal.com/",
      years: "2020",
    },
    {
      role: "Software Engineer",
      company: "Amy's Kitchen",
      companyHref: "https://www.amys.com/",
      years: "2017–2020",
    },
    {
      role: "Product Manager",
      company: "Renovate America",
      companyHref: "https://www.renovateamerica.com/",
      years: "2016",
    },
    {
      role: "Product + Growth",
      company: "LINE",
      companyHref: "https://line.me/",
      years: "2014–2016",
    },
    {
      role: "Intern",
      company: "Samsung",
      companyHref: "https://www.samsung.com/",
      years: "2012, 2013",
    },
  ] as const;

  type EducationItem = {
    school: string;
    schoolHref?: string;
    logoSrc?: string;
    degree?: string;
    years?: string;
    note?: string;
  };

  const education: readonly EducationItem[] = [
    // Example:
    // {
    //   school: "University Name",
    //   schoolHref: "https://example.edu",
    //   degree: "B.S. Computer Science",
    //   years: "2010–2014",
    //   note: "Minor in Mathematics",
    // },
    {
      school: "Cornell University",
      schoolHref: "https://business.cornell.edu/",
      logoSrc: "/logos/cornell-seal.png",
      degree: "Master of Business Administration",
      years: "2022-2024",
      note: "with Distinction (Top 10%)",
    },
    {
      school: "Pitzer College",
      schoolHref: "https://www.pitzer.edu/",
      logoSrc: "/logos/pitzer-logo.png",
      degree: "B.A. in Mathematical Economics, Minor in Media Studies",
      years: "2010–2014",
      note: "Founder of Claremont FC, Jumpstart mentor and tutor",
    },
  ];

  type InterestItem = {
    title: string;
    href?: string;
  };

  type InterestSection = {
    title: string;
    items: readonly InterestItem[];
  };

  const interests: readonly InterestSection[] = [
    {
      title: "Podcasts",
      items: [
        { title: "Founders", href: "https://podcasts.apple.com/us/podcast/founders/id1141877104" },
        { title: "Acquired", href: "https://podcasts.apple.com/us/podcast/acquired/id1050462261" },
        {
          title: "How I Built This",
          href: "https://podcasts.apple.com/us/podcast/how-i-built-this-with-guy-raz/id1150510297",
        },
      ],
    },
    {
      title: "Books",
      items: [
        { title: "Dune", href: "https://www.amazon.com/Dune-Chronicles-Book-1/dp/0441013597" },
        { title: "Ender's Game", href: "https://www.amazon.com/Enders-Game-Ender-Quintet-1/dp/1250773024" },
        { title: "Meditations", href: "https://www.amazon.com/Meditations-Penguin-Classics-Marcus-Aurelius/dp/0140449337" },
      ],
    },
    {
      title: "Movies",
      items: [
        {
          title: "There Will Be Blood",
          href: "https://en.wikipedia.org/wiki/There_Will_Be_Blood",
        },
        {
          title: "Interstellar",
          href: "https://en.wikipedia.org/wiki/Interstellar_(film)",
        },
        {
          title: "Arrival",
          href: "https://en.wikipedia.org/wiki/Arrival_(film)",
        },
      ],
    },
    {
      title: "Sports",
      items: [{ title: "Golf, tennis, skiing" }],
    },
  ];

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
              developer and data engineer at Amy&apos;s Kitchen supporting business
              operations.
            </p>
            <p>
              In 2016, I quit my job, packed my life into a 40L bag, 
              and embraced a nomadic lifestyle. Having explored 20+ countries, 
              I love to travel. 

              When I&apos;m not building, you can find me in the mountains (hiking/skiing), 
              on the golf course, tennis court, working on cars, or spending
              quality time with family and friends.
            </p>
            <p>Based in San Francisco.</p>
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
                className="text-[13px] font-normal text-foreground"
              >
                {item.role} at{" "}
                <a
                  href={item.companyHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-4 decoration-border hover:opacity-90 transition"
                >
                  {item.company}
                </a>{" "}
                <span className="text-[12px] font-normal text-muted">
                  ({item.years})
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4" />

        <section className="py-10">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Education
          </h2>
          <div className="mt-4 border-t border-border" />

          <div className="mt-6 space-y-4">
            {education.length > 0 ? (
              education.map((item) => (
                <div
                  key={`${item.school} ${item.degree ?? ""} ${item.years ?? ""}`}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 pt-[2px]">
                    {item.logoSrc ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.logoSrc}
                          alt={`${item.school} logo`}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-md bg-background object-contain ring-1 ring-border"
                        />
                      </>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="h-10 w-10 rounded-md bg-background ring-1 ring-border"
                      />
                    )}
                  </div>

                  <div className="min-w-0 space-y-1">
                    {item.schoolHref ? (
                      <a
                        href={item.schoolHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-[13px] font-medium text-foreground underline underline-offset-4 decoration-border hover:opacity-90 transition"
                      >
                        {item.school}
                      </a>
                    ) : (
                      <div className="text-[13px] font-medium text-foreground">
                        {item.school}
                      </div>
                    )}

                    {(item.degree || item.years) && (
                      <div className="text-[13px] leading-6 text-muted">
                        {item.degree}
                        {item.degree && item.years ? " · " : ""}
                        {item.years}
                      </div>
                    )}

                    {item.note && (
                      <div className="text-[13px] leading-6 text-muted">
                        {item.note}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-[13px] leading-6 text-muted">
                Add your education here.
              </p>
            )}
          </div>
        </section>

        <div className="mt-4" />

        <section className="py-10">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Interests
          </h2>
          <div className="mt-4 border-t border-border" />

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {interests.map((section) => (
              <div key={section.title} className="space-y-2">
                <div className="text-[13px] font-medium text-foreground">
                  {section.title}
                </div>
                {section.items.length > 0 ? (
                  <ul className="space-y-1 text-[13px] leading-6 text-muted">
                    {section.items.map((item) => (
                      <li key={`${section.title}:${item.title}`}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline underline-offset-4 decoration-border hover:opacity-90 transition"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-[13px] leading-6 text-muted">
                    Add a few favorites here.
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
