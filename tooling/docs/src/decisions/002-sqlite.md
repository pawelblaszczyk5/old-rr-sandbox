# Use `SQLite` as a database

Date: 07-10-2024

Status: accepted

## Context

I need some storage for this app. Previously I often opted into using `SQLite` for database due to its ease of setup. You can easily start without any additional steps, you don't need any kind of `Docker` or other ways of local environment setup. It also makes the testing a lot easier, because you can spin database for specific test suite and fill it with needed data.

On the other hand, the needs of this app are much bigger than my usual small side-project applications. I want to store a lot of transactions in the database and use it as a kind of event sourcing. Moreover there could be a lot of operations on time-series data. Because of all of that I did some research around `TimescaleDB` which is specialized database for time-series stuff. It's packaged as a `PostgreSQL` extension and provides a lot of stuff specifically for applications like mine - some special kinds of averages, time aggregations, filling-in time-series data. Also, I'm going to use [`Replicache`](./001-replicache.md) there'll be a lot of transactions related stuff going on, which work much better in traditional database.

However, after diving a bit into `TimescaleDB` I realized that due to my local-first data architecture most of these operations that `TimescaleDB` makes much easier will be performed locally on end-user device. Only in the future, when I need some more optimized data flow and/or more advanced data manipulations on backend this could pay off.

## Decision

Use `SQLite` as a database. It's easy, it's fast, it's forgiving (I'm bad at writing optimized `SQL`). Moreover, the ease of setup will simplify a lot in the short term. In the future if/when I need more advanced data flows on backend I could consider migration to `PostgreSQL` and `TimescaleDB`. All of this depends on the app usage and size of data, which I'm not yet sure. Optimizing for scenarios that will never occur is probably not the best idea.

## Consequences

Some additional handling around `SQLite` will need to be done. While it's still easier than `PostgreSQL` setup I'll need to learn a bit about stuff like backups, accessing production database etc. Btw. I've bought High Performance `SQLite` course to learn more!

Also, often the `SQLite` database isn't possible to access during build step, which will make stuff like SSG harder. However, I don't think I'll need this in this application.

There needs to be some careful consideration around point where migrating to `PostgreSQL` makes sense. I can't make this choice too late, because it'll be painful to migrate. And I can't make this decision too early or I'll be eaten by additional development costs. But I'm not sure whether this app will be finished, not to even mention scaling it.
