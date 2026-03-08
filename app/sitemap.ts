import type { MetadataRoute } from "next";

import { writingPosts } from "./writing/posts";

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  return (raw ? raw.replace(/\/$/, "") : "http://localhost:3000");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/work`, lastModified },
    { url: `${baseUrl}/writing`, lastModified },
    ...writingPosts.map((post) => ({
      url: `${baseUrl}/writing/${post.slug}`,
      lastModified,
    })),
  ];

  return routes;
}

