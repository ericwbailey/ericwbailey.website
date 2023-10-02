---
layout: "layouts/post.njk"
title: GitHub now has a setting to underline links
source: ericwbailey.website
excerpt: "There is now choice where there was none before."
date: 2023-10-02
year: 2023
tags:
  - Accessibility
  - Design
  - Design Systems
  - Development
  - Inclusion
share:
  facebookDescription: "The GitHub logo with an underline applied to it."
  twitterDescription: "The GitHub logo with an underline applied to it."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 37
---

A public beta was [released on Friday the 29th](https://github.blog/changelog/2023-09-29-enhanced-accessibility-for-links-in-text-blocks-public-beta/). It allows you to [apply or remove an underline effect to links in body content](https://github.com/settings/accessibility#link_underline_label). 

The link underlines are present in Issue and Pull Request comments, as well as other areas of the site. We are still identifying areas where underlines should and should not be applied, as well as how they should look. 

<img
  alt="A GitHub comment in the logged out experience. The repository the issue is placed in is called 'ericwbailey/link-underline-demo'. The title of the issue is also called 'Link underline demo'. The issue's body content reads, 'This is a test issue to demonstrate the new link underline setting. You can locate it by navigating to your Settings, then the Accessibility subsection, then locate the option under the Content subheading. Issues and Pull Request comments will be affected by enabling this setting, as well as other kev areas of the site.' The terms 'Settings', 'the Accessibility Subsection', 'the Content subheading', 'Issues', and 'Pull Request' are all links, with a distinct underline applied to them. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/github-now-has-a-setting-to-underline-links/sample-issue-comment-with-underlined-links.png' | url }}" />

Some people rely on link underlines to visually communicate what is interactive and what isn’t. Some people find the underlines distracting, and this impedes legibility due to how their brain processes information. 

Designing accessible defaults, determining where placing accessibility settings is the most effective, the difference between aesthetic desires and functional requirements, and deeply entrenched ableist attitudes are all topics deserving of a good deal of attention. So is navigating politics of each of those concepts. 

However, the most important takeaway here is that **there is now choice where there was none before**. 

I’m proud of my efforts for this one, and equally proud of my talented and passionate peers who also helped make it happen. If you have feedback about the feature please leave it in [the public beta community discussion](https://github.com/orgs/community/discussions/68734). 

A lot of accessibility work is a [progress over perfection mindset](https://meryl.net/accessibility-progress-over-perfection/), with a mind to the the long game. Which is to say onwards and upwards!
