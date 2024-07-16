---
layout: "layouts/post.njk"
title: "Dungeons & Dragons taught me how to write alt text"
source: ericwbailey.website
excerpt: "Describe the most important thing first"
date: 2024-07-16
year: 2024
tags:
  - Alt Text
  - Accessibility
  - Approach
  - Assistive Technology
  - Attributes
  - Design
  - Development
  - Html
  - Inclusion
share:
  facebookDescription: "An illustration of an ampersand that is drawn in such a way that it looks like a dragon twisting over itself and breathing fire. Logo for the 3.5 edition of Dungeons and Dragons."
  twitterDescription: "An illustration of an ampersand that is drawn in such a way that it looks like a dragon twisting over itself and breathing fire. Logo for the 3.5 edition of Dungeons and Dragons."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 55
---

I played a lot of [the pen-and-paper roleplaying game](https://www.dndbeyond.com/) in high school and college. I’m now conceptually more into [Dungeon World](https://dungeon-world.com/)’s approach, but I digress.

Unlike Tom Hanks, I avoided turning into a [delusional murderer](https://www.denofgeek.com/movies/tom-hanks-film-debut-was-a-drama-about-dungeons-dragons/). Instead, I deepened some friendships, had a lot of big laughs, learned some cool vocabulary, and had an indirect introduction to systems design. Importantly, I also annoyed the hell out of my high school principal.

If you are not familiar with Dungeons & Dragons, there are two general flavors for how to play:

1. Using miniatures and a map, or
2. Theater of the mind.

We elected for theater of the mind more often than not. This was mostly because the rule books by themselves were expensive enough, and my friends and I were lower middle class.

Theater of the mind play means that the entire game is conducted verbally. The sole exception is your character sheet, which is a text and number-based armature you build the rest of your character from.

The narrative is shared amongst everyone verbally. The aesthetics of the game exist entirely in each player’s mind, and not communicated via moving little figures around on a map.

You can probably guess where this post is going now.

## Thank you, random Dragon Magazine issue

Because I cannot [half-ass](https://idioms.thefreedictionary.com/half-ass) anything, I went hard on immersing myself in the culture surrounding Dungeons and Dragons. This included subscribing to [Dragon magazine](https://en.wikipedia.org/wiki/Dragon_(magazine)).

I don’t remember the issue number, or the original author. However, I do remember it was from an advice column. The problem was the person who was running the game wanting to enliven his descriptions, as they felt like their narration was both boring and confusing.

The advice for that problem was spectacular, and it boiled down to <strong>describing the most important thing first</strong>.

Consider:

<blockquote>
  <p>A large room with rough stone walls. Brownish moss clings to the walls, and trickles of brackish water also flow down parts of it. of  Broken furniture is scattered across on the floor. The ceiling is so high that you cannot see it. Also, there is a large red dragon attacking you.</p>
</blockquote>

I don’t know about you, but I’d want to know about the red dragon’s presence and activity a lot more than the quality of the masonry. There’s also another odd bit of putting too much detail on the wrong thing.

Let’s rephrase it:

<blockquote>
  <p>A huge dragon the color of a smoldering coal is attacking you! It is rearing its snake-like neck up to strike, head poised underneath a ceiling that is so high you cannot see it. Its dull black, iron-like claws dig into the floor of the rough stone room as it prepares to lunge at you. Broken furniture is scattered about, no doubt victims of previous altercations.</p>
</blockquote>

We’ve put the most important thing first. We then <strong>supply detail in an order that aids in understanding the main point</strong>, and discard information that is irrelevant to the overall concept we’re trying to communicate and mood we’re trying to evoke.

We now know:

1. There’s a big dragon, and it’s seriously pissed off,
2. There’s ample room for it to move around,
3. It can, and has previously made good on its threats, and that
4. There’s not a lot of places to take cover.

This is explicit prioritization of information. It also demonstrates that informative information can also be entertaining.

## Context, context, context

Observant readers may also note I’ve added some emotion with the exclamation point, as well as adding some more flowery language into the mix.

Alternative text descriptions ([alt text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)) are as much an art as much as it is a science.

A red dragon attack is <strong>a significant event</strong>, so additional detail and emotion helps. I feel confident in both editorializing the experience as well as punching it up, given that the larger goal is to communicate a frenetic, action-packed encounter.

The same also applies in reverse. <strong>Smaller, more succinct descriptions can be equally helpful</strong> in situations where the content is not a major contributor of the overall thing you’re trying to communicate.

In Dungeons & Dragons this is a bit of an in-joke. Over-describing something trivial can lead to your players fixating on it, completely derailing the plot as they try and uncover the secrets behind something mundane that you had no pre-formulated plans for.

This is why you want to go with this:

<blockquote>
  <p>A worn, wooden mug full of cheap ale.</p>
</blockquote>

Over this:

<blockquote>
  <p>A stout mug crafted from reclaimed lumber. It is poorly stained and worn smooth from years of heavy use. Twin iron bands are placed at the top and bottom, equally as worn and giving it a comfortable heft. A thin, frothy ale has been poured into it, smelling weakly of hops and strongly of alcohol. A single rivulet of ale pours down the side of the mug to stain the bar top the mug is placed on.</p>
</blockquote>

I mean, it’s a great description, but also not the point. The point is you’re in a seedy pub chasing down rumors about a goblin who somehow got its grubby little hands on a powerful magic artifact.

For alt text, we want to also consider the larger context of <strong>what you’re trying to communicate</strong>, <strong>why</strong>, and <strong>if the detail you provide helps that effort to communicate</strong>.

Consider the difference between a small badge that indicates a product has been recently-added to the storefront:

<blockquote>
  <p>New!</p>
</blockquote>

And [this Tweet from NASA](https://x.com/NASA/status/1552750698114187269) showcasing a photo from the James Webb telescope:

<blockquote>
  <p>A dramatic blade made of red gaseous wisps comes down top-to-bottom in the center of the image as smaller green wisps feather out in horizontal directions. A bright star shrouded in blue light is near the center of the bow-like blade. Blue dots in different sizes dot the background of the image, signifying neighboring stars.⁣</p>
</blockquote>

## Tone and mood

These two concepts are the bread and butter of a roleplaying game experience. Consider:

<blockquote>
  <p>The vizier prattles on, clearly in love with the sound of their own voice. Meanwhile, the rest of the court slumps—bored, exasperated, and succumbing to the stifling heat of the high summer. They are taking their cue from the sultan, some nakedly jealous of the cushioned throne he is slowly nodding off on.</p>
  <p>In the desperation of scanning the room to find something more interesting to look at, you catch the unblinking gaze of the court jester. His stare makes you feel like a butterfly pinned to a specimen spreading board. The room begins to slowly fade to black as you continue to lock eyes. A subtle foxfire aura begins to shimmer around his frame, while a placeless humming sound gets louder and louder. The heat of the room is forgotten as a chill runs down your spine.</p>
</blockquote>

Or:

<blockquote>
  <p>A white woman with short blue hair smirks at the camera and raises a glass to it. Her drink is a margarita, and the glass is beaded with sweat from the heat of the day. She is wearing a loose white shirt, and oversized red sunglasses are perched perfectly on her head. Her hair is slightly frizzy from the humidity, but her expression clearly communicates that she is unbothered by it. It is the golden hour, and the sun casts a warm, hazy amber glow on her skin. The table she is sitting at is wooden and well-worn. Behind her is a busy street, a blur of people going about their day.</p>
</blockquote>

Both of these descriptions are <strong>evocative</strong>.

As the author of both experiences I am trying to not only:

1. Describe what is physically present, but also 
2. How all the qualities add up as a suggestion for how to feel when taken in as a composite whole.

For the roleplaying game description, I am injecting an immediate sense of fear and menace into an otherwise boring situation. For the image description, I am I am creating a sense of relaxation and contentment.

Additionally, the introduction of the vizier may seem contradictory when compared to the dragon on a first read through. Remember that this is <strong>an editorialized experience</strong>.

The most important thing in this scene is the feelings of shock and fear when something unexpected and unsettling interrupts the mundane. In order to create that feeling, we need to first establish the humdrum experience of an boring, endless meeting in a stifling room.

## The user experience of assistive technology

Another reason why I advocate for describing the most important thing first is because of how screen readers announce alt text. A screen reader will read it in a linear order, starting from the first word in the string and ending with the last.

Unlike other web content, there isn’t really any other special way screen readers can work with alt text strings—short of increasing or decreasing the speaking rate. This is also why things like bolding, italicizing, links, and paragraphs aren’t allowed.

Another important thing to know about screen readers is that they have dedicated keyboard commands to make them [pause or stop announcing](https://www.nvaccess.org/files/nvda/documentation/userGuide.html#StartingAndStoppingNVDA). There are a few use cases for this behavior, but the most common one is, “Yup, I got it. Shut up now.”

Placing helpful, but ultimately non-critical information after the most important thing <strong>lets the person using the screen reader decide when they know enough to get what they need</strong>. It also saves them from wasting time re-listening to superfluous information if re-navigating to the image to glean some important detail (“Oh, what was the subject of that painting again?”).

## Remember, you control the narrative

The person who runs the game of Dungeons & Dragons has a responsibility to provide an entertaining and memorable experience for the other participants.

<strong>You wield a power as the person enabling and facilitating the experiences others have</strong>. This applies to roleplaying games as well as writing alt text.

This is why I believe [most contemporary images on the web are not decorative](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/). It’s also why I think it’s important to [include details like race, gender, and ethnicity](https://tink.uk/thoughts-on-skin-tone-and-text-descriptions.md-notes-on-synthetic-speech/).

It is important to acknowledge this fact. For roleplaying games, it [centers around <strong>consent</strong>](https://startplaying.games/blog/posts/tabletop-consent-guide-cj-mccullough). For alt text, it centers around <strong>autonomy</strong>.

We want to ensure that people who cannot see the image have [the capability to understand it the same way as someone who can](https://html.spec.whatwg.org/multipage/images.html#general-guidelines). There is a huge amount of power in this act.

## Skills you can cultivate

A decent amount of people are uncomfortable the first time they play a roleplaying game. Acting out a character in front of others can feel strange at first, but is also a feeling that passes the more you do it.

The same applies for writing alt text. The more often you practice it, the better you get at it.

The grim reality is [the state of alt text on the web leaves a lot to be desired](https://webaim.org/projects/million/#alttext). That said, writing it can be a joy and an art. If you’re looking for a new adventure to start, here are some resources that can help you on your quest:

- [An alt Decision Tree - Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Images Tutorial - Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/tutorials/images/)
- [How to write text descriptions (alt text) in BBC News articles - BBC GEL](https://www.bbc.co.uk/gel/how-to-write-text-descriptions-alt-text)
- [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/)
- [Understanding and Using Alternative Text: A Comprehensive Guide - The A11Y Collective](https://www.a11y-collective.com/content/alternative-text/)
- [Text descriptions and emotion rich images - Léonie Watson](https://tink.uk/text-descriptions-emotion-rich-images/)
- [Writing great alt text: Emotion matters - JakeArchibald.com](https://jakearchibald.com/2021/great-alt-text/)
