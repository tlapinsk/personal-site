import Link from "next/link";

import LogoMark from "../components/LogoMark";
import { writingPosts } from "./posts";

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
            Posts, notes, and essays. More coming soon.
          </p>
        </section>

        <div className="mt-12 border-t border-border" />

        <section className="py-10">
          <div className="space-y-3">
            {writingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 shadow-sm hover:bg-card-muted transition"
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
                  <div className="h-11 w-11 shrink-0 rounded-md bg-slate-100 ring-1 ring-border" />
                )}

                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-foreground">
                    {post.title}
                  </div>
                  <div className="mt-1 text-[12px] text-muted">
                    {post.dateLabel}
                    {post.readTimeLabel ? ` · Read time: ${post.readTimeLabel}` : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
