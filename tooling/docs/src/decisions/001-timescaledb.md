<!-- cspell:words replicache -->

# Use `Postgres` with `TimescaleDB` extension as a database

Date: 10-12-2024

Status: accepted

## Context

I need some storage for this app. Previously I often opted into using `SQLite` for database due to its ease of setup. You can easily start without any additional steps, you don't need any kind of `Docker` or other ways of local environment setup. It also makes the testing a lot easier, because you can spin database for specific test suite and fill it with needed data.

On the other hand, the needs of this app are much bigger than my usual small side-project applications. I want to store a lot of transactions in the database and use it as a kind of event sourcing. Moreover there could be a lot of operations on time-series data. Because of all of that I did some research around `TimescaleDB` which is specialized database for time-series stuff. It's packaged as a `PostgreSQL` extension and provides a lot of stuff specifically for applications like mine - some special kinds of averages, time aggregations, filling-in time-series data.

While using `SQLite` had an upper hand initially when used together with `Replicache` I gave up on the idea of implementing local-first/sync this way.

## Decision

Use `Postgres` with `TimescaleDB` as a database. While I'll need to learn more, because my `SQL` skills are currently under the water, that'll give me a lot in context of this project. `TimescaleDB` is made exactly for this kinds of use cases. For example I won't need to implement various complicated time-series data operations on TS land, I'll get them for free.

## Consequences

I'll need to learn a lot 😄 Local setup for testing, backups, `TimescaleDB` itself, much more complicated capabilities and data types than basic `SQLite` ones. Moreover if I use AI in the future there's a change I'll need to use some vectors. That's also possible within `Postgres` itself. Similiarly with geospatial data for where some transaction occurred.

One sad thing - I bought High Performance SQLite already xD
