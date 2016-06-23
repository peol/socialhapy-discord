# socialhapy-discord

A simple Discord bot for providing random functionality against a specific Discord
server. It's not very generic and a pretty quickly created project, I'm sorry in
advance for the lack of tests and decent architecture, this was a really quick
project.

You need to have Node.js (and npm that comes with it) installed.

# Setting it up

First off, install the dependencies:

```
$ npm install
```

Then you need to provide the necessary configuration, copy the `./config-example.js` file
to `./src/config.js` and modify it to fit your needs. This file is git-ignored so
we don't leak any credentials from contributors.

You need to add the necessary information in that file!

Read more:
<links to discord/twitter API's>

# Making changes

Fork and send pull requests. In lieu of a formal style guide line, please follow the existing code style.

Make sure you lint your changes before sending a pull request too:

```
$ npm run lint
```

# Running it

```
$ npm start
```

To make it more resilient, you should use something like `forever` to make sure
it's always running (it does kill itself when discord disconnects to avoid multiple
event build ups right now), but keep in mind to not re-start it too eagerly or your
API keys to e.g. Discord and Twitter might get locked out.
