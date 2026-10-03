import wordpressPostsJson from "./wordpress-posts.json";

export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  readTimeLabel?: string;
  description?: string;
  heroSrc?: string;
  heroAspectRatio?: string;
  iconCandidates?: readonly string[];
  iconFallbackText?: string;
  body?: readonly string[];
  contentHtml?: string;
  sourceUrl?: string;
};

type WordpressPost = {
  ID: number;
  date: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  URL: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, codePoint: string) =>
      String.fromCodePoint(Number.parseInt(codePoint, 10)),
    )
    .replace(/&#x([\da-f]+);/gi, (_, codePoint: string) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(html: string) {
  return decodeHtmlEntities(
    html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
  );
}

function toReadTimeLabel(html: string) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 225));

  return `${minutes} ${minutes === 1 ? "min" : "mins"}`;
}

function toDateLabel(date: string) {
  return dateFormatter.format(new Date(date));
}

const wordpressPosts = (wordpressPostsJson.posts as WordpressPost[]).map(
  (post): WritingPost => ({
    slug: post.slug,
    title: decodeHtmlEntities(post.title),
    description: stripHtml(post.excerpt),
    date: post.date,
    dateLabel: toDateLabel(post.date),
    readTimeLabel: toReadTimeLabel(post.content),
    contentHtml: post.content,
    sourceUrl: post.URL,
  }),
);

function assertUnique<T>(
  items: readonly T[],
  toKey: (item: T) => string,
  label: string,
) {
  const seen = new Set<string>();
  for (const item of items) {
    const key = toKey(item);
    if (seen.has(key)) throw new Error(`Duplicate ${label}: ${key}`);
    seen.add(key);
  }
}

function validateWritingPosts(posts: readonly WritingPost[]) {
  assertUnique(posts, (p) => p.slug, "writing post slug");

  for (const post of posts) {
    if (!post.slug.trim()) throw new Error("Writing post slug is empty");
    if (!post.title.trim()) throw new Error(`Writing post title is empty (${post.slug})`);
    if (!post.dateLabel.trim())
      throw new Error(`Writing post dateLabel is empty (${post.slug})`);

    if (post.body) {
      for (const [index, paragraph] of post.body.entries()) {
        if (!paragraph.trim()) {
          throw new Error(`Empty paragraph in post body (${post.slug}, index ${index})`);
        }
      }
    }
  }
}

