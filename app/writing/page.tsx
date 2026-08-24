import Link from "next/link";

import LogoMark from "../components/LogoMark";
import { writingArchive, writingPosts } from "./posts";

export const metadata = {
  title: "Writing — Tim Lapinskas",
  description: "Blog posts and essays by Tim Lapinskas.",
};

export default function WritingIndexPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        <section className="pt-10 sm:pt-12">
          <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
          <p className="mt-4 text-[13px] leading-6 text-muted">
            Posts, notes, essays, and the full historical archive from my old
            WordPress blog.
          </p>
        </section>

        <div className="mt-12 border-t border-border" />

        <div className="lg:relative">
          <aside className="mt-10 rounded-xl border border-border bg-card p-4 shadow-sm lg:absolute lg:right-full lg:top-10 lg:mr-10 lg:mt-0 lg:w-[260px]">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
              Archive
            </h2>
            <div className="mt-5 space-y-2">
              {writingArchive.map((group, index) => (
                <details
                  key={group.year}
                  className="group rounded-lg border border-transparent open:border-border open:bg-card-muted"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-2 py-2 text-[13px] font-semibold text-foreground transition hover:bg-card-muted [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] text-muted transition group-open:rotate-90">
                        ›
                      </span>
                      {group.year}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-normal text-muted">
                      {group.posts.length}
                    </span>
                  </summary>
                  <div className="space-y-1 px-2 pb-3 pt-1">
                    {group.posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/writing/${post.slug}`}
                        className="block rounded-md px-2 py-1.5 text-[12px] leading-5 text-muted transition hover:bg-card hover:text-foreground"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </aside>

          <section className="py-10">
            <div className="space-y-3">
              {writingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 shadow-sm transition hover:bg-card-muted"
                >
                  {post.iconCandidates?.length ? (
                    <LogoMark
                      srcCandidates={post.iconCandidates}
                      alt=""
                      size={44}
                      fallbackText={post.iconFallbackText ?? post.title}
                      className="shrink-0"
                    />
                  ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[11px] font-medium text-slate-500 ring-1 ring-border dark:bg-neutral-900 dark:text-neutral-400">
                      {new Date(post.date).getUTCFullYear()}
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="text-[13px] font-medium text-foreground">
                      {post.title}
                    </div>
                    <div className="mt-1 text-[12px] text-muted">
                      {post.dateLabel}
                      {post.readTimeLabel
                        ? ` · Read time: ${post.readTimeLabel}`
                        : null}
                    </div>
                    {post.description ? (
                      <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-muted">
                        {post.description}
                      </p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
