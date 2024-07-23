---
layout: "layouts/post.njk"
title: "All the user-facing states"
source: ericwbailey.website
excerpt: "User-facing state is what someone experiences when they interact with (or try to interact with) an element in some capacity"
date: 2022-04-29
year: 2022
tags:
  - Attributes
  - Design
  - Design Systems
  - Development
  - HTML
sharedOn:
  twitter: https://twitter.com/ericwbailey/status/1520040337774886912
share:
  facebookDescription: "A hand cursor hovering over the phrase 'eric w. bailey'. The phrase is underlined."
  twitterDescription: "A hand cursor hovering over the letter E. The letter is underlined."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 10
---

I find myself needing a reference like this more often than not lately. So, here’s a blog acting as augmented memory—I’ll update it as I encounter more user-facing states in the wild.

## What user-facing state is

[User-facing state](https://css-tricks.com/user-facing-state/) is what someone experiences when they interact with (or try to interact with) an element in some capacity. It is reactive, helping to communicate the ways in which something can be manipulated.

The system that displays content can also manipulate state from sources other than the person using it. Think service outages, slow API response times, etc.

Multiple states can be applied to something, from both cumulative user interactions, system interactions, or the combination of both. For example, a collapsed element could also be conditionally disabled.

Some states are discrete, while others can be part of an implicit pair. For example, an expanded element can be collapsed, but does not necessarily need to be.

State also helps to identify purpose via behavior. Because of this, not every component can have every state applied to it. For example, not every component needs to be draggable.

It is also worth noting that on the web, [the majority of user-facing state can be communicated programatically](https://benmyers.dev/blog/semantic-selectors/). This means that there is an [HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) or [ARIA declaration](https://www.w3.org/TR/wai-aria-1.1/) that can ensure people who can’t see the content can understand the state something has been set to.

## What user-facing state is not

Here are a few examples of what user-facing state is not:

### Application state

User-facing state is not to be confused with application state—a term commonly used with single page applications to communicate configuration of data.

### Component variants

It should also not be confused with size, context, mode, and other design tokenable qualities that can be applied to a component.

### Validation

Validation is often lumped in with state—[I feel this is a mistake](https://ericwbailey.website/published/the-case-for-adding-validation-state-to-your-design-tokens/). For completeness’ sake, here’s validation conditions that can augment state:

#### Valid

Content or choices made by someone are within the parameters set by the input. Data can be successfully sent back to the system that stores it.

#### Invalid

Content or choices made by someone are not within the parameters set by the input. Data cannot be sent back to the system that stores it.

#### Warning

Content or choices made by someone may have been unintentional, or have unintended consequences. Data can be sent back to the system that stores it, but there may be side effects.

## State

With all that covered, here’s the list:

### Resting

The status of something before someone has interacted with it, or other content affects it. Oftentimes referred to as “Base” or “Default.”

### Hovered

When someone places a pointing device over an element, but has not yet taken action on it.

### Active

An intermediate state that communicates someone has taken action on an element, and that it is in the process of navigating to a destination, triggering logic, or transmitting data. Also known as “pressed.”

### Focused

When someone selects an element via keyboard or voice command, but has not yet taken action on it.

### Visited

Someone has previously visited the resource the element is set to navigate to.

### Targeted

An element is higlighted via a mechanism like an ID reference or [selected text fragment](https://support.google.com/chrome/answer/10256233).

### Loading

An element is fetching data from another internal or external resource.

### Loaded

An element has fetched data from another internal or external resource and indicates that retrieval is completed. Loaded state isn't always communicated after loading state is applied.

### Disabled

An element has had its interactivity conditionally removed.

### Hidden

An element has been completely removed. It cannot be visually seen or accessed via assistive technology.

### Readonly

Indicates element content that can only be read, and not interacted with.

### Enabled

An element has been Activated, which unlocks the ability of additional state to be applied to the element, the page or view the element is contained on, or the overall site or app.

### Inactive

The larger system an element is used in has service issues. This service disruption removes the element’s ability to take action or navigate.

### Inert

An element has its presence completely removed for assistive technology.

### Checked

An element is marked for sending as data to another internal or external resource. A Checked element can be Focused, but it's selected state persists after focus is moved.

### Unchecked

A Checked element that is no longer marked as wanting to be sent as data to another internal or external resource.

### Indeterminate

An Indeterminate element is triggered on a parent element when some, but not all children elements are placed in a Checked state (thanks to [Kilian Valkhof](https://kilianvalkhof.com/) for the suggestion).

### Selected

An element has been chosen as one or more criteria for a task. A Selected element can be Focused, but it's selected state persists after focus is moved.

### Deselected

A Selected element that has had its selection removed. Elements that can be Selected, but have not yet been are considered to be Resting.

### Dragged

An element has been Selected and is being moved to another location.

### Ghost Origin

A Dragged element shows a preview of where it originated from prior to being placed in a Dragged state (thanks to [Vernon Fowler](https://x.com/vfowler/status/1799764966062600255)).

### Ghost Destination

A Dragged element shows a preview of where it will be placed when placed into a Dropped state (thanks to [Vernon Fowler](https://x.com/vfowler/status/1799764966062600255)).

### Dropped

A Dragged element is placed in a new location (thanks to [Austin Gil](https://twitter.com/heyAustinGil/status/1520068536521019392)).

### Collapsed

An element is hiding the bulk of its content.

### Expanded

An element is showing all of its collapsed content.

### Resizing

An element has its height or width increased or decreased.

### Dirty

An editable element has been manipulated by someone on one or more occurrences.

### Pristine

An editable element has yet to be manipulated by someone.

### Saving

An indeterminate state. It is triggered when an editable element in a Dirty state, where someone signals that their changes should be captured. Once the changes are successfully captured it reverts back to a Pristine state.

### Overflowing

A child element's visual content is partially obscured by a parent element that restricts its height or width (thanks to [Dave Rupert](https://twitter.com/davatron5000/status/1520041666945683456)).

### Scrolling

A child element is panning horizontally or vertically (thanks to [Dave Rupert](https://twitter.com/davatron5000/status/1520041666945683456)).

### Playing

An element is actively presenting prerecorded media or animation (thanks to [Austin Gil](https://twitter.com/heyAustinGil/status/1520068536521019392)).

### Paused

Prerecorded media or animation an element is Playing is temporarily halted (thanks to [Austin Gil](https://twitter.com/heyAustinGil/status/1520068536521019392)).

### Stopped

Prerecorded media or animation an element is Playing is reverted back to its start position.

### Sticky

An element attaches itself to the side of the viewport opposite the direction someone scrolls and does not move out of view along with its surrounding content (thanks to [LukaJ](https://twitter.com/ejnfoh_cehok/status/1521208805413040129)).

### Unstuck

A Sticky element is removed from the side of the viewport and moved back to its original position.

### Locked

An element’s position, content, and state  are fixed and cannot be modified.

### Unlocked

A locked element has its capability to be modified restored.

## Did I miss something?

[Let me know](https://twitter.com/ericwbailey/status/1520040337774886912)!
