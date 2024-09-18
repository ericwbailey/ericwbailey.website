---
layout: "layouts/post.njk"
title: "Free idea: design token ugly mode"
source: ericwbailey.website
excerpt: "A design token ugly mode is a direct and powerful way to visualize the current state of the world"
date: 2024-07-01
year: 2024
tags:
  - Approach
  - Color
  - Design
  - Design Systems
  - Design Tokens
  - Development
  - Subversion
share:
  facebookDescription: "Three wireframes, where portions of the designs use garish color values."
  twitterDescription: "A wireframe, where portions of the design use garish color values."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 53
---

A lot of work goes into making every page and view of a website or webapp look consistent with every other page or view. It’s just good design.

Smaller, newer experiences tend to be more uniform than not. This makes sense in that the bulk of the experience is created at the same time and orchestrated by a small group of people.

Larger, older sites tend to grow into being slightly less invariable. If you have a keen eye you can spot the differences:

- An odd tint or shade here,
- Contrasting border radii there,
- An errant button style unearthing itself from a past redesign, and
- Over here is an errant microsite made by a third party vendor, 
- And here is the abandoned pet project of a stakeholder who has long-since moved on.

It is sort of like counting the rings on a tree:

- Here’s where flat design overtook skeumorphism,
- Here’s where the brand’s primary color went from royal purple to cornflower blue,
- Here’s where we left the harbor of web safe fonts to download some WOFF files,
- etc.

There’s also even more nuance here, where even **specific sections of an overall webpage/view can utilize completely different underlying frameworks**. An example here could be, say, a certain popular social code hosting platform:

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/frameworks-wide.svg' | url }}">
  <img
    role="img"
    alt="A wireframe illustration of the header portion of a webpage. It suggests a logo and primary navigation area, user profile area, a secondary navigation area, main content, and a sidebar. Different areas of the site are grouped and labeled with the React and Rails logos."
    src="{{ '/img/posts/free-idea-design-token-ugly-mode/frameworks-narrow.svg' | url }}">
</picture>

## Coping

