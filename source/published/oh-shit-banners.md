---
layout: "layouts/post.njk"
title: Oh shit banners
source: ericwbailey.website
excerpt: "Creating and using an oh shit banner treatment requires investment in process as much as, if not more than it does a technical implementation"
date: 2024-01-03
year: 2024
tags:
  - Approach
  - Design
  - Design Systems
  - History
  - Information Architecture
attribution: "Thank you to <a href='https://mikeperrotti.com/'>Mike Perrotti</a> for his feedback."
share:
  facebookDescription: "The phrase, 'Oh shit banners' placed on a dark background banner that sits above the smallest sliver of a lighter blue background."
  twitterDescription: "The phrase, 'Oh shit banners' placed on a dark background banner that sits above the smallest sliver of a lighter blue background."
tweetThread:
  - url: https://twitter.com/ericwbailey/status/1252659578367598597
    date: "April 21, 2020"
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 43
---

I have worked for two newspapers over the course of my career (three if you count my high school newspaper). One thing I learned there is that the top half of each and every newspaper homepage is a daily battle of priorities. 

The idea here is that the thing that is <strong>highest, largest, and leftmost</strong> on the page will get the most attention.

Placement and ordering of this content is also an expression of the site’s editorial agendas. This is in of itself worth thinking about.

## The language of hierarchy

Generally speaking, the most important thing on a page is: 

1. Close to the start of the document, and 
1. Large. 

