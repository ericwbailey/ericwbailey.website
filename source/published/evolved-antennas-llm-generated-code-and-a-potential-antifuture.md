---
layout: "layouts/post.njk"
title: Evolved antennas, LLM-generated code, and a potential antifuture
source: ericwbailey.website
excerpt: "Being open and transparent is a radical strength, not a weakness"
date: 2026-05-11
year: 2026
tags:
  - Accessibility
  - Approach
  - Cognition
  - Inclusion
  - Internet
  - LLMs
  - Subversion
attribution: "Thank you to <a href='https://edwardloveall.com/'>Edward Loveall</a> for his feedback."
share:
  facebookDescription: "An evolved antenna, a chaotic, spidery collection of wires extending from a small base."
  twitterDescription: "An evolved antenna, a chaotic, spidery collection of wires extending from a small base."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 8
---

I think about evolved antennas a lot.

If you’re not familiar, an [evolved antenna](https://link.springer.com/chapter/10.1007/0-387-23254-0_18) is created when you set an evolutionary algorithm on the task of producing a structure that is as efficient at its intended function as possible. Past that there’s no human input, the algorithm just does its thing. It:

1. Modifies elements of the initial design,
2. Evaluates how well the design would perform according to a set of requirements,
3. Adds or discards the changes accordingly, then
4. Repeats until a success threshold has been achieved via iteration.

Some evolved antenna practices also create a series of designs in parallel. They then pit the outputs against each other as a final layer of proving out efficacy.

This process mimics [natural selection](https://en.wikipedia.org/wiki/Natural_selection). Here, mutations that are beneficial to surviving in an environment are passed through generations. It also creates absolutely wild, alien outputs:

<figure
  role="figure"
  aria-label="Human-Competitive Results: Evolved Antennas for Deployment on NASA’s Space Technology 5 Misson - SlideServe.">
  <img
    alt="A slide with two photos of small evolved antennas, each placed next to a quarter for a size comparison. The antennas each have a chaotic, tangled burst of wires extending from a small cylindrical base. The first antenna looks more haphazard, like an 1940s abstract art sculpture made in response to a Jazz trumpet solo. The second antenna looks like a drunk spider on its back attempting to frantically claw its way out of its predicament. The first antenna is labeled, 'Non branching: ST5-4W-03. The second antenna si labeled, 'Branching: ST5-3-10.' The slide is labeled, 'NASA: 1st Set of Evolved Antennas. Evolvable Systems, Ames Research Center.'"
    loading="lazy"
    decoding="async"
    src="{{ '/img/posts/evolved-antennas-llm-generated-code-and-a-potential-antifuture/evolved-antennas.jpeg' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.slideserve.com/menora/human-competitive-results-evolved-antennas-for-deployment-on-nasa-s-space-technology-5-misson">Human-Competitive Results: Evolved Antennas for Deployment on NASA’s Space Technology 5 Misson - SlideServe</a>.
  </figcaption>
</figure>

An evolved antenna looks the way it does because **the algorithm that creates it is focused on the efficiency of the artifact it produces**. It has no concept of what antennas are “supposed to look like”. That’s a bias that is inherent to us humans.

## Structural limitations

I also have a light fascination with early programming. Specifically, the creativity involved with how programmers accommodated limitations inherent with the medium.

Early mainframe programmers were constrained to the point where there would be [a limit on the number of characters you could use](https://en.wikipedia.org/wiki/EBCDIC), which led to **cryptic names that oftentimes required a physical dictionary to look up the human-friendly meaning of something**.

There was also a long tail of this practice even after the hardware-imposed restrictions of the mainframe era. This was likely built on muscle memory, “best practice”, and a [DRY mindset](https://en.wikipedia.org/wiki/Don't_repeat_yourself) taken too far. Fortunately, contemporary practice—where computational power is far more luxurious—favors clarity over brevity.

## Profusion and proliferation

Nowadays function and variable names are long and luxurious. We’re inundated with text. Flooded by it, even.

In fact, we’ve gotten so good at using text that we built software to produce it for us, on demand and at volume.

There have been some good things to come out of this development if you make digital experiences for a living. Concerns such as documentation, design systems, styleguides, and other vital-yet-neglected areas of the practice are suddenly critical for operations.

It turns out that written words that help to explain things and create consistency are extremely important. Who knew!

Here, I must confess: As someone who has long-favored these downplayed and underfunded areas of the trade, I have found myself ugly laughing at this tragicomic phenomenon. I also know that being able to feel this smug ruefulness is on borrowed time.

Returning to this sudden explosion of text content—as well as [other factors](https://www.bloodinthemachine.com/p/how-big-tech-is-force-feeding-us)—we now have words for everyone who wants, or may eventually need them.

Well, anyone who can pay.

## Decoupling and system gaming

Many contemporary LLM-providing companies operate under a model where **you pay them proportionate to how much computational power you utilize**. This is sold via tokens, which is an abstract representation of a segment of content to be processed.

Money is something people are reluctant to part ways with. This creates incentives to get creative. I’ve read all sorts of clever techniques, tricks, optimizations, and hacks people have created to lower token expenditure.

The one that stands out to me most is [the caveman prompt](https://github.com/JuliusBrussee/caveman). It promises to “[cut] 65% of tokens by talking like caveman”. Of note is its ability to specify the level of “grunt”:

<img
  alt="A before and after comparison table with two rows. The before cell of the first row reads, 'Normal Claude (69 tokens). The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object.' The after cell of the first row reads, 'Caveman Claude (19 tokens). New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo.' The before cell of the second row reads, 'Normal Claude. Sure! I'd be happy to help you with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix.' The after cell of the second row reads, 'Bug in auth middleware. Token expiry check use < not <=. Fix:'. The footer of the table reads, 'Same fix. 75% less word. Brain still big.' Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/evolved-antennas-llm-generated-code-and-a-potential-antifuture/caveman-prompt.png' | url }}" />

## Futurecasting

The caveman prompt is a signal.

Right now we live in a space where full, complete words and sentences are still desirable for us humans, and LLMs work with it. This space is in competition with a few intractable realities:

- LLM companies are continuing to operate at a loss. [The real cost of using their services may manifest sooner than later](https://www.wheresyoured.at/ais-economics-dont-make-sense/), as promises of profitability need to be kept.
- Human language is an inefficient medium for transmitting data, and largely lacks the precision needed to describe the logic that powers contemporary software. Consider concepts like [Robot Interaction Language](https://en.wikipedia.org/wiki/Robot_Interaction_Language) and [ggwave](https://github.com/ggerganov/ggwave) as ways we’ve attempted to address this fact.
- LLM-based product development is focused more on what is produced compared to how it is made.

Given these considerations, one can imagine a future where **human-friendly language is a liability**. The forces of cost and efficiency are difficult to overcome, especially if results can be generated with minimal effort.

One can also imagine that code returns to its infant state of being terse, cryptic, and near-impenetrable due to efforts to optimize how LLMs operate. Here, human language sets the parameters and LLMs act as the dictionary.

This LLM optimization might even go a step further. In the pursuit of efficiency its code output becomes **a language completely decoupled from a human’s ability to follow**.

In the torrential downpour that is everyone saying the quiet part out loud, the CEO of OpenAI’s [horrifying comment about selling our intelligence back to us](https://disconnect.blog/make-em-dumb-sell-em-smarts/) is a raindrop worth paying attention to.

This possible outcome may mean that this time around there is no dictionary to reference. Or there is a dictionary, but it is **sold back to you at a premium**. It’s easy to foresee a proprietary language that only a LLM vendor can compile, decode, and otherwise change—it’s not like there’s a lack of [prior art](https://www.mathworks.com/company/aboutus/contact_us/req_quote.html?s_tid=abt_lp_rq).

## Preventative measures

Science fiction author [Vernor Vinge](https://www.isfdb.org/cgi-bin/ea.cgi?61) wrote a brilliant book titled [<cite>Rainbow’s End</cite>](https://bookshop.org/p/books/rainbows-end-vernor-vinge/813e94014206a82a?ean=9781250841506&next=t). In it, a character named Robert Gu is cured of his Alzheimer’s and brought into a post-[singularity](https://en.wikipedia.org/wiki/Technological_singularity) world. Gu—a former English professor and avowed technophile—struggles to adapt to a radically changed world.

In one notable scene from the book, Gu rages when dismantling a device. He finds all its internal components are sealed and labeled, informing him that there are “no user-serviceable parts within”.

Code may be poised to follow this direction. Imagine a world where attempting to open up any piece of software reveals **a dense forest of evolved antennas, each constructed using inscrutable,** [**black box**](https://skiplabs.io/blog/codegen_as_compiler#the-uncomfortable-part) **language**.

Gu's outburst of anger is valid. It stems from understanding that **intentionally preventing someone from making modifications is a method of enacting control**.

Another notable part of the future <cite>Rainbow’s End</cite> posits is the mass-proliferation of augmented reality. Here, people can access different “layers” of perception, with paid tiers of information. Looking with your naked eyes is free, but **the more information you want about something the more you need to spend**.

## Craft and cost

As someone who [cares](https://rachelandrew.co.uk/archives/2026/04/21/the-importance-of-people-who-care/) about [craft](https://www.chrbutler.com/craft-is-untouchable), I am deeply worried about this potential future. **How something is built is just as important as the results it produces**—reference [LLMs' bias towards producing inaccessible code](https://conesible.de/wab/) as an immediate concern.

Inaccessible output by default is a case of implicit and unwitting control, in that it **shapes who can—and cannot—use the web**. The companies that provide these models could hypothetically be compelled to address that.

However, the much-needed regulation needed to prevent this systemic digital exclusion is unlikely to happen with the current status quo. Or more realistically, will happen in a way that is [more in-line with the regressive path the United States is currently traveling down](https://mashable.com/article/white-house-ai-model-oversight).

Some here may argue that these systems are performing better than how human developers have, and that will increase as LLM-generated code becomes more prevalent. Here, know that:

- As of now, [homepage accessibility errors](https://webaim.org/projects/million/#errors) and [complexity](https://webaim.org/projects/million/#complexity) are both on the rise, and
- This increase in inaccessible code will continue to be enshrined, codified, and amplified as the source code is re-scraped and fed back into model data training efforts.

Websites are being [built via LLM-generated code and populated LLM-generated content at an exponential pace](https://ai-on-the-internet.github.io/). This, in turn, raises more concerns:

- Overcoming this ever-increasing inaccessible default becomes progressively more resource-intensive. This makes it something only larger organizations can afford to take on, yet will be unwilling to due to a proportionately scaling cost.
- Inaccessible outputs become increasingly more normalized. This makes it ever more **unlikely to be questioned as something that needs intervention**.

## Command and control

More distant—yet more relevant—fears center around explicit control. We're already seeing this manifest with [refusals to communicate facts that may be inconvenient for LLM providers’ success](https://www.wired.com/story/senators-demand-to-know-how-much-energy-data-centers-use/).

More abstractly, this entire model of operation is antithetical to [one of the most radical and equalizing forces humans have ever invented](https://www.anildash.com/2026/03/27/endgame-open-web/). And **subversion of this model is deliberate**.

<blockquote>
  <p>You must imagine Sam Altman holding a knife to Tim Berners-Lee's throat.</p>
  <footer>
    <p>Anil Dash</p>
  </footer>
</blockquote>

[The public internet has been available for 35 years](https://en.wikipedia.org/wiki/History_of_the_Internet#Internet_use_in_wider_society), and [open source for 28](https://opensource.org/about/history-of-the-open-source-initiative). Both are revolutionary ideas that **upended traditional ways of how knowledge is distributed**.

The lifespan of these ideas are also tiny blips compared to the centuries of traditional power structures and systems that came before them. It’s also enough time for said structures and systems to figure out how to address these existential threats and [return things to how they prefer to operate](https://skeenapublishers.com/journals/ijeti/fulltext-ijeti-02-00014-php/).

Being robbed of the profound openess and transparency we have become accustomed to means that **we place control of reality in the hands of** [**closed, unaccountable organizations**](https://larsfaye.com/articles/agentic-coding-is-a-trap#vendor-lock-in). Here, we need to think deeper than code.

## Antifuture

There is a potential future where we are lead down a path that works against our own self-interests, amnesic to how we wound up where we are and [without the language to communicate it](https://sites.google.com/view/llmwritingdistortion/home).

Dominant players are [contemptuously bypassing the standards process](https://wil.to/posts/googles-prompt-api/). We are already seeing [attempts to manipulate LLM output to serve political agendas](https://www.wired.com/story/chatbots-are-pushing-sanctioned-russian-propaganda/). Even further, [this manipulation can occur with the providers themselves](https://gizmodo.com/canva-admits-its-ai-tool-removed-palestine-from-designs-apologizes-for-any-distress-it-caused-2000751215). Also recall that the more unaccountable LLM output is normalized the less we will question its outputs.

Now [be the villain](https://24ways.org/2018/be-the-villain/) and imagine [what is possible if these agendas feel threatened](https://www.motherjones.com/media/2026/05/openai-chatgpt-mass-shooting-guardrails-fail/).

Before the internet there was [Usenet](https://en.wikipedia.org/wiki/Usenet). Before Usenet there was [ARPANET](https://en.wikipedia.org/wiki/ARPANET). Through this lens, **the browser is just another place information is stored**. Here, we should be worried about the wolf-in-sheep’s-clothing threat of [monopolistic vertical interoperability](https://berjon.com/interoperability/)—interfacing what came before as a method to subsume it.

You may be reading this post as a paranoid fear response. I should point out that [these fears are cultivated](https://www.bbc.com/future/article/20260428-ai-companies-want-you-to-be-afraid-of-them). Here, know that I am not feeling fear as much as anger and a desire to preserve [what is boring and works](https://www.terrygodier.com/the-boring-internet).

You can open Notepad and type whatever you want into it. You can open Paint and draw whatever you can imagine. You can publish whatever you want online with [a small degree of technical know-how](https://htmlforpeople.com/). This all costs nothing past the hardware, software, and connection fee. We take this for granted, to our own detriment.

**Being open and transparent is a radical strength**, not a weakness. We should not throw this away in the pursuit of a convenient perceived inevitability.
