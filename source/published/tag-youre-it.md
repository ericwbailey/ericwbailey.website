---
layout: "layouts/post.njk"
title: Tag, you’re it
source: ericwbailey.website
excerpt: "I guess I came up being blog-adjacent"
date: 2025-03-18
year: 2025
tags:
  - Approach
  - Cognition
  - Eleventy
  - Personal
  - Social Media
share:
  facebookDescription: "Stick figures playing a game of tag."
  twitterDescription: "Stick figures playing a game of tag."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 4
---

I’ve been seeing, and enjoying reading these posts as they pop up in my RSS reader. [Dave Rupert tagged me into the chain](https://daverupert.com/2025/03/tag-you-re-it/), so here we go!

## Why did you start blogging in the first place?

With the gift of hindsight, I guess I came up being blog-adjacent. Like Dave, I also had a background in publishing as a youth.

I worked for my high school newspaper, and had a part- and then later full-time job at [my local newspaper](https://www.nashuatelegraph.com/). I also published a weirdo, [monkey cheese](https://www.urbandictionary.com/define.php?term=Monkey+Cheese) nerd zine. Its main claims to fame were both pissing off the principal and preventing me from getting dates.

<figure
  role="figure"
  aria-label="Zines are cool and embracing cringe will set you free.">
  <img
    alt="Two black and white photocopied zines, one stacked on top of the other. The zine’s title is ‘Plorph’ and features a repeating clipart pattern of a abstract-looking cartoon bird. The title’s typography uses a balloon text effect. The zine’s tagline reads, ‘Ramblings and general chaos… on paper!’ and its issue number reads, ‘Twice is the number’. The zines are stapled 8.5 by 11 pages, and the paper is slightly yellowed with age."
    loading="lazy"
    src="{{ '/img/posts/tag-youre-it/plorph.png' | url }}" />
  <figcaption>
    <a href="https://ericwbailey.website/published/multipage-version-zine-issue-one/">Zines are cool</a> and embracing cringe will set you free.
  </figcaption>
</figure>

I read a ton of blogs, but I never initially thought I’d be be someone who published one. This was due to fear of dog-piling criticism, as well as not thinking I had anything meaningful to contribute.

Then [I got Kivikoskied](https://ericwbailey.website/published/100/#the-kivikosking-part). Reader, I strongly encourage you to [get Kivikoskied yourself](https://ericwbailey.website/published/100/#the-advice-part).

The first post I put on my site was [a reaction to the WebAIM Millions report](https://ericwbailey.website/published/fighting-uphill/). Reading through it generated enough feelings that I needed a place to put them in a constructive way.

## What platform are you using to manage your blog and why did you choose it?

The reaction to the WebAIM Millions report was originally just a HTML page with a dream. That page seemed to resonate with people, so with that encouragement I had to build blogging infrastructure after the fact.

That infrastructure wound up being [Eleventy](https://www.11ty.dev/). I love Eleventy, and it’s only gotten better since that initial adoption. [Zach Leatherman](https://www.zachleat.com/) is a mensch, and I sing the praises of his project every chance I can get.

I love blogging with Eleventy because **it prioritizes speed, stability, and performance**. 

Static web pages generated via Markdown are easy enough to wrangle. This means I can **spend the majority of my time focusing on writing**, and **not managing dependencies or database updates**.

## Have you blogged on other platforms before?

[WordPress](https://wordpress.org/), [Jekyll](https://jekyllrb.com/), [thoughtbot’s homegrown CMS](https://thoughtbot.com/blog), and a few others. May you never have to work with [Méthode](https://en.wikipedia.org/wiki/EidosMedia#Software).

## How do you write your posts? For example, in a local editing tool, or in a panel/dashboard that’s part of your blog?

I’ve evaluated countless writing apps, but find myself keep coming back to [Dropbox Paper](https://paper.dropbox.com/).

I’m highly distractible, and love to [fiddle and tinker](https://ericwbailey.website/published/i-restyled-my-mastodon-instance/). Because of this, I find that Paper’s intentional, designed simplicity keeps me focused and on-task. It’s a shame that we live in [the rot economy](https://www.wheresyoured.at/the-rot-economy/)—where innovation is synonymous with value extraction—and there is apparently no longer enough incentive to maintain it.

The post is then: 

1. Eexported as a Markdown file from Paper,
1. Has its contents pasted into VS Code, and cleaned up a little bit,
1. Images and other content is added,
1. Metadata is then added, and
1. It is all merged into GitHub.

And voilà! Blog post! Granted there are more efficient ways to do this, but I find the ritual of it all soothing.

## When do you feel most inspired to write?

I’m going to share a little secret with you: Nearly every technical blog post I write is a longform [subtweet](https://www.merriam-webster.com/dictionary/subtweet).

By this, I mean I use writing as a way to channel a lot of my anxieties and frustrations into something constructive. I wish I wrote more [silly posts](https://ericwbailey.website/published/in-defense-of-mega-man-boss-lairs/), but it’s difficult to prioritize them given the state of things.

## Do you publish immediately after writing, or do you let it simmer a bit as a draft?

I’ll chip away at a draft for weeks, moving sections around and tweaking language until the entire thing feels cohesive. It’s less perfectionism and more wanting to be sure I’m communicating my thoughts as clearly as I can.

There is also [the inevitable flurry of edits](https://bsky.app/profile/vale.rocks/post/3lkdvfz6hcc2b) that follow hitting publish. I’d bottle that feeling of sudden, panicked clarity if I could.

## What are you generally interested in writing about?

The intersection of accessibility, usability, design systems, and the web platform. I’m also a sucker for CSS, tech culture, and [a good metaphor](https://ericwbailey.website/published/tech-metaphors/).

## Who are you writing for?

I write for people who are curious about the web, accessibility, and frontend technology at a medium-to-high level of familiarity. It has been so liberating to not have to explain the basics of accessibility and why it matters for every new post I write.

I also write for myself as [augmented memory](https://ericwbailey.website/published/all-the-user-facing-states/). This, along with services like [Pinboard](https://pinboard.in/u:ericwbailey) help with [my recall](https://sdamstudy.weebly.com/what-is-sdam.html).

Blog posts are also conversations. It is also a disservice to both audiences if I’m not weaving a lot of contextually relevant voices into the work as outgoing links.

<div class="centered-media-outer">
  <figure
    class="centered-media-inner-4"
    role="figure"
    aria-label="Signs of life!">
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="{{ '/img/posts/tag-youre-it/link-graph-on-dark.png' | url }}">
      <img
        alt="A hub and spoke diagram. There are over 30 nodes extending from a central node, with three layers of depth."
        loading="lazy"
        src="{{ '/img/posts/tag-youre-it/link-graph-on-light.png' | url }}">
    </picture>
    <figcaption>
      Signs of life!
    </figcaption>
  </figure>
</div>

## What’s your favorite post on your blog?

My favorite post on my website is my opus, [*Accessibility annotation kits only annotate*](https://ericwbailey.website/published/accessibility-annotation-kits-only-annotate/). It took forever to put those thoughts into words.

My favorite post on another website is [*Consider the Tomato*](https://thoughtbot.com/blog/consider-the-tomato). thoughtbot tolerated and encouraged a lot of my shenanigans, and I’m thankful for that.

## Any future plans for your blog? Maybe a redesign, a move to another platform, or adding a new feature?

This website is in desperate need of a redesign, and the “updating in the open” banner is an albatross around my neck.

Ironically, the time I should spend on that is spent writing blog posts. I’m now at the point where I fantasize about taking a month off of work to make said redesign happen. Grinning face with sweat emoji.

## Tag ‘em

I’d tag everyone on my RSS reader, if I could. Until then:

- [Adrian Roselli](https://adrianroselli.com/). I’m more or less contractually obligated to include a link to Adrian’s site any time I write about accessibility, as chances are he’s already covered it.
- [Ben Myers](https://benmyers.dev/). Another favorite accessibility author. I really enjoy his takes on disability and digital accessibility.
- [Jan Maarten](https://janmaarten.com/). Coworker and samebrain friend, whose longform pieces are always worth reading.
- [Jim Nielsen](https://blog.jim-nielsen.com/). A blogger's blogger. Be sure to check out his Notes as well.
- [Melanie Richards](https://melanie-richards.com/). Melanie is, in a word, prolific. I’m in awe of her digital gardening efforts.
- [Miriam Suzanne](https://www.miriamsuzanne.com/). Less a triple threat and more a, uh, quintuple threat? Brilliance at every turn.
