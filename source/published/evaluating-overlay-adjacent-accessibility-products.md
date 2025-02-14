---
layout: "layouts/post.njk"
title: Evaluating overlay-adjacent accessibility products
source: ericwbailey.website
excerpt: "The rubric I use to evaluate these products remains very similar to how I scrutinize overlays"
date: 2025-02-14
year: 2025
tags:
  - AI
  - Alt Text
  - Accessibility
  - Approach
  - Assistive Technology
  - Browser Extensions
  - Devices
  - Overlays
furtherReading:
  - title: "Be Wary of Add-on Accessibility"
    source: "Adrian Roselli"
    url: https://adrianroselli.com/2015/11/be-wary-of-add-on-accessibility.html
  - title: "Subscription accessibility update"
    source: "AlastairC"
    url: https://alastairc.uk/2015/10/subscription-accessibility-update/
  - title: "When the treatment is worse than the disease"
    source: "Karl Groves"
    url: https://karlgroves.com/when-the-treatment-is-worse-than-the-disease/
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 1
---

I get asked about my opinion on overlay-adjacent accessibility products with enough frequency that I thought it could be helpful to write about it.

There’s a category of third party products out there that are almost, but not quite an [accessibility overlay](https://overlayfactsheet.com/en/). By this I mean that they seem a little less predatory, and a little more grounded in terms of the promises they make.

Some of these products are widgets. Some are browser extensions. Some are apps. Some are an odd fourth thing.

Sometimes it’s a case of a solutioneering [disability dongle](https://blog.castac.org/2022/04/disability-dongle/) grift, sometimes its a case of good intentions executed in a less-than-optimal way, and sometimes it’s something legitimately helpful. Oftentimes it’s something that lies in the middle area of all of this.

Many of them also have some sort of “AI” integration, which is the unfortunate upsell du jour we have to collectively endure for the time being.

The rubric I use to evaluate these products remains very similar to how I [scrutinize overlays](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/). Hopefully it’s something that can be helpful for your own efforts.

## Should the product’s functionality be patented?

I’m not very happy with the idea that the mechanism to operate something in an accessible way is inhibited by way of legal restriction. This artificially limits who can use it, which is in opposition to the overall mission of digital accessibility.

Ideally the technology is the free bit, and the service that facilitates it is what generates the profit.

## Does it rely on pseudoscience?

I need to acknowledge [the Placebo Effect](https://www.webmd.com/pain-management/what-is-the-placebo-effect) here, but also caution against the industries that feed off  of dubious and outright incorrect scientific assertions.

The main concern is when the product does not work for someone in the actual, despite seeming like it should. Many people will internalize this failure as their own, and that’s dangerous.

## Do I need to subscribe to use it?

A subscription-based model is a great way to run a business, but **you don’t need to pay a recurring fee to use an accessible website**.

The nature of the web’s technology means it can be operated via keyboard, voice control, and other assistive technology if constructed properly. Workarounds and community support also exist for some things where it’s not built well.

Here I’d also like you to consider [the disability tax](https://tcf.org/content/commentary/paying-the-disability-tax-in-an-inaccessible-world/), and how that factors into a rental model. It’s not great.

## Does the browser or operating system already have this functionality?

A lot of the time this boils down to an issue of [discovery, digital literacy, or identity](https://ericwbailey.website/published/accessibility-preference-settings-information-architecture-and-internalized-ableism/).

As touched on in the previous section, browsers and operating systems offer a lot to help you self-serve. Notable examples are reading mode, on-screen narration, color filters, interface and text zoom, and forced color inversion.

## Can it be used across multiple experiences, or just one website?

**Stability and predictability of operation and output** are vital for technology like this. It’s why I am so bullish on utilizing existing browser and operating system features.

Products built to “enhance” the accessibility of a single website or app can’t contribute towards this. Ironically, their presence [may actually contribute friction](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/) towards someone’s existing method of using things.

A tricky little twist here is products that target a single website are often advertised towards the website owner, and not the people who will be using said website.

## Can I use the keyboard to operate it?

I’ve gotten in the habit of pressing <kbd>Tab</kbd> a few times when I first check out the product’s website and see if anything happens.

It’s a quick and easy test to **see if the company walks the walk in addition to talking the talk**. Here, I regrettably encounter missing focus indicators and non-semantic interactive controls more often than not. I might also sometimes run the homepage through [axe DevTools](https://www.deque.com/get-started-axe-devtools-browser-extension/), to see if there are other egregious errors.

I then try to use the product itself with a keyboard if a demo is offered. I am usually found wanting here.

## How reliable is the AI?

There are two broad considerations here:

1. How reliable is the output?
2. How can bias affect someone’s interpretation of things?

While I am a skeptic, I can also acknowledge that [there are some good use cases for LLMs and related technology when it comes to disability](https://bsky.app/profile/tink.uk/post/3lec5fujv722c).

I think about reliability in terms of the output in terms of the “assistive” part of assistive technology. By this, I mean it actually helps you do what you need to get done. Here, I’d point to [Salma Alam-Naylor’s experience with newer startups in this space versus established, community supported solutions](https://whitep4nth3r.com/blog/how-i-learned-to-code-with-my-voice/#my-voice-coding-tools).

Then consider LLM-based image description products. Here we want to make sure the content is **accurate and relevant**.

Remember that image descriptions are the mechanism that some people rely on to help them understand the world. If that description is not accurate, it impacts how they form an understanding of their environment.

A step past that thought is the biases inherent in, and perpetuated by LLM-based technology. I recall [Ben Myers’ thoughts on implicit, hegemonic normalization](https://benmyers.dev/blog/spotless-giraffe/), as well as the sobering truth that this technology can [exert influence over its users worldview at scale](https://www.nature.com/articles/s41599-025-04465-z).

## Can the company be trusted with your data?

A lot of assistive technology is purposely designed to not announce the fact that it is being used. This is to stave off things like discrimination or [ineffective, separate-yet-equal “accessibility only” sites](https://www.transportation.gov/briefing-room/dot7418).

There’s also the murky world of data brokerage, and if the company is selling off this information or not. [AccessiBe comes to mind here](https://tink.uk/accessibe-and-data-protection/), and not in a good way.

Also consider if the product has access to everything you visit and interact with, and **who has access to that information**.

As a companion concern, it is also worth considering the product’s data security practices—or lack thereof. Here, I would like to point out that startups tend to deprioritize this boring kind of infrastructure work in favor of feature creation.

Not having any personal information present in a system is the best way to guard against its theft. Also know that there is no way to undo a data breach once it occurs. Leaked information stays leaked.

## Will the company last?

Speaking of startups, know that more fail than succeed.

Are you prepared for an outcome where the product you rely on is is no longer updated or supported because [the company that made it went out of business](https://spectrum.ieee.org/bionic-eye-obsolete)?

It could also be a case where the company still exists, but [ceases to support the product you use](https://www.theverge.com/2024/5/23/24163383/spotify-car-thing-discontinued-december-2024). Here, know that sometimes these companies will actively squash attempts for community-based resurrection and support of the service because it represents potential liability.

This concern is another reason why I’m bullish on operating system and browser functionality. They have a lot more resiliency and focus on the long view in this particular area.

## But also

I’m not the arbiter of who can use what.

In the spirit of “the best camera is the one you have on you:” if something works for your specific access needs, by all means use it.
