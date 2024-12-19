---
layout: "layouts/post.njk"
title: GitHub’s updated Commits page and the interactive list component
source: ericwbailey.website
excerpt: "This post is about interactive lists on GitHub, and how to use them"
date: 2024-12-20
year: 2024
tags:
  - accessibility
  - approach
  - assistive technology
  - design
  - design systems
  - development
  - focus
  - html
  - inclusion
  - personal
share:
  facebookDescription: "A list icon."
  twitterDescription: "A list icon."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 64
---

GitHub has updated [the page template used to list Commits on a repository](https://github.blog/changelog/2024-12-12-refreshed-pull-request-commits-page-now-generally-available/). Central to this experience is an interactive list component that I was responsible for architecting. This work was done alongside input from [James Scholes](https://dragonscave.space/@jscholes), whose guidance was instrumental to the effort’s success.

An interactive list is [a construct that’s more commonplace on desktop applications than the web](https://github.com/w3c/aria/wiki/Proposal%3A-Interactive-Lists#examples-for-interactive-lists). That does not mean its approach is forbidden from being used for web experiences, however.

## What concerns does an interactive list address?

The main concern an interactive list addresses is when each discrete item in a series contains multiple interactive child elements.

<img
  role="img"
  alt="A simplified illustration showing a list of four items, with each item containing multiple child items."
  src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/interactive-list-diagram.svg' | url }}">

Navigating through every interactive item within each list item can be a tedious enough chore to make it a non-starter. For example, if the list has ten items and each item has seven interactive child elements, that means it takes up to seventy <kbd>Tab</kbd> keypresses someone needs to perform to get what they need. That’s an exhausting experience to endure.

It could also be agonizing. Think [motor control disabilities](https://webaim.org/articles/motor/motordisabilities), where [individual movements in aggregate](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/) can exceed someone’s pain tolerance threshold.

Making each list item’s container itself focusable and traversable addresses this problem, as it **lowers the number of keypresses someone needs to use**. It also supports allowing you to quickly navigate item by item, or jump to the start or end of the list.

On GitHub, navigating an interactive list via your keyboard can be accomplished by pressing:

- <kbd>Tab</kbd>: Places focus on the last interactive list to receive focus. Defaults to the first item in the list if the component instance was previously not interacted with.
- <kbd>Down</kbd>: Moves focus to the next list item, if present.
- <kbd>Up</kbd>: Moves focus to the previous list item, if present.
- <kbd>End</kbd>: Moves focus to the last list item in the interactive list.
- <kbd>Home</kbd>: Moves focus to the first list item in the interactive list.

The trick here is to make sure each list item’s announcement contains enough information that someone navigating via a screen reader can **make an informed choice** about if they want to investigate the item’s child content in more detail.

For example, when navigating via list item on the Commits page, we only include the commit title. For an Issue, we use:

1. The Issue title,
2. It’s status, and
3. It’s author (there is [currently a bug here](https://github.com/orgs/community/discussions/139935#discussioncomment-10826666), we’re working on fixing it).

There is an intentionality behind the order of content in this announcement, as we want to **include the most relevant information first**. This, in turn, helps people navigating by list item announcement make more informed choices faster.

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/announcement-heirarchy-wide.svg' | url }}">
  <img
    role="img"
    alt="A simplified illustration of a list item, followed by simulated screen reader output. The list item contains three child items that are highlighted and labeled, with the labels reading, '1. Title', '2. Status', and '3. Author'. Five other items are also present in the list item, but are not highlighted. The simulated screen reader output reads, 'Sorting blog posts in a subfolder does not work. Status: Open. Author: guyincognito. More information available below.'. Labels are also applied to the simulated output, showing the relationship between the visual design and the announcement content."
    src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/announcement-heirarchy-narrow.svg' | url }}">
</picture>

We also use the term “More information available below” to signal that someone can explore the list item’s child contents in more detail. This is accomplished via pressing:

- <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd>: Navigate through each interactive element placed within each list item in sequence.
- <kbd>Esc</kbd>: Moves focus out of the interactive elements placed within each list item and places it back on the list item itself again.

Examples of child content that someone could encounter are an Issues’ author, its labels, linked Pull Requests, comment tally, and assignees.

<picture class="post-breakout">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/tab-order-wide.svg' | url }}">
  <img
    role="img"
    alt="A simplified illustration of a list item with numbered tab stops to demonstrate focus order. Focus moves from the list item itself to its implied title area, then its label, then its status, then author and other associated metadata."
    src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/tab-order-narrow.svg' | url }}">
</picture>

## Problems

The use of “More information available below” does not sit well with me, despite being the person who oversaw its inclusion. There’s a couple of reasons here.

First, I’m normally loathe to [hardcode interaction hints for screen readers](https://adrianroselli.com/2019/10/stop-giving-control-hints-to-screen-readers.html).

The interactive list component is a bit of an exception to that rule, in that it is such an uncommon interaction on the web that the hint needs to be included until [efforts formalize the interaction pattern](https://gist.github.com/smhigley/a613aab8287726f61202869e2f479553) manifest and get more widespread adoption. Without it, I fear that blind and low vision individuals might not be able to fully utilize the experience the way their peers can.

Second, the hint phrasing itself isn’t that great. It uses a location-based term “below” to try and communicate that there’s subsequent child content that is related to the list item’s main content. While “subsequent child content that is related to the list item’s main content” is more descriptive, it’s an earful.

I am definitely open to suggestions for a replacement phrase. And this potential for change sets up other things that weigh on me.

## Bigger problems

Using this interactive list component on the Commits page template means there are now two main areas on GitHub where the component is present. The second being [the lists of repository Issues](https://github.blog/engineering/how-were-building-more-inclusive-and-accessible-components-at-github/#improvements-were-making-to-lists-of-issues-and-pull-requests) for logged-in accounts.

<img
  alt="Two stacked screenshots of the MDN's content repositiory. The top screenshot shows the repository's commits page, and the bottom shows the repository's issues page."
  loading="lazy"
  src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/screenshots.png' | url }}">

**Large, structural changes to a design’s underlying semantics disrupts the mental model and muscle memory** of how many people who use screen readers operate an experience. It’s an act that I’m always nervous about undertaking.

The calculated bet here is that the prominence of these components on these high-traffic areas means that understanding how to operate them becomes easier over time. I’ve also hedged that bet by including alternate ways of navigating the interactive list, including [using headings](https://webaim.org/projects/screenreadersurvey9/#finding) for each Commit and Issue title.

<figure
  role="figure"
  aria-label="Heading order visualized via HeadingsMap.">
  <picture>
    <source
      media="(min-width: 68rem)"
      srcset="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/headingsmap-wide.png' | url }}">
    <img
      role="img"
      alt="The HeadingsMap browser extension showing a hierarchical list of headings on the Issues page for the eleventy repository. Each issue title is a level three heading."
      src="{{ '/img/posts/githubs-updated-commits-page-and-the-interactive-list-component/headingsmap-narrow.png' | url }}">
  </picture>
  <figcaption>
    Heading order visualized via <a href="https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi">HeadingsMap</a>.
  </figcaption>
</figure>

I do think that this update to each page’s semantic structure is net better than what came before it. However, it is still going to manifest as a large and sudden change for people who use screen readers—I view changing the “More information available below” phrasing as one such change.

**Subsequent large and sudden changes is what I want to avoid at all costs**.

That said, we’re running out the clock on a situation where an interactive list’s list item someday contains non-interactive content. The component’s current approach does not have a great way for people to be aware of, and subsequently read that kind of content. That’s not great.

Because of this inevitability, I would like to replace the list’s interaction approach with the one we’re using for [nested/sub-Issues](https://github.blog/changelog/2024-10-01-evolving-github-issues-public-beta/#break-down-and-nest-issues-with-sub-issues). There are a few reasons for this, but the main ones are:

1. Improving consistency of interaction across all of GitHub for this kind of clustering of content.
2. Leaning on more well-known interaction for secondary content within an item by using dialogs instead of <kbd>Tab</kbd> keypresses.
3. Providing a mechanism that can handle more easily exploring non-interactive content being placed within a list item.

Making these changes would mean making a drastic update on top of another drastic update. While I do think it would be a better overall experience, rolling it out would require a lot of careful effort and planning.

## Even bigger problems

In many ways, GitHub is a battleship. It is slow to turn just by virtue of the sheer size and scale of concerns it needs to cover.

Enacting my goal of replacing and unifying these kinds of interactions would take time. It would also mean petitioning for heavy investment in something that may be perceived as an already “solved” problem. It also would require **collaboration across multiple siloed product areas,** each with their own pre-existing and planned objectives and priorities.

I also have the gift of hindsight in writing this. The interactive list was originally intended to address just the list of repository Issues. Its usage has since has grown to cover more use cases—not all of them actually applicable.

This is **one of the downsides of a design system**. You can write all the documentation you want, but ultimately people are going to use what they’re going to use regardless of if its appropriate or not.

Excising and updating misapplied component is another effort that runs counter to organization priorities. That truth lives in parallel with the need to **maintain the overall state of usability for everyone** who uses the service.

## You’re gonna carry that weight

Making dramatic changes to core parts of GitHub’s assistive technology user experience, followed by more dramatic changes, then potentially followed by even more dramatic changes is an outcome we’re potentially facing.

It is the nature of software—especially websites and web apps—to change. That said, I worry about **the overall churn** this all could represent. I feel the weight of that responsibility as the person who set this course. I also feel the consequent pressure it exerts.

I’ll continue to write about and plead the case internally, but I worry that I’ve blown my one chance to get things right. I know my colleagues who produce visual designs also may feel this way, but I also think it’s a more acute problem for this speciality.

I don’t think that this sort of situation is one that’s talked about that often in accessibility spaces, hence me writing about it. [I also don’t think it’s quantified](https://ericwbailey.website/published/invisible-success/), either.

## Centering

I’m pretty proud of what we accomplished, but those feelings are moot if all this does not serve the people it was intended to.

It’s also **not about me**. Our efforts to be more inclusive may ironically work against us here. How much churn is the point where it’s too much and people are pushed away?

To that point, [feedback helps](https://github.com/orgs/community/discussions/categories/accessibility).

Constructive reports on barriers and friction are something that can bypass the internal perception of the things I’ve outlined being a non-problems. I am twice heartened here. First, a report is a signal that means someone is still present and cares enough to voice their problems. Second, there has been renewed internal interest in investing on acting on these user-reported accessibility problems.

## The work never stops

This post is about interactive lists on GitHub, and how to use them. It’s also about:

- The responsibilities, pressures, and politics of creating complex components like the interactive list and ensuring they are accessible,
- How these types of components affect the larger, holistic experience of GitHub as a whole,
- The need to ensure these components actually work for the people they serve, and
- The value of providing feedback if they don’t.

These are powerful things to internalize if you also do this sort of work, but also valuable to keep in mind if you don’t. The have served me well in my journey at GitHub, and I hope they help to serve you too.
