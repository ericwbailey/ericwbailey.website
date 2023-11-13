---
layout: "layouts/post.njk"
title: Accessibility annotation kits only annotate
source: ericwbailey.website
excerpt: "Liking an idea does not mean the idea is exempt from criticism"
date: 2023-11-13
year: 2023
tags:
  - Accessibility
  - Approach
  - ARIA
  - Assistive Technology
  - Attributes
  - Cognition
  - Design
  - Design Systems
  - Design Tokens
  - Development
  - HTML
  - Inclusion
  - Open UI
  - User Research
  - User Testing
furtherReading:
  - title: "International auxiliary language"
    source: "Wikipedia"
    url: https://en.wikipedia.org/wiki/International_auxiliary_language
  - title: "A Designer’s Guide to Documenting Accessibility & User Interactions"
    source: "Stéphanie Walter"
    url: https://stephaniewalter.design/blog/a-designers-guide-to-documenting-accessibility-user-interactions/
  - title: "How to document the screen reader user experience"
    source: "BBC: Accessibility, Your Team and You"
    url: https://bbc.github.io/accessibility-news-and-you/guides/screen-reader-ux.html
  - title: "Let’s reinvent the wheel"
    source: "Vasilis Van Gemert"
    url: https://vasilis.nl/nerd/lets-reinvent-the-wheel/
  - title: "Using accessibility literacy to counter accessibility ignorance"
    source: "Devon Persing"
    url: https://devonpersing.netlify.app/posts/using-accessibility-literacy-to-counter-accessibility-ignorance/
  - title: "The Gulf Between Design and Engineering"
    source: "Design Systems International"
    url: https://designsystems.international/ideas/the-gulf-between-design-and-engineering/
attribution: "Thank you to <a href='https://benmyers.dev/'>Ben Myers</a>, <a href='https://ethanmarcotte.com/'>Ethan Marcotte</a>, <a href='https://janmaarten.com/'>Jan Maarten</a>, and <a href='https://stephaniewalter.design/'>Stéphanie Walter</a>. This post was a struggle to put into words, and is better for your vital input."
share:
  facebookDescription: "A lowercase letter e. Above it is a label pointing to it called, 'img element'. Below it is another label pointing to it called 'alt equals a lowercase letter e'."
  twitterDescription: "A lowercase letter e. Above it is a label pointing to it called, 'img element'."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 41
---

An uncomfortable truth is that <strong>the vast majority of access-related issues are created in the design phase</strong>. 

Accessibility annotation kits help tackle this problem, and in doing so lower the downstream issues that would be created without their presence. This is to say that I really like the idea behind them. 

Liking an idea does not mean the idea is exempt from criticism. This post is long, but I feel its length is necessary to unpack some of the issues intrinsic with performing accessibility annotations. We’ll be covering:

