---
layout: "layouts/post.njk"
title: How an accessibility designer adds keyboard shortcuts to a web app
source: ericwbailey.website
excerpt: "Keyboard shortcuts occupy a strange area for web design"
date: 2026-11-28
year: 2026
tags:
  - Accessibility
  - Approach
  - Assistive Technology
  - Design
  - Development
  - Inclusion
share:
  facebookDescription: "Home, End, Page Up, and Page Down keys."
  twitterDescription: "A Home key."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 3
---

This is another window into the sometimes [unglamorous-yet-vital](https://ericwbailey.website/published/basic-keyboard-shortcut-support-for-focused-links/) tasks that being an accessibility designer demands.

Keyboard shortcuts occupy a strange area for web design. Most websites don’t have them, and that’s totally fine. However, it makes more sense for web apps to utilize them.

Web apps utilize keyboard shortcuts for speedier navigation and operation, for people who want or need to spend extended periods of time using the service. It’s the same as non-web apps.

That said, **there’s a lot of nuance when it comes to adding a keyboard shortcut**. It feels a lot like something akin to [the Swiss Cheese model](https://en.wikipedia.org/wiki/Swiss_cheese_model), delicately threading a needle through multiple, complicated pieces of fabric.

The <a href="#support-table">support table placed later on in this post</a> is the result of research I conducted at work as a result of acknowledging said nuance. The task itself was to figure out how to get better support for <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page Up</kbd>, and <kbd>Page Down</kbd> behavior for a new feature.

## A considered experience

The “designer” part of “accessibility designer” is ensuring that the keyboard shortcuts you help create **feel natural and intuitive** to operate for **all** involved.

More importantly, the “accessibility” part is ensuring the widest possible range of people—with unknown devices, circumstances, and preferences—aren’t **negatively affected** by your choices.

Consider people who:

- Use a keyboard intermittently,
- Who use it as much as possible by choice, and
- Use one all of the time by virtue of circumstance.

Then know that there are multiple, overlapping layers of keyboard shortcuts present on every device, including ones for:

- The operating system,
- Apps installed on the operating system,
- The browser,
- Extensions installed on the browser,
- Assistive technology, and
- Plugins installed on the assistive technology.

Also note that the keyboard shortcuts themselves can be adjusted by someone on all of these levels to suit their own needs, via official and unofficially-supported means.

<figure
  role="figure"
  aria-label="I am loathe to admit it, but Photoshop does a good job at managing keyboard shortcuts.">
  <img
    alt="A Photoshop menu called 'Keyboard Shortcuts and Menus'. There is a tree view for each of Photoshop's parent menus, with the node for the 'Edit' menu command expanded. Menu commands are listed, as well as their associated keyboard shortcuts. Options are also present to add, remove, undo, and use default shortcuts. Screenshot."
    loading="lazy"
    src="{{ '/img/posts/how-an-accessibility-designer-adds-keyboard-shortcuts-to-a-web-app/photoshop-keyboard-shortcuts.png' | url }}"/>
  <figcaption>
    I am loathe to admit it, but Photoshop does a good job at managing keyboard shortcuts.
  </figcaption>
</figure>

You need to navigate this tangled mess to find a combination of keys that:

- Are not claimed at all, or more realistically
- Won’t drastically affect someone’s experience in a negative way if overridden in a limited specific and context.

You’ll also need to navigate the tangled mess that is politics. The organizations that produce web apps are made out of people, and **people have opinions**. This includes notions around:

- How things should operate, even at the expense of excluding some unknown number of people.
- Instituting features that have no direct connection to profitability.

Remembering that doing accessibility work means advocating for concerns in an industry that has systematically deprioritized it as a practice can [help out some in terms of approach](https://humanisticsystems.com/2023/03/03/work-as-imagined-solutioneering-ten-traps-along-the-yellow-brick-road/#:~:text=Trap%202.%20Complexity,seek%20to%20understand%3A) to all of this.

## The world does not revolve around your web app

You also need to internalize that **your web app is not the center of the universe**. It is part of a larger suite of interactions someone is doing on their device to get what they need.

The best possible outcome for introducing a keyboard shortcut that overrides someone’s existing expectations is mild annoyance. A range of negative outcomes follows, probably the most notable being reputational damage.

The worst—and unfortunately oftentimes quiet—outcome is that you **break assistive technology functionality** for someone. This is why [WCAG Success Criterion 2.1.4: Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html) exists. It’s also why mature web apps like GitHub have this type of preference toggle:

<img
  alt="The Keyboard shortcuts subsection of GitHub's accessibility account preference area. An option for character keys has been turned off. Below the toggle is helper text that reads, 'Enable GitHub shortcuts that don't use modifier keys in their activation. For example, the g n shortcut to navigate notifications, or question mark to view context relevant shortcuts. Learn more about character key shortcuts.' Following that is a button to save keyboard shortcut preferences. Cropped screenshot."
  loading="lazy"
  src="{{ '/img/posts/how-an-accessibility-designer-adds-keyboard-shortcuts-to-a-web-app/github-keyboard-shortcut-preference.png' | url }}"/>

To the extent of my knowledge, Firefox is the only browser that lets you [natively override a keyboard shortcut override](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions), via some buried, legacy menus. This lends further ammo to my belief that [browsers are a failure of imagination](https://ericwbailey.website/published/contrast-color-is-a-good-thing-but-also-solving-the-problem-at-the-wrong-layer/)—the end result of misaligned business priorities.

Some may also point out here that [screen readers have passthrough key capability](https://adrianroselli.com/2026/01/brief-note-on-application-keyboard-shortcuts.html).
However, consider:

- It is a fallacy to assume [everyone has perfect working knowledge of the full capabilities of their software and hardware](https://ericwbailey.website/published/truths-about-digital-accessibility/#not-every-assistive-technology-user-is-a-power-user).
- For people that do know about passthrough key support, it is annoying, tedious, and sometimes even painful to have to use them for frequently-used commands.

To say it more plainly: Advocating for the creation of a keyboard preference support area on your web app will be a painful undertaking. This is due to [a contemporary business culture that largely views user experience to be an inconvenient friction](https://productpicnic.beehiiv.com/p/why-design-goes-wrong-and-how-to-set-it-right-part-1) that gets in the way of metrics-obsessed rent-seeking.

## The map is not the territory

In reviewing the support table, the lack of OS, browser, or screen reader keyboard shortcuts for an <kbd>Alt</kbd>/<kbd>Command</kbd> + <kbd>End</kbd> keypress might make it seem like a good candidate to use for my task. However, <kbd>Alt/</kbd><kbd>Command</kbd> + <kbd>Home</kbd> <a href="#alt-command-home">opens the browser start page, moves current page back one history event for every major browser on Windows</a>.

People who use a modifier key with <kbd>End</kbd> will likely expect the same modifier key applied to <kbd>Home</kbd> to operate in a similar fashion. For example, if some combination of modifier keys plus <kbd>Page Down</kbd> scrolls down 75% of the height of the page, one would assume that the same combination plus <kbd>Page Up</kbd> scrolls upward 75% instead.

As my research shows, <a href="#support-table">this is true until it isn’t</a>.

## Decisions and ramifications

After figuring out what keypresses do what comes the responsibility of **figuring out if this behavior is something you want to intentionally suppress**.

To me, opening the browser start page and moving the current page back one history event is a weird, awkward, and surprising behavior. However, given the scope and scale of the audience GitHub serves, it is statistically almost certain at least one person loves the feature and uses it every day.

I need to **weigh that consideration against the context of the task** I am helping out with at work. The new feature involves data entry, so a navigation event introduces the chance of accidental data loss—not ideal!

I say responsibility because there’s also **an incredible amount of weight when you factor in how assistive technology operates**.

Suppressing the home page-summoning behavior might be annoying, but there are workarounds. Suppressing keys that people who use screen readers rely on to navigate and take action on things locks them out.

For example, don’t use <kbd>h</kbd> to open a help dialog. Both NVDA and JAWS use the <kbd>h</kbd> key to navigate by heading, and this is [the far most popular way that people use screen readers to navigate](https://webaim.org/projects/screenreadersurvey10/#finding).

Another way to contextualize it: Overwriting <kbd>h</kbd> keypresses would be the equivalent of **preventing you from scrolling** down via mouse, trackpad, or screen swipe.

## More learnings

The table is a beast, but it reveals all sorts of interesting things. A few that stand out to me are:

- Screen readers don’t have parity in function across different versions, unless they do.
- Browsers have consistent behavior across different operating systems, until they don’t.
- All browsers can have the same behavior, save for one—I’m pointing my finger at you, Safari.
- Two browsers may share the same underlying rendering engine, yet have completely different behaviors.

Another map-is-not-the-territory consideration is large areas of seeming cross-operating system support may not work as expected in the actual. <kbd>Command</kbd> is frequently used on macOS as a modifier key, so a lack of existing behavior for it and its Windows equivalent may seem tempting.

However, <kbd>Alt</kbd>, otherwise known the Windows key, opens the Start Menu. Although this would have cross-operating system parity, it would not be a great experience for people who use Windows.

### Availability bias

As people who predominately use macOS or Linux to build web experiences, **we oftentimes tend to forget other operating systems exist**.

This can have even more subtle consequences, in that Mac laptops don’t have <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page Up</kbd>, and <kbd>Page Down</kbd> keys. This fact can **conspire to make people forget that these keys exist and are used**, to say nothing of other biases such as [non-English keyboard layouts](https://en.wikipedia.org/wiki/List_of_QWERTY_keyboard_language_variants).

<figure
  role="figure"
  aria-label="Source: MediaRange Keyboard USB Qwertz German Black, W128289008 (Black).">
  <img
    alt="A black plastic keyboard that uses a German layout."
    loading="lazy"
    src="{{ '/img/posts/how-an-accessibility-designer-adds-keyboard-shortcuts-to-a-web-app/german-keyboard.png' | url }}"/>
  <figcaption>
    <span class="typography-small-caps">Source:</span> <a href="https://www.amazon.com/MediaRange-Keyboard-Qwertz-German-W128289008/dp/B08KW9XN59">MediaRange Keyboard USB Qwertz German Black, W128289008 (Black)</a>.
  </figcaption>
</figure>

And speaking of things we assume based on the devices we use, another learning well-worth pointing out is **the divergence between VoiceOver and JAWS or NVDA**. VoiceOver is exclusive to macOS, while JAWS and NVDA are exclusive to Windows. This is important to note in that [JAWS and NVDA are far, far more popular than macOS VoiceOver](https://webaim.org/projects/screenreadersurvey10/#browsercombos).

Broadly-speaking, VoiceOver has a different interaction paradigm when compared to other popular screen readers. Without proper education about the space, this may lead to false understandings of how things operate in the actual for a lot of people.

## The support table

<nav aria-label="Support table sections">
  <ul>
    <li><a href="#testing-notes">Skip support table</a>.</li>
    <li><a href="#home">Results for <kbd>Home</kbd></a>.</li>
    <li><a href="#end">Results for <kbd>End</kbd></a>.</li>
    <li><a href="#page-up">Results for <kbd>Page Up</kbd></a>.</li>
    <li><a href="#page-down">Results for <kbd>Page Down</kbd></a>.</li>
  </ul>
</nav>

<style>
  [tabindex="0"][role="region"][aria-labelledby="table-title"] {
    overflow: auto;
  }

  [tabindex="0"][role="region"][aria-labelledby="table-title"]:focus {
    outline: 1px solid #1d818c;
    outline-offset: 1px;
  }

  table thead tr th {
    font-family: var(--typeface-primary);
  }

  table col[rowspan], 
  table td[rowspan], 
  table th[rowspan] {
    text-align: left;
    vertical-align: top;
  }

  table col[colspan], 
  table td[colspan], 
  table th[colspan] {
    text-align: left;
  }
  
  table tr td[colspan="7"] {
    border-right: 1px solid #111111;
    border-left: 1px solid #111111;

    @media (prefers-color-scheme: dark) {
      border-right: 1px solid #2b2b2b;
      border-left: 1px solid #2b2b2b;
    }
  }

  table tr td[colspan="7"] kbd {
    color: #111111;

    @media (prefers-color-scheme: dark) {
      color: #ffffff !important;
    }
  }

  th, 
  td {
    border: 1px solid #111111;
    
    font-size: 0.9rem;
    font-weight: normal;
    padding: 0.3rem 0.4rem !important;
    text-align: start;
    vertical-align: top;

    @media (prefers-color-scheme: dark) {
      border-color: #2b2b2b;
    }
  }

  thead th {
    background-color: #111111;
    color: #ffffff;

    @media (prefers-color-scheme: dark) {
      background-color: #ffffff;
      color: #111111;
    }
  }

  thead [scope="col"],
  tbody [colspan="7"],
  [data-os] {
    font-weight: bold;
  }

  [data-border="thick"] {
    border-top: 2px solid currentColor;
  }

  tbody [colspan="7"] {
    background-color: #4a4a4a;
    color: #ffffff;

    @media (prefers-color-scheme: dark) {
      background-color: #2b2b2b;
      color: #111111;
    }
  }

  table {
    border-collapse: collapse;
    white-space: nowrap;
  }

  table kbd {
    word-break: keep-all;
  }

  [data-scope="na"] {
    color: #737373;

    @media (prefers-color-scheme: dark) {
      color: #787878;
    }
  }

  [data-outcome="no"] {
    background-color: #f0fcf7;
    color: #204234;

    @media (prefers-color-scheme: dark) {
      background-color: #204234;
      color: #f0fcf7;
    }
  }

  [data-outcome="yes"] {
    background-color: #fefdee;
    color: #625f21;

    @media (prefers-color-scheme: dark) {
      background-color: #625f21;
      color: #fefdee;
    }
  }

  [data-scope="browser"] {
    background-color: #edfbfd;
    color: #1d565c;

    @media (prefers-color-scheme: dark) {
      background-color: #1d565c;
      color: #edfbfd;
    }
  }

  [data-scope="at"] {
    background-color: #feeff9;
    color: #64465a;

    @media (prefers-color-scheme: dark) {
      background-color: #64465a;
      color: #feeff9;
    }
  }

  [data-scope="os"] {
    background-color: #fff3f0;
    color: #663628;

    @media (prefers-color-scheme: dark) {
      background-color: #663628;
      color: #fff3f0;
    }
  }
</style>


<h3 class="hide-visually" id="table-title">
  Support table findings
</h3>

<div class="post-breakout" tabindex="0" role="region" aria-labelledby="table-title">

  <table id="support-table" aria-labelledby="table-title">
    <thead>
      <tr>
        <th scope="col" id="kbd">Keyboard combo</th>
        <th scope="col" id="os">Operating system</th>
        <th scope="col" id="browser">Browser</th>
        <th scope="col" id="sr">Screen reader</th>
        <th scope="col" id="behavior">Existing behavior?</th>
        <th scope="col" id="scope">Scope</th>
        <th scope="col" id="function">Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="colgroup" colspan="7" id="home"><kbd>Home</kbd></td>
      </tr>
      <tr>
        <th scope="row" id="shift-home" headers="home kbd" rowspan="17"><kbd>Shift</kbd>&#8202;+&#8202;<kbd>Home</kbd></th>
        <td headers="home os" rowspan="9" data-os="windows">Windows</td>
        <td headers="home browser" rowspan="3">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Selects all text on line of text before last known cursor position</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home os" rowspan="8" data-os="mac">macOS</td>
        <td headers="home browser" rowspan="2">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Safari</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="control-home" headers="home kbd" rowspan="17"><kbd>Control</kbd>&#8202;+&#8202;<kbd>Home</kbd></th>
        <td headers="home os" rowspan="9" data-os="windows">Windows</td>
        <td headers="home browser" rowspan="3">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="at">Screen Reader</td>
        <td headers="home function">Places focus on first focusable element on the page</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="at">Screen Reader</td>
        <td headers="home function">Places focus on first focusable element on the page</td>
      </tr>
      <tr>
        <td headers="home os" rowspan="8" data-os="mac">macOS</td>
        <td headers="home browser" rowspan="2">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Scrolls to top of page</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Safari</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="option-home" headers="home kbd" rowspan="17"><kbd>Option</kbd>&#8202;+&#8202;<kbd>Home</kbd></th>
        <td headers="home os" rowspan="9" data-os="windows">Windows</td>
        <td headers="home browser" rowspan="3">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="os">Operating System</td>
        <td headers="home function">Minimizes all open windows and apps that don’t currently have focus</td>
      </tr>
      <tr>
        <td headers="home os" rowspan="8" data-os="mac">macOS</td>
        <td headers="home browser" rowspan="2">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="at">Screen Reader</td>
        <td headers="home function">Focuses an arbitrary focusable element before the currently focused item in the DOM, relatively close proximity to the currently focused item</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="at">Screen Reader</td>
        <td headers="home function">Moves focus to the first focusable element in the DOM, then opens the browser start page and moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Safari</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="alt-command-home" headers="home kbd" rowspan="17"><kbd>Alt</kbd>&#8202;/&#8202;<kbd>Command</kbd>&#8202;+&#8202;<kbd>Home</kbd></th>
        <td headers="home os" rowspan="9" data-os="windows">Windows</td>
        <td headers="home browser" rowspan="3">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="3">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">JAWS</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">NVDA</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home os" rowspan="8" data-os="mac">macOS</td>
        <td headers="home browser" rowspan="2">Chrome</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Edge</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Firefox</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="no">No</td>
        <td headers="home scope" data-scope="na">N/A</td>
        <td headers="home function"></td>
      </tr>
      <tr>
        <td headers="home browser" rowspan="2">Safari</td>
        <td headers="home sr">None</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td headers="home sr">VoiceOver</td>
        <td headers="home behavior" data-outcome="yes">Yes</td>
        <td headers="home scope" data-scope="browser">Browser</td>
        <td headers="home function">Opens the browser start page, moves current page back one history event</td>
      </tr>
      <tr>
        <td scope="colgroup" colspan="7" id="end"><kbd>End</kbd></td>
      </tr>
      <tr>
        <th scope="row" id="shift-end" headers="end kbd" rowspan="17"><kbd>Shift</kbd>&#8202;+&#8202;<kbd>End</kbd></th>
        <td headers="end os" rowspan="9" data-os="windows">Windows</td>
        <td headers="end browser" rowspan="3">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Re-reads content the virtual cursor is placed on</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Selects next line</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Re-reads content the virtual cursor is placed on</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Selects next line</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Re-reads content the virtual cursor is placed on</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Selects next line</td>
      </tr>
      <tr>
        <td headers="end os" rowspan="8" data-os="mac">macOS</td>
        <td headers="end browser" rowspan="2">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Safari</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="control-end" headers="end kbd" rowspan="17"><kbd>Control</kbd>&#8202;+&#8202;<kbd>End</kbd></th>
        <td headers="end os" rowspan="9" data-os="windows">Windows</td>
        <td headers="end browser" rowspan="3">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="browser">Browser</td>
        <td headers="end function">Scrolls to bottom of page</td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Places virtual cursor on the last node in the DOM</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Places virtual cursor on last landmark in the DOM</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Places virtual cursor on the last node in the DOM</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Places virtual cursor on last landmark</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="browser">Browser</td>
        <td headers="end function">Scrolls to end of page</td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Places virtual cursor on the last node in the DOM</td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Re-reads currently focused DOM node</td>
      </tr>
      <tr>
        <td headers="end os" rowspan="8" data-os="mac">macOS</td>
        <td headers="end browser" rowspan="2">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Moves focus to the end of the next content section in the DOM</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Moves focus to the end of the next content section in the DOM</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Safari</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="option-end" headers="end kbd" rowspan="17"><kbd>Option</kbd>&#8202;+&#8202;<kbd>End</kbd></th>
        <td headers="end os" rowspan="9" data-os="windows">Windows</td>
        <td headers="end browser" rowspan="3">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end os" rowspan="8" data-os="mac">macOS</td>
        <td headers="end browser" rowspan="2">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Moves focus to the end of the next content section in the DOM</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="yes">Yes</td>
        <td headers="end scope" data-scope="at">Screen Reader</td>
        <td headers="end function">Moves focus to the end of the next content section in the DOM</td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Safari</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="alt-command-end" headers="end kbd" rowspan="17"><kbd>Alt</kbd>&#8202;/&#8202;<kbd>Command</kbd>&#8202;+&#8202;<kbd>End</kbd></th>
        <td headers="end os" rowspan="9" data-os="windows">Windows</td>
        <td headers="end browser" rowspan="3">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="3">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">JAWS</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">NVDA</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end os" rowspan="8" data-os="mac">macOS</td>
        <td headers="end browser" rowspan="2">Chrome</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Edge</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Firefox</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end browser" rowspan="2">Safari</td>
        <td headers="end sr">None</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td headers="end sr">VoiceOver</td>
        <td headers="end behavior" data-outcome="no">No</td>
        <td headers="end scope" data-scope="na">N/A</td>
        <td headers="end function"></td>
      </tr>
      <tr>
        <td scope="colgroup" colspan="7" id="pageup"><kbd>Page Up</kbd></td>
      </tr>
      <tr>
        <th scope="row" id="page-up-end" headers="end kbd" rowspan="17"><kbd>Shift</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Up</kbd></th>
        <td headers="pageup os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pageup browser" rowspan="3">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Selects all text in a range above and below the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Reads the DOM past the current position of the virutal cursor</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Selects a section of text below the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Reads the DOM past the current position of the virutal cursor</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Scrolls down one page section and selects all text in range of the scroll distance</td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Reads a small portion of the DOM past the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="at">Screen Reader</td>
        <td headers="pageup function">Reads the DOM past the current position of the virutal cursor</td>
      </tr>
      <tr>
        <td headers="pageup os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pageup browser" rowspan="2">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Safari</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="control-page-up" headers="pageup kbd" rowspan="17"><kbd>Control</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Up</kbd></th>
        <td headers="pageup os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pageup browser" rowspan="3">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pageup browser" rowspan="2">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="yes">Yes</td>
        <td headers="pageup scope" data-scope="browser">Browser</td>
        <td headers="pageup function">Opens previous browser tab</td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Safari</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <!-- 3.3 Option + Page Up -->
      <tr data-border="thick">
        <th scope="row" id="option-page-up" headers="pageup kbd" rowspan="17"><kbd>Option</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Up</kbd></th>
        <td headers="pageup os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pageup browser" rowspan="3">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pageup browser" rowspan="2">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Safari</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="alt-command-page-up" headers="pageup kbd" rowspan="17"><kbd>Alt</kbd>&#8202;/&#8202;<kbd>Command</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Up</kbd></th>
        <td headers="pageup os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pageup browser" rowspan="3">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="3">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">JAWS</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">NVDA</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pageup browser" rowspan="2">Chrome</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Edge</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Firefox</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup browser" rowspan="2">Safari</td>
        <td headers="pageup sr">None</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td headers="pageup sr">VoiceOver</td>
        <td headers="pageup behavior" data-outcome="no">No</td>
        <td headers="pageup scope" data-scope="na">N/A</td>
        <td headers="pageup function"></td>
      </tr>
      <tr>
        <td scope="colgroup" colspan="7" id="page-down"><kbd>Page Down</kbd></td>
      </tr>
      <tr>
        <th scope="row" id="shift-page-down" headers="end kbd" rowspan="17"><kbd>Shift</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Down</kbd></th>
        <td headers="pagedown os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pagedown browser" rowspan="3">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Selects all text in range above and below the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Reads the DOM past the current position of the virutal cursor</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Selects a section of text below the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Reads the DOM past the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Scrolls down one page section and selects all text in range of the scroll distance</td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Reads a small portion of the DOM past the current position of the virtual cursor</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="at">Screen Reader</td>
        <td headers="pagedown function">Reads the DOM past the current position of the virutal cursor</td>
      </tr>
      <tr>
        <td headers="pagedown os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pagedown browser" rowspan="2">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no"></td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Safari</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="control-page-down" headers="pageup kbd" rowspan="17"><kbd>Control</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Down</kbd></th>
        <td headers="pagedown os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pagedown browser" rowspan="3">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pagedown browser" rowspan="2">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="yes">Yes</td>
        <td headers="pagedown scope" data-scope="browser">Browser</td>
        <td headers="pagedown function">Opens next browser tab</td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Safari</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="option-page-down" headers="pagedown kbd" rowspan="17"><kbd>Option</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Down</kbd></th>
        <td headers="pagedown os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pagedown browser" rowspan="3">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pagedown browser" rowspan="2">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no"></td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Safari</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr data-border="thick">
        <th scope="row" id="alt-command-page-down" headers="pagedown kbd" rowspan="17"><kbd>Alt</kbd>&#8202;/&#8202;<kbd>Command</kbd>&#8202;+&#8202;<kbd>Page&nbsp;Down</kbd></th>
        <td headers="pagedown os" rowspan="9" data-os="windows">Windows</td>
        <td headers="pagedown browser" rowspan="3">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="3">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">JAWS</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">NVDA</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown os" rowspan="8" data-os="mac">macOS</td>
        <td headers="pagedown browser" rowspan="2">Chrome</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Edge</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Firefox</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown browser" rowspan="2">Safari</td>
        <td headers="pagedown sr">None</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
      <tr>
        <td headers="pagedown sr">VoiceOver</td>
        <td headers="pagedown behavior" data-outcome="no">No</td>
        <td headers="pagedown scope" data-scope="na">N/A</td>
        <td headers="pagedown function"></td>
      </tr>
    </tbody>
  </table>
</div>

## Testing notes

Evaluation was conducted the week of January 19th, 2026. Following is what I used to conduct my research:

### Keyboards

- 2021 MacBook Pro.
- Logitech Slim Solar+ K980.

### Operating Systems and browsers

- Windows, version X.
  - Chrome, version 144.0.7559.97.
  - Edge, version 144.0.3719.92.
  - Firefox, version 147.0.1.
- macOS, version 15.7.3 (fuck you, Liquid Glass).
  - Chrome, version 144.0.7559.97.
  - Edge, version 144.0.3719.92.
  - Firefox, version 147.0.1.
  - Safari, version 26.2 (20623.1.14.18.4).

### Assistive technology

- JAWS, version 2026.2512.50.
- NVDA, version 2025.3.2.
- VoiceOver, using macOS version 15.7.3.

## Also note

- I am not presenting the suggestions I recommended at my job because of how contextual this work is.
- [These observations from a past effort](https://ericwbailey.website/published/basic-keyboard-shortcut-support-for-focused-links/#other-testing-details).
- What wasn’t evaluated:
  - I didn’t evaluate less-popular Chromium browsers.
  - I didn’t evaluate popular browser extensions like [Grammarly](https://www.grammarly.com/).
  - I didn’t evaluate support on iOS or Android, but they do support keyboard input and people **do** use them.
  - I also didn’t evaluate Linux or [Orca](https://orca.gnome.org/). There are just too many possible permutations.
  - Seriously. I am only one man with a full-time job and a dog who does not like it when I’m not giving her attention, folks.
- Using an LLM:
  - Using [plaintext copies of screen reader manuals](https://support.freedomscientific.com/Content/Documents/Manuals/JAWS/Keystrokes.txt) to use as LLM context still created hallucinations.
  - It also doesn’t cover the app or operating system layers.
  - The stakes are too high considering the human-facing impact, and it was likely net-less effort to manually test to get certainty with results.
  - There might be a metaphor worth thinking through in that previous bullet point.
