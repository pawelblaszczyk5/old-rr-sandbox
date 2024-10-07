# Using `Replicache` to provide the best possible UX

Date: 07-10-2024

Status: accepted

## Context

I want one of the "selling points" of this app to be the user experience. Often what makes application painful to use are loading screens, pending states, data loading etc. Using architecture where most of the data is available right there on user's device removes many of these pain points. To add to this, syncing it in real time makes the experience mind-blowing Moreover, while it forces you to create complicated sync layer - it simplifies a lot of frontend code, you don't need to handle many stuff that you had to do before so the UI/UX is at least nice.

`Replicache` is one of the solutions to create such experiences. What differs it from others is fact that's not too opinionated around other tech stack pieces you're using. You just need to have database that provides some level of strict transactions, then you create 2-3 endpoint and voila, you have full sync in your application. It's also often used by many folks that I follow and look upon (Dax). I experimented with it a little and found it really easy to work with. Moreover, their `Discord` is really helpful and I often get answers from the authors themselves.

Besides it I research other solutions, such as (only few examples which differ a lot from each other):

<!-- cspell:words evolu, automerge, crdt -->

- `Evolu`, which focuses on privacy and decentralization - it doesn't excel in use cases where you still want the server authority
- `ElectricSQL` - forces you to use Postgres and works more as a layer between your database and client (which I'm not fond of)
- `Automerge` - it uses CRDT approach which forces you to model your data a bit differently

Besides the UX and code concerns I also want to learn something new. Local-first/real-time syncing is one of the things that always interested me and I think that application is one of the best use cases for it.

## Decision

Use `Replicache` as a sync engine and focus on providing the best possible UX. `Replicache` architecture speaks to me the most, the server-authoritative, branching mechanism feels really powerful. I can create excellent offline/low-network (my goal isn't to support full offline mode, it's more of a side-effect here) experience, while still benefitting from the custom server on the backend.

`Replicache` feels like the most flexible solution which doesn't force me into stuff I wouldn't otherwise do - e.g. structuring auth as row security. It hits the sweet spot of good level of abstraction for me.

## Consequences

`Replicache` folks are working on a new engine called `Zero`. It's more similar to the `ElectricSQL` approach than to the current architecture. I need to carefully watch this space. I'm not worried too much, because this library is in a kind of stable spot and they still intend to provide some sort of support. Moreover, they'll be finally open-sourcing it which also provides a chance to learn something from the insides.

Some kinds of experience that I intend to build (e.g. AI support) won't work without network. While it may be daunting that part of app works without network and the other part doesn't I still see its huge value. There'll be some rough edges when these operations mangle together but I'll just need to figure out the best approach for it.