1. [What an accessibility annotation kit is and how they work](#what-is-an-accessibility-annotation-kit%3F),
1. [Situations where accessibility annotation kits work well](#when-do-accessibility-annotation-kits-work-well%3F),
1. [Scenarios where accessibility annotation kits can be misused](#where-accessibility-annotation-kits-start-to-go-awry),
1. [Areas where accessibility annotation kits can actually facilitate inaccessible experiences](#where-accessibility-annotation-kits-completely-fall-apart),
1. [Why the misuse and facilitation may happen](#root-causes%3A-a-necessary-tangent),
1. [Further problems and complications to consider](#tree-views-and-the-uncanny-valley), and
1. [Ideas for what to do about it](#so%2C-what-can-we-do-about-this%3F).

## What is an accessibility annotation kit?

It is important to understand both the function accessibility annotation kits provide, as well how they actually go about achieving it.

### Function

The advent of accessibility annotation kits arose to deal with a gap in traditional digital experience work. [Design applications do not currently express intent](https://css-tricks.com/smarter-design-systems-tools/) in a way that is deeply integrated into developer tooling.

Contemporary design applications also cannot programmatically communicate reliable, detailed accessibility-related information to developer tooling (although [Figma appears to be getting there](https://www.figma.com/blog/the-future-of-design-systems-is-semantic/)). For development-related concerns for this post, <strong>expressing intent means [intended semantics](https://www.w3.org/TR/using-aria/)</strong>.

### Form

Broadly speaking, accessibility annotation kits are collections of labels, arrows, sticky notes, and other tools that allow a designer to comment on a static design. 

These notes are an additional “meta” layer of context that is used to help communicate with the developer tasked with taking the static design and turning it into code. The idea is that they help ensure that accessibility-specific considerations such as [semantic](https://developer.mozilla.org/en-US/docs/Glossary/semantics) buttons, links, and headings are identified.

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/accessibility-annotation-kits-only-annotate/primitives-annotation-wide.svg' | url }}">
  <img
    role="img"
    alt="Example of annotation labels being applied to common user interface components. There are examples of a button, a link, a text input, and three headings. Each is labeled as such. The text input is collecting a user's email address, and has annotation labels applied to indicate the label and input portions, as well as an email type attribute and an email autocomplete attribute. Headings level one through three are labeled as such."
    src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/primitives-annotation-narrow.svg' | url }}">
</picture>

### Familiarity

Accessibility annotation kits are also clever in that they are <i>a posteriori</i> constructs, mapped to the traditional annotation workflows most designers and developers already know and use. This means there is:

1. More general acceptance of the idea of using them in the first place, as well as 
1. More familiarity when it actually comes time to review them.

## When do accessibility annotation kits work well?

Annotation kits work really well in [situations where you need to describe relatively straightforward interactions](https://adhoc.team/2023/06/28/become-an-accessibility-champion-by-using-simple-mockup-annotations/). They also help teams know what to expect when testing, especially when coordinating with QA.

Here, the use case is simple and straightforward: Applying a “button” sticker to a rectangle with rounded corners and a terse verb placed inside of it sends a strong signal to the developer that a `button` element should be utilized.


<figure
  role="figure"
  aria-label="Yup, that’s a button.">
  <img
    role="img"
    alt="A graphic of a button component as drawn in a design tool. It has a an annotation label applied to it called, 'Button'. It also has a layer name called, 'button'. The button component is also selected, with a visual that indicates it is a component instance. Finally, it is placed on an artboard with a title of 'Component: Button'."
    loading="lazy"
    src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/button-annotation.svg' | url }}" />
  <figcaption>
    Yup, that’s a button.
  </figcaption>
</figure>

Ideally a design system is also present, and a codified, tested button component that matches the design is utilized instead of directly authoring button code. Also ideally, the button component ultimately renders as a semantic `button` element in the DOM.

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/accessibility-annotation-kits-only-annotate/annotation-to-component-to-code-wide.svg' | url }}">
  <img
    role="img"
    alt="Diagram showing how a button component goes from being annotated in a design tool, to being converted to React code, to being rendered in HTML in the DOM as a button element. The button is annotated as a secondary button. In React, the secondary status is applied as a 'variant' property on a button component with a value of 'secondary'. In the HTML it is output as a button element with a declaraction of data-button-variant='secondary' applied to it. The button is labeled 'Cancel' in the design tool, and its label carries through all the way to the DOM. The final HTML also has classes and a declaraction of type='button' applied to it, implying that it is applied by the React button component."
    src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/annotation-to-component-to-code-narrow.svg' | url }}">
</picture>

This also supposes that the button is labeled properly in the design tool. It also supposed that both the developer and designer are:

1. Given enough time to annotate in the first place, 
1. Aware of the design system’s existence, and
1. Bother to use the relevant component. 

I hate that I think this way, but hey, here we are.

## What else do accessibility annotation kits do?

The presence of accessibility annotation kits also does a number of other good things. They:

1. Communicate that <strong>accessibility is a design consideration</strong> in the first place,
1. Help to <strong>normalize design-related accessibility considerations</strong>, which in turn helps to formalize the practice,
1. Better <strong>communicate the underlying intent</strong> behind a design to the developer tasked with translating it to code,
1. Reinforce that <strong>accessibility intersects with all phases of digital experience creation</strong>, and
1. <strong>Provide an entry point</strong> for a niche, jargon-heavy vocabulary that needs to be shared across different teams and organizations.

## Reference

Here are some accessibility annotation kits I enjoy, if you would like to explore further:

- Stephanie Walter’s [Web Accessibility for Designers: checklist & documentation kit](https://shop.stephaniewalter.design/b/accessibility-interactions-designer-checklist-annotation-kit),
- GitLab’s [Accessibility bluelines](https://www.figma.com/community/file/779827094223635810/accessibility-bluelines), and
- Stephanie Hagadorn’s [A11y Annotation Kit](https://www.figma.com/community/file/953682768192596304).

## All that said

There are strengths and drawbacks to accessibility annotation kits, just like with any other process or tool. One drawback in particular I’d like to discuss is <strong>the communication gap</strong>.

Because of this gap, a typical developer workflow is to: 

1. Observe the design, 
1. Review the design’s annotations,
1. Identify the components used,
1. Identify the variants the components are set to (if any),
1. Map the designed components to design system component code (if a design system is used),
1. Identity what design system components are used as subcomponents for new components, 
1. Identify what components are net-new components, 
1. Extrapolate the full possible range of [states](https://ericwbailey.website/published/all-the-user-facing-states/), [modes](https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/), [validation](https://ericwbailey.website/published/all-the-user-facing-states/#validation), and other interactions, and then
1. Implement all this in code.

Design annotation kits—including accessibility annotation kits—are also <strong>a language with a limited vocabulary</strong>. This is because they’re created to be just enough shorthand commentary that they can better guarantee intended output. 

This limited grammar also implicitly helps to <strong>create the language a designer and developer use to communicate</strong>. This impacts: 

1. The output of what is produced, which in turn 
1. What a person who uses assistive technology experiences.

When you have a limited grammar to work with, your language can be inadequate to fully describe the totality of something. Don’t believe me? Try using [the xkcd Simple Writer](https://xkcd.com/simplewriter/) or [Toki Pona](https://tokipona.org/) to explain what [ARIA](https://www.w3.org/TR/wai-aria/) is.

## Language is a paintbrush, but also a prison

You may notice in the previous section that I don’t mention understanding the underlying intent of <strong>why</strong> the design is constructed the way that it is when speaking about workflows and outputs. This is the core of the problem. 

The thing is, <strong>annotation kits only annotate</strong>.

If a designer does not know why an accessibility annotation kit contains the resources that it does, they will be at a disadvantage from the start. The same applies for a developer. The same also applies for both working together.

Let’s unpack the nuance behind this some more.

## Where accessibility annotation kits start to go awry 

A designer may <strong>interpret the presence of the suite of annotation options as literal requirements</strong> that need to be applied. This also plays into a common designer weakness: the notion that experiences must be manually orchestrated as part of a grander “designed” vision. 

There are many examples of this, but here are two of the more common cases I’ve observed:

### `tabindex` woes

Tab order being manually managed with positive `tabindex` values is [a common antipattern](https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/#setting-a-manual-tab-order). However, the only way you know this fact is if it is [communicated to you](https://en.wikipedia.org/wiki/Social_constructivism)—say in a blog post like this one. 

Without the aid of the necessary specialized knowledge, a person using an accessibility annotation kit could easily be led to believing that the presence of a tab order sticker means that it should be used on “important” things—a phenomenon that lives somewhere between [availability bias](https://en.wikipedia.org/wiki/Availability_heuristic) and [the law of instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument).

This is especially likely to happen in situations where the developer is unfamiliar with `tabindex` or [accessibility best practices](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/). “Happen in situations” is a gentle way to say “most situations.” That’s not blame placed on practitioners. It’s condemnation of our [current industry priorities](https://heather-buchel.com/blog/2023/10/why-your-web-design-sucks/). 

I see this output all the time. `tabindex` is applied to things like inert paragraphs with the belief that it will make the experience “more accessible.” It’s heartbreaking.

### Heading misunderstandings

Another common example is misunderstanding the difference between a logical heading structure and visually large text. 

Headings, powered by the [HTML heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), are vital for allowing intuitive screen reader navigation. Crafting [an effective document structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/) is more an art than a science—providing either too few or [too many](https://webdesign.tutsplus.com/the-importance-of-heading-levels-for-assistive-technology--cms-31753a) can make things difficult to understand or navigate

Because of this, annotating headings is largely invisible content design problem, and not a visual one. This means it can be easy for an uninitiated designer to mis- or over-apply headings.

## Where accessibility annotation kits completely fall apart

The worst of the problems is when the vocabulary an annotation kit possesses is <strong>not sufficient to communicate the concepts it intends to describe</strong>.

For advanced concepts or interaction models, <strong>a limited vocabulary will lead to an approximate description of a complicated topic</strong>. Because of this, <strong>deeply technical concepts will be mapped to the annotation label that is perceived as the closest match</strong>.

### An example

Consider a [tree view](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/). This pattern is often used to create an experience like navigating through an operating system’s file explorer: 

<figure
  role="figure"
  aria-label="The bit on the left.">
  <img
    role="img"
    alt="A Windows 10 file explorer window. It is set to show a tree view on the left and a detail view on the right. The tree view demonstrates navigating into a folder seven levels deep, and how other directories can also be open at the same time to show subfolders and file contents. The folder that is currently open is called, 'en-US', and is located in a file path that is, 'This PC', then 'Local Disk (C:)', then 'Windows', then 'diagnostics', then 'scheduled', then 'Maintenance'. The details view shows the file contents of the 'en-US' folder. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/windows-file-explorer-tree-view.png' | url }}" />
  <figcaption>
    The bit on the left.
  </figcaption>
</figure>

A tree view has certain assistive technology announcements and behaviors that are both:

1. Required to make it work, and 
1. Expected by the people who rely on them to use it.

You can’t slap a sticker that reads, “[`role=tree"`](https://w3c.github.io/aria/#tree)`” on a tree view component design and <strong>expect it to be developed properly</strong>. Especially if there is little-to-no precedent for how to successfully build a web version of the tree view component documented online (no, [the APG does not count](https://adrianroselli.com/2023/04/no-apgs-support-charts-are-not-can-i-use-for-aria.html#NotARIA)). 

Many considerations for a tree view—and other complicated components—must be made.

<details 
  id="component-considerations"
  style="background-color: var(--color-colophon); cursor: pointer; color: var(--color-type-tint); font-size: var(--scale1); line-height: var(--line-height-tightest); padding: var(--scale0); border-radius: var(--border-radius-medium);">
  <summary>Component considerations</summary>
  <ul style="  line-height: var(--line-height-slight); margin-left: var(--scale2); cursor: default;">
    <li>Appropriate ARIA role and state declarations,</li>
    <li>Concise, descriptive accessible names,</li>
    <li>Assistive technology announcements, </li>
    <li>Keyboard interactivity, </li>
    <li>Navigation and node traversal,</li>
    <li>Focus management, </li>
    <li>Selection state,</li>
    <li>Loading and error states, </li>
    <li>Initial state configuration and deep linking,</li>
    <li>Selected item manipulation,</li>
    <li>Leading and trailing visuals,</li>
    <li>Specialized display modes, </li>
    <li>OS, browser and assistive technology compatibility bugs,</li>
    <li>etc.</li>
  </ul>
</details>

If you don’t know [these considerations](https://blog.pope.tech/2023/07/06/create-an-accessible-tree-view-widget-using-aria/), you don’t know them. If you <strong>do</strong> learn about them and attempt to use an accessibility annotation kit to describe them, you’ll likely run into both: 

- The aforementioned lack of sufficient shared vocabulary situation, and
- Completely overwhelming the developer with the sheer scope of considerations they need to implement.

[These considerations are <strong>everyone’s responsibility</strong>](https://cognition.happycog.com/article/accessibility-is-everyones-job). If a designer and developer are allowed to collaborate in an iterative manner, the overwhelming aspect gets lessened. 

## Process shapes artifacts, artifacts shape experiences 

A designer can clarify interaction details with mockups and prototypes, and a developer can map these to platform standards (HTML, CSS, JavaScript, ARIA, and SVG). Insufficiently designed or developed experiences and confusing annotations can be discussed, to lower [ambiguity](https://journals.openedition.org/lexis/746) and confusion.

However, this can only occur in environments where <strong>process is considered as part of the solution</strong>. To that point, it needs to be able to be malleable and iterative. 

Organizations that are new to deeply integrating accessibility need to be capable of adapting how they work in order to produce more effective artifacts. All this will affect how work is scoped, which in turn <strong>affects how it is prioritized</strong>. 

Be careful with this. Most [estimation processes](https://thoughtbot.com/blog/how-to-estimate-feature-development-time-maybe-don-t) I am familiar with do not accommodate planning for accessibility from the start, nor do they allow for granting the amount of autonomy needed to adjust how work is produced.

The reason for this? Systemic, structural disincentives for education.

People optimize for what a system prioritizes. Is the workplace facilitating an environment where they have the time and resources to learn about accessibility? [Is this knowledge path a viable one for career advancement](https://www.fastcompany.com/90861626/designers-have-a-seat-at-the-table-now-what-should-they-do-with-it)?

If not, you may wind up with a scenario where <strong>tooling</strong>, <strong>organizational dynamics</strong>, and <strong>incentive structures</strong> all conspire to make accessibility annotation users and consumers expresses confidence about something that is misrepresented or inaccurate.

## Root causes: a necessary tangent

You might be thinking this false expression of confidence is simple arrogance. However, the more realistic scenario is likely a combination of:

1. The industrialization of our industry, and the 
1. Overall lack of resources and support.

### Industrialization

Industrialization creates compartmentalization. This translates to <strong>situations where designers and developers are structurally not incentivized to collaborate</strong>—recall needing to be able to adapt and iterate on process. 

The immediate concern of an industrialized web is transforming static design into interactive code as quickly as possible. To facilitate that, responsibilities become more rigid to better make the person occupying the role more modular. 

Forget taking time to user test. If a concern does not fit neatly into the parameters that lead to code being produced as quick as possible, <strong>the concern is discarded</strong>. And if the person is judged as not meet those parameters at a sufficient enough level, they are replaced. 

Accessibility is nearly never one of those parameters, hence [the state of the web today](https://webaim.org/projects/million/). 

To extrapolate from this, you can [guess what happens](https://hbr.org/2016/07/how-neutral-layoffs-disproportionately-affect-women-and-minorities) to designers and developers who care about accessibility that don’t want to make specializing in accessibility work a full-time job.

### Lack of resources

The speed demanded by the web’s industrialization often forces people to make snap decisions and project certainty while doing so. Combined with the pressure cooker of hard and fast deadlines for [systems that demand constant, geometric growth](https://www.wired.com/story/tiktok-platforms-cory-doctorow/), and you have a situation that can get really messy really quickly.

And that’s before you even factor in how the dynamics of race, gender, and the perception of design and accessibility as “soft” skills all influence how this work, and its practitioners are viewed and treated.

That was a bit of a zoom out from the immediate concern, and a gigantic swing nestled in an already big swing. However, it's an important one. 

Back to annotation kits.

## Tree views and the uncanny valley

An insufficiently described component is a lot like [the uncanny valley effect](https://en.wikipedia.org/wiki/Uncanny_valley): Something that looks a lot like what is intended to be, but different enough that the experience of interacting with it is off-putting. 

A tree view described by the limited vocabulary present in an accessibility annotation kit will likely only be described, and [developed as <strong>nested lists that contain buttons</strong>](https://iamkate.com/code/tree-views/). This isn’t wrong per se, but it certainly also isn’t right. 

Jury-rigging the annotation kit’s labels to address [the large list of considerations](#component-considerations) means a designer will be fighting the very tool that’s supposed to be helping them. That increases the likelihood of mis- or under-describing things.

The developer tasked with turning the tree view design into code will follow the provided instructions. They will probably interpret the annotations literally and develop it as such.

The ideal outcome in this less-than-ideal scenario is that this inexact description creates an assistive technology experience that—while confusing and laborious to interact with—can still technically be operated. 

People who use assistive technology will not have the context of the process in which the tree view was built. Experientially, this means they may encounter something that <strong>vaguely suggests what it is trying to describe</strong>, but doesn’t announce itself or respond to interaction in the expected way.


<div class="centered-media-outer">
<img
  role="img"
  class="centered-media-inner-3"
  alt="A sticker with a title that reads, 'Hello, my name is:' Underneath the title is the phrase, 'unordered list' and it has been crossed out. Placed underneath it in larger writing is the phrase, 'tree view'. Tree view has not been crossed out."
  loading="lazy"
  src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/hello-my-name-is-tree-view.svg' | url }}">
</div>

An experienced assistive technology user may be familiar enough with the insufficiently-described concept that they can connect the dots. A [less experienced assistive technology user may not](https://ericwbailey.website/published/truths-about-digital-accessibility/#not-every-assistive-technology-user-is-a-power-user). In both cases, [this interaction represents friction](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/).

The worst possible outcome in this less-than-ideal scenario is this description process creates something that is completely unusable, and therefore inaccessible. 

For a tree view, it’s all too easy to imagine an approach that doesn’t accommodate a way to bypass its massive amount of tab stops. This could actually cause someone a great deal of fatigue and pain if physical movements are required to operate it.

And, to say it directly: This applies to tree views, but it also applies to <strong>all other components with complicated interaction requirements</strong>.

## Fill-in-the-blanks

Complicated interaction requirements compel the need for accessibility annotation kits to have have freeform labels. 

Freeform allows a designer to add content not initially included in the kit in a way that is visually understood to be part of the annotation system. This visual reinforcement of the annotation system helps to communicate that it’s part of what the person reviewing the annotations needs to consider.

Examples of where you might need freeform annotation labels are for expressing [less commonly-known ARIA declarations](https://w3c.github.io/aria/#aria-posinset), as well as HTML elements and [attributes](https://www.smashingmagazine.com/2022/03/html-attributes-you-never-use/).

<div class="centered-media-outer">
<img
  role="img"
  class="centered-media-inner-4"
  alt="An iOS-style switch component designed and annotated in design tooling. The switch component is shown in an on state, and has four annotation labels applied to it. The first label reads, 'role equals switch;'. The second label reads, 'button element'. The third label reads, 'type equals button'. The fourth label reads, 'aria-checked equals true'. "
  loading="lazy"
  src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/switch-annotation.svg' | url }}">
</div>

There’s a few pitfalls that we can stumble into here. 

First is not knowing which ARIA declarations are appropriate or necessary for the kind of interaction you’re attempting to create. Within that complexity, [ARIA has a taxonomy](https://www.w3.org/TR/wai-aria-1.2/#roles). 

Certain declarations can only to be applied as children of other declarations to work. Others won’t make sense in terms of actual usability with the content it is applied to, even if the declaration seems to make sense in a surface-level skim of just its name.

This is to say nothing of [making up ARIA declarations that don’t exist and hoping they’ll somehow work](https://ericwbailey.website/published/it-needs-to-map-back-to-a-role/#work-with-what-you%E2%80%99ve-got).

Second is that declaring ARIA does not confer interactivity—it only suggests the potential for it to occur. That interactivity is supplied mainly by JavaScript. 

I run into this one more than I wish I did. Declaring `role="button"` on a `div` does not make the `div` magically do buttony things, even if you think it should. It only sends the instruction that assistive technology should consider announcing the `div` the way it would a button, and as a technology it is [working exactly as expected in this way](https://alistapart.com/article/semantics-to-screen-readers/).

Third is the sorry, inescapable fact that [ARIA’s support is varied](https://www.a11yproject.com/posts/aria-has-perfect-support/). 

The combination of assistive technology, its version, the browser it is being used with and its version, and the Operating System both are being run on and its version can all affect if the declaration will function as intended or not.

This is a lot different than other web technologies, something a lot of developers and code-savvy designers I know struggle to internalize. 

In a way, this is a good thing in that it means [web standards](https://www.webstandards.org/2013/03/01/our-work-here-is-done/index.html) and [interop efforts](https://web.dev/blog/interop-2022) are largely successful. However it also does serve to highlight [how overlooked accessibility continues to be on the web platform](https://ericwbailey.website/published/display-contents-considered-harmful/).

## So, what can we do about this?

Putting all of these considerations on designers does not seem fair.

I know of many web industry workers who are passionate and knowledgeable about accessibility. They can, and do create deeply accessible interactive experiences. I’m even fortunate enough to work with some of them (Hi [Mike](https://mikeperrotti.com/)! Hi [Josh](https://josh.black/)!).

Instead, I’m hoping to <strong>shed light on an observed gap in the design and development process</strong> that (depressingly) occurs where people are trying to do the right thing in the wrong way. It is my hope that this gets more people aware of a very specific but important issue.

Here are some of the things we can do to address this gap:

### Better familiarize yourself with common interaction patterns

Improving our vocabulary increases [the precision of how we communicate](https://en.wikipedia.org/wiki/Aberrant_decoding). This allows you to tackle the fill-in-the-blank problem.

Reviewing the languages assistive technology uses to communicate intent translates to a better understanding of the expectations of what an expected interaction should be. On the web, these languages are predominately [HTML](https://html.spec.whatwg.org/multipage/) and [ARIA](https://www.w3.org/TR/wai-aria/).

Two other important things you can do are:

1. Familiarize yourself with [Operating System keyboard shortcuts](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec#WindowsVersion=Windows_10), and also 
1. How assistive technology interacts with, and announces Operating System UI elements. 

Spend a little time navigating the Windows File Explorer with [NVDA](https://www.nvaccess.org/about-nvda/) and take some notes. This helped tremendously with my efforts to [produce a tree view component for my job](https://primer.style/react/TreeView).

<strong>Eschew referencing web design system documentation as a primary reference for accessibility</strong>, as well. Far too many of them [claim to be accessible](https://adrianroselli.com/2022/11/your-accessibility-claims-are-wrong-unless.html) but do not perform their due diligence. 

If you do evaluate a web version of a component that has an Operating System equivalent, reference: 

- Multiple design systems’ implementations of a component. Look for convergence and divergence in behavior and announcements, and then
- How that convergence and divergence compares to an Operating System UI equivalent.

Identify cross-design system alignment and gaps, and map both back to the applicable semantics that create the expected assistive technology announcements and behavior.

### Test with actual assistive technology

The map is not the territory. Accessibility is not a top-level concern for most places, so [bugs and regressions are consequently commonplace](https://bugs.webkit.org/buglist.cgi?bug_status=__open__&component=Accessibility&product=WebKit). 

For the tree view component I was working on, I discovered that all of my elaborate annotations did not count for anything in VoiceOver on macOS. This led to having to revisit some work to create an alternate solution, but was far better than releasing something inaccessible. 

I wish VoiceOver on macOS wasn’t [as unreliable as it currently is](https://www.theregister.com/2023/10/16/apple_lenovo_blind_fail/), but it is vital to remember <strong>it’s not about your opinion</strong>. It’s about the power dynamics inherent in what you can do, or not do to facilitate or restrict access.

### Test with disabled people

Professional disability testing may create a reductive, tokenizing, and extractive effect on the person practicing it, but also offers a [historically discriminated population](https://www.usnews.com/news/top-news/articles/2023-09-13/walmart-sued-by-us-agency-over-test-that-screened-out-disabled-workers) an employment opportunity. It’s a huge, thorny issue nestled inside an already huge, thorny issue.

Regardless, <strong>lived experience offers critical input on what does and does not work</strong>. It also helps uncover a whole host of biases and assumptions you may have as a non-disabled, non daily assistive technology user.

### Demand better platform primitives

HTML needs to be extended to address these emergent platform needs. That’s a fancy way of saying we have [a lot of cowpaths that need paving](https://www.w3.org/TR/html-design-principles/#pave-the-cowpaths).

Codified standards for [common interface components](https://github.com/openui/open-ui/tree/main/site/src/pages/components) would greatly assist with making the web more accessible. These things are tricky to get right, even for multibillion dollar enterprise organizations with near-unlimited resources at their disposal. 

However, consider the opposite: When it is possible to use [a browser native checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) it just… works. 

<img
  alt="An unchecked checkbox whose label reads, 'It ain't much, but its honest work.' The checkbox has no styling applied to it, leaving it to be styled by browser default styling."
  loading="lazy"
  src="{{ '/img/posts/accessibility-annotation-kits-only-annotate/checkbox-honest-work.png' | url }}">

The surface area of additional logic and side-effects you need to consider and code for a platform primitive is drastically lower. Don’t also forget future support and maintenance concerns, and [the inevitable platform rewrite](https://jakelazaroff.com/words/web-components-will-outlive-your-javascript-framework/). 

When you consider the scope and scale of the entire industry, the cost of this codification is comparatively a drop in the bucket. Through this lens, throwing all of this away because of a lack of visual styling capabilities is a tragedy. 

[Open UI](https://open-ui.org/) is poised to do some important work here. I hope they are also testing with daily assistive technology users to ensure the mistakes of the past are not repeated. If not, I <strong>strongly encourage community outreach</strong>.

### Demand better tooling

The current state of designer and developer tooling subconsciously reflects the divide and barriers that exists between the two disciplines. 

<strong>Carrying intent all the way from design, to development, to the browser</strong> can reduce the effect this divide creates, and lessen the amount of interpretation that happens.

- Design tools should do the hard work to make it easy and be able to programmatically express these codified components (this grouping of objects is a tree view). 
- Development tools should be able to sync with, and ingest these programatic expressions and translate them to code (tree views use these fonts and colors, and support these states and interactions).

This setup means there’s less of a chance of an insufficient or missing interpretation occurring, and therefore access issues being created. 

We’re starting to see movement on this with features like more common acceptance and usage of [design tokens](https://www.w3.org/community/design-tokens/). I consider this—an application agnostic declaration of programmatic intent—a tiny glimpse of what could be.

### Create more collaborative workflows between design and development

Siloed, static workflows are antithetical to creating quality experiences, and <strong>quality experiences are accessible</strong>. 

Throwing work over the wall does not work. Closer, more collaborative working relationships provide an environment where productive discussions can thrive and ambiguity is excised. 

### Advocate for top-down support

Accessibility work needs both buy-in and [continual reinvestment](https://www.reidmore.online/post/accessibility-training-will-not-save-you#viewer-7k38v) from leadership in order to be effective and sustainable. Full stop. 

Whether it is a top-down edict or a bottom-up groundswell, the space required to create collaborative workflows needs to be built out with intention and understanding. Doing this requires delicate education and outreach efforts, and not adversarial demands.

You’ll likely need to do the hard work to communicate the value of adjusting process. This almost always translates to appeals to impact on the bottom line.

## In closing

Annotation kits borrow from traditional design annotation kits, and serve as an important stopgap measure until design and development tooling matures. Because of this, they can be a useful tool for communicating intent about how an interface should be operated. 

When it comes to documenting accessibility-related information, the success of these annotation kits relies on both specialized domain knowledge and a collaborative, back-and-forth workflow. 

<strong>If misunderstood or misused, accessibility annotation kits are poised to create more harm than good</strong>.

Accessibility annotation kits’ limited, jargon-dense vocabulary—combined with current industry pressures and priorities—can conspire to create outcomes that may appear to be usable on a surface level. However, in the practical this may lead to something that is insufficiently or improperly described and consequently developed. 

These situations can lead to people who rely on assistive technology not being able to use the annotated experience as intended by the designer. 

In the short term, becoming more familiar with the underlying concepts an accessibility annotation kit references can help prevent them from leading to inaccessible output. More importantly, getting familiarity with, and testing the developed output with actual assistive technology can help guarantee its success.

In the long term, advocating for better tooling and platform primitives, as well as more constructive, inclusive, and sustainable methods of working can reduce or completely remove some of the core problems intrinsic to using accessibility annotation toolkits.
