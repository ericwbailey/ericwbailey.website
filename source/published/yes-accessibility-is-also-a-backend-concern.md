---
layout: "layouts/post.njk"
title: "Yes, accessibility is also a backend concern"
source: ericwbailey.website
excerpt: "Accessibility is a holistic practice that touches every aspect of creating a digital experience. This means it is also a backend web development consideration"
date: 2022-09-29
year: 2022
tags:
  - Accessibility
  - Development
attribution: "Thank you to <a href='https://edwardloveall.com/'>Edward</a> and <a href='https://www.amandabeiner.com/'>Amanda</a> for their input."
sharedOn:
  twitter: TK
  mastodon: TK
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 18
---

There is a prevailing notion in web development that the frontend—the discipline of creating what someone can see and do on a website or web app—is the only place you need to consider accessibility.

This simply isn’t true. Accessibility is a holistic practice that touches every aspect of creating a digital experience. This means it is also a backend web development consideration.

## What is backend development?

If you are unfamiliar, backend web development is the practice of structuring, capturing, and processing information a website or web app sends and receives.

Typical backend web developer tools are databases, server management software, APIs, and supporting applications. Most, but not all of their work intersects with frontend web development and design concerns.

Backend developers wield a tremendous amount of power, as they help shape the underlying structure of what is and is not possible when creating a digital experience.

## Backend accessibility

I assure you, it is a thing.

Part of backend stewardship means having a plan and being mindful of what content is stored by your website or web app, and how it will ultimately be delivered to the frontend. Here are some forms of content you should be considering:

### Alternate descriptions

In a mature system, handling images is a lot more than just slapping an `img` element on a page. There are a ton of parameters you should be considering, to the point where there are paid services to help you with this.

One of the parameters you should be planning for with images is how you store their alternate descriptions.

Broadly-speaking there are two kinds of images you can add to a website or web app:

1. Images placed directly in code by the people developing the experience, and
1. Images placed via authors using a content management system (<abbr>CMS</abbr>).

For images placed directly in code, alternate descriptions are provided by a developer manually typing in an `alt` attribute and descriptive value. For a CMS, the alternate description is presented as one of a few form fields that need to be filled out (image upload, height/width, alignment, and link are all common options).

While you cannot guarantee that the description itself is accurate, you should be programmatically communicating that a CMS’s alternate description is top-level priority for image content. This manifests as how you structure your APIs, as well as your content management system UI.

### Character sets and language codes

Does your content use more than one language? If it doesn’t, it most likely will at some point.

Programmatically identifying the languages your experience uses is an important thing to do. Assistive technology such as screen readers look for this information in order to announce content accurately.

<div class="centered-media-outer">
  <img
    role="img"
    class="centered-media-inner-3"
    alt="A block of HTML with an lang attribute declaration on the HTML opening tag and a value of 'es'. The title of the page, placed in between an opening and closing title tag is 'Sobre nosotras'."
    src="{{ '/img/posts/yes-accessibility-is-also-a-backend-concern/lang-code.svg' | url }}">
</div>

### Captions, transcripts, and audio descriptions

Do you have audio or video? You’re going to need a way to communicate their content to folks to can’t hear it or see it.

### Documentation

Other developers will need to know how to use the services you provide, and with that comes the need to write things down.

Good documentation makes your backend services more—ahem—accessible to those who are looking to work with them. Good documentation is also disability-friendly. You’ll want to do things like use clear, logical heading structures, predictable information architecture, and plain language.

A lot of documentation services use Markdown, as well. If yours does, I might suggest studying up on [this primer to writing accessible Markdown](https://www.smashingmagazine.com/2021/09/improving-accessibility-of-markdown/) I wrote.

### “Invisible” content

Three of these concerns are:

1. [The `iframe` title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility_concerns) used to describe its embedded content,
1. Visually hidden headings used for better screen reader wayfinding, and
1. Visually hidden portions of an interactive control.

You’ll want to capture and quantify these three distinct forms of content, provided there is a content management system of some sort in play.

<figure
  role="figure"
  aria-label="I’m sorry about the crappy auto-translation.">
  <div class="centered-media-outer">
    <picture class="centered-media-inner-3">
      <source
        media="(prefers-color-scheme: dark)"
        srcset="{{ '/img/posts/yes-accessibility-is-also-a-backend-concern/partially-hidden-on-dark.svg' | url }}">
      <img
        role="img"
        alt="A simulated CMS content entry widget for a card component. There are inputs for the hero image, then the description and call to action in English and Spanish."
        src="{{ '/img/posts/yes-accessibility-is-also-a-backend-concern/partially-hidden-on-light.svg' | url }}">
    </picture>
  </div>
  <figcaption>
    I’m sorry about the crappy auto-translation.
  </figcaption>
</figure>

This is important if localization is present, especially for partially visually hidden content. A different language may have a different structure to its grammar, meaning the visually hidden words may change position in the translated phrase.


## Dashboards and other apps with GUIs

There are a lot of products that help you manage your backend concerns via a website or web app  Dashboards come immediately to mind, as well as configuration management solutions. Some may be made internally, while others may be a third party offering.

If the product is made in-house, consider doing [a cursory check](https://www.a11yproject.com/checklist/) of your workflows to see what access barriers are present.

If you are shopping around for a service, ask for a [Voluntary Product Accessibility Template (<abbr>VPAT</abbr>)](https://en.wikipedia.org/wiki/Voluntary_Product_Accessibility_Template). If the vendor has one, that’s probably a good first step. If they don’t, know that the more people requesting them means the more it encourages the industry to take accessibility seriously as a concern.

## Don’t forget about command line applications

You might think that command line interfaces (<abbr>CLIs</abbr>) would be accessible out of the box, given that they only use text. You might also be mistaken.

As a primer, accessible CLI applications should:

- Have [a predictable structure](https://nullprogram.com/blog/2020/08/01/) for flags, options, and arguments,
- Honor existing, [known CLI interaction patterns](https://tatref.github.io/blog/2020-posix-conventions/),
- Clearly communicate text entry position after entering verbose commands with a lot of output, where a screen reader’s focus may move away without someone realizing it,
- Cut down on redundant and repetitive phrases (ex: multiple reported errors where each line starts with `ERR:`),
- Provide shortcut letters/numbers for option selection in addition to an arrow (ex: `>`), and
- Eschew from using panels, text-based charts and graphics, visually-aligned columns, as well as too much emoji.

If you need to write custom CLI applications for your organization, honoring these guidelines helps to ensure access. I might also suggest auditing any current CLI tools your organization uses, as well.

## Don’t forget that people make software

Bodies are fragile. Disability can be conditional.

Disabled engineers—including backend engineers—exist. You’d do well to help make their job as free of arbitrary access barriers and access friction as possible.

Disability is also the one marginalized group everyone will age into, provided they don’t die young. Stress has deleterious effects on a body, and [many organizations are trauma-generating factories](https://hbr.org/2022/06/stressed-sad-and-anxious-a-snapshot-of-the-global-workforce). This is to say nothing of the mass-disabling pandemic we are all trying to survive.

When you consider how accessibility factors into backend development, I challenge you to think about your current relationship to disability, and what your future relationship should be.

## Stewardship

Hopefully, with this myth debunked you are now empowered to improve the accessibility for both the digital experience you help maintain, as well as the experiences of your fellow coworkers.

