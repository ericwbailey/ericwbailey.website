---
layout: "layouts/post.njk"
title: Thoughts on embedding alternative text metadata into images
source: ericwbailey.website
excerpt: "The idea of “solving” alternate text descriptions by automating them away so that they are not a consideration is a bad frame"
date: 2024-03-12
year: 2024
tags:
  - AI
  - Accessibility
  - Alt Text
  - Approach
  - Assistive Technology
  - Attributes
  - Design
  - Environment
  - Inclusion
  - Internet
  - Social Media
share:
  facebookDescription: "A small badge that reads, 'alt'."
  twitterDescription: "A small badge that reads, 'alt'."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 45
---

Another [trend I see from time to time on social media]({{ '/published/a11y-is-web-accessibility/' | url }}) is the idea that images should have [alternative (alt) text descriptions](https://webaim.org/techniques/alttext/) included in their metadata. Like a lot of things accessibility-related, the idea contains nuance that needs unpacking.

At a high level, storing alt text as metadata is not a bad idea. In fact, reading the sentiment expressed makes me happy. It is a step above indifference or downright hostility—two frustratingly common reactions to asking someone to describe their images with text.

That said, the framing and presenting of the “storing alt text as metadata” as a technological concept itself also has some things to think through. Let’s unpack it.

## How this feature envisioned

The idea is someone at some point in time writes an alternative description for an image. That description is then stored as part of the image’s metadata.

<picture>
  <source
    media="(min-width: 68rem) and (prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/embed-alt-into-image-horizontal-on-dark.svg' | url }}">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/embed-alt-into-image-horizontal-on-light.svg' | url }}">
  <source
    media="(prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/embed-alt-into-image-vertical-on-dark.svg' | url }}">
  <img
    role="img"
    alt="A simple diagram demonstrating how a paragraph of text could get embedded into an image file. The paragraph reads, 'A delicious meal, featuring a neatly plated and generous portion of Bucatini noodles. The noodles are covered in a thick red meat sauce, and topped with a healthy sprinkle of Parmesan cheese, black pepper, and red pepper flakes. The plate’s contents are gently steaming, and is set on a rustic-looking tablecloth with a repeating print featuring a crowing rooster. It is accompanied by a glass of Montepulciano d’Abruzzo, a wine with an inky-purple hue.'"
    src="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/embed-alt-into-image-vertical-on-light.svg' | url }}">
</picture>

For those unfamiliar, images have the ability to include companion information that isn’t visually displayed, but helps to describe other important qualities. Examples of this sort of metadata are:

- Pixel dimensions (ex: 2,425 pixels wide by 1,364 pixels tall),
- Color space (ex: sRGB),
- Device (ex: iPhone 13 Pro),
- Location (ex: Paris, France),
- Camera settings (ex: aperture value and exposure time),
- etc.

This information is portable, in that it comes along with the image when transferred, shared, or a copy is made. Specialized programs can access and manipulate this information as well.

An alt description could be one of these companion pieces of information. Here, the thought is that websites, web apps, and native apps could detect the presence of this metadata and then automatically apply it if someone chooses to share or re-share the image:

<picture>
  <source
    media="(min-width: 68rem) and (prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/alt-into-networks-horizontal-on-dark.svg' | url }}">
  <source
    media="(min-width: 68rem)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/alt-into-networks-horizontal-on-light.svg' | url }}">
  <source
    media="(prefers-color-scheme: dark)"
    srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/alt-into-networks-vertical-on-dark.svg' | url }}">
  <img
    role="img"
    alt="A simple diagram demonstrating how an image with alt text metadata embedded into it could be shared online, and then how its embedded information could be-reshared across different services and networks. The network is represented by a circle of sixteen logos for different internet services. Each logo has a line that connects it to every other logo, forming a complicated interconnected web. Starting from the top and moving clockwise the services are: SMS, Reddit, Weibo, Discord, tumblr, Microsoft Office, WordPress, Pixelfed, Slack, Pinterest, LinkedIn, Instagram, Mastodon, Facebook, Twitter, and Google Drive."
    src="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/alt-into-networks-vertical-on-dark.svg' | url }}">
</picture>

On paper, this helps to ensure that an alternative description is supplied. There’s a few issues to contend with past this initial thought, however.

## Context

The largest thing to grapple with is that **images are contextual**. Choosing to select and share one is [a highly intentional act](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/), and oftentimes requires knowing the larger context of how it will be viewed.

For example, consider how you’d describe a photo of a family member in a private context:

<blockquote>
  <p>
    Chicken in a pot! She looks quite worried.
  </p>
</blockquote>

And a more public one:
<blockquote>
  <p>
    A puppy sitting in a small cooking pot. The dog is a Havanese and Poodle mix, and features white curly and light gray fur blended, with brown tips at the and of her floppy ears and tail. She also has a small beard, button nose, and soft brown eyes. Her face has a worried expression on it.
  </p>
</blockquote>

The key factor here is that my dog’s name is Chicken, but you’d only know that if I told you.

Another example are images that are frequently shared on some chat apps some friends and I use. The image’s literal visual content has long ceased to be relevant, and is instead now shorthand for inside jokes we share.

Pre-stored alt text is not context-aware. Digital experiences would not be able to know the larger conversation an image is being inserted into, were they to utilize this proposed feature. That’s the purview of us humans.

Some may be quick to say that this is still better than nothing, and I generally agree. But again: thinking a little bit more than the surface level introduces issues.

### Tone

This is like an inability to [read the room](https://usdictionary.com/idioms/read-the-room/). While the surrounding context may impart this knowledge, an easy-to-imagine situation is where a pre-supplied image description’s tone may undercut the larger narrative.

This works for situations where the mood is funny and the image is serious, as well as the opposite. This is to say nothing about irony, a concept the internet loves.

### Quality

Some alt text descriptions are just objectively bad. Consider the following:

> screenshot

This tells me that the image is a screenshot, but it does not tell me **what it is a screenshot of**. It’s effectively useless.

Compare that description against:

<figure
  role="figure"
  aria-label="Truncation is not a content strategy. With apologies to Karen McGrane.">
  <blockquote>
    <p>A company’s help page with a large banner at the top. It is supposed to read, “Do you need assistance?” However, the narrow phone screen has truncated the text so the banner now reads, “Do you need ass”. Screenshot for a bug report.</p>
  </blockquote>
  <figcaption>
    <p>
      Truncation is not a content strategy. With apologies to <a href="https://karenmcgrane.com/">Karen McGrane</a>.
    </p>
  </figcaption>
</figure>

Not having the ability to adjust this baked-in content—or be educated that its quality is even a problem in the first place—means it is far more likely that the same low-quality content will be passed around.

As an aside, a lot of social media platforms automated alternate text descriptions are about at this low level of quality. For example, here is Instagram’s automatic, invisible description of this [photo of an inquisitive baby elephant adorably reaching out for the camera with its wrinkled trunk](https://www.instagram.com/p/C1US_S3sUPq/):

> Photo by National Geographic on December 26, 2023. May be an image of elephant.

This reads to me like legal risk mitigation on the platform’s part. It’s a failure of imagination to default to this sort of approach, and is also a great example of how [something can be both technically compliant and also unusable](https://makeitfable.com/article/ive-had-enough-when-access-friction-becomes-an-access-barrier/).

## Spam and hate

Another sad, sobering truth to contend with is that we need to think about this idea through the lens of threat modeling. It’s easy to imagine images—especially memes and other popular imagery—getting [co-opted to drive an agenda unrelated to the image’s actual content](https://www.adl.org/resources/hate-symbol/pepe-frog).

### Blunt force malice

This one is easy to imagine because it has already occurred. People can, have, and will cram alternative text entry fields full of unrelated, hateful messaging.

The act of using an alt text field in this harmful way is one of the reasons why services don’t mandate providing an alternate text description for their image content.

I’ve seen examples where the alt text values were content such as, “shut up”, “no”, “sdjfkhds”, and “tests pass”. It’s simply a non-starter approach.

A baseline reality you need to contend with is that a perceived inconvenience will manifest a disproportionate and negative backlash, and that backlash will typically target the immediate system causing said annoyance. It is something I’ve seen play out over and over again, and is a telling moment.

In this scenario we need to keep who is ultimately affected at the top of our priorities: **The people who rely on these descriptions**. And because **alt descriptions are for people**, the descriptions need to be:

1. Present,
2. Accurate, and
3. Relevant.

### Exploits and malware

Another baseline reality is that people will consciously subvert systems for their own ends. This includes placing [hateful, racist, and bigoted content](https://www.theverge.com/2018/7/16/17560840/giphy-nazi-gif-facebook-twitter) into the systems that allow people to share images.

Open-ended inputs are also a tempting target for exploitation. Here, someone can [add malicious code in such a way that it is executed on the device without the consent](https://arstechnica.com/gadgets/2023/09/apple-patches-clickless-0-day-image-processing-vulnerability-in-ios-macos/), or even knowledge of the person receiving the image.

There are entire industries around creating and selling these exploits, as well as preventing and cleaning up after them.

### More subtle manipulation

Another approach might be analogous to [keyword stuffing](https://en.wikipedia.org/wiki/Keyword_stuffing) to boost a website’s presence in search results.

The idea behind this approach is that out-of-site, out-of-mind alternative text metadata could be be embedded in social media platforms at scale—all to drive people towards some unrelated destination.

Co-opting [a viral meme distributed across many popular social media services](https://en.wikipedia.org/wiki/The_dress) could net you a lot of traffic with a relatively minor expenditure of effort. We should also not forget full-on automation, with bot-based astroturfing compounding and steering the desired end effect.

All this effort  could be to sell people products. However, I encourage you to [be the villain](https://24ways.org/2018/be-the-villain/) and think a little deeper. Manipulation via unrelated metadata distributed across multiple networks could point people towards hate and disinformation sites.

Another, even more dark thought could be backtracking who shares what as an attempt to identify and even de-anonymize vulnerable populations.

## Localization and performance

[English is the implicit default](https://ericwbailey.website/published/what-they-dont-tell-you-when-you-translate-your-app/#english-is-the-implicit-default) for a lot of the web, despite it being [worldwide](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/).

If we were going to add alternate text description metadata to images, we’d need to ensure it could support multiple languages. This translates to extra information to store.

When it comes to performance, every byte counts. Because of this, a lot of services scrub out image metadata when the image is uploaded, especially in a web context.

One of the reasons for this metadata removal is that extra information translates to cost. This, in turn, translates to a ton of money when conducted at scale.

Because of this, the metadata removal isn’t something you as the image sharer can override. It just happens as a matter of course.

Also recall the previous section. All of these new metadata entries interacting with multiple file types and systems exponentially increases the surface area for a bad actor to take advantage of.

## Coordination and level of effort

The process of adding a new category of metadata to a even a single image standard is a Herculean undertaking. Global, standardized alternative text description metadata is wishful thinking because of this.

Consider you’ll need to undertake this process for [multiple image formats](https://en.wikipedia.org/wiki/Image_file_format#Major_graphic_file_formats)—even targeting the top five most popular ones translates to navigating a ton of bureaucracy and politics spanning across multiple conglomerates and organizations. Then there’s IP law and copyright to consider. Then you might actually be able to start on the code itself.

Then consider all the operating systems and applications that need to read and modify this metadata, and the logic and UI that needs to be created to enable that. Then consider all the websites and services that will also need to be updated.

The whole effort is not impossible per-se. It’s just something that would likely play out across decades if undertaken.

## What about AI?

[The technology to generate a text description of an image is getting really good](https://afb.org/blog/entry/gpt-4-image-recognition-accessibility). This is really cool, and also more than a little scary.

AI-generated automated image descriptions is [a helpful resource for the people who need it when there is no alternative](https://www.bemyeyes.com/blog/announcing-be-my-ai), and we should do well to internalize this.

### What we want and what we need

I would love it if this hypothetical AI tooling would report if automated image descriptions:

- Had [hallucinations](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) (if present), and also that
- The description itself was not human-generated.

These are both important pieces of context someone needs to know, as it will affect how they **interpret, think about, and communicate to others** about the image.

This is an easy request to consider through the lens of critical information—say world governments sharing vital crisis-related information on social media via infographics, or [a horrifying, ongoing genocide](https://disabilityvisibilityproject.com/2024/03/03/alttextpalestine-showing-solidarity-by-creating-access/).

Critical government communications are important, but it’s also good to remember **the human aspect at the center of all this**. Even images shared for fun deserve someone being able to confidently know their content and speak to it without fear of misrepresentation.

## Consider a hybridized approach

With the feasibility of an industry-wide metadata standard being out of the question, we turn to pragmatism.

Existing freeform alternative text description input fields are great, but are also often [buried as a feature](https://www.facebook.com/help/instagram/503708446705527/) and lack just-in-time self-serve support resources.

These factors all contribute to non-, under-, or mis-described images.

### Set people up to succeed

The more we can make **providing alternate text descriptions a social norm**, the better the practice will become.

[AI does not know context](https://en.wikipedia.org/wiki/Stochastic_parrot). It is still also an imperfect tool that is susceptible to, and can [perpetuate bias](https://www.theverge.com/24066641/disability-ableism-ai-census-qalys).

We can craft thoughtful UI that can take advantage of AI-based technology in a way that works to its strengths while also providing an opportunity to offset some of its weaknesses. This requires acknowledging both the strengths and limitations of this technology.

Position AI-provided alternative text descriptions as **a starting point to build from**, and not as something that **invisibly automates away a perceived inconvenience**:

<figure
  role="figure"
  aria-label="Simulated UI. This is actually a Tricholoma sulphureum, or Sulphur Knight. You shouldn’t eat it.">
  <img
    alt="A modal dialog with six tabs on the lefthand side and a main content area. The main content area is titled 'Accessibility' and features a large photo of a mushroom. Below the image is a textarea labeled, 'Image description', with helper text below it that reads, 'Help people understand your image by describing it'. The textarea has pre-filled text content that reads, 'A Gold Knight mushroom growing out of the ground. It is yellow, with a smooth cap and fibrous tubular stalk. The underside of the cap has a series of repeating wavy gills. Leaves surround it on the forest floor. Image described by AI.' The phrase 'Gold Knight mushroom' is highlighted, with a small icon of a confused robot face after the word, 'mushroom'. Underneath the textarea is a link and two buttons. The link reads, 'Help me describe this image'. The first button has a sparkle icon and is in a pressed state. The second button is labeled, 'Apply description.' The six tabs are for cropping, filters, accessibility, tagging people, hashtags, and geotagging, and the accessibility tab is active."
    src="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/simulated-ui.png' | url }}">
    <figcaption>
      <p>
      Simulated UI. This is actually a Tricholoma sulphureum, or Sulphur Knight. You shouldn’t eat it.
    </p>
  </figcaption>
</figure>

AI can manifest as small button to generate the initial description. This can be augmented by surrounding copy to inform and educate the person using the feature. It can also [link off to additional resources](https://accessibility.huit.harvard.edu/describe-content-images) to [allow people to discover the concept and better educate themselves](https://www.w3.org/WAI/tutorials/images/decision-tree/).

I’d also be remiss if I didn’t point out that an AI-based description may also **serve as a good starting point** for people less comfortable with the dominant language of the platform, descriptive writing, or the image’s content.

I also like presenting this UI as part of a larger suite of image sharing tools (cropping, filters, tagging, etc.). Of course an alt description is a first class consideration, and of course you include it [if you want your sharing to be well-received]({{ '/published/implicit-cultural-norms-and-accessible-social-media/' | url }}).

Furthermore, this also represents an opportunity to **lead by example** for [companies with public DEI commitments](https://www.microsoft.com/en-us/diversity/default.aspx). It combines the gee-whiz cool factor of AI with something that demonstrably improves the quality of experience for others.

## Let’s not forget about OCR and hashing

[Optical character recognition (<abbr>OCR</abbr>)](https://en.wikipedia.org/wiki/Optical_character_recognition) is a well-established technology that could be more broadly incorporated into popular tooling. [Mastodon has this feature](https://docs.joinmastodon.org/user/posting/#edit), and it is a crime that more platforms don’t.

All those screenshots of an iPhone Notes app apology shared out to social media? Make sure that everyone can read it, and spare them the effort of having guess if there’s content present in the image itself in the first place.

Similarly, [image hashing](https://inhope.org/EN/articles/what-is-image-hashing) is another avenue where platforms could get a little smarter by utilizing an already-established technology. All those accounts that steal and recycle memes? The platform has an opportunity here to inject descriptions for matches for accounts that don’t provide them.

<div class="centered-media-outer">
  <picture class="centered-media-inner-3">
    <source
      media="(prefers-color-scheme: dark)"
      srcset="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/hash-based-alt-on-dark.svg' | url }}">
    <img
      role="img"
      alt="A simple diagram demonstrating how a large number of identical or nearly-identical images could all have an alternate description applied to them.'"
      src="{{ '/img/posts/thoughts-on-embedding-alternative-text-metadata-into-images/hash-based-alt-on-light.svg' | url }}">
  </picture>
</div>

Both OCR and hashing technologies are also far more mature, time-tested, and require far fewer resources to operate. This brings us to:

## The rule of least power

Another thing to think about is that setting up an AI-powered image description service takes time and resources. It also requires expensive, specialized knowledge to maintain and grow.

This means that it makes the feature more difficult to set up and run for smaller organizations. There is an anticompetitive, asymmetry of power here, especially when you think about how platforms help shape the world we participate in.

Companies are also rarely motivated by appeals to altruism. It is easy to envision ruthless cost-cutting measures removing a costly AI-powered service when it comes time for an organization to tighten its belt.

I’d point to [the cruel, senseless layoffs of 2023](https://www.theverge.com/2023/1/18/23560315/microsoft-job-cuts-layoffs-2023-tech) for some prior art here. Or [politics malicious incompetence](https://www.wired.com/story/twitter-layoffs-accessibility/).

I’d then ask [what becomes of the people who relied on this hypothetical service](https://spectrum.ieee.org/bionic-eye-obsolete)?

### Short-term convenience, long-term risk

LLMs, machine vision, and other AI-adjacent technology [have massive power demands](https://spectrum.ieee.org/ai-energy-consumption). In aggregate, this places huge stress on [an already struggling environment](https://arstechnica.com/science/2024/02/skyrocketing-ocean-temperatures-have-scientists-scratching-their-heads/).

I think about [the environmental impact of my actions](https://www.theguardian.com/technology/2024/mar/07/ai-climate-change-energy-disinformation-report) every time I use an AI-powered feature, and [if the request was worth it](https://www.nature.com/articles/d41586-024-00478-x). This is to say nothing of [other ethical concerns](https://blog.edwardloveall.com/cost-of-a-tool).

Every time I see a Copilot button I think about how [eugenic thought](https://www.theverge.com/24066641/disability-ableism-ai-census-qalys) is still alive and well in many aspects of our society. This includes [disaster response](https://prismreports.org/2023/08/31/disabled-first-responders-disaster-relief/) and other crisis situations.

### An already solved problem

The `alt` attribute is baked into HTML and is over thirty years old. It enjoys wide and deep support, on more browsers and devices than you can probably name in one sitting.

Similarly, capturing and storing the text content used to supply an alt attribute is a very known quantity. WordPress, the most popular content management system on the planet, [provides this feature out of the box](https://make.wordpress.org/accessibility/handbook/content/alternative-text-for-images/). So does [every major social media service](https://www.accessible-social.com/images-and-visuals/platform-image-accessibility) I can think of.

The question isn’t one of feasibility. It’s one of **education and priorities**.

You can’t solve culture with technology. Manual, author-provided alternate text descriptions is [a tried-and-true method of creating an equivalent experience](https://www.washingtonpost.com/dc-md-va/2022/07/20/nasa-images-accessible-text/). It’s just a question of actually doing it.

## Technoableism and solutioneering

The idea of “solving” alternate text descriptions by automating them away so that they are not a consideration is a bad frame.

Providing descriptive, engaging, and contextually relevant alternate text descriptions is a privilege, a joy, and [can even be an art](https://alt-text-as-poetry.net/). Above all, it is **an act of care**. It is not an exercise in trying to concoct a clever way to dodge around a perceived inconvenience.

Similarly, focusing on [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality) metadata, esoteric protocols, or yet-to-be-built technologies is a misstep. While technology can augment the experience of writing an alternative text description, we need to remember **what** is getting centered, **why**, and **who** should be getting prioritized.

Alternate text is for people, and **people are not a problem to be solved**. [The social model of disability](https://en.wikipedia.org/wiki/Social_model_of_disability) teaches us that it is the built environment that should be better crafted to meet the needs of the people who use it.

Instead of sweeping a presumed problem under the rug, elevate the prominence of alternate text descriptions in interfaces and combine it with education and a positive culture that both promotes and rewards the practice.
