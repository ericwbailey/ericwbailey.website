---
layout: "layouts/post.njk"
title: thoughtbot.com, dark mode, and other user preferences
source: ericwbailey.website
excerpt: "The how part of dark mode has been thoroughly addressed. Instead, I’m going to talk a little bit about the why."
date: 2021-09-07
year: 2021
tags:
  - Accessibility
  - Design
  - Development
  - User Queries
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 35
---

<div id="warning" class="warning">
  <p>
    I wrote this when I was working for thoughtbot. I also was responsible for adding dark mode functionality to <a href="https://thoughtbot.com/">thoughtbot.com</a> and <a href="https://thoughtbot.com/blog">Giant Robots Smashing Into Other Giant Robots</a>, thoughtbot’s blog.
  </p>
  <p>
    I don’t work at thoughtbot anymore, but didn't want this writing to go to waste. So, I’m posting it here. Enjoy!
  </p>
</div>

Dark mode is all the rage in web design right now. It’s a toggle in your operating system settings that allows you to update your operating system from traditional lighter colors to a darker version of them.

If you go to [thoughtbot.com](https://thoughtbot.com/) now you can see for yourself. [Toggle dark mode](https://www.a11yproject.com/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/#toc_How-to-enable-it) on your operating system and (provided it has the capability, and [that your browser supports it](https://caniuse.com/#feat=prefers-color-scheme)), and revel in its gloomy glory.

<img
  alt="Screenshot of the thoughtbot.com homepage with dark mode enabled."
  loading="lazy"
  src="{{ '/img/posts/thoughtbot-com-dark-mode-and-other-user-preferences/thoughtbot-dark-mode.png' | url }}" />

## Why

[The *how* part of dark mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) has been thoroughly addressed. Instead, I’m going to talk a little bit about the *why*.

### Developer appeal

I think that one reason dark mode took off is because it’s attractive to a lot of developers. Many code editors, terminal shells, browser extensions, etc. are purposely set to use darker colors. Extending this treatment to the websites and web apps they work on day-in and day-out feels natural.

### Respecting user preferences

There’s more to dark mode than just developer convenience. It can help:

- Make someone’s reading experience easier in low light environments,
- Reduce things like headaches and migraines that can be triggered by too much eye strain, and
- Provide an enjoyable reading experience for some people with ADHD.

On the web, the logic that triggers dark mode is part of [a suite of new media queries](https://www.w3.org/TR/mediaqueries-5/#mf-user-preferences) that react to settings someone explicitly enables. You can, or will soon be able to target:

- [Motion](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion),
- [Data](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-data),
- [Transparency](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-transparency),
- [Color scheme](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme),
- [Contrast](https://www.w3.org/TR/mediaqueries-5/#prefers-contrast), and
- [Forced colors](https://www.w3.org/TR/mediaqueries-5/#forced-colors).

These are welcome additions to the platform. Reacting to how someone wants to view the web is being accommodating to their expressed preferences. Like a good host, website and web app makers should strive to make everyone feel comfortable and welcome when they visit.

## Better defaults

User preference queries also pose an interesting thing to think about: why do extra work?

You want a decent default color contrast ratio, because we want people to be able to read your website. The same thinking applies for text on semitransparent overlays. You want [a low or no motion experience](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/), to prevent triggering things like seizure, nausea, and migraines. Less data transmitted is always a good thing, as well—performance and usability are close friends.

If you accommodate these concerns from the beginning, you need to write far less workarounds after the fact. This approach means less code to write and maintain, better accessibility, better usability, and better compartmentalization for context-based mode switching.

It’s also worth mentioning that [the preference toggles for these features are oftentimes buried or obfuscated](https://developer.paciellogroup.com/blog/2019/05/short-note-on-prefers-reduced-motion-and-puzzled-windows-users/). This means a person may not know these features exist, and consequently won’t enable them.

## Flip mode is the greatest

Consider an opt-in approach rather than opt-out:

```css
@media (prefers-reduced-motion: no-preference) {
  // Only run animation in browsers that support
  // a prefers-reduced motion, and the user has
  // not requested a reduced motion experience.
}
```

[Start with all your autoplaying media paused](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html), and let the user decide what’s interesting enough to interact with. Data-saver mode is turned off? Great! Conditionally serve up that video. Type over a semitransparent background? Maybe rethink that design choice, friend.

## thoughtbot​.​com is quiet by design

While our website utilizes bold color choices and large type, you’ll notice that we don’t employ dirty tricks you might see on other agency sites. There’s no distracting autoplaying video backgrounds, [nausea-inducing parallax effects](https://alistapart.com/article/accessibility-for-vestibular/), tiny light gray text on a white background, or gigantic data plan-murdering hero images.

These are intentional choices. While they may not place us on award sites that promote [unfeasible trends](https://dribbble.com/tags/neumorphism) or [dubious usability](https://www.awwwards.com/), we do benefit from another success metric: new and repeat work from a wide range of clients who understand the value of respectful, reliable software.

