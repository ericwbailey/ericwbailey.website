---
layout: "layouts/post.njk"
title: Announcing What Can’t I Press?
source: ericwbailey.website
excerpt: "Lists what keyboard shortcuts are claimed"
date: 2026-06-15
year: 2026
tags:
  - Accessibility
  - Approach
  - Apps
  - Assistive technology
  - Design
  - Development
  - Harm Reduction
  - Inclusion
  - LLMs
share:
  facebookDescription: "Top-down view of a simple icon representing a gas stove burner."
  twitterDescription: "Top-down view of a simple icon representing a gas stove burner."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 10
---

I made an app!

[What Can’t I Press?](https://github.com/ericwbailey/what-cant-i-press) is an app that allows you to:

- Read, search, and filter through screen reader keyboard shortcuts.
- Scan open apps and add their keyboard shortcuts to the collection.
- Copy a keyboard shortcut to your clipboard, with modifier keys to format the keyboard shortcut in different ways.
- Export the list of keyboard shortcuts in its current state as JSON.

It is intended to be both a reference and a discovery tool. Here’s a quick demo of it in action:

<video controls>
  <source src="{{ '/img/posts/announcing-what-cant-i-press/demo.webm' | url }}" type="video/webm" />
</video>

<details>
  <summary>
    Video description
  </summary>
    <p>Two open apps placed side-by-side on macOS: TextEdit and What Can't I Press? TextEdit is open to a blank document. What Can't I Press? shows a search input, an expand/collapse all toggle button, a list of 4 disclosures in a collapsed state, a notification message, a shortcut filter input, a download icon, and two buttons labeled "Scan all open apps" and "Scan last focused app". The disclosures are labeled, "JAWS", "Narrator", "NVDA", and "VoiceOver" and each has a badge tallying how many shortcuts are present. </p>
  <p>The notification message reads, "What Can't I Press cannot detect all possible keyboard shortcuts. Be sure to also check manually."</p>
  <p>The mouse cursor clicks the "Scan last focused app" button and a brief scan happens. The list of disclosures updates to show global keyboard shortcuts and shortcuts for TextEdit. All disclosures are set to an expanded state, and links to jump to the next section are also revealed.</p>
  <p>The mouse cursor then clicks on the search input, where the word "save" is entered. It then briefly scrolls through the list to show what apps have functionality related to saving.</p>
  <p>The search input is cleared by clicking a clear button, then focus is placed on the filter input, where <kbd>Command</kbd>kbd> + <kbd>s</kbd> is entered. The list of keyboard shortcuts filters to show all shortcuts that incorporate these keystrokes.</p>
  <p>The cursor then clicks on the  <kbd>Command</kbd>kbd> + <kbd>S</kbd> save row button, and places focus on the TextEdit document. The content "⌘S" is inserted into the document via pasting.</p>
</details>

[The app is also available as a web experience](https://what-cant-i-press.app/), and can be installed as a [Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app). This form of the experience only allows viewing and filtering screen reader keyboard shortcuts, as scanning open apps is not possible using current web technologies.

## Why did I make it?

App and webapp keyboard shortcuts are an often overlooked area of user experience, especially when it comes to working nicely with assistive technology.

As much as possible **we should not put the burden on the person using assistive technology** to use workarounds. In other words: what is added as a convenience for someone who doesn’t require assistive technology should not impair someone who does require assistive technology functionality to get what they want or need.

I made this app to help speed up and streamline the process of adding keyboard shortcuts in a safe and responsible way. For more background on this act, reference my post, [<cite>How an accessibility designer adds keyboard shortcuts to a web app</cite>](https://ericwbailey.website/published/how-an-accessibility-designer-adds-keyboard-shortcuts-to-a-web-app/).

## Limitations

**What Can’t I Press? cannot detect all keyboard shortcuts used by an app**. Consider this as a tool that helps as a first pass, but always be sure to also manually check.

There are specific ways of declaring keyboard shortcuts in code that can be picked up by a scan, but not everyone uses those methods. [Microsoft is an especially poor actor in this regard](https://github.com/ericwbailey/what-cant-i-press#why-is-keyboard-shortcut-detection-less-effective-on-windows).

The app is also currently unsigned. This means you’ll have to bypass operating system warnings about installing unsigned apps. [All app source code is on GitHub](https://github.com/ericwbailey/what-cant-i-press/tree/main) and set to public, so you can review exactly what you’re signing up for.

Getting the app signed is on [the roadmap](https://github.com/ericwbailey/what-cant-i-press/blob/main/ROADMAP.md), so consider this more of a soft-launch announcement.

## Is it free?

Yes.

## This kinda reads like you think all keyboard shortcuts should be rebindable

Also yes.

## Looks like you used a LLM to make this

A third yes.

I honestly couldn’t have made this without it, and [I have complicated feelings about that](https://ericwbailey.website/published/the-case-for-an-accessibility-designer-vibe-coding-when-all-his-coworkers-are-also-vibe-coding/). Believe me, there was a ton of human intervention required.

## What’s with the icon?

It’s a stovetop gas burner. You shouldn’t press it with your hand. I’m really funny, I know.

## And what about this anecdote that I couldn’t resist sharing?

A friend mentioned one of their coworkers uses an app whose main mode of operation is text entry.

For whatever reason, pressing <kbd>Command</kbd> + <kbd>b</kbd> toggles open a navigation drawer, and not, you know, apply bold formatting. This isn’t even an accessibility issue, it’s straight-up **bad design**.

## Is this app helpful?

[Let me know](https://github.com/ericwbailey/what-cant-i-press/issues/new)!
