---
layout: "layouts/post.njk"
title: Invisible success
source: ericwbailey.website
excerpt: "It is difficult to quantify a void."
date: 2024-04-16
year: 2024
tags:
  - Approach
  - Design Systems
share:
  facebookDescription: "A large, completely empty area."
  twitterDescription: "A large, completely empty area."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 47
---

I spent a decent amount of time last year helping to create [a table component](https://primer.style/components/data-table/).

[Tables are complicated to make](https://scribe.rip/designing-tables-for-reusability-490a3760533). They’re even more complicated to make accessible. I’m proud of our efforts here, especially because I think we went about making it the right way:

- Identifying an important, existing content need,
- Setting an initial scope, making it a shared understanding, and then sticking to it,
- Inviting development into the design process, and then vice-versa once component development began,
- Breaking the work down into smaller, functionality-based tasks (defining rows, columns, sorting, loading, etc.),
- Making the design an iterative process that incorporated accessibility from the start,
- Communicating iterative work in a predictable and transparent fashion,
- Reviewing each new piece of functionality with daily assistive technology users as both a discrete unit and also part of a larger, holistic whole,
- Stress-testing the component’s ability to accommodate content,
- Proactively including quick and deep documentation (including component anatomy, do’s and don’ts, and best practices), and
- Conducting a final, pre-release sign-off that was effectively turnkey, where there were no real eleventh hour surprises.

The table component was released following sign-off. There was then the inevitable short burst of small tweaks and minor bug fixes.

After that, things quieted down. I moved on to the next task and honestly forgot about the work.

## Months later

[Josh, the engineer who developed the component](https://josh.black/) mentioned—almost in passing—that it had ~70 instances spread all across GitHub. These instances are all used in production, many for high traffic, heavy use experiences.

That revelation kind of threw me. Engineers are discovering the table component, reading its documentation, and implementing it into their work—all without needing our involvement.

The component works. And because it works, **nobody pays attention to it**.

This is [the promise of a design system](https://sparkbox.com/foundry/design_system_roi_impact_of_design_systems_business_value_carbon_design_system) made manifest: Consistent, quality experiences for complicated interactions, distributed at scale with minimal fuss.

This is objectively great. The problem, however, is how we talk, or fail to talk about this type of success.

## Quantification and optics

Big, flashy things get noticed. Quiet, boring things don’t. A lot of design system work is the exact opposite of glamorous, and this effort is no exception.

In a business context, design system work means **numbers go down**. Less bug reports, faster design iteration, shorter development cycles, fewer visual inconsistencies, smaller staffing requirements, etc. All objectively good things.

Unfortunately, **contemporary business practices only reward numbers going up**. There isn’t much infrastructure in place to quantify the constant, silent, boring, predictable, round-the-clock passive successes of this aspect of design systems after the initial effort is complete.

A lack of bug reports, accessibility issues, design tweaks, etc. are all objectively great, but there are no easy datapoints you can quantify here. By this, I mean **it is difficult to quantify a void**.

<img
  alt="A large, completely empty area."
  height="600"
  width="300"
  src="{{ '/img/spacer.gif' | url }}">

However, difficult does not mean impossible.

## Solutioneering

My mind immediately jumps how to solve this perceived lack of data. Things like collecting pre-table component bugs related to one-off table implementations, and then doing some back-of-the-back-of-the-napkin math.

You could torture the data you do have:

- Create a ballpark average time to bug resolution,
- Multiply that by the number of engineers it took to fix, and then
- Multiply that by their averaged approximate salary.

Then compare that result to the lack of it on a quarterly basis, multiplied by the number of components in production. You know, that sort of thing.

Unfortunately, that thought leads to shaky data at best. It’s also going to be painstaking and time-consuming to uncover.

The whole approach is not a good use of time and resources, and realistically a non-starter. Because of this fact, this kind of sifting is typically only prioritized when it comes time to do incident postmortems or [ass-covering](https://www.merriam-webster.com/dictionary/cover%20one%27s%2Fsomeone%27s%20ass).

At this point, I’d also like to point out another phenomenon with business dynamics: A lack of attention and lack of quantification affects how your program is perceived. This perception, in turn, affects the program’s **resources, funding, and reputation**.

## Indecision

So, how do you generate quantifiable data on the increasing absence of things? Things that, by their very nature are built to be as invisible and frictionless as possible (with [some exceptions](https://adhocteam.us/2022/07/05/null-in-design-systems/))? Or, putting it another way, **how do you make these invisible numbers visible**?

I’m honestly not sure.

Much has been written about [how to quantify and sell a design system](https://alistapart.com/article/selling-design-systems/), but I don’t think that this particular aspect can be captured. Please let me know if this is something you’ve dealt with!

Otherwise, my advice to you is to think about two aspects of design system work that aren’t directly related to making components, but are also a critical part of it:

1. Identifying and collecting various ways to weave compelling narratives about the invisible, successful work you’ve done, and then
2. Putting those stories in front of the people who need to know them.

Correlating and contextualizing your efforts with tangible outcomes can help to make your successes, and the hard work that went into creating them more visible. This, in turn, helps your design system succeed.