When that page is [written in English](https://rtlstyling.com/), that means the top left or top center. Again, think the front page of a physical newspaper:

<img
  alt="The top quarter of the front page of the Boston Globe print newspaper published on Tuesday, January 2nd, 2024. There are two headlines visible. The leftmost headline reads, 'A Biden campaign quip, with a Boston twist'. The right headline reads, 'Israel set to widthdraw some forces'. The leftmost headline takes up three quarters of the width of the nespaper, while the rightmost headline takes up one quarter of its width. Below the leftmost headline are two small photos, one of President Joe Biden and the other of Mayor Kevin H. White."
  loading="lazy"
  src="{{ '/img/posts/oh-shit-banners/boston-globe.png' | url }}" />

This is a massive oversimplification of the topic, but also good for steering the main point of this post.

## The highest possible priority

The headline for the most important thing for this days’ top news will be the same type size as yesterday’s top news. It will likely also be the same as tomorrow’s. 

This <strong>consistency and predictability</strong> is important. It helps to teach the reader how to parse what the most important things they need to know for that day are. 

With this system established it is then up to the reader to determine what of those items are the most important to their specific needs.

### That said

There’s news, and then there’s <em>news</em>. 

Sometimes something momentous happens. This necessitates <strong>a hierarchy of attention that goes beyond the regular flow of information</strong>. 

In this case the platform is intentionally overriding the reader’s determination process and all but forcing them to pay attention to the thing the platform considers the most important. 

An example of this is World War II ending:

<figure
  role="figure"
  aria-label="Source: 7 Incredible V-E Day Front Pages from WWII America - Fishwrap: The Official Blog of Newspapers.com.">
  <img
    alt="The text, 'Nazis Quit' set in all-caps type that is eight inches tall. It is set against a solid black background that takes up the top two thirds of the front page of the newspaper. The newspaper is the Monrovia Daily News-Post, published on May 7, 1945. Other front page headline news items are 'King sends congratulations', 'AP Story on Surrender', 'Germans Told of Defeat', 'Three Leaders Will Make Announcement', and 'V-E Day Proclamation Is Scheduled Tomorrow'. Each of these headlines is set in a much smaller type size than the Nazis Quit banner."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/nazis-quit.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://blog.newspapers.com/ve-day/">7 Incredible V-E Day Front Pages from WWII America - Fishwrap: The Official Blog of Newspapers.com</a>.
  </figcaption>
</figure>

Another personal favorite is from The Onion:

<figure
  role="figure"
  aria-label="Source: Our Dumb Century: July 21, 1969 - The Onion">
  <img
    alt="The text, 'Holy shit, man walks on fucking moon' set in all-caps type that takes up seven eigths of the top half of the front page of a newspaper. The newspaper is The Onion Late Edition, quote published on July 21, 2969. Underneath the headline is a subhead that reads, 'Neil Armstrong's historic first words on the moon: Holy living fuck.'"
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/holy-shit-man-walks-on-fucking-moon.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.theonion.com/july-21-1969-1819587599">Our Dumb Century: July 21, 1969 - The Onion</a>
  </figcaption>
</figure>

A designer at one of the newspapers I used to work at referred to this visual treatment as an “oh shit banner,” because its use represented something so important that it made you stop in your tracks and go, “Oh shit.”

### Rules and breaking them

The headline treatments of oh shit banners are an example of <strong>intentionally breaking the rules</strong> a designed system establishes for itself. It deliberately forces the attention of the reader.

Someone walking by a newsstand can’t help but notice an oh shit banner because of its visual prominence. Subscribers will also take notice, in that there is a purposeful breaking of the rules they have subconsciously become literate in, and used to.

## Oh shit banners on the web

The web has the equivalent, but it’s a little trickier. The practice of putting the most important thing at the top of the homepage is still performed, despite persistent misconceptions about “[above the fold](https://viewports.fyi/)” and [homepages being where folks enter into news sites](https://www.niemanlab.org/2012/08/coming-in-the-side-door-the-value-of-homepages-is-shifting-from-traffic-driver-to-brand/).

In that vein, oh shit banners are not:

- Banner ad takeovers,
- Notifications permission requests, 
- Cookie consent forms,
- [Confirmshame](https://builtin.com/design-ux/confirmshaming) modals, 
- Sensational [chumbox clickbait headlines](https://www.theawl.com/2015/06/a-complete-taxonomy-of-internet-chum/), or 
- Some other cheap trick used to steal or manipulate your attention.

So, then what is an example of an oh shit banner use case?

### Global pandemic

A mysterious, highly contagious, mass-disabling disease ripping across the planet certainly qualifies as an event where you want people to shut up and pay attention.

I took some screenshots from a sampling of different websites when the Covid-19 epidemic first started to spread. It is a slice of history whose importance was communicated on the web in a highly specific way. 

<figure
  role="figure"
  aria-label="Source: Boston.gov.">
  <img
    alt="A large dark blue banner taking up seven eighths of the screenshot of the Boston.gov homepage. The banner has a last updated timestamp, heading, body copy, and call-to-action-link. The timestamp reads, 'Last updated: Tuesday, April 21, 2020 - 12:20 PM.' The heading reads, 'Coronavirus (Covid-19) updates'. The body copy reads, 'Governor Baker announced the closure of K-12 schools in Massachusetts and non-emergency childcare programs through the end of the school year. Strict measures are still in place in Boston, including a Public Health Advisory for everyone except essential workers to stay at home from 9 p.m. to 6 a.m. each day.' The call-to-action link reads, 'Coronavirus information.'"
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/boston.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.boston.gov/">Boston.gov</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Source: Gov.uk.">
  <img
    alt="A large dark gray banner taking up two thirds of the screenshot of the Gov.uk homepage. The banner has a heading, body copy, three small logos, and a hide message button. The heading reads, 'Coronavirus (COVID-19): what you need to do'. The body copy reads, 'Stay at home. Only go outside for food, health reasons or work (but only if you cannot work from home). If you go out, stay 2 metres (6ft) away from other people at all times. Wash your hands as soon as you get home. Do not meet others, even friends or family. You can spread the virus even if you don't have symptoms.' The logos are for Stay At Home, Protect the NHS, and Save Lives programs."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/gov-uk.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.gov.uk/">GOV.UK</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Source: Osaka City.">
  <img
    alt="A page set in Japanese. There is a large banner taking up fourty percent of the screenshot, with four large bullet points. Below the banner is an illustration taking up sixty percent of the rest of the page. It uses a set of three pictograms to warn against enclosed spaces with poor ventilation, congregating with others in enclosed areas, and eating with unmasked family."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/osaka.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.city.osaka.lg.jp/">Osaka City</a>.
  </figcaption>
</figure>

## What else should oh shit banners be used for?

As previously mentioned, things like clearance sales, newsletter subscriptions and the like aren’t candidates for the oh shit banner treatment. 

It is not the most inclusive term, but attempting to misuse the oh shit banner for these kinds of content will trigger [banner blindness](https://www.nngroup.com/articles/why-advertising-doesnt-work-on-the-web/). An entire internet full of manipulative, attention-stealing antipatterns have created this self-defense mechanism. 

<figure
  role="figure"
  aria-label="Source: Kotaku.">
  <img
    alt="The Kotaku homepage. A large circular modal takes over the entire homepage, obscuring it. There is a newsletter signup prompt contained in the modal, and a faint close button located outside the modal's boundary."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/kotaku.png' | url }}" />
  <figcaption>
    I’ve been conditioned to reflexively close things like this before even consciously attempting to read them.
  </figcaption>
</figure>

Chronic misapplication of this design pattern means [people will be conditioned to ignore it](https://en.wikipedia.org/wiki/Henny_Penny) when it’s time to actually pay attention. This makes the entire endeavor moot. 

For the web, oh shit banners' four most likely use cases are for:

1. Government emergencies,
1. Crisis situations,
1. Product recalls, and
1. Catastrophic outages. 

### Government emergencies and crisis situations

These are the most viable of the four scenarios, in that we already have evidence of it:

<figure
  role="figure"
  aria-label="Source: City of Somerville.">
  <img
    alt="A pink banner taking up one quarter of the screenshot of the City of Somerville homepage. The banner has an alert icon, body copy, and a close button. The body copy reads, 'Stay at home - social distancing saves lives. Start of Street Sweeping Delayed Until 5/4. City Schools & Buildings Closed Until 5/4. More Info at somervillema.gov forward slash Coronavirus'."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/somerville.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.somervillema.gov/">City of Somerville</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Source: Cairo.">
  <img
    alt="Screenhot of the Cairo homepage, set in Arabic. A modal banner takes up roughly half of the screen. The modal's contents display a large headline, a woman doctor, a table with some figures, and clip art of the Coronavirus drifting through the frame."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/cairo.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="http://www.cairo.gov.eg/">Cairo</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Source: Fishers High School.">
  <img
    alt="A narrow, bright red banner stacked on top of a full-width photo of the trumpet section of a high school band. The banner reads, 'Update (4.2.20) Gov. Holcomb has ordered all schools to remain closed through the end of the school year to help protect Hoosiers from COVID-19. Check for new updates on our COVID 19 Information web page.' The phrase, 'COVID-19 Information page' is set to a light blue color to indicate it is a link, making it difficult to read when placed against the bright red background."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/fishers-high-school.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://fhs.hseschools.org/">Fishers High School</a>.
  </figcaption>
</figure>

Things were also scary enough that private industry joined in on communicating a societal-grade crisis. Most of the company homepages I visited repurposed existing design system patterns, however:

<figure
  id="private-industry-examples"
  role="figure"
  aria-label="Source: Bed Bath & Beyond.">
  <img
    alt="The Bed Bath and Beyond homepage. A narrow gray caoursel is placed a homepage feature about a Mother's Day gify guide. The carousel's current panel reads, ''All stores are temporarily closed but we're able to serve you any time online. Please check here for our latest health and safety updates. Learn More'."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/bed-bath-and-beyond.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.bedbathandbeyond.com/">Bed Bath &amp; Beyond</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Source: American Airlines.">
  <img
    alt="The American Airlines homepage. At the top of the homepage is a light gray banner that takes up about a quarter of the screen. It has an icon, a headline, and a call-to-action link. The icon is a green circle with a lowercase i inside of it, commonly used to indicate information. The headline reads, 'Coronavirus travel updates'. The call-to-action link reads, 'Travel updates and making changes to your trip'. Underneath the banner is the rest of the homepage content, including a large banner advertising AAdvantage program updates."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/american-airlines.png' | url }}" />
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.aa.com/">American Airlines</a>.
  </figcaption>
</figure>

### Product recalls and catastrophic outages

These two are a little more tricky in that they happen more often than we’d like to think for private companies. 

Recalls occur when a product unintentionally creates harm. An example here is [pathogens in mass-distributed eyedrops that caused illness, blindness, and death](https://arstechnica.com/health/2023/05/4th-death-in-eye-drop-outbreak-now-81-cases-14-blinded-and-4-lost-eyeballs/).

A catastrophic outage is a instability introduced into a system that results in data being ruined. This can be a circumstance that:

- Prevents data from being actively transmitted and stored, 
- Destroys previously stored data, or 
- A combination of both of the previous events. 

Companies are not incentivized to communicate the level of seriousness these two types of crisis necessitate. This is largely because:

- Failure states and their [root causes](https://surfingcomplexity.blog/2023/12/10/human-error-means-they-dont-understand-how-the-system-worked/) are infrequently considered or prioritized, and that
- Calling attention to such a state will translate to negative press and the stock price taking a hit.

For example, [Amazon’s web storage service suffered a highly public outage in 2017](https://www.vox.com/2017/3/2/14792636/amazon-aws-internet-outage-cause-human-error-incorrect-command). Here is the icon they used to represent the status of this event:

<figure
  role="figure"
  aria-label="Yup, that's it.">
  <img
    alt="A tiny icon of a green checkmark with an even smaller square with an italicized lowercase letter i placed over it. The icon is blurry, as if it started out as a non-compressed image and then was overly-compressed by saving it as the wrong file format."
    loading="lazy"
    src="{{ '/img/posts/oh-shit-banners/aws-outage-checkmark.png' | url }}" />
  <figcaption>
    Yup, that's it.
  </figcaption>
</figure>

This repurposed treatment makes sense if you [recall the private industry examples](#private-industry-examples) listed previously. By this, I mean that the people who created this UI likely:

- Did not have the time or budget previously allocated to create catastrophic failure state guidelines,
- Had to pick something in the middle of an actual crisis, and also
- Faced internal pressure to downplay the crisis’ severity.

## Design systems 

Codifying an oh shit banner treatment is something worth considering for <strong>any platform that needs to communicate important information during a crisis</strong>. 

Government services and private industry are both contenders for adopting this pattern. In addition, having this pattern <strong>proactively established</strong> can help in a time of crisis, the same way having a defibrillator on-hand at the office can.

The logical place this sort of pattern should be codified is within a design system, provided the organization has one. Use of an oh shit banner in a design system is also an example of how <strong>governance is just as, if not more important than facilitation</strong>. 

### Governance, guidance, and guardrails

It is relatively straightforward to make a large banner and add it to the top of a homepage of a website. It is also relatively straightforward to document said banner. 

However, these actions don’t do much in terms of responsible use. The real questions you as a design system maintainer need to answer are will an oh shit banner have:

- Language indicating it should only be used in a time of crisis?
- Systems and automation to detect misuse?
- Incentive structures to prevent abuse?
- Process to identify who the person responsible for deploying the banner is?
- Additional process to identify a path of succession if that person is unable to deploy?
- Examples of copywriting that will communicate the crisis in clear and concise way that does not create additional panic?
- Recurring meetings to ensure all the previous policy and process is up-to-date?

To be clear: I don’t have the answers to these questions. That’s something only you can answer with the full context of the organization you are developing the pattern for, its specific needs, and its own unique processes and workflows.

### Who has access?

You may also want to consider instituting privileged access for using a pattern like this. 

I haven’t encountered password or team-based access on a design system before. Think of it like [the two keys](https://en.wikipedia.org/wiki/Two-person_rule) it requires to launch powerful missiles.

<img
  role="img"
  alt="A wireframe illustration suggesting a design system documentation page. A modal window floats above it, containing a password entry form field."
  loading="lazy"
  src="{{ '/img/posts/oh-shit-banners/password-protected-component.svg' | url }}" />

It is not a perfect solution, in that people will inevitably copy/paste things if they can’t quickly access them. However, the paper trail and [intentional friction](https://modus.medium.com/friction-as-a-function-in-user-experience-make-me-think-390ee17c6cf5) could be enough of a deterrent effect that this approach may be worth considering.

Other design patterns might also be contenders for this sort of access-based approach, especially ones that deal with how highly sensitive information is displayed and manipulated.

Regardless, having something planned for and ready to use—even if it’s to communicate something terrible—might be worth preemtively expending the effort to do.

## May you never have to use, or read an oh shit banner

We live in a world where horrible, unpredictable events can happen. However, patterns like the oh shit banner allow us to do something about that fact by helping to lessen the scope of harm these events create.

The oh shit banner pattern is one that you should use with an extreme amount of caution, and only for disasters where <strong>clearly communicating helps to preserve safety, stability, and security</strong>. 

Creating and using an oh shit banner treatment requires investment in process as much as, if not more than it does a technical implementation. This may require interrogating your organization’s policies and priorities, but does so in the service of communicating vital information at a critical moment.
