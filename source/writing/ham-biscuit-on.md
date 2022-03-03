---
layout: "layouts/post.njk"
title: Ham biscuit on
source: ericwbailey.design
excerpt: "The problem is we don’t know the initial state of the ham biscuit sign and who it is intended for"
date: 2021-06-28
year: 2021
tags:
  - Design
  - Food
inlineStyles: true
tweet: https://twitter.com/ericwbailey/status/1409513432248983556
share:
  facebookDescription: "went to a mcdonalds and they just jad a random sign next to the drive through speaker flashing the words “ham biscuit” and i can't think of legitimate reason for why it exists."
  twitterDescription: "A powered off ham biscuit sign."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 30
---

There is a tweet from a suspended Twitter user that shows a “ham biscuit sign” in its dark and lit-up state. Here’s a screenshot of the tweet:

<figure
  role="figure"
  aria-label="Source: Reddit.">
  <img
    alt="Tweet by riley, Twitter username of @stabbityjoe: 'went to a mcdonalds and they just jad a random sign next to the drive through speaker flashing the words “ham biscuit” and i can't think of legitimate reason for why it exists. Tweet posted on Febrary 7th, 2020 at 10:21 PM via Twitter for iPhone."
    src="{{ '/img/posts/ham-biscuit-on/tweet.png' | url }}" />
  <figcaption>
    Source: <a href="https://www.reddit.com/r/WhitePeopleTwitter/comments/f1af77/hmmmmm/">Reddit</a>.
  </figcaption>
</figure>

The sign is used to indicate if that particular McDonalds had [Country Ham Biscuits](https://national.restaurant/mcdonalds-country-ham-biscuit) left in stock. Presumably, they’re a popular enough menu item that installing the sign saves both people ordering and the people working time and anguish.

The Ham Biscuit sign is also absurd. It features as a recurring joke in one of the Slack groups I participate in, enough to warrant creating custom emoji for it:

<style>
.object-and-details {
  display: inline-block;
  position: relative;
}

summary {
  color: #ffffff;
  background: #000000;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  border-radius: 50%;
  background-image: url("https://assets.codepen.io/128034/play_circle_filled-24px.svg");
  background-size: 90% auto;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  cursor: pointer;
}

[open] summary {
  background-image: url("https://assets.codepen.io/128034/pause_circle_filled-24px.svg");
  box-shadow: 0 0 0 2px #fff;
  background-color: white;
}

details summary::-webkit-details-marker {
  display: none; /* For blink/webkit */
}

details > summary:first-of-type {
  list-style: none; /* For firefox */
}

summary + * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  padding-top: 3rem;
  color: #ffffff;
  overflow-y: auto;
}

summary + * a {
  color: #ffffff;
}
summary:focus {
  box-shadow: 0 0 0 0.25rem #000000;
  outline: transparent;
}

.object-and-details1 img {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}
</style>

<div style="display: flex; gap: var(--scale2);">
  <img
    alt="Ham biscuit on."
    src="{{ '/img/posts/ham-biscuit-on/ham-biscuit-on.png' | url }}" />
  <img
    alt="Ham biscuit off."
    src="{{ '/img/posts/ham-biscuit-on/ham-biscuit-off.png' | url }}" />
  <div class="object-and-details">
    <img
      src="{{ '/img/posts/ham-biscuit-on/ham-biscuit-on.png' | url }}"
      alt="Static: Vincent Vega as portrayed by John Travolta, waiting on the beach" />
    <details>
    <summary role="button" aria-label="Animated image"></summary>
    <div class="object-and-details1">
      <img
        src="{{ '/img/posts/ham-biscuit-on/ham-biscuit-indeterminate.gif' | url }}"
        alt="Animated: Vincent Vega as portrayed by John Travolta, waiting on the beach" />
    </div>
  </details>
</div>
</div>

A few days ago, one of my friends commented:

<figure
  role="figure"
  aria-label="you could write a usability Medium post postulating that as easy as it is to be flummoxed by its existence, Ham Biscuit light accomplishes its goal more clearly than many modern app UIs">
  <blockquote>
    you could write a usability Medium post postulating that as easy as it is to be flummoxed by its existence, Ham Biscuit light accomplishes its goal more clearly than many modern app UIs
  </blockquote>
  <figcaption>Fun times on the friendchat.</figcaption>
</figure>

## He’s not wrong

When the ham biscuit sign is lit up, it means ham biscuits are available. When it is not, there are no more ham biscuits left. This means that people know this kind of food is available before they enter the restaurant.

## Or is he?

