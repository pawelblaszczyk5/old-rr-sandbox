# Moneytor

It'll be a money tracking application. At the start I want to only cover expenses, but in the future I'd also like to add some features around incomes and savings. Main point is to create an app that has snappy UI/UX with realtime sync and offline capabilities. I don't intend this to work with full-offline workflows and never using the internet, but I want it to work when someone lose the connection for a moment.

Also I want to add some features based on the AI after getting MVP out of the gate. I'll learn a lot about the technology that I'm a bit skeptic this way. Moreover, I also intend to add some stuff that's usually used in production-grade SaaS so I can learn more and showcase some more professional work.

## Technologies and key pieces

### Replicache

Replicache seems to be the best solution for realtime sync. It doesn't require any specific database structure, I own my data, I can sync anything. The requirements are minimal and abstraction isn't so hard to implement. It feels very flexible.

### Remix

<!-- cspell:ignore tanstack, vinxi -->

It's the best framework for building React apps atm tbh. Next.js is Vercel framework and unstable. Tanstack Start is too much magic and based on Vinxi which I feel is kind of a dead end. They're building awesome stuff around React Router V7 and I'm really curious about their RSC stuff in the future. Also they give me a lot of flexibility of Vite and CSR vs SSR. The `clientLoader`/`clientAction` APIs are very well thought. I like their approach of building stuff and really like monthly planning.

### Effect

<!-- cspell:ignore vizoo -->

I really like this library and I feel my last time with it (Vizoo) was too short to learn it shortcomings and feel it fully. They've got amazing stuff around Schema/SQL/AI etc. The type safety is awesome and Remix integration is manageable to pull off.

### SQLite

That was a thing I was wondering the longest about. In theory for this kind of app something like TimescaleDB would be awesome. But I'm using Replicache so most of the queries will be to _just_ fetch everything and return it to the client. Client will be responsible for most of the stuff. In the future I want to add some features that will involve server querying database more precisely but I'm open for changes then. This app will be probably used by 1-2 users anyway but if it turns out I need the additional performance I'll be think about it then. I've also bought the High Performance SQLite course for this.

### Fly.io

<!-- cspell:ignore ootb, ollama -->

It seems to be the most powerful platform for me now. They provide a lot of stuff ootb, but it's still pretty low-level and doesn't limit capabilities. I'll need to build some custom glue for stuff like deployments, preview environments etc., but I've already did this in the past and I think it's pretty manageable. They also have stuff like GPU where I'd like to host OLLAMA in the future for the AI capabilities.

## MVP features

<!-- cspell:ignore planotes, rocicorp -->

- Behind the stage
  - ADRs - I want to track some of my decisions more precisely. I can learn a lot from reasoning on why I did something. When I need to change the decision later on I need to draw some conclusions - this way I'll get better as an architect
  - Packages structure - of course I'm going with the monorepo. I'd like to do some planning around it beforehand. It's one of the parts which I often find problematic and I didn't have a lot of experience in this area
  - Database schema - I've never really did any database management (planotes doesn't count tbh). I want to do something smarter here and think about it a bit beforehand
  - Testing - I kind of brushed off testing always. I think there'll be some stuff that'll be really worth testing. Stuff like CVR diffs in Replicache sounds like excellent use case for unit testing
  - Backups - I probably need to use something like Litestream, or maybe I'm fine with periodical backup
- Homepage before login
  - I'm a bit bad at this so I'm not sure how this will turn out
  - Maybe use some animations/scroll-storytelling
  - It doesn't need to be perfect at the beginning
  - Inspire but some other stuff - amie calendar, daylight computer (basement stuff in general)
- Auth
  - Social login - I'll start with one platform (GitHub maybe) but need to expand to more in the future
  - I'd like to skip mail/password flow on one hand, but on the other hand I'll need mail mechanism anyway in the future
- Workspaces
  - Multitenancy - that's something I think is really valuable in this project. Tracking shared expenses. I'll start really simple with that - just sharing data between multiple users but need to accommodate additional future requirements. Everything will be a workspace
  - Basics permission - I don't want to dig this too much at the beginning. Only stuff like adding/removing members
- Configuration
  - Workspace - the only thing that comes to my mind now is categories/tag system
  - User specific - I want stuff like theme, timezone, preferred number/date formatting to be configurable
