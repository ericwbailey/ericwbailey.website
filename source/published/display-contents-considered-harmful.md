---
layout: "layouts/post.njk"
title: "<code>display: contents</code> considered harmful"
source: ericwbailey.website
excerpt: "display: contents has a long and storied history when it comes to accessibility."
date: 2023-05-25
year: 2023
tags:
  - Accessibility
  - Assistive Technology
  - CSS
  - Development
furtherReading:
  - title: "Comment by alice on GitHub - web-platform-tests interop Issue #568: display: contents"
    source: "web-platform-tests/interop"
    url: https://github.com/web-platform-tests/interop/issues/568#issuecomment-1756320416
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 30
---

[`display: contents`](https://www.w3.org/TR/css-display-3/#box-generation) has a long and storied history when it comes to accessibility.

On paper, [the declaration alters the`display` qualities](https://bitsofco.de/how-display-contents-works/) of the element it is applied to. It makes the element “disappear,” elevating its child elements to the next level up in the DOM.

This sort of declaration could be useful for all sorts of things. Ironically one of the use cases would be for improving the underlying semantics of your work. However, the declaration as debuted worked a little too well.

## CSS and accessibility

Not everyone is aware of this, but [some CSS impacts how assistive technology works](https://scribe.rip/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939). Much like burning down your house will technically successfully get rid of any spiders that happen to be living in it, declaring `display: contents` on something may completely eradicate qualities essential to it being announced by assistive technology.

I’ll spare you the gritty details, but it does things like prevent buttons from being announced as buttons, tables as being announced and navigated as tables, lists as being announced and navigated as lists, etc.

Another way to put it: When people say “HTML is accessible by default”, `display: contents` blows the “by default” part away. Not good.

Accessibility practitioners noticed this issue, and entirely justifiable demands for it to be fixed were raised. Of note, I’d like to highlight [Adrian Roselli’s diligent, methodical, and matter-of-fact efforts to document and report this](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html).

Fixes were made, browsers were updated, and we got a happy ending. Right? Not so fast.

## Regressions

In software development, a regression can be a few things. The term is commonly used in a negative context to communicate how updated behavior has unintentionally been reverted to a previous, less desirable way of working.

For `display: contents`, it meant that everyone’s auto or [near-auto updating browsers](https://css-tricks.com/evergreen-does-not-mean-immediately-available/#aa-the-browsers-themselves) scrapped the very necessary bug fix and went back to destroying the underlying qualities that make semantic HTML communicate with assistive technology without warning or notice.

To reemphasize the severity here: This sort of regression is not the type of bug that is irritating to work around. It represents <strong>hard breakage of a foundational aspect of web accessibility</strong>.

[Adrian noticed this](https://adrianroselli.com/2022/07/its-mid-2022-and-browsers-mostly-safari-still-break-accessibility-via-display-properties.html#Update01). And if you continue to read the section I linked you to, he continued to notice this. And notice this. And [notice this some more](https://toot.cafe/@aardrian/110425545589928325). All told, I counted **sixteen updates** about how `display: contents`’ behavior had regressed in a way that was inaccessible.

## Optics

Making a browser is difficult. There are so, so many different things to consider, and that’s before you even get to [the enshitification of software](https://www.businessinsider.com/tech-companies-ruining-apps-websites-internet-worse-google-facebook-amazon-2023-3).

It’s a hard truth that accessibility isn’t everyone’s top priority. I can be a little forgiving here, in that I mostly try to work with what I have and not what I wish could be. I’m used to contending with all the little [quirks, gotchas, and miscellany](https://a11ysupport.io/tests/tech__html__select) that are a result of this prioritization.

I also understand that people make software, are fallible, and that we should be graceful and constructive in how we bring up criticism to them.

However.

The ability to use web interfaces is no trivial matter. `display: contents`’ breakage has a <strong>very real, very quantifiable impact</strong> on the quality of life of people who use the interfaces where it is declared.

I also want you to consider how this game of Whac-A-Mole affects accessibility practitioners. Telling someone they can’t use a shiny new toy never goes down well. Then telling them you can, but then later you can’t again erodes trust and the perception of competency.

It’s also exhausting to stay on top of all of this in addition to working a full-time job—there is no [caniuse](https://caniuse.com/) or [Baseline](https://web.dev/baseline/) for “accessibility.” This is a blog post I shouldn’t have to write, nor is it something the Adrians of the world should have to constantly test and re-test.

This is to say nothing of the countless collective hours people will invest in planning out and doing refactoring work to excise `display: contents` declarations and the markup it is applied to, should you be so lucky that they actually care.

I won’t even begin to get into the design systems and frameworks who incorporate the declaration, and what that represents.

## Don’t use `display: contents`

At this point, I don’t think we as an industry can use `display: contents` with confidence. Past actions are a good indicator of future behavior, and the road to hell is paved with good intentions.

I now view the declaration as predictably unpredictable. The common response of “just test its support with assistive technology” does not apply here, either—there is a non-trivial chance that desirable behavior for the declaration in a current browser version isn't guaranteed to persist for future versions of that browser.

To reiterate the severity at play here: `display: contents`’ behavior is akin to the links you use on your website or web app one day losing the ability to work because you applied CSS to them. This loss of ability comes without warning, and there’s no console error or visual indication that things are amiss.

This is a rare and disturbing thing—the entire modern web is built on top of the assumption things like this work do not stop working in this way. This isn’t a case of [interop concerns](https://web.dev/interop-2022/), it is harm being created by negligence.

`display: contents`’ regressions gives us a tiny window into viewing how certain aspects of browser-making are prioritized (or not prioritized) and tested (or not tested) for quality assurance purposes.

People can swear up, down, and all around that things like accessibility and inclusion are important, but when it comes to this CSS declaration in particular, it is clear that most browser makers are untrustworthy.

The erratic nature of how the declaration actually functions in the practical represents a very real, very serious risk of <strong>critical accessibility issues being introduced into your website or web app in a way that you have no control over</strong>.

Update: [Safari 17 was released on September 18th, 2023](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/), claiming it had fixed “our remaining accessibility issues with `display: contents`”. [Buttons and headings, however, are still broken](https://adrianroselli.com/2022/07/its-mid-2022-and-browsers-mostly-safari-still-break-accessibility-via-display-properties.html#Update23).