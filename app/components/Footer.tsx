const GITHUB_REPO_URL = "https://github.com/tlapinsk";
const GITHUB_REPO_SITE = "https://github.com/tlapinsk/personal-site";
const LINKEDIN_URL = "https://www.linkedin.com/in/timlapinskas/";
const NAME = "Tim Lapinskas";

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.4 3 18.4 3.3 18.4 3.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9.33V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.42v6.33ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-card-muted">
      <div className="mx-auto flex max-w-[760px] flex-col gap-4 px-6 py-4 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          © {year} {NAME}
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            Built by me + Codex (
            <a
              href={GITHUB_REPO_SITE}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 decoration-border hover:text-foreground transition"
            >
              source
            </a>
            ).
          </div>
        </div>
      </div>
    </footer>
  );
}

