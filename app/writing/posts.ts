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

export const writingPosts: readonly WritingPost[] = [
  {
    slug: "my-first-product-bmw-e30",
    title: "The $1 BMW That Taught Me How to Build",
    description:
      "A $1 E30, a decade of wrenching, and the lessons about constraints, systems thinking, and iteration that carried into product building.",
    dateLabel: "March 3, 2026",
    readTimeLabel: "2 mins",
    heroSrc: "/writing/bmw-e30-hero.jpg",
    iconCandidates: [
      "/logos/bmw.png",
    ],
    iconFallbackText: "BMW",
    body: [
      "My first car cost $1.",
      "It was a 1985 BMW 325e . Faded black paint. 196,000 miles. Clear coat cracking like dry lakebed. The seller wanted it gone. My dad and I wanted a challenge. We handed over a dollar and towed home what would become a ten-year apprenticeship in building.",
      "I had been obsessed with cars since I was two. That obsession narrowed into early BMWs, especially the E30. There was something honest about them. Mechanical. Unfiltered. When I bought mine, I did not want to restore it to stock. I wanted to transform it.",
      "Owning it was step one. Reimagining it was the real work.",
      "Over the next decade, my dad and I replaced, rebuilt, or upgraded nearly every meaningful system in that car. We started with an engine swap. Then another. At one point, we bought an M52 that turned out to have a cracked head. That mistake cost us months. We tore it back out.",
      "Eventually we installed what the car should have had from the beginning: an S50 3.0L inline-six from a 1995 BMW M3 ([first start video](https://www.youtube.com/watch?v=aFySZJQ2e7E)). We paired it with the ZF 5-speed from the same donor car, refreshed the seals, installed a new flywheel and clutch, and mated it to an E28 3.25 limited-slip differential. It was not just about more power. It was about balance. The gearing had to match the engine’s character. The shifter feel had to be tight. The drivetrain had to feel cohesive.",
      "We modified the engine harness to plug into the original chassis harness. We ran an OBD1 506 silver label ECU with a flashed chip. We installed an aluminum Mishimoto radiator, an E21 brake booster for clearance, and an oil pump nut secured with Loctite because we understood what happens when you do not. We fabricated solutions when parts did not exist. We hunted junkyards for connectors and trim pieces. We learned to read parts diagrams like blueprints.",
      "And because we live in California, we did something harder than just make it fast.",
      "We made it legal.",
      "The car was BAR certified and smog legal. That meant headers, cats, ECU configuration, and documentation all had to align. No shortcuts. No creative interpretations. If you build in a regulated environment, you understand how much discipline that requires. It is easy to bolt parts together. It is harder to do it within constraints and still deliver performance.",
      "That constraint shaped how I think about product.",
      "Anyone can sketch a bold roadmap. The real work is shipping something powerful within technical, regulatory, and organizational boundaries. The S50 swap was my first lesson in compliance as a design input, not an afterthought.",
      "Beyond the engine, we upgraded suspension with Bilstein shocks and H&R Sport springs. We replaced control arms, bushings, tie rods, stabilizer links. We installed a UUC big brake kit with Wilwood rotors and Hawk pads to match the added power. We ran stainless brake lines. We solved brake wobble. We refined pedal feel.",
      "Every change had downstream effects. More power meant more braking. Stiffer suspension exposed weak bushings. A different differential ratio changed highway drivability. Nothing existed in isolation.",
      "That systems thinking is the core of product management.",
      "A feature is never just a feature. It touches infrastructure, UX, analytics, support, compliance. The temptation is to treat changes as modular. Reality is interconnected. The E30 punished us every time we forgot that.",
      "We also learned sequencing. You do not paint a car before finishing mechanical work. You do not tune before stabilizing cooling. You do not declare victory after the first successful startup. The first time we turned the key after the S50 swap, it ran. That felt like success. It was not. We still had idle issues, cooling tweaks, small electrical gremlins.",
      "Iteration was not philosophical. It was survival.",
      "During those years, I was interning at Samsung working on Smart TVs. By day, I was learning how products are scoped and launched. By night and on weekends, I was under the hood chasing root causes. At my next job, I felt a familiar pull. I did not just want to manage products. I wanted to understand what was happening under the hood of web and mobile apps. So I learned to code. I became a software engineer. I managed cloud infrastructure. I kept building.",
      "The throughline was not cars or code. It was curiosity plus craft.",
      "The BMW was never “done.” Even after fresh black paint, euro bumpers, Style 5 wheels, a 318is interior, and a perfectly matched drivetrain, there was always something left. A moonroof that needed a nudge. A wiper motor that was functional but not perfect. A/C that needed a recharge.",
      "At some point, you decide to ship.",
      "I sold the car after buying a 2011 BMW 335d as a daily driver. Letting it go was harder than I expected. That car held ten years of Saturdays with my dad. It held mistakes, arguments, breakthroughs, and the quiet satisfaction of solving problems that once felt impossible.",
      "I sold it to a high schooler who saw what I once saw. Not just a car, but a platform. A starting point. A canvas.",
      "That $1 BMW taught me that building is not about perfection. It is about vision constrained by reality. It is about sequencing, tradeoffs, and relentless iteration. It is about knowing when to keep refining and when to let go.",
      "Today I build products instead of engines. The tools are different. The mindset is the same.",
      "Start with a vision. Respect the constraints. Sweat the details. Iterate until it feels right.",
      "Then ship.",
    ],
  },
] as const;
