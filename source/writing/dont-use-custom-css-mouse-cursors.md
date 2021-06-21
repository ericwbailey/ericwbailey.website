---
layout: "layouts/post.njk"
title: Don’t use custom CSS mouse cursors
source: ericwbailey.design
excerpt: "Vanity is almost always at odds with user needs. While a custom CSS cursor may seem flashy and fun, consider that it may present a significant, unnecessary barrier to access"
date: 2021-05-18
year: 2021
tags:
  - Accessibility
  - CSS
  - Design
  - Inclusion
share:
  facebookImage: "share-image-facebook.png"
  facebookDescription: "A hello kitty mouse cursor."
  twitterImage: "share-image-twitter.png"
  twitterDescription: "A four by two grid of CSS cursors, including OS default, text edit bar, link pointer, move, open drag hand, zoom in, column resize, and cell."
eleventyNavigation:
  key: {{ title }}
  parent: {{ year }}
  order: 25
---

I believe that letting CSS load a custom cursor was a mistake. This might seem like a niche complaint, and you know what? It is. But it’s also an important one.

One of the best things about CSS is that it lets us make websites and web apps look like anything we can dream up. One of the worst things about CSS is that it lets us make websites and web apps look like anything we can dream up.

This is to say that adding a custom cursor might seem like a fun, fancy thing to do at first, but has some serious inclusive design considerations to be aware of.

## What a custom cursor isn’t

