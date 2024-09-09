---
layout: "layouts/post.njk"
title: a11y-syntax-highlighting has been updated
source: ericwbailey.website
excerpt: "Code syntax highlighting themes need to meet minimum color contrast values"
date: 2024-09-09
year: 2024
tags:
  - Accessibility
  - Color
  - CSS
  - Development
  - Personal
  - User Queries
share:
  facebookDescription: "Some boilerplate HTML code showing a content contained within the document's head element. It uses a dark background, with ligher text. Screenshot."
  twitterDescription: "The letters 'a11y' arranged in a square shape. It uses a dark background, with ligher text."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 59
---

I created the [a11y-syntax-highlighting library](https://github.com/ericwbailey/a11y-syntax-highlighting) seven years ago, forked from [xiaozi’s solarized-prism-theme](https://github.com/xiaozi/solarized-prism-theme) for [PrismJS](https://prismjs.com/).

<img
  alt="Some boilerplate HTML code showing a content contained within the document's head element. It uses a dark background, with ligher text. Screenshot."
  loading="lazy"
  src="{{ '/img/posts/a11y-syntax-highlighting-has-been-updated/a11y-dark.png' | url }}" />

To not bury the lede, [the new update](https://github.com/ericwbailey/a11y-syntax-highlighting/releases):

- Supports [Forced Colors mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors),
- Is encapsulated in a [Cascade Layer](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers),
- Uses [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*),
- Groups its selectors using the [`:where()` pseudo-class function](https://developer.mozilla.org/en-US/docs/Web/CSS/:where), and
- Normalizes color value declarations to all use [`hsla` notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl).

It also offers options for supporting [Operating System dark and light color modes](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme):

- For a dark code background color for dark mode and light code background color for light mode, use `a11y-light-on-light-dark-on-dark.css`.
- For a dark code background color for light mode and a light code background color for dark mode, use `a11y-dark-on-light-light-on-dark.css`.

There are also standalone dark and light code background offerings that do not adapt when the OS mode changes. These stylesheets are called `a11y-dark.css` and `a11y-light.css`.

## Background

The project was started in response to a question [Michael Ball](https://mball.co/) asked on [the web-a11y Slack](https://web-a11y.slack.com/) instance. He was asking if [SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) applies to code syntax highlighting themes.

**The answer is yes**. Code syntax highlighting themes need to meet minimum color contrast values to be conformant.

I then realized there weren’t a lot of syntax highlighting themes that were fully conformant. Many of them fell apart with the colors they use for comments.

I understand that there may be a desire for code comments to look less visually emphasized. However, code comment color—like all other text content—still needs to be able to be read.

Naming the problem means owning the solution. Because of this, I created the library to address this gap in support.

I also put a lot of effort into selecting color values that did more than just conform. **Accessible experiences can be beautiful experiences**, and I wanted this to reflect that.

I initially targeted the [PrismJS](https://prismjs.com/) project because of its popularity. [highlight.js](https://highlightjs.org/) support soon followed. I also added [themes for Carbon](https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false), as sharing images of your code on social media is apparently something people like to do.

While doing this work, I also realized I could also support [Windows High Contrast Mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696#WindowsVersion=Windows_10). I haven’t encountered any other syntax highlighting theme that does this, so I wanted to offer an option.

<img
  alt="Some boilerplate HTML code showing a content contained within the document's head element. It has successfully responded to a Forced Color mode theme being applied to it, with some of the the theme's color keywords being used for syntax highlighting. Screenshot."
  loading="lazy"
  src="{{ '/img/posts/a11y-syntax-highlighting-has-been-updated/a11y-forced-colors.png' | url }}" />

## Putting it all out there

I’m always pleasantly surprised to see other people use the theme when browsing the web, and was floored when [the W3C Design System](https://design-system.w3.org/) adopted it.

I also love that folks contribute to the project to make it even better. I’d specifically like to give kudos to [Reuben L. Lillie](https://reubenlillie.com/) for [Vim support](https://github.com/ericwbailey/a11y-syntax-highlighting/tree/main/dist/vim).

Another person I’d like to thank is [Elly Loel](https://www.ellyloel.com/). She [opened an issue](https://github.com/ericwbailey/a11y-syntax-highlighting/issues/6) asking about support for the more contemporary, standards-based Forced Colors media feature.

It took me longer than I’d care to admit, but the latest release of the library address her issue, plus a lot more!

I could lie and say it was me [waiting for more broad browser support](https://css-tricks.com/evergreen-does-not-mean-immediately-available/). However, the real answer is [last year’s events took a lot out of me](https://ericwbailey.website/published/modern-health-frameworks-performance-and-harm/).

I’m in a better place now. This update is an output of the effort I’ve been taking to take better care of my physical and emotional health.

We often forget that there are human beings at the other end of the software we use. It’s a fact that I hope you keep in mind the next time you go to file an issue. To that point, I’d like to thank Elly again for her patience and grace.

## More about the updates

CSS has gotten really good as of late. I’d like to talk a little more about the newer features of the language that I used, because I feel it’s worth giving them more attention:

### Cascade Layers

PrismJS uses very generic class names like `token` and `number`. This isn’t necessarily a bad thing, but it does mean style leakage could happen via class name collisions.

Putting the styling instructions for this library inside a [Cascade Layer](https://css-tricks.com/css-cascade-layers/) means this issue could be more easily dealt with, should it occur on your site.

### `:where()`

Using `:where()` makes a lot of sense for grouping selectors. It also keeps the specificity lower, should you need to do additional styling work. This means less [tricks and nasty hacks](https://cirrus.twiddles.com/blog/2024/08/21/double-your-specificity-with-this-one-weird-trick/), which means code that’s easier to maintain.

### CSS Custom Properties

The themes’ colors and measurements are also more easy to manipulate to better work for your content’s visual needs. A good example here would be overriding `--prism-a11y-font-family`’s value to use whatever font you use for your website.

Additionally, Forced Color Mode works beautifully with CSS Custom Properties. I wrote [more about the technique for Smashing Magazine](https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/), if you’re interested.

### `hsla()`
Being able to use transparency was helpful for supporting [PrismJS’ line highlight plugin](https://prismjs.com/plugins/line-highlight/). I’m also hoping I can thread [relative color functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) in down the line when support gets more widespread.

## Where I’d like to take this project next

Speaking of what’s coming down the line, I’ve revamped [the roadmap](https://github.com/ericwbailey/a11y-syntax-highlighting?tab=readme-ov-file#roadmap).

The only thing I’m going to focus on now is a [Microsoft Visual Studio Code](https://code.visualstudio.com/) theme. I’m only going to do that if there’s expressed interest, however.

Cleaning up the old roadmap also removed a lot of obligations I created for myself—I now realize that they were contributing unnecessary background stress and guilt.

The other thing I’m ambiently curious about is [GlyphDrawing.Club](https://blog.glyphdrawing.club/)’s magical [Font with Built-In Syntax Highlighting](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/). I’m not going to try and create a whole new typeface from scratch, however.

I’m also open to supporting other popular syntax highlighting libraries if enough interest is expressed. External contributions are welcome, if you’re willing to put in the effort.

## Here’s to seven more years

It’s been a little bit of a trip to reflect on who I was when I started this project, and where I’m at now. To that point, I’m curious to see where the project will go from here.

To that point, let me know if you use the theme for your project! I’d love to [include your site on the README](https://github.com/ericwbailey/a11y-syntax-highlighting?tab=readme-ov-file#used-by).
