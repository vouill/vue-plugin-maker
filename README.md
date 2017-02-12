# vue-plugin-maker

> Template to quickly setup vue plugins

Scaffolded from vue-cli webpack

The main goal of this repo is to help quickly make plugins for various purposes.

You can either adapt an existing vanilla js library or make a vue components library/plugin for your projects.

## What are the perks ?
### Code your library/plugin

Code your library/plugin in `src/plugin`

### Build the library

* npm run build:lib

Creates a lib folder with the plugin/lib inside.
You can change and customize the library build in `build/webpack.lib.conf.js`

### Build the Github docs

* npm run build:docs

Creates a docs folder with main.js entry project. It's basically a prod build for github pages docs folder.

[Link to Docs](https://vouill.github.io/vue-plugin-maker/)

## Scripts

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for plugin file
npm run build:lib

# build for github docs page
npm run build:docs

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