Red is commonly used to [indicate errors in Western culture](https://graphicdesign.stackexchange.com/questions/6982/except-china-which-country-will-use-red-for-up-and-green-for-down). Now I’m wondering if this means there’s a problem with ham biscuit supply, and that they’re indicating that there are none left. Maybe this is a signal to suppliers instead of consumers.

The other wrinkle is the sign [blinks](https://en.m.wikipedia.org/wiki/Blinkenlights) when it is active. Blinking adds an extra layer of consideration, in that other examples of blinking things we can reference to determine intent have multiple meanings. Think:

- Turn signals that indicate driver intent,
- Traffic lights indicating to proceed with caution,
- Hard drives indicating they’re writing data,
- LCD clocks indicating an interruption in power,
- A check engine light that indicates a misfiring engine,
- Routers indicating that data is being sent and received,
- Bluetooth devices indicating that they are ready to pair,
- A GPS device indicating it is searching for a signal,
- etc.

Big-picture, most these flashing lights means a change in normal operating mode, which further muddies the waters of what the heck is going on in ham biscuit land. “Most” is the operative word in the previous sentence, in that not every example is a change in operating mode.

To quote another friend on the Slack:

<blockquote>
  hey, look at this sign, the ham biscuits are poppin right now
</blockquote>

## Overthinking it

Okay, okay, okay, okay. This is ridiculous. But it’s also the point.

The problem is we don’t know the initial state of the ham biscuit sign and who it is intended for. We can make assumptions, but it is guesswork to address unnecessary ambiguity. The only real way to actually know is to enter the McDonalds and verify if our guesses are true.

## The state of things

How many virtual meetings have you been on during quarantine where you had a panicky moment trying to [figure out if you were muted or not](https://www.viget.com/articles/unsolved-zoom-mysteries/)? How many pieces of UI have you encountered where you weren’t sure if taking action would start or stop something? How many times has pushing that button irrevocably altered or destroyed something?

It’s a tough problem, and part of it is that there’s very little external consistency. Video Chat App A might indicate state one way, [while Video Chat App B uses a completely different approach](https://daverupert.com/2019/04/anthology-of-mute-buttons-in-chat-apps/).

Then there’s inconsistencies in features that appear across apps of many different categories—video playback being a prime example.

The overall effects these two broad types of inconsistency creates are confusion and uncertainty. This is something we as an industry have [inflicted on our users](https://dev.to/zetareticoli/dark-light-mode-toggle-a-usability-issue-1gg2). This is all to say [it’s a mess](https://twitter.com/jazztrombonist/status/933064222778335232).

<figure
  role="figure"
  aria-label="I don’t know if my password will be shown or hidden when I begin entering my password to log into WordPress. Gmail used to use this pattern, but has since migrated away from it—I do wish they’d ditch the placeholder attribute, however.">
  <div class="side-by-side">
    <img
      alt="Login form for WordPress showing the WordPress logo, a Username or Email Address label and input, a Password label and input, a Remember Me checkbox, and a Log In button. The Password input has an open eye icon. Screenshot."
      src="{{ '/img/posts/ham-biscuit-on/login-wordpress.png' | url }}" />
    <img
      alt="Login form for Gmail showing the Google logo, the text, 'Hi, Firstname', an account picker with the label 'email.address@gmail.com', an input field with the placeholder text of 'Enter your password', a checkbox labeled 'Show password', a link named 'Forgot password?', and Next button. Screenshot"
      src="{{ '/img/posts/ham-biscuit-on/login-gmail.png' | url }}" />
    </div>
  <figcaption>
    I don’t know if my password will be shown or hidden when I begin entering my password to log into WordPress. <a href="https://i.stack.imgur.com/nqWot.png">Gmail used to use this pattern<span class="hide-visually"> (link to screenshot)</a>, but has since migrated away from it—I do wish they’d ditch <a href="https://www.smashingmagazine.com/2018/06/placeholder-attribute/">the <code>placeholder</code> attribute</a>, however.
  </figcaption>
</figure>

## Fixing the ham biscuit sign

There are fancy user experience/human-computer interaction terms for the problems discussed earlier, but I’d prefer to keep this post as jargon free as possible.

To fix the ham biscuit sign, we need to [be more obvious](https://www.lukew.com/ff/entry.asp?1945):

<img
    alt="Text and a checkmark icon glowing neon green on a dark gray background. The text reads, 'Ham biscuits available'."
    src="{{ '/img/posts/ham-biscuit-on/ham-biscuits-available.png' | url }}" />

It’s a bit of a balancing act, in that you want that sweet spot of just enough information to remove ambiguity without totally overwhelming someone.

I’m intentionally removing the blinking. The sign is either on or off, and we don’t need the extra layer of confusion. In doing so, I'm making the judgement call that [people are intrinsically motivated](https://thoughtbot.com/blog/using-personas-in-the-product-design-sprint#intrinsic) enough to seek out ham biscuits. You don’t need the cheap gimmick of a blinking light to get their attention.

## Solutioneering

Cool, wow. An unsolicited redesign, how novel.

The other part of this problem is we don’t truly know the circumstances of what led to the ham biscuit sign’s creation. This includes considerations such as:


- If our ham biscuit availability assumption is true,
- If the sign’s deployment has been successful,
- Who made the sign and what resources were made available to them,
- What the budget is,
- What hardware limitations the sign itself has,
- How permanent the sign is intended to be,
- etc.

Only by [talking to people](https://abookapart.com/products/just-enough-research) can we actually know the true scope of the issue. Doing so highlights the actual motivations, uncovers the actual problems to address, and de-risks potential solutions. Without this crucial step, anything we produce is conjecture.

## Ham biscuit sign is the floor, not the ceiling

It might be worth evaluating your websites and web apps to see where the ham biscuit signs are—moments where initial state and consequences of undertaking action are unknown.

It’s also a bit of a fool’s errand, in that we can’t fix bad examples of this in experiences we have no control over. Because of this, I’d encourage doubling down on your website or web app’s [internal consistency](https://www.tpgi.com/inclusive-design-principle-be-consistent/#internalconsistency).

In conclusion: <img alt="Ham biscuit off." height="44" width="44" style="display: inline-block; vertical-align: bottom;" src="{{ '/img/posts/ham-biscuit-on/ham-biscuit-off.png' | url }}" />.
