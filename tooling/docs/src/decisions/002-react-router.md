# React Router as the React framework of choice

Date: 10-12-2024

Status: accepted

## Context

<!-- cspell:words turbopack, vinxi, rakkas -->

I want to use `React` for this application - that's obvious. That's the best frontend framework in my opinion and I'm the most fluent with it. The documentation suggest that you should always use framework to create new applications. And in a principle I agree with this. However, there's kind of a weird moment in the framework space imho.

On one hand we've got `Next.js`, which in the "app router flavor" I'd still call a beta release. There're a lot of edge cases, issues, weird magic and patterns that still aren't polished. Moreover, it's tied to Vercel in an annoying fashion. A lot of stuff is undocumented and hard to deploy in a nice fashion in an environment outside (like Fly.io). Moreover, the `Webpack`/`Turbopack` is painful to work with and I much more believe in the ecosystem around `Vite`. That's a hard pill to swallow for me, every single time when I use it I fall in love with RSC even deeper, on the other hand every single time I get to hate everything around `Next.js` even more.

There's also the `React Router` just finished its migration. This already makes some stuff funky, not everything works perfectly yet and even when released as a stable version - it's not fully stable yet. However, they feel the most unopinionated and flexible of all solutions. They support both SPA and SSR and now they also have SSG solution built-in. They let you use completely custom `http` server. They feel the least possessive React framework out of all. Their story around upgrades/new features (future/unstable flags) and support is one of the best. On the other hand due to the in-progress migration and not betting on the bleeding edge they're a little bit behind in terms of stuff like `RSC` or `React` 19 integration. That makes some stuff hard, because I'm basically forced to write stuff that'll need to migrate to different API later on. It's even more frustrating, because the `RSC` APIs are so damn nice as mentioned before. It seems like it'll finally happen in upcoming months though.

The new kid on the block - `TanStack Start` is a really interesting case. I've bet on `TanStack Router` which is used under the hood a long time ago and I still think that was a good bet. The type safety is unmatched and now that they're stable and have file-based routing (which is actually recommended and solves a lot of pain points) they look like one of the best routing solutions for SPAs. However, the e2e integration within `TanStack Start` is really early and I don't feel like it's a good bet. First and foremost they use `Vinxi` which I'm kinda against, it's a huge layer of magic and abstraction that's created by one person who kinda goes against tool authors plans (`H3`/`Nitro` doesn't like how some of the stuff is integrated in `Vinxi`). Moreover, their flavor of server actions is super weird imho. While I get that it's pretty powerful I don't think the tradeoffs are worth. They don't have a good story for CSR/SSR mixing (akin to `clientLoader`/`clientAction` in `React Router`) and many of their features can be at least partially replicated with a custom abstraction.

As you can see, each one feels like a lot of tradeoffs here and there. I've also investigated different frameworks like Rakkas, One, Redwood, but they don't fit my use case.

## Decision

Start with `React Router` but observe carefully where does it leads. I'm aware this answer is kinda lame but I think that's a bit sad reality atm. I'm really stoked about a lot of stuff folks behind it are doing (and how) - their openness, regular planning stream, vision for building upon standards, not trying to bleed too much - I really like it. However, I feel like they sometimes move too slowly for my fashion. But maybe that'll teach me something 😅

## Consequences

I need to observe the stuff around `React Router`. I'd like to migrate to `RSC` powered APIs asap - I deeply love it. I think that's really good abstraction for building an application and it enables so many cool patterns. I'm also really curious about the flavor of it that `React Router` will land upon.

As mentioned earlier - one of the important consequences is that I need to decide upon using some API for now with a full knowledge of the need of migration when `RSC` comes out. I considered both - leaning more into `React` 19 patterns and more into `React Router` patterns. I decided that it'll be easier to lean into the latter for now - the current API has some limitations (e.g. actions doesn't return data, you need to access it via hook) which would make it hard. But I'll use these in a manner that'll make the migration easier (e.g. JSON submissions).
