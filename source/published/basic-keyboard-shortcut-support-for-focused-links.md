---
layout: "layouts/post.njk"
title: Basic keyboard shortcut support for focused links
source: ericwbailey.website
excerpt: "Links do so, so many things"
date: 2024-08-21
year: 2024
tags:
  - Accessibility
  - Approach
  - Assistive Technology
  - Browser Extensions
  - Development
  - Devices
  - Focus
  - HTML
share:
  facebookDescription: "A keyboard key with a link icon on it."
  twitterDescription: "A keyboard key with a link icon on it."
series:
  next:
    - title: "How an accessibility designer adds keyboard shortcuts to a web app"
      url: https://ericwbailey.website/published/how-an-accessibility-designer-adds-keyboard-shortcuts-to-a-web-app/
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 58
---

This is one of those cases where circumstances at my job led to needing to document expected behavior in order to create “synthetic” links via JavaScript. Sometimes this sort of thing is regrettably unavoidable.

A large part of the effort was capturing all the different actions you can perform with keyboard interaction when [an anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) is [focused](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event). Turns out, there’s a lot!

I thought that sharing what I documented could be helpful to others. This is both as a resource, and also as an example of how being cavalier about non-semantic HTML can create so many problems.

## Results

Update: [Dave Rupert](https://daverupert.com/) very kindly created [a table-based synthesis of this work](https://codepen.io/davatron5000/full/WNqzMzd) and [shared it on Mastodon](https://mastodon.social/@davatron5000/113000730408162869).

### Windows

#### <kbd>Shift</kbd> + <kbd>Enter</kbd>

Open URL in a new window:

- Blink
- Gecko

#### <kbd>Function</kbd> + <kbd>Enter</kbd>

Opens URL in current tab:

- Blink
- Gecko

#### <kbd>Control</kbd> + <kbd>Enter</kbd>

Open URL in a new tab:

- Blink
- Gecko

#### <kbd>Option</kbd> + <kbd>Enter</kbd>

Downloads URL:

- Blink

Does nothing:

- Gecko

#### <kbd>Alt</kbd> + <kbd>Enter</kbd>

Downloads URL:

- Blink
- Gecko
- WebKit

#### <kbd>Command</kbd> + <kbd>Enter</kbd>

Does nothing:

- Blink
- WebKit
- Gecko

### macOS

Note: you need to [enable full keyboard access](https://support.apple.com/en-tm/guide/mac-help/mchlc06d1059/mac).

#### <kbd>Shift</kbd> + <kbd>Enter</kbd>

Open URL in a new window:

- Blink
- Gecko

Adds URL to Reading List:

- WebKit

#### <kbd>Function</kbd> + <kbd>Enter</kbd>

Opens URL in the current tab:

- Blink
- Gecko
- WebKit

#### <kbd>Control</kbd> + <kbd>Enter</kbd>

Opens URL in the current tab:

- Blink
- WebKit

Does nothing:

- Gecko

#### <kbd>Option</kbd> + <kbd>Enter</kbd>

Downloads URL:

- Blink
- WebKit

Does nothing:

- Gecko

#### <kbd>Alt</kbd> + <kbd>Enter</kbd>

Downloads URL:

- Blink
- WebKit

Does nothing:

- Gecko

#### <kbd>Command</kbd> + <kbd>Enter</kbd>

Opens URL in a new tab:

- Blink
- Gecko
- WebKit

### iOS and WebKit

Note: You need to [enable full keyboard access](https://support.apple.com/en-in/guide/iphone/ipha4375873f/ios).

#### <kbd>Shift</kbd> + <kbd>Enter</kbd>

Open URL in a background tab.

#### <kbd>Function</kbd> + <kbd>Enter</kbd>

Does nothing.

#### <kbd>Control</kbd> + <kbd>Enter</kbd>

Does nothing.

#### <kbd>Option</kbd> + <kbd>Enter</kbd>

Downloads URL:

#### <kbd>Alt</kbd> + <kbd>Enter</kbd>

Does nothing.

#### <kbd>Command</kbd> + <kbd>Enter</kbd>

Opens URL in a new tab.

### Android  and Blink

#### <kbd>Shift</kbd> + <kbd>Enter</kbd>

Open URL in a new tab.

#### <kbd>Function</kbd> + <kbd>Enter</kbd>

Opens URL in the current tab.

#### <kbd>Control</kbd> + <kbd>Enter</kbd>

Open URL in a new tab.

#### <kbd>Option</kbd> + <kbd>Enter</kbd>

Downloads URL.

#### <kbd>Alt</kbd> + <kbd>Enter</kbd>

Downloads URL.

#### <kbd>Command</kbd> + <kbd>Enter</kbd>

Returns to the home screen.

## Testing details

Tested on Monday, August 19th, 2024 using the following hardware, operating systems and browser versions:

- Keyboards:
  - 2021 MacBook Pro.
  - Matias Wired Keyboard for Mac.
  - BOOGIIO Large Print Computer Keyboard.
- Windows, version 22631.4307.
  - Chrome, version 127.0.6533.120.
  - Edge, version 127.0.2651.98.
  - Firefox, version 129.0.1.
- macOS, version 14.5.
  - Chrome, version 127.0.6533.120.
  - Edge, version 127.0.2651.98.
  - Firefox, version 129.0.1.
  - Safari, version 17.5.
- iOS, version 17.5.1.
  - Safari, version 17.6.
- Android, version 13 T3SGS33. 165-46-3-4-1.
  - Chrome, version 126.0.6478.72.

## Other testing details

- I used left-hand side keyboard keypresses.
- I also used an Apple keyboard with macOS, as well as a Windows keyboard with macOS, and vice-versa.
- I had to buy a Lightning to USB converter to write this post, and am quite grumpy about it.
- While you can technically maybe possibly install a very old version of Safari on Windows, it is 12 major versions older than the most current release. You gotta draw the line somewhere, and I drew it there.
- And speaking of drawing the line, [Linux exists](https://www.linux.org/pages/download/).

## Also note that

- These keyboard shortcuts—or lack of keyboard shortcut support—are intentional and have decades-long, built up muscle memory-level expectations behind them.
- This is not an exhaustive list. There are likely more esoteric keyboard shortcuts out there that I’m not aware of.
- [Other forms of assistive technology](https://adrianroselli.com/2024/08/at-is-more-than-screen-readers.html), browser extensions, and third party apps may affect things.
- Different [Latin-script keyboard layouts](https://en.wikipedia.org/wiki/Keyboard_layout#Latin-script_keyboard_layouts) are a thing.
- [Non-Latin keyboard layouts](https://en.wikipedia.org/wiki/Keyboard_layout#Keyboard_layouts_for_non-Latin_alphabetic_scripts) are a also a thing.
- Left and right-hand side keys of the same name should create identical input, unless they don’t.
- <kbd>Control</kbd> on Windows and <kbd>Command</kbd> on macOS are synonymous, unless they’re not.
- <kbd>Alt</kbd> on Windows and <kbd>Option</kbd> on macOS are the same, unless they aren’t.
- There are [more Chromium browsers out there](https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium) than the ones I tested with.
- Chromium browsers might not all behave the same way, and this is by design.
- There are a lot of [non-Chromium browsers](https://www.zen-browser.app/) out there as well.
- People can, and do plug macOS keyboards into Windows machines and vice-versa.
- People can, and do plug keyboards into smartphones and tablets.
- People can, and do [override existing keyboard shortcuts with their own](https://www.theverge.com/2024/4/3/24119858/google-chromeos-chromebook-april-update-pixel-watch-phone-custom-keyboard-shortcuts).
- People can, and do create software macros to trigger keyboard shortcuts via hardware and software-based input.
- Hardware [keyboards can be emulated](https://docs.flipper.net/apps/controllers) as software.
- Keyboard input can be [injected via browser extensions](https://wcedmisten.fyi/post/keyboard-shortcuts-userscripts/).
- The most important keyboard is the one the person is currently using.
- The most important browser is the one the person is currently using.
- There are [more input mechanisms and modalities in heaven and earth](https://esoteric.codes/blog/bodyfuck-gestural-code), Horatio, than are dreamt of in your philosophy.

## Links do so, so many things

The other thing worth stressing here is that there’s no real way to artificially recreate the context menu functionality someone would expect when right clicking/long pressing/[keypressing](https://nerdschalk.com/how-to-right-click-with-keyboard-windows-11/).

<figure
  role="figure"
  aria-label="Note that these right click menu options are different for different browsers, that the native menu can exist outside the browser’s viewport, and that this sweatshirt is incredible.">
  <img
    role="img"
    alt="An Etsy listing for a blue sweatshirt that has the word 'Bucatini' written a white collegiate font on the front. The link to the seller's shop has been right clicked and a native menu is toggled opened. The menu contains actions you can take with the link, actions that the browser can take, and actions that third party extensions can take. The menu options are open link in new tab, open link in new window, open in InPrivate window, open link in split screen window, save link as, copy link, copy link text, search link text, read aloud from here, open selection in immersive reader, translate selection to English, add to collections, add to 1Password, copy clean link location, copy link to selected text, inspect with CSS Scan, list number of characters, open in Polypane, open link in this tab, rename tab, view file in new tab, VisBug, inspect dom node, and speech options. Screenshot of the Edge browser with one tab open."
    loading="lazy"
    src="{{ '/img/posts/basic-keyboard-shortcut-support-for-focused-links/link-right-click-menu.png' | url }}" />
  <figcaption>
    Note that these right click menu options are different for different browsers, that the native menu can exist outside the browser’s viewport, and that <a href="https://www.etsy.com/listing/1111658691/bucatini-crewneck-sweatshirt-pasta">this sweatshirt</a> is incredible.
  </figcaption>
</figure>

This context menu includes content the operating system and browser supply, and also third party extensions and modifications someone might install and rely on. I wish we had better options for this, but [I also wish browsers did a lot more to help people out](https://ericwbailey.website/published/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/#layer-seven).

## Use appropriate, semantic HTML whenever possible, I beg you

All of the previously documented behavior needs to be built in JavaScript, since we need to go the synthetic link route. It also means that it is code we need to set aside time and resources to maintain.

That also assumes that is even possible to recreate every expected feature in JavaScript, which is not true. It also leaves out the mental gymnastics required to make a business case for prioritizing engineering efforts to re-make each feature.

Hopefully, all of this helps to communicate **the value of using the proper native HTML element**. You get so much extra good stuff just by virtue of using it.

## Wrapping up

I don’t like writing these kinds of support tests because they’re:

- Tedious and effort-intensive,
- Sometimes out of date as soon as you publish it,
- Lead to some people getting weird ideas about free labor for similar efforts, and also
- Are as dry as [a toast sandwich](https://en.wikipedia.org/wiki/Toast_sandwich).

My job is oftentimes the exact opposite of glamorous. In this way this post is a glimpse of some of the day-to-day realities of the work.

