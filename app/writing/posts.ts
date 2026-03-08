export type WritingPost = {
  slug: string;
  title: string;
  dateLabel: string;
  readTimeLabel?: string;
  description?: string;
  heroSrc?: string;
  iconCandidates?: readonly string[];
  iconFallbackText?: string;
  body?: readonly string[];
};

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
    slug: "my-first-product-bmw-e30",
    title: "The $1 BMW That Taught Me How to Build",
    description:
      "A $1 E30, a decade of wrenching, and the lessons about constraints, systems thinking, and iteration that carried into product building.",
    dateLabel: "March 2, 2026",
    readTimeLabel: "4-5 mins",
    heroSrc: "/writing/bmw-e30-hero.jpg",
    iconCandidates: [
      "/logos/bmw.png",
    ],
    iconFallbackText: "BMW",
    body: [
      "My first car cost $1.",
      "It was a 1985 BMW 325e. Black paint that had long since lost its shine. Nearly 200,000 miles on the odometer. Clear coat cracking in the California sun. The seller wanted it gone. My dad and I wanted a project.",
      "So we handed over a dollar and towed it home.",
      "I had been fascinated by cars for as long as I can remember. My parents claim the obsession started when I was two. By high school that curiosity had narrowed into something more specific: early BMWs. The E30 in particular. Boxy, mechanical, simple in a way modern cars no longer are.",
      "Owning one was exciting. But pretty quickly I realized I wanted more than just a car to drive. I wanted to understand it.",
      "That curiosity turned into a ten-year project between my dad and me.",
      "What started as a tired daily driver slowly evolved into something entirely different. We replaced suspension components, refreshed bushings, upgraded brakes, and gradually started tackling bigger projects. Eventually we decided to swap the engine.",
      "Then we did it again.",
      "At one point we bought an M52 that looked great on paper but turned out to have a cracked head. Discoveries like that tend to happen late at night, after the engine is already sitting in the garage and you’ve convinced yourself the hard part is over.",
      "After a few false starts we finally landed on the setup that transformed the car: an S50 3.0L inline-six from a 1995 BMW M3, paired with the ZF five-speed from the same donor car and an E28 3.25 limited-slip differential.",
      "It turned the car into something completely different ([first start video](https://www.youtube.com/watch?v=aFySZJQ2e7E)).",
      "The swap required a lot of small adaptations. The engine harness had to be modified to talk to the original chassis wiring. Cooling needed upgrades. Clearance around the brake booster got tight enough that we swapped in a smaller E21 unit. We added an aluminum Mishimoto radiator, refreshed drivetrain components, and gradually dialed everything in until the car felt cohesive.",
      "And because we live in California, we did something that made the project a little more interesting.",
      "We made it smog legal.",
      "The car eventually became California BAR certified, which meant the engine swap had to meet emissions standards and pass inspection. Headers, catalytic converters, ECU configuration, documentation. Everything had to line up.",
      "No shortcuts.",
      "In hindsight, that constraint probably made the project better. It forced us to think carefully about every decision instead of just chasing horsepower.",
      "Over time the car became a collection of thoughtful upgrades. Bilstein shocks with H&R Sport springs. Stainless brake lines and a UUC big brake kit with Wilwood rotors and Hawk pads. A short shifter. A refreshed drivetrain. Style 5 wheels wrapped in Yokohamas.",
      "None of it happened quickly.",
      "Most of the progress came in small increments. Weekend projects. Late nights. Summer breaks during college when I was interning at Samsung working on their Smart TV team. During the week I was learning how new products get built inside a company. On weekends I was under the hood of the BMW trying to figure out why the idle wasn’t quite right.",
      "The two worlds didn’t feel that different.",
      "Cars have a way of teaching you patience. You make a change, test it, and see what happens. Sometimes it works. Sometimes you realize you misunderstood the problem entirely and start over. Every fix reveals the next thing that needs attention.",
      "You learn quickly that complex systems rarely fail in obvious ways.",
      "Years later, when I started working on software products, that process felt strangely familiar. The tools were different, but the mindset was the same. Break problems into smaller pieces. Pay attention to how systems interact. Iterate until things start to feel right.",
      "The BMW was never truly finished.",
      "Even after fresh black paint, euro bumpers, and a dialed-in drivetrain, there were always small things left. The moonroof worked most of the time but needed a gentle push upward. The windshield wiper motor had personality. The A/C was ready to go but could probably use a recharge.",
      "At some point you realize that projects like this are never really done. They just reach a point where they feel whole enough.",
      "I owned the car for a little over ten years before eventually selling it. By then I had bought a 2011 BMW 335d as a daily driver and life was pulling me in new directions.",
      "Letting the E30 go was harder than I expected. That car represented thousands of hours with my dad. It held every mistake we made, every breakthrough, every late night spent solving problems together in the garage.",
      "In the end I sold it to a high schooler.",
      "He reminded me a lot of myself at that age. Curious, excited, already thinking about what he might change or improve. When he looked at the car he didn’t just see a finished project. He saw a starting point.",
      "Which felt exactly right.",
      "That $1 BMW ended up teaching me a lot about building things. Not just cars, but anything complex enough to require patience, curiosity, and a willingness to keep iterating.",
      "These days I build products instead of engines.",
      "But the mindset hasn’t changed much.",
      "Start with a vision. Respect the constraints. Keep learning how the system works. And keep turning the wrench until it starts to feel right.",
    ],
  },
] as const;

validateWritingPosts(writingPosts);
