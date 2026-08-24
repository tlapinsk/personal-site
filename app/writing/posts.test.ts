import { describe, expect, it } from "vitest";

import {
  archivedWritingPosts,
  writingArchive,
  writingPosts,
} from "./posts";

describe("writing post data", () => {
  it("includes the current essay and migrated WordPress posts", () => {
    expect(writingPosts).toHaveLength(41);
    expect(writingPosts[0]).toMatchObject({
      slug: "my-first-product-bmw-e30",
      dateLabel: "March 2, 2026",
    });
  });

  it("keeps every writing post available in the archive", () => {
    expect(archivedWritingPosts).toHaveLength(writingPosts.length);
    expect(writingArchive.map((group) => group.year)).toEqual([
      "2026",
      "2018",
      "2017",
      "2016",
    ]);
  });

  it("groups archive posts by year with the expected counts", () => {
    expect(
      Object.fromEntries(
        writingArchive.map((group) => [group.year, group.posts.length]),
      ),
    ).toEqual({
      "2026": 1,
      "2018": 4,
      "2017": 22,
      "2016": 14,
    });
  });

  it("decodes migrated WordPress titles and strips HTML from excerpts", () => {
    const migratedPost = writingPosts.find(
      (post) => post.slug === "update-completion-of-udacitys-sdcnd-and-beyond",
    );

    expect(migratedPost).toBeDefined();
    expect(migratedPost?.title).toBe(
      "Update: Completion of Udacity’s SDCND and Beyond",
    );
    expect(migratedPost?.description).toContain(
      "It’s been a while since I posted an update",
    );
    expect(migratedPost?.description).not.toMatch(/<[^>]+>|&#\d+;/);
  });

  it("does not contain duplicate slugs", () => {
    const slugs = writingPosts.map((post) => post.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
