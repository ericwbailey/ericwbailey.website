---
layout: "layouts/post.njk"
title: The case for an accessibility designer vibe coding when all his coworkers are also vibe coding
source: ericwbailey.website
excerpt: "Am I letting my own personal beliefs and biases affect the outcome I ultimately want?"
date: 2026-06-15
year: 2026
tags:
  - Accessibility
  - Approach
  - Apps
  - Assistive technology
  - Design
  - Development
  - Environment
  - Inclusion
share:
  facebookDescription: "A chat input that contains the text, 'Replace span elements with role equals button declared on them with button elements'."
  twitterDescription: "A chat input that contains the text, 'Replace span elements with role equals button declared on them with button elements'."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 9
---

I have complicated feelings about LLMs. I mean, a lot of people I know do. But this is also my blog, so I get to pontificate on those feelings and people… willingly read about them?

When it comes to vibe coding, I have to separate my personal thoughts and feelings from my professional. It’s not fun.

Emotionally, I feel like someone is holding a gun to the back of my head, and that gun is somehow hooked up to [three trillion off-brand diesel engines firing on all cylinders](https://unu.edu/inweh/news/environmental-cost-of-AIs-Enrgy-use-carbon-water-and-land-footprints). Intellectually, I know I’m an American and need uninterrupted healthcare.

## Who is being centered?

While the industry races the clock to figure out how to make all this [productive](https://joshcollinsworth.com/blog/productivity#studies-on-the-impact-of-llms-on-developer-productivity) or [profitable](https://isaiprofitable.com/), the question I keep asking myself is: Am I letting my own personal beliefs and biases affect the outcome I ultimately want?

For me, the desirable outcome is **enabling disabled people to use technology where they previously could not**.

## How is this made?

I am working to remediate [an experience that GitHub is putting a lot of resourcing behind](https://github.com/features/ai/github-app). And this effort is being [dogfooded](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), 100% LLM-forward with its approach. Because of this, I also need to vibe code in order to contribute.

> As an aside, my use of “vibe code” here is shorthand for quick English-language requests, more technical plans, corrective instruction files, scripts, skills, and other applicable techniques. What I am **not** doing is directly writing code.

It’s not a “[when in Rome](https://en.wikipedia.org/wiki/When_in_Rome,_do_as_the_Romans_do)” situation. I am being structurally compelled to work this way, and also tracked and ranked based on my frequency and volume of token use.

## What is produced?

I must confess: As someone who is good at writing detailed technical specifications and not so good at writing JavaScript, I am now capable of **not only remediating the experience, but also enhancing it**.

The app is slowly moving away from being just a gigantic pile of `button`s. I have added [interactive lists](https://ericwbailey.website/published/githubs-updated-commits-page-and-the-interactive-list-component/), [treeviews](https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/), [<kbd>F6</kbd> navigation](https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-explore-and-navigate-file-explorer-in-windows#cycle-through-the-main-screen-elements), typeahead node selection, and other quality of life improvements. My `aria-label` construction logic now ruthlessly disambiguates and puts the most salient information first, regardless of application or component configuration or state.

To me, that’s the “designer” part of my “accessibility designer” role.

I am not making something that is technically compliant, yet [cumbersome-to-completely unusable in the actual](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/). I’m **making something that is compliant and—hopefully—also intuitve to operate with assistive technology**.

## Incentives and approaches

I think it is also worth pointing out that contemporary business culture does not incentivise going the extra mile for work that it does not perceive as having a direct and immediate connection to profitability. There isn’t a business case for using [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang), folks.

In pre-LLM-based product design, accessibility efforts manifested as negotiations around time spent versus bare-minimum legal compliance. In other words: Sneak what you can in with the time made available to you.

In post-LLM-based product design, the time to create and verify these more historically effortful experiences is compressed. It has taken me only a few days—and sometimes even hours—to repair components and experiences that traditionally were non-starters in terms of resourcing.

Here, I consider myself as doing my job, but I also know the organization views it as going the extra mile. However, the shorter turnaround time makes the organization’s concern far, far lower.

In effect, I am off in my own little corner **hacking away about the thing I care about, the same way all my other peers are**. It’s [a lonely way of working](https://www.psychologytoday.com/us/blog/urban-survival/202507/is-ai-making-us-lonelier-at-work), one that LLMs implicitly encourage. But that’s a separate concern for a separate day.

## Interventions and optics

It is also worth mentioning that I am creating corrective instructions and skills as I go. These help steer what the LLM generates, guiding it towards more domain-specific accessible-by-default outputs.

Instructions and skills enable me to invisibly and exponentially amplify my otherwise near-Sisyphean efforts. This hypothetically allows me to stay on top of the pace and scale of the work—at least, until someone eventually takes offense to something I’ve written and writes countermanding orders.

And speaking of counter-instructions and the annoyance they cause: **This method of working also creates far less percieved friction and conflict**, and that is worth acknowledging.

Invisible structural adjustments that don’t affect the visuals of the experience allows everyone to feel good about accessibility work being done. It also downplays **the inevitable tension when legal compliance runs against aesthetic sensibilities**.

This style of indirect adjustment and machine-compelled course correction also allows me to more diplomatically address these tense moments when they do occur.

I die on fewer hills. Far less of my political capital needs to be spent, and the visual remediation work itself takes a lot less investment of time and effort. That’s big.

## Anecdotal

I also know people who use assistive technology who share my views on LLMs. We talk about how they use the technology to create and share workarounds to things on the web that previously had been opaque and impenetrable to them.

One person in particular pointed out that prior to this, the only real move was to file a support ticket and hope for the best. And reader, we all know what happens in this situation.

Through the lens of power, this is a historically underserved demographic [utilizing the tools made available to them to get what they want or need](https://blakewatson.com/journal/i-used-claude-code-and-gsd-to-build-the-accessibility-tool-ive-always-wanted/). It follows a long history of disabled people being forced to rely on ingenuity to overcome systemic barriers.

## Zooming out

Digital accessibility work requires an extreme level of detail and precision, all while keeping a mind to the larger, holistic whole.

Writing fixes, as well as setting up the future-proofing bullwarks requires net more computational power. This is because you’re fighting against [the inherent bias of LLMs being trained on majority inacessible code](https://dev.to/mfairchild365/embedding-accessibility-into-ai-based-software-development-282k).

[LLM-based development is undeniably making the internet less accessible (PDF)](https://eprints.soton.ac.uk/511781/1/Critical_Approaches_to_AI_and_Accessibility_Capacity_Building.pdf). My efforts are a drop in a bucket.

I also have zero patience for the [magical thinking](https://en.wikipedia.org/wiki/Magical_thinking)-based future people will inevitably counter with when confronted with this fact—where [agentic operation somehow sidesteps this problem entirely](https://annaecook.com/writing/2026/ai-doesnt-fix-accessible-systems-it-depends-on-them).

That said, I am also pragmatic.

[LLM agents can read and take action on the accessibility tree](https://www.nngroup.com/articles/ai-agents-as-users/#:~:text=Accessibility%2DTree%20Parsing). While I mislike that this de-centers the human experience all this is ultimately for, I also understand that **this is the most compelling case for investment in digital accessibility we’ll get**. At least until digital natives [age into becoming disabled](https://uxmag.com/articles/were-just-temporarily-abled)—and here I also think that [this method of operation is temporary](https://ericwbailey.website/published/evolved-antennas-llm-generated-code-and-a-potential-antifuture/).

I am also firmly aware of [the connection between climate change and disability](https://www.disabilitydebrief.org/climate/), as well as [who gets left behind in climate disasters](https://newrepublic.com/article/174497/disabled-people-left-behind-climate-disasters).

It is hard to escape the guilt I feel that in attempting to address access barriers in a narrow scope in the short-term I am also contributing to mass-disabling conditions in the long-term.

## Doing isn’t always learning

It also should be communicated that I am **not conflating producing with learning**.

I have enjoyed the ability to create logic and constructs that I previously could not due to my limited JavaScript capabilities. I also know that this method of working does not confer the more beneficial and foundational skills I desire.

Instead, I’m just getting better at [cajoling a black box to spit out jackpots](https://pluralistic.net/2025/08/16/jackpot/#salience-bias). I view this as far less desirable.

## I’m just a little guy

It is, ah, difficult to acknowledge [the feelings of my own ethical and ideological beliefs](https://hbr.org/2022/02/employees-are-sick-of-being-asked-to-make-moral-compromises) impacting against indifferent business mandates [Crash at Crush](https://en.wikipedia.org/wiki/Crash_at_Crush)-style. This is to say nothing about the whiplash, churn, and mask-off avarice that permeates everything as of late.

I am a person existing inside of layered, interconnected, and dysfunctional systems. And these systems all thwart attempts to navigate or repair them if they are counter to their end goals.

The book [<cite>Radical Acceptance</cite>](https://www.tarabrach.com/books/radical-acceptance/) teaches us that we need to accept the present before we can build the resilience needed to constructively engage with a reality we view as negative. But also: There is a whole lot of reality we need to accept as of late, and this acceptance feels more and more like capitulation.

And no, I did not use a LLM to write this.
