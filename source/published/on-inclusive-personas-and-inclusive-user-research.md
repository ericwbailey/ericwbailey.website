---
layout: "layouts/post.njk"
title: On inclusive personas and inclusive user research
source: ericwbailey.website
excerpt: "Personas as a contemporary practice are inherently tokenizing and reductionist"
date: 2025-07-31
year: 2025
tags:
  - Accessibility
  - Approach
  - Assistive Technology
  - Cognition
  - Decolonizing
  - Design
  - Devices
  - Harm Reduction
  - Inclusion
  - Personas
  - User Research
  - User Testing
furtherReading:
  - title: "Baking Accessibility In"
    source: "Cordelia McGee-Tubb"
    url: https://www.clarityconf.com/session/baking-accessibility-in
  - title: "An introduction to radical participatory design: decolonising participatory design processes"
    source: "Victor Udoewa"
    url: https://www.cambridge.org/core/journals/design-science/article/an-introduction-to-radical-participatory-design-decolonising-participatory-design-processes/63F70ECC408844D3CD6C1A5AC7D35F4D
  - title: "Against Technoableism: Rethinking Who Needs Improvement"
    source: "Ashley Shew"
    url: https://wwnorton.com/books/9781324076254
  - title: "Racial/Ethnic Disparities in Disability Prevalence"
    source: "Rashmi Goyat, Ami Vyas, and Usha Sambamoorthi"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4919210/
  - title: "Care Work: Dreaming Disability Justice"
    source: "Leah Lakshmi Piepzna-Samarasinha"
    url: https://arsenalpulp.com/Books/C/Care-Work
  - title: "Disability Dongle"
    source: "Liz Jackson, Alex Haagaard, and Rua Williams"
    url: https://blog.castac.org/2022/04/disability-dongle/
  - title: "Why Am I Always Being Researched?"
    source: "Chicago Beyond"
    url: https://chicagobeyond.org/insights/philanthropy/why-am-i-always-being-researched/
  - title: "‘Inclusive design’ has become so widely used that it’s meaningless. That has to change"
    source: "Aaron Chu"
    url: https://www.fastcompany.com/90697288/inclusive-design-has-become-so-widely-used-that-its-meaningless-that-has-to-change
attribution: "Thank you to <a href='https://www.joshkimux.com/'>Josh Kim</a> for his invaluable feedback, insights, and reading recommendations. I couldn’t have written this without your support. Seriously, you’re a treasure."
share:
  facebookDescription: "The silhouette of a World War II fighter plane. Empty holes are clustered around its wings, tail and behind the cockpit area."
  twitterDescription: ""
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 10
---

