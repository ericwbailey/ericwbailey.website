---
layout: "layouts/post.njk"
title: Where do you put spacing on design system components?
source: ericwbailey.design
excerpt: "While creating mature components in Sketch and Figma both take a lot of upfront work, the way a designer interacts with the component differs based on design choices the app developers made about how components are constructed."
date: 2021-12-07
year: 2021
tags:
  - Approach
  - Design
  - Design Systems
  - Design Tokens
  - Development
inlineStyles: true
tweet: https://twitter.com/ericwbailey/status/1468231638446448642
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 42
---

I work on design systems now. It scratches a lot of itches I have, most importantly organizing and standardizing things, as well as baking accessibility in at both the design and development layers.

[My very cool boss](https://line47.bandcamp.com/album/secret-acid-world) is working on updating our grid system, and with that comes conversations about [vertical rythm](https://betterwebtype.com/articles/2018/10/15/rhythm-in-web-typography/#vertical-rhythm).

If you’re not familiar, vertical rhythm is a way to consistently add vertical spacing between things by providing predefined measurement values. Typically these measurement values are derived from an underlying source of logic such as a [modular scale](https://www.modularscale.com/).

The idea for providing measured stops for vertical spaces is a method for both designers and developers to work from a common source of truth. It enforces consistency across different parts of a website, as well as other websites that also utilize the design system.

Consistency is an important thing in any design system. There are also a couple other big-picture considerations our design system needs to accommodate, which in turn affects our approach:

- We’re contractually obligated to use [Sketch](https://www.sketch.com/), which lacks a lot of niceties I’ve come to expect from [Figma](https://www.figma.com/) in terms of codification, documentation, and developer handoff.
- We have a “known unknown” problem, where there are designers and developers from an unknown amount of external teams consuming our content. These are teams that we aren’t necessarily communicating with, or who aren’t necessarily aware of, or reading our documentation.

In terms of a mechanism for communicating vertical spacing in Sketch, there are a few approaches we were thinking through:

## Manually moving things around until they “look right”

This is pure chaos and cannot scale.

## Bake a single vertical space into each component

The idea here is we collectively decide that each component only uses one measurement to define how far away it should be placed.

<div class="centered-media-outer">
  <img
  class="centered-media-inner-2"
    role="img"
    alt="A card component with a light blue rectangle placed on top, indicating a set amount of vertical spacing."
    src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/single-space-value.svg' | url }}">
</div>

I’m of the school of thought that [spacing should always go on the top](https://matthewjamestaylor.com/css-margin-top-vs-bottom), so it’d be adding negative space to the top of each component symbol.

The problem with this approach is it is too limiting to be usable in the real world. One set measurement won’t meet the myraid use cases of an unknown number of unknown designers working on an unknown number of projects with unknown content needs.

If it is too limiting, it will be ignored. This means vertical spacing gets moved back into manually moving things around until they “look right” territory.

## Make vertical spacing a component prop

The idea here is the space on top of each component is a toggleable set of distances, and these distances are a set of codified values. A designer can can then toggle the prop to use a spacing value that works best for their needs.

<img
  role="img"
  alt="Three card components with a light blue rectangle placed on top of each. Each rectangle has a different height, indicating predefined range of vertical spacing values."
  src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/space-prop.svg' | url }}">

This is my preferred approach! Threading spacing abstraction into a component in a systemized way like this tightly couples vertical spacing with each component instance.

If we were using Figma, this would be the end of the post. Its [Variants functionality](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) can handle exactly this sort of thing with elegance and grace. Unfortunately, we’re not using Figma.

To accomplish this sort of thing in Sketch, we’d have to create a symbol for each component with each spacing value, and then each variant of the component. In all fairness, you need to also do this in Figma to get Variants set up.

The real issue, however, is how it is exposed to the designer using the design system component.

Sketch exposes variants as submenus, so it takes a lot of digging to get what you need. This is friction, which means it decreases the likelihood a designer will use both the component and the design system.

<figure
  role="figure"
  aria-label="This is a simplified example and it’s already too awkward.">
  <img
    role="img"
    alt="TBD"
    src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/sketch.svg' | url }}">
  <figcaption>
    This is a simplified example and it’s already too awkward.
  </figcaption>
</figure>

Compare this to Figma, which exposes this information in a far more ergonomic way:

<div class="centered-media-outer">
  <figure
    class="centered-media-inner-3"
    role="figure"
    aria-label="Ahhh, that’s the stuff.">
    <img
      role="img"
      alt="A compact component panel, showing four property dropdowns and their currently selected values. The properties and their values are: variant and primary, mode and light, state and default, and spacing and small."
      src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/figma.svg' | url }}">
    <figcaption>
      Ahhh, that’s the stuff.
    </figcaption>
  </figure>
</div>

### Surface area

While creating mature components in Sketch and Figma both take a lot of upfront work, the way a designer interacts with the component differs based on design choices the app developers made about how components are constructed. This in turn affects a designer's experience in working with the design system as it manifests in a design tool.

Here's how Sketch’s hierarchal component nesting approach compares to Figma’s more categorical toggle approach:

#### Sketch

<figure
  role="figure"
  aria-label="The fact that this is incomprehensible is the point. Full-size, PDF (43 kb).">
    <a href="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/sketch-mind-map-full.pdf' | url }}">
    <img
      role="img"
      alt="An extremely tall mind map. The parent node is labeled Sketch Button Component, and has child nodes 6 levels deep. The 6 node levels are priority, icon, light/dark mode, state, on light/dark, and then space on top. There are hundreds of nodes due to the branching complexity."
      src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/sketch-mind-map-thumbnail.png' | url }}">
    </a>
  <figcaption>
    The fact that this is incomprehensible is the point. <a href="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/sketch-mind-map-full.pdf' | url }}">Full-size, PDF (43 kb)</a>.
  </figcaption>
</figure>

#### Figma

<div class="centered-media-outer">
  <figure
    class="centered-media-inner-3"
    role="figure"
    aria-label="A far shallower surface area that still gets you what you want.">
    <img
      role="img"
      alt="An extremely tall mind map. The parent node is labeled Figma Button Component, and has child nodes 6 levels deep. The 6 node levels are priority, icon, light/dark mode, state, on light/dark, and then space on top. There are hundreds of nodes due to the branching complexity."
      src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/figma-mind-map.png' | url }}">
    <figcaption>
      A far shallower surface area that still gets you what you want.
    </figcaption>
  </figure>
</div>

## Spacer components

Since component props are off the table, the only real sensible thing to do is create a documentation “meta” component that captures these spacing values.

<img
  role="img"
  alt="8 light blue squares whose sizes proportionately scale upward in size."
  src="{{ '/img/posts/where-do-you-put-spacing-on-design-system-components/spacer-components.svg' | url }}">

Designers can then take these spacing components and use them to “Lego” components on a design together. This approach:

- Codifies a set of predefined spacing values.
- Names and presents it in a way that is easy to discover, easy to understand, and easy to access.
- Provides a consistent way for developers to discover when inspecting designer work, which reinforces the use of the code-facing spacing abstraction.

### Spacer `div`s

[Spacer `div`s](https://mxstbr.com/thoughts/margin/) is a development technique that was in vogue a few months ago. As an old-school web nerd, it feels awkward and gross—like table-based layout 2.0.

Going with the spacer component approach feels like we’re suggesting using spacer `div`s to match. I’d much prefer the components to have a vertical spacing prop on the code end of things that maps to an abstracted margin or padding value (A [CSS Custom Property fed by a design token](https://css-tricks.com/different-degrees-of-custom-property-usage/), if you’re doing it right).

## Talk to people

[Design systems are for interfaces](https://bradfrost.com/blog/post/design-systems-are-for-user-interfaces/), but interfaces are worked on by people. To disincentivise using spacer `div`s and use component props instead, you’ll want to have conversations with your design system’s developers. I prefer frequent communication and collaboration to do this.

[Until design tools mature more](https://css-tricks.com/smarter-design-systems-tools/) and intent can be more easily carried through, we need to consider:

- The surface area we as design system maintainers create, how that affects the ergonomics of designer and developer workflows,
- How the structuring of the design system itself will incentivise using it properly,
- Where design system maintainers need accommodate tooling limitations and do the hard part to make it easy for others.
