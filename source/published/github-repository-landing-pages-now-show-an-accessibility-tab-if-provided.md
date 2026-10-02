---
layout: "layouts/post.njk"
title: GitHub repository landing pages now show an accessibility tab, if provided
source: ericwbailey.website
excerpt: "I’m excited to see how people use this new addition to the platform"
date: 2026-10-01
year: 2026
tags:
  - Accessibility
  - Approach
  - Development
  - Inclusion
series:
  previous:
    - title: "GitHub now has a setting to underline links"
      url: https://ericwbailey.website/published/github-now-has-a-setting-to-underline-links/
share:
  facebookDescription: "GitHub's file added icon."
  twitterDescription: "GitHub's file added icon."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 14
---

My last official contribution to GitHub was something I’ve wanted for a long time: Writing the code to enable [displing an `ACCESSIBILITY.md` file’s contents on the repository landing page](https://github.blog/changelog/2026-10-01-accessibility-statements-highlighted-on-repository-overview/). This content lives in the same tab component that the README, License, Code of Conduct, Security, and important information is surfaced.

For example, I’m using [an `ACESSIBILITY.md` file located in `./github`](https://github.com/ericwbailey/a11y-webring.club/blob/main/.github/ACCESSIBILITY.md) to communicate the accessibility statement on [my a11y-webring.club repository](https://github.com/ericwbailey/a11y-webring.club?tab=accessibility-ov-file). Here’s an image of it in action:

<img
    alt="A GitHub repository landing page, scrolled down to the tab list of special repository files. The tab labeled 'Accessibility' is active, displaying an accessibility statement. Other tabs are Readme, Code of Conduct, Contributing, MIT License, and Security. Above the tab strip are some repository files. The visible content of the accessibility statement reads, 'a11y-webring.club strives to be AA WCAG 2.2 compliant, and is committed to creating and maintaining an accessible, inclusive environment. It is intended to be able to be used by everyone. What we are doing: The following initiatives are how this webring attempts to be accessible. We are: Guided by a Code of Conduct that outlines expected behaviors. Using time-tested, stable and interoperable technology based on open standards to help ensure our content can be accessed by the widest range of devices as possible. Running automated and manual checks to test for accessibility issues. Hosting our code on a public repository, allowing anyone with the interest and capability to inspect and modify it. Striving to keep our interactions and user interface unambiguous and easy to understand. Striving to keep our download size small and memory footprint light. Supporting magnified and zoomed displays, as well as custom typefaces and themes potentially set by someone in their browser.' Cropped screenshot."
    loading="lazy"
    src="{{ '/img/posts/github-repository-landing-pages-now-show-an-accessibility-tab-if-provided/repo-accessibility.png' | url }}" />

The file only appears if it is supplied, so it is not a required part of creating or maintaining a repository. However, it is my hope that the act of providing one becomes more commonplace the same way providing those other special kinds of files are.

Another broader hope I have is that this promotion of content helps to normalize accessibility as a consideration and practice in some small way—something that helps to send a signal of a mature software project.

I’m excited to see how people use this new addition to the platform. I would also like to extend a huge thank you to [Jan Maarten](https://janmaarten.com/) and [Maria Lamardo](https://www.linkedin.com/in/marialamardo/) for their help getting this effort across the finish line.
