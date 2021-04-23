---
layout: "layouts/post.njk"
title: To subset or not subset fonts
source: ericwbailey.design
excerpt: "Tech teaches you to think in binary. The real world is anything but"
date: 2021-04-26
year: 2021
tags:
  - inclusion
  - performance
  - typography
furtherReading:
  - title: "Wakamaifondue"
    url: https://wakamaifondue.com/
  - title: " zachleat/glyphhanger "
    url: https://github.com/zachleat/glyphhanger/
  - title: "How I set up Glyphhanger on macOS for optimizing and converting font files for the Web - Sara Soueidan"
    url: https://www.sarasoueidan.com/blog/glyphhanger/
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 22
---

One of the niche things you can do to improve the performance on your website or web app is to [subset your fonts](http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting).

If you are not familiar, subsetting is the act of removing glyphs and other associated information from a font file. You can cherrypick individual glyphs, as well as specifying entire ranges of information. For example, you could take a copy of [Arial](https://www.aivosto.com/fontitin/help/sample-all.html#largechar) and yank out the glyphs used for [box drawing](https://en.m.wikipedia.org/wiki/Box-drawing_character).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400">
  <defs>
  <style>
    .cls-1 { fill: #ff8764; opacity: 0.15; isolation: isolate; }
    .cls-2 { fill: none; stroke: #ff8764; }
    .cls-3 { fill: #ffffff; }
    .cls-3,
    .cls-4 { fill-rule: evenodd; }
    .cls-4,
    .cls-5 { fill: #4a4a4a; }
    @media (prefers-color-scheme: dark) {
      .cls-3 { fill: #4a4a4a; }
      .cls-5 { fill: #e8e8e8; }
    }
  </style>
  </defs><g id="removed-bg"><path id="Rectangle" class="cls-1" d="M100 200h200v100H100z"/><path id="Rectangle-2" data-name="Rectangle" class="cls-1" d="M400 200h100v100H400z"/></g><g id="removed-frame"><path id="Rectangle-3" data-name="Rectangle" class="cls-2" d="M400.5 200.5h99v99h-99z"/><path id="Rectangle-4" data-name="Rectangle" class="cls-2" d="M200 200.5h99.5v99H200z"/><path id="Rectangle-5" data-name="Rectangle" class="cls-2" d="M100.5 200.5H200v99h-99.5z"/></g><g id="removed"><path id="Path" class="cls-3" d="M466.2 268.73l-2.8-4.55h-10.92l-1.12-9.45c1.89 3.22 4.2 4.62 7.56 4.62a7 7 0 007.28-7.35c0-5.11-2.31-8.19-6.79-8.19a9.58 9.58 0 00-4.69 1c1.89-1.54 3.78-3.36 3.78-7.14 0-4.48-3.36-6.65-8.4-6.65s-8.4 2.17-8.4 6.65c0 3.78 1.89 5.6 3.78 7.14a9.58 9.58 0 00-4.69-1c-4.48 0-6.79 3.08-6.79 8.19a7 7 0 007.28 7.35c3.29 0 5.6-1.4 7.56-4.62l-1.12 9.45H436.8l-2.8 4.55z"/><path id="Path-2" data-name="Path" class="cls-3" d="M266.2 268.73l-2.8-4.55h-10.92l-1.12-9.45a8.63 8.63 0 008 4.62c4.2 0 6.86-2.87 6.86-7.35 0-6.3-6.16-11.83-16.1-21-9.94 9.17-16.1 14.7-16.1 21 0 4.48 2.66 7.35 6.86 7.35a8.63 8.63 0 008-4.62l-1.12 9.45H236.8l-2.8 4.55z"/><path id="Path-3" data-name="Path" class="cls-3" d="M149.72 269.57l13.72-19.46L149.72 231 136 250.11l13.72 19.46z"/></g><g id="kept"><path id="Path-4" data-name="Path" class="cls-4" d="M448.35 74.07c10.15 0 16.73-6.51 16.73-16.24s-5.46-15.19-13.3-15.19a16.24 16.24 0 00-8.12 2V30.18h18.83l1-5.18h-26.27v24.36h5.25a17.94 17.94 0 017.21-1.61c4.76 0 8.4 2.52 8.4 10 0 7.07-3.71 10.92-9.87 10.92a13.36 13.36 0 01-10.15-4.55L434 68.05a19.24 19.24 0 0014.35 6.02z"/><path id="Path-5" data-name="Path" class="cls-4" d="M360.46 74.14V62.66h6.02v-5.32h-6.02v-13.3h-5.81l-.56 13.3h-13.02l12.53-30.03L348 25l-14 32.9v4.76h20.02v11.48h6.44z"/><path id="Path-6" data-name="Path" class="cls-4" d="M249.19 75c10.22 0 17.08-6.37 17.08-14.7 0-7.49-5.25-11.34-11.06-11.83 5.25-1.12 9.52-5.39 9.52-11.27 0-6.58-5.81-12.18-15.12-12.18a20 20 0 00-14.14 5.74l3.64 4c3.08-2.94 6-4.41 10.08-4.41 5 0 8.82 2.8 8.82 7.77 0 5.53-4.27 8.12-8.89 8.12h-2.87l-.77 5.11h4.06c5.6 0 9.73 2.24 9.73 8.89 0 5.74-3.92 9.38-10.36 9.38a13.82 13.82 0 01-10.57-4.76L234 68.47C237.71 73 243.52 75 249.19 75z"/><path id="Path-7" data-name="Path" class="cls-4" d="M164.24 74.14l.77-5.6h-22.33c15.68-14.28 21.21-21.28 21.21-30C163.89 31 158.43 25 149 25a17.71 17.71 0 00-15 7.14l4.48 3.5c3-3.57 5.6-5.11 10.15-5.11 5.18 0 8.26 3.22 8.26 8.33 0 7.56-4.13 12.88-21.91 30v5.25z"/><path id="Path-8" data-name="Path" class="cls-4" d="M65.38 74.23v-5.39h-9.87V26h-5.95L35 34.96l2.94 4.76 10.85-6.65v35.77H36.96v5.39h28.42z"/><path id="Path-9" class="cls-5" d="M450.45 131c9.52 0 15.4 7 15.4 18.27 0 1.26-.07 2.52-.14 3.36H441c.42 8.12 5 11.62 10.5 11.62a16.66 16.66 0 009.8-3.29l3 4.27a21.31 21.31 0 01-13 4.41c-11.06 0-17.29-7.77-17.29-19.25C434 139.26 440.3 131 450.45 131zm.07 5.25c-5.25 0-9 3.71-9.52 11.48h18.34c-.14-7.49-3.43-11.48-8.82-11.48z"/><path id="Path-8-2" data-name="Path-8" class="cls-5" d="M359.22 123l6.72.84v51.73H360l-.56-4.69a12.27 12.27 0 01-10.44 5.53c-9.59 0-14-7.77-14-19.25 0-11.2 5.46-19.39 14.56-19.39a12.17 12.17 0 019.66 4.27zm-7.91 20.09c-5.74 0-9.1 4.55-9.1 14.07s3 14 8.4 14c3.92 0 6.65-2.59 8.61-5.6v-18a9.58 9.58 0 00-7.91-4.47z"/><path id="Path-9-2" data-name="Path" class="cls-4" d="M252.57 176.64a20.51 20.51 0 0012.67-4.48l-3.15-4.34a16.75 16.75 0 01-9.38 3.15c-6.09 0-10.5-3.85-10.5-13.44s4.34-14 10.5-14a16.29 16.29 0 019.31 3.22l3.15-4.34a19.13 19.13 0 00-12.53-4.41c-11.13 0-17.64 8.4-17.64 19.53 0 11.55 6.37 19.11 17.57 19.11z"/><path id="Path-7-2" data-name="Path-7" class="cls-5" d="M141.72 123v20.3a12.89 12.89 0 0110.43-5.53c9.73 0 13.79 7.63 13.79 19.32 0 11.2-5.18 19.32-14.7 19.32a11.77 11.77 0 01-9.87-4.62l-.42 3.78H135v-51.73zm8.75 20.09c-3.85 0-6.79 2.73-8.75 5.67v17.85a9.56 9.56 0 007.91 4.55c5.74 0 9.1-4.48 9.1-14.07s-2.94-14-8.26-14z"/><path id="Path-6-2" data-name="Path-6" class="cls-5" d="M49.26 138c9.52 0 14.21 4.62 14.21 12.11v17.22c0 2.94.91 4.06 2.94 4.69l-1.61 4.62c-3.36-.42-5.95-1.89-7.14-5.18-2.66 3.43-6.86 5.18-11.66 5.18-7.49 0-12-4.55-12-11.41 0-7.63 6.23-12 17.43-12h5.32v-2.73c0-5.11-3.15-7.07-8.47-7.07a30.9 30.9 0 00-9.73 1.89l-1.75-4.9A36.9 36.9 0 0149.26 138zm7.49 19.67h-4.9c-7.77 0-10.71 2.8-10.71 7.42 0 4.27 2.24 6.58 6.72 6.58a10.69 10.69 0 008.89-5z"/><path id="Path-10" data-name="Path" class="cls-4" d="M350.5 268.73c9.8-11.62 17.5-20.86 17.5-29.05 0-4.69-3-8.68-8.12-8.68-4.83 0-7.28 2.59-9.38 7.14-2.1-4.55-4.55-7.14-9.38-7.14-5.11 0-8.12 4-8.12 8.68 0 8.26 7.7 17.43 17.5 29.05z"/><path id="Path-11" data-name="Path" class="cls-4" d="M39.35 270.23c5.11 0 8.68-3.5 8.68-6.3V238.8l16.45-4.13v21.77a8.11 8.11 0 00-3.92-.91c-4.9 0-8.75 2.8-8.75 6.3 0 3.22 2.8 4.9 7.35 4.9 5.11 0 8.68-3.5 8.68-6.3V229l-23.17 6v24.92a8.11 8.11 0 00-3.92-.91c-4.9 0-8.75 2.8-8.75 6.3 0 3.24 2.8 4.92 7.35 4.92z"/><g id="Group-5"><path id="Path-12" data-name="Path" class="cls-4" d="M451.52 357.9v-2.24c0-9.87 12.74-8.47 12.74-19.67 0-5.6-5.32-11-14.21-11a19.08 19.08 0 00-15.05 7.08l4.62 3.5a12.77 12.77 0 019.73-5c4.48 0 7.84 2.17 7.84 6 0 7.56-12.25 7.42-12.25 18.83v2.59z"/><path id="Path-13" data-name="Path" class="cls-4" d="M448.44 375a4.94 4.94 0 10-5-5 4.9 4.9 0 005 5z"/></g><g id="Group-3"><path id="Path-14" data-name="Path" class="cls-4" d="M335.74 375.03l31.64-48.58-4.06-2.45-31.57 48.58 3.99 2.45z"/><path id="Path-14-2" data-name="Path-14" class="cls-5" d="M340.29 324.42c6.51 0 10.22 5.11 10.22 11.2s-3.71 11.27-10.22 11.27S330 341.71 330 335.62s3.78-11.2 10.29-11.2zm0 4.41c-2.73 0-4.55 2.24-4.55 6.79 0 4.34 1.75 6.93 4.55 6.93s4.48-2.17 4.48-6.93-1.77-6.79-4.48-6.79z"/><path id="Path-15" class="cls-5" d="M359.61 351.51c6.51 0 10.22 5.11 10.22 11.2S366.12 374 359.61 374s-10.29-5.18-10.29-11.27 3.78-11.22 10.29-11.22zm0 4.41c-2.73 0-4.55 2.1-4.55 6.79 0 4.34 1.75 6.93 4.55 6.93s4.48-2.17 4.48-6.93-1.75-6.79-4.48-6.79z"/></g><path id="Path-13-2" data-name="Path-13" class="cls-5" d="M252.67 315v10.43a23.09 23.09 0 0113 5.6l-3.85 4.06a16.16 16.16 0 00-9.17-4.27v15.33c7.42 2.38 13.65 6.3 13.65 14.84 0 6.86-4.62 12.81-13.65 14v10.22h-4.9v-10a23.13 23.13 0 01-14.75-6.59l3.78-4.27a17.19 17.19 0 0011 5.39v-18.55c-8.47-2.87-13-7-13-13.51 0-5.95 4.41-11.34 13-12.18V315zm0 37.87v16.59c4.41-.91 6.65-3.57 6.65-8.19 0-3.71-1.61-6.23-6.65-8.4zm-4.9-21.87c-3.64.63-6.16 2.73-6.16 6.44 0 3.08 1.33 5.11 6.16 7.07z"/><path id="Path-12-2" data-name="Path-12" class="cls-5" d="M148.89 326l-1.54 11.34H157l1.55-11.34h5.67l-1.61 11.34H168v5.11h-6l-2 15.19h5.46v5h-6.16l-1.47 11.62h-5.67l1.54-11.62H144l-1.54 11.62h-5.67l1.54-11.62H133v-5h6l2.1-15.19h-5.46v-5.11h6.09l1.49-11.34zm7.49 16.45h-9.73l-2 15.19h9.66z"/><path id="Path-11-2" data-name="Path-11" class="cls-5" d="M49.39 322c17.85 0 21.28 14.28 21.28 29.05 0 17.64-1.89 26.46-10.43 26.46-5.74 0-8.19-6.16-8.26-9.94h-.28c-1.33 3.36-4.13 6.79-9.59 6.79-7.77 0-10.71-6.79-10.71-16 0-12 5-18.13 13.93-18.13a20.07 20.07 0 0110.22 2.66v20.72c0 7.14 2 8.89 4.55 8.89 3.88 0 4.12-7.8 4.13-19v-2.17c0-13.58-2.31-23.8-14.84-23.8-4.69 0-9.94 1.26-15.82 6.44l-3.57-4.2c6.3-5.46 13-7.77 19.39-7.77zm-3.85 23c-5.95 0-7.77 4.34-7.77 13.37 0 6.79 1.26 11.2 5.25 11.2 4.55 0 5.95-3.92 6.65-5.95v-17.75a9.15 9.15 0 00-4.13-.87z"/></g></svg>

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
    src="{{ '/img/posts/to-subset-or-not-subset-fonts/netflix.png' | url }}" />
  <figcaption>
    Oh no.
  </figcaption>
</figure>

## Budgeting

One of the reasons I feel comfortable serving non-subsetted fonts is that I maintain a [performance budget](https://addyosmani.com/blog/performance-budgets/) for my site. Because I serve lightweight HTML and CSS and minimal JavaScript, I have the opportunity to spend more bandwidth points loading nice-looking fonts.

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

Much as how someone can currently [express a desire for a reduced motion experience](https://css-tricks.com/introduction-reduced-motion-media-query/), we’ll soon be able to conditionally target people who want to save on data:

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
