---
layout: "layouts/post.njk"
title: Modern Health, frameworks, performance, and harm
source: ericwbailey.website
excerpt: "Performance, accessibility, and usability are more than just inconvenient truths you can pretend don’t exist. They have a direct impact on the quality of someone’s life"
date: 2023-02-01
year: 2023
tags:
  - Development
  - Inclusion
  - Performance
  - Personal
sharedOn:
  twitter: TK
  mastodon: TK
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 23
---

I would like to thank [Modern Health](https://www.modernhealth.com/). It was not their intent, but using their service broke me out of a deep depression by launching me into an incandescent rage.

I’ve read enough on [destigmatizing mental health](https://osmihelp.org/) that I feel no shame in discussing this. In fact, in this regard I feel twice fortunate. The first is to know enough about myself to know I need help and not feel bad about it, and the second is that I have an employer-offered benefit to take advantage of.

You need to use every resource you can for things like this, and there is no shame in doing so. Mental health resources, like physical health resources, are in incredibly short supply right now.

I signed up for Modern Health’s service earlier this week. After signing my rights away by clicking an impressive number of checkboxes, I was greeted with this experience:

<img
  alt="An almost entirely blank white screen. In the top lefthand corner is the Modern Health log, and navigation options for 'Explore', 'Circles', and 'FAQ'. On the top righthand corner is navigation options for 'Messages' and my profile. In the center of the screen is a small loading spinner. Screenshot."
  loading="lazy"
  style="border: 1px solid #dddddd;"
  src="{{ '/img/posts/modern-health-frameworks-performance-and-harm/modern-health-routing-failure.png' | url }}" />

Since I make digital experiences for a living, I immediately knew what happened. The signup user flow failed to transition me over to the onboarding user flow.

In addition to [a terrifying amount of telemetry](https://builtwith.com/advanced?back=joinmodernhealth.com), Modern Health’s customer-facing experience is delivered using React and Webpack. If you are familiar with how the web is built, what happened is pretty obvious: A website that over-relies on JavaScript to power its experience had its logic collide with one or more other errant pieces of logic that it summons. This created a deadlock.

If you do not make digital experiences for a living, what happened is not obvious at all. All you see is a tiny fake loading spinner that never stops.

Experiences on the web are so poor that many people have developed coping strategies for getting what they need. I [hard refreshed the tab](https://filecamp.com/support/problem-solving/hard-refresh/) and was unceremoniously dumped into my homepage dashboard. Many others may know to do the same.

However, many others is not everyone. I also need to point out that people are visiting sites like this because they are not in a good place. Depression and stress lowers your executive function. Furthermore, [people internalize technology’s failures as their own](https://alistapart.com/article/paint-the-picture-not-the-frame/).

What if I was suicidal?

I used an up-to-date operating system to access this website on a top of the line laptop, browsing with an up-to-date Chromium browser with no setting adjustments or extensions to interfere with things. Can you imagine what chance for success [someone using something other than that](https://css-tricks.com/test-your-product-on-a-crappy-laptop/) will have?

[Technology choices have ethical ramifications](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/).

A person seeking help in a time of crisis does not care about TypeScript, tree shaking, hot module replacement, A/B tests, burndown charts, NPS, OKRs, KPIs, or other startup jargon. [Developer experience does not count for shit](https://andy-bell.co.uk/speed-for-who/) if the person using the thing they built can’t actually get what they need.

There is also the very real possibility that the developers responsible for making this experience do actually care. However, they may be structurally unable to deny stakeholders demanding an onslaught of non-features, in an attempt to parrot other startups in hopes of reproducing their perceived success.

I felt compelled to write this because explaining the situation is a fractal of absurdity. I’d be laughing if I wasn’t so furious.

An experience like Modern Health should be as lean and fault-tolerant as possible. It should not make 162 requests transferring ~15 MB just to hope it can show me a [sanitized Corporate Memphis blob human](https://beaconagency.co.uk/post/does-big-tech-design-have-an-authenticity-problem) promoting a gamified growth funnel.

<figure
  role="figure"
  aria-label="Screaming.">
  <img
    alt="A card component with a title that reads, 'Resilience, it's a family thing'. There is a subtitle that reads, 'Learn strategies to make resilience part of yoour family make up.', a call-to-action link that says, 'Take a pause.' and a smaller sub-call-to-action link that says, 'Start a new streak!' There is also a cartoon illustration of two happy, ethnically-ambiguous men, one an older man and one younger. The illustration style is simple, geometric shapes and soft pastel colors that neatly side-steps having to do actual representation."
    loading="lazy"
    src="{{ '/img/posts/modern-health-frameworks-performance-and-harm/resilience-its-a-family-thing.png' | url }}" />
  <figcaption>
    Screaming.
  </figcaption>
</figure>

I don’t want the underlying concept behind Modern Health to fail. I want more people to get the help they need in a reliable and safe way. However, I wish we as an industry would stop [promoting and rewarding the wrong things](https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react).

We’ve lost the plot. Performance, accessibility, and usability are more than just inconvenient truths you can pretend don’t exist. They have a direct impact on the quality of someone’s life.
