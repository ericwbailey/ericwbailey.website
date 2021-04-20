---
layout: "layouts/post.njk"
title: How to make an ineffective 404 page
source: ericwbailey.design
excerpt: "The backlash was immediate, understandable, and entirely predictable"
date: 2021-04-04
year: 2021
tags:
  - ericwbailey
  - design
  - personal
  - user-testing
share:
  facebookImage: "share-image-facebook.png"
  facebookDescription: "A happy path with a smiley face and a broken path with a frowny face."
  twitterImage: "share-image-twitter.png"
  twitterDescription: "A red frowny face."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 17
---

404 pages are what a server will show you if you request something that isn’t there. Another way to say this: 404s are a last-ditch effort to help visitors get what they want if a webpage isn’t there anymore.

There’s [plenty of articles out there](https://www.creativebloq.com/web-design/best-404-pages-812505) about how to make entertaining, quirky, and fun 404 pages. And that’s kind of the problem.

Since you’re never supposed to see a 404 page, there’s the notion that this is a chance to flex your creative muscles—a little [Easter egg](https://en.m.wikipedia.org/wiki/Easter_egg_(media)) joke shared between web professionals. The problem is that this delight oftentimes comes at the expense of usability at a critical moment.

I’ll explain this further by burning a bridge.

Years ago, I worked for [Boston Globe Media Partners](https://www.bostonglobemedia.com/) (<abbr>BGMP</abbr>), a media organization that owns both [the Boston Globe](https://www.bostonglobe.com/) and [Boston.com](https://www.boston.com/).

If you are unfamiliar, the Boston Globe was the first commercial responsive website, proof that [Responsive Design](https://en.m.wikipedia.org/wiki/Responsive_web_design) worked at scale. It was [a monumental achievement](https://www.snd.org/2012/04/snd33-worlds-best-designed-website-bostonglobe-com/). I was not involved with this redesign, but I took the job because of it.

Boston​.​com is a living fossil, a holdout from [the Dot-com bubble](https://en.m.wikipedia.org/wiki/Dot-com_bubble). It is impressive in its own way: It hosts a huge corpus of local content, and is a rare example of a still-functioning mass-consumption website that is a quarter of a century old.

For a variety of reasons, BGMP likes to pretend Boston​.​com doesn’t exist. Most notable is its dabbling in revisionist history with regards to [the movie Spotlight](https://www.imdb.com/title/tt1895587/) and [the Catholic Archdiocese sex abuse scandal](http://archive.boston.com/globe/spotlight/abuse/archive/extras/coverups_archive.htm).

You might be wondering, “How is this connected to 404 pages?” Now that I am now free of its [toxic](https://medium.com/@worldmatt/dear-mr-president-its-ok-to-quit-your-job-after-only-a-few-weeks-i-know-because-i-did-it-too-d902d17191e9#.2slir6g5q), [capricious](https://www.bostonmagazine.com/news/2015/01/15/more-like-boston-dot-mess/), and [incompetent](https://www.bostonmagazine.com/news/2015/09/14/boston-dot-com-tim-molloy/) upper management, I can tell you.


## The redesign

With a change in management came the desire to update Boston​.​com’s design and content management system.

If you make websites, a thing you should know is that complete redesigns are oftentimes political, and not stemming from user demand. It’s a move to claim ownership over those who came before you.

I’ll spare you the gory details, but the redesign had all the hallmarks of an endeavor doomed to fail. The bit that’s important is my former coworker who was tasked with taking the new design direction and creating an updated 404 page.

They did a magnificent job.

A good 404 page understands that a visitor is not expecting to see it. Its appearance is a jarring and unexpected interruption to an expected or anticipated flow.

<svg role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 408">
  <title>Two 4 segment paths, one labeled 'Expected Experience' the other '404.' All 4 segments are present for the Expected Experience path and a smiley face is at the end. Only the first 2 of the 4 segments are highlighted for the 404 path, and a frowny face is present.</title>
  <defs>
    <style>
      .cls-1 { fill: #69ddae; }
      .cls-2 { fill: #ff8764; }
      .cls-3 { fill: none; }
      .cls-4 { fill: #dddddd; }
      .cls-5 { fill: #4a4a4a; }
      .cls-6 { isolation: isolate; }
      @media (prefers-color-scheme: dark) {
        .cls-4 { fill: #4a4a4a;}
        .cls-5 { fill: #dddddd; }
      }
    </style>
  </defs><g id="happy"><path id="Shape" class="cls-1" d="M630.28 109.74a39.57 39.57 0 1039.58 39.57 39.57 39.57 0 00-39.58-39.57zm0 70.54a31 31 0 1131-31 31 31 0 01-31 31z"/><circle id="Oval" class="cls-1" cx="618.67" cy="139.73" r="5.74"/><circle id="Oval-2" data-name="Oval" class="cls-1" cx="641.9" cy="139.73" r="5.74"/><path id="Path" class="cls-1" d="M630.29 170.41c10.61 0 19.21-7.16 19.21-16h-38.43c0 8.84 8.61 16 19.22 16z"/></g><g id="unhappy"><path id="Shape-2" data-name="Shape" class="cls-2" d="M310.28 318.74a39.57 39.57 0 1039.58 39.57 39.57 39.57 0 00-39.58-39.57zm0 70.54a31 31 0 1131-31 31 31 0 01-31 31z"/><circle id="Oval-3" data-name="Oval" class="cls-2" cx="298.67" cy="348.73" r="5.74"/><circle id="Oval-4" data-name="Oval" class="cls-2" cx="321.9" cy="348.73" r="5.74"/><path id="Path-2" data-name="Path" class="cls-2" d="M310.28 359.42c-10.61 0-19.21 7.16-19.21 16h38.43c0-8.84-8.61-16-19.22-16z"/></g><g id="unhappy-path"><circle class="cls-3" cx="630" cy="278" r="10"/><path class="cls-4" d="M630 258a20 20 0 00-19.34 15H494l5 5-5 5h116.66A20 20 0 10630 258zm0 30a10 10 0 1110-10 10 10 0 01-10 10zM469.19 257.46a5 5 0 10-7.07 7.08l8.46 8.46H339.37a20.16 20.16 0 010 10h131.21l-8.46 8.46a5 5 0 007.07 7.08L489.72 278z"/></g><g id="happy-path"><circle class="cls-3" cx="30" cy="69" r="10"/><path class="cls-5" d="M149.19 48.46a5 5 0 00-7.07 7.08l8.46 8.46H49.34a20 20 0 100 10h101.24l-8.46 8.46a5 5 0 007.07 7.08L169.72 69zM30 79a10 10 0 1110-10 10 10 0 01-10 10zM309.19 48.46a5 5 0 10-7.07 7.08l8.46 8.46H174l5 5-5 5h136.58l-8.46 8.46a5 5 0 007.07 7.08L329.72 69z"/><circle class="cls-3" cx="630" cy="69" r="10"/><path class="cls-5" d="M630 49a20 20 0 00-19.34 15H494l5 5-5 5h116.66A20 20 0 10630 49zm0 30a10 10 0 1110-10 10 10 0 01-10 10zM469.19 48.46a5 5 0 10-7.07 7.08l8.46 8.46H334l5 5-5 5h136.58l-8.46 8.46a5 5 0 007.07 7.08L489.72 69z"/><g id="Expected-Experience" class="cls-6"><g class="cls-6"><path class="cls-5" d="M488.77 15.52h-6.1V18h5.6v2h-5.6v3h6.38v2h-8.73V13.48h8.45zM489.89 25l2.91-4.31-2.8-4.19h2.73l1.44 2.5 1.39-2.47h2.65l-2.8 4.15 2.91 4.32h-2.78l-1.46-2.56L492.6 25zM506.8 17.4a4.5 4.5 0 011 3.23 5.14 5.14 0 01-1 3.43 3.31 3.31 0 01-2.63 1.18 2.77 2.77 0 01-1.7-.51 3.34 3.34 0 01-.72-.82v4.44h-2.2V16.48h2.13v1.26a3.51 3.51 0 01.77-.87 2.85 2.85 0 011.78-.57 3.33 3.33 0 012.57 1.1zm-1.71 1.6a1.59 1.59 0 00-1.47-.76 1.68 1.68 0 00-1.68 1.15 4.28 4.28 0 00-.24 1.55 2.45 2.45 0 00.8 2.08 1.81 1.81 0 001.12.36 1.62 1.62 0 001.43-.72 3.33 3.33 0 00.5-1.92 3.26 3.26 0 00-.46-1.74zM515 16.66a3.31 3.31 0 011.47 1.26 4.08 4.08 0 01.68 1.76 10.79 10.79 0 01.08 1.69H511a2 2 0 00.9 1.79 2.16 2.16 0 001.22.32 1.9 1.9 0 001.24-.39 2 2 0 00.46-.58h2.27a2.79 2.79 0 01-.82 1.54 4.16 4.16 0 01-3.27 1.24 4.65 4.65 0 01-3-1.05 4.14 4.14 0 01-1.3-3.41 4.59 4.59 0 011.18-3.39 4.08 4.08 0 013-1.18 4.76 4.76 0 012.12.4zm-3.33 1.92a2.31 2.31 0 00-.67 1.32h3.84a1.9 1.9 0 00-.6-1.35 2 2 0 00-1.32-.46 1.8 1.8 0 00-1.29.49zM523.41 19.54a2 2 0 00-.33-.86 1.34 1.34 0 00-1.16-.52 1.54 1.54 0 00-1.54 1.12 4.58 4.58 0 00-.22 1.58 4.17 4.17 0 00.22 1.5 1.47 1.47 0 001.5 1.06A1.33 1.33 0 00523 23a2.13 2.13 0 00.4-1.09h2.27a3.71 3.71 0 01-.73 1.92 3.58 3.58 0 01-3.11 1.46 3.62 3.62 0 01-3-1.22 4.9 4.9 0 01-1-3.16 5 5 0 011.07-3.41 3.74 3.74 0 013-1.22 4.45 4.45 0 012.62.72 3.37 3.37 0 011.21 2.54zM526.34 18.15v-1.59h1.18v-2.37h2.21v2.37h1.38v1.59h-1.38v4.5a1 1 0 00.13.65c.09.09.36.13.81.13h.44v1.67h-1.06a2.84 2.84 0 01-2.15-.55 1.62 1.62 0 01-.38-1.18v-5.22zM538.09 16.66a3.42 3.42 0 011.47 1.26 4.21 4.21 0 01.68 1.76 11 11 0 01.07 1.69h-6.2a2 2 0 00.89 1.79 2.21 2.21 0 001.23.32 1.87 1.87 0 001.23-.39 1.71 1.71 0 00.46-.58h2.28a2.88 2.88 0 01-.83 1.54 4.12 4.12 0 01-3.2 1.24 4.61 4.61 0 01-3-1.05 4.11 4.11 0 01-1.3-3.41 4.62 4.62 0 011.13-3.39 4.1 4.1 0 013.05-1.18 4.8 4.8 0 012.04.4zm-3.33 1.92a2.32 2.32 0 00-.6 1.32H538a1.89 1.89 0 00-.59-1.35 2 2 0 00-1.32-.46 1.77 1.77 0 00-1.33.49zM546 16.62a2.76 2.76 0 011 .94V13.5h2.26V25H547v-1.18a2.77 2.77 0 01-2.6 1.45 3.19 3.19 0 01-2.51-1.21 4.65 4.65 0 01-1-3.1 5.33 5.33 0 011-3.43 3.29 3.29 0 012.69-1.25 2.7 2.7 0 011.42.34zm.55 6.07a3.1 3.1 0 00.49-1.82 2.8 2.8 0 00-.79-2.24 1.69 1.69 0 00-1.12-.4 1.58 1.58 0 00-1.44.73 3.51 3.51 0 00-.45 1.84 3.38 3.38 0 00.46 1.88 1.56 1.56 0 001.41.71 1.65 1.65 0 001.39-.7zM564.35 15.52h-6.09V18h5.59v2h-5.59v3h6.37v2h-8.72V13.48h8.44zM565.48 25l2.91-4.31-2.78-4.19h2.72l1.42 2.5 1.39-2.47h2.65L571 20.65l2.9 4.35h-2.77l-1.47-2.56-1.48 2.56zM582.39 17.4a4.54 4.54 0 011 3.23 5.09 5.09 0 01-1 3.43 3.29 3.29 0 01-2.62 1.18 2.75 2.75 0 01-1.7-.51 3 3 0 01-.72-.82v4.44h-2.21V16.48h2.14v1.26a3.32 3.32 0 01.77-.87 2.84 2.84 0 011.77-.57 3.35 3.35 0 012.57 1.1zm-1.71 1.6a1.59 1.59 0 00-1.47-.76 1.66 1.66 0 00-1.68 1.15 4.28 4.28 0 00-.24 1.55 2.42 2.42 0 00.8 2.08 1.79 1.79 0 001.12.36 1.63 1.63 0 001.43-.72 3.33 3.33 0 00.49-1.92 3.34 3.34 0 00-.45-1.74zM590.55 16.66a3.42 3.42 0 011.45 1.26 4.08 4.08 0 01.68 1.76 11 11 0 01.07 1.69h-6.2a2 2 0 00.89 1.79 2.21 2.21 0 001.23.32 1.85 1.85 0 001.23-.39 1.71 1.71 0 00.46-.58h2.28a2.81 2.81 0 01-.83 1.54 4.12 4.12 0 01-3.2 1.24 4.61 4.61 0 01-3-1.05 4.11 4.11 0 01-1.3-3.41 4.62 4.62 0 011.17-3.39 4.1 4.1 0 013-1.18 4.76 4.76 0 012.07.4zm-3.33 1.92a2.32 2.32 0 00-.6 1.32h3.84a1.89 1.89 0 00-.59-1.35 2 2 0 00-1.32-.46 1.78 1.78 0 00-1.33.49zM598.63 16.29h.19v2.28h-.64a1.83 1.83 0 00-1.8.87 3.32 3.32 0 00-.26 1.52V25h-2.24v-8.52H596V18a4.55 4.55 0 01.9-1.17 2.48 2.48 0 011.62-.52zM602.41 15.47h-2.25v-2.06h2.25zm-2.25 1h2.25V25h-2.25zM610.12 16.66a3.42 3.42 0 011.47 1.26 4.08 4.08 0 01.68 1.76 11 11 0 01.07 1.69h-6.2a2 2 0 00.89 1.79 2.21 2.21 0 001.23.32 1.9 1.9 0 001.24-.39 1.83 1.83 0 00.45-.58h2.28a2.81 2.81 0 01-.83 1.54 4.12 4.12 0 01-3.2 1.24 4.61 4.61 0 01-3-1.05 4.11 4.11 0 01-1.3-3.41 4.62 4.62 0 011.17-3.39 4.1 4.1 0 013-1.18 4.76 4.76 0 012.05.4zm-3.33 1.92a2.25 2.25 0 00-.59 1.32h3.8a1.89 1.89 0 00-.59-1.35 2 2 0 00-1.32-.46 1.78 1.78 0 00-1.3.49zM620.34 17a2.85 2.85 0 01.83 2.3V25h-2.28v-5.18a2.35 2.35 0 00-.18-1 1.24 1.24 0 00-1.24-.66 1.53 1.53 0 00-1.54 1 3.23 3.23 0 00-.22 1.3V25h-2.23v-8.5h2.16v1.24a3.82 3.82 0 01.81-.94 2.76 2.76 0 011.73-.52 3.29 3.29 0 012.16.72zM628.34 19.54a2 2 0 00-.33-.86 1.34 1.34 0 00-1.16-.52 1.56 1.56 0 00-1.55 1.12 4.87 4.87 0 00-.21 1.58 4.43 4.43 0 00.21 1.5 1.49 1.49 0 001.51 1.06 1.33 1.33 0 001.11-.42 2.13 2.13 0 00.4-1.09h2.27a3.71 3.71 0 01-.73 1.92 4.18 4.18 0 01-6.13.24 4.9 4.9 0 01-1-3.16 5 5 0 011.07-3.41 3.74 3.74 0 013-1.22 4.45 4.45 0 012.62.72 3.37 3.37 0 011.21 2.54zM637.69 16.66a3.42 3.42 0 011.47 1.26 4.08 4.08 0 01.68 1.76 11 11 0 01.07 1.69h-6.2a2 2 0 00.89 1.79 2.21 2.21 0 001.23.32 1.9 1.9 0 001.24-.39 1.83 1.83 0 00.45-.58h2.28a2.81 2.81 0 01-.83 1.54 4.12 4.12 0 01-3.2 1.24 4.61 4.61 0 01-3-1.05 4.11 4.11 0 01-1.3-3.41 4.62 4.62 0 011.17-3.39 4.1 4.1 0 013.05-1.18 4.76 4.76 0 012 .4zm-3.33 1.92a2.25 2.25 0 00-.59 1.32h3.83a1.89 1.89 0 00-.59-1.35 2 2 0 00-1.32-.46 1.78 1.78 0 00-1.33.49z"/></g></g><circle class="cls-3" cx="30" cy="278" r="10"/><path class="cls-5" d="M149.19 257.46a5 5 0 00-7.07 7.08l8.46 8.46H49.34a20 20 0 100 10h101.24l-8.46 8.46a5 5 0 007.07 7.08L169.72 278zM30 288a10 10 0 1110-10 10 10 0 01-10 10z"/><circle class="cls-3" cx="310" cy="278" r="10"/><path class="cls-5" d="M310 258a20 20 0 00-19.34 15H174l5 5-5 5h116.66A20 20 0 10310 258zm0 30a10 10 0 1110-10 10 10 0 01-10 10z"/><g id="_404" data-name="404" class="cls-6"><g class="cls-6"><path class="cls-5" d="M304.52 231.56h-1.28V234h-2.18v-2.44h-4.49v-1.94l4.17-6.88h2.5v7.08h1.28zm-3.46-1.74v-4.88l-2.83 4.88zM312.49 224.12a11.19 11.19 0 010 8.65 3.81 3.81 0 01-6.07 0 11.19 11.19 0 010-8.65 3.78 3.78 0 016.07 0zm-4.35 7.31a1.31 1.31 0 001.32 1 1.28 1.28 0 001.3-1 14.77 14.77 0 000-6 1.27 1.27 0 00-1.3-1 1.3 1.3 0 00-1.32 1 14.32 14.32 0 000 6zM322.32 231.56H321V234h-2.18v-2.44h-4.49v-1.94l4.17-6.88h2.5v7.08h1.28zm-3.46-1.74v-4.88l-2.86 4.88z"/></g></g></g></svg>


It is vital for a 404 page to pre-empt the negative feelings that come from these subverted expectations and include:

- [Simple, direct language](https://thoughtbot.com/blog/improving-the-usability-and-accessibility-of-a-healthcare-website-by-being-mindful-of-reading-level) free of jargon,
- An acknowledgment that this experience is the result of an error, and importantly, an error the visitor didn’t create,
- Options for what to do, and
- Locations they could go to instead.

Providing this information meets a person where they are in a state of crisis, and provides a clear and straightforward way to get them back on track.

If you are technologically literate, chances are good you understand what a 404 page is. If you’re not, there is a whole host of negative emotions encountering one can create. The worst of those feelings is that [the error is something that they’ve somehow created](https://alistapart.com/article/paint-the-picture-not-the-frame/).

The other thing is 404s can still be quirky! In fact, a thoughtful application of content design can help assuage the concerns of someone who unexpectedly finds themselves on one. Just make sure that their immediate needs are met before trying to get creative.


## Politics

The problem is, if designers don’t have organizational clout the scope of change they can affect is limited.

As mentioned earlier, redesigns are political. Since 404 pages are seen as fun, it was perceived as an opportunity to extract a little joy from the grueling redesign process. A manager overrode my coworker’s design and went with this instead:

<figure
  role="figure"
  aria-label="Source: Bill Buckner is the butt of painfully funny 404 error page - Network World.">
  <img
    alt="Sorry, this one's an error. The page you requested has either moved or been deleted. Below is a black and white photo Red Sox first baseman Bill Buckner bending over to catch a ground ball rolling towards him. Behind him is a referee. Screenshot."
    src="{{ '/img/posts/how-to-make-an-ineffective-404-page/boston-dot-com-old-404.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.networkworld.com/article/2226759/bill-buckner-is-the-butt-of-painfully-funny-404-error-page.html"> Bill Buckner is the butt of painfully funny 404 error page</a> - Network World.
  </figcaption>
</figure>

The manager got to have their selfish moment of fun, and this is what went live when the redesign switch was thrown.


## Antipattern

This design is the antithesis of a helpful 404 page.

If you aren’t familiar with baseball lore, the photo is meaningless. Yes, Boston does love baseball, but it is a huge assumption to make that every visitor is a fan (there’s also smaller sub-assumptions that you’re specifically a Red Sox fan/enemy and over the age of 40ish, but I digress).

This design immediately segregates the audience into people who get the reference and people who are left out. Not a great idea considering you’re already not happy to see this page in the first place.

This design was also a hard stop. It doesn’t indicate who may have moved or deleted the page, or why. There was also no instruction on:

- Whose fault it was,
- What to do about it, or
- Where they could go instead.

Yes, the primary navigation was used in this template. But someone in charged emotional state is far more likely to close the tab than use it. Better to meet the person where they are and present straightforward error recovery options inline.


## Slow boil

When I said “the redesign switch was thrown,” I meant it. The other problem with this 404 page design was that the strategy was to suddenly update Boston​.​com without warning.

From a reader’s perspective, this update was completely arbitrary. Boston​.​com had hundreds of thousands of readers, many of them who were loyal daily visitors. The backlash was immediate, understandable, and entirely predictable.

Since Boston​.​com has been around for over two decades, it also meant that regular readers were extremely used to how the site looked and behaved. Many of them had also built up muscle memory for how they interacted with its content.

Slapping “beta release” on the logo wouldn't cut it.

For this kind of audience, it’s a far better approach to slowly update the design in small pieces over time. This side-steps the shock of a sudden change. Additional benefits of this approach are:

- Being a far smaller engineering ask, and
- Being able to perform qualitative user research to course correct as you go.

On top of this, Boston​.​com [shut down its forums](https://www.boston.com/boston-com-forums-retired). This feature contained a community of self-moderated, diehard users who had formed organically over the years.

Boston​.​com forum members represented users who came to the site of their own volition multiple times per day. They were so motivated that they willingly and repeatedly slogged through one of [the worst ad experiences on the web](https://www.nytimes.com/interactive/2015/10/01/business/cost-of-mobile-ads.html).


## System shock

Managing a huge inventory of content is a [difficult, yet important](https://twitter.com/w3c/status/1374375624375103488) thing to do. Replatforming the content management system that controlled this content in the middle of a dramatic visual update is anything but ideal.

The end result was the 404 page getting shown to site visitors over and over again after the redesign switch was flipped.

Many visitors were confused about the update, or who couldn’t access their favorite parts of the site anymore. Many were also panicked and looking for answers, but got a trite joke instead. And the thing is: they didn’t **need** to be there.

Sometimes the 404 was because a page had been deleted. Sometimes it was because a redirect URL didn’t work as anticipated. Sometimes the culprit was performance problems, where many users frantically navigating around caused even more errors to get generated. In this case, [other status codes should have been used](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), but the redesign’s arbitrary deadline and consequently breakneck pace didn’t allow for such considerations.

The end effect this created was a lot like visiting your favorite restaurant after learning they updated their menu, only to have them repeatedly slam the door in your face until you left. It is an understatement to say this made an impact on the daily number of hits—and not for the better.

Did the 404 page’s design unmake Boston​.​com? No, but it sure didn’t help.


## A problem can be two things

The surface-level design issues of the 404 page caused it to fail. However, the page’s design was a symptom, and not a cause.

Vanity is almost always at odds with user needs. Organizations where domain experts aren’t structurally empowered to practice their craft are the real issue. On top of this, a [disconnect between management and actual users](https://thoughtbot.com/blog/the-world-does-not-revolve-around-your-product) acts as a crucible for failure.

The best way to avoid this? Carefully cultivate a healthy organizational culture that promotes things like [open dialog](https://thoughtbot.com/blog/a-conversation-can-be-an-output), constructive critique, and knowledge of the product and the medium at all levels of the organization. This takes deep, intentional, and oftentimes painful work.


## Screaming into the void

I need to stress that there were incredibly smart, talented, passionate people working in BGMP’s trenches—great people doing good work and producing miracles on the regular. Some are still there, fighting the good fight.

I should also note have some lifelong friendships forged from my time there, and consider myself incredibly fortunate to have them. Some of them I’m even lucky enough to [have been reunited with](https://www.youtube.com/watch?v=26J0uDIGErM) in a work context (hi Elaina!).

The problem of good work is it requires good culture to be recognized. The problem of good culture is it’s highly subjective. [The purpose of a system is what it does.](https://en.m.wikipedia.org/wiki/The_purpose_of_a_system_is_what_it_does)

For me, it was a question of diminishing returns. I do think part of a designer’s role is pushing for institutional change, but it requires a structure where the institution is willing to listen.


## Present day

[The current 404 for Boston.com](http://archive.boston.com/404) looks like this:

<figure
  role="figure"
  aria-label="Bold move to include a banner ad.">
  <img
    alt="A yellow warning sign labeled “404”. This page isn't the first thing to get lost in Boston. Keep calm and return to the previous page. To report an issue, please contact us at feedback@boston.com. Screenshot."
    src="{{ '/img/posts/how-to-make-an-ineffective-404-page/boston-dot-com-new-404.png' | url }}" />
  <figcaption>
    Bold move to include a banner ad.
  </figcaption>
</figure>

It’s a little bit better, but honestly still not too great. I guess at this point the damage has already been done.