[Design tokens](https://www.designtokens.org/glossary/) arose to help prevent this kind of almost-but-not-quite visual leakage and drift. The idea here is you have a platform-agnostic source of canonical truth for things like color, typefaces, line height, border radius, drop shadows, etc.

These primitives are then given a [semantic layer of abstraction](https://scribe.rip/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) before being threaded into production code, and voilà! Your color token will be able to quickly and confidently replace cornflower blue with emerald green across an entire experience or suite of experiences.

## Reality

The problem is, this only works when you’ve ensured that one hundred percent of your UI is hooked up to your design tokens. And as we all know: in tech the older and crustier something is, the less incentive there is to modernize it.

This means that there is a high likelihood that design tokens won’t be fully integrated in the way they need to be able to succeed. This then means that **without intervention, the gap between new features and existing UI will widen as time goes on**.

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/effort-cone-on-dark.svg' | url }}">
  <img
    role="img"
    alt="A cone that expands outward to the right. The leftmost point of the cone is labeled, 'Amount of surface area'. The rightmost point of the cone is labeled, 'Present day'. A rightward pointing horizontal arrow connexts the two labels."
    src="{{ '/img/posts/free-idea-design-token-ugly-mode/effort-cone-on-light.svg' | url }}">
</picture>

Since this sort of technical debt is [invisible and unglamorous](https://ericwbailey.website/published/invisible-success/), working on it often gets kicked down the road to some future never date. After all, why fix it if ain’t broke?

The truth of the matter is that eventually something can conspire to call in the accumulated technical debt. And when that happens, **scope becomes a disastrous force multiplier for scale**.

## Flip the script

Design tokens are often thought of as a way to keep experiences harmonious between different modes and themes. However, I wonder: what if we flip the idea around and make things ugly?

<figure
  role="figure"
  aria-label="100% token integration!">
  <img
    alt="Screenshot of the Dropbox homepage. Every color has been replaced with a random color, making it appear garish. After the initial shock of its appearance there is the fact that the colors ugly colors are predictable. Text is all one color, buttons are also a consistent color, etc."
    loading="lazy"
    src="{{ '/img/posts/free-idea-design-token-ugly-mode/dropbox-homepage-ugly-mode.png' | url }}" />
  <figcaption>
    100% token integration!
  </figcaption>
</figure>

A discordant palette of randomly-assigned colors will throw **the difference between parts of the experience that consume design tokens and parts that have yet to be updated** into sharp relief.

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-wide.svg' | url }}">
  <img
    role="img"
    alt="The same wireframe illustration of the header portion of a webpage from earlier. Some, but not all of the content areas have garish colors applied to them. As with the previous Dropbox image, there is consistency with how the colors are applied to similar content types."
    src="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-narrow.svg' | url }}">
</picture>

## Making an ugly mode

In terms of structure, an ugly mode can exist in parallel with your dark and light mode themes:

<picture>
  <source
    media="(min-width: 68rem) and (prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-theme-layer-horizontal-on-dark.svg' | url }}">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-theme-layer-horizontal-on-light.svg' | url }}">
  <source
    media="(prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-theme-layer-vertical-on-dark.svg' | url }}">
  <img
    role="img"
    alt="Three vertically stacked sections. The topmost section is labeled, 'Raw values'. The middle section is labeled, 'Primitives'. The bottom section is labeled, 'Components'. Under each label are three color swatches with labels. The Primitives swatches show a dark blue, light blue, and lime green colors with their hexidecimal values. In the Primitives section, the swatches are naed, 'Blue500', 'Blue200', and 'UglyGreen300'. The Components swatch labels read, 'color dot text dot card dot title dot resting dot light', 'color dot text dot card dot title dot resting dot dark', and 'color dot text dot card dot title dot resting dot ugly'."
    src="{{ '/img/posts/free-idea-design-token-ugly-mode/ugly-mode-theme-layer-vertical-on-light.svg' | url }}">
</picture>

The mechanism to create it is as chaotic as it is straightforward. All you need to do is take each color value you have, and replace it with [a random color value](https://get-color.com/random/).

Your inner systems designer may be cringing at this lack of higher-order logic, but I encourage you embrace the pandemonium instead. After all, that’s what’s going to make the mode so effective.

## See what I see

More mature design systems can quantify this sort of gap programmatically and boil it down into a number on a dashboard. And while there is value in this, a number on a dashboard is sterile and impersonal.

To counter this, a design token ugly mode is **a direct and powerful way to visualize the current state of the world**.

It’s one thing to set ugly mode on a local feature branch on your own computer. It’s another to create a feature flag and add other people to it.

Remember that keen eye I mentioned earlier?

The reality is some people don’t, and won’t have the kind of sensibilities that can pick up up on this level of detail—or much less care about it. The act of switching on design token ugly mode is a way to recontextualize that percentage coverage buried away in some forgettable report, and instead make it immediately apparent.

This could be helpful as a technique to get prioritization for things that need attention from the kinds of people who normally don’t value this sort of thing. The important bit here is **asking for their consent** to do so first.

## Squint and learn

Another thing you could do is tie design token ugly mode into any page/view-level [visual diffing](https://scribe.rip/loftbr/visual-regression-testing-eb74050f3366) automation you might have set up.

You could then see where “blotches” of content where ugly mode is less prevalent to better identify what areas need attention. This could be an effective way to get a better holistic view of team or service area adoption efforts:

<img
  role="img"
  alt="A four by three grid of artboards, each showing a simplified illustration to suggest a webpage layout. Some artboards are completely colored with garish colors. Some artboards have no color, and their illustrations are grayscale. Some are a blend of both."
  src="{{ '/img/posts/free-idea-design-token-ugly-mode/visual-regression-test.svg' | url }}" />

## Dear god, it’s hideous

Design tokens are all about promoting and reinforcing uniformity and consistency. Two issues with utilizing them effectively is needing universal adoption, and the prioritization of effort that that level of adoption requires.

Ugly mode is a way to **take this abstract, invisible concern and make it obvious and impossible to ignore**. It leverages the strengths of design tokens and uses them in an unexpected way to help communicate their purpose and value.

I personally have not had a chance to implement ugly mode on anything past experimentation on personal projects, hence the prefix of this blog post’s title. If it is something you manage to pull off in a professional capacity please let me know!

Update: [Taylor Hunt](https://dev.to/tigt)—who is way smarter than me—informed me [that Kroger’s website uses this tactic for it’s default set of tokens](https://mastodon.social/@tigt/112711880338838623).
