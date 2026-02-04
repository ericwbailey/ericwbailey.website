---
layout: "layouts/post.njk"
title: You probably shouldn’t be annotating focus order
source: ericwbailey.website
excerpt: "Sometimes not doing something is the answer"
date: 2026-02-04
year: 2026
tags:
  - Accessibility
  - Approach
  - Assistive Technology
  - Design
  - Development
  - Focus
  - HTML
furtherReading:
  - title: "Glossary: Tab order explained"
    source: "The A11Y Collective"
    url: https://www.a11y-collective.com/glossary/tab-order/
  - title: "Browsing with a keyboard"
    source: "TetraLogical"
    url: https://tetralogical.com/blog/2021/10/26/browsing-with-a-keyboard/
  - title: "Source Order Matters"
    source: "Adrian Roselli"
    url: https://adrianroselli.com/2015/09/source-order-matters.html
  - title: "Technique G59: Placing the interactive elements in an order that follows sequences and relationships within the content"
    source: "W3C WAI"
    url: https://www.w3.org/WAI/WCAG22/Techniques/general/G59
  - title: "How-to: Use the tabindex attribute"
    source: "The A11Y Project"
    url: https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/
attribution: "Thank you to <a href='https://annaecook.com/'>Anna</a> for the idea, as well as for a few misconception examples."
share:
  facebookDescription: "An abstract representation of focus stops."
  twitterDescription: "An abstract representation of focus stops."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 4
---

Hey there, fellow designer! Chances are good you’ve been linked to this after doing some annotation work on a design you've been creating.

First off, **I want to thank you** for taking the time to address accessibility considerations in your work. No, seriously. I mean it.

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/finger-heart-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A hand with a thumb crossing the index finger to create a heart shape, rendered as a simplified illustration."
      src="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/finger-heart-on-light.svg' | url }}">
  </picture>
</div>

