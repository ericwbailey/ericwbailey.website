---
layout: "layouts/post.njk"
title: What they don’t tell you when you translate your app
source: ericwbailey.website
excerpt: "Forget inverting binary trees, translating or localizing a digital experience is one of the most difficult things you can do with software."
date: 2021-09-02
year: 2021
tags:
  - Design
  - Inclusion
  - Localization
  - Performance
  - User Research
attribution: "Thank you to <a href='https://twitter.com/codingchaos'>Sarah Higley</a> for her feedback."
sharedOn:
  twitter: https://twitter.com/ericwbailey/status/1433791135999316000
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 34
---

Forget inverting binary trees, translating or localizing a digital experience is one of the most difficult things you can do with software.

There’s plenty of content out there about how to perform the basic design and development aspects of translation and localization work. Wisdom like being mindful of translated word length, and how to store and use translated strings.

If you need a primer, here’s a quick list of some other common concerns:

- [Flags are not languages](http://www.flagsarenotlanguages.com/blog/why-flags-do-not-represent-language/),
- Words may have radically different lengths in other languages,
- English is full of idioms, and idioms don’t translate well,
- Designs should be able to accommodate right-to-left (<abbr>RTL</abbr>) languages,
- Designs should adapt to different cultural notions about color,
- A device’s location/IP address isn’t indicative of the language preference of the person using it,
- etc.

I recently had the privilege of helping a client with localization efforts for their website. There are some things I did not run into in my web research that I learned in actually doing the work, things that I feel are worth capturing and sharing:

## Translation is not localization

Other places cover this, but I feel it’s worth reemphasizing here.

Tech language translation is a little different than literary translation. In literary translation, a good translator will do their best to honor the voice and tone of the original author. Tech translation is more the practice of creating as close a 1:1 word replacement as possible between the language the content is written in and the language you wish to update it to.

In tech, localization means making sure the words and concepts in the language the content was originally written in make sense to the person who will be reading in the language you wish to update it to. Localized content requires you to be both linguistically and, importantly, culturally fluent with the community you’re trying to serve.

Localization includes considerations around the collecting and presentation of things like dates and names. It also means being mindful of things like measurement, color, imagery, and [negative space](https://randomwire.com/why-japanese-web-design-is-so-different/). You may also have to introduce net-new content to better explain a concept foreign to the culture you’re localizing for.

A good high-level way to think about this is both America and the United Kingdom speak English, but there are [huge differences](https://en.m.wikipedia.org/wiki/List_of_words_having_different_meanings_in_American_and_British_English_(A%E2%80%93L)) in the cultures that uses this language. Note that in the practical, both locations are also huge.

Geographic size is an important thing to know—there may be considerations on even a per-neighborhood basis. Think of the linguistic and cultural diversity of a place like Brooklyn, New York City in the United States. Or even one of Brooklyn’s neighborhoods.

Of the two approaches, localization is preferable, but takes far more time and resources to do. A fantastic resource for learning more about this is [Senongo Akpem](https://twitter.com/senongo)’s book [<cite>Cross-Cultural Design</cite>](https://abookapart.com/products/cross-cultural-design).

## English is the implicit default

The web’s Anglocentric-bias exists largely because of where it was originally created, and how technology is distributed into culture. On top of that, the vast majority of tools and services used to build apps and websites use English.

It was only up until recently that owning a computer and going online were affordable to a wide population. Historically, both a computer and internet access required a certain level of wealth and access to resources, including permanent address with a steady power supply.

However, it is important to know that it is [the World Wide Web, not the Wealthy Western Web](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/). Portable internet-capable computing devices are now both relatively inexpensive and widely available. More and more people are getting access, and this access is only going to expand as time goes on.

In undertaking translation and localization, know that English-centric biases are going to consciously and unconsciously affect and shape your team and your work. Being aware of this fact is a good starting point.

## People may prefer the English experience because they expect the translated version to be inferior

This fact cuts deep, especially when you consider that it’s all our fault.

Many sites that offer a translated experience do so via Google Translate, or another machine translation service. The problem with this is obvious: the quality of this form of translation sucks.

<figure
  role="figure"
  aria-label="Every sign tells a story.">
  <img
    alt="A dropdown labeled “Select language, powered by Google Translate.” Below it is a link that reads “Disclaimer.” Screenshot."
    loading="lazy"
    src="{{ '/img/posts/what-they-dont-tell-you-when-you-translate-your-app/select-language.png' | url }}" />
  <figcaption>
    <p>Every sign tells a story.</p>
  </figcaption>
</figure>

The more complicated the language you’re translating and the more jargon and abstract concepts you use, the more an automated solution won’t be able to provide a comparable experience. Because of this, some people may prefer to muddle along in English—potentially with the assistance of a bilingual speaker—for fear that a vital concept may be perverted or lost.

This fact also has a more subtle effect: Some people may never even bother to translate your digital experience because they have the expectation that the translated experience will be bad, even if you do the work to have a high-quality translated or localized experience.

The takeaway here is to identify the main thing your digital experience does and make it overwhelmingly obvious to access, regardless of the language used.

## People may change the displayed language at any point in an experience

This builds off the previous fact.

If your digital experience allows someone to change the language as a globally-available action, there is the chance someone will change the language as they work through your experience. Potentially even more than once.

This isn’t much of an issue if someone is only reading your content. Where this begins to become tricky is if they’re entering text into form fields.

Someone may partially complete a task, backtrack to update their language preferences, then continue with what they were doing. Think applications for things like jobs, government assistance, taxes, etc. You may also encounter this even if you don’t have translation as a global action, provided the motivational factor is high enough.

If this sort of interaction can happen, you’ll need to ensure a multilingual submission can be accepted by your backend systems. To add more complexity to this, you’ll also need to make sure these systems can be accurately parsed and understood by the people or automation who review submitted content.

## Spoken languages do not always pair with a written language

[Some spoken languages and their dialects don’t have a written form](https://linguistics.stackexchange.com/questions/4867/number-of-languages-without-a-writing-system#answer-20547) to accompany them, or if they do it is a recent development.

This means a couple of things might happen:

1. Content may be entered in a language with a written form that isn’t the language someone speaks.
1. The written form of a formerly spoken-only language may be met with confusion or skepticism.

This second reaction depends on:

- The individual’s history and relationship with the language community and the language’s written form,
- The context in which the written language is presented, and
- The quality of the content itself.

## Shared devices are a thing

This further reinforces the “device language preferences may not be the person’s written language preferences” fact.

Multilingual households are commonplace, especially households with intergenerational language differences. In addition, there is correlation between lower income households and an increased chance of shared devices.

Both of these facts means that more than one person may use a device in a household, and there’s no guarantee what their language preferences will be.

Shared devices exist outside of a household, as well. Think:

- Internet cafes,
- Computer labs,
- Libraries,
- Stores with internet-capable display models,
- etc.

People also let other people borrow their devices, sometimes even complete strangers.

## Translation and localization costs money

The cold, hard fact is that quality translation takes resources, just like any other feature work. Localization even moreso.

The notion of supporting as many languages as possible generates warm, fuzzy feelings of inclusion. However, the fact is that your organization is going to have to make strategic decisions about how many languages it can support, and of those which are the most important.

The other thing to keep in mind is translation and localization aren’t a one-and-done affair. You’ll need resources to stay on top of maintenance as your content inevitably updates.

## You’ll need to translate / localize more than you think you will

If you do user testing ([and you should](https://abookapart.com/products/just-enough-research)), you’ll also need to translate or localize your user tests. If the user tests are moderated, your scripts will also need to be translated or localized. If nobody at your organization speaks the language(s) you are testing, you’ll also need to have someone translate the recordings, and potentially the synthesis.

If you do A / B testing (and you should also be [running A / A tests](https://kadavy.net/blog/posts/aa-testing/) if you do), you’ll need to make sure those are translated or localized as well.

Does your digital experience send automated messaging like email and SMS? You'll also need to translate or localize that. Have [screen reader-only text](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/)? What about push notifications?

You can guess where I’m going with this.

Think of how much supporting infrastructure your digital experience has, and how much of that is either directly or indirectly public-facing. Even then, you’re probably overlooking something—there’s stuff you’re probably not even aware exists that is vital to a team’s day-to-day operations.

## Legal may get in the way of localization

Speaking of overlooking, you may run into a scenario where you can’t localize content because it will interfere with legal compliance.

This is a massive oversimplification, but legal sign-off occurs when concept A uses language A to communicate meaning. If you use localized language B to communicate concept A, it may differ from the very narrow and rigid legal definition of how the concept works. This means the content may have to be rewritten to make it compliant.

It will be in your best interest to get your legal department aware that this scenario might happen as you begin planning things out. If your legal department isn’t in-house, this whole process will be exceedingly expensive—this is another area where cost rears its head.

I’d also advise creating rigid templates for legal to work within, and also lots of supporting guidance. If given the opportunity, chances are good legal will try to override [good content authoring practices](https://www.plainlanguage.gov/guidelines/) with jargon and dense, overly-verbose prose. This makes sense, in that the role oftentimes does not have opportunities to be creative, and this work is highly visible.

## Your typeface may not support the languages you want to use

Not every typeface supports every language. This is especially true for less-common languages.

### Subsetting

You may have to [undo subsetting efforts](https://ericwbailey.website/writing/to-subset-or-not-subset-fonts/), or load an entirely new typeface to display the language you want to support.

### Picking typefaces

If you’re fortunate enough to be in a position where you can choose the [typeface](https://hobancards.com/blogs/thoughts-and-curiosities/difference-between-font-and-typeface) your digital experience will use, and you know you’re going to be supporting multiple languages, make sure you consider language support as part of your selection criteria.

Do a little work to see what languages you should prioritize support of, and then see if the typeface you’re evaluating accommodates it.

### Working with a typeface that’s already been chosen

If you don’t have the luxury of picking a typeface, you’ll need to balance performance and inclusion. Know there’s not always an easy answer.

You have two options to display the language you want to support:

1. Use [a typeface that comes pre-installed on the device](http://jordanm.co.uk/tinytype/) that has support for the languages you want to display, or
1. Load a new typeface that can support the languages you want to display.

Both options have branding considerations, in that you want the new, translated typeface to thematically match the previous typeface. If you don’t, it may lead to the undesirable effect of the translated experience feeling like a cheap afterthought.

You’ll also want to balance localization concerns. By this, I mean loading a new typeface affects performance.

<div class="centered-media-outer">
<svg class="centered-media-inner-3" aria-labelledby="font-download-title" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 911 399">
  <title id="font-download-title">Three file icons. The first is labeled, “Noto Sans, 30 kilobytes.” The second is labeled, “Noto Sans HK, 1.69 megabytes.” The third icon is two file icons stacked on top of each other, with a label that reads, “Total download, 1.72 megabytes.”</title>
  <defs><linearGradient id="linear-gradient" x1="809.03" y1="394.63" x2="809.03" y2="140.99" gradientTransform="matrix(1 0 0 -1 0 400)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eeefef"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="linear-gradient-2" x1="110.21" y1="394.15" x2="110.21" y2="117.81" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="455.47" y1="394.15" x2="455.47" y2="117.81" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="785.18" y1="370.76" x2="785.18" y2="117.12" xlink:href="#linear-gradient"/>
  <style>
    .font-download-cls-2 { fill: #eeefef; }
    .font-download-cls-3 { fill: #5e6f88; }
    .font-download-cls-7 { fill: #3f4d64; }
    @media (prefers-color-scheme: dark) {
      .font-download-cls-2 { fill: #ffffff; }
      .font-download-cls-3 { fill: #FFA194; }
      .font-download-cls-7 { fill: #CC4B39; }
    }
  </style></defs><path id="rear-page" d="M714.44 5.37h129.73l59.46 59.68V259H714.44z" fill="url(#linear-gradient)"/><path id="rear-fold" class="font-download-cls-2" d="M840.67 69.83V3.58L906 69.83z"/><path id="rear-frame" class="font-download-cls-3" d="M904.87 59.22L847.79 2.37A9.42 9.42 0 00841.87 0H723.55a15.79 15.79 0 00-15.67 15.69v235.39a15.79 15.79 0 0015.67 15.69h171.56a15.79 15.79 0 0015.68-15.69V74a21.29 21.29 0 00-5.92-14.78zm-9.46 7.4h-47.33a3.92 3.92 0 01-3.84-3.85V15.4zm-.3 189.49H723.55a5.31 5.31 0 01-5.32-5.33V15.69a5.31 5.31 0 015.32-5.33h110.63v52.71A13.89 13.89 0 00848.08 77h52.36v174.1a5.25 5.25 0 01-5.33 5.01zm9.76-196.89L847.79 2.37A9.42 9.42 0 00841.87 0H723.55a15.79 15.79 0 00-15.67 15.69v235.39a15.79 15.79 0 0015.67 15.69h171.56a15.79 15.79 0 0015.68-15.69V74a21.29 21.29 0 00-5.92-14.78zm-9.46 7.4h-47.33a3.92 3.92 0 01-3.84-3.85V15.4zm-.3 189.49H723.55a5.31 5.31 0 01-5.32-5.33V15.69a5.31 5.31 0 015.32-5.33h110.63v52.71A13.89 13.89 0 00848.08 77h52.36v174.1a5.25 5.25 0 01-5.33 5.01z"/><g id="page"><path d="M7.15 5.85h141.34l64.77 65v211.34H7.15z" fill="url(#linear-gradient-2)"/><path d="M352.41 5.85h141.33l64.78 65v211.34H352.41z" fill="url(#linear-gradient-3)"/><path d="M690.58 29.24h129.73l59.46 59.68v194H690.58z" fill="url(#linear-gradient-4)"/></g><g id="folds"><path class="font-download-cls-2" d="M144.67 76.07V3.9l71.2 72.17zM489.93 76.07V3.9l71.2 72.17zM816.8 93.7V27.45l65.35 66.25z"/></g><g id="icon-and-filesize"><path class="font-download-cls-7" d="M120.87 212.43h-13.62a6.48 6.48 0 01-3.8-1 5.72 5.72 0 01-2-2.76L97 195.4H68.14l-4.47 13.23a6.12 6.12 0 01-2 2.66 6 6 0 01-3.67 1.14H44.22l29.33-75.89h18zm-48.68-29h20.7l-7-20.78c-.45-1.32-1-2.87-1.61-4.64s-1.18-3.75-1.77-5.83q-.83 3.18-1.71 5.88t-1.67 4.69zM164.27 212.43a7.68 7.68 0 01-3.48-.62 4.83 4.83 0 01-1.93-2.61l-1.14-3q-2 1.71-3.9 3a27.1 27.1 0 01-3.9 2.24 18.63 18.63 0 01-4.27 1.3 24.53 24.53 0 01-5 .47 22.39 22.39 0 01-6.71-.94 14.53 14.53 0 01-5.14-2.87 12.71 12.71 0 01-3.23-4.63 17.12 17.12 0 01-1.14-6.46 13.54 13.54 0 011.45-5.89 14.45 14.45 0 015-5.47 31.64 31.64 0 019.67-4.16A64.92 64.92 0 01156 181v-2.29q0-4.74-2-6.82a7 7 0 00-5.52-2.14 14.62 14.62 0 00-4.68.63 21.57 21.57 0 00-3.27 1.4q-1.41.78-2.76 1.41a7.58 7.58 0 01-3.22.63 5.11 5.11 0 01-2.86-.79 6.19 6.19 0 01-1.82-2l-2.92-5.05a32.58 32.58 0 0110.82-6.41 37.85 37.85 0 0112.79-2.13 22.91 22.91 0 018.79 1.61 18.14 18.14 0 016.66 4.43 18.84 18.84 0 014.21 6.72 24.27 24.27 0 011.46 8.54v33.75zm-18.51-9.84a12.76 12.76 0 005.46-1.09A16.47 16.47 0 00156 198v-7.5a53.15 53.15 0 00-8 .84 19 19 0 00-4.94 1.56 6.1 6.1 0 00-2.54 2.14 5.17 5.17 0 00-.68 2.6 4.61 4.61 0 001.51 3.91 7.47 7.47 0 004.41 1.04zM47.24 346.45h4c3.79 0 6.13 2.19 6.16 5.07s-2.48 5.15-6.32 5.12c-3.49 0-6.08-1.87-6.24-4.37h-7c.13 5.68 4.8 10.59 13.28 10.59 7.52 0 14-3.82 14-10.94a8.54 8.54 0 00-7.82-8.64v-.43a8.17 8.17 0 006.7-8.21c-.08-5.55-4.91-9.57-12.64-9.55-8.11 0-12.69 4.4-12.91 10.48h7.15c.13-2.26 2.24-4.4 5.49-4.4s5.39 1.84 5.42 4.56-2.22 4.67-5.42 4.67h-3.85zM79.11 343.12c0-7.63 2.5-11.52 6.29-11.52s6.32 3.92 6.32 11.52v1.65c0 7.61-2.53 11.58-6.32 11.58s-6.29-4-6.29-11.58zm-7.74 1.68c0 10.67 5 18.06 14 18.06 9.3 0 14.08-7.95 14.08-18.06v-1.71c0-10.74-5-18-14-18s-14.11 7.31-14.11 18zM126.36 352.48l1.92-2.08 7.87 11.76h8.75L134 346l10.16-12.24h-8.43l-9 11.52h-.35v-21.44h-7.49v38.32h7.49zM149.94 362.16h15.55c7.09 0 12.66-3.6 12.66-10.29 0-5.52-3.76-8.46-8.13-8.86v-.34a7.67 7.67 0 006.32-8c0-5.65-4.43-8.93-10.91-8.93h-15.49zm7.65-30.56h6c3 0 5.18 1.55 5.18 4.48s-2.16 4.64-6.59 4.64h-4.59zm0 14.48H164c3.95 0 6.29 1.87 6.29 5.2 0 3.6-2.93 5-7.57 5h-5.15zM279.94 350.72h10.46v-6.64h-10.46v-10.75h-6.48v10.75H263v6.64h10.42v11.1h6.48zM628.06 356.4v-6.16h-25.28v6.16zm0-11.76v-6.16h-25.28v6.16zM466.13 212.43H452.5a6.47 6.47 0 01-3.79-1 5.65 5.65 0 01-2-2.76l-4.51-13.27h-28.81l-4.47 13.23a5.92 5.92 0 01-5.72 3.8h-13.73l29.33-75.89h18zm-48.68-29h20.7l-7-20.78q-.68-2-1.61-4.64c-.59-1.8-1.18-3.75-1.77-5.83q-.84 3.18-1.72 5.88t-1.66 4.69zM509.53 212.43a7.62 7.62 0 01-3.48-.62 4.83 4.83 0 01-1.93-2.61l-1.14-3c-1.36 1.14-2.65 2.15-3.9 3a27.1 27.1 0 01-3.9 2.24 18.63 18.63 0 01-4.27 1.3 24.53 24.53 0 01-5 .47 22.39 22.39 0 01-6.71-.94 14.58 14.58 0 01-5.15-2.87 12.69 12.69 0 01-3.22-4.63 17.12 17.12 0 01-1.14-6.46 13.54 13.54 0 011.45-5.89 14.37 14.37 0 015.06-5.42 31.64 31.64 0 019.67-4.16 64.85 64.85 0 0115.34-1.84v-2.29q0-4.74-2-6.82a7 7 0 00-5.51-2.14 14.53 14.53 0 00-4.68.63 21.7 21.7 0 00-3.28 1.4c-.93.52-1.85 1-2.75 1.41a7.6 7.6 0 01-3.23.63 5.13 5.13 0 01-2.86-.79 6.3 6.3 0 01-1.82-2l-2.91-5.05a32.48 32.48 0 0110.83-6.47 37.81 37.81 0 0112.79-2.13 22.91 22.91 0 018.79 1.61 18.19 18.19 0 016.65 4.43 18.86 18.86 0 014.22 6.72 24.26 24.26 0 011.45 8.54v33.75zM491 202.59a12.76 12.76 0 005.46-1.09 16.61 16.61 0 004.73-3.55v-7.5a53 53 0 00-8 .84 18.82 18.82 0 00-4.94 1.56 6.2 6.2 0 00-2.55 2.14 5.17 5.17 0 00-.67 2.6 4.61 4.61 0 001.51 3.91 7.47 7.47 0 004.46 1.09zM372.28 362.16v-36.4h-7.65l-8.63 6.11v7.23l8.24-5.79h.37v28.85zM381.22 358a4.85 4.85 0 009.7 0 4.85 4.85 0 00-9.7 0zM424.13 334.54c-.24-4.35-4.38-9.42-12.46-9.42-9 0-14.8 6.48-14.8 19.6 0 5.28 1 9.2 2.75 12 2.64 4.38 7 6.11 11.68 6.11 7.81 0 13.57-4.69 13.57-12.83 0-7.7-5.65-11.65-11.44-11.65-4.85 0-7.6 2.45-8.69 4.93h-.45c-.19-6.64 2.58-11.89 7.3-11.89 3 0 4.72 1.57 5.23 3.15zm-19 15.78a6.16 6.16 0 0112.32 0c0 4.08-2.64 6.24-6.16 6.24a5.92 5.92 0 01-6.15-6.24zM431.81 353.71c.34 4.35 4.27 9.09 12.27 9.09 9.78 0 14.82-6.66 14.82-19.3 0-13.79-6.64-18.43-14.32-18.43s-13.65 4.75-13.65 12.64 5.6 11.89 11.76 11.89c4.69 0 7.55-2.32 8.51-4.85h.42c.24 6.61-2.05 11.84-7.44 11.84-2.8 0-4.72-1.41-5.09-2.88zm18.75-16.16a6.11 6.11 0 11-12.22 0c0-3.94 2.64-6.32 6.05-6.32 3.61-.03 6.17 2.37 6.17 6.32zM485.65 362.16V338.8h.35l8.35 18.3h4.83l8.32-18.3h.37v23.36h7v-36.4H507l-10 22.06h-.27l-10-22.06h-7.9v36.4zM523.81 362.16h15.55c7.1 0 12.67-3.6 12.67-10.29 0-5.52-3.76-8.45-8.13-8.85v-.35a7.67 7.67 0 006.32-8c0-5.66-4.43-8.94-10.91-8.94h-15.5zm7.66-30.56h6c3 0 5.17 1.55 5.17 4.48s-2.16 4.64-6.59 4.64h-4.58zm0 14.48h6.43c3.94 0 6.29 1.87 6.29 5.2 0 3.6-2.93 5-7.58 5h-5.14zM795 218.86h-12.55a6 6 0 01-3.48-1 5.32 5.32 0 01-1.87-2.53l-4.1-12.11h-26.44l-4.11 12.15a5.53 5.53 0 01-1.86 2.43 5.38 5.38 0 01-3.39 1.06h-12.6l26.92-69.66H768zm-44.68-26.63h19l-6.4-19.08c-.41-1.21-.91-2.63-1.48-4.25s-1.08-3.45-1.62-5.36q-.76 2.93-1.58 5.4c-.54 1.66-1.05 3.1-1.52 4.31zM834.79 218.86a7.09 7.09 0 01-3.19-.58 4.45 4.45 0 01-1.77-2.39l-1.05-2.72q-1.86 1.58-3.58 2.77a24.18 24.18 0 01-3.58 2.06 16.79 16.79 0 01-3.91 1.19 22.25 22.25 0 01-4.59.43 20.73 20.73 0 01-6.15-.86 13.42 13.42 0 01-4.73-2.63 11.66 11.66 0 01-3-4.25 15.68 15.68 0 01-1-5.93 12.47 12.47 0 011.34-5.41 13.1 13.1 0 014.63-5 28.86 28.86 0 018.88-3.83 59.54 59.54 0 0114.07-1.71v-2.1q0-4.35-1.82-6.27a6.47 6.47 0 00-5.06-2 13.18 13.18 0 00-4.29.58 20 20 0 00-3 1.29c-.86.48-1.7.91-2.53 1.29a7 7 0 01-3 .57 4.65 4.65 0 01-2.62-.72 5.81 5.81 0 01-1.67-1.86l-2.68-4.64a30 30 0 019.93-5.88 34.85 34.85 0 0111.74-2 21.1 21.1 0 018.07 1.48 16.76 16.76 0 016.11 4.07 17.43 17.43 0 013.87 6.17 22.29 22.29 0 011.33 7.84v31zm-17-9a11.7 11.7 0 005-1 15.43 15.43 0 004.35-3.25v-6.89a48.41 48.41 0 00-7.31.77 17.82 17.82 0 00-4.53 1.43 5.73 5.73 0 00-2.34 2 4.81 4.81 0 00-.62 2.39 4.24 4.24 0 001.38 3.59 6.89 6.89 0 004.08.92zM718.88 362.16v-36.4h-7.66l-8.61 6.11v7.23l8.24-5.79h.37v28.85zM727.81 358a4.86 4.86 0 009.71 0 4.86 4.86 0 00-9.71 0zM742.88 325.76v6.46h17.73v.34l-15.12 29.6h8.11l14.75-29.81v-6.59zM781.31 336.91v-.51a4.93 4.93 0 015.2-5c3 0 5.17 2 5.17 4.7 0 2.88-2.1 5.14-4 7.14l-13.26 13.9v5h25.52v-6.45h-15v-.37l8-8.4c3.09-3.31 6.4-6.4 6.4-11.58 0-5.84-5-10.26-12.64-10.26-8.64 0-12.64 5.81-12.64 11.38v.43zM826.33 362.16V338.8h.37l8.35 18.3h4.82l8.32-18.3h.38v23.36h7v-36.4h-7.87l-10 22.06h-.26l-10-22.06h-7.89v36.4zM864.49 362.16H880c7.09 0 12.66-3.6 12.66-10.29 0-5.52-3.76-8.45-8.13-8.85v-.35a7.67 7.67 0 006.32-8c0-5.66-4.43-8.94-10.91-8.94h-15.45zm7.65-30.56h6c3 0 5.18 1.55 5.18 4.48s-2.16 4.64-6.59 4.64h-4.59zm0 14.48h6.43c3.95 0 6.29 1.87 6.29 5.2 0 3.6-2.93 5-7.57 5h-5.15z"/></g><g id="sublabels"><path class="font-download-cls-3" d="M43.84 398.58v-16.65H44l10.6 16.65H57v-20.81h-2.4v16.65h-.12l-10.64-16.65h-2.42v20.81zM68.16 382.33a6.57 6.57 0 00-6.8 7v2.53c0 4.49 2.87 7 6.8 7s6.78-2.54 6.78-7v-2.53c0-4.47-2.94-7-6.78-7zm0 2.1c2.68 0 4.38 2.08 4.38 5.14v2c0 3.14-1.62 5.12-4.38 5.12s-4.42-2-4.42-5.12v-2c0-3.06 1.75-5.14 4.42-5.14zM80 382.59h-2.48v2H80v9.48c0 3.12.68 4.62 4.43 4.62.5 0 1.63-.08 1.85-.12v-2c-.25 0-.87.07-1.24.07-2 0-2.65-.48-2.65-2.45v-9.6H86v-2h-3.65v-4H80zM95.87 382.33a6.57 6.57 0 00-6.8 7v2.53c0 4.49 2.87 7 6.8 7s6.78-2.54 6.78-7v-2.53c0-4.47-2.93-7-6.78-7zm0 2.1c2.68 0 4.37 2.08 4.37 5.14v2c0 3.14-1.61 5.12-4.37 5.12s-4.42-2-4.42-5.12v-2c0-3.06 1.75-5.14 4.42-5.14zM111.87 393c.09 2.67 2 6 7.41 6 4.22 0 7.68-2.08 7.68-6.17 0-3.28-2.17-4.76-5.38-5.63l-3.66-1c-2-.52-2.94-1.66-2.94-3.18 0-2.31 2-3.57 4.59-3.57 3 0 4.54 1.6 4.74 3.67h2.43c-.09-4.1-3.71-5.88-7.11-5.88-3.63 0-7.12 2.07-7.12 5.94 0 3.22 2.39 4.77 4.8 5.41l3.73 1c2.35.61 3.43 1.63 3.43 3.4 0 2.37-1.93 3.78-4.89 3.78-3.28 0-5-1.69-5.26-3.78zM135.43 398.83a5.18 5.18 0 004.65-2.4h.1v2.15h2.32v-11c0-3.87-2.67-5.27-5.87-5.27s-5.54 1.34-5.8 4.07h2.33c.35-1.14 1.23-1.92 3.37-1.92s3.55 1 3.55 3.14v1.63h-4.27c-3.66 0-5.59 1.9-5.59 4.68 0 2.96 2.12 4.92 5.21 4.92zm.61-2.07c-1.75 0-3.35-.93-3.35-2.88 0-1.49.9-2.64 3.17-2.64h4.22v1.86a3.78 3.78 0 01-4.08 3.66zM147.41 398.58h2.39v-9c0-2.88 1.42-5.21 4.44-5.21 2.31 0 3.61 1.39 3.61 4v10.23h2.41v-11c0-3.55-2.23-5.27-5.46-5.27-3.4 0-4.46 1.92-4.88 3.19h-.12v-2.93h-2.39zM164.35 387.13c0 3.16 2.46 3.76 5.46 4.39 2.27.44 4 .81 4 2.67 0 1.46-1.09 2.65-3.78 2.65-2.37 0-3.39-.9-3.62-2.39h-2.35c0 2.86 2.45 4.38 5.87 4.38 3.69 0 6.25-1.76 6.25-4.93s-2.58-3.92-5.58-4.45c-1.83-.34-3.92-.6-3.92-2.58 0-1.64 1.43-2.57 3.39-2.57 2.27 0 3.36 1.28 3.45 2.45h2.26c0-2.61-2.21-4.42-5.61-4.42-3.01 0-5.82 1.46-5.82 4.8zM366.37 398.58v-16.65h.11l10.65 16.65h2.42v-20.81h-2.42v16.65H377l-10.64-16.65H364v20.81zM390.69 382.33a6.57 6.57 0 00-6.79 7v2.53c0 4.49 2.86 7 6.79 7s6.78-2.54 6.78-7v-2.53c0-4.47-2.92-7-6.78-7zm0 2.1c2.69 0 4.38 2.08 4.38 5.14v2c0 3.14-1.62 5.12-4.38 5.12s-4.42-2-4.42-5.12v-2c0-3.06 1.73-5.14 4.42-5.14zM402.49 382.59h-2.44v2h2.44v9.48c0 3.12.68 4.62 4.43 4.62.51 0 1.63-.08 1.85-.12v-2c-.25 0-.87.07-1.24.07-2 0-2.65-.48-2.65-2.45v-9.6h3.63v-2h-3.63v-4h-2.39zM418.4 382.33a6.57 6.57 0 00-6.8 7v2.53c0 4.49 2.87 7 6.8 7s6.78-2.54 6.78-7v-2.53c0-4.47-2.93-7-6.78-7zm0 2.1c2.68 0 4.37 2.08 4.37 5.14v2c0 3.14-1.61 5.12-4.37 5.12s-4.42-2-4.42-5.12v-2c.02-3.06 1.75-5.14 4.42-5.14zM434.4 393c.09 2.67 2 6 7.41 6 4.22 0 7.68-2.08 7.68-6.17 0-3.28-2.17-4.76-5.38-5.63l-3.66-1c-2-.52-2.94-1.66-2.94-3.18 0-2.31 1.95-3.57 4.59-3.57 3 0 4.54 1.6 4.74 3.67h2.43c-.09-4.1-3.71-5.88-7.11-5.88-3.63 0-7.12 2.07-7.12 5.94 0 3.22 2.39 4.77 4.8 5.41l3.74 1c2.34.61 3.42 1.63 3.42 3.4 0 2.37-1.93 3.78-4.89 3.78-3.27 0-5-1.69-5.26-3.78zM458 398.83a5.18 5.18 0 004.65-2.4h.11v2.15H465v-11c0-3.87-2.67-5.27-5.86-5.27-3.34 0-5.55 1.34-5.81 4.07h2.33c.35-1.14 1.23-1.92 3.37-1.92s3.55 1 3.55 3.14v1.63h-4.27c-3.66 0-5.59 1.9-5.59 4.68.03 2.96 2.15 4.92 5.28 4.92zm.61-2.07c-1.75 0-3.35-.93-3.35-2.88 0-1.49.9-2.64 3.17-2.64h4.22v1.86a3.78 3.78 0 01-4.08 3.66zM469.94 398.58h2.39v-9c0-2.88 1.42-5.21 4.44-5.21 2.31 0 3.61 1.39 3.61 4v10.23h2.41v-11c0-3.55-2.23-5.27-5.46-5.27-3.4 0-4.46 1.92-4.88 3.19h-.12v-2.93h-2.39zM486.89 387.13c0 3.16 2.45 3.76 5.45 4.39 2.27.44 4 .81 4 2.67 0 1.46-1.09 2.65-3.77 2.65-2.38 0-3.4-.9-3.63-2.39h-2.35c0 2.86 2.46 4.38 5.87 4.38 3.69 0 6.25-1.76 6.25-4.93s-2.58-3.92-5.58-4.45c-1.83-.34-3.92-.6-3.92-2.58 0-1.64 1.44-2.57 3.39-2.57 2.27 0 3.36 1.28 3.46 2.45h2.25c0-2.61-2.21-4.42-5.61-4.42-3.01 0-5.81 1.46-5.81 4.8zM525 398.58v-20.81h-2.42v8.92h-10.76v-8.92h-2.42v20.81h2.42v-9.7h10.76v9.7zM545 377.77h-2.92L532.82 388h-.11v-10.23h-2.42v20.81h2.42v-7.43l2.64-2.85 6.92 10.28h3.12l-8.23-12zM702.12 398.57V380h6.39v-2.2h-15.18v2.2h6.37v18.6zM716.35 382.33a6.57 6.57 0 00-6.79 7v2.53c0 4.49 2.86 7 6.79 7s6.79-2.54 6.79-7v-2.53c0-4.47-2.93-7-6.79-7zm0 2.1c2.69 0 4.38 2.08 4.38 5.14v2c0 3.14-1.62 5.12-4.38 5.12s-4.41-2-4.41-5.12v-2c0-3.06 1.75-5.14 4.41-5.14zM728.15 382.59h-2.44v2h2.44v9.48c0 3.12.69 4.62 4.44 4.62.5 0 1.63-.08 1.84-.12v-2c-.24 0-.87.07-1.23.07-2 0-2.66-.48-2.66-2.45v-9.6h3.63v-2h-3.63v-4h-2.39zM742.49 398.83a5.18 5.18 0 004.65-2.4h.11v2.14h2.31v-11c0-3.87-2.66-5.27-5.86-5.27s-5.55 1.34-5.81 4.07h2.33c.35-1.14 1.24-1.92 3.37-1.92s3.55 1 3.55 3.14v1.63h-4.27c-3.65 0-5.59 1.9-5.59 4.68 0 2.97 2.12 4.93 5.21 4.93zm.61-2.07c-1.75 0-3.35-.93-3.35-2.88 0-1.49.9-2.64 3.17-2.64h4.22v1.86a3.78 3.78 0 01-4.04 3.66zM754.56 398.57H757v-21.89h-2.39zM768.67 377.77v20.8h6.53c6.82 0 9.11-4.48 9.11-10.39 0-6.06-2.42-10.41-9.11-10.41zm2.43 2.2h4c4.81 0 6.69 3.14 6.69 8.21 0 5.23-2 8.18-6.69 8.18h-4zM794.63 382.33a6.57 6.57 0 00-6.8 7v2.53c0 4.49 2.87 7 6.8 7s6.78-2.54 6.78-7v-2.53c0-4.47-2.93-7-6.78-7zm0 2.1c2.68 0 4.37 2.08 4.37 5.14v2c0 3.14-1.61 5.12-4.37 5.12s-4.42-2-4.42-5.12v-2c0-3.06 1.79-5.14 4.42-5.14zM824.54 382.59h-2.39l-3 12.78H819l-3.75-12.78H813l-3.65 12.78h-.1l-3-12.78h-2.73l4.54 16h2.35l3.66-12.48h.06l3.75 12.48h2.33zM827.64 398.57H830v-9c0-2.88 1.42-5.21 4.43-5.21 2.32 0 3.62 1.39 3.62 4v10.22h2.4v-11c0-3.55-2.22-5.27-5.45-5.27-3.4 0-4.47 1.92-4.88 3.18H830v-2.92h-2.39zM845.48 398.57h2.4v-21.89h-2.4zM859 382.33a6.57 6.57 0 00-6.8 7v2.53c0 4.49 2.87 7 6.8 7s6.78-2.54 6.78-7v-2.53c-.03-4.47-2.95-7-6.78-7zm0 2.1c2.68 0 4.37 2.08 4.37 5.14v2c0 3.14-1.61 5.12-4.37 5.12s-4.42-2-4.42-5.12v-2c-.03-3.06 1.72-5.14 4.42-5.14zM874.24 398.83a5.18 5.18 0 004.65-2.4h.1v2.14h2.32v-11c0-3.87-2.67-5.27-5.87-5.27s-5.54 1.34-5.8 4.07H872c.35-1.14 1.23-1.92 3.37-1.92s3.55 1 3.55 3.14v1.63h-4.27c-3.66 0-5.59 1.9-5.59 4.68-.06 2.97 2.09 4.93 5.18 4.93zm.61-2.07c-1.75 0-3.35-.93-3.35-2.88 0-1.49.9-2.64 3.17-2.64h4.22v1.86a3.78 3.78 0 01-4.04 3.66zM891.69 382.31c-3.83 0-6.26 2.69-6.26 6.6v3.32c0 4 2.48 6.59 6.18 6.59 2.81 0 4.48-1.48 4.85-2.79h.12v2.54h2.27v-21.89h-2.39v8.24h-.12c-.52-1.31-2-2.61-4.65-2.61zm.32 2.14a4.31 4.31 0 014.45 4.46v3c0 2.94-1.71 4.81-4.36 4.81s-4.28-1.84-4.28-5.1v-2.09c0-3.21 1.6-5.08 4.18-5.08z"/></g><g id="outer-frames"><path class="font-download-cls-3" d="M214.62 64.52L152.43 2.58A10.26 10.26 0 00146 0H17.08A17.2 17.2 0 000 17.1v256.45a17.2 17.2 0 0017.08 17.09H204a17.2 17.2 0 0017.08-17.09V80.64a23.23 23.23 0 00-6.46-16.12zm-10.31 8.06h-51.56a4.27 4.27 0 01-4.19-4.19V16.77zM204 279H17.08a5.78 5.78 0 01-5.8-5.81V17.1a5.78 5.78 0 015.8-5.81H137.6v57.42a15.14 15.14 0 0015.15 15.16h57v189.68A5.72 5.72 0 01204 279zm10.62-214.48L152.43 2.58A10.26 10.26 0 00146 0H17.08A17.2 17.2 0 000 17.1v256.45a17.2 17.2 0 0017.08 17.09H204a17.2 17.2 0 0017.08-17.09V80.64a23.23 23.23 0 00-6.46-16.12zm-10.31 8.06h-51.56a4.27 4.27 0 01-4.19-4.19V16.77zM204 279H17.08a5.78 5.78 0 01-5.8-5.81V17.1a5.78 5.78 0 015.8-5.81H137.6v57.42a15.14 15.14 0 0015.15 15.16h57v189.68A5.72 5.72 0 01204 279zM559.88 64.52L497.69 2.58A10.26 10.26 0 00491.24 0h-128.9a17.2 17.2 0 00-17.08 17.1v256.45a17.2 17.2 0 0017.08 17.09h186.91a17.2 17.2 0 0017.08-17.09V80.64a23.23 23.23 0 00-6.45-16.12zm-10.31 8.06H498a4.27 4.27 0 01-4.19-4.19V16.77zM549.25 279H362.34a5.78 5.78 0 01-5.8-5.81V17.1a5.78 5.78 0 015.8-5.81h120.52v57.42A15.14 15.14 0 00498 83.87h57v189.68a5.72 5.72 0 01-5.75 5.45zm10.63-214.48L497.69 2.58A10.26 10.26 0 00491.24 0h-128.9a17.2 17.2 0 00-17.08 17.1v256.45a17.2 17.2 0 0017.08 17.09h186.91a17.2 17.2 0 0017.08-17.09V80.64a23.23 23.23 0 00-6.45-16.12zm-10.31 8.06H498a4.27 4.27 0 01-4.19-4.19V16.77zM549.25 279H362.34a5.78 5.78 0 01-5.8-5.81V17.1a5.78 5.78 0 015.8-5.81h120.52v57.42A15.14 15.14 0 00498 83.87h57v189.68a5.72 5.72 0 01-5.75 5.45zM881 83.09l-57.08-56.85a9.37 9.37 0 00-5.92-2.37H699.69A15.79 15.79 0 00684 39.56V275a15.79 15.79 0 0015.68 15.69h171.57A15.78 15.78 0 00886.92 275V97.89a21.34 21.34 0 00-5.92-14.8zm-9.47 7.4h-47.31a3.92 3.92 0 01-3.85-3.85V39.27zM871.25 280H699.69a5.31 5.31 0 01-5.33-5.33V39.56a5.3 5.3 0 015.33-5.32h110.62v52.7a13.89 13.89 0 0013.91 13.91h52.35V275a5.25 5.25 0 01-5.32 5zM881 83.09l-57.08-56.85a9.37 9.37 0 00-5.92-2.37H699.69A15.79 15.79 0 00684 39.56V275a15.79 15.79 0 0015.68 15.69h171.57A15.78 15.78 0 00886.92 275V97.89a21.34 21.34 0 00-5.92-14.8zm-9.47 7.4h-47.31a3.92 3.92 0 01-3.85-3.85V39.27zM871.25 280H699.69a5.31 5.31 0 01-5.33-5.33V39.56a5.3 5.3 0 015.33-5.32h110.62v52.7a13.89 13.89 0 0013.91 13.91h52.35V275a5.25 5.25 0 01-5.32 5z"/></g></svg>
</div>

Some communities live (or are forced to live) in underserved areas, meaning there is the chance that slow internet and metered data plans are present. We may be quick to think of developing nations and emerging markets, but know [it is also happening in our backyard](https://www.pewresearch.org/fact-tank/2021/06/22/digital-divide-persists-even-as-americans-with-lower-incomes-make-gains-in-tech-adoption/).

What you should be investigating here is if the extra download is worth it, or if using a device-supported sans-serif typeface in place of a branded sans-serif typeface is sufficient.

If you have to make the call over what approach to use, I urge you to speak directly with the people who would be affected by it. Anything else is conjecture.

## There is no one universally understood translate icon

The mechanism to update the written language on a digital experience is a high-stakes piece of UI. Because of this, you want it to be as easily understood as possible for the widest range of people.

There are a few different approaches to doing this, each with its own usability considerations:

### A representative icon

There was an attempt to create a universal icon with [the Language Icon Project](http://www.languageicon.org/):

<div class="centered-media-outer">
  <img
    role="img"
    alt="Two intersecting cards, one colored white and featuring an Asian-looking glyph and one colored black with an English capital letter A. Below the two cards is a curved arrow pointing left to right."
    class="centered-media-inner-1 margin-bottom-1"
    loading="lazy"
    src="{{ '/img/posts/what-they-dont-tell-you-when-you-translate-your-app/language-project.svg' | url }}" />
</div>

Unfortunately, not everyone understands what it means. In my research there were specific issues with this icon from people who have a low amount of tech literacy, and who read a written language that uses non-Asian characters.

### Globes

You may now be thinking, “Aha! I can just use a globe, then!” The problem here is Facebook beat you to it. A globe without a visible label was the previous iteration of their notification icon.

<div class="centered-media-outer">
  <img
    role="img"
    alt="The old Facebook notification icon, a white globe on a blue background. A red bage with the number 1 indicates there is an unread notification."
    class="centered-media-inner-1 margin-bottom-1"
    loading="lazy"
    src="{{ '/img/posts/what-they-dont-tell-you-when-you-translate-your-app/facebook-notifications.svg' | url }}" />
</div>

While Facebook now uses a bell icon, the damage has been done. For years, “globe&nbsp;=&nbsp;notifications” for one of the most popular websites on the internet. There’s a lot of learned behavior here, far more than you’ll ever be able to overcome.

### ISO language codes

There is a standardized two-letter code that corresponds with each of the major world’s languages. For example, English is “EN,” and Icelandic is “IS.” You might be familiar with these codes if you’ve ever had to use [HTML’s `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

Much like with the Language Icon Project icon, the trouble is this standard is also not universally recognized. Not everyone knows the two letter code of their language. In addition, not everyone knows English, the language the two letters use.

### Just the word “translate”

A button labeled “translate” also presents a bit of a problem, in that if you don’t read English, you may not know what the word “translate” means.

### It’s not binary

I’m not saying that these approaches will never be understood. Hopefully what I’m communicating is that some people may not understand them, and that omission could be a very important one.

### So, what can you do?

[The best icon is a text label](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label). If you only support a few translated or localized languages, there’s an easy solution: Display the name of the language using the language’s written form for each of the languages supported:

<svg aria-labelledby="languages-title" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1311 286">
<title id="languages-title">Three links in a row: English, Español, and 한글.</title>
<defs><style>
  .languages-cls-1 { fill:#244d6c; }
  .languages-cls-2 { fill:#ed6b59; }
  @media (prefers-color-scheme: dark) {
    .languages-cls-1 { fill:#F3AB45; }
    .languages-cls-2 { fill:#DEE0E5; }
  }
</style></defs><g id="words"><path class="languages-cls-1" d="M304.41 115.34v6H279.9V138h19.76v5.83H279.9V161h24.55v6.05h-32v-51.71zM311.54 167v-36.54h4.1a1.69 1.69 0 011.8 1.37l.51 3.78a20.42 20.42 0 015.29-4.14 13.83 13.83 0 016.73-1.59 12.92 12.92 0 015.26 1 10.37 10.37 0 013.85 2.85 12.13 12.13 0 012.34 4.35 18.62 18.62 0 01.79 5.62V167h-6.84v-23.29a9.37 9.37 0 00-1.83-6.16 6.82 6.82 0 00-5.59-2.23 10.5 10.5 0 00-5.14 1.3 16.81 16.81 0 00-4.43 3.56V167zM364.57 129.85a16.87 16.87 0 014.39.54 14.94 14.94 0 013.78 1.47h10.09v2.52q0 1.31-1.59 1.62l-4 .58a11.35 11.35 0 011.12 5 11.11 11.11 0 01-1 4.86 10.76 10.76 0 01-2.85 3.71 12.77 12.77 0 01-4.39 2.37 17.3 17.3 0 01-5.51.83 19.26 19.26 0 01-4.68-.54c-1.51.91-2.27 1.92-2.27 3a2.09 2.09 0 001.05 1.9 8.52 8.52 0 002.81.9 27.47 27.47 0 003.92.36c1.46.05 3 .14 4.5.26a36.4 36.4 0 014.5.54 12.92 12.92 0 013.93 1.33 7.37 7.37 0 012.77 2.48 7.23 7.23 0 011.08 4.14 9.47 9.47 0 01-1.19 4.57 11.72 11.72 0 01-3.38 3.93 17.54 17.54 0 01-5.41 2.77 23.11 23.11 0 01-7.23 1 28 28 0 01-7.06-.79 16.84 16.84 0 01-5-2.12 9.35 9.35 0 01-3-3.1 7.26 7.26 0 01-1-3.63 6.5 6.5 0 011.66-4.54 11.09 11.09 0 014.6-2.92 6.33 6.33 0 01-2.55-1.94 5.37 5.37 0 01-.94-3.31 5 5 0 01.29-1.62 6.58 6.58 0 01.86-1.69 9 9 0 011.48-1.62 10.37 10.37 0 012-1.34 11.5 11.5 0 01-4.25-4 11.27 11.27 0 012.38-14.44 13.25 13.25 0 014.43-2.37 17.85 17.85 0 015.66-.71zm11.31 39.06a2.92 2.92 0 00-.76-2.09 4.9 4.9 0 00-2-1.26 12.25 12.25 0 00-2.91-.65c-1.11-.12-2.27-.21-3.5-.29l-3.78-.21a41.86 41.86 0 01-3.67-.36 10 10 0 00-3.17 2.3 4.68 4.68 0 00-1.22 3.21 4.11 4.11 0 00.61 2.19 5 5 0 001.84 1.77 10.61 10.61 0 003.17 1.18 21.07 21.07 0 004.57.44 20.54 20.54 0 004.6-.47 11.53 11.53 0 003.39-1.3 6.14 6.14 0 002.09-2 4.47 4.47 0 00.74-2.46zm-11.31-20a10.27 10.27 0 003.35-.5 6.86 6.86 0 002.41-1.48 5.73 5.73 0 001.44-2.23 7.77 7.77 0 00.51-2.88 6.82 6.82 0 00-2-5.15 7.81 7.81 0 00-5.73-1.94 7.91 7.91 0 00-5.76 1.94 6.91 6.91 0 00-1.94 5.15 7.88 7.88 0 00.5 2.84 6.52 6.52 0 001.48 2.27 6.86 6.86 0 002.41 1.48 10.19 10.19 0 003.33.48zM396.32 113.9V167h-6.84v-53.1zM413.62 130.46V167h-6.83v-36.54zm1.38-11.34a4.29 4.29 0 01-.4 1.84 4.53 4.53 0 01-1 1.47 5.3 5.3 0 01-1.55 1 4.75 4.75 0 01-1.84.36 4.66 4.66 0 01-1.8-.36 5.48 5.48 0 01-1.47-1 5.27 5.27 0 01-1.05-1.47 4.88 4.88 0 010-3.68 4.94 4.94 0 011.05-1.54 4.6 4.6 0 011.47-1 4.21 4.21 0 011.8-.4 4.29 4.29 0 011.84.4 4.52 4.52 0 011.55 1 5 5 0 011.44 3.38zM445.35 136.65a1.54 1.54 0 01-1.4.87 2.83 2.83 0 01-1.3-.4c-.45-.26-1-.55-1.65-.86a12.45 12.45 0 00-2.34-.9 11 11 0 00-3.17-.4 9.17 9.17 0 00-2.81.4 6.84 6.84 0 00-2.16 1.08 5.2 5.2 0 00-1.37 1.62 4.25 4.25 0 00-.46 2 3.42 3.42 0 00.79 2.3 7.67 7.67 0 002.12 1.58 21.77 21.77 0 003 1.19c1.12.34 2.28.7 3.45 1.08s2.33.83 3.46 1.33a12 12 0 013 1.8 8.07 8.07 0 012.12 2.67 7.86 7.86 0 01.83 3.74 11.63 11.63 0 01-.94 4.72 10.06 10.06 0 01-2.7 3.74 12.56 12.56 0 01-4.35 2.49 18.21 18.21 0 01-6 .9 18.72 18.72 0 01-7-1.26 17.64 17.64 0 01-5.3-3.21l1.59-2.59a2 2 0 01.72-.76 1.93 1.93 0 011.08-.28 2.42 2.42 0 011.4.5c.48.34 1.06.71 1.73 1.12a17.32 17.32 0 002.48 1.08 11.59 11.59 0 003.64.5 9.67 9.67 0 003.17-.47 7.09 7.09 0 002.27-1.22 5 5 0 001.33-1.84 5.63 5.63 0 00.43-2.19 3.65 3.65 0 00-.83-2.45 6.56 6.56 0 00-2.12-1.66 17.4 17.4 0 00-3-1.19c-1.13-.33-2.29-.69-3.49-1.08s-2.33-.81-3.46-1.29a12.29 12.29 0 01-3-1.91 8.3 8.3 0 01-2.92-6.8 10 10 0 013.39-7.49 12.23 12.23 0 014.14-2.34 16.59 16.59 0 015.58-.87 17.51 17.51 0 016.51 1.16 14.08 14.08 0 015 3.13zM455.12 167v-53.1H462v21.24a19.51 19.51 0 015.11-3.82 14 14 0 016.48-1.44 12.84 12.84 0 015.25 1 10.41 10.41 0 013.86 2.85 12.13 12.13 0 012.34 4.35 18.94 18.94 0 01.79 5.62V167H479v-23.29a9.32 9.32 0 00-1.84-6.16q-1.83-2.24-5.58-2.23a10.47 10.47 0 00-5.14 1.3 16.81 16.81 0 00-4.43 3.56V167zM583.62 115.34v6h-24.51V138h19.76v5.83h-19.76V161h24.55v6.05h-32v-51.71zM612.63 136.65a1.57 1.57 0 01-1.41.87 2.8 2.8 0 01-1.29-.4c-.46-.26-1-.55-1.66-.86a12.45 12.45 0 00-2.34-.9 11 11 0 00-3.17-.4 9.06 9.06 0 00-2.8.4 6.89 6.89 0 00-2.17 1.08 5 5 0 00-1.36 1.62 4.13 4.13 0 00-.47 2 3.42 3.42 0 00.79 2.3 7.58 7.58 0 002.13 1.58 21.13 21.13 0 003 1.19q1.7.51 3.45 1.08c1.18.39 2.33.83 3.46 1.33a12 12 0 013 1.8 8.07 8.07 0 013 6.41 11.8 11.8 0 01-.93 4.72 10 10 0 01-2.71 3.74 12.47 12.47 0 01-4.35 2.49 18.21 18.21 0 01-6 .9 18.72 18.72 0 01-7-1.26 17.58 17.58 0 01-5.29-3.21l1.58-2.59a2 2 0 01.72-.76 1.93 1.93 0 011.08-.28 2.38 2.38 0 011.4.5c.49.34 1.06.71 1.73 1.12a17.48 17.48 0 002.49 1.08 11.48 11.48 0 003.63.5 9.63 9.63 0 003.17-.47 7.09 7.09 0 002.27-1.22 5 5 0 001.33-1.84 5.63 5.63 0 00.43-2.19 3.65 3.65 0 00-.82-2.45 6.61 6.61 0 00-2.13-1.66 17.08 17.08 0 00-3-1.19c-1.12-.33-2.29-.69-3.49-1.08s-2.33-.81-3.45-1.29a12.35 12.35 0 01-3-1.91 9.41 9.41 0 01-2.12-2.77 9.28 9.28 0 01-.79-4 9.93 9.93 0 013.38-7.49 12.42 12.42 0 014.14-2.34 16.59 16.59 0 015.58-.87 17.6 17.6 0 016.52 1.16 14.12 14.12 0 015 3.13zM622.39 179.28v-48.82h4.1a1.69 1.69 0 011.8 1.37l.58 4.17a19.31 19.31 0 015.29-4.46 13.71 13.71 0 016.91-1.73 12.74 12.74 0 015.66 1.23 11.52 11.52 0 014.35 3.56 16.79 16.79 0 012.81 5.87 29.53 29.53 0 011 8 25.49 25.49 0 01-1.08 7.56 18.08 18.08 0 01-3.13 6 14.23 14.23 0 01-11.56 5.47 13.48 13.48 0 01-5.68-1.08 13 13 0 01-4.18-3.09v15.95zm16.45-44a10.24 10.24 0 00-5.4 1.4 15.44 15.44 0 00-4.21 3.93v17.46a10.2 10.2 0 003.74 3.2 11.31 11.31 0 004.58.9 8.92 8.92 0 007.59-3.53q2.67-3.52 2.67-10.22a25.2 25.2 0 00-.62-6 11.35 11.35 0 00-1.76-4.06 6.69 6.69 0 00-2.81-2.34 8.89 8.89 0 00-3.78-.7zM686.18 167a3.07 3.07 0 01-1.54-.32 2.31 2.31 0 01-.87-1.26l-.75-3.28c-.94.86-1.86 1.64-2.78 2.34a15.51 15.51 0 01-2.88 1.69 14.66 14.66 0 01-3.16 1.05 18.24 18.24 0 01-3.78.36 13.84 13.84 0 01-4-.58 9.31 9.31 0 01-3.27-1.84 9 9 0 01-2.2-3 10.78 10.78 0 01-.79-4.32 8.09 8.09 0 011.15-4.14 10.54 10.54 0 013.82-3.53 24.89 24.89 0 016.91-2.59 51.72 51.72 0 0110.51-1.15v-2.74c0-2.76-.6-4.83-1.8-6.23a6.4 6.4 0 00-5.22-2.12 10.87 10.87 0 00-3.92.61 15.44 15.44 0 00-2.7 1.3q-1.12.68-2 1.26a3.12 3.12 0 01-1.73.57 2 2 0 01-1.22-.36 4.44 4.44 0 01-.83-.9l-1.23-2.23a21.44 21.44 0 016.59-4.32 20.77 20.77 0 017.85-1.44 14.25 14.25 0 015.51 1 10.87 10.87 0 014 2.84 11.69 11.69 0 012.48 4.36 17.44 17.44 0 01.87 5.65V167zm-13.71-4.21a12.8 12.8 0 003-.33 10.76 10.76 0 002.59-.93 13 13 0 002.3-1.48 28.32 28.32 0 002.16-2v-7.35a52.92 52.92 0 00-7.34.69 20.9 20.9 0 00-4.93 1.4 6.7 6.7 0 00-2.74 2.09 4.34 4.34 0 00-.86 2.63 6.07 6.07 0 00.43 2.41 4.54 4.54 0 001.26 1.65 5.87 5.87 0 001.83.94 9 9 0 002.3.28zM698.75 167v-36.54h4.1a1.69 1.69 0 011.8 1.37l.51 3.78a20.42 20.42 0 015.29-4.14 13.83 13.83 0 016.73-1.59 12.89 12.89 0 015.26 1 10.37 10.37 0 013.85 2.85 12.13 12.13 0 012.34 4.35 18.62 18.62 0 01.79 5.62V167h-6.84v-23.29a9.37 9.37 0 00-1.83-6.16 6.81 6.81 0 00-5.58-2.23 10.51 10.51 0 00-5.15 1.3 16.81 16.81 0 00-4.43 3.56V167zm19.37-47.92a2.45 2.45 0 001.91-.72 3.5 3.5 0 00.72-2.34h4.17a10.4 10.4 0 01-.47 3.24 7.43 7.43 0 01-1.33 2.49 6 6 0 01-4.75 2.19 5.68 5.68 0 01-2.38-.5 19.17 19.17 0 01-2-1.12c-.65-.43-1.27-.81-1.87-1.15a3.37 3.37 0 00-1.66-.5c-1.68 0-2.54 1-2.59 3.09h-4.25a10.39 10.39 0 01.47-3.2 8 8 0 011.37-2.52 6.38 6.38 0 012.09-1.62 6.2 6.2 0 012.66-.58 5.49 5.49 0 012.38.51 18 18 0 012.09 1.11c.64.41 1.24.78 1.8 1.12a3.28 3.28 0 001.64.5zM754.48 129.88a19 19 0 017.28 1.34 14.9 14.9 0 015.5 3.74 16.7 16.7 0 013.5 5.94 23.35 23.35 0 011.22 7.78 23.66 23.66 0 01-1.22 7.81 16.7 16.7 0 01-3.5 5.94 15.36 15.36 0 01-5.5 3.78 19.55 19.55 0 01-7.28 1.29 19.77 19.77 0 01-7.3-1.29 15.82 15.82 0 01-5.55-3.78 16.83 16.83 0 01-3.49-5.94 23.4 23.4 0 01-1.22-7.81 23.1 23.1 0 011.22-7.78 16.83 16.83 0 013.49-5.94 15.34 15.34 0 015.55-3.74 19.18 19.18 0 017.3-1.34zm0 32.3c3.51 0 6.12-1.18 7.85-3.53s2.59-5.67 2.59-9.94-.86-7.56-2.59-9.93-4.34-3.57-7.85-3.57-6.2 1.19-8 3.57-2.59 5.68-2.59 9.93.86 7.59 2.59 9.94 4.45 3.53 8 3.53zM786.91 113.9V167h-6.84v-53.1zM889 115.66h-16.09v-7.92H867v7.92h-16v4.76h38zM860.17 136c0-4.47 4-7.35 9.79-7.35s9.87 2.88 9.87 7.35-4 7.41-9.87 7.41-9.79-2.91-9.79-7.41zm25.27 0c0-7.2-6.33-12-15.48-12s-15.41 4.75-15.41 12 6.27 12 15.41 12 15.48-4.76 15.48-12zm-18.86 16.41h-5.91v18.51h43.06v-4.83h-37.15zm34.27-23.32v-21.35H895v48.46h5.9V134h9.5v-5zM929.93 159.3h38.31V143h-44.35v4.68h38.44v7.13H924.1v16.71h45.72v-4.68h-39.89zm36.65-27.51a82 82 0 001.42-17.21v-4.1h-43.54v4.75h37.73a77.4 77.4 0 01-1.51 16.56H917v4.75h58.61v-4.75z"/></g><g id="link"><path class="languages-cls-2" d="M847 186h129v4H847zM552 186h235v4H552z"/></g></svg>

If you support many languages and space is at a premium, a hybrid approach is to display two or more of the supported languages as sub-labels in a button that toggles a language picker. Here, an icon may help as an extra affordance for functionality, so long as it accompanies a visible text label.

<div class="centered-media-outer">
<img
  role="img"
  alt="A button with a globe icon that is labeled “Translate.” Below the label is a sub-label that reads, “Translate. Español, 中文, Tiếng Việt +5 more.”"
  class="centered-media-inner-2"
  loading="lazy"
  src="{{ '/img/posts/what-they-dont-tell-you-when-you-translate-your-app/translate-button.svg' | url }}" />
</div>

Yes, this design does borrow from less-successful approaches mentioned earlier, but combining them to use their respective strengths tested well.

## Trust is difficult to build and and easy to lose

Translation or localization, like any other feature, is ultimately in the service of getting someone what they need.

Accurate translation or quality localization takes a ton of work, and this work is invisible. By this, I mean the work should create a seamless experience for the person using it. The thing about seamless experiences is people don’t notice them. Nor are they supposed to.

### Internal efforts

Someone getting what they need in the language they prefer signals quality and builds trust.

That being said, [people are far more likely to remember the frustration](https://en.m.wikipedia.org/wiki/Negativity_bias) that comes with friction. Poor or missing translations can easily unmake the positive associations you’ve painstakingly tried to build for your app, website, or web app.

### External resources
The other thing is the web is a holistic experience. People will judge the quality of the content you link to—even if you have no control over it—because they view the link to be a part of an overall task.

This link association phenomenon can also work both ways. If you link to high quality resources, the positive association will help improve someone’s perception of your digital experience. If you link to poor-quality resources, it will negatively affect that perception.

Visual design also does a lot of work to help create these positive or negative associations. By this, I mean that official, authoritative sources (government sites, for example) were met with skepticism if their appearance looked clunky or dated. On top of this, cultural notions around aesthetics may factor into evaluation.

<figure
  role="figure"
  aria-label="Every sign tells a story.">
  <img
    alt="A poorly-designed government website with nonsensical inputs, a broken Java map applet, and Microsoft Word clipart. Each section of the site is contained in an iframe. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/what-they-dont-tell-you-when-you-translate-your-app/kentucky-superload-restriction-information-management.png' | url }}" />
  <figcaption>
    <p>Witness the glory that is the <a href="https://kyowod.kytc.ky.gov/Restrictions/restrictions.htm">Kentucky Transportation Cabinet Superload Restriction Information Management</a>'s website.</p>
  </figcaption>
</figure>

Honestly, this fact is true for non-translated experiences, but it’s a phenomenon I’ve found to be magnified when working with underserved communities.

## Supporting translation or localization will require organizational change

The three threads woven into all the preceding facts are time, money, and resources. When you make the decision to translate or localize, know that it’ll be a sea change for your organization.

The infrastructure required to successfully undertake translation or localization touches on nearly every aspect of creating and maintaining a digital experience. This goes for both creating in-house capability, or using an external service.

## This is a lot

Software is complicated. Language is complicated. People are complicated. The combination of all three will inevitably be even more complicated. Does this mean you shouldn’t translate or localize your digital experience? Hell no.

Language access is a vital, yet often overlooked way to make digital experiences more equitable. This form of equity is increasingly more important as more and more services that are part of living everyday life digitize.

