---
name: tonerprint-design
description: Use this skill to generate well-branded interfaces and assets for TonerPrint, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Two things specific to TonerPrint:

1. **Class names come from BS Shop and are binding.** `ProductView`, `dc-con.dcPrice`,
   `cs_zelena`, `bs-priceLayout` and friends are generated server-side. Never rename
   them, never add BEM or utility prefixes. The visual layer is free; the structure is not.
2. **Copy is Czech and written plainly.** Formal address (vykání), concrete numbers
   instead of adjectives, no exclamation marks, no emoji. Czech typographic conventions:
   space as thousands separator, decimal comma, currency after the number.