export const writingPosts: readonly WritingPost[] = [
  {
    slug: "early-days",
    title: "Early days",
    description: "Brakes, refreshing hoses, air intake",
    date: "2026-10-03T00:00:00+00:00",
    dateLabel: "October 3, 2026",
    readTimeLabel: "2 mins",
    heroSrc: "/writing/early-e30-pic-2.jpg",
    heroAspectRatio: "4 / 3",
    iconCandidates: ["/logos/bmw.png"],
    iconFallbackText: "BMW",
    contentHtml: `
      <p>We took the car home using our friend's trailer. I remember the ride distinctly because my dad’s buddy had the oddest driving style. He would floor it and then let up on the gas on the whole ride home on highway 101. I had never experienced that before. I digress.</p>
      <p>The car needed work. Cosmetically and under the hood. We started on the mechanical side to get the car running, passing smog, and re-registered. Getting it running again was our first goal. The most obvious areas that we needed to address were:</p>
      <ol>
        <li>Battery</li>
        <li>Oil change</li>
        <li>Brakes</li>
        <li>Cracked rubber intake (original 1985 rubber was 20+ years old!)</li>
        <li>New tires</li>
      </ol>
      <p>The most distinct issue that I remember during this time period was the rubber intake. This piece was causing all sorts of issues since air was escaping when pressing down on the accelerator. We got our order in at <a href="http://pelicanparts.com" target="_blank" rel="noreferrer noopener">pelicanparts.com</a> and got to work.</p>
      <p>I’m having trouble recollecting the exact order of the work but remember getting the car up and running again with relatively few issues. We got the car smogged and then finally took it to the DMV to get the title officially transferred and re-registered. The DMV was maybe a 10 minute car ride from our house.</p>
      <p>After spending an inordinate amount of time at the DMV, we had everything we needed to be on our way. And on our trip home, we ran into our next major problem. As I pulled up to a stop sign and pressed in the clutch, the pedal got stuck to the floor. I couldn’t get it into gear, nor accelerate. My dad had me pull over and we quickly switched spots.</p>
      <p>He somehow got it into second gear and was able to feather the clutch out to baby our way home. The seal on the slave cylinder had ruptured. That became our next big project along with a long list of miscellaneous upgrades.</p>
      <p>The car was finally nearing baseline just as I was gearing up for my drivers test. Timing couldn’t have been any better. While I didn’t use the car for my drivers test, it was ready for my first when I finally passed my test. I couldn’t have been any more stoked to have a car (so fortunate) and the freedom to spend time with friends, get to school/work, etc.</p>
      <p>Little did I know that this was just the beginning of the story for the car. More to come soon.</p>
    `,
  },
  {
    slug: "my-first-product-bmw-e30",
    title: "The $1 BMW - A Decade in the Making",
    description:
      "How a $1 driveway find became a ten-year garage adventure with my dad.",
    date: "2026-08-24T00:00:00+00:00",
    dateLabel: "August 24, 2026",
    readTimeLabel: "2 mins",
    heroSrc: "/writing/bmw-e30-hero.jpg",
    iconCandidates: [
      "/logos/bmw.png",
    ],
    iconFallbackText: "BMW",
    body: [
      "I was about 15 and a half years old with a learner’s permit. I was fortunate to have parents who wanted to teach me how to drive, had the patience to do it with a high schooler, and had the means to help me find a first car.",
      "My dad had been hooked on early BMWs ever since owning an E30 when my sister and I were in elementary school. I still have fond memories of riding around in that car, with no idea that about a decade later I’d end up with an old BMW story of my own.",
      "Eventually, my dad sold the E30 to a friend of a friend. Unfortunately, it had a pretty short lifespan after he handed over the keys. That’s probably a story for another time. The important part is that the car got my dad hooked on early BMWs and, without me realizing it at the time, probably got me hooked too.",
      "About a decade later, we were on the hunt for my first car.",
      "One of my dad’s friends caught wind of an old BMW that a family friend had sitting in her driveway. It had been there for years. She was the original owner and had long since moved on from driving it, but nostalgia had apparently kept her from letting it go.",
      "We rolled up one day not really knowing what to expect.",
      "The car desperately needed a bath, but when we opened the hood, things looked surprisingly okay. Most of the hoses needed replacing, but the engine bay and the rest of the car seemed to be in decent shape. We hooked up a battery and got signs of life. We even managed to turn the engine over briefly.",
      "We were sold.",
      "As I helped load the car onto the trailer, my dad stayed behind talking with the owner and sorting out the paperwork. A few minutes later, he walked back toward me beaming.",
      "“How much?”",
      "One dollar.",
      "She had sold us the car for $1.",
      "We couldn’t believe it.",
      "In my dad’s eyes, it was perfect. My parents had always taught us the value of money, and this was a car we could bring back to life together. I’d learn how to work on something with my own hands, pick up skills that might stick with me for the rest of my life, and, maybe most importantly, spend a lot of time in the garage with my dad.",
      "And with that, a ten-year adventure began.",
      "More to come.",
    ],
  },
  ...wordpressPosts,
] as const;

export const archivedWritingPosts = writingPosts;

export const writingArchive = Object.entries(
  archivedWritingPosts.reduce<Record<string, WritingPost[]>>((archive, post) => {
    const year = new Date(post.date).getUTCFullYear().toString();
    archive[year] = [...(archive[year] ?? []), post];
    return archive;
  }, {}),
)
  .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
  .map(([year, posts]) => ({
    year,
    posts,
  }));

validateWritingPosts(writingPosts);
