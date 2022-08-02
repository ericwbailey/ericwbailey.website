---
layout: "layouts/post.njk"
title: "The optics of pair programming"
source: ericwbailey.website
excerpt: "I had a culture shock moment when I offered to pair at my new, post-thoughtbot job. I've now come to understand some of the nuance that lives within the offer"
date: 2022-05-17
year: 2022
tags:
  - Approach
  - Development
attribution: "Thank you to <a href='https://appallingfarrago.com/'>Matt Sumner</a> and my other former thoughtbot coworkers for the input, feedback, and pairing help."
sharedOn:
  mastodon: https://mastodon.technology/web/@ericwbailey/108317650810986888
  twitter: https://twitter.com/ericwbailey/status/1526563868063023106
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 11
---

If you are not familiar, [pair programming](https://en.wikipedia.org/wiki/Pair_programming) (pairing) is the practice of collaborating directly with another person to work on a problem. You’ll often hear it in development contexts, but I've also encountered it with design.

In the Before Times, we paired by walking over to a coworker's computer, sitting next to them, and talking through the problem as they worked on it. Nowadays, it is (hopefully) remote screen sharing.

## Pair programming culture at thoughtbot

When I worked at thoughtbot, we had what I would call [a healthy culture of pairing](https://github.com/thoughtbot/guides/blob/main/working-together/README.md). Pairing sessions were voluntary, organic, and lasted as long as the problem would. This is different than other shops, which may default to [a grueling, draining expectation of pairing around the clock for the entire work week](https://www.simplermachines.com/the-mortifying-ordeal-of-pairing-all-day/).

Pairing was also explicitly understood and accepted as one of multiple ways to help accomplish project work. This understanding was implicitly reinforced by senior employees modeling the behavior. Peers with domain expertise also pitched in on pairing sessions even if they are not assigned to the project.

I had a culture shock moment when I offered to pair at my new, post-thoughtbot job. I've now come to understand some of the nuance that lives within the offer.

## Where pair programming gets weird

There are some subtle, below-the-surface aspects to an offer to pair. I’ve had to learn some of them the hard way, so hopefully, my experiences can be beneficial to you:

### Leverage

thoughtbot offers consulting services, and these services aren't cheap. When a thoughtbot employee asks a client to pair, there are some unspoken power dynamics at play. A consultant:

- Is typically brought in because something isn't going well.
- Operates largely independent of the client’s bureaucracy and has the latitude to use their workflows and tooling.
- Costs a lot.

From a client’s perspective, it may be hard to say no to a request to pair knowing these circumstances, even if the offer is coming from a good place. This is especially relevant if the client does not have an existing pairing culture.

On the flip side, this nuance can be easy to miss by the consultant doing the asking, and we didn't always stop to consider these dynamics. Moreover, we had internalized thoughtbot's pairing culture. Making an offer to pair is on a level playing field—a good faith gesture made at face value.

Only now I realize it might have unintentionally left the client developer or designer feeling uncomfortable, defensive, and powerless about the entire affair.

The same applies to internal politics, where you can substitute “consultant” with “superior.”

### Face

When making an offer to pair, a common interpretation is an indirect negative assessment of someone's ability.

Things can get very uncomfortable if the offer to pair is coming from observed behavior. This is magnified if the person you’ve offered to pair with is new to the industry or role—practice caution as the request might be interpreted as needing to "clean up" their work.

The reverse is also true. Without a healthy pairing culture, asking to pair can be seen as lacking skill and not being up to the job.

Unfortunately, it is a fallacy to assume everyone you work with has your best interests in mind. Accepting an offer to pair (especially with the pressures previously described) can also be seen and interpreted by subordinates, peers, and superiors as an admission of weakness or lack of skill.

In addition to experience level, I would also like to say that these considerations are magnified when you consider factors like race and gender.

### Privacy

Someone not wanting to have a second set of eyes on what they’re doing might come from feelings of inferiority, imposter syndrome, or uncertainty about a new environment (especially if they’re a new hire, recently changed teams, or are on a performance improvement plan).

Someone who isn't confident in what they are doing may not want someone else observing them work, especially if they already feel anxious about the amount of time it takes them to accomplish a task.

Ironically, pairing is really good at addressing this lack of confidence. However, it is not easy to make inroads this way unless the company culture trends more towards collaborative and ego-free.

The darker side of a desire for privacy can be knowledge hoarding. Here, a person doesn’t want to share their process or learnings with others. This practice is antithetical to pairing culture and you are not likely to make inroads here.

### Learning styles

Another factor to consider is that a person might be looking for help, just not this way.

Pairing involves a lot of focused, deep thinking mixed with close interpersonal time, which isn't an effective way for some people to work. In an industry that optimizes for “culture fit,” this can place undue burden on people who don't closely conform.

When the offer to pair is taken at face value, someone not comfortable with this kind of offer can reject it and not think twice. When a pairing culture isn’t the norm, that individual then needs to do calculation on whether or not they can reject the offer without it negatively affecting how they are perceived.

When the offer is accepted, it also may implicitly suggest this is an activity they enjoy doing. This trains people to continue the practice.

### Misunderstanding

Sometimes we’d also have to contend with feelings of surprise when we showed up and asked to pair. thoughtbot's process is sold as a value add, but the people we'd pair with were not always the ones who purchased our services.

Showing up and introducing new working methods can sometimes be too much. We learned not to always go in guns blazing, even for projects with a shorter deadline.

## Pair programming culture

As an abstract practice, pairing is one of many effective methods to work through a problem. However, an offer to pair does not work as initially intended without a healthy work culture and open and transparent practices.

So, how do you move the needle on this?

Embracing vulnerability can be an effective strategy. Be proactive and invite others to pair with you as you work through a problem. This both shares with others your understanding of what pairing is, and helps normalize it.

Also, know that if you want to push on updating organizational values, it can take a lot out of you.

Some organizations are too toxic or hostile to push towards this kind of positive transparency. In these scenarios its better to not be the sole crusader. Look for allies where you can, but also make sure you prioritize your own health and well-being.

## All that said

I enjoy pairing, even after learning these lessons. It can be a great way to bond with your coworkers, and the sense of camaraderie it can foster is lovely. I’ve been lonely during quarantine, and a solid pairing session is a great way to connect with someone.

I’ve also had some really good breakthrough moments with difficult concepts I’ve been wrestling with. A second person helping you to turn the problem around and look at it in new ways is invaluable.

The sense of transparency pairing creates is also my preferred way to work. I believe in demystifying the design process, and this is a great way to do it. If you want to see my process, I’ll happily show you—warts and all. It helps communicate that I’m human, I’m fallible, and that my decisions aren't made in a void.

## You should try it

With some of the nuance behind pair programming unpacked, I encourage you to give it a shot the next time you’re struggling with something. If your workplace isn’t ready for pairing culture, don’t fret: the practice can also be done be with former coworkers, friends, and family members.

Hopefully you now can make the ask in a more responsible and considerate way. Happy pairing!
