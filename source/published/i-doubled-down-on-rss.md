---
layout: "layouts/post.njk"
title: I doubled-down on RSS
source: ericwbailey.website
excerpt: "I’m not sure I’d recommend doing what I did, but I do think RSS is an incredibly powerful, under-appreciated, and under-utilized technology."
date: 2023-03-06
year: 2023
tags:
  - Approach
  - Internet
  - Personal
  - Social Media
sharedOn:
  twitter: TK
  mastodon: TK
share:
  facebookDescription: "The RSS icon, two semicircular waves radiating out from a small dot."
  twitterDescription: "The RSS icon, two semicircular waves radiating out from a small dot."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 25
---

Twitter is currently a lot like one of those [spiral coin drop wishing wells](https://www.spiralwishingwells.com/) you encounter at the mall. The quarter that is its imminent demise is [revolving faster and faster](https://www.bbc.com/news/technology-64804007) and will probably [drop out of sight sooner than later](https://www.theverge.com/2023/3/1/23620044/twitter-outage-down-timeline-feed-not-loading).

Part of [mourning the communities I once had](https://ericwbailey.website/published/centerless/) there involves figuring out how to not forget who was important to me. This means creating a way to stay abreast of what they’re doing.

One of the most obvious ways to stay in the know is subscribe to [RSS feeds](https://en.wikipedia.org/wiki/RSS).

There are plenty of resources out there that explain what RSS is, how to use it, and why it is important, so I won’t get into it here. I also won’t belabor how RSS is more in the spirit of the web than the walled garden that are most contemporary social networks.

What I will tell you is:

1. Stephen Heymann is a piece of shit, and
2. How this experience has been going for me.

## What I did

The trigger moment for me was reaching the end of my Twitter feed. That’s, uh, not supposed to happen.

I took this as a sign that I was racing the clock. It was a signal that Twitter’s underlying infrastructure is unstable to the point where anything could be irretrievably lost at any moment.

I took the time to go to my account’s list of people I’m following. Starting from the bottom and working upwards, I checked to see if they had a blog on their personal website. If they did, I threw their site’s URL into [Feedbin](https://feedbin.com/) and subscribed if the option was available.

I didn’t discriminate on who was added. The thought is that if I cared enough to follow you on Twitter, I also care enough to follow you elsewhere. I also did not discriminate on if you are a person or an organization.

## Lists, chronology, and feelings

Starting at the beginning of the list of who I follow on Twitter and working to the list’s end was a trip. The act lays out my journey of who I am today and what I believe minus the context of the journey it took to get there.

I’m not sure I recommend doing this.

The act throws you into a weirdly compressed existential place, where you find yourself wondering where you would have wound up if you never joined Twitter or didn’t follow the people you wound up following.

That said, I can’t go back on it now!

## Why didn’t you automate it?

There are [tools to do this for you automatically](https://opml.glitch.me/).

However, I wanted to see what folks were up to. [I like personal websites](https://personalsit.es/), but I don’t exactly have a ritual where I visit all of them on a periodic basis. Visiting each person’s personal site let me check in and see all the cool things people are doing in addition to writing blog posts.

I mean, seriously. Check out these beautiful creations—people are just out there doing their thing, and it's <em>wonderful</em>:

<figure
  role="figure"
  aria-label="Tyler Gaw.">
  <img
    alt="The about page for Tyler Gaw's personal website. A huge vector illustration of a kind, bearded man's staring face dominates the left-hand side of the screen. Behind it is a large red background with a light distressed texture and the phrase, 'Still trying.' set in a large, powerful sans-serif typeface. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/tyler-gaw.png' | url }}" />
  <figcaption>
    <a href="https://tylergaw.com/">Tyler Gaw</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Sophie Koonin.">
  <img
    alt="An intense vaporwave aesthetic for localghost, Sophie Koonin's personal website. Twin dolphins breach out from an infinite checkerboard background. In front of them are mirrored Greek statue busts placed on Corinthian columns. Behind the dolphins are cartoon palm trees. Everything is tinted pink, teal, and purple.In front of the columns is the main content of the website, a blog landing showing a preview of a post titled, 'Painting the whole beetle: an adventure in learning to learn.' Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/localghost.png' | url }}" />
  <figcaption>
    <a href="https://localghost.dev/">Sophie Koonin</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Steven Wittens.">
  <img
    alt="A complicated 3D tangle of white, dark blue, teal, red, and white arrows fill up most of the screen. Part of the tangle spells out the phrase, 'Acko.' Below it is the tagline, 'Hackery, Math, and Design', and below that is the name, 'Steven Wittens'. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/acko.png' | url }}" />
  <figcaption>
    <a href="https://acko.net/">Steven Wittens</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Adekunle Oduye.">
  <img
    alt="Huge white sans-serif type spells out, 'Adenkunle Oduye.' The name sticks starkly out from a black background and a mininal design. Below the name is a small pronounciation guide that reads, 'Add-eh-koon-lay Oh-due-yay.' There are two buttons present after the pronounciation, one offering a plain audio pronounciation and one offering a spicy audio pronounciation. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/adekunle-oduye.png' | url }}" />
  <figcaption>
    <a href="https://www.adekunleoduye.com/">Adekunle Oduye</a>.
  </figcaption>
</figure>

<figure
  role="figure"
  aria-label="Maggie Appleton.">
  <img
    alt="An essay titled, 'The Pattern Language of Project Xanadu' on Maggie Appleton's blog. The design uses delicate black and purple serif typography set on a sublte light beige-to-white gradient. Following the title is an excerpt that reads, 'Project Xanadu as a pattern language, rather than a failed software project'. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/maggie-appleton.png' | url }}" />
  <figcaption>
    <a href="https://maggieappleton.com/">Maggie Appleton</a>.
  </figcaption>
</figure>

There is also another factor to contend with, one that doesn’t neatly sync up with automation: people do whatever they want with fill-in-the-blank input fields.

## Finding RSS feeds

[Browsers used to do this for you automatically](https://support.mozilla.org/en-US/kb/live-bookmarks).

[Google is experimenting with reintroducing a RSS feed reader](https://www.theverge.com/2021/10/8/22716813/google-chrome-follow-button-rss-reader) in Chrome. Google has also systematically destroyed all trust I have in this area due to both [killing Google Reader](https://thenextweb.com/news/former-google-reader-product-manager-confirms-our-suspicions-its-demise-is-all-about-google), and, well, [being Google](https://killedbygoogle.com/). So that’s a non-starter.

Feedbin, like other dedicated RSS readers, is pretty smart about searching for common URL structures for where folks output their feeds to. This means you can usually paste someone’s root domain and it’ll figure things out for you.

Despite this, it is not a perfect science.

### Where are you?

Some people link straight to their personal website from the website field in their Twitter profile. That’s straightforward and great.

Sometimes people use the bio field instead, which again, pretty straightforward. A common situation for this is when someone has more than one thing they want to promote.

Services such as [LinkTree](https://linktr.ee/) arose to dodge around [the “link in bio” problem](https://anildash.com/2019/12/10/link-in-bio-is-how-they-tried-to-kill-the-web/). Finding a link to someone’s personal site here usually means one more click. This is not a huge deal in the grand scheme of things, but also not easily and accurately detectable by automation.

Some people link to other people’s websites. This is fine, but another case where nuance can cause automation to go awry.

Some people link to another social service, where that service is the one that lists their personal website. A good example of this is someone linking to their GitHub profile, and then that profile linking out to their personal site. Again, fine, and again, not easy to automate.

### Roach motels

Services like Instagram, Medium, and Substack are [longterm dangers to your content persisting](https://adrianroselli.com/2016/07/stop-throwing-away-your-content.html) and antithetical to the open web. They’re also immensely popular.

I did not try and follow these sorts of accounts (with some special exceptions), and encourage you to seek an alternative service if you do use one of these platforms.

### When your site comes with a RSS feed for free

Certain sites give you an RSS feed out of the box. I wish more services did this. It’s usually easy to guess which ones will, in that popular themes for services like Wordpress and Squarespace (eww) are tells.

Discovering the feed for these kinds of sites was the easiest, in that Feedbin almost always could work with the root URL of the site.

### When your personal site is a dead end

One thing I discovered is a lot of sites that look like they should have RSS feeds do not. Hobbyist developer blogs: I’m pointing my finger at you.

I mean, I get it. Building a blog from scratch is a good way to practice learning new skills—RSS may be low on the list of priorities. Still, it kills me when an interesting site has compelling content but does not provide any mechanism to know when updates occur.

There are also other options. [Oscar](https://www.ovl.design/) wrote [rss-manufaktur](https://github.com/inframanufaktur/rss-manufaktur), a brilliant way to add RSS feeds for blog-like websites. This is a great option that sits between doing nothing, or setting up and getting overwhelmed by web scrapers set to run on a preset schedule.

### When only the blog has a RSS feed

The little snippet of code that announces the presence of a RSS feed is sometimes only placed on the blog portion of the site. This sort of makes sense, but also impedes discovery.

I got in the habit of also checking the blog’s URL if the site looked like it should have a feed. It worked more often than not.

It’s better to place RSS feed metadata on every page. There’s no way of knowing how someone is winding up on your site, or why. Better to proactively accommodate them to make feed discovery easier.

### When you make feed discovery super easy

<em>Thank you</em>.

Hitting good ol’ <kbd>CMD</kbd> + </kbd>F</kbd> and searching for “rss”, “feed”, or “subscribe” is a quick and easy method of discovery. Finding a persistent link in the footer? Bliss.

A close second place is a RSS icon, although that means I have to visually scan for it. Remember, [the best icon is a text label](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label).

### When you don’t have an RSS feed, but have a newsletter signup instead

[Newsletters are great](https://ericwbailey.website/newsletters/)! I love them.

I’m totally fine getting an email telling me what you’ve been up to. The unspoken rule is that you don’t intermix it with marketing spam—it is a recipe for an instant unsubscribe if you betray this trust.

In my experience, individual newsletters don’t really sell you out too often. However, less scrupulous organizations often do. One thing you can proactively do here is to use [the plus sign trick](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html) to have some control over getting opted into other mailing lists without your consent.

Some newsletter services also offer companion RSS feeds as a feature, which is pretty cool. Buttondown, the service I use for both [my new personal newsletter](https://buttondown.email/ericwbailey) and [The A11Y Project’s newsletter](https://buttondown.email/the-a11y-project), has this capability.

Some RSS readers also did the hard work to make it easy and allow you to subscribe to newsletter services like you would a blog’s feed.

### When you offer multiple feeds based on the category of content served

Truly, a pro move. More of this please.

<figure
  role="figure"
  aria-label="Jeremy Keith, you magnificent son of a bitch.">
  <img
    alt="Feedbin's RSS feed subscription modal. The URL 'https://adactio.com/' has been entered. There are seven feeds present: Journal, Links, Articles, Notes, Adactio, and then Journal and Links again. The repeated feeds offer JSON alternatives. Switch toggles are present, allowing you to subscribe to one or multiple feeds. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/i-doubled-down-on-rss/multiple-feeds.png' | url }}" />
  <figcaption>
    Jeremy Keith, you magnificent son of a bitch.
  </figcaption>
</figure>

## Reading my RSS feed

I don’t read posts in my RSS reader. Instead I’ll pop them open in a new tab and enjoy the designed experience. Making a website is a ton of work and I try to respect that.

That said, one huge benefit to RSS readers is their version of [reader mode](https://css-tricks.com/reader-mode-the-button-to-beat/), where you as the reader can modify how the reading experience looks to better suit your needs. Ideally [the blog uses all the appropriate metadata](https://scribe.rip/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9) so you can use the browser’s reader mode too.

I consider both RSS reader interfaces and browser reader modes to be highly customizable assistive technology. The web a better place for these kinds of functionality existing.

### Even more lists and feelings

The biggest impact on doubling-down on RSS is emotional.

Twitter enabled an easy way to create [parasocial relationships](https://en.wikipedia.org/wiki/Parasocial_interaction), but structurally provided a low effort, low stakes mechanism to do something about it.

I’m not saying I cultivated friendships there like some sort of Machiavellian genius. However, telling someone you enjoyed something they wrote via a quick Tweet was far lower stakes than the implicit formality of email.

Think of it as the difference between:

- Being at a party and telling someone you like their outfit, versus
- Seeing someone on the street, deciding you like their look, then following them home so you can ring their doorbell to tell them the same.

To that point, RSS is entirely one-sided. Using it as your primary info-gathering tool means you’re transformed into a passive consumer.

Sure, you can share stuff you read on social media via your reader’s tooling, but it is not the same. If you’re someone like me who is already feeling the loss of community, this is an awful experience.

### What about webmentions?

I don’t really get [webmentions](https://en.wikipedia.org/wiki/Webmention). I mean, I do from a technical perspective, but they usually manifest on a site as a list of clutter that usually gets tucked away behind a disclosure menu.

I have weeded out a few sites from my RSS reader that pipe webmention events into their feed and consequently overwhelm mine. That’s for you, the site owner, and not for me, the site reader.

### Format and formality

Most industry blog posts skew towards a more serious and instructional tone. [There are exceptions](https://mango.pdf.zone/finding-former-australian-prime-minister-tony-abbotts-passport-number-on-instagram), but they are not that common.

If you judge someone solely from the content they blog about, most folk will seem stodgy and humorless. I’m painfully aware that I’m no exception.

The problem is that if you position yourself as irreverent, you’re likely to be dismissed unless you are exceedingly technically competent. This is true for many disciplines, but it is specifically relevant in tech—especially if you’re not white or male.

This means there’s a ton of unspoken pressure to produce dry, technical pieces to reinforce the perception of being an experienced authority.

I’m not saying everyone should drop what they’re doing and get on tumblr. It’s more that the blog post’s format, as well as our industry’s relationship to it, impose some implicit constraints that can reduce someone’s identity.

### Everything happens so much

[I have a ritual](https://timkadlec.com/remembers/2023-02-23-investing-in-rss/) where I have a set of news and industry blogs I read daily, to stay current. This includes my RSS reader.

Shoving nearly the entirely of my Twitter feed into an RSS reader created drastically more content to read. I definitely skip and skim more. If you adopt this sort of approach be prepared to do the same.

I have my daily reads. I am subscribed to an uncomfortably large amount of newsletters. The dialog still continues on Twitter. Mastodon also has its share of industry chatter now (but [discovery still has a lot of friction](https://ericwbailey.website/published/my-mastodon-strategy/)).

And yet, despite all this effort I still feel a large amount of [FOMO](https://en.wikipedia.org/wiki/Fear_of_missing_out). I am sure this is part of the grieving process, but I also hate feeling like I am simultaneously too plugged in and not plugged in enough.

### Bias

Probably the worst aspect of the current state of RSS is that it has been reduced to something whose main practitioners are deeply invested in technology, and specifically web technology.

RSS is very much of the mentality of the time of its invention: the open and free web of decades past.

The systematic suppression of RSS means that the majority of the people utilizing it skew towards the key usage demographic of that era. To say it plainly: that means, wealthy, white, and male. Our [current industry dynamics even further reinforce this](https://theconversation.com/the-retention-problem-women-are-going-into-tech-but-are-also-being-driven-out-200625).

One thing Twitter did incredibly well was expose me to many new viewpoints and philosophies. Importantly, many of these came from minoritized individuals who historically did not have easy access to centralized platform to organize around.

Despite adding as many of my Twitter followers to my RSS feed as I could, my feed’s content still disproportionately represents the majority demographic. This means my worldview is shrinking.

I may now be reading deeper into topics like the particulars of home automation, but it means I have less of a chance of knowing about the wider concerns of the world. This is horrifying, given that we’re [backsliding into genocidal fascism](https://www.damemagazine.com/2022/03/15/trans-people-are-in-grave-danger/).

## An experiment

One way to move the needle on RSS adoption is to advocate for it for folks who normally wouldn’t use it. It might be more of a struggle than you initially think.

Try talk someone you know who casually uses the web into trying RSS. Here’s some parameters to communicate:

- You can use it on your browser, and also not on your browser.
- You don’t have to pay for it, but you might have to pay for a service to read it.
- Some, but not all sites use it, and it takes additional effort to confirm which do.
- You need to copy and paste URLs for it to work, but also the right URLs.
- It will not look like the site you’re used to reading.
- It does not have ads, but the site it points to still does.
- You may or may not see the entirety of an article’s content.
- Sometimes [content you don’t see on the website will show up in your reader](https://daverupert.com/rss-club/).
- Sometimes content you don’t see on your reader will only be available on the website.
- You may or may not see other parts of the site other than the published article.
- You will not be able to comment on the published article directly and need to go to the source instead.

Now compare that with typing “cnn​.com” into google​.com’s search (a ton of people visit URLs this way). We’ve clearly got our work cut out for us.

## &#x3C;/rss&#x3E;

So, there you have it:

A random person on the internet who freaked out and jammed as much of his entire Twitter feed into his RSS reader as possible. He then freaked out about freaking out, and then freaked out again about the new prison he built for himself.

I’m not sure I’d recommend doing what I did, but I do think RSS is an incredibly powerful, under-appreciated, and under-utilized technology.

As our communities continue to fracture, an open data format like RSS may be a way to bind them back together. The web just needs to double-down on it first.
