# svelte spa template

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/collardeau/svelte-spa.

### You can view the live demo at: [https://pensive-bell-06d902.netlify.com](https://pensive-bell-06d902.netlify.com)

Svelte Spa is here to get you started writing single-page applications using Svelte.

Svelte Spa includes some store creaters for quick integrations such as routing, firebase and localStorage. A lot of stuff that you might think of as inside `node_modules` is inside a `src/libs` folder which you can edit yourself. The files are meant to get you going and they are kept as simple as possible, so you can dive into the code and start building and customizing. There is also a `theme.css` using css variables, that you can customize as well. Svelte Spa also provides some basic layout components (such as Header and Nav). 

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit collardeau/svelte-spa my-svelte-app
cd my-svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
