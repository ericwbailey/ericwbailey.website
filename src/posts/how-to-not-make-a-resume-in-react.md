---
title: How to not make a résumé in React
year: 2020
source: ericwbailey.design
attribution: Max Böck, who is a far better person than I am, actually did something about this issue. Check out his post on <a href="https://mxb.dev/blog/eleventy-resume-builder/">making an Eleventy Résumé Builder</a>.
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 3
---

I’ve seen a fair share of tutorial links floating around in newsletters and Twitter and the like recently. They all promise the same thing, namely how to use React to create a résumé.

I mean, I get it. It’s important to have something to build towards when learning a new skill, especially with development.

At first blush a résumé seems like a good thing to build towards: They are relatively small in terms of complexity and can probably use content that already exists on your LinkedIn profile. If you’re looking for a job, it’s also a handy way to double-dip on a skill that is in high demand.

I checked out a few of these tutorials, and after noticing some patterns, I’d like to mention a few things you could do to your résumé instead. I’m not going to link to the ones I tested because I don’t want to give bad advice more exposure than it is already getting.

## Use semantic markup

Each of the tutorials I audited did a terrible job at markup. Correlation isn’t causation, but there has to be something to the fact that [framework-utilizing homepages show a greater degree of detectable accessibility errors when compared to non-framework utilizing homepages](https://webaim.org/projects/million/#frameworks).

Rock-solid, semantic HTML markup is the foundation that you build the rest of your experience from. In the context of a résumé, the lack of semantically-described content would tell me:

1. You don’t know about these foundational skills, or
1. Don’t care about why they’re important.

This might sound harsh, but in the tech world this would be the equivalent of handing in a résumé printed on colored construction paper. Consider that there’s a decent chance someone doing the hiring may be checking your work out with this level of detail, as it's an example of what level of craft you’ll be bringing to their team.

### How to do it

What you want to do is familiarize yourself with [the HTML elements made available to us](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

#### Your content

We want to [use paragraph elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) for content such as your summary statement. [Anchor elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)—not clickable <code translate="no">div</code>s—allow you to link out to pertinent information such as your GitHub profile, personal website, email address, and [even your phone number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_telephone_numbers). If you’re looking for a job, making yourself easy to get in contact with is a good thing.

[Unordered lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) can help with the listing of skills an accomplishments, and [ordered lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) can help with timelines. Wrapping accomplishments in [<code translate="no">strong</code> elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)—not spans—can call attention to important career milestones.

#### How to prioritize it

First, you’ll want to [use heading elements to structure your content](https://webdesign.tutsplus.com/articles/the-importance-of-heading-levels-for-assistive-technology--cms-31753) in a way that makes sense hierarchically. For a common résumé format, it’d be something like.

<ol>
  <li><code translate="no">h1</code> Your name
    <ol>
      <li><code translate="no">h2</code> Personal information</li>
      <li><code translate="no">h2</code> Summary statement</li>
      <li><code translate="no">h2</code> Work experience
        <ol>
          <li><code translate="no">h3</code> Job title and company</li>
        </ol>
      </li>
      <li><code translate="no">h2</code> Skills</li>
      <li><code translate="no">h2</code> Education
        <ol>
          <li><code translate="no">h3</code> School name</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>

This structure clearly communicates:

1. Who you are
2. How I can contact you
3. What you’re looking for
4. What you’ve done previously
5. How you did it
6. Who taught you

Since this helps me quickly and clearly understand you as a candidate, I can easily dip into those third level headings to really dig into the nitty-gritty.

#### How to section it

You’ll also want to [use HTML’s landmark elements](https://web.dev/use-landmarks/) to divide up your content. Use [the <code translate="no">header</code> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) for your name and summary, [the <code translate="no">main</code> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) to describe your skills, work history, education, etc. The [<code translate="no">aside</code> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) can house your contact information, since it’s only pertinent if the person reviewing your résumé likes what they’re reading.

### Why should I care?

In addition to making the document easier to scan through in code, it helps people who use specialized technology to help them sift through applicant’s résumés. Some of this technology might be assistive technology such as a screen reader, but it could be any number of other things.

Hoppers, scrapers, translators, and other automated solutions are commonplace tools for many HR departments. Semantic HTML is [interoperable](https://en.m.wikipedia.org/wiki/Web_interoperability) HTML. It can maintain meaning when translated to another medium—say some choice information copy and pasted into an email sent to a decision-maker.

Need a little more convincing? [Outlook uses Microsoft Word to render email](https://medium.com/@brentonhenry/its-2019-and-outlook-is-still-rendered-with-word-675ca1a5d1a0). Making your content simple and straightforward will do wonders when something that absurd, yet so important is in play.

The point is, you don’t know how someone will be interacting with your résumé, or what they’ll be doing with it, so you want to make sure it is as robust as possible when putting it out for the world to see.

## Make it portable

Make your résumé analogous to its printed counterpart. By this, I mean a self-contained document. Don’t hotlink to external resources—this includes fonts, images, and JavaScript libraries and [polyfills](https://polyfill.io/).

Inline as much as possible into [your document’s <code translate="no">head</code>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head). This includes [your CSS](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) and [your JavaScript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). Images can be [converted to Base64](https://www.base64-image.de/), and [SVG can be inlined](https://jakearchibald.github.io/svgomg/).

Normally [this is bad advice](https://calendar.perfplanet.com/2011/why-inlining-everything-is-not-the-answer/). However, when everything is self-contained in a single file, that file becomes incredibly fault-tolerant, cacheable, and compact. It can be saved locally and passed around confidently, with almost no failure points.

As résumés are mostly text and really shouldn’t have much in the way of interactivity, there’s also a good chance you can get the whole thing to [render within the first round trip](https://www.afasterweb.com/2015/05/26/latency-and-the-first-round-trip#the-first-14k).

## Make it printer-friendly

This one is easy. Webpages can, and will be printed. [CSS can style printed pages](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/). CSS supports [absolute measurement units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Absolute_length_units). When that HR manager inevitably prints your résumé to show someone, make sure it shows up looking <em>good</em>.

## Make it machine-friendly

In addition to semantic markup, you can enhance your document with [Schema.org microdata](https://schema.org/).

When scraping and search services such as Google index a website, they use complicated code to “best guess” what the website is about.

By using microdata, you are able to speak directly to this code and say, “This is what this content means.” Removing this ambiguity means [showing up for relevant searches](https://search.google.com/structured-data/testing-tool/u/0/) becomes that much easier for all involved.

Schema.org has [a way to programmatically describe yourself](https://schema.org/Person). It also has a way to communicate [organizations](https://schema.org/Organization), [events](https://schema.org/Event), and [products](https://schema.org/Product). I don’t know about you, but those all seem to me like things you’d commonly find on résumés.

## Make it responsive

You want your résumé to look good on a device the same way you want it to look good when printed. Since you can’t know the circumstances where it’ll be viewed, make sure you start with [a mobile-first mindset](https://bradfrost.com/blog/post/mobile-first-responsive-web-design/) and test how it looks on a variety of screen sizes.

It’s easy to imagine a scenario where an overworked hiring manager is reviewing your résumé on their phone over a lunch break. It’s also not too far a stretch to envision a scenario where it’s loaded onto a large conference room TV to discuss.

## Make it performant

You probably won’t need to worry about this point if you follow the rest of this article’s advice. It is, however, something to think about if you are using React or many other JavaScript SPA frameworks.

JavaScript uses the main thread to run, which means it blocks other things the browser needs to do. This includes painting, reflows, and garbage collection—all of which are used to show the person trying to load your website the website’s content.

Things like a [virtual DOM](https://reactjs.org/docs/faq-internals.html) and [hydration](https://adactio.com/journal/16404) are JavaScript-intensive and offset that burden on the end user. On a powerful computer, say one used for developing, this isn’t too much of a concern.

On a less powerful device, say a locked down, provisioned, bulk-ordered budget company Dell laptop [still running Internet Explorer](https://gs.statcounter.com/browser-market-share/desktop/united-states-of-america#monthly-201801-202003), this privilege may not exist. Do you want your résumé to be the thing that crashes a prospective employer’s browser?

## Be critical

Consider what React and other SPA frameworks are good for: stateful, extensible, component-driven applications. Now consider what a résumé’s goals are.

Not every problem [requires a hammer](https://en.m.wikipedia.org/wiki/Law_of_the_instrument). Part of being a good developer is being able to pick the right tool for the job. Being able to weigh a technology’s strengths against its weaknesses, and articulate them, are incredibly valuable skills.

While React and its ilk definitely are capable of performing much of what I discussed, it is not what they are focused on. As such, the time you’d spend on these considerations needs to compete with the time you’ll need to invest to setting up and working in your framework of choice.

Just because the job market is demanding a certain buzzword doesn’t mean you can’t be critical of its faults and limitations. It also doesn’t mean that buzzword will be in favor forever—today’s React might become yesterday’s [Gopher](https://thenewstack.io/gopher-ruled-internet/).

Résumés are all about making yourself seem attractive to a potential employer, demonstrating what skills and abilities you can offer their organization. All the enhancements described above signal depth of knowledge and consideration of circumstance, which goes a long way to standing out and getting that first interview lined up.
