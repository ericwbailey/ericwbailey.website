---
layout: "layouts/post.njk"
title: To subset or not subset fonts
source: ericwbailey.website
excerpt: "Tech teaches you to think in binary. The real world is anything but"
date: 2021-04-26
year: 2021
tags:
  - Inclusion
  - Performance
  - Typography
furtherReading:
  - title: "Wakamaifondue"
    source: "Wakamaifondue"
    url: https://wakamaifondue.com/
  - title: "zachleat/glyphhanger"
    source: "GitHub"
    url: https://github.com/zachleat/glyphhanger/
  - title: "How I set up Glyphhanger on macOS for optimizing and converting font files for the Web"
    source: "Sara Soueidan"
    url: https://www.sarasoueidan.com/blog/glyphhanger/
  - title: "A font-display setting for slow connections - Web Performance Calendar"
    source: "Web Performance Calendar"
    url: https://calendar.perfplanet.com/2020/a-font-display-setting-for-slow-connections/
sharedOn:
  twitter: https://twitter.com/ericwbailey/status/1386684694654328833
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 22
---

One of the niche things you can do to improve the performance on your website or web app is to [subset your fonts](http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting).

If you are not familiar, subsetting is the act of removing glyphs and other associated information from a font file. You can cherrypick individual glyphs, as well as specifying entire ranges of information. For example, you could take a copy of [Arial](https://www.aivosto.com/fontitin/help/sample-all.html#largechar) and yank out the glyphs used for [box drawing](https://en.m.wikipedia.org/wiki/Box-drawing_character).

<svg role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320">
  <title>A selection of glyphs from a typeface, with the diamond, spade, and club glyphs removed.</title>
  <defs>
    <style>
      .cls-1 { fill: #ff8764; opacity: 0.15; isolation: isolate; }
      .cls-2 { fill: none; stroke: #ff8764; stroke-width: 0.75px; }
      .cls-3 { fill: #ffffff; }
      .cls-3,
      .cls-4 { fill-rule: evenodd; }
      .cls-4,
      .cls-5 { fill: #4a4a4a; }
      @media (prefers-color-scheme: dark) {
        #glphys path { fill: #e8e8e8; }
        .cls-3 { fill: #000000; }
      }
    </style>
  </defs><g id="background"><path id="Rectangle" class="cls-1" d="M141.25 161.27h150v75h-150z"/><path id="Rectangle-2" class="cls-1" d="M366.25 161.27h75v75h-75z"/></g><g id="frame"><path id="Rectangle-3" class="cls-2" d="M366.63 161.65h74.25v74.25h-74.25z"/><path id="Rectangle-4" class="cls-2" d="M216.25 161.65h74.63v74.25h-74.63z"/><path id="Rectangle-5" class="cls-2" d="M141.63 161.65h74.63v74.25h-74.63z"/></g><g id="deleted"><path id="Path" class="cls-3" d="M415.9 212.82l-2.1-3.41h-8.19l-.84-7.09c1.42 2.42 3.15 3.47 5.67 3.47a5.25 5.25 0 005.46-5 4 4 0 000-.49c0-3.83-1.73-6.14-5.09-6.14a7.26 7.26 0 00-3.52.75 6.31 6.31 0 002.83-5.35c0-3.36-2.51-5-6.29-5s-6.3 1.63-6.3 5a6.31 6.31 0 002.83 5.35 7.26 7.26 0 00-3.52-.75c-3.36 0-5.09 2.31-5.09 6.14a5.24 5.24 0 005 5.51h.48c2.47 0 4.2-1 5.67-3.47l-.84 7.09h-8.19l-2.1 3.41z"/><path id="Path-2" class="cls-3" d="M265.9 212.82l-2.1-3.41h-8.19l-.84-7.09a6.48 6.48 0 006 3.47c3.15 0 5.14-2.16 5.14-5.52 0-4.72-4.62-8.87-12.07-15.75-7.46 6.88-12.08 11-12.08 15.75 0 3.36 2 5.52 5.15 5.52a6.48 6.48 0 006-3.47l-.84 7.09h-8.22l-2.1 3.41z"/><path id="Path-3" class="cls-3" d="M178.54 213.45l10.29-14.59-10.29-14.34-10.29 14.34 10.29 14.59z"/></g><g id="glphys"><path id="Path-4" class="cls-4" d="M402.51 66.83c7.61 0 12.55-4.89 12.55-12.18s-4.09-11.4-10-11.4a12.19 12.19 0 00-6.09 1.5V33.91h14.12l.75-3.89h-19.7v18.27h3.93a13.45 13.45 0 015.41-1.2c3.57 0 6.3 1.89 6.3 7.5 0 5.3-2.78 8.19-7.4 8.19a10.06 10.06 0 01-7.62-3.42l-3 3a14.44 14.44 0 0010.75 4.47z"/><path id="Path-5" class="cls-4" d="M336.6 66.88v-8.61h4.51v-3.99h-4.51V44.3h-4.36l-.42 9.98h-9.77l9.4-22.52-4.2-1.74-10.5 24.68v3.57h15.01v8.61h4.84z"/><path id="Path-6" class="cls-4" d="M253.14 67.52c7.67 0 12.81-4.77 12.81-11 0-5.62-3.94-8.51-8.29-8.87a8.69 8.69 0 007.14-8.46c0-4.93-4.36-9.13-11.34-9.13a15 15 0 00-10.61 4.3l2.73 3a10.22 10.22 0 017.56-3.3c3.75 0 6.62 2.1 6.62 5.82 0 4.15-3.21 6.09-6.67 6.09h-2.15l-.58 3.84h3c4.2 0 7.3 1.68 7.3 6.66 0 4.31-2.94 7-7.77 7a10.39 10.39 0 01-7.89-3.55l-3.25 2.71c2.78 3.37 7.14 4.89 11.39 4.89z"/><path id="Path-7" class="cls-4" d="M189.43 66.88l.58-4.2h-16.75c11.76-10.71 15.91-16 15.91-22.5 0-5.66-4.1-10.16-11.17-10.16a13.3 13.3 0 00-11.25 5.36l3.36 2.62c2.25-2.67 4.2-3.83 7.61-3.83 3.89 0 6.2 2.42 6.2 6.25 0 5.67-3.1 9.66-16.44 22.5v3.94z"/><path id="Path-8" class="cls-4" d="M115.28 66.95V62.9h-7.4V30.77h-4.46L92.5 37.49l2.2 3.57 8.14-4.98V62.9h-8.87v4.05h21.31z"/><path id="Path-9" class="cls-5" d="M404.09 109.52c7.14 0 11.55 5.25 11.55 13.71 0 .94-.06 1.89-.11 2.52H397c.32 6.09 3.75 8.71 7.88 8.71a12.4 12.4 0 007.34-2.47l2.25 3.21a16 16 0 01-9.75 3.3c-8.29 0-13-5.82-13-14.43.03-8.35 4.75-14.55 12.37-14.55zm.05 3.94c-3.94 0-6.75 2.78-7.14 8.61h13.76c-.11-5.62-2.58-8.61-6.62-8.61z"/><path id="Path-8-2" class="cls-5" d="M335.67 103.52l5 .63V143h-4.46l-.42-3.52a9.2 9.2 0 01-7.83 4.15c-7.19 0-10.5-5.83-10.5-14.44 0-8.4 4.09-14.54 10.92-14.54a9.16 9.16 0 017.25 3.2zm-5.94 15.07c-4.3 0-6.82 3.41-6.82 10.55s2.25 10.5 6.3 10.5c2.94 0 5-1.94 6.45-4.2v-13.5a7.17 7.17 0 00-5.93-3.35z"/><path id="Path-9-2" class="cls-4" d="M255.68 143.75a15.35 15.35 0 009.5-3.36l-2.36-3.25a12.57 12.57 0 01-7 2.36c-4.56 0-7.87-2.89-7.87-10.08s3.25-10.5 7.87-10.5a12.28 12.28 0 017 2.42l2.36-3.26a14.38 14.38 0 00-9.4-3.31c-8.35 0-13.23 6.3-13.23 14.65-.05 8.66 4.73 14.33 13.13 14.33z"/><path id="Path-7-2" class="cls-5" d="M172.54 103.52v15.23a9.66 9.66 0 017.82-4.15c7.3 0 10.34 5.72 10.34 14.49 0 8.4-3.88 14.49-11 14.49a8.82 8.82 0 01-7.4-3.46L172 143h-4.5v-38.8zm6.56 15.07c-2.89 0-5.09 2-6.56 4.25v13.39a7.16 7.16 0 005.93 3.41c4.31 0 6.83-3.36 6.83-10.55s-2.21-10.5-6.2-10.5z"/><path id="Path-6-2" class="cls-5" d="M103.19 114.77c7.14 0 10.66 3.47 10.66 9.09v12.91c0 2.21.68 3 2.21 3.52l-1.21 3.46c-2.52-.31-4.46-1.41-5.36-3.88a10.71 10.71 0 01-8.74 3.88c-5.62 0-9-3.41-9-8.55 0-5.73 4.67-9 13.07-9h4v-2c0-3.83-2.36-5.3-6.35-5.3a23.07 23.07 0 00-7.3 1.41l-1.31-3.67a27.69 27.69 0 019.33-1.87zm5.62 14.76h-3.67c-5.83 0-8 2.1-8 5.56 0 3.2 1.69 4.94 5.05 4.94a8 8 0 006.66-3.75z"/><path id="Path-10" class="cls-4" d="M329.12 212.82c7.35-8.71 13.13-15.64 13.13-21.79 0-3.51-2.25-6.51-6.09-6.51-3.62 0-5.46 1.95-7 5.36-1.57-3.41-3.41-5.36-7-5.36-3.83 0-6.09 3-6.09 6.51-.07 6.2 5.71 13.08 13.05 21.79z"/><path id="Path-11" class="cls-4" d="M95.76 214c3.83 0 6.51-2.63 6.51-4.73v-18.9l12.34-3.09v16.32a6.14 6.14 0 00-2.94-.68c-3.68 0-6.56 2.1-6.56 4.73 0 2.41 2.1 3.67 5.51 3.67 3.83 0 6.51-2.62 6.51-4.72V183l-17.38 4.5v18.69a6.11 6.11 0 00-2.94-.68c-3.67 0-6.56 2.1-6.56 4.73 0 2.45 2.1 3.76 5.51 3.76z"/><g id="Group-5"><path id="Path-12" class="cls-4" d="M404.89 279.7V278c0-7.4 9.55-6.35 9.55-14.75 0-4.2-4-8.25-10.65-8.25a14.28 14.28 0 00-11.29 5.31L396 263a9.59 9.59 0 017.3-3.75c3.36 0 5.88 1.63 5.88 4.5 0 5.67-9.18 5.57-9.18 14.12v1.95z"/><path id="Path-13" class="cls-4" d="M402.58 292.52a3.68 3.68 0 10-.15 0z"/></g><g id="Group-3"><path id="Path-14" class="cls-4" d="M318.06 292.55l23.73-36.44-3.05-1.84-23.68 36.44 3 1.84z"/><path id="Path-14-2" class="cls-5" d="M321.47 254.59c4.88 0 7.66 3.83 7.66 8.4s-2.78 8.45-7.66 8.45-7.72-3.88-7.72-8.45 2.83-8.4 7.72-8.4zm0 3.31c-2.05 0-3.41 1.68-3.41 5.09 0 3.25 1.31 5.2 3.41 5.2s3.36-1.63 3.36-5.2-1.33-5.09-3.36-5.09z"/><path id="Path-15" class="cls-5" d="M336 274.91c4.88 0 7.66 3.83 7.66 8.4s-2.78 8.46-7.66 8.46-7.72-3.88-7.72-8.45 2.8-8.41 7.72-8.41zm0 3.3c-2 0-3.42 1.58-3.42 5.1 0 3.25 1.32 5.19 3.42 5.19s3.36-1.62 3.36-5.19-1.36-5.1-3.36-5.1z"/></g><path id="Path-13-2" class="cls-5" d="M255.75 247.52v7.83a17.26 17.26 0 019.75 4.2l-2.89 3a12.12 12.12 0 00-6.87-3.2v11.5C261.3 272.67 266 275.61 266 282c0 5.14-3.46 9.6-10.23 10.5v7.66h-3.68v-7.5a17.33 17.33 0 01-11.09-4.92l2.83-3.2a13 13 0 008.25 4v-13.87c-6.35-2.16-9.75-5.25-9.75-10.14 0-4.46 3.31-8.5 9.75-9.13v-7.88zm0 28.41v12.44c3.31-.68 5-2.68 5-6.14 0-2.79-1.21-4.68-5-6.3zm-3.67-16.41c-2.73.48-4.62 2.05-4.62 4.83 0 2.31 1 3.84 4.62 5.31z"/><path id="Path-12-2" class="cls-5" d="M177.92 255.77l-1.16 8.51H184l1.16-8.51h4.26l-1.21 8.51h4v3.83h-4.5l-1.5 11.39h4.1v3.75h-4.62l-1.07 8.75h-4.25l1.15-8.72h-7.27L173.1 292h-4.26l1.16-8.72h-4v-3.78h4.5l1.58-11.39H168v-3.83h4.57l1.12-8.51zm5.62 12.34h-7.3l-1.5 11.39H182z"/><path id="Path-11-2" class="cls-5" d="M103.29 252.77c13.39 0 16 10.71 16 21.79 0 13.23-1.42 19.85-7.82 19.85-4.31 0-6.14-4.62-6.2-7.46H105a7.41 7.41 0 01-7.2 5.09c-5.82 0-8-5.09-8-12 0-9 3.75-13.59 10.45-13.59a15 15 0 017.66 2V284c0 5.36 1.5 6.67 3.42 6.67 2.91 0 3.09-5.85 3.09-14.25v-1.63c0-10.18-1.73-17.85-11.13-17.85-3.51 0-7.45.95-11.86 4.83l-2.68-3.15a22 22 0 0114.54-5.85zM100.41 270c-4.47 0-5.83 3.26-5.83 10 0 5.09.94 8.4 3.94 8.4 3.41 0 4.46-2.94 5-4.46v-13.26a6.91 6.91 0 00-3.11-.68z"/></g></svg>


Removing only a few characters will have a near-imperceptible effect on performance. However, removing large swaths of information from a typeface can have a dramatic impact. A common example of where you’d want to do this is removing support for different languages from a typeface.

## Languages

Most workhorse typefaces include glyphs that let them express not only English, but multiple other languages. Not every font covers every language, so it’s something you’ll need to consider if you’re thinking about [implementing localization](https://alistapart.com/article/do-you-need-to-localize-your-website/).

### Noto

[Google’s Noto project](https://www.google.com/get/noto/) is an admirable attempt to create typefaces that captures every written language, to ensure that language can be expressed digitally in a well-designed way.

It is also a very popular typeface, with [Noto Sans claiming 409,037,860,189 total views](https://fonts.google.com/analytics) since being added to Google Fonts at the time this post is published.

[Noto Sans also clocks in at 12.2 MB](https://www.google.com/get/noto/#sans-lgc). That’s ~591% the size of [the median desktop website size in 2020](https://httparchive.org/reports/page-weight#bytesTotal). Now before you go panicking, know that the version of Noto served up on Google Fonts is a lot different than the font you download on the Noto project page.

## Hosting and optimization

There is a ton of optimization that goes on behind the scenes for cloud-hosted fonts, things like [dynamic subsetting](http://iamtomnewton.com/blog/dynamic-typography/) and other tricks people far smarter than me have set up. These features ensure small font files are dispatched quickly to the browsers requesting them, without developers having to think too hard about it.

By my calculation, Google Font’s version of Noto weighs in at ~32 kb when served to an evergreen desktop browser in the Northeast United States with a system language set to English. That’s not bad at all.

### Locally hosted fonts

[Hosting your fonts is usually faster](https://csswizardry.com/2020/05/the-fastest-google-fonts/) than using a cloud service. However, one of the tradeoffs that comes with this approach is that you sacrifice all that smart optimization magic that cloud-hosted font engineers have done behind the scenes. This means the served font size usually bumps back up.

Choosing to host your fonts locally means that you need to pay close attention to the total file size created by every font you add. This includes each weight, as well as its italic counterpart.

Variable fonts have a lot of potential for this situation, provided [the size of a variable font is smaller than using a careful application of only one or two weights](https://cloudfour.com/thinks/get-more-for-less-with-variable-fonts/#performance). Variable fonts may also have net-less HTTP requests, another important performance aspect to consider.

## Inclusive Design

Responsive Design is designing for an unknown browser. Inclusive Design is designing for an unknown user.

I don’t know who is visiting my website, why, or what they’ll do to it while they’re there. As a responsible host, I choose to include those foreign language glyphs so that if the page is translated it can be read.

This is also why I’m wary of approaches that [subset fonts based on what characters are visible](https://github.com/zachleat/glyphhanger/#only-search-your-page-for-visible-text) on your website or web app. I want my content to look the way it’s intended to, regardless of who is visiting my site and what languages they speak. I especially don’t want a situation where content is replaced with [tofu](https://www.figma.com/blog/when-fonts-fall/).

<figure
  role="figure"
  aria-label="Oh no.">
  <img
    alt="Screenshot of the Netflix homepage. Each letter has been replaced by a square tofu glyph character."
    loading="lazy"
    src="{{ '/img/posts/to-subset-or-not-subset-fonts/netflix.png' | url }}" />
  <figcaption>
    Oh no.
  </figcaption>
</figure>

## Budgeting

One of the reasons I feel comfortable serving non-subsetted fonts is that I maintain a [performance budget](https://addyosmani.com/blog/performance-budgets/) for my site. Because I serve lightweight HTML and CSS and minimal JavaScript, I have the opportunity to spend more bandwidth points loading nice-looking fonts.

<small>Update: I now serve a local font stack for even more fabulous savings.</small>

My site is [predominately written words](https://ia.net/topics/the-web-is-all-about-typography-period), so this prioritization makes sense. It is an intentional choice that emphasizes typography.

## That being said

An approach that is built from a disciplined performance budget is great for small projects where I have a lot of control over the environment. I’m aware of the consequences of decisions at scale, so I try to be more flexible for clients I consult with about performance decisions.

### Fabulous savings

For larger clients, removing glyphs can have a dramatic impact not only on load times, but on hosting bills. This can translate to tens, if not hundreds of thousands of dollars in savings.

Larger clients also tend to have more infrastructure for these kinds of concerns, especially if they have localization set up. I feel a lot more comfortable making the subsetting call in this sort of situation, in that I’m more confident there will be developers who can understand and maintain something like this after I leave.

### Inclusive Design, revisited

In some situations subsetting might not be ideal. But in other circumstances it could be a net-better approach. What I’m thinking of here is [low and no income and unhoused populations](https://www.pewresearch.org/fact-tank/2019/05/07/digital-divide-persists-even-as-lower-income-americans-make-gains-in-tech-adoption/ft_17-03-21_low-incometech_smartphone/).

Client websites and app tend to be, er, more heavy and fragile than what I make on my own time. I might not be able to convince them to move away from a SPA-based architecture and yank out three generations’ worth of framework bloat, but I can get them to replace a handful of files.

Every visit a website or web app eats away at someone’s data plan, so every little bit you can lower your payload size counts. Again, since you can’t know who is visiting your site or why, you shouldn’t be making assumptions about if your content is the kind of content these populations will be using.

To be more blunt about this: a poor person should be able to look at a luxury good on their phone without it killing their data plan, and it’s none of our damn business as to why they’re there.

## Future state

The [CSS Media Queries Level 5 Spec](https://www.w3.org/TR/mediaqueries-5/) includes a new [user query](https://decadecity.net/blog/2015/06/28/user-queries) I’m quite excited about: [`prefers-reduced-data`](https://polypane.app/blog/creating-websites-with-prefers-reduced-data/).

Much as how someone can currently [express a desire for a reduced motion experience](https://css-tricks.com/introduction-reduced-motion-media-query/), we’ll soon be able to conditionally target people who want to save on data.

Here's some pseudocode of what that might look like, although [the actual implementation might be a lot more complicated](https://github.com/w3c/csswg-drafts/issues/5272#issuecomment-786785976):

```css
/* Only load Noto Sans if data saver mode is not enabled */
@media (prefers-reduced-data: no-preference) {
  @font-face {
    font-family: "Noto Sans";
    font-weight: 400;
    src:
      url("noto-sans.woff2") format("woff2"),
      url("noto-sans.woff") format("woff");
  }
}

/*
  Use Noto Sans if it's available, otherwise
  fallback to another available sans-serif font
*/
body {
  font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

This means that the barrier to being kinder to the people using our website or web app is lowered. [Configuring a server](https://css-tricks.com/help-users-save-data/) is tricky. I can convince a client to let me add a few lines of CSS the same way I’m able to swap some font files out.

Why we need this user query in the first place, as well as [questioning our defaults](https://twitter.com/derSchepp/status/1202223608719908865) is a Whole Other Thing.

## It depends

Tech teaches you to think in binary. The real world is anything but.

Technical decisions aren’t done in a vacuum, and there’s many parameters to consider. The most important of these is the people who will be affected by them.
