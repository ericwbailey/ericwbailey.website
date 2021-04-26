---
layout: "layouts/post.njk"
title: Open UI and implicit parent/child relationships in HTML
source: ericwbailey.design
excerpt: "It turns out that naming things is difficult"
date: 2021-01-12
year: 2021
tags:
  - Development
  - HTML
  - Open UI
responses:
  - title: "Web Languages as Compile Targets"
    url: https://blog.jim-nielsen.com/2021/web-languages-as-compile-targets/
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 2
---

This phenomenon indirectly came up recently in an Open UI meeting I was attending. If you’re not familiar, [Open UI](https://open-ui.org/) is a group full of people far smarter than I am working to “allow web developers to style and extend built-in web UI controls.”

## Background

HTML elements are single words, each one [grown (relatively) organically](https://www.w3.org/TR/html-design-principles/#pave-the-cowpaths) from identified content needs. Want a button? Type `<button>` into your code editor. Want to define the main content of the page? The `<main>` element has you covered.

However, there are a few elements who need to be placed inside of another specific element in order to function properly. The `<option>` element is a good example of this:

```html
<select id="size">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
  <option value="extra-large">Extra-large</option>
</select>
```

`<option>` can be placed inside of `<datalist>` and `<optgroup>`, as well. Thanks to [HTML’s fault-tolerant nature](https://www.w3.org/TR/html-design-principles/#degrade-gracefully), the content of an `<option>` element will be displayed if declared outside of `<select>`, `<datalist>`, or `<optgroup>`. It’s just that in this context you can’t do anything interactive with it.

The `<label>` element is similar. You can write it where ever you want, but [it really only should be used with an explicit `for`/`id` attribute](https://developer.paciellogroup.com/blog/2011/07/html5-accessibility-chops-form-control-labeling/) paired with a small suite of other elements (`input`, `textarea`, `select`, etc.)

But the point is: the only way you learn about these associations is to [read the spec](https://www.w3.org/TR/html52/sec-forms.html#ref-for-contexts-in-which-this-element-can-be-used%E2%91%A8%E2%91%A0). And you know what? It’s not that difficult. You just need to learn about it in the first place, then practice it a few times. As a language, [HTML has a pretty limited vocabulary](https://twitter.com/brucel/status/1131133721401331712). Still, it’s not exactly intuitive.

## Naming things

With the gift of hindsight, I wonder if we could have been a little better about naming. In design systems, we often construct the name of things using a `parent-child` structure. Explicitly defining relationships this way helps with learning about who can do what, as well as what belongs with what.

This form of naming aids in adoption, and creates nice side-benefits, like better code-editor autocompletion. This kind of [granularity in naming](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) also extends to more complicated design system needs, as well.

### Web Components

Before we get any further: Yes, I am aware that [Web Components](https://css-tricks.com/an-introduction-to-web-components/) require a hyphen between two words to have a name. This means that HTML elements are forever consigned to single word instances. But hear me out:

### Explicit relationships

As a thought exercise, what if the Web Component naming limitation didn’t exist?

```html
<form>
  <form-section>
    <form-title>Customer Support</form-title>

    <select id="message-type">
      <select-option value="question">Question</select-option>
      <select-option value="feedback">Feedback</select-option>
      <select-option value="request">Request</select-option>
      <select-option value="cancellation">Cancellation</select-option>
      <select-option value="other">Other</select-option>
    </select>

    <input-label for="message">Your message</input-label>
    <input-textarea id="message" />

    <input-submit>Send message<input-submit>
  </form-section>
</form>
```

To unpack this code example some:

- `<fieldset>` becomes `<form-section>`, a name that I think makes the element's purpose way easier to grok.
- `<legend>` has been renamed `<form-title>`. I can count on one hand the number of developers I’ve worked with who were aware of the `<legend>` element, much less who have used it.
- `<option>` now becomes `<select-option>`. In this model, it could be one of multiple use-based aliases, all with the same mappings under the hood.
- `<label>` becomes `<input-label>` to better communicate what it should be paired with.
- `<textarea>` becomes `<input-textarea>` because honestly, `<textarea>` is just an `<input>` you can put line breaks into.
- `<input type="submit">` becomes `<input-submit>`. I know a lot of spec wonks expressed regret on not making each input type its own element, so I’m building from that.

### Where this starts to fall apart

Why isn’t everything prepended with `<form-`? What happens if `<select-option>` is declared inside of `<datalist>`? Why is it `<input-submit>`, and not `<button-submit>` or `<form-submit>` instead? And what about the hundreds of other corner cases I’m not smart enough to anticipate?

This post is reflective of some of the issues you run into doing this sort of work. Hopefully it also clues you into the direction Open UI would like to head.

## Don’t break the web

As mentioned previously, the presence of Web Components means that this is nothing more than a hypothetical exercise.

Anything Open UI produces will ultimately have to be boiled down into single-word elements. And that’s okay! One of the most important things is making sure that new innovations don’t break an ever-growing corpus of existing content. After all, you can’t know what will be important to who, or when.

## Existential threats

Personally, what I am most concerned about is Web Components reinventing the wheel, but worse. We’ve already seem this phenomenon with libraries and frameworks creating their own markup patterns that are less robust than their native HTML equivalents.

The worst of the problems that arise from this situation is that it [teaches people to think and work framework-first](https://twitter.com/akashkanodia3/status/1348563546154561536). When that happens, the hard-won, baked-in interoperability and, importantly, accessibility of the platform is thrown away. It’s a compounding problem, as well: The more people don’t use the elements made available to us, the more the notion exists that they’re irrelevant

To piss off as many people as possible, I guess I should also mention that I have these concerns for [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) as well.

## Sea change

This is a moment of weird friction on the web. The platform continues to shift from a document-based model to an application-based one. [Growing pains are inevitable](https://www.w3.org/TR/html-design-principles/#evolution-not-revolution), but I worry.

In treating HTML like a compile target, I wonder if we’re turning people who are HTML-literate into the equivalent of engineers who can program in [Assembly](https://en.m.wikipedia.org/wiki/Assembly_language). We can forgive earlier spec authors for not having the gift of foresight, but I wonder if we’re doing enough as an industry to continually teach and re-teach the fundamentals.

That’s one of the reasons I’m interested in Open UI as a concept. It seems like the right time, right place, right idea, right approach. New HTML elements that are easily styleable, extensible, and directly address development pain points would do a ton of good to create hype around using the right element for the job.
