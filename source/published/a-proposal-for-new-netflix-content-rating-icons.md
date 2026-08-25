---
layout: "layouts/post.njk"
title: A proposal for new Netflix content rating icons
source: ericwbailey.website
excerpt: "Here are some new Netflix ratings we could use."
date: 2026-08-25
year: 2026
tags:
  - Design
  - Internet
share:
  facebookDescription: "A simplified, dejected face exhaling as if it has just endured something bad."
  twitterDescription: "A simplified, dejected face exhaling as if it has just endured something bad."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 12
---

The lack of nuance you can explicitly express as an individual is one of the many, many things I dislike about the algorithmically-determined content recommendation systems we are trapped inside of.

These preferences are instead inferred via system-observed behavior. They are also only as sophisticated as the teams responsible for creating the automation to sort and categorize the inputs and events the system has access to.

The complexity of a thinking, feeling person in the world cannot be distilled down into a JSON file. This is immaterial to [the systems that compel and collect this data](https://en.wikipedia.org/wiki/Surveillance_capitalism), and I resent this fact.

It is difficult to come to terms with these imperfect digital systems, how they evaluate and categorize us, and how they fail to represent who we truly are and what we wish to be. Don’t even get me started on the automated decision-making aspects, either.

As an optimist, we wouldn’t have these systems at all. As a realist, I wish we could at least directly access and edit these profiles. This is a gentle way to say I am often found wanting by how I am represented.

I’m sure some academics have written about this extensively. That said, here’s some tongue-in-cheek suggestions for how we could help these systems capture some of that complexity via explicit, direct human input.

For this, I’m targeting Netflix. To be specific, it’s “Love this!” icon that is almost, but not quite instituting a [five point rating scale](https://en.wikipedia.org/wiki/Likert_scale) is what set me over the edge:

<img
  alt="A TV show preview card in Netflix, where the rating menu is toggled open. It has A thumb's down icon, a thumb's up icon, and a double thumb's up icon. The double thumb's up icon has a mouse cursor hovering over it, revealing a tooltip that reads, 'Love this!' The TV show is Arrested Development, and the hero image is Michael Cera as George-Michael Bluth with his trademark happy-yet-confused expression. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/love-this.png' | url }}" />

Setting aside [corporations’ aversion to negative sentiment](https://en.wikipedia.org/wiki/Employee_silence) for a moment: It is easy to imagine a world where a “Hate this!” icon is also instituted, thus helping to flatten all human interaction into [a more legible simplified schema](https://ribbonfarm.com/2010/07/26/a-big-little-idea-called-legibility/).

<div class="centered-media-outer">
  <img
    class="centered-media-inner-2"
    role="img"
    alt="A fake UI in the style of Netflix's content rating menu, featuring a double thumb's down icon a thumb's down icon, a neutral thumb-held-in-the-middle icon, a thumb's up icon, and a double thumb's up icon."
    loading="lazy"
    src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/netflix-five-point-rating-scale.svg' | url }}" />
</div>

## What if we got weird instead

Following are some ideas of new rating buttons we could use, to better explicitly capture the nuance that apparently comes with the humble act of watching streaming media:

### I’ll watch anything with this actor in it

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/love-this-actor-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A comedy/tragedy mask that has a look of joy."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/love-this-actor-on-light.svg' | url }}">
  </picture>
</div>

### Don’t suggest anything with this actor in it

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/hate-this-actor-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A comedy/tragedy mask that has a look grumpy disappointment."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/hate-this-actor-on-light.svg' | url }}">
  </picture>
</div>

### My parents are visiting and I settled an argument with this

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/peace-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A peace sign."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/peace-on-light.svg' | url }}">
  </picture>
</div>

### Just because I expressed interest in this show does not mean I want to be inundated with recommendations for its genre

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/drowning-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A hand of a drowning person reaching up out of the water."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/drowning-on-light.svg' | url }}">
  </picture>
</div>

### Disregard, my cat walked over the keyboard

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/cat-on-keyboard-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A cat paw print."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/cat-on-keyboard-on-light.svg' | url }}">
  </picture>
</div>

### I was re-watching this to see if it held up, it didn’t

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/no-more-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simplified, dejected face exhaling as if it has just endured something bad."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/no-more-on-light.svg' | url }}">
  </picture>
</div>

### I was re-watching this to see if it held up, it did

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/more-please-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simplified face with stars in its eyes and a huge open-mouth smile."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/more-please-on-light.svg' | url }}">
  </picture>
</div>

### I want to impress someone with my taste in media but am not super committed to it past that

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/netflix-and-chill-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A small couch."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/netflix-and-chill-on-light.svg' | url }}">
  </picture>
</div>

### Sprinkle this in periodically to occasionally break up the monotony

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/sprinkle-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A hand sprinkling a pinch of salt."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/sprinkle-on-light.svg' | url }}">
  </picture>
</div>

### I realize a studio paid you to push this but its over-weighted presence makes me less overall inclined to use your entire service

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/stop-this-on-dark.svg' | url }}">
    <img
      role="img"
      alt="An open hand facing palm out placed in the center of an octagonal stop sign."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/stop-this-on-light.svg' | url }}">
  </picture>
</div>

### I am watching this in full even though it is not good because I want to ensure the metrics look good for future, better efforts in the style of this

<figure
  class="centered-media-outer"
  role="figure"
  aria-label="IYKYK.">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/bebop-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A strange, simplified illustration of a furtive face with a freckle under one of its eyes. It is the avatar Ed uses when hacking on the TV show Cowboy Bebeop."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/bebop-on-light.svg' | url }}">
  </picture>
  <figcaption>
    IYKYK.
  </figcaption>
</figure>

### We don’t need more of this, let a good series quit while it is on top

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/quit-while-youre-on-top-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A sleeping dog."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/quit-while-youre-on-top-on-light.svg' | url }}">
  </picture>
</div>

### Blast notifications for a content update to this series across all possible channels I use to receive notifications

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/airhorn-on-dark.svg' | url }}">
    <img
      role="img"
      alt="An airhorn."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/airhorn-on-light.svg' | url }}">
  </picture>
</div>

### Please forget I ever watched this, then scrub the record that listed I wanted this forgotten

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/spray-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A spray bottle."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/spray-on-light.svg' | url }}">
  </picture>
</div>

### I am making bad choices and hatewatching this while my partner is asleep

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/see-no-evil-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A monkey face holding its hands over its eyes."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/see-no-evil-on-light.svg' | url }}">
  </picture>
</div>

### This is a guilty pleasure, don’t list it—I’ll find it

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/incognito-on-dark.svg' | url }}">
    <img
      role="img"
      alt="The icon for browser incognito mode, a pair of spectacles with circular lenses and a detective's fedora."
      src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/incognito-on-light.svg' | url }}">
  </picture>
</div>

It admittedly does make for a rather cluttered UI. But hey, I’m only half-joking here:

<div class="post-breakout">
  <img
    role="img"
    alt="Another fake UI in the style of Netflix's content rating menu, only this time it lists all the previously described icons in sequence. It's quite long."
    loading="lazy"
    src="{{ '/img/posts/a-proposal-for-new-netflix-content-rating-icons/all-netflix-rating-icons.svg' | url }}" />
</div>

## Other suggestions

- Tell my child this show is broken and won't play until they take a bath, via [Elaina](https://bsky.app/profile/elaina.bsky.social/post/3mtw3x5d7mc25)
- Please don't show this latest episode of a series as watched because I told my partner I wouldn't watch it without them but I lied, also via [Elaina](https://bsky.app/profile/elaina.bsky.social/post/3mtw3x5d7mc25)

Got some suggestions of your own? [Let me know](https://ericwbailey.website/#section-contact)!