First off, I’m not talking about [the ability to change a mouse cursor's state](http://css-cursor.techstream.org/). This includes a pointing hand icon for links, resize and text entry indicators, zooming, dragging affordances, etc.

<svg role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"><title>A four by two grid of CSS cursors, including OS default, text edit bar, link pointer, move, open drag hand, zoom in, column resize, and cell.</title><defs><style>.cls-1{fill:#4a4a4a}@media (prefers-color-scheme:dark){.cls-1{fill:#e8e8e8}}</style></defs><path class="cls-1" d="M103.21 108.23h30.54L96.9 71.3l-3.69-3.7-26.96-27.02V133.07l14.83-14.32 6.15-5.93 3.54 8.42 16.05 38.18 15.24-6.4-15.27-36.29-3.58-8.5zM508.18 243.18h-.16v-.16h-15.87v49.05h-25.01v-18.64L440 300l27.14 26.36v-18.43h25.01v49.05H508.18v-49.05h24.68v18.47L560 299.82l-27.14-26.34v18.42h-24.68v-48.72zM717.14 282.9V240H683v42.9h-43V317h43v43h34.12v-43h42.8v-34.1zm34.21 25.67h-43v42.86h-16.86v-42.86h-42.72v-16.88h42.72v-43h16.88v43h43zM759.95 99.94L736.61 74.3v16.69h-27.46V63.45l16.49.01-25.61-23.47-25.64 23.46h16.51v27.54h-27.39V74.3l-23.46 25.64 23.47 25.62-.01-16.5h27.46v27.43l-16.68-.01L699.91 160l25.6-23.51h-16.48v-27.43h27.58v16.5l23.34-25.62zM277.5 307.5h15v-15.15h15V277.5h-15v-15h-15v15h-15v14.85h15v15.15z"/><path class="cls-1" d="M321.64 311A45.14 45.14 0 10311 321.64L349.39 360 360 349.39zm.86-26a37.5 37.5 0 11-37.5-37.5 37.54 37.54 0 0137.5 37.5zM548.86 77.71a11.44 11.44 0 00-10.45 2.53 17.78 17.78 0 00-1.86-5.07c-.93-1.45-4-4.31-6.9-4.89a23.32 23.32 0 00-8.24.06 12.15 12.15 0 00-6.63 4.26 11.68 11.68 0 00-.61-1.17 12.25 12.25 0 00-7.6-5.08 17.37 17.37 0 00-8.23.47 9.28 9.28 0 00-4.26 2.81c-.25-1.41-.48-2.78-.69-4.07-1.09-6.84-2.31-11.45-4.33-16-1.27-2.89-3.63-8.27-8.05-10.51-4.12-2.09-10.26-1-13.12 2.32-2.55 3-3.43 8.36-2.64 16a111 111 0 002.14 11.32l.82 3.43c.48 2.06.92 3.92 1.56 6.26l.39 1.37c.61 2.15.9 3.16 1.69 6.67.45 2 .85 4.14 1.21 6.19a31.61 31.61 0 00-3.78-3.93c-3.55-2.91-7.12-5.56-11.66-6a12.55 12.55 0 00-13.72 10.25 12.08 12.08 0 001.39 9c1.28 2.4 4.09 5.86 6.81 9.21 1.7 2.09 3.33 4.09 4.35 5.57 2.39 3.47 4.22 6.61 5.73 9.19a51.65 51.65 0 003.7 5.81.53.53 0 00.11.14l6.47 7.13c1.05.93 2.42 2.24 3.82 3.56 1.74 1.66 3.51 3.34 4.79 4.43 1.08.9 1.25 4.68.75 7.51a2.83 2.83 0 002.73 3.32l5.68.08c3.1.06 6.26.12 9.17.12a81.06 81.06 0 009.05-.37c4-.5 7.94-6.29 10.14-9.65.47.9 4.73 8.78 9.54 9.55 3.52.55 9.38-.17 10-.25a2.81 2.81 0 002.35-3.52 23.33 23.33 0 01-.81-6c0-.85.07-1.47.08-2a20.63 20.63 0 01.63-4.81c.5-2.41 5.16-8.66 8.48-12.55a46.91 46.91 0 005.28-11.2c1.13-4 1.79-12 1.91-13.61.22-2.87.31-5.25.31-9.22V95c0-2 0-2.55-.15-6.74-.27-7.8-5.21-9.98-7.35-10.55zm4.73 18.64c0 3.88-.09 6.21-.3 9-.23 3-.88 9.77-1.81 13a44.39 44.39 0 01-4.89 10.37s-8 9.36-8.92 13.58a30 30 0 00-.76 7.23 26.35 26.35 0 00.9 6.9s-6 .78-9.24.27c-2.93-.48-6.55-6.3-7.49-8.09a2.84 2.84 0 00-5.11-.17c-1.69 2.87-5.31 8-7.87 8.34-5 .63-15.39.23-23.52.15 0 0 1.39-7.57-1.7-10.17-2.28-1.94-6.22-5.88-8.57-7.95l-6.23-6.81c-2.13-2.69-4.71-8.19-9.31-14.87-2.61-3.77-9.08-10.88-11-14.49-1.67-3.19-1.49-4.63-1.1-7.27.71-4.7 5.53-8.37 10.68-7.87 3.89.36 7.18 2.93 10.15 5.36a48.38 48.38 0 015.32 5.9c1.22 1.47 1.52 2.08 2.82 3.82 1.73 2.3 2.27 3.44 1.61.9-.53-3.71-1.4-10.06-2.66-15.67-1-4.25-1.19-4.92-2.11-8.19-1-3.47-1.46-5.91-2.36-9.59a104.47 104.47 0 01-2.07-10.93c-.43-4.1-.65-10.78 2-13.85 2.06-2.41 6.78-3.14 9.71-1.65 3.84 1.94 6 7.51 7 9.74 1.79 4 2.9 8.62 3.87 14.69 1.23 7.72 3.49 18.44 3.57 20.7.17-2.77-.51-8.59 0-11.24a8.07 8.07 0 015-6 14.67 14.67 0 016.8-.39 9.48 9.48 0 015.73 3.74c2.72 4.67 2.77 14.23 2.88 13.72.65-2.82.53-9.21 2.13-11.87a9.36 9.36 0 015.15-3.59 20.82 20.82 0 017.22-.06c1.86.37 4.39 2.59 5.07 3.65 1.63 2.58 2.56 9.87 2.84 12.42.11 1.06.55-2.94 2.19-5.51 3-4.79 13.81-5.72 14.22 4.78.2 4.9.16 4.68.16 7.97z"/><path class="cls-1" d="M539.22 83.6c-1.64 2.57-2.08 6.57-2.19 5.51-.28-2.55-1.21-9.84-2.84-12.42-.68-1.06-3.21-3.28-5.07-3.65a20.82 20.82 0 00-7.22.06 9.36 9.36 0 00-5.15 3.59c-1.6 2.66-1.48 9-2.13 11.87-.11.51-.16-9-2.88-13.72A9.48 9.48 0 00506 71.1a14.67 14.67 0 00-6.87.41 8.07 8.07 0 00-5 6c-.47 2.65.21 8.47 0 11.24-.08-2.26-2.34-13-3.57-20.7-1-6.07-2.08-10.69-3.87-14.69-1-2.23-3.17-7.8-7-9.74-2.93-1.49-7.65-.76-9.71 1.65-2.63 3.07-2.41 9.75-2 13.85A104.47 104.47 0 00470.12 70c.9 3.68 1.4 6.12 2.36 9.59.92 3.27 1.15 3.94 2.11 8.19 1.26 5.61 2.13 12 2.66 15.67.66 2.54.12 1.4-1.61-.9-1.3-1.74-1.6-2.35-2.82-3.82a48.38 48.38 0 00-5.32-5.9c-3-2.43-6.26-5-10.15-5.36-5.15-.5-10 3.17-10.68 7.87-.39 2.64-.57 4.08 1.1 7.27 1.92 3.61 8.39 10.72 11 14.49 4.6 6.68 7.18 12.18 9.31 14.87l6.23 6.89c2.35 2.07 6.29 6 8.57 7.95 3.09 2.6 1.7 10.17 1.7 10.17 8.13.08 18.51.48 23.52-.15 2.56-.32 6.18-5.47 7.87-8.34a2.84 2.84 0 015.11.17c.94 1.79 4.56 7.61 7.49 8.09 3.24.51 9.24-.27 9.24-.27a26.35 26.35 0 01-.9-6.9 30 30 0 01.76-7.23c.88-4.22 8.92-13.58 8.92-13.58a44.39 44.39 0 004.89-10.37c.93-3.28 1.58-10 1.81-13 .21-2.8.3-5.13.3-9 0-3.29 0-3.07-.15-8-.44-10.52-11.18-9.59-14.22-4.8zM550.78 95v1.34c0 3.79-.08 6.06-.29 8.8a83.33 83.33 0 01-1.71 12.48 42.86 42.86 0 01-4.32 9.32c-1.42 1.65-8.56 10.14-9.54 14.83a25.32 25.32 0 00-.75 5.83l-.07 1.82a21.46 21.46 0 00.32 4.57 26.77 26.77 0 01-5.39 0c-1.1-.25-3.91-3.65-5.46-6.62a5.62 5.62 0 00-4.89-3.19 6.19 6.19 0 00-5.13 2.89c-2.21 3.77-4.86 6.71-5.8 7-3.69.46-10.66.34-17.42.21h-2.63c.13-3-.27-7.25-3-9.56-1.21-1-2.9-2.62-4.55-4.2-1.45-1.38-2.89-2.74-3.75-3.48l-6.18-6.83a53.46 53.46 0 01-3.19-5.09c-1.56-2.69-3.47-5.95-5.95-9.55-1.09-1.57-2.81-3.7-4.62-5.93a71.54 71.54 0 01-6.2-8.28c-1.28-2.43-1.17-3.15-.81-5.54.5-3.27 4.1-5.82 7.64-5.5 3 .29 5.66 2.32 8.63 4.74a38.15 38.15 0 014.28 4.61l.71.87c.67.81 1 1.33 1.48 2l2.1 2.89c.83 1.15 2.22 3.1 4.44 2s1.62-3.41 1.35-4.37l-.11-.74c-.55-3.89-1.39-9.79-2.59-15.15-.83-3.67-1.13-4.73-1.76-7l-.38-1.36c-.62-2.23-1.05-4-1.52-6l-.82-3.47a103.63 103.63 0 01-2-10.56c-.59-5.69-.1-10.08 1.32-11.74 1.18-1.38 4.48-1.9 6.31-1 2.63 1.32 4.53 5.66 5.72 8.37 1.55 3.47 2.64 7.66 3.65 14 .55 3.41 1.29 7.4 2 11 .72 3.89 1.54 8.3 1.57 9.36a2.83 2.83 0 002.77 2.72c1.21.21 2.75-1.14 2.85-2.63.08-1.23 0-3-.08-4.92a36.93 36.93 0 010-6 5.36 5.36 0 013-3.76 11.92 11.92 0 015.5-.36 6.86 6.86 0 013.88 2.4c1.22 2.11 2 6.06 2.42 11.74.05.79.21 3.21 2.67 3.39a2.88 2.88 0 003-2.2 38.7 38.7 0 00.56-4.29c.21-2.22.53-5.57 1.24-6.75a6.81 6.81 0 013.23-2.27 17.59 17.59 0 016.17-.07 8.26 8.26 0 013.26 2.4c.86 1.36 1.83 5.87 2.41 11.21a3 3 0 002.64 2.68c2.45.18 3-2.09 3.21-3a15.85 15.85 0 011.51-4 5.65 5.65 0 015.8-2c2.54.68 3.16 3.29 3.25 5.36.03 4.12.03 4.58.02 6.58z"/><path class="cls-1" d="M529.77 105.91a2.81 2.81 0 00-2.81 2.81v25.91a2.81 2.81 0 005.62 0v-25.91a2.81 2.81 0 00-2.81-2.81zM514.55 105.89a2.81 2.81 0 00-2.8 2.83l.12 26a2.81 2.81 0 105.62 0l-.12-26a2.81 2.81 0 00-2.82-2.83zM499.71 106.13a2.8 2.8 0 00-2.8 2.82l.16 25.67a2.82 2.82 0 002.81 2.8 2.81 2.81 0 002.79-2.83l-.16-25.67a2.8 2.8 0 00-2.8-2.79z"/><path id="Path" d="M73.38 302.77c-.74-2.84-1.49-6.42-3.08-11.76-1.26-4.22-2.59-6.51-3.56-9.35-1.18-3.45-2.3-5.46-3.76-9a93.88 93.88 0 01-3.47-10.92 10.82 10.82 0 011.85-9.14c1.92-2.57 7.3-3.71 10.29-2.66 2.81 1 5.64 3.88 6.95 6 2.18 3.49 2.7 4.79 5.43 11.69a82.09 82.09 0 014.63 16.92l.65 3.42c0-.3-.33-8.5-.34-8.81-.26-7.8-.45-13.82-.28-22.28 0-.95.48-4.45.63-5.42.59-3.79 2.32-6.06 5.1-7.42a13 13 0 0110.63-.13c3.2 1.31 4.74 4.17 5.2 7.75.11.83.72 7.48.71 8.39-.1 7.77 0 12.44.11 16.48 0 1.75 0 12.32.13 11.14.46-5 .71-24.18 2.61-29.89a11.32 11.32 0 016-7c3.27-1.54 8.44-.53 10.64 1.84a14.09 14.09 0 013.66 8.75c.24 3.07-.15 6.8-.16 9.43 0 6.58-.15 10-.28 16.08 0 .29-.11 2.26.18 1.38.71-2.12 1.42-4.11 2-5.65.38-.94 1.83-4.65 2.73-6.51a49.38 49.38 0 013.14-5.21 10.5 10.5 0 015.07-4.26c4.09-1.78 8.4.85 9.86 4.48.65 1.63.07 5.41-.21 8.38A71.52 71.52 0 01153.8 292c-1 3.39-2.08 9.37-2.58 12.14-.54 3-1.77 10.48-2.72 13.8a44.74 44.74 0 01-4.94 10.49s-8.15 9.48-9 13.74a30.91 30.91 0 00-.77 7.31 26.21 26.21 0 00.92 7s-6.08.79-9.35.26c-3-.47-6.64-6.38-7.58-8.17a2.88 2.88 0 00-5.17-.18c-1.71 2.9-5.38 8.11-8 8.44-5.07.64-15.57.23-23.8.15 0 0 1.4-7.66-1.72-10.29-2.31-2-6.29-5.95-8.67-8l-6.31-7c-2.15-2.73-4.77-8.29-9.42-15.05-2.64-3.82-7.79-8.23-9.74-12-1.69-3.22-2.51-7.23-1.44-10.05 1.71-4.5 5.12-6.8 10.33-6.3a15.31 15.31 0 019.38 4.07A55.4 55.4 0 0168.9 298c1.24 1.48 1.54 2.09 2.86 3.86 1.74 2.32 2.29 3.48 1.62.91" fill="none"/><path class="cls-1" d="M95.85 360c-2.86 0-6-.05-9-.11l-6.06-.09a2.83 2.83 0 01-2.79-3.37c.51-2.86.33-6.7-.76-7.61-1.31-1.12-3.07-2.79-4.78-4.41-1.41-1.34-2.87-2.73-3.94-3.66-.08-.08-.16-.15-.23-.23l-6.31-7-.12-.14a55.81 55.81 0 01-3.74-5.89c-1.51-2.59-3.39-5.82-5.79-9.31a51.44 51.44 0 00-4.13-4.87 38.85 38.85 0 01-5.79-7.4c-1.76-3.35-3.1-8.36-1.57-12.37 2.21-5.84 6.92-8.72 13.25-8.12a18.09 18.09 0 0110.95 4.73c.84.71 1.83 1.62 2.8 2.57l-.27-.91a51.43 51.43 0 00-2.15-5.75c-.49-1.16-1-2.26-1.38-3.49-.72-2.1-1.42-3.65-2.22-5.43-.46-1-.95-2.09-1.47-3.34a93.79 93.79 0 01-3.61-11.36A13.69 13.69 0 0159.09 251c2.79-3.75 9.56-5 13.51-3.64 3.47 1.22 6.8 4.56 8.41 7.15a49.6 49.6 0 014.77 9.9c0-2.34 0-4.81.06-7.51 0-1.24.56-5.08.67-5.81.72-4.58 2.9-7.7 6.67-9.54a15.77 15.77 0 0113-.19c2.71 1.11 6.12 3.75 6.93 10 0 .16.08.66.14 1.36a13.64 13.64 0 015.41-4.49c4.31-2 10.82-.87 13.93 2.48a16.77 16.77 0 014.41 10.41 54.75 54.75 0 010 6.66c0 1.1-.1 2.14-.1 3v2.6c.5-.88 1-1.69 1.7-2.74l.85-1.32a13.32 13.32 0 016.3-5.31 9.72 9.72 0 017.63-.07 11.24 11.24 0 016 6.09c.74 1.86.54 4.41.14 8.09-.06.55-.11 1.09-.16 1.61a72.66 72.66 0 01-2.7 12.76l-.07.25c-.46 1.6-1.27 5-2.51 11.86-.11.58-.24 1.32-.39 2.17-.63 3.61-1.59 9.08-2.4 11.9a46.77 46.77 0 01-5.4 11.33 1.3 1.3 0 01-.18.23c-3.18 3.71-7.89 10-8.41 12.47a21.19 21.19 0 00-.63 4.85c0 .55 0 1.19-.08 2.05a23 23 0 00.82 6.07A2.82 2.82 0 01137 358a2.86 2.86 0 01-2 1.25c-.67.09-6.6.82-10.18.24-4.83-.76-9.16-8.74-9.64-9.65a.64.64 0 00-.1-.16.29.29 0 00-.11.11c-1.62 2.77-5.87 9.28-10.06 9.81a79.54 79.54 0 01-9.06.4zM84 354.14l3 .05c6.71.12 13.63.24 17.3-.22 1-.28 3.64-3.25 5.87-7.06a5.9 5.9 0 015.2-2.94 5.71 5.71 0 014.94 3.24c1.58 3 4.42 6.43 5.52 6.68a27.35 27.35 0 005.46 0 21.48 21.48 0 01-.31-4.65c0-.77.05-1.33.06-1.83a26.57 26.57 0 01.76-5.89c1-4.64 7.91-13 9.56-14.89a43 43 0 004.47-9.54c.72-2.54 1.65-7.83 2.26-11.33.16-.86.29-1.62.39-2.2 1-5.71 1.92-9.89 2.65-12.41l.07-.25a68.47 68.47 0 002.5-11.73c.05-.54.11-1.1.17-1.68.17-1.6.49-4.59.23-5.38a5.52 5.52 0 00-2.91-2.93 4 4 0 00-3.18 0 7.66 7.66 0 00-3.8 3.18l-.87 1.34a30.71 30.71 0 00-2.12 3.59c-.55 1.14-1.49 3.38-2.63 6.3-.59 1.55-1.29 3.51-2 5.52a2.9 2.9 0 01-3.32 2.11c-2.54-.45-2.44-3-2.39-4.36v-.11c0-1.81.08-3.41.12-4.92.09-3.51.16-6.53.16-11.09 0-1 .06-2.1.11-3.27a51.43 51.43 0 000-5.94 11.09 11.09 0 00-2.89-7c-1.33-1.43-5.13-2.27-7.36-1.22a8.56 8.56 0 00-4.53 5.37c-1.25 3.76-1.78 15.39-2.1 22.34-.13 3.06-.24 5.47-.38 6.91a3 3 0 01-3 2.67c-2.73-.12-2.75-2.43-2.78-5.37v-5.07-5.73c-.07-3.54-.16-7.94-.07-14.41 0-.78-.56-7.05-.69-8-.49-3.84-2.21-5-3.46-5.48a10.08 10.08 0 00-8.3.06c-2.06 1-3.11 2.58-3.54 5.3-.18 1.17-.59 4.36-.6 5-.17 8.67 0 14.91.29 22.14 0 .2.08 2.17.15 4.2.09 2.21.18 4.48.18 4.63a2.85 2.85 0 01-5.64.6l-.64-3.43v-.1a79.68 79.68 0 00-4.46-16.29c-2.66-6.72-3.14-7.93-5.2-11.23a13.15 13.15 0 00-5.48-4.8c-2-.7-6 .26-7.07 1.68a8 8 0 00-1.36 6.79 89.82 89.82 0 003.26 10.51c.5 1.21 1 2.23 1.41 3.2a62.87 62.87 0 012.42 5.95c.35 1 .78 2 1.23 3.1a57.12 57.12 0 012.34 6.34c1.13 3.83 1.85 6.78 2.43 9.15.24 1 .45 1.88.67 2.72.34 1.28 1 3.68-1.3 4.74s-3.6-.83-4.5-2.08c-.24-.33-.52-.72-.85-1.16-.53-.72-.91-1.25-1.24-1.73-.49-.69-.84-1.2-1.52-2a54.77 54.77 0 00-5.34-5.32 12.54 12.54 0 00-7.82-3.41c-3.8-.36-6.09 1-7.4 4.48-.68 1.79-.14 5 1.3 7.72a36 36 0 004.95 6.19A55.86 55.86 0 0157 315c2.52 3.67 4.46 7 6 9.67a56.14 56.14 0 003.24 5.17l6.13 6.78c1.12 1 2.51 2.32 4 3.71 1.65 1.56 3.35 3.18 4.54 4.19 2.78 2.29 3.17 6.56 3.09 9.62zm47.21-66.8z"/><path class="cls-1" d="M126.53 337.16a2.85 2.85 0 01-2.84-2.85v-26.22a2.84 2.84 0 015.68 0v26.22a2.85 2.85 0 01-2.84 2.85zM111.25 337.24a2.84 2.84 0 01-2.85-2.83l-.12-26.32a2.85 2.85 0 012.83-2.86 2.84 2.84 0 012.84 2.83l.12 26.33a2.83 2.83 0 01-2.83 2.85zM96.27 337.13a2.84 2.84 0 01-2.84-2.83l-.16-26a2.85 2.85 0 012.83-2.86 2.84 2.84 0 012.9 2.85l.16 26a2.85 2.85 0 01-2.83 2.86zM319.78 151.92a35.23 35.23 0 01-8.23-3.48 24.84 24.84 0 01-7.86-8.55v-32.51h7.5V100h-7.5V60.21c1.07-2.56 5.37-7.25 7.92-8.65a36 36 0 018.23-3.49c2.27-.58 7.5-.65 10.25-.53l.28-7.5c-.84 0-8.32-.26-12.37.76a43 43 0 00-10 4.2 29.94 29.94 0 00-7.93 7.23 36.35 36.35 0 00-7.66-7.31 37.11 37.11 0 00-10.25-4.11c-4.08-1-11.64-.79-12.5-.76l.27 7.5c2.81-.12 8.1 0 10.42.54a29.7 29.7 0 018.16 3.23c2.05 1.26 6.84 6.24 7.77 8.75V100h-7.61v7.38h7.61V140h-.05c-.93 2.51-5.72 7.48-7.76 8.72a29 29 0 01-8.18 3.26c-2.31.58-7.6.64-10.41.53l-.28 7.5h2.9a45 45 0 009.6-.8 36.76 36.76 0 0010.27-4.12 35.12 35.12 0 007.6-7.34 29.71 29.71 0 007.95 7.27 42.14 42.14 0 0010 4.18 44.37 44.37 0 009.52.81h2.85l-.28-7.5c-2.74.06-8.01 0-10.23-.59z"/></svg>

These [user-facing state](https://css-tricks.com/user-facing-state/) changes are a regular part of using your Operating System (<abbr>OS</abbr>), and provide a vital clue for how a piece of OS interface, or an app running in the OS can be interacted with.

The web being able to borrow these OS-level affordances is huge, in that it helps people understand how a piece of web UI can be used, even though it may not look like its OS equivalent.

## What a custom cursor is

A custom cursor is when you [use CSS’ URL function to load a custom cursor image](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#url). The browser will then load the cursor image and apply it in place of your OS cursor any place the cursor is declared.

<style>
  .cursor-test,
  .cursor-test-instructions {
    display: none;
  }
  @media (pointer: fine) {
    .cursor-test {
      border: var(--border-radius-medium) dashed #faafe1;
      cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAYAAABqbKGZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyQjk3QzAzQjA3MDExRUI5RDI3QTJBOTkzRUY1NEQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyQjk3QzA0QjA3MDExRUI5RDI3QTJBOTkzRUY1NEQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjJCOTdDMDFCMDcwMTFFQjlEMjdBMkE5OTNFRjU0RDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjJCOTdDMDJCMDcwMTFFQjlEMjdBMkE5OTNFRjU0RDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5osV40AAANkklEQVR42tSaCXgUVbaAT3X1lt73ztp0B8k2KiEBUcOooLigIYCAAZ+DsmiIyIAYGEBQnt/3Rgd4ysyTRQdHRwVmxM8XB2UQHwExIAomgQkxQICJyJrYSXcn6bXOO7c6CWAWlnwiuV9uKqm6Xff8dZZ7zq2GefPmFeh0ugp2RETozR0YCACgWq2ufO6552b0ahgGMWjgIBw0cGCvB2qFGYisDcrO7tVAUZjsKIwIlNV7gaIwBCAEIygEwig0h3Bg/6xeCRSFGZCFgi+AQqMfBXcLRuqaMPvGzF4HJMIwTUTONWH4tBfDJz0YqW3A8DE3Zqf371VAEmBNEACbQwDU0RcCoYmO1L/asAXS4pMzVq1aNb2oqGgGXOdNhMEIiMJjUzgKJEIFxb7rz/+ANJuzVwC1awYYjC8A6KXuCYp/C+L/QSh97UNIMzuue6BWGIwKzkysVSMCQYAnJMIJngDsfHEdpBqSrmugKEwEo0J7/a2aCbRDMC1B6/9fPPsWpGrir1ug8wGANCGaF+sMysO0w4D81IMiINBxx9Q1kBoTd10CtZsZNrZqxBO4QPgoQFRTQRGM/V0ybgWkKmKvO6BoNCP/F7znYdpMjZmZeL7N5LzB9uvb7n0FUqT2awp08OBBlclkKruEzwhR4duEbtUSiOeC50G85yOcCHTrEkiR2K4IaM/ur+K3/POfaVcDk5GR0ezz+TRvv/32Xd1Hs1ZnjwaCtt7m/OdNTexi2I4urp//aiGkgDVj2bJlcwoLC+d2Jcj8+QsKeF5a88D9eZsnTpiyXqs1Hhgy5M73rwTm22+/NXEcJ2zatCm3s+tS8TdLB5jgYaG9I/VhOxbQNXFA9AejYy881/43gJNpaOXKlX/46SSzZs2e9Ze/vPsEz3HJORI9WDg5fM4Fofrg4XBCgqP0hx9qcy4cP2XKtMU7duy4s6bmcDI9AMFisdWdPv3D4DVr1hRIeD7l66+/vqVrGBYAmFkxCArT7Hj3nsVQ1nD0+JU8uenTp6/q7PyKFa/9ViFTOI/a8kEVwuhJHuBJviLzy5Bn75CcO95/feWfnp41a86re/bsuTUmxtQskUSy1GotNDX5KNjKfrRa7d889NCIT3mjDU6ePBFfUlKSPHTo0KMXzsOxRDJVGZvxefaLpA0Ejvzn7vL/hEPhM0y4Z5YuXfo/PXHa++9/cM233+wfmC+PzXoxnNrheh7ugn8F/cDxEZDwMdDQcAI2bNgACQkJ4HK5IDY2FkaOHAWlpfsgEvFC4+ARwJ08BjfzLR+Xl5fndeozQD4ATQECWdIGAn5/QKnR6CqVSlW1VCqrcbluKJkw4dHfV1dXKy8FcfToUfHeW7duucff7M56MXKxzx8MNwAVHfCykAFSIQAyqQwefPAuaGlpgbFjx8Jtt90mgrBWVDSHZGmExhg9wITZgDNegX/9+8SNL7300m8uuinTzABDMtb1X40DdC6W8iOl/Dh79mw0GuPRak2kcxrUavVoMsVST0S93lzB83zNiBG5r+/cuTOR7NvxxBOTF/fvn1VM8AdkMvlh5uByuaLaYkwom2S+Eestj4r9WfWNqJbI0awwIM9JME1pRYvchGa9A83mWLq3Abdv345lZWW4bds2PHfuHP7HxIkItiSEEb9BKPFG+x15KDWYD//3h5+MaSsBRDNL4W0ZzIcPCWcPMrtnpqXXG1Gp1EBBwWSYOXMmBAIBstWTsHbtW7Bly2fg8zVDKCQHjhw5mkTIQC5HGueja41gs9khTGYrCXHwBvcr+LXULo5Lcn8AKpkZFEITBCVKaPTTZ7k6uNWaDKf4ILhbwiCVS+l+YeBQAr6memjRmuip6wBe/RTAYIlqofYQwB+mg10h/br0s09z+pr14U63mtgemtmciIMH34pdNQqTOHr0wwSsJG2Zcdy4R/B3v5uP33//PQaDQXEMRSHUKNVYZX5Y1MrnhvvRojChVabBdbq70K6KxZtUdjxpnhDVnP0xLLBlYZzFhVatHTc6cvFOZTyCKwPhzdLzWmnt3ORFKO13Mz742OTXxUqzs03AAQOyPzKZXEgawZ40MkUkX8AT1nxR2DOWiSjhODTKdKjllWiUa3GvcWS7Cbb1lBgrmglCR2MkOhNC0esdQMT+QTVCv0w0OZL3fffdd0rJyy+/vLqxsbE/O7b5kdfr1fB8mPxJ06P0Iz4+EZQyMiUIt64DHEzVZEAYwxACPTQEfeDgO85hF+RUfYTBJ1D2kT4Q4N78ziewxAMMGgZosmWtX78+X9LZmHA4LI1EKFRKuB7B3HPP3RCj1sNyyZH2c79XZEKp7j5IVETAEmOC/eEfO3zu39BM/tIAKr0VYM4f6SnIu57k3gngPXMKSsv250g7u24wGBt8vjoG1SOYt95aS0FBDpu0AtTK/JDml0GAHtLuSD2cC/uhKaKBvHAJbNfcB8m8VvzMbP8+8MtUEAp6IHwHZS3WhO4n6ZMGkYS+cOhITUqnmunX74Yjfj/CqVOne5zpzp8/n5YvD5SHvbBR3gDFUjecVfLQJPghPc0GCtLc8MAX4GjYCNb69fCxvx68/jpAXgI4+fnLm+T2B8Dt9Zk6hUlJ6VetVAp7P/lkM5ATiwJdbVuyZAmFai98sPE92PD3v8KGD9+DDz5aB146t7+yAgoKp4JEwQMfowZVjAakGgXI5Aowam0AOtNlzYFxLvJBiZQTQ1onLTY2fs+ZM8pbDAYPrTNPi0L9nK2mpgYUCgWta4Ww9f92QthkAuH9isv7cNkXIHvlqSOSrq6np6cf1Ggi5MTDfnYQ1vr27QuJiYmwadPHYDSqohXj5TbyK2zyQJcwX365c4hU2gTLly+75uXvzBlPgzxMWfzZE5c1njtSztxB6BRm5szfPqtSxTWnpqaAw+G45jDJyclgs1hA8dl7l1f7b/0bmO2xdZ3CbN/+xVCZjL95yJCcX2RjYvjw4eCymSD1m38ArKTg4/mxa5DTVHLt2350SuGMtZ0GACpNj1kscc6tWz+FzMzMXwSotrYWcnNzxfTqQO1JgPseBcgZQesGySOjRbTFB5KvtoB8/XJQtnjK3ad+GNBhJ72yslKl11srJBK+PWH8pZrH48F33nkHx48fjxDXB4FKBGC5mtGGlD0jZ3dQ3i9BrdF+QEE1VwfNVFRUGIYNu88tUF7kdv943WzwPfJIPpUeJVRthqj0CNMRQSYTvktKctRSDeRxOvsc75DO8CzDFI/SX0ToY8eOieVyx6DgogpUCyZaf1hNRTk5bN5cPHTw4MHn05Sfmtn+/ft1JpMdpVIpVlVVodvtvmZmlZCQiAaDCceOHd/tOFYnGY1xuGvXrviL3pyxX1RUFeTmjvpTfHxSqUQiqdFqHVQm96Ey1o4xMSp86KHcDjc8c+YM0ljU6fSYn5/fY5CioiIS0EkS9aU51VhfX99hzIIFC3Hy5CnivAZDIk6fXjj3+ecXTb0IRq3WV+r1SSKtXm8jAZMIxkkVpAVTUtJw6tRpHW78wgsv0KfJESFJBGa1ek/anDlzaF5yckgnQc1I6U2HMU89VSDuQygUichxTFamSXsZzV9F2lwqrjPjxo3ZOHHiyHnPPDNtyrZtm80pKfEbpeQyhYXTobq6Ct58841udneVoh1bLJZufcHn83V7fdmyZfRg3ZTK+IAt1mzh/GlbvXoVPP74o6DXK2j5OHt06NBbXnM6E49bLNY6lUrV3OmLzrlz5xYaDI6ym27qj6FQqNMnuWLFClSrHWiz9cV169Z1H2LP1qNcpqCnyeHpY7Xdjr3UvXJz81CjcSDb8urwtrmrN7dqtbbSanWK9knZLC5atOiimzJIBnSpyYP+AJUmEvy+z+NYnThR3OBg/naljZn6tGlPkikamWnh7t27Y7uFWbx48eScnDveV6t1lVpt0gGADHEvKy9vNNK1q/IFoSWASqkcT1onYLV9PKoVBHP6ymFYoCFrQZ7PJt9OwszM7I/mz1/wZJcwc+fOK6SVv0YqlR0eNWrMq0qlqio21klRZMHVe3ZEQE9JOUo5HpU8QW3be1W3KS4uJpN2EVRChVKprjKbE/eZTAn72JuFwsKn53ZrZm2+YzQmlOl0Bhwz5mHyES0OGJB9FeoRsKXBg4L/6tKjlpYW7Ncvhda+hMNMI0y22bOfnely9S1heSR78JeEYT07e/CHADeQ8/ahJ9MHJ02adE3zsxkznhG3h9XqPpVxcYm7u/26SXcXGTHTDLNRkyme/MdFq3RSh2DwcySYDEImk4sLqUwWd9jhcO245HdnurrAtmoJYJ9CEVPNVMp2PFl2oFQmVNlsTnJGIz722CSWUohbsj1pDQ0NuHfvXqQ58Pbbf41yuYJSFict3AkHWDAaNmz42sv57kyXGxoLFy58srb2RNK7776z6MLz+fkTXyku/t+RSqXOz3HKTJaXhkLN4g5MenoG2O02cDqdQLkdZbUyUCrPv/2gcC5uwHMcQFNTMxw6dASOHz8GDQ1u0OlMJJAcwuFIeSDgltN9zo4ePeojKtv/eLlJapcwl2r0JC1Lly4vIs3cXld3zqJQmIKhEEd5A0cQEsq8Bcq8IczznEDCC+xVoSCAhJYnORuDyJHgIJVIBEEqDYW93node92Xl5dbvGbN6v+6Gpn+X4ABAEkuiL8oOGKeAAAAAElFTkSuQmCC), auto;
      display: block;
      height: var(--scale8);
      padding: var(--scale1) var(--scale2);
    }
    .cursor-test-instructions {
      display: block;
    }
  }
</style>
<div class="cursor-test">
  <p class="cursor-test-instructions">Hover your cursor in this area to see a custom CSS cursor example.</p>
</div>

I’m unsure if the ability to load a custom cursor is a 90s throwback, or an example of the web platform attempting to futureproof itself.

In my experience, custom cursors are declared on the `html` or `body` element, meaning the entire website or web app gets the custom cursor applied to it.

## Where you can find custom cursors

In the past, I’d see custom cursors applied to tumblr and Myspace themes, Geocities sites, and niche software.

<figure
  role="figure"
  aria-label="Shout-out to my misspent youth.">
  <img
    alt="A stylized cursor that looks like a severed, bloody hand. Above it are menu options for 'File', 'CPU', 'View', 'Settings', and 'Misc.' Screenshot."
    src="{{ '/img/posts/dont-use-custom-css-mouse-cursors/nesticle.png' | url }}" />
  <figcaption>
    Shout-out to my misspent youth.
  </figcaption>
</figure>

Nowadays I’ve been seeing them being applied to trendy luxury ecommerce sites with increasing frequency. It’s one of those things that you probably don’t really notice until you start actively looking, unless you’re affected by it.

## Why using custom cursors is a bad idea

One of the many modifications a person can make to their OS is changing the cursor. This can include increasing its size, as well as swapping it out for a more high contrast version (why high contrast isn’t the default is a separate post unto itself).

These modifications allow a user to be able to perceive, and therefore use a cursor to interact with the OS and the apps it runs.

<figure
  role="figure"
  aria-label="Windows 10.">
  <video
    controls
    loop
    aria-label="Using Windows 10's Mouse pointer Ease of Access settings to drastically increase the size of cursor and change its fill color."
    poster="{{ '/img/posts/dont-use-custom-css-mouse-cursors/poster-windows-10-mouse-pointer.png' | url }}">
    <source
      src="{{ '/img/posts/dont-use-custom-css-mouse-cursors/windows-10-mouse-pointer.mp4' | url }}"
      type="video/mp4" />
    <source
      src="{{ '/img/posts/dont-use-custom-css-mouse-cursors/windows-10-mouse-pointer.webm' | url }}"
      type="video/webm" />
      This browser does not support the <code>video</code> element.
  </video>
  <figcaption>
    Windows 10.
  </figcaption>
</figure>

When you override this intentional modification with a custom CSS cursor, you’re denying someone something they need for a core OS operating mechanism. For some, it could be irritating. For others it could mean it makes your website or web app completely unusable.

### I can’t see it

Consider someone with low vision who needs a large, high contrast cursor. Removing it to load a custom cursor in its place means the cursor might effectively disappear.

This reason alone should be a hard stop.

### I don’t know what it means

If you need another reason, consider digital literacy. [People internalize difficult-to-use or broken digital experience as their own personal failings](https://alistapart.com/article/paint-the-picture-not-the-frame/).

The cursor is a consistent experience across your entire OS, and for nearly the entire internet. Changing the cursor without notice might be just enough of a disruption that it’s the thing that makes a person abandon the experience entirely.

Abandonment stemming from something like this might seem absurd to you, but it’s a very real, very disheartening thing that [happens all the time](https://twitter.com/estellevw/status/1027305654501826560).

### I can’t load it

In addition to the issues of visibility and digital literacy, you need to download a custom cursor, as well as the CSS that loads it.

Performance and inclusion are deeply intertwined. Because of that, we should be ruthless in making our payloads as small as possible.

A custom cursor will probably be a small download, sure. But given that a custom cursor invites a huge amount of usability risk, this download is unnecessary.

## What about browser extensions and user stylesheets?

[People may be resourceful](https://ericwbailey.design/writing/truths-about-digital-accessibility/#non-technical-people-may-make-highly-technical-modifications-to-their-technology), but you shouldn't assume they’ll always be aware or motivated enough to fix the problem you created.

## So, why design anything?

Don’t be so petulant.

One of design’s primary goals is to make things usable. Choices that don’t prioritize usability mean you are practicing decoration, not design.

A considered, inclusive design enhances a digital experience for all. Custom cursors may seem like part of a considered design at first blush, but they fall apart under scrutiny.

Making the choice that something “is good enough for the majority of my users” makes sweeping assumptions about who is visiting your website or web app and why, and actively discriminates.

There are plenty of other ways to communicate the tone and mood of your website or web app’s brand, ways that do not involve indiscriminately overriding  expressed preferences. If the entire experience relies on a custom cursor, I’d say the problem lies a little deeper than surface-level aesthetics.

## What if my use case needs a custom cursor?

Everyone thinks they’re the exception to the rule.

If you absolutely must have a custom cursor, I would say this: Test extensively before committing to this path. Check if your custom cursor design works for:

- People with low vision,
- People who have a low degree of tech literacy, and
- People who may not be familiar with [the metaphor you’re using to communicate an interaction mode](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label).

Additionally, question the parameters of the use case itself. Can the interaction be broken down into more simplified pieces?

## Shouldn’t this be a browser preference?

I think so. I also think [browsers could do a lot of work in this area](https://hiddedevries.nl/en/blog/2020-03-01-more-accessible-defaults-please). Until then, it’s on us to be the responsible ones.

## You can’t know

We can’t know the circumstances a person is experiencing when they use your website or web app. Because of this, it’s on us to make sure we’re proactively accommodating the widest possible range of ways people interact with technology.

Vanity is almost always at odds with user needs. While a custom CSS cursor may seem flashy and fun, consider that it may present a significant, unnecessary barrier to access.
