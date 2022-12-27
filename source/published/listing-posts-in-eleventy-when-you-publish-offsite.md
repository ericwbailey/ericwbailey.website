---
layout: "layouts/post.njk"
title: Listing posts in Eleventy when you publish offsite
source: ericwbailey.website
excerpt: "Co-mingling internal and external posts takes a little extra work. Here’s what I did"
date: 2021-04-28
year: 2021
tags:
  - Attributes
  - Development
  - Eleventy
  - HTML
  - Writing
sharedOn:
  twitter: https://twitter.com/ericwbailey/status/1387411838300786690
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 23
---

I write a lot, and a lot of my writing is published on other sites. One of the functions of my site is to serve as an archive, so I can keep track of what I’ve done where.

[Eleventy](https://www.11ty.dev/) is good at a lot of things, and one of those things is getting a blog up and running quickly and without a lot of fuss. Many [starter projects](https://www.11ty.dev/docs/starter/) include template logic for taking posts and listing them in chronological order, a feature that is table stakes for any blog.

The wrinkle is the template logic for looping through a list of posts expects them to also be hosted on the blog. To co-mingle external posts takes a little extra work. Here’s what I did:

## 1. Install eleventy-navigation

[eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/) is an official [Eleventy plugin](https://www.11ty.dev/docs/plugins/) that adds support for structured, hierarchical navigation metadata. It’s a great plugin, and I encourage adding it to every Eleventy project.

## 2. Add eleventy-navigation front matter to your posts

This [front matter](https://www.11ty.dev/docs/data-frontmatter/) addition will make manipulating post data a lot easier going forward:

{% raw %}
```yml
eleventyNavigation:
  key: {{ title }}
  parent: {{ category }}
```
{% endraw %}

## 3. Create posts for each of your external posts

This one might take some work, but getting your house in order means you have a solid foundation build from. The post content should be:

{% raw %}
```yml
---
title: "Post title"
date: yyyy-mm-dd
eleventyNavigation:
  key: {{ title }}
  parent: {{ category }}
  url: post-url
permalink: false
---
```
{% endraw %}

Make sure these posts are [placed in the same directory](https://ericwbailey.website/published/using-a-folder-other-than-posts-with-eleventy/) you store the rest of your on-site posts in.

Here, `title` is the title of your external post, `date` is the date it was posted, and `url` is the URL of where it is posted. The other important bit is [`permalink: false`](https://www.11ty.dev/docs/permalinks/#permalink-false), which will keep Eleventy from trying to render this post data as a web page.

Doing this will codify your post information inside of Eleventy, and give you all the necessary info to do things with it.

## 4. Update your post listing logic

The implementation of this will vary based on if you use a starting project and the method they use. Here’s a simplified version of what I used:

{% raw %}
```html
<ol
  reversed
  style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">
  {% for post in postslist | reverse %}
  <li>
    <a href="
      {% if post.data.permalink == false %}
        {{ post.data.eleventyNavigation.url }}
      {% else %}
        {{ post.url | url }}
      {% endif %}">
      {{ post.data.title }}
    </a>
  </li>
  {% endfor %}
</ol>
```
{% endraw %}

This will generate a co-mingled ordered list of on and offsite posts in chronological order of posting. Of note is the use of [the `ol` element’s oft-overlooked `reversed` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attr-reversed).

It’s a relatively straightforward if/else statement, but that’s sort of the point. Additions to this could include:

- Conditionally indicating an offsite link,
- Listing the name of the source the post is hosted on, and
- Listing other post metadata such as a post date, excerpt, [associated tags](https://www.11ty.dev/docs/collections/), etc.

I continue to be impressed by Eleventy’s minimal-yet-powerful approach to handling data. The fact that the bulk of my time was spent corralling my posts, and not configuring a teetering pile of convoluted homegrown logic to display them is not lost on me.
