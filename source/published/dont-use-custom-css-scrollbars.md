---
layout: "layouts/post.njk"
title: Don’t use custom CSS scrollbars
source: ericwbailey.website
excerpt: "While a custom CSS scrollbar may seem flashy and fun, consider that it may present a significant, unnecessary barrier to access"
date: 2023-05-03
year: 2023
tags:
  - Accessibility
  - Assistive Technology
  - CSS
  - Design
  - Development
  - Inclusion
  - User Queries
sharedOn:
  twitter: TK
  mastodon: TK
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 28
---

In the spirit of “[everything old is new again](https://www.hongkiat.com/blog/css-scroll-bar/),” browsers are once again supporting the ability to style [the scrollbar](https://scrollbars.matoseb.com/). Much like [custom CSS mouse cursors](https://ericwbailey.website/published/dont-use-custom-css-mouse-cursors/), I feel this is also a mistake.

When you style things on the web, you get control over almost the entire experience. From ten thousand feet up, your scope of concern is this:

<img
  alt="A simplified illustration of a web browser. The inner content area is highlighted to draw attention to it."
  role="img"
  loading="lazy"
  src="{{ '/img/posts/dont-use-custom-css-scrollbars/browser-content-area.png' | url }}" />

The scope of concern for the browser is this:

<img
  alt="A simplified illustration of a web browser. The URL entry area, tabs, back and forward buttons, and scrollbar are highlighted to draw attention to them."
  role="img"
  loading="lazy"
  src="{{ '/img/posts/dont-use-custom-css-scrollbars/browser-chrome-area.png' | url }}" />

The browser’s UI is informed by the operating system it is installed on. This is important to note. Browser UI is used to help create consistency across the entire experience of using a device. When you deviate from these standards, you introduce ambiguity.

Ambiguity means less certainty about what the piece of UI is, how you interact with it, and what effects taking action on it will cause. The more you deviate, the more confusing things get. It’s why checkboxes use squares and radio buttons use circles—even with [flat design](https://en.wikipedia.org/wiki/Flat_design) removing depth and texture from everything.

We may be long-separated from [car dashboards using physical press knobs](https://scribe.rip/radio-buttons-ux-design-588e5c0a50dc#6500), swapped out in favor of [dangerous, inefficient touchscreens](https://arstechnica.com/cars/2022/08/yes-touchscreens-really-are-worse-than-buttons-in-cars-study-finds/). However, the metaphors drawn from these physical equivalents still persist.

## Scope of concern

Scrollbars are part of the area of the browser that is outside your scope of concern.

Some may argue with this and claim that being allowed to style them with CSS means that it is fair game. However, I think there are some accessibility considerations that were not taken into account before this capability was given to us by the platform.

## Questions to ask yourself before customizing your scrollbars

Following are a list of questions you should ask yourself if you’re considering modifying your scrollbar’s visuals.

### The control

For reference, this CodePen is what I used to perform my testing:

<p class="hide-visually">
  <a href="#skip-codepen">
    Skip CodePen embed
  </a>
</p>
<iframe height="600" style="width: 100%; height: 400px;" scrolling="no" title="CodePen: Custom CSS scrollbar" src="https://codepen.io/ericwbailey/embed/VwGGaJO?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ericwbailey/pen/VwGGaJO">
  Custom CSS scrollbar</a> by Eric Bailey (<a href="https://codepen.io/ericwbailey">@ericwbailey</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<span id="skip-codepen"></span>

### Can your branding succeed without scrollbars being customized?

Custom scrollbars, like custom mouse cursors, can styled to help reinforce the branding of a website or web app. Just because you can, however, does not mean you should.

Ask any successful marketing agency—branding is so much more than how something looks. You probably need to find a new brand strategy if your entire outreach efforts depend on a scrollbar’s appearance.

### Do you need to make someone download that extra data?

Spoilers: you don’t. Scrollbars work without CSS.

You might be scoffing at the kilobytes this removal represents, but when it comes to web performance, every little bit counts. Through the ruthless lens of performance optimization, this is unnecessary data to force someone to download.

Network throttling, metered data plans, dead zones, and many other factors beyond your control are all forces you need to contend with. Better to prioritize sending styling information for your website or web app’s actual surface area.

### Will your custom scrollbar colors pass color contrast?

If someone can’t see something, they won’t know it is there. If they don’t know it is there, they won’t take action on it. It’s as simple as that.

#### A history lesson

Apple learned the lesson about visible scrollbars the hard way when it introduced its ultra-minimal, disappearing scrollbar indicators:

<figure
  role="figure"
  aria-label="macOS Finder.">
  <img
    alt="A list of text files in macOS Finder. There are 14 visible files, with filenames counting sequentially up from 01.txt to 14.txt. The files are arranged in a grid of four columns and four rows, and the last two positons on the bottom right are empty. This makes it appear like it is the end of the list of files. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/macos-file-list.png' | url }}" />
  <figcaption>
    macOS Finder.
  </figcaption>
</figure>

There’s no visual indication that there’s more content present in this window—the only way to discover it is to scroll downwards. However, without an affordance to indicate the presence of additional offscreen content, the chances are low that someone will bother to check.

<picture>
  <source srcset="{{ '/img/posts/dont-use-custom-css-scrollbars/macos-file-list-scrolling.webm' | url }}">
  <img
    alt="The same list of files in a Finder window as the previous image. This time there is a slow downward scrolling action and a scrollbar reactively appears. Files 15 through 42 are then revealed from the bottom of the Finder window's viewport, continuing the grid. Once the scrollbar reaches the bottom of the available content area there is a slight bouncing effect to comminicate the end of the content. After reaching the bottom there is another, faster scrolling action to return back to the top, with the same subtle bouncing effect at the top of the available content area. After reaching the top the scrollbar fades back to being invisible."
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/macos-file-list-scrolling.gif' | url }}">
</picture>

This is why Apple introduced a preference to [always show scroll bars](https://support.apple.com/guide/mac-help/change-appearance-settings-mchlp1225/mac). Think of this a lot like their [introduction of the reduced motion accessibility toggle](https://www.theguardian.com/technology/2013/sep/27/ios-7-motion-sickness-nausea), where a setting had to be introduced after the general public revealed that their novel idea actually made things worse for a lot of people.

<figure
  role="figure"
  aria-label="Windows 11 Accessibility Settings."
  <img
    alt="Two radio group preference panel options. The first radio group has a title of, 'Show scroll bars', with the 'Always' option selected. The other two unselected radio options in this group are 'Automatically based on mouse or trackpad' and 'When scrolling'. The second radio group has a title of, 'Click in the scroll bar to', with the 'Jump to the spots that's clicked' option selected. The other unselected option is, 'Jump to the next page'. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/always-show-scrollbars-macos.png' | url }}" />
  <figcaption>
    macOS Appearance System Settings.
  </figcaption>
</figure>

Windows followed this path blazed by Apple, and also had to [set up their own preference](https://www.howtogeek.com/742727/how-to-always-show-scrollbars-in-windows-11/) to deal with this issue:

<figure
  role="figure"
  aria-label="Windows 11 Accessibility Settings.">
  <img
    alt="A Windows 11 settings panel subsection. The title of the panel is 'Accessibility > Visual Effects'. There are four options present, the first three with a switch control and last with a dropdown. The first option is titled, 'Always show scrollbars'. The second option is titled, 'Transparency effects'. The third option is titled, 'Animation effects'. The fourth option is titled, 'Dismiss notifcations after this amount of time'. All three switches are set to the on position, including the option to always show scrollbars. The dismiss notifications option is set to 5 seconds. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/always-show-scrollbars-windows.png' | url }}" />
  <figcaption>
    Windows 11 Accessibility Settings.
  </figcaption>
</figure>

As an aside, I set the operating systems I use to always show scroll bars. It’s a good way to help uncover, debug, and remove overflow issues in your CSS. It’s also a great way to get irritated by people who don’t.

#### WCAG

If you modify the Operating System scrollbar’s appearance, it is now on you to ensure that it meets [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) criteria. This criteria includes minimum viable color contrast.

Specifically, the immediate concern is [Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html). This criterion is level AA, which is the typical level most websites and web apps target, and is not a specialized concern.

I’m not going to get into the particulars of how to meet this success criterion this since I don’t think you should be modifying the scroll bar’s appearance in the first place. That said, you’re now aware it’s an issue so you can’t claim ignorance.

### Will your custom scrollbar colors defer to a user-set theme?

Windows 11’s shiny new UI is [another coat of paint slathered over previous editions](https://ntdotdev.wordpress.com/2023/01/01/state-of-the-windows-how-many-layers-of-ui-inconsistencies-are-in-windows-11/). As you peel back these layers, you find the UI and functionality of past Windows editions.

One of these older features with a new coat of paint is the ability to theme Windows. Themes allow you to specify the wallpaper, sounds, accent color, mouse cursor, and other qualities and quickly swap them into pace.

Themes are also portable, and can be stored and shared as `.theme` or `.themepack` formats. [Windows offers its own official themes](https://support.microsoft.com/en-us/windows/desktop-themes-94880287-6046-1d35-6d2f-35dee759701e). There are also [websites that aggregate, categorize, and share themes](https://themepack.me/) people have made.

Some Windows Themes adjust the scrollbar’s colors. From my testing, custom CSS scrollbar styling overrides this:

<figure
  role="figure"
  aria-label="Grey Eve Skin applied to Windows 11 running Microsoft Edge.">
  <img
    alt="Microsoft Edge with a tab open to a CodePen set the display opening text to The Great Gatsby. The browser window is not maximized, to show the surrounding Windows 11 desktop. The browser, its CodePen contents, and the Windows 11 background and surrounding UI chrome are all set to a dark gray color with a pale blue accent color. This creates a sedate, uniform visual effect. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/windows-11-theme-grey-eve.png' | url }}" />
  <figcaption>
    <a href="https://themepack.me/skin/grey-eve/">Grey Eve Skin</a> applied to Windows 11 running Microsoft Edge.
  </figcaption>
</figure>

If I could wager a guess, it’s likely that theme colors tie into Forced Color mode concerns behind the scenes (more on this in a bit). The mechanism this is accomplished is immaterial to the overall point: Your decision to adjust the scrollbar is overriding someone else’s explicit preference.

We also don’t know <em>why</em> someone is changing their theme. For some, it could be aesthetic sensibilities. For others, it could be adjusting things to lessen/increase contrast, or create more uniformity. It might even be a combination of the previous.

While [this sort of OS customization used to be more popular](https://www.deviantart.com/tag/windows7themes), it is still supported by Windows and likely has tens or hundreds of thousands of people using the feature. When it comes to accessibility, it’s also a terrible idea to make deciding who and what to support a popularity contest.

Customizations like this are deeply personal. They might be for:

- Access reasons,
- Personal aesthetic preferences, or
- A combination of both.

When you override this expression, you’re indirectly communicating that someone’s personal preferences are less important than your own visual sensibilities.

You also can’t detect the presence of a Windows theme via CSS or JavaScript. This means you can’t conditionally remove custom CSS scrollbar styling. Again, better to proactively accommodate and not modify the scrollbars in the first place.

### Will your custom scrollbar colors honor specialized display modes?

I have some bad news for you.

In the continuing theme of “you own responsibility for it if you modify it,” there are two important truths you need to learn:

1. Scrollbars modified by CSS don’t automatically adapt to honor specialized display modes, and
2. Every custom scrollbar CSS generator tool I evaluated didn’t include code to accommodate this.

It’s worth directly stating that these display modes are highly personal customizations. This includes avoiding experiencing pain or discomfort, all the way to the feature being the one thing that makes using a device actually viable.

The affected modes are:

#### Forced Colors mode/Windows High Contrast mode

Forced Colors mode [replaces all colors on the Operating System with a palette chosen by the person using it](https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/#high-contrast-mode). It can be used to increase the contrast to a level that works for someone with low vision, or decrease the contrast so visuals are less vibrant and more uniform.

Modifying the scrollbar via CSS means the scrollbar will effectively disappear when a Forced Color mode theme is applied. Again, if you can’t see it, you won’t know it’s there.

<figure
  role="figure"
  aria-label="Windows 10 running Edge with the High Contrast #2 theme enabled.">
  <img
    alt="Microsoft Edge with a tab open to a CodePen set the display opening text to The Great Gatsby. The background of the webpage and the browser chrome is black and the type is bright green. A blue highlight color is used for borders and accents. The scrollbar is missing. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/forced-colors-mode.png' | url }}" />
  <figcaption>
    Windows 10 running Edge with the High Contrast #2 theme enabled.
  </figcaption>
</figure>

#### Increased Contrast mode

macOS and iOS support the ability to [create more visual distinction between different parts of the Operating System UI](https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/#increased-contrast-mode). This is separate from Forced Colors mode/Windows High Contrast mode.

Curiously, the border that separates the scrollbar from the content in Finder is exempt:

<figure
  role="figure"
  aria-label="macOS Finder with Increased Contrast mode enabled.">
  <img
    alt="A macOS Finder window. Borders and buttons are outlined in stark black in a way that obviously demarcates the overall content areas. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/increased-contrast-mode-finder.png' | url }}" />
  <figcaption>
    macOS Finder with Increased Contrast mode enabled.
  </figcaption>
</figure>

Non-Chromium browsers (Safari and Firefox) will apply a higher contrast scrollbar treatment when Increased Contrast Mode is active. It may require a refresh to trigger.

<figure
  role="figure"
  aria-label="macOS running Firefox with Increased Contrast mode enabled. The webpage’s scrollbar has not been modified by CSS.">
  <img
    alt="Firefox with a tab open to a CodePen set the display opening text to The Great Gatsby. The CodePen's tab is outlined using the same stark black outline as Finder does in the previous image. The unstyled scrollbar has a dark gutter and lighter gray thumb area, which helps it stand out. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/increased-contrast-mode-firefox.png' | url }}" />
  <figcaption>
    macOS running Firefox with Increased Contrast mode enabled. The webpage’s scrollbar has not been modified by CSS.
  </figcaption>
</figure>

Much like with Forced Colors Mode, custom CSS scrollbars will not honor the presence of an enabled Increased Contrast Mode.

<figure
  role="figure"
  aria-label="macOS running Safari with Increased Contrast mode enabled. The webpage’s scrollbar has been modified by CSS.">
  <img
    alt="Safari with a tab open to a CodePen set the display opening text to The Great Gatsby. Safari's browser chrome is outlined to make all its controls more obvious. The styled scrollbar remains unaffected by the application of this display mode. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/increased-contrast-mode-safari.png' | url }}" />
  <figcaption>
    macOS running Safari with Increased Contrast mode enabled. The webpage’s scrollbar has been modified by CSS.
  </figcaption>
</figure>

Considering that the entire reason for increased contrast mode’s existence is to create more obvious and defined sections of UI, you want to preserve this predictability.

#### What about inverted colors mode, filtered colors display mode, and reader mode?

I am happy to report that these modes gleefully accommodate or ignore your custom scrollbar CSS and do their thing.

It’s still worth mentioning these modes here, in that they are often overlooked by people when creating digital experiences. You don’t need to create a suite of bespoke treatments for these modes. On the contrary, you can do more by doing less by not touching the scrollbar’s appearance.

### Is the touch target area large enough?

Again: If you modify the operating system defaults, you take on the responsibility of owning it.

#### Too narrow

There is nothing stopping you from making a scrollbar `1px` wide. Or `0.5px`. Or `0.025rem`. Or any of the other minuscule widths I tested.

<figure
  role="figure"
  aria-label="The webpage’s scrollbar has been modified by CSS and had its width set to 1px.">
  <img
    alt="Safari with a tab open to a CodePen set the display opening text to The Great Gatsby. The scrollbar has a hairline width that is just barely perceivable. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/narrow-scrollbar.png' | url }}" />
  <figcaption>
    The webpage’s scrollbar has been modified by CSS and had its width set to <code>1px</code>.
  </figcaption>
</figure>

No automatic guardrails are present to prevent someone from making a scrollbar so narrow that it can be next-to-impossible to click on. I shouldn’t have to list out all the reasons why this is an issue.

Yes, people can override this override with extensions such as [Stylus](https://add0n.com/stylus.html), but that presupposes that people have:

- The awareness of these kinds of resources,
- Devices capable of using them,
- The technical expertise needed to undo the modifications, and
- The stamina to sustain this for every website and web app that does this.

The browser does not have your back here. There are no controls, preferences, or other buried features I’m aware of that can tackle this issue. Browsers have a ton of work to do in this sort of area, but [it is simply not a priority](https://webwewant.fyi/wants/).

#### Modifying the operating system scrollbar width

Windows lets you globally adjust the scrollbar width [via modification of a registry value](https://www.makeuseof.com/windows-10-11-customize-scrollbars/). It affects any and all applications that use operating system scrollbars, including browsers you have installed.

<figure
  role="figure"
  aria-label="Chrome running on Windows 10 with a modified operating system scrollbar width.">
  <img
    alt="Chrime with a tab open to a CodePen set the display opening text to The Great Gatsby. The scrollbar's width takes up about 10% of the screen. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/dont-use-custom-css-scrollbars/operating-system-scrollbar-width.png' | url }}" />
  <figcaption>
    Chrome running on Windows 10 with a modified operating system scrollbar width.
  </figcaption>
</figure>

I’m pretty sure macOS does not let you do this, either via its UI or its large collection of [hidden terminal commands](https://git.herrbischoff.com/awesome-macos-command-line/about/). Linux is a bit of a big question mark to me, in that there are so many different variants out there that I’m sure it’s possible from a sheer probability perspective.

It’s also worth noting that [Windows is incredibly popular](https://gs.statcounter.com/os-market-share/desktop/worldwide), despite most of contemporary web development being done on macOS. We often tend to forget that.

#### Not my width

While being able to adjust the scrollbar’s width via CSS may increase the touch target size to generous proportions, it might not be enough.

Without knowing what a person has adjusted their scrollbar width to, your override to their customization may reduce its interactive area to a size that is too small to meet their needs. This means they cannot scroll.

#### Solutioneering

A Windows registry modification is a pretty esoteric technique. However, the point is not that it is difficult to do. The point is that people do it to get what they need, and we should honor that.

Hypothetically speaking, you could try querying the scrollbar width, capture that, and inject it into a CSS custom property using JavaScript to control your scrollbar width. However, if you are picking up one of the big beats from this post, it’s that maybe you should write less code and in doing so allow more people do more things.

[JavaScript is fragile](https://scribe.rip/@jason.godesky/when-javascript-fails-52eef47e90db). Data is precious. Vanity is almost always at odds with user needs.

I am exhausted by people thinking they’re clever and trying to solutioneer their way around access issues by creating even more brittle and discriminatory problems masquerading as solutions. Let the person use the scrolling experience they’re used to, and use your newfound free time to solve actual problems.

### Will people understand why your scrollbar looks different than every other scrollbar on their device?

Cognitive accessibility is one of the most difficult accessibility considerations to quantify, which is why WCAG is relatively tight-lipped about it.

However, [cognitive accessibility concerns are some of the most prevalent](https://data.census.gov/cedsci/table?q=disability+&tid=ACSST1Y2019.S1810). We should not be quick to dismiss them, even if the access issues their considerations present can’t be neatly detected by automatic accessibility scanners.

When you modify your scrollbar’s visuals, you’re breaking [external consistency](https://inclusivedesignprinciples.org/#be-consistent). It now no longer looks like any other scrollbar on your device, as well as any other website or web app on the internet.

Digital literacy is also a spectrum. When digital things don’t look or behave the way people expect them to, people tend to internalize it as a personal failure—they broke something, they’ve been hacked, they’re being spied on, etc.

It’s also a fallacy to think that technologically literate individuals are exempt. Conditions such as depression can affect someone’s level of digital of literacy, in that it can lower your ability to process and take action on information.

If you’re thinking that people who believe they broke something on a website might feel depressed about it, you’re not wrong.  Sure, you could run some usability studies to see if your intended audience understands the adjustment you’ve made to the scrollbar, but consider:

- Many user testing platforms have access barriers, which may prevent some of the people affected by your decision from being able to give feedback on your decision.
- Setting up usability testing sessions are expensive and time-consuming affairs, and there are likely more thorny problems your organization will prioritize getting insight into.
- Many organizations can’t be bothered to even run qualitative usability testing in the first place.

## What about scrollable regions within my website or web app?

Ideally, you don’t have content overflow, and then consequently the need for scrollable areas within your website or web app.

If you do have content overflow, rely on the scrollbar affordances and customizations people are already used to and have made. You’ll also want to [make sure those scrollable regions are accessible](https://www.tpgi.com/short-note-on-improving-usability-of-scrollable-regions/).

## What about games, edutainment, rich media experiences, etc.?

Everyone thinks they’re the exception to the rule. Given what I just outlined, I ask you to ask yourself if the custom scrollbar is really necessary in this situation?

## What about rolling my own scrollbars?

Please don’t. There are so many things to get right, and so many ways it can go wrong.

## What about people who modify my scrollbars?

Being able to modify an experience so it suits your specific needs is one of the web platform’s greatest strengths. You shouldn’t attempt to block, subvert, or otherwise undermine someone’s ability to do so.

## Why do you hate fun?

A difficult lesson I keep learning over and over again is that everyone is into accessibility up until it impacts something they like.

I don’t hate fun. I can’t do much past promising you I don’t. However, too many times features are put out into the world without people doing their due diligence.

This means stepping out of your comfort zone. Test actual support with different operating systems and modes other than the ones you use on a daily basis. Remember that the way you use technology is not the default, and that the majority experience is a contradiction in terms.

More importantly, it means asking actual people affected by your decisions what they think about them. And if you do this, [don’t forget survivor bias](https://en.wikipedia.org/wiki/Survivorship_bias). Don’t forget: people who can’t use your service aren’t represented in your analytics.

I want everyone to have fun, just not the expense of artificial, unnecessary exclusion.

Features that are put out into the world without considering even basic accessibility place entirely artificial, unnecessary burden on discriminated populations where using a device can already be a thankless slog.

These aren’t “edge cases.” These are the daily lived experiences of people. In isolation, experiences like this can be annoying. [In aggregate, they can be overwhelming](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/).

The web is an incredible medium, capable of creating beautiful, revolutionary, accessible experiences. There are countless ways to communicate these qualities in an accessible, inclusive way. All I am asking is to temper your excitement with the smallest bit of self-restraint.

## Can’t people just—

Another common refrain is that there should be some sort of toggle, or switch, or checkbox, or preference widget that lets someone turn something like this off.

We’ve already covered that browsers are not really prioritizing this sort of thing. Even if they were, it’s not the point. We want to <strong>proactively accommodate</strong> rather than <strong>accidentally exclude</strong>.

An opt-out approach assumes people know the preference:

- Exists in the first place
- Where it is located, and
- How to enable it.

It also assumes:

- Every device they have will have this preference,
- Every browser installed on every device they have will have this preference,
- Every app, website, and web app will honor this preference, and
- The process of enabling this preference is accessible (say needing to scroll to it using an inaccessible scrollbar).

More importantly, <strong>an opt-out approach consciously places the burden on the person affected to address the issues you create</strong>.

## Wrapping up

You don’t get to pick who visits your website or web app, what their circumstances are, or how they choose to interact with your content. Choosing not to mess with the browser’s scrollbar is a simple, yet powerful thing you can do to help ensure people can get what they need.

If you don’t listen to me, I hope you can at least [take some time to listen to Blake Watson](https://blakewatson.com/journal/neglecting-the-scrollbar-a-costly-trend-in-ui-design/).
