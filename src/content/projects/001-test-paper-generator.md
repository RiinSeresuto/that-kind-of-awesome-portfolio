---
title: "Test Paper Generator"
slug: "test-paper-generator"
description: "A web-based test paper generator build for generating different sets of text paper from the provided test items."
image:
  {
    src: "/images/screenshots/test-paper-generator.png",
    alt: "Landing page of the test paper generator",
  }
demo: "https://swift-test.vercel.app/"
sourceCode: "https://github.com/RiinSeresuto/swift-test.git"
stacks: ["Next JS", "IndexedDB", "Bulma CSS"]
tags: ["web development", "school project"]
publishDate: 2024-07-07
---

This is an output application system I have built alongside with my thesis for my bachelor degree back in 2023. It is a simple test paper generator that utilized Next.js framework and IndexedBD for data storage.

This project is built as a response to a teachers request for a test bank that will help them generate a several set of test papers imediately.

The user must first build their test bank by inputing several test items, filing up important fields such as chapter number, type, and specification. One there are enough test items, the user can now generate test papers based on their provided specifications, number of items, and chapters. The applications then will fetch the data shuffles it and map it in a dowloadable pdf file.
