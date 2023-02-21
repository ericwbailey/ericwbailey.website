---
layout: "layouts/post.njk"
title: My Mastodon strategy
source: ericwbailey.website
excerpt: " A lot of the following is an attempt of a highly motivated individual trying to recapture what I once had."
date: 2023-02-21
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
  facebookDescription: "A silhouette of a elephant head with the Twitter logo inside of it."
  twitterDescription: "A silhouette of a elephant head with the Twitter logo inside of it."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 24
---

I know, I know. Yet another “how to Mastodon” post.

That said, I feel like I’ve finally gotten at least a semblance of traction on making my [Mastodon](https://en.wikipedia.org/wiki/Mastodon_(social_network)) feed worthwhile. Reader, it was not easy.

I should also point out that I was incredibly invested in Twitter for staying on top of industry goings on, networking, friendship, and entertainment. A lot of the following is an attempt of a highly motivated individual in [a state of mourning](https://ericwbailey.website/published/centerless/) trying to recapture what I once had.

## Weekly

I do the following every Sunday:

### Debirdify

The reason I use [Debirdify](https://debirdify.pruvisto.org/) on a weekly basis is to try and keep up with expatriation as Twitter’s death spiral speeds up. Once authorized, Debirdify can search through both people you follow on Twitter and people who follow you.

Debirdify will attempt to identify the presence of a Mastdon link in someone’s Twitter profile, and then add it to a CSV you can import on Mastodon to mass-follow.

Mastodon allows for granular control over bulk import of data such as followers, which is a bit of a double-edged sword. Be very careful that you select appending to your follower list, and not override.

<figure
  role="figure"
  aria-label="Don’t do what I did and accidentally overwrite your follower list.">
  <img
    alt="Mastodon web UI for importing data. The title of the section is, 'Import type'. The instructions read, 'You can import data that you have exported from another server, such as a list of the people you are following or blocking.' Following that is a select menu in a collapsed state, with a selected option that reads, 'Following list.' After the select is two columns. The left column is a file upload prompt with a label that reads, 'Data', and instructions that reads, 'CSV file exported from another Mastodon server'. The right column has two radio options. The first radio option reads, 'Merge. Keep existing records and add new ones.' The second radio option reads, 'Overwrite. Replace current records with the new ones.' Following the two columns is a button labeled, 'Upload'. Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/my-mastodon-strategy/mastodon-import.png' | url }}" />
  <figcaption>
    Don’t do what I did and accidentally overwrite your follower list.
  </figcaption>
</figure>

Debirdify also offers a few other interesting features, such as a visualization of follower breakdown by instance, as well as identifying possible near-matches.

<img
  alt="A donut chart with a title of, 'Instance Distribution'. The chart has one large red slice that takes up about 25% of the chart, an orange slide that takes up about 17%, a lime green slicer that takes up about 10%, and then a succession of around 30 thinner slices that take up the remaining 48%. Below the chart is a legend listing instances in order of instances representation. Instances are mastodon.social, front-end.social, hachyderm.op., mstdn.social, indieweb.social, mastodon.online, mastodon.cloud, xoxo.zone, a11y.info, vis.social, mastodon.world, typo.social, toot.cafe, mastodon.lol, disabled.social, fosstodon.org, techhub.social, dair-community.social, mastodon.scopt, mas.to, mastodon.gamedev.place, webperf.social, infosec.exchange, sfba.social, mastodon.xyz, newsie.social, ruby.social, kolektiva.social, mstdn.science, mastodon.art, toot.community, chaos.social, social.coop, tilde.zone, social.lol, vivalid.net, thoughtbot.social, masto.design, better.oston, tech.tgbt, aus.socail, mastodon.design, social.vasilis.nl, social.design.systems, ist.social, wandering.shop, universeodon.com, carhenge.club, toot.site, mastodon.nl, mastodon.yupgup.com, mastodon.laurakalbag.com, mastodon.ie, bitbang.social, jorts.horse, iosdev.space, masto.ai, pdx.social, queer.garden, and mastodonapp.uk. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/my-mastodon-strategy/debirdify-instance-distribution.png' | url }}" />

Of the techniques I use, Debirdify is probably the one you want to use first. The time is ticking on [automated helper services like this continuing to be allowed on Twitter](https://www.theverge.com/2023/2/2/23582615/twitter-removing-free-api-developer-apps-price-announcement), so better to get in while you can.

### Followgraph

[Followgraph](https://followgraph.vercel.app/) is a service that combs though who you are following on Mastodon, determines which accounts people you follow are following, and then if you’re following those accounts or not. If you aren’t, they are listed in order descending total of mutual follower count.

<img
  alt="A table of Mastodon accounts with a title of, 'Followgraph for Mastodon. Three rows are present, with each row having an avatar, a title and description pulled from their Mastodon profile info, and a follow button. The three results are Eugen Rochko, Mastodon's official account, and Casey Newton. Cropped screenshot."
  loading="lazy"
  style="border: 1px solid #dddddd;"
  src="{{ '/img/posts/my-mastodon-strategy/followgraph.png' | url }}" />

The reason I use this service weekly is the same as Debirdify. As more people migrate over to Mastodon, this increases my chances of finding them.

The downside, however, is this reinforces a lot of biases in who I follow. Because of this, I recommend <strong>starting from the bottom</strong> of the list as opposed to the top after the first pass—less mutual followers isn’t indicative of less worth.

I also wish there was a way to hide people I’m not interested in following. There are certain people I explicitly have no interest in adding to my feed, but remembering why each time I review the results is mental overhead I don’t need in my life right now. That said, I do appreciate that this is a free tool run by someone in their free time.

### Mastodon Flock

Winning the award for best UI in this post, [Mastodon Flock](https://mastodon-flock.vercel.app/) allows you to connect your Twitter and Mastodon accounts to follow people in bulk.

<figure
  role="figure"
  aria-label="Click “Cancel” for a treat!">
  <img
    alt="A UI that looks like Windows 95's installation wizard, complete with a system tray that contains a clock and volume icon. The title of the installer is 'Mastodon Flock.' Floating in the center of the screenshot is an application window titled, 'Installation Method'. Inside the window is the prompt, 'Select wich installation method you'd prefer.', followed by two radio options. The first option is 'Typical,' with a following description that reads, 'Connects to your Twitter and Mastodon instance. You are able to see who you already follow, as well as follow people in bulk.' The second radio option is, 'Advanced,' with a following description that reads, 'Searches the Fediverse directly. You must manually follow each account externally.' After the radiogroup is more instructions that read, 'Click Next to authorize the setup to read the necessary information from your Twitter account. At the bottom of the window are three buttons labeled, 'Back', 'Next', and 'Cancel'. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/my-mastodon-strategy/mastodon-flock.png' | url }}" />
  <figcaption>
    Click “Cancel” for a treat!
  </figcaption>
</figure>

### Whom to Follow

[Whom to Follow](https://whomtofollow.com/) is another “follow mutual follows” service.

<img
  alt="A list of accounts with the title, 'Some new accounts you might like'. Three accounts are listed, including an avatar, their name, their Mastodon instance account, their posting frequency and count, their profile bio statement, avatars representing mutual followers, and follow buttons. The listed accounts are 'Bas Broek, basthomas@bird.makeup', 'Mike Paciello, MikePaciello@mastodon.social', and 'Vincent Durand (Wyllen), One_div@piaille.fr'. A preferences disclosure menu in an open state is also present, listing sort order options. The options are, 'Percentage of Followers You Follow', 'Most Followers You Follow', 'Most Followers', and 'Fewest Followers'. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/my-mastodon-strategy/whom-to-follow.png' | url }}" />

If you’re picking up on a theme here, it’s that combing through multiple services to exfiltrate people I want to learn from takes time and effort.

Unlike Mastodon Flock, Whom to Follow does not require a login to function. If you feel weird about giving random apps access to your account, this is the service for you.

### StreetPass

One neat feature about Mastodon is you can add code to your website to verify your identity and create a programmatic association between a website you own and a URL you list on your profile.

<img
  alt="My Mastodon profile. The screenshot includes an avatar, my display name, my Mastodon handle, and my bio statement, as well as a profile information list widget. My display name is, 'Eric', my Mastodon handle is '@eric@social.ericwbailey.website', and by bio is, '#accessibility advocate, lapsed inclusive designer. The #A11Y Project maintainer, design systems wonk, recovering curmudgeon.' The list widget has five rows. The first row is titled, 'Joined', and has a value of 'Jan 04, 2023'. The second row is titled, 'Pronouns', and has a value of 'he/him/his'. The third row has a title of 'Avatar', and has a value of 'Illustration of a white man with short dark hair, beard, and glasses.' The fourth row has a title of 'Website', and a value of 'ericwbailey.website.' It also has a green highlight and a checkmark icon before the website URL value, indicating I have verified ownership of my domain. The fifth row has a title of 'Newsletter', with a value of 'ericwbailey.website/newsletter'. A prominent button labeled, 'Edit profile' is also present. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/my-mastodon-strategy/mastodon-profile-verified-link.png' | url }}" />

It is not a perfect system, but it is good enough. It’s also a very web-friendly gesture in a sea of walled garden social media sites that like to pretend the interest outside of their domain does not exist.

[StreetPass](https://streetpass.social/) works by using a browser extension to passively monitor every website you visit. If it detects Mastodon identity verification code it will log it to a list for you to review at a later date.

I like this in that it surfaces a way to discover people doing interesting things that exists outside of the immediate filter bubble of “people you know like you who know people also like you.”

Granted, I still have the selection bias of what I’m usually reading online is aligned with my personal interests, but you gotta draw the line somewhere.

## Daily

I check [FeedSeer](https://feedseer.com/). This web app is an open source Mastodon-centric replacement for [Tweet Shelf](https://www.tweetshelf.com/), which in turn is a replacement for [Nuzzel](https://www.androidpolice.com/2021/05/06/twitters-scroll-acquisition-could-give-it-a-personalized-newsfeed-that-cuts-out-all-the-usual-toxicity/). Wheels within wheels, folks.

This is less about finding people, and more trying to stay on top of the current zeitgeist. That said, it  sometimes does shake out good conversations, and consequently good people to follow.

## Ad hoc

I do the following when the mood strikes me:

### Follow people who follow me

Folks, I am begging you to add information to your Mastodon profile. If you follow me, I am going to pop into your profile and see what you’re all about.

<figure
  role="figure"
  aria-label="Who are you?">
  <img
    alt="Profile demonstrating how a new Mastodon user's profile appears. The avatar uses the default illustration of a happy elephant head. The background banner is a defautl light blue. The display name is, 'a fake name', and the Mastodon handle is, '@fakename@fake.account'. Following that information is the profile information list widget, which only has one row. The row's title is, 'Joined', and has a value of 'Dec 06,2022.' Underneath the widget is additional profile information, which states that the account has zero posts, one account they're following, and zero followers. Cropped screenshot."
    loading="lazy"
    style="border: 1px solid #dddddd;"
    src="{{ '/img/posts/my-mastodon-strategy/no-profile-description.png' | url }}" />
  <figcaption>
    Who are you?
  </figcaption>
</figure>

I view investing in Mastodon as an opportunity to revitalize my follower feed. Part of that includes evaluating who you are and what you’re interested in. Please help everyone out by telling everyone a little bit about yourself!

### Follow people who get boosted

Boosting is similar to Twitter’s retweet functionality, minus algorithmic weighing of the act.

If someone boosts something interesting, they’re usually doing it for a reason. If it’s also interesting to me, I’ll usually pop onto the profile of the person whose post was boosted to see what their whole deal is.

### Follow people from followed hashtags

You can follow hashtags on Mastodon, which generates a timeline of posts from folks using the hashtag you’ve elected to follow. This is important, in that without hashtags Mastodon has made a deliberate decision that everyone structurally cannot see everything everyone else is doing.

<figure
  role="figure"
  aria-label="Mastoot for iOS">
  <img
    alt="A list view on an iOS app. The list's title is, 'Followed Hashtags'. There are five hashtags present in the list, and they are, 'a11y', 'accessibility', 'fediblock', 'PixelArt', and 'somerville'. Cropped screenshot."
    loading="lazy"
    style="border: 1px solid #dddddd;"
    src="{{ '/img/posts/my-mastodon-strategy/followed-hashtags.png' | url }}" />
  <figcaption>
    <a href="https://apps.apple.com/us/app/mastoot/id1501485410">Mastoot for iOS</a>.
  </figcaption>
</figure>

Hashtags serve as a method to bubble things up into the common discourse of servers that haven’t blocked each other for easier discovery. And speaking of blocking servers:

### Block instances, hashtags, and people

Blocking is another important aspect of social media hygiene, and Mastodon is no different.

#### Instance blocking

Mastodon allows you to block everyone from an instance level. A good way to think about this is if you set up your email to block any incoming messages from anyone from, say, a @free-yeti-cooler-4-u.biz domain.

<img
  alt="A cropped screenshot of Mastodon's domain block Federation preferences UI. The UI has a text input with a placeholder label that reads, 'Domain'. Following it are two large buttons that read, 'Search' and 'Reset'. Underneath the buttons is a list of two blocked domains. The first blocked domain is called 'example.server', and has a follower count of 14 accounts. The second blocked domain is, 'another.example.instance', and has a follower count of two. In the upper-right portion of the screenshot are three other buttons labeled, 'Add new domain block', 'Export', and 'Import'."
  loading="lazy"
  src="{{ '/img/posts/my-mastodon-strategy/federation-blocking.png' | url }}" />

The reason for this is there are a lot of incredibly vile instances out there. I follow [the #fediblock hashtag](https://mastodon.art/@fediblock) to surface especially egregious places.

If you don’t run your own instance (I do), you don’t really need to worry about this. If your instance is smaller, you can definitely recommend servers to block to your instance administrators. That said, be kind and do the work to determine if there is an established process for reporting this sort of thing.

I understand protocols do not work this way, but I wish Mastodon as a service built atop [ActivityPub](https://www.w3.org/TR/activitypub/) would take some ownership and, you know, ban Nazis, pedophiles, and Nazi pedophiles outright.

It is exhausting and extremely depressing to learn about, and then visit these instances to verify their content is as bad as reported. I’ve read and seen things I can’t unlearn or unsee.

Twitter at least nominally pretended to do this for us, but has [let these efforts languish](https://www.techdirt.com/2023/02/07/pretty-much-every-expert-agrees-that-elon-has-made-twitters-child-sexual-abuse-problem-worse/) like a lot of other critical platform services. I will say that it is probably net better that the [human content moderators it likely took to accomplish this](https://www.washingtonpost.com/technology/2019/07/25/social-media-companies-are-outsourcing-their-dirty-work-philippines-generation-workers-is-paying-price/) are now free from that particular hell, and hopefully have other ways to put food on their table.

#### Blocking hashtags

You can block words on Mastodon, and a word can be a hashtag.

This is one of those circumstances where community norms actually work in the community’s favor, in that it’s easier to remove content you don’t want to read if people opt into describing it with something that a blocking phrase can target.

#### Blocking people

Blocking people on Twitter is a lot like blocking people on Mastodon, in that it’s probably a good thing to do proactively.

Unfortunately, it is far easier for a motivated individual to circumvent blocks on Mastodon. This makes things like [brigading](https://institute.global/policy/social-media-futures-what-brigading) a lot more commonplace. Double-unfortunately, Mastodon’s current general population skews more towards tech-literate, meaning there’s a higher than normal chance they possess the skills to bypass platform protections.

## Mastodon isn’t Twitter and you should stop trying to treat it as such

Preemptively adding this common refrain from the Mastodon community at-large should indicate the culture of unsolicited mansplaining that is still prevalent.

The point is not that I’m trying to fit Twitter-shaped interactions into Mastodon. The point is I’m trying to make this social network engaging enough to use through a whole host of unofficial tools and esoteric processes.

Let [Mastodon’s new server discovery experience](https://joinmastodon.org/servers) be evidence pointing to that previous point.

## This all said

If you take anything away from this post, it’s that I expend a tremendous amount of effort to try and make Mastodon work. This isn’t even beginning to get into the complexities of international IP law, server maintenance, and other difficult problems you need to contend with as an instance administrator.

Despite all this effort, I’m still not entirely convinced it is a place for me.

Mastodon has some deep problems that arise from its core architectural decisions. To be clear, so does Twitter. If you’re poised at your keyboard ready to tell me that Mastodon—a microblogging platform with following, rich media, and hashtag functionality—isn’t intended to be a Twitter replacement, please don’t.

My biggest criticism and wish for the platform is a better way to discover and follow people who aren’t like me.

I’m not saying I want to be buried in a sea of folks who believe in the opposite of my political and philosophical ideologies. I want a relatively easy way to find interesting people doing interesting things outside of my immediate filter bubble.

### Level of effort

Mastodon in its current state does not do this type of discovery well. This means the onus is on us, its users to undertake it.

That’s a non-starter for some folk, especially if they don’t skew towards working in tech or tech-adjacent fields.

I also feel that instances based on interest aren’t great either, in that people are far too complicated to be reduced in such a way. Because of this, I feel self-hosting is ultimately the way forward, but that is a different post for a different time.

Despite the previous thoughts, I plan on continuing to be on Mastodon, at least for a little while longer. If the kinds of things I say here interest you, consider following me over there at [eric@social.ericwbailey.website](https://social.ericwbailey.website/@eric).