[Accessibility-oriented annotations](https://www.figma.com/community/file/1552736256652388772/github-annotation-toolkit) are still a relatively rare thing in our industry. I applaud your efforts to buck that trend, and hope that this post does not dissuade you from future attempts.

## On focus order

There’s a subtle thing at play here, and it mostly revolves around the notion that adding something demonstrates effort and value. For focus order, you’ll actually want to **suppress that urge** and just let things be.

Yes, many accessibility annotation kits do come with the ability to specify focus order. And yes, being able to place focus on the interactive parts of your website or web app is an important thing.

However, **interactive elements allow you to place focus on them without needing to do anything else**. This includes buttons, links, form fields, checkboxes and radio buttons, expand/collapse toggles, tab panels, etc.

<div class="centered-media-outer">
  <picture class="centered-media-inner-4">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/interactive-elements-on-dark.svg' | url }}">
    <img
      role="img"
      alt="Simplified versions of a link, a button, a radio button, a checkbox, a select menu, a switch, tabs, an input, a textarea, a range slider, and a disclosure. They are arranged in two columns, with the final entry in the bottom right-hand corner being, '...and more!'"
      src="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/interactive-elements-on-light.svg' | url }}">
  </picture>
</div>

This is possible if the engineer—or LLM—who builds the user interface <abbr>(UI)</abbr> uses semantic elements. This means things like [the `button` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) for buttons, [the anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) for links, etc. Also know that it is a whole other set of problems if semantic elements aren’t used.

## The order itself

When it comes to web accessibility, **the order interactive elements receive should be a  [logical order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)**. For the vast majority of situations, this means **matching reading order**.

For example, English means focus order is left-to-right, top-to-bottom. [Arabic means right-to-left, top-to-bottom](https://rtlstyling.com/posts/rtl-styling/), etc.

The easiest way to guarantee focus order matches reading order is to **ensure the underlying HTML that powers your web experience is written in top-to-bottom order**, where the width of [the viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport) controls where content flows to the next line.

Fortunately, top-to-bottom HTML order is how the majority of the web is still built.

If you don’t believe me you can spend a little time poking around with browser developer tooling. I like using [the inspect element feature](https://developer.chrome.com/docs/devtools/inspect-mode) for this because you can highlight UI in the browser tab and see its corresponding code in context of the rest of the page or view.

<img
  alt="Two panels. The first shows the Etsy page for Toys and Hobbies. The image used for the board games category is highlighted, and a tooltip shows the element used, what classes are attached to it, and its accessible name and role. The second panel shows the Chrome Developer Tools, with the relevant line of HTML highlighted."
  class="post-breakout"
  loading="lazy"
  src="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/inspect-element.png' | url }}" />

## Why is focus important?

A **consistent, predictable, and logical focus order** helps a large number of people use your website or web app. This includes [working with assistive technologies](https://tetralogical.com/blog/2025/07/28/foundations-types-of-assistive-technology-and-adaptive-strategies/) such as:

- Screen readers,
- Magnification,
- Voice control,
- Switches,
- [Etc](https://webaim.org/articles/motor/assistive#intro).

It’s also something I’m willing to bet [you’ve benefitted from](https://ericwbailey.website/published/truths-about-digital-accessibility/#assistive-technology-may-not-be-considered-assistive-technology-by-the-person-using-it) when filling out forms, using <kbd>Tab</kbd> to quickly jump from input to input.

## So, why do annotation kits include focus order options?

Honestly, good question. Focus order annotations serve two general use cases:

1. **When the HTML order does not match reading order**. This sometimes happens as a result of third party code, some [relatively obscure CSS layout techniques](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items#the_order_property), or other corner-case scenarios.
- **When you need to do deep custom UI work**. There are certain kinds of complicated components and flows that benefit from having the order of focus explicitly illustrated for development handoff. For example, I used them when helping to make [GitHub’s interactive list component](https://ericwbailey.website/published/githubs-updated-commits-page-and-the-interactive-list-component/#what-concerns-does-an-interactive-list-address%3F).

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/tab-order-wide.svg' | url }}">
  <img
    role="img"
    alt="A simplified illustration of a list item with numbered tab stops to demonstrate focus order. Focus moves from the list item itself to its implied title area, then its label, then its status, then author and other associated metadata."
    src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/tab-order-narrow.svg' | url }}">
</picture>

## What should I do instead?

If you want to use your time efficiently: There is a tremendous amount of value in **manually evaluating focus order on the developed UI**.

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/push-tab-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A downward-facing hand with an outstretched finger that is about to press a tab key, rendered as a simplified illustration."
      src="{{ '/img/posts/you-probably-shouldnt-be-annotating-focus-order/push-tab-on-light.svg' | url }}">
  </picture>
</div>

And it’s easy to perform manual evaluation! All you have to do is press the <kbd>Tab</kbd> key and ensure each time you do that:

1. There is a visible focus treatment applied to each interactive piece of UI, and
2. Focus moves in the reading order of the language used for the design, and does not skip anything over.

You’ll want to do this on the live, public version of the website or webapp, since that is what the people who use your service will be using. Then **file bug reports** in the appropriate places if you run into things not working as expected.

As a pro-tip, you can also [prime your focus](https://www.tempertemper.net/blog/focus-priming) so you don’t have to <kbd>Tab</kbd> over primary navigation and other templated interactive elements repeated across different pages or views.

Given that assumptions are just that, you could also look into explicitly documenting:

- HTML order should follow reading order, and also
- Semantic HTML should be used for interactive elements.

Be strategic in how you go about this. It might ruffle some feathers, especially in larger and more siloed organizations.

## Other misconceptions

While I have you, here are a few other missteps related to focus order that I’ve encountered. These all break expectations and may confuse and disorient the people who use your service:

- Manually orchestrating a designed experience for where focus should go via use of `tabindex`.
- Making inert, static text focusable to make it more “important”. People already have ways to work with this kind of content.
- Removing the ability for interactive elements to receive focus in an attempt to direct someone to features the organization prioritizes.
- Assuming engineers know what component you’re using in your design, and where its documentation lives.
- Annotating the repeated, templated parts of a page or flow that have already been developed.

## Again, thank you

Meryl K. Evans has a quote about accessibility that I try to live by, and that is “[Progress over perfection](https://meryl.net/accessibility-progress-not-perfection/).”

To that point, thank you for being open to reading this post—I hope you don’t feel anger, shame, frustration, or other negative emotions in response to trying to do the right thing. I also hope that you don’t drop your accessibility efforts all together.

Instead, know that **making the web a little bit more accessible—and therefore a little bit better—adds up over time**. This also includes how you learn about the details and nuance of designing for disability.

One of the web’s better capabilities is its ability to be revisited and updated. It means that past efforts can be improved on as easily as making something new. In a way, it can also be a form of kindness you can extend to your past self—it’s something I’m also trying to be better at.

In closing, I’ve included a list of more resources at the end of this post. I hope it can serve as a springboard to learn more about focus.
