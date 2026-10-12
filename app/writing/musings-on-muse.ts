export const musingsOnMuseHtml = `
<p>It’s been a little over a month since Muse launched. Pretty sure I stumbled upon it during my daily check-in on <a href="http://techmeme.com" target="_blank" rel="noreferrer noopener">techmeme.com</a>. I’ve been wanting to dive deeper into rolling my own harness, personal agent, and/or spinning up an <a href="https://openclaw.ai/" target="_blank" rel="noreferrer noopener">OpenClaw instance</a> but just haven’t had the time between work and everything else going on.</p>

<p>So why not try a “free” version of said product. Might as well give it a go. I remember downloading, logging in (super easy as you’d expect), and being surprised by how cute Jolly is. <a href="https://www.businessinsider.com/meta-muse-jolly-ai-mascots-cuteness-2026-10" target="_blank" rel="noreferrer noopener">That might be by design</a>. It’s surprising how quickly a “cute” AI can shift your perspective. ChatGPT’s competitor dots seem to be taking a similar approach (<a href="https://openai.com/index/introducing-dots/" target="_blank" rel="noreferrer noopener">see them here</a>). I feel much more at ease using Muse with Jolly sitting at the top, blinking and turning its head. It reminds me of my time at LINE and their cast of characters that took Asia by a storm. Maybe the US is finally having its moment in this regard (10 years late ofc). I’ll talk more about my actual usage later, but I think it’s an interesting path that these organizations are starting to take to make their systems feel more approachable. It’ll be especially important in a time where <a href="https://www.cnbc.com/2026/10/09/the-ai-election-wall-street-braces-for-midterms-impact-on-data-centers.html" target="_blank" rel="noreferrer noopener">data centers are causing quite a stir in the upcoming midterms</a> while sentiment is waning on AI (at least in the US according to <a href="https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/" target="_blank" rel="noreferrer noopener">Pew Research Center</a> and <a href="https://news.gallup.com/poll/712751/americans-cool-toward.aspx" target="_blank" rel="noreferrer noopener">Gallup</a>).</p>

<h2>First Impressions</h2>

<p>Let’s dive into the product a bit more though. I was met by the following onboarding:</p>

<figure class="post-screenshot">
  <a href="/writing/2026-10-11/Onboarding.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Muse’s onboarding screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Onboarding.PNG" alt="Muse introduces its capabilities and asks what to call the assistant" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Muse’s onboarding</figcaption>
</figure>

<p>I dunno if it’s the inner millennial in me or if I’m just getting old but I haven’t been keen to connect any AI services to my life yet. ChatGPT has been asking me to connect my financial life for a few months now and it just feels too intrusive. I really wish they’d let me connect a single folder as well in Google Drive (as opposed to full unfettered access). I should probably just spin up separate accounts to play around with everything while we wait to see if <a href="https://community.openai.com/t/feature-request-granular-google-drive-permissions-for-chatgpt-integration/1252390" target="_blank" rel="noreferrer noopener">OpenAI does anything about this open feature request</a>.</p>

<p>Complaints and digressions aside, I did not connect my calendar or any of the non-default apps to Muse. The 3 bullets felt very well thought through though. Just enough to get started but not overwhelming. I do wonder if they should have put the app connector bullet last or followed up separately with a note about privacy (hopefully I didn’t gloss over that if it did pop up). That may have changed my mind but I’m still quite skeptical given all of the security concerns AI has posed in 2026 as models have begun breaching everything under the sun <a href="https://www.nytimes.com/2026/10/09/technology/anthropic-rogue-ai-agents.html" target="_blank" rel="noreferrer noopener">[1]</a> <a href="https://openai.com/index/hugging-face-incident-and-the-road-ahead/" target="_blank" rel="noreferrer noopener">[2]</a>. If you have another perspective, please do share!</p>

<p>My one-line summary of what this app does at this stage would be: “Your virtual personal assistant.”</p>

<p>It’s clearly being marketed as a productivity tool. The holy grail of simplifying people’s lives by taking action on their behalf and freeing up time for more living (or whatever you might want to use your free time for).</p>

<figure class="post-screenshot post-screenshot--wide">
  <a href="/writing/2026-10-11/Muse_Marketing.png" target="_blank" rel="noreferrer noopener" aria-label="Open Muse’s positioning screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Muse_Marketing.png" alt="Muse marketing page describing its personal assistant features" width="2874" height="1530" loading="lazy" decoding="async" />
  </a>
  <figcaption>Muse’s positioning</figcaption>
</figure>

<p>They also seem to be <a href="https://about.fb.com/news/2026/09/introducing-muse-small-business/" target="_blank" rel="noreferrer noopener">pitching it to small businesses</a>. And going <a href="https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/" target="_blank" rel="noreferrer noopener">all in on Enterprise</a>. As are OpenAI and Anthropic of course. We might be truly seeing the pie expand in front of our eyes - just like cloud did in the 2010s and into the 2020s (likely into the 2030s and beyond now).</p>

<p>I’m curious to see how it all plays out. It feels we’re on the cusp of agents truly being useful. Maybe entering a hybrid era of human + AI before agents truly take over. I have mixed feelings on the latter and hope humans have a role in shaping product development for eternity but we'll see what the future brings.</p>

<h2>Feature Deep Dive</h2>

<p>As I started exploring the rest of the app, I remember feeling like the app was pretty “empty” initially. The feed was particularly dry. It feels like there is an opportunity to use your interests from Instagram, Threads, or Facebook to pre-populate. Maybe that would be a bit “creepy,” but it could be a way to delight users as well. Show the power of the interconnectedness of Meta’s social graph in a not so intrusive way. I’m sure they could find an elegant solution here.</p>

<p>Moving on to the Ideas tab, I remember being pleasantly surprised at the power of Muse out of the box. I mean just look at this long list:</p>

<section class="post-gallery" aria-label="Muse Ideas screenshots">
  <p id="muse-ideas-help" class="post-gallery-help">Swipe or scroll to explore all seven screenshots. Use arrow keys when the gallery is focused, or open any image at full size.</p>
  <div class="post-gallery-track" role="region" aria-label="Muse Ideas gallery" aria-roledescription="carousel" aria-describedby="muse-ideas-help" tabindex="0"><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_1.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 1 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_1.PNG" alt="Muse Ideas tab, screenshot 1 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 1 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_2.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 2 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_2.PNG" alt="Muse Ideas tab, screenshot 2 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 2 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_3.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 3 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_3.PNG" alt="Muse Ideas tab, screenshot 3 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 3 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_4.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 4 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_4.PNG" alt="Muse Ideas tab, screenshot 4 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 4 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_5.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 5 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_5.PNG" alt="Muse Ideas tab, screenshot 5 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 5 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_6.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 6 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_6.PNG" alt="Muse Ideas tab, screenshot 6 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 6 of 7</figcaption>
</figure><figure class="post-screenshot">
  <a href="/writing/2026-10-11/Ideas_7.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Ideas · 7 of 7 screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Ideas_7.PNG" alt="Muse Ideas tab, screenshot 7 of 7" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Ideas · 7 of 7</figcaption>
</figure></div></section>

<p>It was a bit overwhelming to say the least. I felt like I was trying to pick from the <a href="https://www.thrillist.com/eat/nation/cheesecake-factory-menu-explained" target="_blank" rel="noreferrer noopener">Cheesecake Factory menu</a>. I didn’t even end up picking from one of the options but it was cool to see the depth and breadth of its abilities. Maybe not all that surprising given how broad of a surface area AI assistants are trying to cover - i.e. do it all.</p>

<p>The Goals tab was a nice touch as well. It shows some insight into Muse’s creators to put Goals at the forefront of the app experience. ChatGPT is more centered on open ended chats, <a href="https://help.openai.com/en/articles/10169521-projects-in-chatgpt" target="_blank" rel="noreferrer noopener">Projects</a>, <a href="https://help.openai.com/en/articles/20001052-using-library-to-manage-files-in-chatgpt" target="_blank" rel="noreferrer noopener">Library</a>, etc. It seems like Meta is truly hoping that it will support your ambitions - across all facets of your life. Whether I want Meta to be my defacto or go to assistant is to be determined. But this shows the level of ambition that Meta has for Muse. It also shows some insight into <a href="https://www.wsj.com/tech/ai/alexandr-wang-muse-meta-efae7659" target="_blank" rel="noreferrer noopener">Alexandr Wang</a> and <a href="https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs" target="_blank" rel="noreferrer noopener">Meta’s Superintelligence Labs</a> have been up to since Meta went on a spending spree last summer (<a href="https://www.wired.com/story/mark-zuckerberg-meta-offer-top-ai-talent-300-million/" target="_blank" rel="noreferrer noopener">hint: $$$$$$$$$$</a>).</p>

<p>One other random tidbit that caught my eye. Meta chose to have a main chat and side chats. I found that decision to be a bit intriguing and I need to give it a bit more time. It’s a very opinionated decision. Muse is a pitched as your friend (ala DMs) and that you might have separate chats to explore other topics. They’re treating Muse like a single person in your contact book with the option to do more. I’m not sure how I feel about this decision. Maybe I’m just too used to ChatGPT/GitHub Copilot’s new chat approach but it’s interesting. I’m also super curious how they handle long running context in their harness. There must be some pretty sweet things going on under the hood.</p>

<p>Last note on that front is that I’m curious if they’ll extend Muse to be multi-agent or if Muse is truly your one and only agent. A single agent interface keeps things super simple for consumers but you’d have to imagine they have sub-agents / skills handling specific tasks. That’s all been abstracted away from the user in an elegant way. Curious how Dots will handle this as well - especially the main chat vs. side chat UX.</p>

<h2>Soul</h2>

<p>Clicking on Jolly opens up the engine and history behind your personal agent. You can see what your agent has been up to while you might’ve been away. Might just be my own thick skin but it took me a second to realize that was the purpose of the to do list tab.</p>

<figure class="post-screenshot">
  <a href="/writing/2026-10-11/Actions.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open Muse’s activity screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Actions.PNG" alt="The activity view showing what Muse has been working on" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>Muse’s activity</figcaption>
</figure>

<p>I’m a fan of the Approvals tab. It’s nice to see an audit history of your approvals. The Browser tab is also an interesting touch. You can watch Muse work or even control the browser yourself. Not really sure what the purpose of that would be unless they think it’ll help train their computer use models but interesting either way. Scheduled is a de facto feature of all AI apps these days - seems like that’s a must have at this point.</p>

<p>The fingerprint tab caught my attention the most. It was fun seeing Meta put the Soul and Memory documents so front and center.</p>

<figure class="post-screenshot">
  <a href="/writing/2026-10-11/Fingerprint.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open The personal agent files screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Fingerprint.PNG" alt="Muse’s personal agent files, including Soul and Memory" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>The personal agent files</figcaption>
</figure>

<p>Along with the date they were last updated. I wonder how they chose the design for each of them too. The purple is fitting along with the heart. Memory being yellow (I think it’s yellow) is an interesting choice. [Edit: Turns out they rotate colors. Very cool.] Opening up each file gives a lot of insight into how Meta is trying to direct their agents as well. I mean check out the default SOUL.md file screenshot below:</p>

<figure class="post-screenshot">
  <a href="/writing/2026-10-11/Soul.PNG" target="_blank" rel="noreferrer noopener" aria-label="Open SOUL.md screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Soul.PNG" alt="Muse’s SOUL.md document describing the assistant’s guiding principles" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>SOUL.md</figcaption>
</figure>

<blockquote class="post-principles"><p>“Be genuinely helpful, not performatively helpful.”</p><p>“Have opinions”</p><p>“Be resourceful before asking”</p><p>“You’re a guest in someone’s life”</p></blockquote>

<p>I feel like these should be de facto asks or principles for anyone who steps into a corporate role as well. Moving over to MEMORY.md, it’s cool to see how Meta is thinking about memory architecture. Or at least what we can see on the surface and take at face value. I have to imagine that their full memory architecture is a bit more robust but maybe this was really just it for the initial launch. I have a feeling they have some short-term memory modules under the hood as well and that this just exposes the long-term memory.</p>

<p>And I’ll be curious how it evolves if I use it more going forward. Currently, there are only Facts, Preferences, and Commitments. Pretty simple. We’ll see how things look in a few months!</p>

<figure class="post-screenshot">
  <a href="/writing/2026-10-11/Memory.png" target="_blank" rel="noreferrer noopener" aria-label="Open MEMORY.md screenshot at full size (new tab)">
    <img src="/writing/2026-10-11/Memory.png" alt="Muse’s MEMORY.md document with facts, preferences, and commitments" width="1206" height="2622" loading="lazy" decoding="async" />
  </a>
  <figcaption>MEMORY.md</figcaption>
</figure>

<p>One aside. Why are they exposing .md files? Maybe they think most folks are familiar but I almost guarantee most of the public aren’t. The target demographic might be more technically inclined at this point in time, but I would expect this to shift in the future. Just make it an editable page or setting and don’t call out the file type. It’s a layer of abstraction and simplicity that would cause less potential confusion for the general public (if and when it grows to that base).</p>

<p>I’d also like to have a way to easily import memory. I can copy and paste my memory file from ChatGPT or Claude, but Meta could have made it easier to share. Or maybe they want people to start from scratch. That might just be a choice to allow Muse to start from a blank slate. Fun to think about and weigh the thinking behind some of these smaller choices.</p>

<h2>Usage &amp; What’s Next for Muse</h2>

<p>I haven’t spent a considerable time using Muse in my first month after downloading. My go-to seems to still be ChatGPT for whatever reason. I am keen to try Dots to see how it compares but only pay for the ChatGPT Plus plan, so we’ll see if I end up upgrading to give it a go. Or maybe OpenAI will open it up for lower tiers at some point with usage limits like Meta has for Muse.</p>

<p>I can count on one hand the number of times I’ve used Muse. It seems to have done a bit of work for me in the background but I haven’t turned on notifications and haven’t been particularly drawn to opening it up unprompted. So there is some work to do to hook me in further clearly.</p>

<p>Maybe part of it is my own shift in behavior and how I think about how AI fits in my life. Maybe another aspect of it is the Product and brands behind these services themselves. These organizations keep pitching a gloomy and uncertain future - especially when it comes to security. Most likely for regulatory and market capture purposes. While at the same time attempting to embed it in every facet of our life. To be ever reliant on it for thinking, doing, business, etc.</p>

<p>We’ll see if the early buzz wears off. It seems to have been met with a bit of fanfare but <a href="https://x.com/hntrbrkmedia/status/2108611863919632524" target="_blank" rel="noreferrer noopener">growth is slowing</a>. Also to my surprise, Threads growth and usage was much stronger. I truly forgot how much of the Zeitgeist Threads captured when it first launched. Maybe Zeitgeist is a bit of a stretch here but you get what I mean.</p>

<p>Meta has its work cut out for itself. In the consumer space, <a href="https://www.reuters.com/technology/chatgpt-app-hits-1-billion-monthly-active-users-record-time-data-shows-2026-06-02/" target="_blank" rel="noreferrer noopener">ChatGPT hit 1B MAU over the summer</a> (<a href="https://a16z.com/100-gen-ai-apps-7/" target="_blank" rel="noreferrer noopener">more data on this here</a>). Not that ChatGPT and Muse are a 1:1 comparison, in fact they’re not. But Dots is a competitor and I’m sure OpenAI has big plans for the personal agent space. Every single one of these players also must be thinking about reinventing their business models. Business model innovation is going to be a must to pay off the massive capex spend they’ve all undertaken in the last few years and are committed to in the years upcoming. Meta has historically funded loss leading business lines (cough cough Oculus and Metaverse), and they should, given how healthy Instagram and Facebook’s ad revenues are.</p>

<p>We’ll see how far OpenAI and Anthropic can take things. Maybe enterprise becomes the growth engine while consumer is the laggard. Or maybe ads truly do take off as usage continues to grow in the consumer space. <a href="https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/" target="_blank" rel="noreferrer noopener">OpenAI already claims to have hit $1B in ARR</a> (sketchy metric I know). Imagining a future where ads are embedded directly in chat or voice based responses is a little scary. The amount of knowledge these organizations are going to have on their consumers is wild. We might already be experiencing it without knowing it.</p>

<h2>Public Reactions</h2>

<p>Reactions have been mixed to say the least. While usage and growth was strong early on, it’s elicited some strong negative sentiment. In particular, <a href="https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/" target="_blank" rel="noreferrer noopener">Amazon blocked Muse from shopping</a> and some folks have been pretty outspoken about not using it as well <a href="https://www.threads.com/@yvettenicolebrown/post/DeXUIYFD-Dj/do-not-use-muse-by-meta-and-please-beg-your-friends-not-to-if-you-opt-out-but/" target="_blank" rel="noreferrer noopener">[1]</a> or calling out the building of “dossiers of friends/family” <a href="https://www.ibtimes.co.uk/meta-muse-ai-profiles-users-social-circles-1824205" target="_blank" rel="noreferrer noopener">[2]</a> like I hinted at earlier in this post. And a <a href="https://www.threads.com/@matt.j.robb/post/DdxwAJnDhNy" target="_blank" rel="noreferrer noopener">YouTuber claims Muse mishandled a Facebook Marketplace negotiation</a> (lol).</p>

<p>Not all sentiment is negative but I’m a bit skeptical. I’m guessing Meta’s marketing budget is pretty hefty seeing as they’re already running prime time ads <a href="https://www.ispot.tv/ad/Sdgn/muse-ai-that-hustles-for-you-training-song-by-rick-ross" target="_blank" rel="noreferrer noopener">[1]</a> <a href="https://www.ispot.tv/ad/SIIt/muse-vacation-song-by-rick-ross" target="_blank" rel="noreferrer noopener">[2]</a> <a href="https://www.ispot.tv/ad/SdXb/muse-hustling" target="_blank" rel="noreferrer noopener">[3]</a>. Check out a few reviews <a href="https://finance.yahoo.com/technology/ai/articles/gave-metas-muse-tool-3-130000247.html" target="_blank" rel="noreferrer noopener">here</a>, <a href="https://www.instagram.com/reel/DePTkwVOfwM/" target="_blank" rel="noreferrer noopener">here</a>, and <a href="https://www.businessinsider.com/father-uses-meta-muse-kids-quiz-study-tool-2026-10" target="_blank" rel="noreferrer noopener">here</a>.</p>

<p>Time will tell where Muse heads. Some folks are bullish that Muse may never need ads, utilizing merchant transaction fees, subscription tiers, and more to monetize. <a href="https://www.barrons.com/articles/muse-ai-meta-stock-tokens-cost-2fb755af" target="_blank" rel="noreferrer noopener">Others aren’t so sure that will work out.</a> Guess we’ll see.</p>

<p>There’s no doubt that Zuck is aiming to build out a brand new ecosystem centered around glasses. They’re yet to own the glass so to speak (shame on you LG) and Muse is already a major part of those plans. Let’s see what Apple, Google, and OpenAI have in store.</p>
`;
