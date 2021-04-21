---
layout: "layouts/post.njk"
title: Mug handles
source: ericwbailey.design
excerpt: "My two-part piece on equivalent experiences is now live on Smashing Magazine. I have complicated feelings about it"
date: 2020-08-06
year: 2020
tags:
  - ericwbailey
  - accessibility
  - assistive-technology
  - design
  - inclusion
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 9
---

[My two-part piece on equivalent experiences](https://www.smashingmagazine.com/2020/05/equivalent-experiences-part1/) is now live on Smashing Magazine. I have complicated feelings about it.

First off, writing for Smashing Magazine is a great experience, and [I encourage you (yes, you) to pitch them](https://www.smashingmagazine.com/write-for-us/). Their team is friendly, knowledgeable, and will help make your writing the best it can be.

I am also happy to see their [leadership publicly acknowledging the Black community](https://www.smashingmagazine.com/2020/06/black-lives-matter/), as well as a continued investment in giving underrepresented voices a platform. I do feel uncomfortable being the next featured homepage article—I am a straight, white, cisgendered abled male. As someone who researches, and believes in [Intersectionality](https://en.m.wikipedia.org/wiki/Intersectionality), it has given me a lot to sit with.

Our industry has settled on a [meritocratic monoculture](https://kottke.org/17/03/the-satirical-origins-of-the-meritocracy). It is a default that has [a deep white savior&#8202;/&#8202;hero worship problem](https://twitter.com/donavon/status/1135520568990720001), [born of privilege](https://github.com/facebook/react) in a [genocide engine](https://www.nytimes.com/2018/10/15/technology/myanmar-facebook-genocide.html) so [willfully ignorant](https://www.theverge.com/2020/5/26/21270659/facebook-division-news-feed-algorithms) of its own power that it [independently reinvented redlining](https://www.theverge.com/2019/3/28/18285178/facebook-hud-lawsuit-fair-housing-discrimination) and thought it was a good thing.

Smashing Magazine, as well as [CSS-Tricks](https://css-tricks.com/guest-posting/), represent an important space in the industry. They are perceived as authoritative sources, while also publishing a range of thought, experience, and technology approaches. This is much-needed when considering the alternative—I hope they continue to do their part in pushing for better representation.

A byline at either publication grants leverage and clout, especially in [a hiring context](https://www.mic.com/articles/156689/minorities-in-tech-discrimination-recruiting-best-practices-how-to-recruit-job-interview-tips). For my part, I think it is best to step back for awhile to allow others the opportunities offered to me. I will also be doing my part to amplify [minoritized](https://www.selfdefined.app/definitions/minoritised/) voices, something I am really excited for. I may still occassionally publish here, as it is a personal website—I just don’t plan to be vocal about it.

## The piece itself

The need for equivalent digital experiences is a message that needs to be said. It’s been said before by people other than me, but it bears repeating. It especially needs to be said now. We’re both [requiring more software to survive in the modern world](https://themarkup.org/2020/04/21/blind-users-struggle-with-state-coronavirus-websites), while paradoxically [making it more inaccessible than it’s ever been before](https://webaim.org/projects/million/).

I’m glad Smashing Magazine published it. Their borrowed authority is much-needed in the accessibility space. They also give the concept of digital accessibility exposure, something that’s important to remember if you’re as dialed into the community as I am.

[Filter bubbles](https://en.m.wikipedia.org/wiki/Filter_bubble) are very real, and it’s important to remind myself that this article might be someone’s first exposure to the concept of accessibility, even someone who’s been working in the industry for a while.

### Direction

I’m not content with where the piece wound up. Right now I view it as a flip on common “intro to accessibility” posts. After interviewing many self-identified disabled people, the focus evolved to common remediation advice organized by reported barriers, rather than the more common pattern of organizing by domain.

Don’t get me wrong: these introductory posts are vital sources of information to get people aware and pointed in the right direction. However, the repeating of this information signals to me that [we’re still categorically failing disabled people in basically every way possible](/posts/fighting-uphill/). The interviews confirmed it.

I originally wanted to discuss the nuance in how [something that’s technically accessible may not be considered usable](https://medium.com/aaptiv-engineering/lessons-in-ios-voiceover-accessibility-834c5ed9a374). The [Rube Goldberg machine metaphor](https://www.smashingmagazine.com/2020/05/equivalent-experiences-part1/#accessible-experiences-aren-t-necessarily-equivalent-ones) I use is a thread of that original line of thinking.

This phenomenon is what you might experience when someone tries to retroactively “fix” something, oftentimes by [applying massive amounts of untested ARIA](https://a11yproject.com/posts/aria-has-perfect-support/) to it. Another good example is page/view titles, alternative descriptions, and [accessible names that over-explain](https://adrianroselli.com/2019/10/stop-giving-control-hints-to-screen-readers.html)—a decision that creates an infantilizing experience:

<figure role="figure" aria-label="If I find you doing this I will invite you to a Zoom call to yell at you.">
<pre><code>&lt;title&gt;
On this page you can send money between individual domestic or international accounts, and other banks. Click the Transfer button to get started.
&lt;/title&gt;
…
&lt;h1&gt;
Transfer funds
&lt;/h1&gt;
</code></pre>
  <figcaption>
    If I find you doing this I will invite you to a Zoom call to yell at you.
  </figcaption>
</figure>

Assistive-technology experiences can have a range of quality in their interactions, and it seems like functioning ones are rare enough, but good ones are virtually non-existent. This is [sadly, ironically equivalent to many other modern web experiences](https://neustadt.fr/essays/against-a-user-hostile-web/).

### Function follows form

I had an amazing conversation with [Soren](https://linktr.ee/uxicorn), someone I was fortunate to be able to meet via doing the research for my equivalent experiences piece. In this conversation, I expressed my frustrations about what I originally wanted versus where I wound up. They replied with an amazing insight, paraphrasing [<cite>The Design of Everyday Things</cite>](https://mitpress.mit.edu/books/design-everyday-things):

<blockquote>
  A mug handle becomes this universal thing, where people wrap a tea bag around it. […] This becomes something universal, that we don’t realize until we start observing it. We think maybe it’s maybe anecdotal, but it’s actually something that happens in the wild because of the form of the item.
</blockquote>

Wow.

I took ~6,300 words to say what Soren captured in one powerful statement. <strong>Equivalency is an after-effect, informed by how our tools shape us</strong>.

## The VoiceOver selfie challenge

Mug handles are an analog example, so I thought I’d also provide a digital one. It’s my hope this helps communicate the point I was trying to get at by providing something practical and grounded that you can try out for yourself.

I’m not sure who came up with the idea of the VoiceOver selfie challenge. The earliest source I could find was from [Aidan Tierney and Jason Thompson](https://www.slideshare.net/JasonDThompson/voice-over-selfie-challenge) in 2017, but I think I remember hearing about it before then.

To take a selfie on your iOS device using [VoiceOver](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios), you need to:

1. Go to Settings.
1. Go to General.
1. Go to Accessibility.
1. Go to Accessibility Shortcut.
1. Set Triple-click Home to VoiceOver.
1. Triple click Home and activate VoiceOver.
1. Go to the home screen.
1. Use swiping and tapping to navigate via VoiceOver to the Camera app and open it.
1. Navigate via VoiceOver to the button that flips the Camera around.
1. Rotate the device until VoiceOver announces, “One face, centered.”
1. Navigate via VoiceOver to the button that takes a photo.

Alternatively, you could:

1. Activate [Voice Control](https://support.apple.com/en-us/HT210417).
2. Activate Siri.
3. Tell Siri to “Take a selfie.”
4. Say, “Tap take picture.”

You could also:

1. Activate Siri.
1. Tell Siri to “Take a selfie.”
1. Press the top volume rocker.

The original intent of the challenge is to get people aware of, and familiar with using VoiceOver. However, iOS devices are mugs with a lot of handles—the other two techniques are “ah-ha!” moments to help teach you that these experiences can be easy, intuitive, and pleasant.

### Multiple ways

This is a phenomenal example of what the spirit of [WCAG Success Criterion 2.4.5 Multiple Ways](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html) is getting at. iOS takes advantage of its multiple input modes to thread in many different ways to navigate and activate things.

Sometimes it’s easier and faster to use accessibility technologies to get what you want, even if you don’t have a disability. It’s a great lesson in [Inclusive Design](https://inclusivedesignprinciples.org/).

iOS incorporates deep, sophisticated accessibility tooling, for those who need it. It is also largely unopinionated about how to go about doing what you need to do, and preserves core interaction metaphors regardless of past, current, or future [input modality](https://en.m.wikipedia.org/wiki/Modality_(human%E2%80%93computer_interaction)). It doesn’t force you to adopt a preconceived persona of what it considers a “disabled person,” conforming your behavior to the model it deems appropriate.

This might sound sententious, but it just works.

Disability personas are a [category error](https://en.m.wikipedia.org/wiki/Category_mistake). They tokenize and trivialize lived experiences, and are easy for an organization to ignore when they seem inconvenient. In addition, they are often crafted without input from actual disabled people.

When building digital experiences, I have two asks:  First is to consider exactly what kind of mug you’re building. Second is to [ask the person who drinks out of it what they think](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/).

