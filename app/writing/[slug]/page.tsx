import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { writingPosts } from "../posts";

function renderParagraphWithLinks(text: string) {
  const nodes: ReactNode[] = [];
  const mdLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const urlRegex = /https?:\/\/[^\s)]+/g;

  let cursor = 0;
  for (const match of text.matchAll(mdLinkRegex)) {
    const label = match[1] ?? "";
    const url = match[2] ?? "";
    const index = match.index ?? 0;

    if (index > cursor) nodes.push(text.slice(cursor, index));

    nodes.push(
      <a
        key={`md-${url}-${index}`}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="underline underline-offset-4 decoration-border hover:text-foreground transition"
      >
        {label}
      </a>,
    );

    cursor = index + match[0].length;
  }

  const remaining = text.slice(cursor);
  if (remaining) {
    let lastIndex = 0;
    for (const match of remaining.matchAll(urlRegex)) {
      const url = match[0];
      const index = match.index ?? 0;

      if (index > lastIndex) nodes.push(remaining.slice(lastIndex, index));

      nodes.push(
        <a
          key={`url-${url}-${index}-${cursor}`}
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 decoration-border hover:text-foreground transition"
        >
          {url}
        </a>,
      );

      lastIndex = index + url.length;
    }

    if (lastIndex < remaining.length) nodes.push(remaining.slice(lastIndex));
  }

  return nodes.length ? nodes : text;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Writing — Tim Lapinskas" };
  return {
    title: `${post.title} — Tim Lapinskas`,
    description: post.description ?? `Writing by Tim Lapinskas: ${post.title}`,
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">
        <section className="pt-10 sm:pt-12">
          <Link
            href="/writing"
            className="text-[12px] text-muted underline underline-offset-4 decoration-border hover:text-foreground transition"
          >
            ← Back to All Posts
          </Link>

          {post.heroSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.heroSrc}
              alt=""
              className="mt-8 aspect-[16/9] w-full rounded-xl object-cover ring-1 ring-border"
            />
          ) : null}

          <h1 className="mt-10 text-3xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <div className="mt-3 text-[12px] text-muted">
            {post.dateLabel}
            {post.readTimeLabel ? ` · Read time: ${post.readTimeLabel}` : null}
          </div>
        </section>

        <div className="mt-12 border-t border-border" />

        <section className="py-10">
          <article className="space-y-6 text-[14px] leading-7 text-muted">
            {(post.body ?? []).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{renderParagraphWithLinks(paragraph)}</p>
            ))}
          </article>
        </section>
      </div>
    </main>
  );
}