- Expenses
  - Tracking - that's the simple part, basically a CRUD for a single expense that'll be added to the database. It'll be a bit like an event sourcing, but I'm fine with updating past records due to my architecture with synced/local data. Consider stuff like grouping multiple expenses together (this could work like Notion's pages grouping - actually ChatGPT made me realize that Notion is more of a parenting system, maybe I want both? Parenting for splitting receipt and grouping for multiple related e.g. all expenses from single trip), currency (I probably want to start with one default currency for workspace), tagging/category (should tags and categories be separate stuff? Categories would be a single select mandatory and tags more custom and multiple allowed), merchant
  - Querying - that's the complicated part. I want this to be super flexible - I really like how Notion handles databases. I have one view which is just default log of everything but I can create multiple views with saved/persisted queries. Example querying/filtering - date/time, value, category/tag, name, description, merchant, by parent
  - Attachments - stuff like receipts and invoices could be attached to expense (maybe after the MVP)
- Realtime optimized sync and offline working
  - Replicache integration - self-explanatory
  - Prefetching/preloading - I want a lot of code to be loaded initially so every subsequent action is snappy. I still can make this lazy so user won't pay the cost - it'll just be loaded in the background after initial load happens
  - Explore PWA - I'm not sure about this APIs/technology, I need to learn a bit because it may be useful here
- Import & Export
  - If I want some people to try this app I need a mechanism to import/export stuff
  - Data sources - CSV, spreadsheet, bi-directional. Maybe start with spreadsheet only
- General
  - Undo/Redo management - Replicache makes it kind of easy to implement, look at their Rocicorp package
  - Command palette - that's super powerful feature that I love

## Future

- Behind the stage
  - Analytics - that's really crucial in any real software used by people. I want to know how the stuff is used, which features are used, how are they used etc. Important thing in this case is privacy - technically I'll have access to the database anyway, but I don't want to send all the stuff to analytics provider, especially when using stuff like session recording
  - Error tracking - Sentry probably
  - Feature flags - I want to have an easy way to develop code without affecting everyone. I think that's the best workflow for developing applications and I want to try it out. It also plays well with stuff like analytics
  - Preview environments - custom GitHub actions, most complicated stuff will be around 3rd party services etc. For social logins I'll probably need to implement some proxy for all development instances - something like Clerk or Next Auth is doing.
  - Testing (more) - E2E testing is lit
  - Monitoring/metrics - stuff like Grafana/Prometheus/Open Telemetry
- Auth
  - Additional social providers - Google for sure, not sure what else I want to include, that'll probably depend on user needs
  - Managing sessions - see where you're logged in, remove different sessions, track location and user agent
- AI
  - Smart OCR - that's the main use case I'm imagining. Possibility of adding expense just by scanning receipt and everything is added exactly to my data schema, with tags and categories would be lit
  - Assistant around application - something similar to what Vercel showcased for their stocks showcase app. I can ask it to do action in app and it provides me an UI for this. This could also be helpful in terms of harder features like advanced querying/filtering
  - Suggestions around budget - that's completely random and least interesting from my POV. Basic insights like "you're getting close to your budget could be worth"
- Workspaces (additional futures)
  - Advanced permissions - possibility of adding read-only user, marking some expense details as private, allowing other users to adding folks to workspace
  - Audit logs - knowing who changed what
- Dashboards
  - Based on queries/filtering - use the same queries/filtering mechanism to collect data for presentation
  - Highly customizable - I'm a bit torn here - I don't want to build full drag and drop customizable dashboards on one hand, but on the other hand I want to have a high level of configuration. Need to strike balance here.
  - Permissions for dashboards - option to make them private or workspace-wide, maybe something more specific?
- Expenses (additional futures)
  - Recurring expenses - configurable and then automatically added at appropriate time. I'm not sure how to approach this in the local-first/sync way. Additional idea from chat GPT - allow for options like end date or until manually stopped
  - Planned expenses - something for the future that you're planning but didn't bought yet. It could prompt to confirm at desired date or just wait
  - Custom data schema - additional metadata for expenses in customized config. I can imagine someone wanting to categorize expenses by payment method, but I don't want to have this built-in. Maybe if more people use this app I'd like to add more configurable approach
  - Currency - that's the topic that I want to dive deeper in the future somehow but I'm still not sure how
  - Budget planning - make some plans around how much I intend to spend across categories etc
- Incomes and savings
  - New type of the same data as expense
  - Not sure what would be nice to track there
  - Incomes are usually very similar month-to-month, is the tracking really worth?
  - Don't really want to dive into stuff like investments
- Alerts, emails
  - Notifications - imagine scenario when you can create a query and if this query e.g. reaches given value in current month you get a notification. Sounds super cool
  - Periodic - if you configure a dashboard it sounds cool for an option to receive its snapshot every week by email
  - Digest emails - stuff like top users spending last week or simple category split overview
  - Settings for frequency etc - don't want to be annoying
- Homepage (improvements, updates)
  - I'll probably need another round here after updates/MVP
- Import & Export
  - Synchronization - ChatGPT gave me this idea, it could make a possible scenario where my app is kind of a frontend for underlying spreadsheet. Worth considering, but I'm not 100% sure of the complications it brings in
- General
  - Sync conflicts solving - Replicache solves it in theory but I want additional handling when e.g. you update something that someone deleted and this update goes missing or your update is overwritten by update you never saw
