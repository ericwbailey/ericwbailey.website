---
layout: "layouts/post.njk"
title: "Visit for a surprise"
source: ericwbailey.website
excerpt: "Could spoiling a joke be an accessibility issue? You better believe it."
date: 2022-09-01
year: 2022
tags:
  - Accessibility
  - Approach
  - Design
  - Aevelopment
  - Inclusion
  - Writing
attribution: "Thank you to <a href='https://adrianroselli.com/'>Adrian Roselli</a> for helping me land this plane."
sharedOn:
  twitter: TK
  mastodon: TK
share:
  facebookDescription: "Video still of Rick Astley singing Never Gonna Give You Up. The text 'Visit for a surprise' is placed over the still in such a way that the 'O' in 'for' is covering the face around his mouth."
  twitterDescription: "A present."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 17
---

Could spoiling a joke be an accessibility issue? You better believe it.

[Web Content Accessibility Guidelines Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) instructs us to ensure that a link’s accessible name makes sense when separated from its surrounding context. It’s why “learn more about elephants” is a far more effective link name than “click here.”

Providing instructive names for your interactive controls is really important. The practice allows everyone to quickly know what to expect when you take action on them—you wouldn’t want turning on your TV to flush your toilet, for example.

But what about a situation where you deliberately do not want the person knowing what’s in store when they activate that link or button? Can we still satisfy 2.4.4? I say yes.

## Surprise and delight

A friend recently asked about this exact scenario. They have a little [easter egg](https://en.wikipedia.org/wiki/Easter_egg_(media)) on their website, a small icon that Rickrolls the curious participant by linking them to [Rick Astley’s iconic music video](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

My friend knew enough about accessible development to provide the link wrapping the icon with a [visually hidden text](https://www.a11yproject.com/posts/how-to-hide-content/) label. This allows a person using a screen reader to know that a link is present. The question now is: What should the link announce itself as?

It might seem like 2.4.4 wants us to be as accurate as possible. So, you might think to make the link’s name either:

1. “YouTube: Rick Astley - Never Gonna Give You Up (Official Music Video), contains auto-playing media.”, or
1. “Cryptic icon.”

However, 2.4.4 also provides a pretty strong clue that these names might not be the right approach.

## Ambiguous to users in general

A high-level explanatory blockquote under the page’s title ends with the phrase, “except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-ambiguous-to-users-in-general)”, linking to a definition and an example. The definition is:

> the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

And the example is (emphasis mine):

> The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, <em>all readers are unsure and the person with a disability is not at any disadvantage</em>.

I love this. This is all about maintaining an [equivalent experience](https://www.smashingmagazine.com/2020/05/equivalent-experiences-part1/) by not over-describing something for only a certain subset of people. Here, the goal is to preserve the author’s **intentional act** of creating a sense of curiosity, regardless of the way someone interacts with technology.

A link named “YouTube: Rick Astley - Never Gonna Give You Up (Official Music Video), contains auto-playing media.” gives up the game before someone has a chance to play it. That’s no fun.

A link named “Cryptic icon.” gets us a little closer. It is, however, a little too generic-sounding to address the accuracy 2.4.4 demands of us. Flat, minimal design is currently ascendant and unfortunately it has a tendency to inadvertently [create a lot of perplexing iconography](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label). Even more to the point, it does not create the sense of enticement the author desires.

## My suggestion

I proposed using the phrase, “Visit for a surprise, contains autoplaying media.” This phrasing both:

- Creates the sense of curiosity someone would get by seeing the out-of-place icon, and also
- Prepares people for the general experience they’ll get by visiting the link, without specifically naming what the content is.

“Visit for a surprise” preserves the author’s intent. It’s a little mystery object you can poke if you’re feeling adventurous. If you’re not, you can carry on with whatever you were visiting the site for.

I also think it’s important to flag the autoplaying media bit, in that some people won’t want that experience, regardless of what format they anticipate that media will be. “contains autoplaying media” serves as a flag that allows them to [proactively opt-out](https://source.opennews.org/articles/motion-sick/) by not visiting the link.

Ideally the presence of an autoplaying media is also communicated visually, but that’s a separate conversation for a separate time.

## (In context)

Automated accessibility scans can detect a link without an accessible name, but they can’t determine if the link’s name is meaningful. That’s where us humans come in.

Moreover, automation can’t operate with the level of nuance needed to determine if the author’s intent is being carried through in the link’s accessible name. If you can write automation with this level of sophistication, congratulations! You probably don’t need to work in web accessibility anymore, as you’ve invented [strong AI](https://en.wikipedia.org/wiki/Artificial_general_intelligence#%22Strong_AI%22_as_defined_in_philosophy) and are now a quintillionaire.

## Serious fun

I’d be tempted to fail the easter egg link under 2.4.4 if found someone using the phrase, “YouTube: Rick Astley - Never Gonna Give You Up (Official Music Video), contains auto-playing media.” to create its accessible name.

This might seem provocative, but 2.4.4 is as much about preserving the intent behind **why** the link was important enough to be added as it is that the link’s accessible name makes sense. If the author intended to be purposely ambiguous, we need to honor that and not ruin the joke.

This is an area where an auditor reflexively seeking to be as literal as possible may err. I say this because in an accessibility auditing context we are usually so focused on creating clarity where there is none that we don’t get to dabble much in the areas of [whimsy and nuance](https://elisehe.in/2022/07/19/the-fun-in-accessibility).

## Priority of Constituencies

This scenario is a good example of the permissiveness of the Web Content Accessibility Guidelines. Its overall goal is to ensure digital experiences can be used by everyone, but does not necessarily comment on the [quality of the experience](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/).

This is where [the Priority of Constituencies](https://www.w3.org/TR/html-design-principles/#priority-of-constituencies) comes into play. If you find yourself at loggerheads, consider what the best user experience would be and work backwards from there. Yes, even if it’s for a fun novelty.

If you’ve made it this far, nice! Here is [a little gift for your efforts (contains autoplaying media)](https://www.youtube.com/watch?v=woKUEIJkwxI).
