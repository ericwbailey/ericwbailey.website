---
layout: "layouts/post.njk"
title: The Accessibility Compat Data project has a homepage now, and you should support the project
source: ericwbailey.website
excerpt: "ACD is a much-needed piece of web infrastructure"
date: 2026-10-20
year: 2026
tags:
  - Accessibility
  - Approach
  - ARIA
  - Assistive Technology
  - Attributes
  - Development
  - HTML
  - Internet
furtherReading:
  - title: "RFC: Defining Support Status in ACD"
    source: "Accessibility Compat Data"
    url: https://acd.lolaslab.co/posts/rfc-support-status/
  - title: "The idea of ​​Accessibility Compat Data"
    source: "Mitsue Links"
    url: https://www.mitsue.co.jp/knowledge/blog/a11y/202507/08_1330.html
  - title: "Baseline Does Not Really Cover Baseline Support"
    source: "Adrian Roselli"
    url: https://adrianroselli.com/2023/12/baseline-does-not-really-cover-baseline-support.html
share:
  facebookDescription: "The letters 'ACD'."
  twitterDescription: "The letters 'ACD'."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 15
---

[Lola Odelola shared the news on Bluesky last week](https://bsky.app/profile/lolaodelola.bsky.social/post/3mxoi3xqsgc22). I’m using my blog and web presence to signal boost it.

Long story short: **There currently is no** [**Baseline**](https://web.dev/baseline) **or** [**caniuse**](https://web.dev/baseline) **for accessibility**. The [Accessibility Compat Data (ACD)](https://acd.lolaslab.co/) project aims to fix this longstanding platform gap, and [you can help fund it](https://opencollective.com/lolas-lab/projects/acd).

<a href="https://acd.lolaslab.co/" style="padding-top: var(--scale32; display: block;">
  <img
    alt="The top half of the Accessibility Compat Data homepage. It has a tagline that reads, 'Bringing accessibility support data to developer tools', a paragraph explaining the situation in more detail and how it connects to existing Baseline efforts, and then a sample support matrix. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/the-accessibility-compat-data-project-has-a-homepage-now-and-you-should-support-the-project/acd-homepage.png' | url }}" />
</a>

## Assistive technology support is different

Determining assistive technology support in the actual means [navigating a tangled mess](https://www.smashingmagazine.com/2025/06/what-i-wish-someone-told-me-aria/#just-because-it-exists-in-the-aria-spec-does-not-mean-assistive-technology-will-support-it) of multiple assistive technologies, operating systems, and browsers and all their constituent quirks and bugs. It is the exact opposite of how developers think about support for web platform features.

Learning about this nuance is one of the many unnecessary “death by a thousand cuts” points of friction non-accessibility specialists encounter when trying to do the right thing. It also breaks my heart every time I witness it happen.

## Encoding bias

Additionally, **the lack of this machine-parsable support information can also create some nasty outcomes** when LLMs enter the picture.

For example: I was tasked with assisting a project that had instruction files that compelled using both the latest and greatest web technologies, and also some rudimentary concessions towards accessibility.

These instructions created an outcome where the LLM did exactly what it was set to do. `aria-details` was used in great confidence, distributed across the entire experience. For those unaware, [`aria-details` does not work in the actual yet](https://www.scottohara.me/blog/2018/11/08/aria-details.html#test-results).

Now think about all the other more established bugs and support gaps you might be aware of, and how those are getting unknowingly propagated at scale. Correlation is not causation, but I do think [LLM-powered coding is in its current state is making things worse when it comes to web accessibility](https://webaim.org/projects/million/#errors).

Here, we must be sure to center the human-facing impact this all conspires to create. Accessibility is—after all—ultimately for people.

## Better infrastructure

**Capturing assistive technology support data in a machine-parsable format helps to set guardrails against negative outcomes**. This is done in the same way that Baseline information helps steer other project support requirements.

This is also huge in terms of [developer experience](https://en.wikipedia.org/wiki/Developer_experience), as it is far easier to plug this sort of information into a system than expecting people to perform rigorous manual evaluation. It also helps normalize the practice as something a well-built project does.

**ACD is a much-needed piece of web infrastructure**, vital to making digital accessibility efforts both successful and sustainable. Its supporting project goals and planning are also open and transparent, [available on GitHub](https://github.com/lolaslab/accessibility-compat-data/tree/master).

It also needs funding to succeed. While emotionally I feel like companies like [Google](https://accessibility.google/), [Apple](https://www.apple.com/accessibility/), and [Microsoft](https://www.microsoft.com/en-us/accessibility) should have been providing resources for this for decades now, intellectually I know that their priorities lie elsewhere.

## Pessimism of the intelligence, optimism of the will

It is a very spirit-of-the-web act to [support ACD](https://opencollective.com/lolas-lab/projects/acd) as a groundswell, bottom-up effort. I hope you’ll join me in helping to fund it.
