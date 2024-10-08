# Remix as the React framework of choice

Date: 08-10-2024

Status: accepted

## Context

<!-- cspell:words turbopack, vinxi, rakkas -->

I want to use `React` for this application - that's obvious. That's the best frontend framework in my opinion and I'm the most fluent with it. The documentation suggest that you should always use framework to create new applications. And in a principle I agree with this. However, there's kind of a weird moment in the framework space imho.

On one hand we've got Next.js, which in the "app router flavor" I'd still call a beta release. There're a lot of edge cases, issues, weird magic and patterns that still aren't polished. Moreover, it's tied to Vercel in an annoying fashion. A lot of stuff is undocumented and hard to deploy in a nice fashion in an environment outside (like Fly.io). Moreover, the `Webpack`/`Turbopack` is painful to work with and I much more believe in the ecosystem around `Vite`. It's also impossible (afaik) to create fully client-side navigation currently.

There's also the `Remix` which is in middle of the migration to the `React Router v7` (which is released as a prerelease at the time of writing this). This already makes some stuff funky. However, they feel the most unopinionated and flexible of all solutions. They support both SPA and SSR and they're also getting SSG support with the newest version. They let you use completely custom `http` server. They feel the least possessive React framework out of all. Their story around upgrades/new features (future/unstable flags) and support is one of the best. On the other hand due to the in-progress migration and not betting on the bleeding edge they're a little bit behind in terms of stuff like `RSC` or `React` 19 integration.

The new kid on the block - `TanStack Start` is a really interesting case. I've bet on `TanStack Router` which is used under the hood a long time ago and I still think that was a good bet. The type safety is unmatched and now that they're stable and have file-based routing (which is actually recommended and solves a lot of pain points) they look like one of the best routing solutions for SPAs. However, the e2e integration within `TanStack Start` is really early and I don't feel like it's a good bet. First and foremost they use `Vinxi` which I'm kinda against, it's a huge layer of magic and abstraction that's created by one person who kinda goes against tool authors plans (`H3`/`Nitro` doesn't like how some of the stuff is integrated in `Vinxi`). Moreover, their flavor of server actions is super weird imho. While I get that it's pretty powerful I don't think the tradeoffs are worth. They don't have a good story for CSR/SSR mixing (akin to `clientLoader`/`clientAction` in `Remix`) and many of the features can be at least partially replicated with a custom abstraction.

As you can see, each one feels like a lot of tradeoffs here and there. I've also investigated different frameworks like Rakkas, One, Redwood, but they don't fit my use case.

## Decision

Start with `Remix` but observe carefully where does it leads. I'm aware this answer is kinda lame but I think that's a bit sad reality atm. I'm really stoked about a lot of stuff that `Remix`/`React Router` folks are doing (and how) - their openness, monthly planning, vision for building upon standards, not trying to bleed to much - I really like it. However, I feel like they sometimes move too slowly for my fashion.

## Consequences

I need to observe the stuff around `React Router v7`, theoretically there's already a first prerelease version but it's not usable yet tbh. I'd like to migrate asap though. Also try to be up to date in terms of unstable/future flags inside of the framework and look forward for `RSC` stuff which could be very useful for some of the features in my application.

One of the important points is the fact that I'm not really betting too much onto framework side because of the `Replicache` real-time architecture. I don't rely on standard framework behaviors around data fetching. The `Remix` flexibility comes clutch here but I still need to remember to not stay too far from the recommended patterns for future migrations etc.
