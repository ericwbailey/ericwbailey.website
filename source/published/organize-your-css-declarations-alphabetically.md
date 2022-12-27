---
layout: "layouts/post.njk"
title: Organize your CSS declarations alphabetically
source: ericwbailey.website
excerpt: "There are a few schools of thought when it comes to organizing your CSS declarations"
date: 2021-06-21
year: 2021
tags:
  - Approach
  - CSS
  - Development
attribution: "Thank you to <a href='https://www.kathleenmcmahon.dev/'>Kathleen McMahon</a> for the inspiration for this post."
responses:
  - title: "Ordering CSS Declarations"
    name: "Jim Nielsen"
    url: https://blog.jim-nielsen.com/2022/ordering-css-delcarations/
embeddedContent:
  - Tweet
sharedOn:
  twitter: https://twitter.com/ericwbailey/status/1407017945490935813
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 29
---

There are a few schools of thought when it comes to organizing your CSS declarations. Each approach uses an underlying concept to impose a specific declaration order.

When I say organizing declarations, I’m talking about the CSS code placed inside [selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), not [an approach to organizing Sass partials](https://matthewelsom.com/blog/simple-scss-playbook.html).

Two examples of CSS declaration ordering that come to mind are:


1. Jonathan Snook’s [SMACSS](http://smacss.com/book/formatting#grouping).
2.  Anton Korzunov’s [stylelint-semantic-groups](https://github.com/theKashey/stylelint-semantic-groups).

There are other examples out there, equally as thoughtful and purposeful. As [someone who is really, <em>really</em> into CSS](https://css-tricks.com/author/ericwbailey/), I wish I could enthusiastically recommend an approach other than alphabetical. However, I’m unfortunately here to tell you not to.

The most common CSS declaration organization technique I come across is none whatsoever. I say this with the authority of a seasoned consultant who has worked on multiple project codebases spanning multiple organizations and departments.

## Where we’re going we won’t need eyes to see

I’ve seen CSS ordered by adding to the bottom of the selector. I’ve seen CSS ordered by arbitrarily adding properties everywhere until it looks right in the browser. I’ve seen CSS ordered by a teetering pile of irrelevant and non-functioning copy/paste code from StackOverflow. I’ve seen CSS ordering by way of generations of vestigial framework overrides. I’ve even seen multiple approaches smashing into each other by way of generations of employee work, revealed only after spending time teasing the story out of commit messages.

The problem is that CSS is still misunderstood, undervalued, and dismissed as a trivial concern. The reality is that it is [the programming language](https://css-tricks.com/css-is-a-strongly-typed-language/#css) used to give ideas shape.

We live in a highly visual culture. Your product won’t earn a single penny if it doesn’t have a polished, visible form to communicate value.

Until there is movement on developers taking CSS more seriously and understanding its full capabilities, we are caught in an awkward loop where introducing too much complexity in your project’s CSS will do more harm than good.

Other programming languages share this meta issue. Too much abstraction or clever code means it becomes exponentially more difficult to understand, maintain, debug, or expand on existing work. It also means more ramp-up time for getting someone up to speed on a project ([not that we’re doing much of that](https://twitter.com/piccalilli_/status/1399841868352045073) these days).

## If you can’t be correct, at least be consistent

I recommend alphabetical order because it imposes a baseline sense of structure across a team. This ask is usually enough, especially if it means cleaning up what’s come before.

Alphabetical is easy enough to pick up and have an organization repeat as a convention without having to invest too much time on upskilling an entire team on CSS theory.

This is a bummer because investing in CSS theory makes for better overall results—declaration organization approaches other than alphabetical do communicate, and therefore teach more advanced CSS concepts.

## Directed effort

The last thing I want to do is set my client up to fail. It’s difficult to recommend any approach that I don’t think the organization has the ability to maintain after the engagement ends, even if I personally think the approach is better.

I think this is an important thing a lot of people get wrong. You want to set up something sustainable, but also not pour your own energy into making the right thing in the wrong way just to satisfy your own personal desires.

## Why teach anyone anything?

You want to create understandable solutions, but also repeatable practices. The shape of that varies across individuals and organizations.

A big part of doing this well is having conversations about is known measured against what can be internalized and sustained. If you’re lucky, that’s enough to foster a sense of exploration that will open doors to more advanced concepts.

## The great divide

Unfortunately, I don’t see the needle moving on CSS being taken more seriously any time soon. This means I’m stuck in this loop with everyone else, even though [CSS keeps getting better and better](https://www.smashingmagazine.com/2021/02/things-you-can-do-with-css-today/).

To the earlier point of code being too clever, this is not that. This is a scenario where platform features are going unused due to [bulwarks we’ve constructed around learning](https://adactio.com/notes/18208).

<blockquote class="twitter-tweet" aria-label="Today I helped a client make their site faster by reducing a lot of JS that was preventing server-side rendering. I was able to do this because... I know CSS. Tweet by Sia Karamalegos, posted on May 21, 2021."><p lang="en" dir="ltr">Today I helped a client make their site faster by reducing a lot of JS that was preventing server-side rendering. <br><br>I was able to do this because...<br><br>I know CSS.</p>&mdash; Sia Karamalegos (@TheGreenGreek) <a href="https://twitter.com/TheGreenGreek/status/1395794309576806407?ref_src=twsrc%5Etfw">May 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

These concerns aren’t abstract, academic quibbling. They have a direct impact on things like performance and accessibility, concerns that map directly back to a person’s experience (or lack thereof) in using a website or web app.

## Don’t punch down

I’m reluctant to blame developers for this lack of knowledge, especially new ones. As an industry we do a terrible job at teaching anything other than JavaScript. I’m also hesitant to blame the schools. They [teach what the market demands](https://ericwbailey.website/published/fighting-uphill#what-if-we%E2%80%99re-losing%3F), which is another loop we need to break.

<blockquote class="twitter-tweet" aria-label="Hiring a frontend engineer who's really great at HTML + CSS is surprisingly difficult. Tweet by Josh Pigford, posted on June 17, 2021."><p lang="en" dir="ltr">Hiring a frontend engineer who&#39;s really great at HTML + CSS is surprisingly difficult.</p>&mdash; Josh Pigford (@Shpigford) <a href="https://twitter.com/Shpigford/status/1405626129180987394?ref_src=twsrc%5Etfw">June 17, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

We can do so much better than hope a handful of people break through an echo chamber of misogynistic rise-and-grind [javagrifters](https://twitter.com/javagrifter) preying on the ignorant.

We need better educational infrastructure for learning design and development. I think a large part of that are formalized trade apprenticeships, but that’s a different post for a different day.
