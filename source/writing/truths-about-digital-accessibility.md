---
layout: "layouts/post.njk"
title: Truths about digital accessibility
source: ericwbailey.design
excerpt: "Creating, maintaining, or evaluating accessible technology? Here are some things to keep in mind"
date: 2019-07-29
year: 2019
tags:
  - Accessibility
  - Design
  - Development
  - Inclusion
attribution: "Thank you to <a href='https://www.scottohara.me/'>Scott O'Hara</a> for his feedback."
tweet: https://twitter.com/ericwbailey/status/1155871719179063296
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 9
---

Creating, maintaining, or evaluating accessible technology? Here are some things to keep in mind (note that [identity-first language](https://thebodyisnotanapology.com/magazine/i-am-disabled-on-identity-first-versus-people-first-language/) is intentional):

## Each screen reader behaves differently

This is by design. Behavior is a balancing act between a screen reader’s features, the requirements of the operating system it is installed on, the [form factor](https://en.m.wikipedia.org/wiki/Form_factor_(design)) it is available in, and the types of input it can receive.

Each screen reader also has different interaction modes. These modes help the people who use them to understand, navigate, and take action on digital content in the way that is the most effective for them. [Generating a list of all headings elements](https://webdesign.tutsplus.com/articles/the-importance-of-heading-levels-for-assistive-technology--cms-31753), links, or [landmarks](https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html) are all examples of what these modes can be.

Modes are activated in different ways, depending on both the form factor and version of the screen reader being used. For example, VoiceOver on iOS can navigate between lists by swiping when [the Rotor](https://support.apple.com/en-us/HT204783) is set to navigate via lists. In comparison, [JAWS](https://www.freedomscientific.com/products/software/jaws/) uses the <kbd>L</kbd> key on a keyboard to do the same. Many of these modes can also be activated in [multiple ways](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html), such as a keyboard shortcut, macro, voice command, or gaze dwell duration.

## Screen readers are more than just VoiceOver

Windows may not be your primary operating system. However, chances are good it will be for [the people who rely on screen readers](https://webaim.org/projects/screenreadersurvey7/#primary). Because of this, it is vital to include JAWS and [NVDA](https://www.nvaccess.org/), the two most popular Windows screen readers, in your tests.

It’s also worth pointing out here that the desktop and mobile versions of VoiceOver are separate apps, each with its own [bugs and quirks](https://bugs.webkit.org/show_bug.cgi?id=196354) to work around. Don’t get me wrong: Apple bundling a powerful, sophisticated screen reader into its desktop and mobile operating systems has done a ton for normalizing access, and the world is better off for it.

## Not all screen reader users are blind

This fact is [quite nicely elaborated on by Adrian Roselli](http://adrianroselli.com/2017/02/not-all-screen-reader-users-are-blind.html).

If you don’t read his post, one of the more important takeaways is ensuring there is parity between your user interface components’ text labels and what is announced by screen readers (while still respecting someone’s screen reader [verbosity settings](https://en.m.wikipedia.org/wiki/Screen_reader#Verbosity)). A discrepancy between the two will most likely create a confusing and disorienting experience.

There is also an elegant, inclusive aspect to maintaining this parity. By not making assumptions about a screen reader user’s circumstances, we don’t unintentionally create separate experiences for them.

Anecdotally, my only vision concern is some mild nearsightedness, but I love using [macOS’ speak selected text feature](https://www.idownloadblog.com/2016/02/29/mac-speak-selected-text/) as a way of keeping myself honest when reading my writing out loud to myself when proofreading. This feature is effectively a simplified screen reader, similar to [Microsoft Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator).

## Assistive technology is more than screen readers

Wheelchairs, canes, [head pointers and mouth sticks](https://www.healthproductsforyou.com/c-head-pointers-and-mouth-sticks.html), [switches](https://www.24a11y.com/2018/i-used-a-switch-control-for-a-day/), [sip-and-puff devices](https://en.m.wikipedia.org/wiki/Sip-and-puff), eyeglasses, [adaptive keyboards](https://bltt.org/keyboards-for-disabled-people/), [eye trackers](https://www.tobiidynavox.com/en-us/about/about-us/how-eye-tracking-works/), [refreshable braille displays](https://en.m.wikipedia.org/wiki/Refreshable_braille_display), adaptive grips, ramps, grab bars, prosthetics, voice command, [screen magnifiers](https://en.m.wikipedia.org/wiki/Screen_magnifier), hearing aids, memory aids, etc. The list goes on.

Many of these devices now ([or soon will](https://www.healthline.com/diabetesmine/omnipod-smartphone-control-diabetes)) incorporate a computer, and/or interface with other digital technology. These devices rely on [the Accessibility Tree](https://alistapart.com/article/semantics-to-screen-readers/)—the mechanism computers use to allow assistive technology to programmatically read and interpret user interface content—to function.

I would also be remiss if I didn’t mention [specialized browsing modes](https://css-tricks.com/reader-mode-the-button-to-beat/), or [devices that have been repurposed to serve as assistive technology](http://bradfrost.com/blog/post/accessibility-and-low-powered-devices/).

## Assistive technology may not be running on high-powered devices, or be running the latest software

There are four factors to consider here, and these factors are not necessarily mutually exclusive:

First is that disabled people are discriminated against in many areas, especially employment. A lack of access to good-paying jobs also means less income to spend on high quality devices. A lack of high quality devices means lower-powered hardware.

Second is that assistive technology may be running on a lower-power device due to the device’s form factor. Here, size requirements may mandate that there won’t physically be any extra space to put larger, more powerful hardware. This requirement sometimes stems from a desire to diminish the device’s profile, and therefore lessen chances of stigmatization by its use in public—think [the evolution of the hearing aid](https://www.healthyhearing.com/report/47717-Digital-hearing-aid-history).

Some, but not all devices get around this limitation by offloading their computational needs on another device, say [a hearing aid that pairs with a smartphone](https://www.truhearing.com/more-resources/amazing-benefits-smartphone-hearing-aids/). While this does let a lower-power device do things it normally couldn’t on its own, the device is still limited by what is allowed by both the operating environment and the communication protocols it utilizes. For example, Bluetooth Low Energy clocks in at ~0.27 Mbps, which imposes a pretty severe bottleneck on how much information can be transmitted at any given moment.

Third, it is not uncommon for some assistive technology users to purposely not upgrade their hardware and software. Think of how many times you’ve updated something and it broke a feature in some small, yet annoying way. Building off this feeling, it’s easy to understand why many people are so risk-adverse about their upgrade path, as it represents a very real fear of breaking an important tool they use to interact with the world.

This is to say the presence of [an evergreen browser](https://www.mozilla.org/en-US/firefox/organizations/) may not mean it is fully up-to-date, or the presence of a popular operating system means it is running the latest and greatest version. In fact, a person may be taking deliberate measures to prevent a happy upgrade path from occurring.

Fourth, [a huge swath of the world’s population](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/) is geographically predisposed to using a low power device, just by accident of birth. Many emerging markets (and underserved communities) are coming online via [inexpensive Android smartphones](https://qz.com/986042/google-goog-designed-android-go-to-win-over-the-next-billion-smartphone-users-in-the-developing-world/).

These devices represent a person’s main form of access to the internet, and with Android comes the presence of [the Android Accessibility Suite](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=en_US) (formerly known as [TalkBack](https://9to5google.com/2018/06/20/google-talkback-android-accessibility-suite/)). While the Suite is not nearly as robust or feature-rich as VoiceOver and Apple’s other accessibility settings, Android’s adoption numbers means you should be thinking about, and testing how your work deals with its limitations.

## Assistive technology may be augmented by other assistive technology

Multiple disability conditions can, and do affect people. Many of these conditions can be chronic, and their severity can compound as time goes on. Because of this, more than one assistive technology application or device, each with its own unique features and capabilities, may be used at any given moment.

## The presence of assistive technology isn’t necessarily permanent

Much as how more than one form of assistive technology may be swapped out for another on the fly, some people may only conditionally employ assistive technology in specific circumstances.

An example of this would be someone using a magnifying glass or screen magnifier application in places where they can’t control text resizing.

## A person who could benefit from assistive technology may not be using it

This touches on lack of resources and stigmatization issues discussed earlier.

A couple of other reasons for non-adoption may be a person not feeling comfortable admitting to themselves that they need help, or that they are unaware that assistive technology offerings for their disability exist. The latter reason is further amplified the more specialized the technology is—there is a world of difference between adjusting text size and discovering and installing a [NVDA add-on](https://addons.nvda-project.org/index.en.html).

Another reason is a person simply not knowing that what they’re experiencing constitutes a disability condition. In the United States, and in many emerging markets, many barriers towards access and education are present.

These are just a few of the many, many reasons why [we don’t make separate digital experiences](https://www.transportation.gov/briefing-room/dot7418) for disabled people anymore.

## Assistive technology may not be considered assistive technology by the person using it

Think of the last time you struggled to tap a tiny button on your smartphone. Or when you were reading the subtitles on a muted video, so as to not disturb the other passengers on the train. Or when you boosted the brightness on your display. There are countless examples of this, where a person may be situationally disabled, but does not identify as such.

This is important to think about for things like [accessibility options in preference menus](https://www.rockpapershotgun.com/2019/06/26/ubisofts-numbers-say-subtitles-are-really-jolly-popular/), where someone may skip over features that could help them because they don’t consider themselves as being disabled.

Configuring things to make them accessible by delving into preference menus, instead of leading with accessible defaults, also brings up the topic of less digitally-literate users. This brings us to our next point:

## Not every assistive technology user is a power user

This is something that’s easy to forget when you work on a computer all day making things for other people to use on their computers.

A digital device can be just one of many touch points that are required for a person to to their job or live their everyday life. Some people accept this as a matter-of-fact, but others may approach technology with a sense of dread.

Every user is a new user at some point, and some never progress past the initial metaphors required to operate an interface at its most basic level (open and close, save and delete, etc.). It is not uncommon for these kinds of users to rigidly stay with what works (messaging friends and family, looking at photos, listening to music, watching movies, etc.), and never explore the other capabilities of their device.

This is completely acceptable. User interfaces exist to make complicated code commands usable by the general population. This means that it’s our job to make sure our interfaces work for as many people as possible, as easily as possible. Being able to invest time and energy into understanding the borrowed metaphors utilized by a user interface, or series of user interfaces oftentimes stems from a position of privilege. In a business context, this unnecessary deciphering of intent also directly corresponds to lost opportunities.

On top of all this, learning how to operate assistive technology can occur at a moment where someone is learning how to re-navigate many other important aspects of their life. This can translate to creating a very circumstantially steep learning curve.

## Not every assistive technology user is non-technical

This is an ugly, unfortunate myth that needs to die.

## Non-technical people may make highly technical modifications to their technology

People are creative, resourceful, and persistent, especially when the motivating factors are high. To think anything less is a disservice. People also rely on other people. In the disabled community, this is known as [the myth of independence](https://thebodyisnotanapology.com/magazine/independence-is-an-ableist-myth-unlocking-the-power-of-community-in-healing/).

Think of how many times a friend or family member has asked you to fix their computer for them, because you possessed a skill they needed. Then think of the times you asked them to provide aid with something you didn’t know how to do.

Is it so much of a stretch to imagine that a motivated individual can research and install a browser extension? Or that a technical person can create or configure a specialized software or hardware solution for someone they care about? No, of course not.

For those people who self-serve, it’s also important to remember that there are levels of technical complexity, many of them unnecessarily artificial. Chances are good that someone can learn to tweak <code>.u-color-black</code> to be green without knowing what a [utility class namespace](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) is. Compare this to [reverse-engineering a declaration](https://www.arp242.net/api-ux.html) like <code translate="no">.css-1dbjc4n.r-1awozwy.r-1iusvr4.r-16y2uox.r-1wtj0ep.r-pu8h1j.r-jzbu7t.r-bcqeeo.r-bnwqim</code>.

Does this mean abandoning modern frameworks and development tools entirely? No. Just remember that what they output, and how they output it is potentially another user-facing interface.

## ARIA has varying levels of support

While there are a finite (if large) amount of user agents and assistive technologies, the possible permutations of web content implementations is near-infinite. Because of this, [Accessible Rich Internet Applications (<abbr>ARIA</abbr>)](https://www.w3.org/WAI/standards-guidelines/aria/) was created. Its purpose is to address potential unanticipated gaps between a content implementation pattern and assistive technology.

As it is a relatively new and niche technology, ARIA has [varying levels of support](https://caniuse.com/#feat=wai-aria). This is further complicated by the fact that support is dependent on [the combination of operating system, assistive technology, and browser](https://www.smashingmagazine.com/2018/09/importance-manual-accessibility-testing/#windows) being used.

A lack of support may mean a couple of things: First, assistive technology may simply not report anything. Second, and more worryingly, it may mean assistive technology reports, but reports inaccurately.

ARIA support fragments further if it includes combinations of multiple ARIA declarations, both on the same DOM node, and working in coordination on a more complicated multi-node component. Support concerns compound even more if these multiple multi-node components communicate with each other.

Automated accessibility checking software may not catch these support issues, as the authored code may be technically correct from an implementation perspective, but unusable from a human perspective.

This is no different than writing HTML, JavaScript, or CSS that passes CI/CD checks, but is not supported on the browser level.

This is also to say nothing of [niche browsers](https://en.m.wikipedia.org/wiki/PlayStation_Portable#Web_browser), browsing modes, bugs and regressions, and software rot. The devil is in the details here.

## ARIA increases the time it takes to calculate an accessible name

An <a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/">accessible name</a> is the phrase assistive technology will report to the person using it, and is a core aspect of how assistive technology functions.

For example, a link may have an accessible name of “The history of whiskey”, which is provided by the words written in between the opening and closing anchor element tags (<code translate="no">&#x3C;a href=&#x22;whiskey-history.html&#x22;&#x3E;The history of whiskey&#x3C;/a&#x3E;</code>). The anchor element provides [a Role](https://www.w3.org/WAI/PF/aria/roles), which communicates expectations around behavior. Combined, they inform the person using assistive technology that this is a link that takes them to a page where they can learn more about the history of whiskey.

The anchor element, like <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">every other HTML element</a>, comes with what is known as <em>native semantics</em>. Native semantics are roles that are inherent to the element being used. You don’t have to make an additional, redundant ARIA Role declaration on something described semantically. It is something you get for free by virtue of using the proper element and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes">attribute</a>.

The <code translate="no">button</code> element, for example, is a clear, unambiguous signifier of intent to both authors and browsers. It also enjoys [wide and deep support](https://www.w3.org/TR/html4/), even for non-traditional or atypical devices that may possess rudimentary browsing capabilities.

When ARIA is used to recreate the native semantics inherent in HTML, it increases the work the Accessibility Tree needs to do to figure out what the ARIA is trying to describe, including its accessible name and permitted (and therefore expected) behavior.

Small amounts of ARIA, skillfully applied to address the occasional gap, makes for a small amount of processing work a browser sends to the Accessibility Tree. Larger amounts of ARIA, especially when not augmenting a native semantic HTML element—and especially when being used to construct multiple, complicated interactive user interface components—translates to an large amount of processing work that an Accessibility Tree’s heuristics needs to do to create meaningful reporting.

There is a reason [the First Rule of ARIA](https://www.w3.org/TR/using-aria/#firstrule) prioritizes using appropriate native HTML elements whenever possible. Too much ARIA can create a slowdown and/or lack of synchronization between the current state of a website or web app, and what is being reported by assistive technology—especially lower power versions of it. In some extreme cases, it can even overwhelm the Accessibility Tree and crash it. It’s worth stating directly that both of these scenarios create an unacceptable user experience.

A concerning recent trend is [the over-application of ARIA](https://css-tricks.com/aria-spackle-not-rebar/). It’s a phenomenon that seems to especially present in modern JavaScript-intensive websites and web apps. [JavaScript blocks the main thread](https://medium.com/@francesco_rizzi/javascript-main-thread-dissected-43c85fce7e23), which delays other processing tasks from occurring. This compounds the aforementioned slowdown/crashing issue, especially for browsers that need to [send this information across a process boundary](https://twitter.com/MarcoInEnglish/status/1089412779625402368) (this processing delay issue also affects [people in non-assistive technology contexts](https://twitter.com/aburone/status/1153483023884738560), as well).

There are many good reasons to built performant websites and web apps. Slowing down or crashing the Accessibility Tree is another, vital reason, one that is unfortunately not commonly known.

## Windows High Contrast Mode ignores ARIA

[Windows High Contrast Mode](https://support.microsoft.com/en-us/help/13862/windows-use-high-contrast-mode) is a specialized assistive technology solution that affects the entire Windows operating system, including all browser content. It strips away styling, [prioritizing making text content legible](https://twitter.com/HugoGiraudel/status/877123359418576896) above all else. This is by design.

For people experiencing low vision, High Contrast Mode can be their last, best hope for viewing digital content. While I am loathe to speak about accessibility support in terms of numbers, some quick, back-of-the-envelope math tells us that assuming if even 1% of [the 800 million devices using Windows 10](https://www.zdnet.com/article/microsoft-says-windows-10-is-now-on-more-than-800-million-devices/) also use High Contrast Mode, it means that there are 80,000 users (to compare, my hometown has a population of ~25,000). This is to say nothing of still-active versions of Windows 8 and 7.

I should also point out that there is no minimum acceptable threshold of support, and that it is an awful way to think about the problem. If you can’t empathize with such a large figure, can’t make the connection that the figure might contain you care about, or can’t understand that it may also be [a future version of yourself](https://uxmag.com/articles/we-re-just-temporarily-abled), understand that [inaccessible websites are illegal](https://www.w3.org/WAI/policies/).

In Windows High Contrast Mode, an element’s native semantics affects how it appears. For example, an anchor element will get a different visual treatment than paragraph text or list items. Anchors created from non-semantic elements such as <code translate="no">span</code>s or <code translate="no">div</code>s that rely on ARIA to create link functionality won’t get this visual treatment. The same goes for any and all interactive user interface components built from non-semantic elements.

This means that unless an interactive component uses incredibly obvious language for its functionality, there is a large chance that it won’t be perceived as something can be interacted with—even more so in the presence of a [lower screen resolution and/or screen magnification scenario](https://www.technica11y.org/designing-and-coding-for-low-vision), where only a portion of the component may be visible. This means that [it is inaccessible](https://www.w3.org/TR/WCAG21/#perceivable).

Once again, the First Rule of ARIA applies. By relying on well-supported, time-tested markup to describe our content, we are able to make our work versatile and robust. This is for not only current modes of operation we may not be familiar with, but also future technologies that have yet to be invented.

## A disabled person may not be present in the communication channels you use

There are many reasons you may not be aware of inaccessibility issues, but the main one is systemic structural inequality.

As the practice of digital accessibility becomes more mainstream, we’re discovering that [many things we took for granted may in fact not be true](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/). The tools we use, by their very nature, may prohibit someone from operating the mechanisms required to [make you aware of the issues preventing someone from being present](https://a11y.reviews/#typeform).

This does not mean that their lived experiences are invalid.

Just because someone is disabled doesn’t mean that they must devote their life to reporting or fixing these errors, either. It’s a huge, unfair ask. The responsibility should be on you, the digital technology maker, to do this. It is a code quality issue, another thing to be on the lookout for alongside concerns such as bugs, unoptimized code, regressions, and memory leaks.

## Your ego may be the biggest barrier

Perhaps the most difficult thing is internalizing all of this. Digital accessibility work is not easy, but it is vital. It is a holistic, multifaceted discipline that touches on multiple interconnected social and technological issues.

Hopefully, this isn’t discouraging. Everyone makes mistakes, and I’m certainly not exempt from making them. Fortunately, digital technology—and especially the web—allows us to make good on our errors and missteps quickly and with minimal cost.

A question I constantly ask myself is if it’s worth being perceived as being correct at the expense of not meeting the needs of those who I am trying to help. Part of that means being willing to listen, and having the humility to make improvements on what I say and make, even if it requires internalizing an uncomfortable truth.
