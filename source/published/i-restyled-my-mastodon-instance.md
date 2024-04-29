---
layout: "layouts/post.njk"
title: I restyled my Mastodon instance
source: ericwbailey.website
excerpt: "I am able to extensively modify my instance’s UI to suit my specific needs because of deliberate architectural decisions Mastodon’s maintainers have made"
date: 2023-11-27
year: 2023
tags:
  - CSS
  - Design
  - Development
  - Social Media
share:
  facebookDescription: "The Mastodon logo being used as a CSS selector, followed by an opening and closing curly braces."
  twitterDescription: "The Mastodon logo enclosing the opening and closing curly braces used for writign CSS."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 42
---

More than one thing can be true at the same time. For this post, it’s that:

1. Have recently felt a lack of control in many of aspects of my life,
1. I’m still technically a designer, and that
1. I like CSS a lot.

Because of this, I’ve found [a new worry stone](https://ethanmarcotte.com/wrote/let-a-website-be-a-worry-stone/): my [Mastodon instance](https://social.ericwbailey.website/explore). 

## Updated visuals

This is how my Mastodon instance used to look:

<img
  style="background-color: #f9fafb; padding: 0.75rem;"
  alt="Two screenshots showing the Mastodon UI for a logged-in account. The larger screenshot shows the experience for a wide screen. The narrower screen shows the experience for a narrow screen, and slightly overlaps the wider screenshot. The different columns of content are heavily visually reinforced with dark borders and alternating background colors. Different text inputs have different background colors. Icons are the same color as text, and avatars have square treatments. There are three Mastodon posts present in the wider screen image, one by Apple Annie, one by selfcare.tech, as boosted by hecks, and one by Mayank. Apple Annie's shares a link to their blog about diving into microformats. selfcare.tech's  reads, 'Change can be hard. Taking care of yourself is change that's worth the work.' Mayank's reads, 'lh/rlh  now in all three browsers 👀'. Only two of the posts fit in the narrow screen treatment due to a large header containing the Mastodon logo, a search button, and  a new post button."
  loading="lazy"
  src="{{ '/img/posts/i-restyled-my-mastodon-instance/mastodon-old.png' | url }}" />

And this is how it now looks:

<img
  style="background-color: #f9fafb; padding: 0.75rem;"
  alt="Two screenshots showing the Mastodon UI for a logged-in account. The larger screenshot shows the experience for a wide screen. The narrower screen shows the experience for a narrow screen, and slightly overlaps the wider screenshot. The different columns of content are less visually distinct because of light borders and the same background color for every column, leaving the site content itself to imply structure. Different text inputs now all use the same background color, which is the same as the column background color. Icons are now a lighter color than the text, and avatars have circle treatments. There are three Mastodon posts present in the wider screen image, one by Apple Annie, one by selfcare.tech, as boosted by hecks, and one by Mayank. Apple Annie's shares a link to their blog about diving into microformats. selfcare.tech's  reads, 'Change can be hard. Taking care of yourself is change that's worth the work.' Mayank's reads, 'lh/rlh  now in all three browsers 👀'. All three of the posts now fit in the narrow screen treatment due to a the large header being removed and the new post button being moved to the bottom right corner of the UI."
  loading="lazy"
  src="{{ '/img/posts/i-restyled-my-mastodon-instance/mastodon-new.png' | url }}" />

I used to use a [Stylus browser extension](https://add0n.com/stylus.html) to tweak the visuals of my Mastodon experience. For some unknown reason it stopped working. In going to fix it, I figured I could instead: 

1. Use an existing, baked-in instance feature,
1. Make the styling automatically work on any device that I log into, and also 
1. Turn what I see into what others can see. 

If you run a Mastodon instance you can tweak its CSS MySpace-style via a setting buried deep in Mastodon’s preferences. It is located in **Administration**, then the **Server Settings** subpage, then the **Appearance** category located within that.

<img
  alt="A webpage titled, 'Server settings'. There are six subnav options, which read, 'Branding', 'About', 'Registrations,' 'Discovery,' 'Content creation', and 'Appearance'. The Appearance option is active. Following is a subheading that reads, 'Customize Mastodon's web interface'. Within this subheading section are two labels. The first label is for a select menu and reads, 'Default theme'. Its corresponding select is set to, 'Mastodon (Light)'. The second label reads, 'Custom CSS'. Its corresponding input is a large text area where CSS code can be added. There are also primary navigation options present for other parts of the Mastodon admin interface, and a link to return to Mastodon's main timeline page. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/i-restyled-my-mastodon-instance/mastodon-appearance-server-settings.png' | url }}" />

## Let’s talk about code

[The CSS I wrote](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc) isn’t pretty. 

I’m sure I could dig through Mastodon’s source code, chase down [the higher-order logic](https://github.com/mastodon/mastodon/tree/main/app/javascript/styles), and then construct something more elegant. However, the tangled nest of selectors, comments, and `!important`s I wrote are good enough to get the job done. And that’s just fine for my immediate use case.

Specifically, [`:where()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)' ability to lump selectors together and affect their specificity does a lot of the heavy lifting. Namespaced, human-friendly [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) also help a lot, in that values now make a lot more sense when scaffolded across all these different co-opted selectors.

I’m sure I could also do some fancy things with [Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer), [CSS nesting](https://ishadeed.com/article/css-nesting/), and maybe eventually [`@scope`](https://keithjgrant.com/posts/2023/04/scoped-css-is-back/). But that is a not-right-now-problem.

### Archeology

It’s interesting to go spelunking in someone else’s code, and then try and reverse engineer the decisions that went into it.

One thing I immediately noticed is that Mastodon ships [Sass source maps](https://sass-lang.com/documentation/cli/dart-sass/#source-maps) to production, so you can see what declarations are coming from where. This, in turn, helps me construct a better picture of **how** they made what they made, as well as potentially **why** they made the choices they did.

It also has the hallmarks of a large open source project. There’s certain areas that feel like they’ve been developed in isolation, and other areas that feel like part of a larger, more organized vision. 

There’s also some interesting, slightly dated front-of-the frontend technical choices to contend with. An example is the boost button, which uses [a background image SVG data URI](https://css-tricks.com/data-uris/) to achieve its animation effect. Compare to the other post button icons, which use an icon font.

<figure
  role="figure"
  aria-label="Firefox’s developer inspector tooling is pretty great, if you haven’t checked it out lately.">
  <img
    alt="Firefox's inspector tooling highlighting an i element HTML node in Mastodon's source code. It shows CSS being applied to it, including a SVG data URI being applied to the i element as a background image. A mouse cursor is hovering over the data URI, showing the image's contents. The image is 11 frames of animation for the boost icon, implying Mastodon is using the background image's positioning to create an animation effect. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-restyled-my-mastodon-instance/firefox-inspector.png' | url }}" />
  <figcaption>
    Firefox’s developer inspector tooling is pretty great, if you haven’t checked it out lately.
  </figcaption>
</figure>

To get around this, I wound up having to use [a brightness filter](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L584) to ensure every icon—regardless of the technique used to generate it—gets the same visual treatment. 

This approach is a little hacky. It is also a great example of **CSS’ versatility and ability to work with other technology’s constraints** when wielded by an experienced practitioner. 

Another fun thing I do is conditionally making the post button into [a floating action button on smaller screens](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L325), and then [inject an icon into it](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L318):

<img
  alt="A small purple circle with a pen and paper icon in its center floating over a Mastodon post. The post is by Dwarf Fortress Bugs, posted one day ago. The post's body reads, '0011661: Necromancer marries zombie.'Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/i-restyled-my-mastodon-instance/floating-action-button.png' | url }}" />

## Let’s talk about choice

Mastodon chose a human-friendly, [BEM](https://getbem.com/introduction/)-style approach for its class names. They also chose to allow instance owners to be able to provide their own styling. 

These choices mean that I, as a consumer of their technology, can make modifications to their UI. It also means I can make these modifications with a relatively high degree of confidence.

```html
<!-- I'm pretty sure this class controls the account display name's appearance -->
<span class="display-name__account">…</span>
```

Compare this to services like Twitter, Bluesky, and Threads. The robot-friendly class names these services use prioritize code optimization. 

```html
<!-- Uhhh -->
<span class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3" style="text-overflow: unset;">…</span>
```

My options are a lot more limited as a consumer of these other technologies. 

Because of the choices these platforms made, I typically need to find an errant, more stable attribute declaration in the code instead. Then, the hope is that it provides enough of a surface area to modify what I need to (`aria-label` declarations are helpful here). 

[`has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) may also help out a lot when working upwards and outwards from an attribute selector, as well. Given its potential capability, I am honestly surprised it was greenlit as a standard in our current [anticompetitive](https://www.404media.co/youtube-says-new-5-second-video-load-delay-is-supposed-to-punish-ad-blockers-not-firefox-users/), [user-hostile](https://arstechnica.com/gadgets/2023/11/google-chrome-will-limit-ad-blockers-starting-june-2024/) environment.

### More than a coat of paint

I’ve made specific tweaks to Mastodon’s UI to reflect my own particular needs. I’ve [removed the bookmark button](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L571) from posts, as I don’t use that feature. Same for some other [primary navigation options, as well as notification banners](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L64) that refuse to stay dismissed.

I’ve also made some other adjustments to help how my brain likes to process this kind of visual information. 

One tweak is to [set a maximum width for post content and](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L701) a more legible (to me) line height. Another is to visually de-emphasize secondary content such as [timestamps](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L601) and [the hashtag bar](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L712) so as to call better attention to actual post content. 

I also made more sweeping layout adjustments that work in conjunction with these smaller modifications. This creates what I consider a more minimal and harmonious overall experience, one that aids in my reading and comprehension.

In this way, [my CSS is an interface](https://ericwbailey.website/published/your-css-is-an-interface/). 

I am able to extensively modify my instance’s UI to suit my specific needs because of **deliberate architectural decisions** Mastodon’s maintainers have made. Anyone else with enough time, dedication, and knowledge can do the same. And that’s pretty damn cool.

### Couldn’t you have just used Elk?

[Elk](https://github.com/elk-zone/elk) is an alternate client service for Mastodon. My visual styling choices look a lot like many, but not all of the choices that they have made.

I also wanted to remove some complication and mental overhead from my social media efforts. Occasionally updating a stylesheet I control is a lot less work and risk surface area than managing an entirely separate client. 

Other people might be into doing this sort of thing, and that’s totally fine! It’s just not for me.

## What if I don’t run my own instance?

You can install [Stylus](https://add0n.com/stylus.html), dump [the code I wrote into it](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc), scope the style block to your instance’s URL, and then let the browser extension work its magic.

<img
  alt="Stylus' Add Style interface. A block of code shows a truncated list of CSS custom properties scoped to the root selector. After the code block is a select set to URLs on the domain, followed by an input that has been set to mastodon dot social. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/i-restyled-my-mastodon-instance/stylus.png' | url }}" />

You can also tweak the code I wrote. I might suggest playing around with [the Custom Property values](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc#file-mastodon-css-L1) first, and see how that affects things. Again, I’d like to re-stress that the ability to do this is one of the strengths of the web.

## Why is this saved in a Gist?

The reason this code is saved in a Gist and not a full-blown project repository is that I’m not really interested in supporting issues or enhancements. 

I’ve got enough on my plate already, and turning this effort an unpaid part time job is not a priority. I think this is also totally fine, despite some folks’ weird notions around demanding free labor from others.

## But, I’m fine with the Mastodon UI the way it is!

Cool. I’m happy it works for what you need!

## Are you aware you made it look like Twitter? Mastodon isn’t Twitter!

I’m aware!

## So, are you suggesting that open source projects need to consider usability in addition to technology in order to gain more widespread adoption?

I’m not not saying that!

## Are you also implying that an industry-wide devaluation of a core part of the web platform, combined with unnecessary over abstraction of other areas may indirectly lead to artificially limiting people’s agency?

Heavens! I don’t know where you’re [getting that from](https://thoughtbot.com/blog/tailwind-and-the-femininity-of-css).

## Are you interpreting these rhetorical questions as a signal to strike up a debate, despite no explicit signal from me that I want to participate such an activity?

Maybe you could blog about it instead!

## Is the previous preemptive positioning endemic to larger cultural issues with the platform?

[Perhaps](https://blog.joinmastodon.org/2023/11/improving-the-quality-of-conversations-on-mastodon/)!

## Well, then where will you go from here?

I’m mostly done creating and editing these styles. 

If there’s [a significant change to the Mastodon UI](https://joinmastodon.org/roadmap) I’ll likely update [the Gist](https://gist.github.com/ericwbailey/dab7fa46fc03beaa011abc5864a49ddc) to accommodate it. Until then it might get a nudge here or a tweak there, but probably nothing major.

I might also encourage you to think about the web experiences you use every day, the choices the people who make them made, the choices you make in interacting with their choices, and the agency you have as an individual to do something about it.

