---
layout: "layouts/post.njk"
title: Using a folder other than <code>posts/</code> with Eleventy
source: ericwbailey.design
excerpt: "I don’t want to wrestle with overwrought Webpack configuration, write GraphQL queries for basic navigation, or scream at types for failing to transpile or whatever. I want to write"
date: 2020-11-22
year: "2020"
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 19
---

I just updated this site to use [Eleventy](https://www.11ty.dev/).

I don’t update [enchilada](https://github.com/ericwbailey/enchilada) that much anymore. It’s now more a place to centralize all the little tweaks and gotchas of web work, and less a platform for scaffolding websites.

In all honestly, enchilada was intended more to be more a simple site generator, and less a blogging platform. I never originally intended for my site to be a blog, but it turns out [I enjoy writing]({{ '/writing/' | url }}), and do it a lot!

Eleventy was a natural fit for the next iteration of this site. It’s a static site generator allows me to focus on what I want to, namely writing, semantics, and CSS styling. It’s also got [a great community](https://www.11ty.dev/docs/how-to-support/) behind it.

Converting this site was straightforward. It took roughly half a day—most of that was adding metadata for posts on other sites. I did run into one little snag, namely using a directory other than `posts/` to house my writing.

Fortunately, the wonderful [Dave Rupert](https://daverupert.com/) got me sorted:

```js
module.exports = function(eleventyConfig) {
  // Filter source file names using a glob
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("writing/*.md");
  });
};
```

How great is that? You can also target multiple directories, so something like `getFilteredByGlob(["writing/*.md", "notes/*.md"])` is totally valid. I might poke around with [Netlify CMS](https://www.netlifycms.org/) and get [a TIL section](https://www.matuzo.at/til/) set up.

I’m not a developer. I don’t want to wrestle with overwrought Webpack configuration, write GraphQL queries for basic navigation, or scream at types for failing to transpile or whatever. I want to <em>write</em>.

This is more of the kind of content I want to self-publish: shorter, and more scoped. I still enjoy writing longform (especially about accessibility and inclusive design), but I think that kind of content is best served on other sites where there’s better reach.

Anyhow, [this site has a RSS feed]({{ '/feed/feed.xml' | url }}), if that’s your thing.
