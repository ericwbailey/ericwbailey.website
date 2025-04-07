---
layout: "layouts/post.njk"
title: "Re: Selling your extension"
source: ericwbailey.website
excerpt: "There’s hundreds of thousands of web extensions out there, each with an owner who has their own thoughts and motivations."
date: 2022-08-23
year: 2022
tags:
  - Browser Extensions
  - Cognition
  - Subversion
series:
  next:
    - title: "Article pitch for your consideration"
      url: https://ericwbailey.website/published/article-pitch-for-your-consideration/
furtherReading:
  - title: "Under New Management - Detect when your extensions have changed owners"
    source: "GitHub"
    url: https://github.com/classvsoftware/under-new-management
attribution: "Thanks to Grant, Toby, and Wayne for their feedback."
sharedOn:
  twitter: TK
  mastodon: TK
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 16
---

Although my fifteen minutes of fame for [Millennials to Snake people](https://chrome.google.com/webstore/detail/millennials-to-snake-peop/jhkibealmjkbkafogihpeidfcgnigmlf?hl=en-US) is long over, I still get the occasional email offering to:

- Buy the extension outright, or
- Pay me to add their code into it.

The goal of each offer is the same. The solicitor wants to add malicious code for some unnamed, nefarious purpose. Usually it’s ad tech-related [spyware](https://en.wikipedia.org/wiki/Spyware).

I received one of these emails recently, and found it to be a particularly effective specimen of this shadier side of the internet. Let’s dissect it.

Before I get started, I’d like to communicate that installing a web extension is an exercise in trust. You install an extension under the assumption that it will do what it says it will do in perpetuity. Web extensions:

- Require a wide range of permissions to function,
- Update silently in the background, leaving you none the wiser to what has changed, and
- Don’t prompt you if ownership changes hands.

Web extensions also get special treatment. They show up in a reserved space that is heavily affiliated with the browser. This placement builds a sense of trust.

## The email

Here is the email in full:

<blockquote>
<p>Re: Selling your extension<br />
katie@chrome-extensions.uk<br />
Tue, Jun 21, 4:45 PM</p>

<p>Hi</p>

<p>I am Katie Overton from Chrome Extensions UK store. I emailed you last week and just wanted to follow up about the monetization of your extension Millenials to Snake People using our Premium Bing Hosted Product.</p>

<p>If you decide to go ahead with this opportunity, you can earn up to $1000 a month per 5000 users as it is a premium product from Bing by invitation only.</p>

<p>If you are in the process of reviewing or signing an agreement with us, please return as soon as you can, as you don’t want to miss out on this great opportunity with Bing.</p>

<p>I'm happy to answer any questions you may have and look forward to hearing from you soon.</p>

<p>Kind Regards<br />
Katie Overton<br />
Head Of Business Relations</p>
</blockquote>

Let’s pick this email apart, as it is a pretty solid example of predatory manipulation.

## The email subject line

First, let’s tease apart the subject:

> Re: Selling your extension

I never emailed them about making the sale. Using “Re:” is a slippery growth hacker move to get my attention when scanning my inbox for new email. The following subject line also piques my interest, as I have no plans of selling my extension and don’t remember opening a dialog with anyone about it.

Regardless, the subject is enough to get me to open the email and see what’s going on. Maybe someone hacked my account and is up to no good?

## The email address

Next is the email address:

> katie​@chrome-extensions.uk

The first name-only username signals importance, as that’s typically reserved for founders, early hires, and other high-level individuals within an organization.

At the time the email was sent, chrome-extensions.uk also forwarded to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions) (it now returns a DNS error). While it is confusing that someone who is trying to look like a legit part of Google would be reaching out to buy the extension, it is probably real-feeling enough to win some people over.

## The email’s body content

Next is the first paragraph of the email:

> I am Katie Overton from Chrome Extensions UK store. I emailed you last week and just wanted to follow up about the monetization of your extension Millenials to Snake People using our Premium Bing Hosted Product.

If “Katie” was a little smarter, they’d update, “I am Katie Overton from Chrome Extensions UK store” to further reinforce the narrative of previous contact—possibly updating it to be something that is more natural-feeling, but also reinforces their fake-official Google employee status.

“Katie” also did not email me last week, but is hoping their mind game holds my attention and plants the seed of profit. Mentioning her affiliation with the real-sounding “Chrome Extensions UK store” is also contributes to the gambit to build a sense of legitimacy.

All of this is building towards the heart of the scam, to get me to add “Premium Bing Hosted Product” code to my extension.

### What the hell is Premium Bing Hosted Product?

Make no mistake: it’s spyware at best and [malware](https://en.wikipedia.org/wiki/Malware) at worst.

This is where the narrative starts to fall apart for me. I find myself wondering why is a Google employee reaching out to add Microsoft content to my extension? I am also, however, a gigantic nerd.

Someone less literate of the tech space might read this and think it is legitimate content from a recognized brand. It’s fallacious to think:

- Only developers are involved with managing extensions, and also that
- Everyone who works at software companies is technical.

Many products and services have a browser extension as part of their offerings, and may allocate someone less knowledgeable about code to manage it. It’s also a fallacy to assume tech literate folks are immune to scams.

The phrase “Premium Bing Hosted Product” is a Trojan Horse and I’m confident that anyone who replies to this email will have a very helpful set of instructions on how to copy and paste some code to get that promised “opportunity” rolling.

### Enticement
“Katie” is quick to follow up with:


> If you decide to go ahead with this opportunity, you can earn up to $1000 a month per 5000 users as it is a premium product from Bing by invitation only.

It’s a smart play. After attempting to set up credibility, they quickly tell you you can earn a significant amount of money. Millennials to Snake people has ~11,000 users at the time of publication—some quick math from what this email promises me means I could potentially make a ton of money for doing almost nothing.

The second fist in this one-two punch strategy is an appeal to exclusivity, in that this offer is allegedly “invitation only.” Not only am I getting the promise of riches, but also I’ve been deliberately selected as someone deserving.

### Predation

The narrative now turns to urgency after establishing credibility and promising wealth.

> If you are in the process of reviewing or signing an agreement with us, please return as soon as you can, as you don’t want to miss out on this great opportunity with Bing.

Given that the opening play was to make me think I’d already initiated the process, this helps push me along.

### Accommodation

Finally, “Katie” signs off with a bog-standard corporate phrase:

> I'm happy to answer any questions you may have and look forward to hearing from you soon.

This basically says, “I will do anything to make this deal happen.”

## The signature

I’m only mentioning “Katie’s” sign off because most of the extension grifter email I get does not include one. The signature, including their important-sounding role of Head Of Business Relations is one more piece of info that helps drive an attempt at creating a sense of legitimacy.

## Trust

This email is a fine-tuned package of pure manipulation, laser-focused to get you to read and take action on it. I was coerced enough by it to read it in full.

I have no plans to sell access to Millenials People to Snake People. I’m fortunate enough to be decently well-off and like to think of myself as an ethical person, but I’m also only just me. I also find myself wondering what I’d do if I was circumstantially thrown into extreme poverty, and how well my scruples would hold.

There’s hundreds of thousands of web extensions out there, each with an owner who has [their own thoughts and motivations](https://ericwbailey.website/published/chinese-rooms-wasps-slime-molds-and-the-problem-of-other-minds/#the-problem-of-other-minds). The owner of every web extension you install wades through these kinds of emails, and can be tempted by them.

There’s not much you can do about a subverted extension, save for being very discriminating in what extensions you choose to use. If an extension switches sides it also means the damage is already done.

It might be worth taking a look at what extensions you have installed, if you haven’t used them in awhile, and if you could survive removing them.
