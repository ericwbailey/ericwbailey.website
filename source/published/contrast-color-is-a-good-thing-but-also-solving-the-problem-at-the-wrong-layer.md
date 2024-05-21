---
layout: "layouts/post.njk"
title: <code>contrast-color()</code> is a good thing, but also solving the problem at the wrong layer
source: ericwbailey.website
excerpt: "Browsers are a failure of imagination"
date: 2024-05-21
year: 2024
tags:
  - accessibility
  - assistive technology
  - color
  - css
  - design
  - design systems
  - design tokens
  - development
  - internet
furtherReading:
  - title: "Filling the potholes of the web."
    source: "Frank Elavsky"
    url: https://www.frank.computer/blog/2024/04/filling-potholes.html
share:
  facebookDescription: "A circle with one half filled in. The other half is hollow."
  twitterDescription: "A circle with one half filled in. The other half is hollow."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 49
---

Browsers are a failure of imagination.

I understand that new browser features and functionality need to be rolled out with care, in that you need to accommodate a wide range of technological literacy and familiarity. This is to say nothing of built-up muscle memory and the risk of change aversion.

That said, the long view of the convergent evolution that is browser features and functionality leave me wanting.

Things that would be genuinely beneficial to the people using these applications day in and day out take a backseat to things like optimizing esoteric JavaScript debugging techniques, [inventing new ways to generate advertising metrics](https://www.microsoft.com/en-us/edge/rewards), and [collapse our climate](https://www.bloomberg.com/news/articles/2024-05-15/microsoft-s-ai-investment-imperils-climate-goal-as-emissions-jump-30) via [an unrelenting torrent of AI hype](https://www.google.com/chrome/ai-innovations/).

To further explain this point of view, I’d like to talk about [`contrast-color()`](https://drafts.csswg.org/css-color-5/#contrast-color), a new CSS function.

## `constrast-color()`

This function is part of [the level 5 color module for CSS](https://drafts.csswg.org/css-color-5/). This module contains a lot of things I’m excited for, and is part of [CSS’ current Renaissance moment](https://chriscoyier.net/2023/06/06/modern-css-in-real-life/).

`contrast-color()` unlocks the ability for CSS to automatically intervene for [color contrast-related considerations](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). It “automatically provides a color with guaranteed color contrast when used as a text color on a solid background of the specified color.”

This is pretty damn cool. Given that we know:

1. Minimum compliant contrast thresholds,
2. Font size used, and
3. At least one color value

We can instruct the browser to generate [a color value for the text or the background it is placed on that is WCAG conformant](https://webaim.org/resources/contrastchecker/).

```scss
// [1] Set a Custom Property
// [2] Use @supports for better guardrails
// [3] Use contrast-color() and a Custom Property in conjunction

:root {
  --color-secondary: #FFEDEF; // [1]
}

.my-selector {
  @supports (color: contrast-color(#FFEDEF)) { // [2]
    background-color: var(--color-secondary);
    color: contrast-color(var(--color-secondary)); // [3]
  }
}
```

At its core, `contrast-color()` is new tool that will help ensure an accessible, and therefore usable web. This is fundamentally a good thing!

If I’m understanding the syntax correctly, it can also serve as a “clamp” for color variables. The idea here is it could work with things like [`color-mix()`](https://developer.mozilla.org/en-US/blog/color-palettes-css-color-mix/) to create guardrails for dynamically generated color values.

```scss
// [1] Use constrast-color() for the last color calculation
// [2] Dynamically mix --color-accent into --color-secondary

.my-selector {
  @supports (color: contrast-color(#FFEDEF)) {
    background-color: var(--color-secondary);
    color: contrast-color( // [1]
      color-mix(
        in srgb,
        var(--color-primary),
        var(--color-accent) 70%
      ); // [2]
    );
  }
}
```

## Technology does not exist in a vacuum

We also need to consider the contexts  `contrast-color()` will be introduced into.

Thanks to the pervasive [devaluation of both the frontend and CSS](https://heather-buchel.com/blog/2023/10/why-your-web-design-sucks/) as industry concerns, awareness of, and actual use of `contrast-color()`’s is likely going to only be found in two general areas:

1. [Hobby websites](https://personalsit.es/) for folks who like CSS and the frontend, and
2. The design systems where these sorts of people tend to wind up working.

Design systems that utilize more mature concepts such as [color tokens](https://thedesignsystem.guide/design-tokens) likely already have [mechanisms to perform what `contrast-color()` does](https://chriskirknielsen.com/blog/2024-redesign/#color-token-contrast-checker). These design systems also tend to be more accessible, either by principle or by legal compulsion. For example, [Primer already has this infrastructure in place](https://primer.style/guides/accessibility/color-considerations#design-tokens).

This also means that organizations and websites without this sort of infrastructure are [far less likely to consider compliance](https://webaim.org/projects/million/), or the knowledge or resources to enact it.

## We also need to consider unproductive mindsets about disability

When `contrast-color()` is mentioned, it is usually done so along with a reference to [the `prefers-contrast` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast).

If you are unfamiliar with `prefers-contrast`, it is a way to adjust your website if an operating system preference for a higher contrast experience is enabled. Think of it like [dark mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) or [preferring reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

<img
  alt="The macOS System Settings preference pane, set to show the Display subsection of the Accessibility category. The Increased Contrast switch toggle has been flipped to the on position, and a bright orange rectangle has been drawn around it to better visually emphasize it. The active increased contrast setting has added black borders between different UI elements, and increased the contrast of the text and icons."
  loading="lazy"
  src="{{ '/img/posts/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/increased-contrast.png' | url }}" />

The idea here is that you’d apply `contrast-color()` in scenarios where someone has requested a higher contrast experience, with the understanding that it’d help to ensure that experience delivers on its promise.

```scss
.my-selector {
  color: var(--color-primary);
  background-color: var(--color-secondary);

  @media (prefers-contrast: more) {
    color: contrast-color(var(--color-secondary));
  }
}
```

Unfortunately, this thinking also sets up an ugly, “us versus them” mentality. It also presupposes that people:

- Are aware there is text content they cannot perceive,
- Are aware of having a low vision condition,
- [Accept having a low vision condition](https://ericwbailey.website/published/truths-about-digital-accessibility/#a-person-who-could-benefit-from-assistive-technology-may-not-be-using-it), and
- Are aware of, and use the preference to do something about this.

It also assumes that the operating system has the preference toggle to enable in the first place, which isn’t always a given.

If you go down this rabbit hole—and I hope you don’t—far better to flip your thinking and <strong>start with an accessible default</strong>, and then make the alternate experiences non-compliant:

```scss
.my-selector {
  color: var(--color-primary);
  background-color: var(--color-secondary);

  @media (prefers-contrast: less) {
    color: var(--color-tertiary);
  }
}
```

This removes the burden of the people consuming your content needing to expend additional effort to counteract your inaccessible choices.

### Further issues

Another assumption here is that people want a high contrast experience for everything, which isn’t necessarily true. For more thinking here, I suggest comparing it to Bramus Van Damme’s post, [<cite>Dark Mode Toggles Should be a Browser Feature</cite>](https://www.bram.us/2022/05/25/dark-mode-toggles-should-be-a-browser-feature/).

Furthermore, leaning on a high contrast theme to do the heavy lifting creates a scenario where the default view may be too light to be functional. This means someone may not be able to actually perceive the mechanisms needed to enable an experience that can work for them.

Experiences should be [<strong>accessible by default</strong>](https://ericwbailey.website/published/thoughtbot-com-dark-mode-and-other-user-preferences/#better-defaults).

Delegating accommodation to mode-based operation enables designers to continue bad practices and ableist notions about aesthetics. It’s also a ton more overhead design and code considerations to manage and maintain—better to tackle this problem on [the education layer](https://www.linkedin.com/learning/auditing-design-systems-for-accessibility).

## Targeting the right layer

Speaking of layers, I now pose the question: Why does all this have to be the website or webapp author’s responsibility?

[Deep knowledge of CSS is rare](https://2023.stateofcss.com/en-US/features/accessibility/l), and not incentivized. Browsers already calculate, and are therefore aware of foreground and background color values. Given both of those considerations, <strong>are we missing out on a better way to go about this</strong>?

I would love to see this sort of feature implemented on the browser level.  And guess what? There’s prior art that can be referenced.

[FixA11y](https://fixa11y.com/), [Kilian Valkhof](https://kilianvalkhof.com/)’s excellent browser extension. It’s a great resource, and we’re lucky to have it. And if you haven’t heard of it before? Well, it’s part of the larger point I’m driving at.

<div class="centered-media-outer">
  <img
    alt="A browser extension dialog. It is titled, 'Fix contrast', and has a subtitle that reads, 'Fix color contrast issues on websites automatically' Next to the title is a checked checkbox with a label that reads, 'Active'. In the dialog's main body there two sections. The first is labeled, 'Set minimum contrast level', has options to set as either 'Medium' or 'High'. The second section is labeled, 'Or choose your own values (advanced)'. In this section are two range sliders with the ability to set small and large text sizes. There is also a checkbox labeled, 'Change background color when needed'. Finally, there is a dialog footer with options to sponsor on Ko-fi and the other is a prompt to download Polypane."
    class="centered-media-inner-3"
    loading="lazy"
    src="{{ '/img/posts/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/fix-contrast.png' | url }}" />
</div>

### Layer seven

My question here is <strong>why isn’t this kind of functionality a stock piece of browser UI</strong>?

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/browser-toggle-horizontal.svg' | url }}">
  <img
    role="img"
    alt="A two panel comic showing how pressing a button on the browser's UI changes too-light text's color to a color that is legible. The button is placed next to the back, forward, and home buttons, right before the URL bar. The browser and web content are illustrated in an abstract, wireframe style."
    src="{{ '/img/posts/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/browser-toggle-vertical.svg' | url }}">
</picture>

We can do better than that, as well. Much like with the prefers contrast operating system preference, use of this hypothetical feature would rely on you knowing it exists in the first place.

Again, browsers are aware of most of the foreground and background colors at play, and therefore the ratio between them. <strong>What if they intervened to tell you that they could fix things for you</strong>, and then did if you requested it?

<img
  role="img"
  style="width: 100%;"
  alt="A dialog prompt placed over a browser displaying web content that is too light to be legible. The dialog's title reads, 'Adjust contrast?', and its body content reads, 'Automatically update text and background colors to be more legible.' There are three prompts following the body content, one to update, one to cancel, and one to investigate more options. The, dialog browser and web content are illustrated in an abstract, wireframe style."
  src="{{ '/img/posts/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/browser-prompt.svg' | url }}">

This would allow someone to <strong>become aware of the preference in a moment when it is needed</strong>. It could also be configured to be a global preference, or something tweaked on a per-site basis.

Additionally, this sort of thinking unlocks opportunities to tweak the desired contrast ratio itself on a global, site, or session-based basis.

I’m heartened to see [Arc experimenting in this area](https://resources.arc.net/hc/en-us/articles/19212718608151-Boosts-Customize-Any-Website), which is a hop, skip, and a jump away from integrating [Midnight Lizard](https://midnight-lizard.org/home)-style functionality. I’m also hopeful that other [weird browsers](https://css-tricks.com/newsletter/273-weird-browsers/) might move the conversation forward here.

## In the gutter, staring at the stars

I understand that making browsers takes [an incredible amount of thankless effort](https://daverupert.com/2022/02/complaining-about-web-browsers/). I also understand many people who do work on browsers may be sympathetic to my line of thinking.

I’m not mad at these individuals. I just see what is possible and wish for more.

Creating new features that help people, but don’t help extract profit are far less likely to be incentivized. At the same time, [insufficient text contrast is known to be one of the most prevalent accessibility issues on the web](https://webaim.org/projects/million/#contrast).

This circumstance we find ourselves in is what drives my dissatisfaction. It’s my hope that in reading this you learn not only about `contrast-color()`, but also how to interrogate the larger environment it exists in and how it comes to be.

In the meantime, I am going to continue using baseline accessible color palettes, advocating for integrating contrast-color() where appropriate, and hoping for better.
