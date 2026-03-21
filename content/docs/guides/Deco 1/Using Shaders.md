---
title: "Using Shaders"
weight: 5125
date: 2026-03-19T00:00:00.000Z
authors:
  - "poryii"
contributors:
  - "poryii"
draft: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- shaders lmfao its unfinsihed dont bully

{{< /callout >}}

** **

Shaders are powerful visual tools that allow many creators to change how the entire screen looks or feels during the level. Instead of simply decorating to make the level visually appealing, shaders let you apply many different effects, such as:
- Glitchy effects
- Pixelation effects
- Blur
- Lens circles

These help create a more emmersive feeling to your level. However, using shaders effectively requires practice, planning, and a clear understanding on how they work. This guide explains how to use shaders properly, especially for people who want to improve the level design and atmosphere of their level.


# 1: When to Use a Shader
Shaders are usually best added after your level's main decoration and layout is finished, since they work as a "final layer" that enhances what you've already built, rather than interfering with it. However, this doesn't mean that you should ignore them until the very end.

In most cases, you probably already have an idea on what kind of effects or shaders you want to add when you're decorating, especially if certain effects (like chromatic glitch and lens circle) will influence how your visuals will look. Some techniques, (which we will get into later) such as shader masks or more complex effects, actually require you to start using shaders early so you can build your deco around it.

Because of this, shaders should be treated as something you keep in mind throughout the entire creation process of your level. The more you think that shaders are important to your level's concept and theme, the earlier they should be introduced. If they're only there for small visual improvements, it's totally fine to add them in later. At the same time, adding shaders to your level is your own choice, and forcing them into a level where you think it may not fit can make the level worse instead of better, so it is important to remember to use them only when they serve a clear purpose.

{{< callout context="caution" title="Ask yourself these 3 questions:" icon="outline/info-circle" >}}


- Does the shader effect match the theme/mood of the music?
- Does it improve the quality of the theme/mood?
- Is it making the player's experience better and more immersive?

{{< /callout >}}


If the answer is no, it's probably better to leave the shader out. Using shaders does not mean adding as many effects as possible. It's more about using them at the right time to enhance the overall feel and atmosphere of your level, without distracting them from the gameplay.

One of the most important moments to use shaders is during key parts of the level, such as beat drops, exaggerated beats, transitions, high-intensity sections, or just anywhere you feel like it belongs. For example, you might use a shader when there's a shift in the song, which helps emphasize the structure and feeling of the level. Using shaders like this helps emphasize the structure of the level and keeps the player engaged.

Shaders are also very useful when you want to establish or change the atmosphere of your level. If your level has many speed changes or if the song has a major change, shaders can help you communicate that into your level. If your level has different sections because of the song changes, (like calm -> intense -> calm.) shaders can help you implement that.

However, creators should be careful with their shader usage. Keeping effects active at all times can overwhelm the player and make the level hard to read and understand. (Not to mention the lag) Instead, it's better to use shaders in short, controlled moments that show a clear impact in the level. This will also prevent performance issues that may occur.


## Understanding What Shaders do
Shaders can enhance the visuals and overall feeling of the level in real-time. This means that they can influence the brightness, colour, and distortion of what the player sees. At their core, shaders act like filters layerered on your level.

It is important to realize that shaders do not change the actual gameplay; they only affect the visuals and how the level looks. However, shaders can strongly influence how the player experiences the level. Due to the fact that shaders affect the whole screen, they must be used carefully. Even a small change in your shader trigger settings can have a big impact on the player's visibility. For this reason, you should think of shaders as a tool for enhancing your level, and not overusing them and abusing them.

# 2: How to Use Shaders
Learning what the different shader triggers do and can be found in Screen Filters in the Basic Triggers Section. We have a full guide on how to use and set up each shader trigger. If you don't know how to use one of them, you can read the guide [here](https://www.gdcreatorschool.com/docs/guides/triggers-1/screen-filters/).

We won't go too in-depth as we already have a guide on how to use them, but here's how it works.

1. Place any shader trigger, (like sepia, bulge, shockwave, etc.) found in the triggers tab (you may need to scroll a bit)

None

2. Press "Edit Object"

None

3. Change the Trigger however you like! You can also use the shader trigger (the trigger literally called shader, not to be confused with the other shader triggers.) to change what Z Layers the shader will affect!

# 3. Scenarios & Techniques Involving Shaders