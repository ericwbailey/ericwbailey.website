---
layout: "layouts/post.njk"
title: I love my slightly smart tiny TV
source: ericwbailey.website
excerpt: "I swear this isn’t a sponsored post"
date: 2024-05-13
year: 2024
tags:
  - Devices
  - Personal
inlineStyles: true
share:
  facebookDescription: "A simplified illustration of a small, retro-looking TV."
  twitterDescription: "A simplified illustration of a small, retro-looking TV."
series:
  previous:
    - title: "I love my not-smart TV"
      url: https://ericwbailey.website/published/i-love-my-not-smart-tv/
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 48
---

<style>
  details {
    font-size: var(--scale1);
    margin-top: 0.25rem !important;
  }

  details summary {
    line-height: 1.2;
  }

  details p {
    line-height: 1.35;
    margin-top: var(--scale0);
  }
</style>

I swear this isn’t a sponsored post.

I impulse bought a [TinyTV 2](https://tinytv.us/TV2-Get-Started/) recently. It serves a weirdly specific need, namely adding to my tiny living room’s tiny living room:

<figure
  role="figure"
  aria-label="I live in a small place. It’s a whole thing, don’t worry about it.">
  <img
    alt="A cozy-looking minature living room placed on the shelf of a piece of normal-sized furniture. The living room has a tiny wooden dresser bureau with gold knobs. A book, vase, and a hand-knit potted fern sit atop the dresser. To the left and right of it are two potted plants, one reminiscent of a monstera and the other a snake plant. In front of the bureai is a small square of fabric decorated with abstract geometric shapes, serving as a carpet. Placed on the carpet are a mini white dog, a mini chicken with three even smaller chicks, two little blobs with smiley faces, and a tiny vase holding angel's breath flowers. There is Above the bureau is a proportinately small decorative mirror and five pieces of art, some with ornate golden frames. In front of the bureau and to the left of the carpet is the tiny TV. It looks like how a TV from the 1940s might, with a large boxy frame, faux wood exterior, and a front metal speaker grill flanked by two control dials. The TV's frame is also held up off the ground via four small faux wooden legs. Finally, a penny is placed on the side of the carpet opposite of the TV, to better communicate the sense of scale."
    loading="lazy"
    src="{{ '/img/posts/i-love-my-slightly-smart-tiny-tv/tiny-living-room.jpg' | url }}" />
  <figcaption>
    I live in a small place. It’s a whole thing, don’t worry about it.
  </figcaption>
</figure>

The device itself is a bit of a technical marvel, provided you’re also an ancient nerd like I am. It has a 1.9" by 1.4" by 1.0" form factor that houses:

- An Itty-bitty 216 by 135 pixel color display,
- Eight gigabytes of flash storage,
- A tinny speaker,
- An infrared receiver for its companion teeny-tiny five button remote, and a
- USB-C port.

This is all just a little bit mind-blowing given that my first MP3 player held a whopping 16 megabytes’ worth of data.

## Smart in a very specific way

You add video to the TinyTV by plugging it into a computer and dragging AVI video files onto the root of the USB drive it mounts as.

And that’s it.

There’s no filename convention you need to use, no labyrinthine subdirectories to spelunk, or esoteric file format you need to convert videos to.

There’s also no limit on video length past the device’s eight gigabyte storage cap. In fact, one of the videos I include is a copy of [an hour-long montage of capybaras set to vaporwave music](https://www.youtube.com/watch?v=FR3i0qKzRvg).

Each video file corresponds to a “channel” on the TV. Channel order is assigned via alphanumeric sorting of the video’s filename, combined with a preference toggle. This means you could manually curate an order by using something like a numbered prefix.

You could also be like me and give yourself the grace of chucking them on in whatever order they land on and not think twice about it. This act has felt freeing, given how much I have to methodically curate so many of my other aspects of my digital life.

There is also [a companion web experience](https://tinytv.us/Settings/) that uses [the Web USB API](https://developer.mozilla.org/en-US/docs/Web/API/USB) to write to the device and set preferences:

<img
  alt="A list of preferences titled, 'TV Settings'. The instructions read, 'Change settings on TinyTV 2, Mini, or DIY Kit. The preferences each have an on or off radio switch, except for the volume setting, which is a range slider set to its max value of 6. The settings are loop video, live video, alphabatize playback, static effect, show channel number, show volume, and random start time. I have configured my TinyTV to not loop video or show live video, to sort alphabetically and change channels with a static effect, starting at a random start time. The channel number and volume are also set to display. Following the preferences are two buttons, one labeled, 'Format TV' and the other labeled, 'Disconnect'."
  loading="lazy"
  src="{{ '/img/posts/i-love-my-slightly-smart-tiny-tv/settings.png' | url }}" />

All this site does is have a slightly more easy way to modify a plaintext configuration file stored on the drive’s root. In addition, the preference option names are actually human-readable:

```
loopVideo=false
static=true
randStartTime=true
randStartChan=true
```

This sets my TinyTV set to jump to a random point in the video when the channel is changed, then change to the next channel in sequence when the current video is done.

This so perfectly recreates the aimless, serendipity-searching channel surfing experience of my childhood.

## But wait, there’s more

[TinyCircuits](https://tinycircuits.com/) was under no obligation to do this, but they also provide [a free companion app](https://tinytv.us/TinyTV-Converter-App/) for converting video files to a format that works for the device.

The app is also refreshingly direct. You:

- Pick a video file,
- Set the specific model of TinyTV it’ll be added to,
- Set if you want it stretched or cropped to fit, and then
- Set a destination to export to.

The app is also just a tad unpolished-feeling, but that’s honestly part of the charm. More importantly, it also has effortlessly handled all the incoming video file formats I’ve thrown at it.

Sure, you could do all your [video processing via the command line](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#usage-and-options), but this app is the dream of UI made manifest—taking a complicated terminal command with enough variables that it [isn’t worth automating](https://www.explainxkcd.com/wiki/index.php/1319:_Automation) and instead turn it into a few clicks.

## It’s also about what isn’t there

I paid for the device and got it. There isn’t a TinyTV+ subscription model, paid feature unlocks, drip email campaigns, or founders emailing me to “pick my brain.”

It also does not have:

- Unremovable sponsored content channels,
- Interstitial ads injected between channel change events,
- Unwanted AI-generated filler content,
- [Unnecceary AI features](https://arstechnica.com/gadgets/2024/04/ai-marketing-hype-is-coming-for-your-favorite-gadgets/) jammed into it,
- Radicalizing recommendation logic,
- A [surprise spy microphone](https://www.businessinsider.com/nest-microphone-was-never-supposed-to-be-a-secret-2019-2?op=1),
- Embedded phone-home telemetry,
- Misfiring content takedown algorithms,
- Planned obsolescence via operating system updates,
- [Any other horrible, consumer-hostile antifeature](https://ericwbailey.website/published/i-love-my-not-smart-tv/), or
- [Whatever the hell this is](https://cohost.org/ghoulnoise/post/5286766-do-not-buy-hisense-t).

## An act of care

You might think that all those missing “features” are not included by way of omission. However, I choose to believe it is premeditated and intentional given how detail-oriented the entire endeavor feels.

Seriously. They didn’t have to, but there’s a little burst of static effect that fires between channel changes:

<p class="hide-visually">
  <a href="#channel-surfing-video-description">
    Skip channel surfing YouTube embed.
  </a>
</p>
<div class="video-wrapper">
  <iframe
    src="https://www.youtube-nocookie.com/embed/WmwpMnf7Evo?si=RGGNn5sz9zkw3YTM"
    title="YouTube: TinyTV - Channel Surfing"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<details id="channel-surfing-video-description">
  <summary>
    Channel surfing video description
  </summary>
  <p>A small, retro-style TV placed on a wooden dining room table, with a soft-focus bookshelf behind it.</p>
  <p>The video opens with the TV displaying footage of Beavis and Butthead laughing on the couch, then changes to a weird-looking cartoon that passes by too quickly to be identified. Following that is footage of Nightmare At 20,000 Feet from The Twilight zone, a Sesame Street clip of Cookie, Cookie, Cookie starts with C, a German version of the Duck Tales cartoon opening, a short Metal Gear 1 cartoon action sequence, and part of the Pinball Number Count by The Electric Company.</p>
  <p>The TV then lingers on Freddie Mercury singing a part of Under Pressure, then changes to a Sailor Moon show break. It then shows the Sealab 2021 “Uh-oh” clip for a fraction of a second before then changing to the Conan the Barbiarian cartoon opening. The channel then changes to a snippet of Nirvana’s Smells Like Teen Spirit music video, then to a clip of the Zelda cartoon show. After that is a snippet of a Popsicles commerial, and then Ron Popeil performing an infomercial for the Ronco food dehydrator.
  <p>The "rise from your grave" sequence from Altered Beast is shown for a infinitesimally brief moment, followed by Jean Luc Picard sitting in the captain’s chair of the Enterprise. The video then concludes with Mark Mothersbaugh wearing his iconic energy dome hat in the Whip It music video.</p>
  <p>There is a brief burst of static and an accompanying hissing noise between each channel change. The tiny TV looks like how a television from the 1940s might, with a large boxy frame, faux wood exterior, and a front metal speaker grill flanked by two control dials. The TV's frame is also held up off the ground via four small faux wooden legs.</p>
</details>

There's also a pure nostalgia-tripping power down effect. It's ridiculous.

If someone from TinyCircuits somehow discovers and reads this: **Thank you!** This little gizmo has brought a lot of fun to my life, and your pride in craft is both noticed and appreciated.

## A realization

Getting this tiny, slightly smart TV made me realize how [disenchanted I’ve become by contemporary computing culture](https://stackoverflow.blog/2023/12/25/is-software-getting-worse/), and all of the [exhausting, extractive, exploitative bullshit that surrounds it](https://arstechnica.com/gadgets/2024/02/what-i-do-to-clean-up-a-clean-install-of-windows-11-23h2-and-edge/).

A one and done transaction got me a device that does its job well—in fact, far better than it has any right to for its price. This threw into sharp relief how rare that is in the current, [bloom-off-the-rose](https://www.technologyreview.com/2022/10/21/1061260/innovation-technology-what-happened/), [enshitified](https://www.theverge.com/2024/4/21/24063379/windows-11-ads-bing-edge-cruft) era of Silicon Valley.

It also does not place me in the headspace that [requires a paranoid mind](https://ericwbailey.website/published/my-jeans-metadata-may-outlive-the-company-that-sold-them/). I won’t need to search for, and archive media in its best possible version on a local device.

[Videos I copy](https://github.com/yt-dlp/yt-dlp) to the TinyTV won’t [disappear from the streaming service I pay for](https://www.youtube.com/watch?v=yvhv7bgmz64) one day without warning. They also won’t be sold off as part of some venture capital debt shell game, regardless of how much I enjoyed the content.

Additionally, using it does not make me feel like I’m helping [contribute to the pointless acceleration of climate collapse by way of overhyped chatbots powered by theft](https://www.newyorker.com/news/daily-comment/the-obscene-energy-demands-of-ai). It also does not feel like I am indirectly helping to bolster the [meta-agendas of cryptofascists](https://theconversation.com/a-new-silicon-valley-manifesto-reveals-the-bleak-dangerous-philosophy-driving-the-tech-industry-216894).

## Good enough can be great

Touching back on not needing to archive, I know I’m looking to more evoke a feeling than perfectly archive something I half-remember from my childhood.

I use whatever version of the video I can get my hands on, knowing it’ll be intentionally shrunk down, downsampled, and [demade](https://tvtropes.org/pmwiki/pmwiki.php/Main/VideogameDemake). And if I can’t find a source video, it’s fine.

It feels so liberating.

A small part of this is definitely because I’m wallowing in self-imposed nostalgia. There’s a rule I made up for myself of (mostly) sticking to content from the mid 80s to early 90s. This rule also ensures the content the TinyTV displays—and the experience it creates—matches its form factor.

<p class="hide-visually">
  <a href="#whatchamacallit-commercial-video-description">
    Skip Whatchamacallit YouTube embed.
  </a>
</p>
<div class="video-wrapper">
  <iframe
    src="https://www.youtube-nocookie.com/embed/QyAui327yZM?si=JhMKWQ1enG6Zu9SE"
    title="YouTube: TinyTV - Whatchamacallit"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<details id="whatchamacallit-commercial-video-description">
  <summary>
    Whatchamacallit commercial video description
  </summary>
  <p>A small, retro-style TV placed on a wooden dining room table, with a soft-focus bookshelf behind it.</p>
  <p>The TV turns on to show a commercial that opens with a photocopy collage animation of a Steampunk airship driven by a man in a old-fashioned suit and hat. It then transitions to a smiley face pin, followed by a young black and white cartoon woman holding a candy bar called Whatchamacallit. The candy bar is colored, to better emphasize it. The cartoon's illustration style is minimal like a linocut illustration, and reminiscent of a Charles Burns comic.</p>
  <p>This is followed by a UFO getting struck by a laser beam and exploding, which morphs to video footage of a large stream of melted chocolate being poured into a swirling vat. Another black and white cartoon scene is then shown, this time of a man eating a color chocolate bar. This scene then has numbered shoe-prints overlaid over it to show dance steps.</p>
  <p>Following that is a Monty Python-style collage animation of some sort of surreal organ on wheels, which wipes to show a human finger drawing a taut, sticky material upwards from the pool it is resting in. After that is another black and white cartoon woman who gently bites the tip of her finger almost seductively.</p>
  <p>A three by three grid of esoteric objects rotate through quick enough that they cannot be identified. This then transitions to a question mark overlay, which, in turn, transitions to an umbrella blocking a rain of peanuts. The rain scene then fades for another black and white cartoon woman. She is holding a color candy bar in one hand and outstretches the other to feel the peanut rain, which continues to fall in the background.</p>
  <p>When the peanut rice rain scene concludes the commercial then does an up-close pan across the candy bar's wrapper, which reads, “Hershey's Whatchamacallit. Caramel, peanut flavor crisp, milk chocolate”. The type for “Whatchamacallit” is set in bold, playful sans serif, with the letters dancing up and down the typeface’s baseline.</p>
  <p>After the pan, the commercial then shows an illustration of a leopard leaping to swallow a jeweled bauble. The leopard is split down the middle and connected by a coiled spring. Following the tiger’s jump is video footage of the candy bar being split down the middle, pulled apart to reveal connecting threads of sticky caramel.</p>
  <p>Finally, there is a young black and white cartoon man wearing circular glasses who looks inquisitively at the viewer and then looks up the term “Whatchamacallit” in the dictionary. An illustration of the candy bar is shown next to the word, which glows with color once identified.</p>
  <p>During the entire commercial a song about the candy bar is playing. It has a haunting, quizzical, dream-like wavy synth-pop quality to it.</p>
  <p>The tiny TV looks like how a television from the 1940s might, with a large boxy frame, faux wood exterior, and a front metal speaker grill flanked by two control dials. The TV's frame is also held up off the ground via four small faux wooden legs.</p>
</details>

A larger part of this feeling is because the device is simple, straightforward, unambitious, and intentionally imperfect. And <strong>dwelling in those qualities is joy</strong>.

Don’t get we wrong: simpler isn’t necessarily better, and [nostalgia can be a trap](https://antientro.pics/retro/criticism/2024/05/05/sick-of-old-computers). But the technology the TinyTV is paying tribute to, and [the media I load onto it](https://www.youtube.com/watch?v=bLlj_GeKniA) was far more innocent about where [things would wind up](https://www.axios.com/2024/04/23/google-fires-employees-protest-israel-contract-nimbus).

## Sharing joy

Surprise! A lot of my friends are also gigantic, ancient nerds.

I’ve had so much fun showing my friends the TinyTV. They openly smile, giggle, and laugh with a genuine sense of delight when first seeing and operating it. Heck, I know two of them straight-up bought one for themselves right after.

And this delight is the actual, earnest version of the term. It’s not the tech-diluted meaning, where a stakeholder can push their own “numbers go up“ agenda to make some part of the experience worse.

It’s such a rare thing these days to see technology evoke this kind of unvarnished, positive emotion when it comes to anything tech-related. This feeling is why I felt compelled to commit ~1,250 words to code to ramble on about a little electronic tchotchke.

It’s less about the [retrocomputing](https://en.wikipedia.org/wiki/Retrocomputing), and more about the joy of the experience. Even more importantly, it’s about the joy of sharing this experience with others.

I encourage you to find your own version of the TinyTV: A simple, straightforward digital experience that brings uncomplicated fun into your and other people’s lives.

<p class="hide-visually">
  <a href="#thats-all-folks-video-description">
    Skip that’s all folks YouTube embed.
  </a>
</p>
<div class="video-wrapper">
  <iframe
    src="https://www.youtube-nocookie.com/embed/17v5pj6-g0k?si=8HxoS5b0KQzIX7k8"
    title="YouTube: TinyTV - That's all folks"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<details id="thats-all-folks-video-description">
  <summary>
    That’s all folks video description
  </summary>
  <p>A small, retro-style TV placed on a wooden dining room table, with a soft-focus bookshelf behind it.</p>
  <p>The phrase, “That’s all Folks!” written out in cursive, placed in front of brightly-colored concentric rings. After the script is written out it is followed by the phrases “Looney Tunes” and “A Warner Brothers Production”.</p>
  <p>The background music is a jaunty, big band production that sounds a little tinny due to the speaker quality.</p>
  <p>The TV is then turned off. There is a burst of black and white static that closes into an ever-shrinking circle that is finally reduced to a dot before dissappearing completely.</p>
  <p>The tiny TV looks like how a television from the 1940s might, with a large boxy frame, faux wood exterior, and a front metal speaker grill flanked by two control dials. The TV's frame is also held up off the ground via four small faux wooden legs.</p>
</details>
