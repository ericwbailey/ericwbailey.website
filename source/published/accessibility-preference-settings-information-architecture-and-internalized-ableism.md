---
layout: "layouts/post.njk"
title: Accessibility preference settings, information architecture, and internalized ableism
source: ericwbailey.website
excerpt: "Customization lives at the heart of accessibility"
date: 2024-09-17
year: 2024
tags:
  - Accessibility
  - Approach
  - Apps
  - Assistive technology
  - Devices
  - Inclusion
  - Information architecture
share:
  facebookDescription: "A gear whose center contains a lightning bolt."
  twitterDescription: "A gear whose center contains a lightning bolt."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 60
---

I have a [lightning talk](https://en.wikipedia.org/wiki/Lightning_talk) I deliver internally at my job. It is intentionally delivered to non-accessibility practitioners, so mainly engineers, designers, and product folk.

The talk is about exploring [macOS' Accessibility system preferences](https://support.apple.com/guide/mac-help/change-accessibility-settings-mchlp1400/mac). It points out different features, like offline [white noise sounds](https://www.macworld.com/article/819085/how-to-play-soothing-white-noise-in-macos-ventura.html), [color filters](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac#mchl9c340ea4), and [magnification](https://support.apple.com/guide/mac-help/change-zoom-settings-for-accessibility-mh40579/mac).

Here are the first two slides I use to set the tone:

<img
  alt="The text, 'There is no wrong way to use a computer' set in large, white bold type. It is placed a purple and yellow gradient that evokes the feeling of dawn breaking."
  loading="lazy"
  src="{{ '/img/posts/accessibility-preference-settings-information-architecture-and-internalized-ableism/slide-there-is-no-wrong-way-to-use-a-computer.png' | url }}" />

<img
  alt="The text, 'Instead there is only software that can be improved' set in large, white bold type. It is placed a purple, red, and pink gradient that evokes the feeling of care and love."
  loading="lazy"
  src="{{ '/img/posts/accessibility-preference-settings-information-architecture-and-internalized-ableism/slide-instead-there-is-only-software-that-can-be-improved.png' | url }}" />

The talk deliberately avoids mentioning VoiceOver, or screen readers in general.

There is a reason behind this omission, and that reason is <strong>internalized ableism</strong>. People don't think of themselves as disabled, so they don't think the accessibility preference area applies to them.

This breaks my heart. When giving this talk there are inevitably comments in the chat along the lines of, "Wow, I had no idea this existed!" and, "This is going to be life changing!"

[The social model of disability](https://www.thesocialcreatures.org/thecreaturetimes/the-social-model-of-disability)—the notion that impairment is created because of a mismatch between built environment and individual ability—applies to software. There is no shame or stigma in acknowledging this.

In fact, one of my favorite party tricks for creating a more disability-accepting mindset shift is to point out that eyeglasses are assistive technology. They are so commonplace and normalized that we don’t consider them to be. But they are.

## Putting things in places

A sufficiently complicated digital experience will likely need to introduce categories for its preferences area to organize everything. This includes accessibility.

This act of categorization is balanced against discovery, in that most people will only reactively investigate areas that seem applicable to their immediate needs. This is to say [information architecture is difficult](https://thoughtbot.com/blog/consider-the-tomato).

There is also the situation where a preference that is legitimately an accessibility setting is placed in a different category. Think Apple placing [setting scrollbars as always visible](https://support.apple.com/en-tm/guide/mac-help/mchlp1225/14.0/mac/14.0) in its Appearance category. This is nice in that it side-steps the identity problem, but ironically could also prevent discovery.

<img
  alt="macOS' preferences window, with the Appearance category selected. The 'Show scroll bars' preference is highlighted."
  loading="lazy"
  src="{{ '/img/posts/accessibility-preference-settings-information-architecture-and-internalized-ableism/macos-preferences-scrollbars.png' | url }}" />

All of this conspires to <strong>impact someone's ability to self-serve</strong>.

## WCAG weighs in

In its wisdom, the Web Content Accessibility Guidelines offers us some help with the problem of categorical placement. The spirit of [Success Criterion 2.4.5: Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html) (<abbr>SC 2.4.5</abbr>) allows us to free ourselves from [the tyranny of category](https://scottberkun.com/2012/the-tyranny-of-category/).

SC 2.4.5 encourages us to <strong>provide alternate methods</strong> for people seek out what they need.

In the case of macOS’ preferences, this means including a search input field. This enables someone to search laterally across the entire preference surface area.

## Humans and machines

There is <strong>no “one true way” to use a computer</strong>. There are annoyances. There is friction. There are also limitations and outright barriers we all need to contend with.

Some of these issues affect everyone. Others may circumstantially be present due to the sheer probability of the variety of human experience.

Feedback mechanisms allow us to ask for the removal of these inevitable obstacles. Preferences and settings—both categorized as accessibility and not—allow us to overcome them in the meantime.

If you make a digital experience:

- Think about what options and [preferences you provide](https://ericwbailey.website/published/github-now-has-a-setting-to-underline-links/)—or don’t provide—to the people who use your service. Also consider how you organize this content.
- Pay attention to trends in your bug reports and customer service complaints. Start to categorize and prioritize them if you’re not already.
- Consider reaching out individuals directly to ask them what they need. Also be sure to compensate them for their time and experience.
- Provide different methods and techniques to access and operate content.
- Don’t forget about survivor bias. Just because [someone is not using your service does not mean they do not want to](https://en.wikipedia.org/wiki/Survivorship_bias?useskin=vector).

If you use digital experiences:

- Know that self-identity can affect your ability to operate technology.
- Understand the fact that [problems in software design can be internalized as personal failings](https://en.wikipedia.org/wiki/Social_rejection#Ball_toss_/_cyberball_experiments).
- Remember that accessibility is more than just screen readers.
- Be aware that settings that may help you operate software may be hidden in places you may not consider investigating.

<strong>Customization lives at the heart of accessibility</strong>. Take a little time to explore your operating system’s settings. Be sure to also investigate the settings of the software installed onto it and the websites and web apps you visit with it. You might discover something there that improves the quality of your life.

I’m also open to delivering this lightning talk at your organization. If you’re interested please <a href="https://ericwbailey.website/#section-contact">get in touch</a>!
