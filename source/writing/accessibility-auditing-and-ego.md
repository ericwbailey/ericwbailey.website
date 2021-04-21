---
layout: "layouts/post.njk"
title: Accessibility auditing and ego
source: ericwbailey.design
excerpt: "At its core, an accessibility audit is about determining if a disabled person can use a digital experience"
date: 2021-02-09
year: 2021
tags:
  - ericwbailey
  - accessibility
  - personal
responses:
  - title: "Accessibility auditing and pushing for more"
    url: https://alastairc.uk/2021/02/accessibility-auditing-and-pushing-for-more/
attribution: "Thank you to <a href='https://twitter.com/soMelanieSaid'>Melanie Richards</a>, <a href='https://twitter.com/patrick_h_lauke'>Patrick H. Lauke</a>, and <a href='https://twitter.com/codingchaos'>Sarah Higley</a> for their feedback."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 7
---

At its core, an accessibility audit is about determining if a disabled person can use a digital experience. It takes a snapshot of a website, app, kiosk, or other digital experience and provides a summary of:

- What isn’t working,
- How numerous the problems are,
- How severe the problems are, and
- What can be done about them.

What is done with the audit after that is another thing entirely.

The thing is, audits are only as good as how accurate they are. The whole purpose behind doing one is to set a roadmap for how to fix the experience and get things back on track. The goal isn’t punishment, it is remediation.

This is a thought I’ve been working through for awhile now. What really woke me up to it was [Patrick H. Lauke](https://www.splintered.co.uk/)’s talk from a11yTO Conf 2019, [These aren't the SCs you're looking for…](https://patrickhlauke.github.io/wcag-interpretation/) It’s a talk that is well worth your time:

<div class="video-wrapper">
  <iframe title="YouTube: These aren't the SCs you're looking for ... (mis)adventures in WCAG 2.x interpretation and audits"
  src="https://www.youtube.com/embed/I0tghv881ac?start=11"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


## Destroy all monsters

We don’t want to destroy a business, we want to ensure that disabled people can use the services it provides.

Critical accessibility issues cost time, money, and resources. There are real-life consequences for invoking them. For example, the presence of even a single critical issue might kick off all sorts of legal team workflows before development or design teams are even involved.

To re-emphasize it: we ultimately want disabled people to use these products regardless of how large or small the company that makes them are. So, should we pull our punches? No. Should we also use an audit as a mechanism to show how damn smart we are? Also no.

It’s tricky. We definitely don’t want to build job security into audits. But we also don’t want to misrepresent the state of things in either direction.

## I have standards

[The Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/TR/WCAG21/) are a [standard](https://www.iso.org/standard/58625.html). A lot of people know this, but I wonder how many people have internalized it. By this, I mean it is a standard that sets *normative*, objective criteria for what is and what is not accessible.

We like to say that accessible experiences are usable ones, but an accessible website can be unusable the same way [an inaccessible website can pass automated checks](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/).

Another way to say this: a digital experience can be built in a shoddy, horrible way and still meet WCAG criteria. An interactive control could have its expected keyboard interactions completely changed, but so long as you can fully operate it with a keyboard it isn’t a failure.

I am not going to say that the ends justify the means, but the purpose of an audit is to verify that an experience actually works for disabled people, not *how* the experience is constructed to facilitate it.

<blockquote>
  <p>Don’t creatively reinterpret what an SC says to fit your agenda.</p>
  <footer>
    <p>Patrick H. Lauke</p>
  </footer>
</blockquote>

You can’t fail something just because you, the individual, don’t like it. In all honesty, this is something I have struggled with, and continue to check myself on. It’s also why I prefer to not be an auditor full-time. I believe most of the worst accessibility offenses happen in the design layer, so as a designer I like to use the WCAG as one of the tools I reach for when giving criticism.

### Changes of context

In the context of a designer who cares about accessibility, I am able to appeal to usability and back it up with normative rules—the trick here is I am giving subjective feedback grounded in objective origins. In an auditing context, I don’t get to do that. My job is to point out what things map to what rules about what blocks access, and then suggest what can be done about it.

You have to kill your ego as an accessibility auditor. You can’t treat each project as a moral crusade, as much as it might feel like you need to. There are two incredibly bad outcomes that might come with this line of thinking:

## Taking a stand

Most businesses don’t opt into an audit proactively. They’re typically done after an organization or individual (quite rightly) files, or expresses an intent to file a lawsuit.

This means that your guiding thoughts for an audit should be that you are a mechanism to help define what existing, established, legally accepted parameters have not been met. And that’s it.

Know that every call you make as an auditor could unmake a case. We need to forget empathy and morality for the moment and understand that a  not guilty verdict can be far cheaper than the remediation process kicked off by being found guilty.

### Think like a lawyer

Defense attorneys won’t be swayed by higher callings. Their job, much like yours, is to pick apart things to determine if they’re valid. And while the WCAG’s language might seem arcane, it is a lawyer’s job to understand, extrapolate, and potentially exploit how a known set of complicated rules interact with each other.

If it comes to having to defend your calls on the witness stand, know that you’ll be outclassed. It might seem counter-intuitive, but staying in your lane will help more than an over-application of care.

### Settling for less
That being said, people don't know the WCAG, they know what they can't access. The WCAG can be separate to addressing a lawsuit—the framing of many of these cases is that the plaintiff cannot use the service, not that the WCAG has been violated. This translates to many one-and-done lawsuits being settled out of court.

This is to say that the WCAG is a bible, but not everyone is Christian. In all likelihood you won’t have to take the stand, but you should still approach auditing as if it could happen.

## Civil rights

This is the one that makes me the most uncomfortable.

In the United States, access is a Civil Right. That’s the whole reason accessibility-related lawsuits can happen. [Many other countries have similar policies](https://www.w3.org/WAI/policies/) at a similar level of significance, again built off of what the WCAG normatively dictates as what is and what is not an access barrier, and therefore a Civil Rights violation in a digital context.

What I don’t want is for someone to start to bend our understanding of what is, and what is not a Civil Rights violation. This especially gives me concern in a context where the person performing the audit is not disabled.

Does [not being able to navigate to, and activate a pizza order button](https://www.lflegal.com/2019/01/dominos-ninth-circuit/) violate our Civil Rights? Yes. Does a tacky design do the same? No, and trying to convince others it does sets a dangerous precedent.

## The devil you know

The WCAG can be messy sometimes, but you know what? So can humans.

Yes, color contrast success criteria were [developed using an Amiga](https://youtu.be/HtUlonNewGk). And yes, color displays have come a long way since then. But [1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) is part of the standard we collectively understand and have agreed upon. [Work is being done to update this standard](https://github.com/w3c/wcag/issues/695), but it is being done in official channels, with input collected and vetted from multiple parties.

This shared understanding keeps people from going rogue and diluting the criteria’s, and therefore the WCAG’s effectiveness. A so-called "activist interpretation" of the WCAG can erode trust in the practice. This ultimately impacts auditors. It affects how the auditing community:

- Interprets the standard,
- Is perceived externally, and
- Interacts with itself internally.

## Check yourself before you wreck yourself

An audit can feel like an opportunity to express yourself and your beliefs as an individual. However, it is important to keep in mind that audits ultimately need to be both accurate and actionable.

By scoping your work to the actual, objectively demonstrable problems in an inaccessible digital experience you are able to help facilitate a trusted remediation process. This helps the organization you are auditing, your peers, and most importantly, the disabled person who needs access.

