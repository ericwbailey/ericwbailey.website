---
layout: "layouts/post.njk"
title: Fighting uphill
source: ericwbailey.design
excerpt: "As someone with a good deal of interest in the digital accessibility space, I follow WebAIM’s work closely. Their survey results are priceless insights into how disabled people actually use the web, so when the organization speaks with authority on a subject, I listen"
date: 2019-05-03
year: 2019
tags:
  - Accessibility
  - History
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 3
---

As someone with a good deal of interest in the digital accessibility space, I follow [WebAIM](https://webaim.org/)’s work closely. Their survey results are priceless [insights into how disabled people actually use the web](https://webaim.org/projects/screenreadersurvey7/), so when the organization speaks with authority on a subject, I listen.

WebAIM’s [accessibility analysis of the top 1,000,000 homepages](https://webaim.org/projects/million/) was [released to the public on February 27, 2019](https://twitter.com/webaim/status/1100844774163009536). I’ve had a few days to process it, and frankly, it’s left me feeling pretty depressed. In a sea of already demoralizing findings, probably the most notable one is that pages containing [<abbr>ARIA<abbr>](https://www.w3.org/WAI/standards-guidelines/aria/)—a specialized language intended to aid accessibility—are actually <em>more</em> likely to have accessibility issues.

I don't think this is intentional malice on the part of authors, but it is worth saying that [the road to hell is paved with good intentions](https://css-tricks.com/aria-spackle-not-rebar/). These failures via omission and ignorance actively [separate people from their civil rights](https://marcysutton.com/accessibility-is-a-civil-right).

I view the issue largely as an education problem, and that education is tied into what the market demands.

Although the [replies to this Twitter thread](https://twitter.com/A11YProject/status/1100855699884642309) are heartwarming, I realistically understand that accessibility knowledge isn’t what employers are largely demanding. Because of this, people entering into the web design and development space [simply may not be aware of accessibility as a technical concern](http://adrianroselli.com/2018/07/demand-refunds-for-invalid-html-in-courses.html).

Overwhelmingly, crushingly, we shove new developers towards learning JavaScript single page application frameworks (SPAs). While many of these frameworks pay lip service towards preserving accessibility, if you do your homework you find that the majority of them were built without assistive technology in mind. These considerations were bolted on later, when their creators figured out that the things they threw away to get a more app-like experience actually mattered.

My go-to examples are routing and focus management. It’s a sad, sorry state of affairs that this critical functionality oftentimes requires third party plugins to make them capable of interfacing with assistive technology. The decision to use <abbr>SPA</abbr>s, and all that come with them, can often come from [baseless nerd navelgazing](https://whatisjasongoldstein.com/writing/help-none-of-my-projects-want-to-be-spas/)—many business owners would be livid to find out that the technology choices their teams are making are actively incurring legal liability.

## Punching down

It’s too easy and too irresponsible to lay blame solely on new developers. Turning again to the WebAIM survey, we know that [over 50% of all form inputs are not labeled](https://webaim.org/projects/million/#labels). This is basic stuff, things that people who have been working in the industry for any significant length of time should know. How can we expect the advanced, state-driven stuff to be built robustly if we’re all failing HTML 101

## What if we’re losing?

It’s a tough question, but one I think is worth asking.

In some respects, practicing web accessibility has never been better. [Firefox has an accessibility inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) now, which is straight-up amazing. We have near-magical developer tools (plural!), dedicated conferences, [podcasts](https://a11yrules.com/), meetups, and highly paid people in influential positions making grandiose declarations about the importance of empathy.

And yet, WebAIM’s report. All these incremental improvements aren’t compounding at an equal or greater pace than the things they’re trying to combat.

It’s code and design issues stemming from a market demand problem, yes. But I also think it’s a process problem. Namely, we can’t shovel all our blame on the developers—classically the go-to scapegoats for organizational failure.

We’re <em>all</em> to blame for the state of things—I'm no exception. A lack of understanding and wholesale adoption of antipatterns are also at fault. Just because a big name company does something doesn’t mean it's [intrinsically good](https://www.24a11y.com/2018/i-threw-away-my-mouse/).

## Technology solutions to social problems

If we can’t get the majority of web practitioners to care about, much less implement accessible websites, what can be done? Browsers already describe websites the best way they know how, via the Document Object Model (DOM). [Assistive technologies describe what the <abbr>DOM</abbr> contains](https://alistapart.com/article/semantics-to-screen-readers) the best they can, even utilizing specialized heuristics to accommodate code that isn’t quite good enough.

But "isn’t quite good enough” isn’t the same as outright bad—these specialized programs can only do so much.

### Seeing machines

I’ve been paying attention to [Mozilla’s efforts to create an interstitial popup blocker](https://www.androidpolice.com/2018/03/12/mozilla-working-page-popup-blocker-firefox/). For those unfamiliar with interstitials, they’re the annoying (often inaccessible) on-page modals that commonly ask you to do things like sign up for newsletters.

The trick here is these interstitial are different from traditional popups in that you can’t just block anything that spawns from the page you’re currently visiting. They’re a little more tricky, in that it's just another “layer” of the website you’re visiting, and therefore can’t be clipped away with tidy logic.

Mozilla’s approach is to [ask for examples of interstitials](https://twitter.com/ehsanakhgari/status/972224912634064896) people find on the web, and then use that corpus of information to train a machine learning algorithm to understand what an interstitial popup “looks” like. Armed with that knowledge, it can then strip away the code of anything that qualifies as interstitial-ish.

It’s a fiendishly clever idea, and probably one of the few applications of machine learning I’ve encountered that actually has merit. It also got me wondering: if we can’t change how assistive technology generates descriptions of the <abbr>DOM</abbr>, can we change how it views websites instead?

If we can teach a computer to identify what all the various bits that make up a website look like, maybe we can attack the problem of inaccessible experiences from a slightly different direction. Once the computer “views” a page and reports on what it sees, it can then read out the text contained in those identified areas. Screen readers sort of already do this, and even have specialized functionality for [when the text isn’t actually text](https://doccenter.freedomscientific.com/doccenter/doccenter/rs25c51746a0cc/2014-09-24_enhancedconvenientocrandsemi-autoformsmode/02_ConvenientOCR.htm).

We’re starting to see hints of this kind of thinking already. Examples that come to mind are [Sarah Drasner’s brilliant CodePen](https://codepen.io/sdras/details/jawPGa) that uses Azure's Computer Vision <abbr>API</abbr> to automatically generate alt descriptions for images. [Airbnb’s sketching interfaces](https://airbnb.design/sketching-interfaces/) project is also a tiny, powerful glimpse into this sort of future.

### However

It’s really easy to say someone should do something, but it’s far more difficult to actually do it. Debating the merits of hypotheticals only takes you so far.

I’m not naïve enough to think this sort of idea would require a non-trivial amount of engineering to create. The field of digital accessibility is small and commonly viewed as unglamorous work, so I’m not holding my breath for venture capital firms to line up for the chance to give me funding for this half-baked concept.

There’s also the uncomfortable truth that this sort of automation is only as good as the data it’s trained on, and the field of machine learning is [rife with algorithmic bias](https://www.vox.com/future-perfect/2019/3/5/18251924/self-driving-car-racial-bias-study-autonomous-vehicle-dark-skin). When you start to use data at scale to make decisions, you also perpetuate the biases inherent in that data.

Furthermore, when you rely on this approach to navigate the web, you start to get into a very uncomfortable problem in delivering equivalent experiences; namely editorializing the experience for someone instead of presenting it to them the way someone who wasn’t relying on that technology would.

A practical example of this is automatically generated alt descriptions. If a system is built to reject certain kinds of information—say nudity—it won’t generate the information a person who doesn’t rely on the description will be privy to. It also may not be the nudity the system thinks it is.

A classical Greek statue meets all the criteria for a naked person, yet it is not. There have been, however, situations where it is flagged as pornography and a description is not generated. If you need an example of how this sort of thing falls apart at scale, just [look at tumblr](https://gizmodo.com/tumblrs-porn-filter-flags-its-own-examples-of-permitted-1831151178).

Another way of saying it: implicitly defining the parameters of what is acceptable for expression via automation can have the effect of reducing individual autonomy. This is unconscionable.

Finally, not every disabled user is a screen reader user. The machine learning approach doesn’t work for many different kinds of disability situations, notably [cognitive concerns](https://webaim.org/articles/cognitive/).

## Social solutions to technology problems

I’m a big nerd, so of course I led with an idea for software. But all too often we conflate creating <em>something</em> with creating <em>good</em>.

As touched on earlier, it seems like the pace of inaccessible digital experiences is moving far faster than our attempts to fix them. I’m skeptical of technology’s ability to solve the problem on its own.

It’s also far more easy to destroy than it is to repair. If you don’t believe me, spend some time conducting a manual website accessibility audit. It oftentimes feels like a tedious, frustrating, thankless experience that firmly paints you as the enemy for people who just want to move fast and break things. However, it is a very vital thing to do.

So, what can we do about this state of affairs?

### Learn from history

Digital accessibility is a niche practice. That’s not a value judgement, it’s just the way things are. Again, it’s hard to fault someone for creating an inaccessible experience if they simply haven’t learned the concept exists.

And yet, [seventy percent of websites are non-compliant](https://www.huffingtonpost.co.uk/damiano-la-rocca/website-accessibility_b_9931304.html). It’s a shocking statistic. What if I told you that seventy percent of all bridges were structurally unsound?

Some engineers who work with physical materials have a constant reminder of the gravity of the decisions they make. They [wear iron rings](https://blogs.scientificamerican.com/oscillator/ring-ritual-reminds-engineers-of-their-responsibility/) to be reminded that they have an obligation to the public good, and that actual lives are on the line. I like that idea a lot—I think it's a concept we as an industry could benefit from if we borrowed from it thematically.

It’d take some organizing to get to a place where we do such a thing. And maybe that’s a good thing—right now it feels like we’re an industry of [overpaid, fly-by-night plumbers](https://twitter.com/ericwbailey/status/1082694786480513026) who have the luxury of saying they don’t believe in using wrenches.

### Directed effort

It was a bitter, frustrating, oftentimes thankless task, but we should also acknowledge that [web standards <em>won</em>](https://www.webstandards.org/2013/03/01/our-work-here-is-done/index.html). It took a ton of time and effort to get to this point, but think about what didn’t make it: closed, centralized, brittle technologies that were pay-to-play and difficult to understand and maintain.

We should also think about what technologies are available to us today, how they serve the people that use them, and how so much of it is built from these standards. While it may feel frustrating doing the work now, maybe that inflection point is just beyond the horizon.

### Reframing

Selfishly, I’d love a future where it's commonplace for interview candidates to be selected not only because of their JavaScript prowess, but also because they can offer <a href="https://scottaohara.github.io/accessibility_interview_questions/">a sound explanation</a> of why using a <code>button</code> element is important.

I’m really excited to see digital accessibility get more mainstream attention, but I’m also concerned. I don’t want it to have fifteen minutes of fame. I want it to be a first class, top-of-mind consideration for everyone in the industry.

I really admire the people who are using their privilege as an influential industry member to push for this reality. [Ethan Marcotte](https://twitter.com/beep) and [Sara Soueidan](https://twitter.com/SaraSoueidan) come immediately to mind—they are doing an amazing job lending credibility to the practice as they learn more about the space. This is also not to diminish their other efforts, which have done so much to drive the web forward.

It’s been great seeing more and more accessibility talks appearing on the conference circuit, as well. The subject matter hasn’t historically gotten a lot of mainstream stage presence. This meant that there have been less opportunities for people to discover digital accessibility was even was a concern, much less be positioned as a glamorous subject that was worth spending a few thousand dollars on a ticket to hear someone talk about.

I also think the push to diversify our industry voices has helped bring accessibility concerns to the forefront, as well as other important topics. And speaking of diversification, I’d be remiss if I didn’t mention [Kat Holmes](https://twitter.com/katholmes)’ work on Inclusive Design. If you want to read a brilliant treatise on reframing, read [<cite>Mismatch</cite>](https://mitpress.mit.edu/books/mismatch).

## Acknowledgment

I also think it’s worth acknowledging that we’re all standing on the shoulders of giants. New voices (such as myself), are speaking about what we’ve learned largely due to the fact that there’s been existing material to learn from. People like [Léonie Watson](https://twitter.com/LeonieWatson), [Marco Zehe](https://twitter.com/MarcoInEnglish), [Steve Faulkner](https://twitter.com/stevefaulkner), [Glenda Sims](https://twitter.com/goodwitch), [Billy Gregory](https://twitter.com/thebillygregory), [Lainey Feingold](https://twitter.com/LFLegal), [Mike Paciello](https://twitter.com/mpaciello), to name a few.

They’ve done <em>incredible</em> work in this space, and are continuing to do so. It’d be wise to listen to what they have to say.

---

This is a personal post on a personal website, so it’s admittedly a little more rough and glum than what I usually put out. However, I don’t have the right to be tired or demotivated. I’m frustrated for sure, and feelings of defeatism are hard to quell, but the stakes are too high for self-pity.

I’m also not so arrogant as to assume my ideas are new in this space. I don’t have comments on my blog, but if you want to talk about anything this post covered, feel free to [chime in on Twitter](https://twitter.com/ericwbailey/status/1103043260631658497).

I’ll keep writing, and I’ll keep pushing for what is important. I hope you’ll join me.
