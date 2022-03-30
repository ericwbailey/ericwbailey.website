const { DateTime } = require("luxon");
const fs = require("fs");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const slugify = require("slugify");


module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);


  // Watch
  eleventyConfig.addWatchTarget("./source/sass/");


  // Copy
  eleventyConfig.addPassthroughCopy("./source/img");
  eleventyConfig.addPassthroughCopy("./source/js");
  eleventyConfig.addPassthroughCopy("./source/static");
  eleventyConfig.addPassthroughCopy("./source/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("./source/CNAME");
  eleventyConfig.addPassthroughCopy("./source/crossdomain.xml");
  eleventyConfig.addPassthroughCopy("./source/humans.txt");
  eleventyConfig.addPassthroughCopy("./source/favicon.ico");
  eleventyConfig.addPassthroughCopy("./source/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("./source/favicon-32x32.png");

  eleventyConfig.addPassthroughCopy("./source/favicon.svg");
  eleventyConfig.addPassthroughCopy("./source/manifest.json");
  eleventyConfig.addPassthroughCopy("./source/robots.txt");


  // Aliases
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");


  // Filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("MMMM d, yyyy");
  });


  // Collections
  // Treat writing/ as a collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("source/writing/*.md");
  });

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });


  // Filters
  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ''), {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@#»]/g
    });
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });


  // Misc
  eleventyConfig.setDataDeepMerge(true);


  // Markdown overrides
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    // permalink: true,
    // permalinkClass: "direct-link",
    // permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],


    // Defaults
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "source",
      output: "published"
    }
  };
};