[I am not a big fan of personas](https://thoughtbot.com/blog/using-personas-in-the-product-design-sprint#where-personas-go-wrong). They’re oft-abused tools whose utility is far too frequently not interrogated, and consequently create more harm than good.

Recently, the accessibility arm of a government web services team put their “inclusive personas” out onto the internet. These personas were a set of hypothetical people, each with a different disability condition.

The goal of this resource was to get people aware of, and designing for accessibility concerns and considerations. Generally-speaking, that’s a great idea! The earlier in the process that you can get people considering accessibility, the better.

However, **exposing disability-related information in the form of inclusive personas is a misstep**.

I do not question the experience and proficiency of the accessibility practitioners who created these personas. In fact, I’m sure a ton of research and effort went into the work.

Despite this, recall that **the internet is a gigantic context-destroying machine**.

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/shatter-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simple circle with cracks spreading out from the center."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/shatter-on-light.svg' | url }}">
  </picture>
</div>

While there was some qualifying and context-setting language on the site where the inclusive personas were listed, it was buried away as a footnote in the overall context of the site design. This is coupled with the simple fact that [**people don’t read**](https://uxmyths.com/post/647473628/myth-people-read-on-the-web).

## Nuance, or lack thereof

Learning about digital accessibility is difficult. Information about it is scattered, with a range of quality. Different resources also often contradict each other.

These factors can push people towards content and services that appear to quickly “solve” their immediate problem. Reference the emergence and popularity of [ineffective and actively harmful overlay products](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/) to back this point up.

The chances of gravitating towards a perceived easy answer are high, especially the case if it is presented in a format they’re already familiar with. Even more so the case if it is coming from a source that is perceived to be authoritative—say an official government website.

People discovering these seemingly quick answers will then copy them into their workflows, bypassing and discarding the surrounding context and qualifiers entirely. When this happens, **all the careful work that led to the creation of these artifacts as training tools is lost**.

This copying leads to a situation where one organization is parroting the playbook of another, but does not have the full working context of **how** and **why** those personas came to be. Furthermore, the self-serve research and references are often discarded. In this scenario, **actual disabled representation is now two levels of abstraction removed**.

Now try being the one that points out this issue.

It pains me. This is another example of the nuance that accessibility work demands frustrating people who are just trying to do the right thing.

That said: **Personas as a contemporary practice are inherently tokenizing and reductionist.** This is antithetical to disability.

Let’s call inclusive personas what they are: **Stereotypes**.

There is no such thing as an inclusive persona—as a term it is self-contradicting. What you want instead is disability representation.

“So, how do I get disability representation?” you may now be asking. One way to go about that is inclusive user research.

## Inclusive user research

[Inclusive user research](https://survicate.com/blog/inclusive-user-research/) practices are different than a lot of traditional user research. While there is some high-level overlap in approach, know the majority of inclusive user research is more **focused on the individual experience** and less about more general trends of behavior.

This is because disability—as part of the larger human experience—is **too varied to be able to be easily distilled down into trends**.

Don’t believe me? Try sitting in on some usability research sessions with people who are blind or low vision. [There’s an incredible amount of variety](https://www.npr.org/2022/08/08/1115682836/how-to-talk-about-disability-sensitively-and-avoid-ableist-tropes#:~:text=Disability%20is%20not,the%20same%20experiences.) in how they go about doing what they need to do to use things online.

A primary goal in inclusive user research is often to **identify concrete barriers that prevent someone from accessing the content they want or need**. While the techniques people use are varied, these barriers represent insurmountable obstacles that stymie a whole host of navigation techniques and approaches.

If you’re looking for patterns, trends, and customer insights, know that what you want is **regular user testing**. Here, know that the same motivating factors you’re looking to uncover also exist for disabled people. This is because they’re also, you know, people.

If individuals who rely on assistive technology aren’t showing up for your user testing sessions, that is probably because **the services used to recruit participants and conduct testing facilitation have access barriers**. Similarly, [**access barriers baked into the prototyping tools**](https://productpicnic.beehiiv.com/p/figma-dreamweaver) may prevent disabled people who made it through the recruiting process from being able to operate your interactive prototypes.

In both scenarios it’s your classic, clichéd case of [survivor bias](https://en.wikipedia.org/wiki/Survivorship_bias) once again conspiring to negatively impact representation.

<div class="centered-media-outer">
  <picture class="centered-media-inner-2">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/survivor-bias-on-dark.svg' | url }}">
    <img
      role="img"
      alt="The silhouette of a World War II fighter plane. Red dots are clustered around its wings, tail and behind the cockpit area."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/survivor-bias-on-light.svg' | url }}">
  </picture>
</div>

## Don’t conflate assistive technology use with personal motivation

Many inclusive personas I’ve come across also painstakingly assign each persona a different piece of mainstream assistive technology. This is to ensure a broad representation, and therefore hopefully a good coverage of all the different ways people use digital experiences.

There are multiple things to watch out for here:

### 1. Outcomes, not methods

First is that **assistive technology is a means, and not an end**. 

This fact was touched on previously, but someone who operates a [mouth stick](https://webaim.org/articles/motor/assistive#mouthstick) isn’t using it for the sake of using it. They’re **attempting to achieve an outcome,** powered by extrinsic and intrinsic motivating factors.

> An example of this is creating targeted “accessibility” features for the sake of feature creation. On-site text size controls are a good example of this, as they often don’t scale to the size people actually require, or interfere with their existing browser or operating system text size settings.

### 2. More than one or none

Second is that some disabled people [use more than one form of assistive technology](https://ashleemboyer.com/blog/disability-is-not-a-single-selection-field), both concurrently and switching them in and out as needed.

There’s also the fact that some disabled people don’t use assistive technology at all.

> An example of this is someone with low vision, who interchangeably uses a screen reader and screen magnification software. Another example is someone who does not use a reduced motion animation settings, color filters, etc., yet is susceptible to migraines after looking at a screen for an extended period of time.

### 3. Use does not always equate expertise

Third is that there is typically an implicit assumption that the persona using the assistive technology is also an expert in it. **Not everyone who uses assistive technology has also mastered it**.

Here, I’d once again ask you to sit in on some inclusive user research sessions to better internalize this fact.

> An example of this is thinking that an [esoteric JAWS screen reader keyboard command](https://support.freedomscientific.com/Content/Documents/Manuals/JAWS/Keystrokes.txt) will be sufficient for bypassing large sections of content, without providing [more commonplace navigation hooks such as headings](https://webaim.org/projects/screenreadersurvey10/#finding).

As an aside, I often witness this scenario play out after a someone is told their proposed solution won’t be viable. They then scour assistive technology manuals to defend their design decisions.

### 4. Hyperfixation

Fourth is that mapping specific forms of assistive technology to personas can lead to **disproportionate attention placed on one kind of assistive technology** at the expense of others. 

This over-indexing most often happens when an applicable persona is singled out as important for the scenario at hand. The opposite is also true.

Remember that the aim of digital accessibility is to **make web and app experiences work, regardless of what form of assistive technology is being used**.

> An example of this providing a great experience for people who use screen readers, but having a design that exclusively use icon buttons whose accessible names can be [difficult for voice control users to identify and operate](https://www.smashingmagazine.com/2022/06/voice-control-usability-considerations-partially-visually-hidden-link-names/).

This consideration is especially relevant in **situations where the persona’s traits are identified as being important to the larger organization’s current tasks or initiatives**—even moreso if the personas help satisfy a stakeholder’s political agenda.

Also note that the other inclusive personas and their assistive technology needs are often commonly left out in this scenario.

### 5. Compliant, yet unusable

A fifth consideration is that it is also possible to think that you have a solution that checks all the boxes for all assistive technology named in your inclusive personas. However, you then never bother to test with actual disabled people.

**It’s entirely possible to have a solution that is technically compliant, yet unintuitive or near-impossible to use** in the actual. Here, the gap between hypothetical and [real world usage](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/) becomes even more pronounced when it is part of the copy/pasting of process artifacts scenario outlined earlier.

Also note that considerations four and five completely fail to address the larger underlying motivational factors required for successful adoption.

## Separate, yet equal

Another folly of inclusive personas is that they’re decoupled from regular personas. This means they’re **easily dismissible** as considerations.

### Misrepresentation

The World Health Organization [estimates that one in every six people “experience significant disability.](https://www.who.int/news-room/fact-sheets/detail/disability-and-health)” The CDC reports that [one in four United States citizens reported having a disability](https://www.cdc.gov/media/releases/2024/s0716-Adult-disability.html) in 2022.

Does your organization have existing personas? If so, why isn’t a statistically relevant distribution of disability conditions present in their demographic information?

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/skeptical-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simplified illustration of a skeptical face."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/skeptical-on-light.svg' | url }}">
  </picture>
</div>

**Disability is diversity**, and the plain and honest truth is that diversity is missing from your personas if disability conditions are not present in at least some of them. This, in turn, means your personas are misrepresentative of the people in the abstract you claim to serve.

### Misallocation

To quote [Dr. Michele Williams](https://mawconsultingllc.com/):

> “’Is this accessible?’ is not a research question.”

Keeping accessibility concerns separate from non-inclusive persona-related activities often leads to accessibility-related work being conducted in isolation from the rest of the organization. This desynchronization of efforts can be a confusing, reputation-harming, and counterproductive for all involved.

This isn’t to say accessibility-focused work should not be done at all.

## Baking it in versus fixing it in post

It is a bit of an digital accessibility practitioner cliché at this point, but we want to **[thread accessibility-related considerations into all phases of product and feature creation](https://www.lullabot.com/articles/what-it-means-shift-left-accessibility-and-how-do-it-right) as much as possible**. This serves to normalize it as a consideration, including early-stage research and prototyping and all the way to development, release, and subsequent maintenance.

It’s a subtle thing, but we also want to hold space for things that need direct accessibility support and remediation when this consideration of accessibility fails to happen. **It’s all about approach**.

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/muffin-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A blueberry muffin."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/muffin-on-light.svg' | url }}">
  </picture>
</div>

An example of how to consider your approach is when adding drag and drop support to an experience. This is a difficult thing to do well, even before you consider [how the interaction will work with assistive technology](https://github.blog/engineering/user-experience/exploring-the-challenges-in-creating-an-accessible-sortable-list-drag-and-drop/).

We don’t want to build drag and drop functionality if there isn’t a valid use case for it. Because of this, we want to **identify if drag and drop is even needed to achieve the outcome the organization needs**.

### Building the right thing the right way, for the right reasons

More often than not drag and drop functionality is better served via bulk editing controls and other efficient ways of moving content around. Uncovering this fact is where user research as a practice shines.

An example of where direct accessibility support could be needed is an all-too-common scenario where an inaccessible drag and drop solution has already been added to an experience. This is done regardless of if it has actual utility or not, a tragically commonplace outcome in contemporary digital product creation where [incentives have become divorced from addressing actual human needs](https://productpicnic.beehiiv.com/p/why-design-goes-wrong-and-how-to-set-it-right-part-1).

Here, we want to not only remove access barriers, but also **ensure that the accessible solution is also usable**. This is a space where inclusive user research has a lot of value as a specialized accessibility project.

### Remediating it instead

Making a drag and drop experience accessible **serves a larger organization need**. This is typically mandates around quality, accessibility, [legislation](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en), responses to lawsuits, etc.

It does not matter if the drag and drop functionality actually serves its intended audience or not. The decision to add it has already been made, and we now all have to live with it.

It is a subtle thing, but in the context of organizational needs, **usability takes a backseat to conformance**. Opportunities for inclusive user research often do not present themselves in this context.

Here, it is incumbent for accessibility practitioners to ensure remediation creates **at least** a baseline operable experience, lest things devolve into [a performative, box-checking exercise](https://sightlessscribbles.com/posts/20250724/). This typically means focusing on more discrete engineering outputs rather than larger, holistic design strategy.

## Moving things forward

Another, better way to get disability representation in your research efforts is via embracing the teachings of [**radical participatory design**](https://www.cambridge.org/core/journals/design-science/article/an-introduction-to-radical-participatory-design-decolonising-participatory-design-processes/63F70ECC408844D3CD6C1A5AC7D35F4D).

Radical participatory design instructs us to **directly acknowledge the power imbalance inherent with participatory design practices**. While participatory design can create representation, it does so **on the inviting organization’s terms**.

Here, I’d like to quote [Victor Udoewa](https://www.linkedin.com/in/udoewa/), author of <cite>[An introduction to radical participatory design: decolonising participatory design processes](https://www.cambridge.org/core/journals/design-science/article/an-introduction-to-radical-participatory-design-decolonising-participatory-design-processes/63F70ECC408844D3CD6C1A5AC7D35F4D)</cite>:

> If designers invite community members to participate, they are reinforcing the power differential, the fact that they have the power to invite or not to invite. They have the power to choose who, when, where, how, and if to invite. All the choices are in their hands. The very act of “‘empowering” users or community members, reinforces the designer’s own power to do so and the seeming lack of power community members have to participate in their own way on their own terms.

This is huge in terms of how disability intersects with the design process.

### Who participates?

It is no longer a case of representation. Radical participatory design instead reframes things to enable **active participation as equals throughout the entire design process**. Existing power structures are flattened and more evenly distributed with this approach.

Oftentimes the manifested outputs of user research—including inclusive user research—don’t actually address the underlying needs expressed or the mechanisms someone employs to obtain them. This is due to the games of prioritization and telephone that are played out as a consequence of internal organizational dynamics.

**Equal participation guards against this dilution of service**. Active participation and presence helps to guarantee that synthesized findings stay accurate, relevant, and meaningful as they move through the various stages of feature creation and release.

Also consider what happens in the small moments between research sessions. Who is:

- Synthesizing the findings, and what conscious and unconscious biases do they carry with them?
- Scheduling the next session, and are they considering things like if it is available by public transportation and if there are alternatives to using the stairs?
- Managing calendar invites, and do they know everyone involved and if they can use the calendaring service?
- Writing the survey questions, and are they fully confident in the use of the terminology they employ?
- etc.

The involvement that equal participation promotes helps to guard against all of these near-invisible negative consequences and quiet erosion of original intent. Also consider **the bias of the [model minority myth](https://mindworkscollab.org/model-minority-myth/)**, how that intersects with disability, and how that affects who is viewed as a “good participant.”

### Who leads?

Another positive aspect of equal participation is **reworking the notion of leadership**. Radical participatory design’s framing enables a way for all constituent members of a community to steer, instead of a single person.

The act of collective direction-setting also pushes against **the myth of a single savior individual**. Here, the hubris of good intentions can lead to the mantle of greatness being pushed onto someone. This issue is especially prevalent in design, where individuals are:

- Immersed in “sole genius designer” culture,
- Trained to think of problems originating from people and communities instead of larger structural issues,
- Expected and compelled to create one definitive “solution” to a perceived problem, and also
- Do so potentially without deep knowledge or experience with the subject matter at hand.

Sharing of responsibility also guards against the negative consequences that arise when a single leader-driven solution fails to meet the mark. This also neatly side-steps the implicit and explicit pressure  an organization places upon individuals to deliver said solution.

Let us not also forget to acknowledge **the pressures of perfectionism that are acutely felt on the design industry** side of things, as well as [the other corresponding White Supremacy culture characteristics that accompany it](https://www.whitesupremacyculture.info/one-right-way.html).

## Against extraction

Equal participation also guards against two other closely related and undesirable outcomes of more traditional design practices. The first of the two is **extraction**.

<div class="centered-media-outer">
  <picture class="centered-media-inner-2">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/extraction-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A pair of tweezers encapsulated in a red cancel sign."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/extraction-on-light.svg' | url }}">
  </picture>
</div>

### For, not with

At a high level, extractive design is the paternalistic act of deigning “for” a population, rather than alongside them.

With extractive design, **individuals are treated as disposable, transactional resources** to glean insights from and exploit in the name of hopefully producing something of value. If this sounds familiar to you, it is because this is common practice for contemporary user research.

**Extractive design has also saturated contemporary design culture**. As a designer, you’re probably familiar with its practice without even realizing it. Reductive personas, one-and-done user research sessions, and focus groups are all ways this practice manifests.

I’d be remiss if I also did not mention the potential for [trauma to be created with these interactions, especially when disability is in play](https://chicagobeyond.org/insights/philanthropy/why-am-i-always-being-researched/).

Trauma commonly manifests with the implicit or explicit pressure to disclose lived experience, [without suitable training for the interviewer](https://www.researchgate.net/publication/339844239_Practicing_Without_a_License_Design_Research_as_Psychotherapy) to be able to handle the topic. The promise of compensation can also have increased leverage in this situation, as [disabled individuals also commonly face structural barriers towards employment](https://www.un.org/development/desa/disabilities/resources/factsheet-on-persons-with-disabilities/disability-and-employment.html).

### Self-reinforcing

Persona-driven efforts, coupled with extractive design, also incentivizes another unfortunate outcome: **Supertokens**.

As defined by [Dori Tunstall](https://en.wikipedia.org/wiki/Dori_Tunstall), supertokens are “[individuals from marginalized groups whose talents are so desired by institutions that they are able to overcome their innate aversion to the individual’s identities in order to have access to those talents](https://www.archpaper.com/2023/06/elizabeth-dori-tunstall-shows-us-the-path-towards-design-reparations/#:~:text=from%20marginalized%20group(s)%20whose%20talents%20are%20so%20desired%20by%20institutions%20that%20they%20are%20able%20to%20overcome%20their%20innate%20aversion%20to%20the%20individual%E2%80%99s%20identities%20in%20order%20to%20have%20access%20to%20those%20talents).”

The presence of supertokens in design research is a self-reinforcing issue, especially when it comes to disability.

Disabled supertoken individuals who manage to operate inaccessible systems are often called back to traditional design research efforts. This is largely due to the ease of getting a traditionally difficult-to-source participant to return compared to the effort involved with sourcing new candidates.

Unfortunately, this also leads to [over-correcting for one individual’s preferences](https://ericwbailey.website/published/on-inclusive-personas-and-inclusive-user-research#4.-hyperfixation) and methods of navigating digital experiences. It also limits team interaction with disabled people, which may create further assumptions and misunderstandings.

## Clout-driven design

The second of the two undesirable outcomes created by traditional practices are [**disability dongles**](https://blog.castac.org/2022/04/disability-dongle/).

The term “disability dongle” was created by [Liz Jackson](https://www.linkedin.com/in/eejackson/), [Alex Haagaard](https://alexhaagaard.com/), and [Rua Williams](https://www.linkedin.com/in/ruamwilliams/). It refers to so-called “innovative” artifacts produced to address perceived needs for disabled populations. 

These devices are created mainly as an attempt to gain accolades in existing traditional design spaces, where disability presence has historically been less-present.

<figure
  role="figure"
  aria-label="Source: Stimpunks Foundation.">
  <img
    alt="A photograph of a wheelchair with exoskeleton arms jutting out from the top, with its hands resting on the wheels. The wheelchair is directly facing the camera, and is placed in an empty room. A moody, black-and-white treatment with high contrast values gives it an air of menace."
    loading="lazy"
    src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/ryanboren-wheelchair-exoskeleton.jpg' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://stimpunks.org/glossary/disability-dongle/">Stimpunks Foundation</a>.
  </figcaption>
</figure>

The act of creating a disability dongle is performed by **not bothering to take the time to learn a disabled population’s actual needs**. Instead, the creator of the disability dongle positions themselves as “[a heroic designer-protagonist whose prototype provides a techno-utopian (re)solution to the design problem](https://blog.castac.org/2022/04/disability-dongle/#:~:text=explain%3A%20Disability%20Dongles%20are%20contemporary%20fairy%20tales%20that%20appeal%20to%20the%20abled%20imagination%20by%20presenting-,a%20heroic%20designer-protagonist%20whose%20prototype%20provides%20a%20techno-utopian%20(re)solution%20to%20the%20design%20problem,-.%20Disability%20Dongle%20rhetoric%20instills%20in%20students%20the%20value%20of%20a%20quick%20fix%20over%20structural%20change).”

This lack of inquiry leads to objects and devices that are often useless-to-dangerous. Some recreate what a disabled community may have [already invented](https://www.pathstoliteracy.org/brief-history-tack-tiles-and-braille-legos/), while others [address non-problems](https://blog.castac.org/2022/04/disability-dongle/#:~:text=lechal%E2%80%99s%20marketing%20narrative%20ignores%20the%20possibility%20that%20%E2%80%9Cfew%20had%20thought%20to%20tackle%20this%20problem%E2%80%9D%20because%20it%20is%20not%2C%20in%20fact%2C%20a%20problem.%20blind%20and%20low-vision%20people%20have%20been%20using%20white%20canes%20for%20such%20a%20long%20time%20because%20they%E2%80%99re%20reliable%2C%20reasonably%20cost-effective%20tools%20that%20meet%20their%20needs.). Sometimes this is done without knowing it, and sometimes it is done as intentional theft.

These artifacts often perpetuate myths about the disabled populations they were intended to be created for via the media exposure this solutioneering brings. In addition, it **de-centers the disabled populations who are purportedly being served** while simultaneously perpetuating and reinforcing myths and misunderstandings.

Extractive processes often lead to the creation of disability dongles. Via the lens of radical participatory design, disabled people are not brought in at the level of involvement needed to either:

- Produce meaningful artifacts, or
- Prevent or correct inaccurate and harmful information from being perpetuated.

A lack of integrated and equitable disabled input ultimately shapes what is produced. Here, designers will often default to “[the parameters enforced by normative society](https://blog.castac.org/2022/04/disability-dongle/#:~:text=match%20the%20parameters-,enforced,-by%20normative%20society).” This mirrors the previously touched on phenomenon of [producing things for the sake of feature creation](https://ericwbailey.website/published/on-inclusive-personas-and-inclusive-user-research#1.-outcomes%2C-not-methods).

Inclusion for the sake of market attention—and not proactive mainstream consumer access—is also problematic. Here, [limited editions are just that](https://www.fastcompany.com/90696611/olays-new-lid-was-made-for-disabled-people-too-bad-you-cant-find-it-in-stores). I’d also be remiss if I didn’t mention [related concerns around intellectual property and long-term support](https://spectrum.ieee.org/bionic-eye-obsolete).

**The creation of disability dongles is also a self-reinforcing phenomenon**. Accolades, awards, and attention serve as forces that reinforce the undesirable behavior and outcomes, thus continuing the cycle.

The more critical voices and actual disabled representation are left out of this practice the more it will occur—especially when you consider the defensiveness individuals and organizations have when this is brought to their attention.

## Thinking bigger

[In radical participatory design](https://www.cambridge.org/core/journals/design-science/article/an-introduction-to-radical-participatory-design-decolonising-participatory-design-processes/63F70ECC408844D3CD6C1A5AC7D35F4D#:~:text=in%20rpd%2C%20the%20community%20members%20not%20only%20fully%20participate%2C%20but%20they%20fully%20lead%20and%20drive%20the%20process.%20rpd%20is%20not%20a%20method%2C%20way%20of%20conducting%20a%20method%2C%20or%20a%20methodology%3B%20it%20does%20not%20define%20any%20design%20methodology.%20the%20community%20chooses%20the%20methodology.):

> The community members not only fully participate, but they fully lead and drive the process. RPD is not a method, way of conducting a method, or a methodology; it does not define any design methodology. The community chooses the methodology.

**Disability is too big to be reduced to a set of personas**.

Radical participatory design encourages evolving our practices by having us to move away from the common structures that define traditional user research roles, responsibilities, and practices.

And this moving away is okay! Evolving our approach can help, especially where “best practice” may operate to our collective detriment—especially where disability research is concerned. Remember, practices evolve with the times. Here, consider how [focus groups have quite rightly fallen out of favor](https://www.mulebooks.com/just-enough-research).

### Learn to let go

It might seem counterproductive or even paradoxical at first, but **letting go of control leads to better outcomes**. Redefining the responsibilities and artifacts we think our roles necessitate opens us up to different possibilities and approaches that better balance out power and decision-making.

It isn’t “elevating” communities to participate as designers as much as it is **removing the barriers we have consciously and unconsciously created and perpetuated**.

Through the lens of power dynamics, an ideal state for participation is when disabled people or communities invite designers in to improve on existing strengths or address needs they have identified on their own. Here, a designer is an invited guest in the space—one who brings niche, yet applicable domain expertise.

A more common dynamic is where design invites disabled people or communities into their work. In this case, it is incumbent on the designer to:

- Be aware of the power they hold, and
- Cede that power through sharing or relinquishing decision-making and leadership as much as possible.

Doing so helps to promote more equitable and effective outcomes for all involved.

### Check yourself

Both [intersectional qualitative](https://collegepublishing.sagepub.com/products/introduction-to-intersectional-qualitative-research-1-265127) and [trauma-informed](https://www.designedwithcare.org/chapters/trauma-informed-research-for-content-design) research methodologies encourage “[member checking](https://pubmed.ncbi.nlm.nih.gov/27340178/).” If you’re not familiar with the term, it’s the process of letting participants review, comment on, and correct the content you’ve created based on their input.

Radical participatory design serves as a framework for identifying and defining historically unspoken and unexpressed leverage and imbalances. Now defined, these methodologies scaffold practices for how to relinquishing power to participants.

Member checking is a powerful and vulnerable act. It combats both:

- The myth of the “impartial” design researcher, as well as
- The [dangers of empathy-led design thinking](https://www.technologyreview.com/2023/02/09/1067821/design-thinking-retrospective-what-went-wrong/).

Combined, both behaviors create surface-level quick fixes that appear to solve problems—oftentimes ignoring existing efforts to address issues or side-stepping the systemic inequalities that operate as root causes.

As a process, **member checking is especially helpful when considering disability**. It guards against the myths, misconceptions, and stereotypes that are present with the majority of the population. This is especially relevant if [participants have multiple marginalized identities](https://pmc.ncbi.nlm.nih.gov/articles/PMC4919210/).

Member checking can supplement existing workflows your organization is already used to, as **it is a process and not a practice**. This can help with adoption, as a net-new way of doing things does not need to be created from whole cloth.

Instead, organizations can turn inwards and consider the artifacts their existing design and research processes produce. They can then identify opportunities for participants to provide additional clarity and corrections along the way.

**What about using inclusive personas for AI-driven synthetic user testing?**
[No](https://scribe.rip/no-ai-user-research-is-not-better-than-nothing-its-much-worse-5add678ab9e7/). [Fuck no](https://ashleemboyer.com/blog/how-to-dehumanize-accessibility-with-ai). [Absofuckinglutely not](https://scribe.rip/inclusive-software/insta-personas-synthetic-users-fc6e9cd1c301).

## Systems and responsibilities, not process and roles

Personas are an output of systems that are looking for quick answers to difficult problems. We should not accept them at face value, and instead be critical. Doubly so when it comes to disability.

**Questioning the underlying incentives and systems** in which we operate enables creating processes that can more effectively explore the disabled experience. This is vital considering its inherent diversity and complexity.

Similarly, **rethinking and relinquishing our notions of control and “standard practices”** not only creates more successful outcomes, but also extends opportunities for more equitable engagements with individuals and communities.

Remember that **research processes and artifacts help to shape products and services that will be used in real life**. Via this lens, the pageantry of persona-led design exercises is poised to further enshrine and perpetuate misunderstandings, steryotypes, and barriers.

Similarly, we should take time to scrutinize the functions of our roles and **how our organizations compel us to undertake them in order to be successful within them**. Here, it can be helpful to borrow from the practice of [service design](https://www.interaction-design.org/literature/topics/service-design) to ensure the individuals and communities we serve are centered.

<div class="centered-media-outer">
  <picture class="centered-media-inner-1">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/zoom-out-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simplified illustration of a hand performing a zoom out gesture."
      src="{{ '/img/posts/on-inclusive-personas-and-inclusive-user-research/zoom-out-on-light.svg' | url }}">
  </picture>
</div>

This post is about the pitfalls of inclusive personas, but also the larger systems that compel their creation and use. Importantly, it is also about the people who all this work is ultimately for.

System critique and change is bigger than any one of us. It is my hope that in reading through how inclusive personas as an artifact fail to meet the mark that you can turn your attention to your organization’s outputs.

In taking a more inward, critical look we are able to question:

- Who our work is actually for,
- How the artifacts we use to serve our audience are produced,
- How well our ultimate output performs for the people it is intended for, and
- How much agency the people we perform this work for have in all of this.

Systems—and the practices they compel—are also bigger than any one individual or organization. I’d love to read more about how your efforts have helped to shape the systems you participate in to be more equitable and accessible.
