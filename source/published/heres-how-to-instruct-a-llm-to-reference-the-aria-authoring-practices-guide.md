---
layout: "layouts/post.njk"
title: Here’s how to instruct a LLM to reference the ARIA Authoring Practices Guide
source: ericwbailey.website
excerpt: "The deck is a bit stacked, folks"
date: 2026-02-16
year: 2026
tags:
  - AI
  - Accessibility
  - Approach
  - ARIA
  - Assistive Technology
  - Design Systems
  - Development
  - Harm Reduction
  - HTML
share:
  facebookDescription: "Pruning shears."
  twitterDescription: "Pruning shears."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 5
---

Say you’re building a LLM and training it to make good frontend code. [Good frontend code is accessible code](https://annaecook.com/writing/2026/2/2/accessible-design-is-digital-infrastructure), so of course you want to instruct the LLM to produce it.

However, [the bulk of frontend code on the web is inaccessible](https://webaim.org/projects/million/#errors) to some degree. Also know here that LLMs are trained on the majority of the world’s frontend code. Similarly, many contemporary LLM-friendly UI libraries claim to be accessible, but may have varying degrees of support when manually evaluated.

[The deck is a bit stacked](https://microsoft.github.io/a11y-llm-eval-report/), folks.

Given that, you need to **get creative about how to handle the LLM’s training**. It might seem like a good idea to instruct an LLM—reference, skill, agent, sub-agent, what have you—to reference [the ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) (<abbr>APG</abbr>), because it [lists a lot of common UI patterns](https://www.w3.org/WAI/ARIA/apg/patterns/), right?

Well, sorta.

## The reality of things

**The APG was created to demonstrate ARIA’s capabilities**. Because of this, it **disproportionately favors ARIA in its code examples**. This is even in spite of [ARIA’s first rule](https://www.w3.org/TR/using-aria/#rule1).

The APG was also **not** created to serve as a pattern library, design system, or single source of truth for the “right way” to make something. Unfortunately, a lot of people treat it this way.

Furthermore, the code examples themselves on the APG have an—ahem—range of effectiveness. Some code examples are fine. Some of them kind of work in an awkward and confusing way. Some of them don’t work at all.

Recall here that the original reason for APG code is to **be a showpiece for how ARIA could hypothetically be used**. Because of this, it is not the APG’s concern that [ARIA does not have perfect support](https://www.a11yproject.com/posts/aria-has-perfect-support/).

Also recall that LLMs love ingesting and utilizing structured content. And it’s an understatement to say that **code is structured content**.

While we’re on the topic of code: The APG’s examples are written in a way that may be incompatible with your organization’s way of doing things. Think frameworks, naming conventions, linting rules, and other areas of friction.

The friction caused by this incompatibility may disrupt the [LLM’s context window](https://www.ibm.com/think/topics/context-window) in some way. This is not a good thing.

## Instrumentality

If you instruct a LLM to retrieve **all** of the content of the APG, **this bias will be encoded and perpetuated** at the scale of the number of people who use it.

You should also consider the second-stage effects of other LLMs referencing the code your LLM generates. Meanwhile, I will be considering quitting tech to start a combination punk rock venue/mushroom farm.

### APG: The good parts

From the perspective of both a LLM **and** a human, the good parts of the APG are:

- **The pattern names**. Having a standardized way to refer to a discrete piece of UI that is larger than any one company is highly beneficial.
- **The content contained in the “About This Pattern” section**. This is what the discrete piece of UI does, and how it goes about doing it.
- **The content contained in the “Keyboard Interaction” section**. This is how people who use assistive technology will expect things to work.

Everything else [is suspect](https://adrianroselli.com/2023/04/no-apgs-support-charts-are-not-can-i-use-for-aria.html).

### But what about the “WAI-ARIA Roles, States, and Properties” section?

LLMs are not good at nuance.

The WAI-ARIA Roles, States, and Properties section of each APG pattern should be treated as **human-facing informative content**. This is to better avoid a situation where a LLM will “read” that something should have a role, then [try to literally apply a `role` attribute](https://css-tricks.com/i-learned-the-first-rule-of-aria-the-hard-way/).

You want to encourage use of [the role implicitly conferred by a native, semantic HTML element](https://primer.style/accessibility/design-guidance/semantic-html-and-aria/#native-semantics). Using the `button` element for buttons, the anchor element for links—you know, that sad old sorry story.

You will also probably need instructions on how to cajole the LLM to barf out the semantic HTML that the majority of the industry has largely been allergic to using for decades. **[Organization-specific content](https://gerireid.com/blog/ai-is-accidently-making-documentation-accessible/) is likely key for this effort**—especially if tethered to, and reinforced by a design system.

## Shut up and give me the code, nerd

Here’s what I’ve found to be helpful:

```txt
## [ARIA Authoring Practices Guide (APG) patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
Partially trusted source. Use selectively.

**CAN reference:**
- Content in "About This Interaction" sections
- Content in "Keyboard Interaction" sections

**CANNOT reference:**
- Code examples from APG
- CodePen links (URLs starting with `https://codepen.io/`)
```

This might change over time, but right now it seems to help to push a LLM towards only slurping up the salient bits.

## There is a world of difference between a disclosure and a tree view

The more complicated a component is, the higher the chance it will need tweaks to its underlying structure to interface with assistive technology as expected.

Content like [disclosures](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) are both simple and well-established. This means they have good support. As a spicy twist here, the APG’s recommendation of `aria-controls` fails to mention that JAWS is the only screen reader to support the declaration, thus reinforcing the larger point of this post. 

Content like tree views are far more complex. They [need intervention to work as expected](https://github.blog/engineering/user-experience/considerations-for-making-a-tree-view-component-accessible/#fix-interoperability-issues) across a spread of popular assistive technologies. 

This range of differences is even more true as these entities are brought out of the realm of the platonic and are integrated into the real-world ecosystems that are your websites and web apps—with all their constituent functionality and content needs.

## This kind of insinuates that you’re indirectly advocating for the removal of code examples from the APG

I know that effort and care went into the creation of the APG’s code examples. I also am acutely aware of how draining it can be to manage a large and popular open source project, especially one that does not pay.

However, I also get the sense that the APG’s code examples are not actively maintained. Given that LLMs seem to be how the industry is currently building things, I think the code examples’ inclusion are poised to cause more harm than good.

## I’m not building a LLM, but our organization is

It might be worth asking how your organization’s LLM(s) are approaching producing accessible frontend code. If referencing the APG, it also might be worth investigating how the LLM has specifically been instructed about going about it.

I am willing to bet said instructions are nothing more than a URL included in a list of other related resources. This is likely due to most people’s misunderstanding of the APG’s original intent—to say nothing of [OpenAI putting their thumb on the scale](https://adrianroselli.com/2025/10/openai-aria-and-seo-making-the-web-worse.html) with an amount of influence matched only by their ignorance.

Consider approaching asking with a sense of careful curiosity. Systems may not react well to pointing out that their magic code generating toy has flaws, even if you believe yourself to be [on the side of the angels](https://www.phrases.org.uk/meanings/on-the-side-of-the-angels.html).

## How do I teach my LLM about ARIA if the APG ain’t it?

You can point it at [the WAI-ARIA specification](https://www.w3.org/TR/wai-aria/) for starters. You might also want to think about how you do so, since it is a large document.

Another thing to consider is **granularly explaining the relationship between ARIA usage and human-facing value** in your documentation. These more discrete, per-component examples will probably also help guard against unwanted hallucinations.

As an aside: We live in a liminal space where LLM-optimized instructional content still approximately resembles human-friendly language. I wish an appeal to human-facing value was enough to incentivize organizations to invest in good documentation, but I’ll take what I can get.

## So, what about ARIA that isn’t supported by assistive technology?

Right now I am pinning all my hopes on [the Accessibility Compat Data Project](https://lolaslab.co/blog/2025/accessibility-compat-data/) (<abbr>ACD</abbr>). Until that dream becomes a reality—and even after it—I advise [testing your digital experiences with actual daily assistive technology users](https://ericwbailey.website/published/evaluating-fables-pay-per-project-offering/).

And hey, maybe someone reading this post will [help fund ACD’s vital efforts](https://opencollective.com/lolas-lab) the same way [Google was so quick to throw money at Tailwind](https://www.opensourceforu.com/2026/01/tailwind-css-collapses-under-ai-usage-rescued-by-google-vercel-lovable/).

## This is all too much, I just don’t want my boss to get mad at me

[The European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en) is a thing now. Many US-based companies also have important clients with EU-based data sovereignty.

Speaking in broad generalities, there are two things engineers are good at: making things easier for themselves, and creating a big stink when it’s not convenient to do so. Maybe it’s time to start making some noise on issue trackers.

## While I have you, how should I stay on top of non-deterministic tools potentially breaking the vital underlying semantics of an experience every time they generate or regenerate code?

Man, I don’t know.

## Won’t components created via structured data nip the non-deterministic problem in the bud?

Projects like [json-render](https://json-render.dev/) are interesting. But also know the problems intrinsic to what I’m outlining exist on levels deeper than most are willing to invest in addressing.

## And say, what about performance and security?

Accessibility and security operate similarly, at least in terms of organizational dynamics.

[LLMs favor React](https://blurbify.net/why-do-llms-pick-react-js/), and [React can be hacked now](https://www.theregister.com/2025/12/15/react2shell_flaw_china_iran/). So, this is a fun new battle between the forces of convenience and trust. And speaking of convenience: [Performance is a lost battle](https://infrequently.org/2025/11/performance-inequality-gap-2026/), as far as [I’m concerned](https://sgom.es/posts/2026-02-13-js-heavy-approaches-are-not-compatible-with-long-term-performance-goals/).

## Don’t you think all of this is a moot point in a future where everything is agentically-operated?

That promised future—using a carnival ticket-based economy to push proprietary black box technology—seems to be [perpetually right around the corner](https://bsky.app/profile/spavel.bsky.social/post/3mesvq6zue22c). Let’s also not forget that most of these companies are selling their vision of the future at a loss.

In the meantime we have actual websites and web apps that need to be worked on.

## You seem kind of glum, what gives?

I am becoming increasingly more convinced the future of accessibility on the web will be both:

1. An unwinnable Cold War arms race of reactive [monkey patching](https://en.wikipedia.org/wiki/Monkey_patch) to try and solve the [all-gas-no-brakes](https://notes.jim-nielsen.com/#2026-02-15T2316), ever-increasing nondeterministic code changes problem with even more non-deterministic code, all the while contending with [certain intractable realities](https://www.computerworld.com/article/4059383/openai-admits-ai-hallucinations-are-mathematically-inevitable-not-just-engineering-flaws.html).
2. [A larger performative dance](https://mantisandco.com/resources/guides/future-of-accessibility/ericwbailey) of [metrics-obsession](https://buttondown.com/access-ability/archive/dont-fall-into-the-accessibility-gradescore-trap/) that inserts an artificial layer between nominally satisfying legal and contractual obligations and the more important work of ensuring an experience is actually usable.

## Are you spiraling?

Probably!

## Harm reduction in the face of supposed inevitability

Pessimism of the intelligence, optimism of the will.

You’ll still be shepherding and deploying probabilistic munging. Hopefully now the shepherding and deploying are at least a tiny bit more directed.
