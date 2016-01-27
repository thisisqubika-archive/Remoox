## Remoox yeoman generator

## Getting Started

### What is [Redux](https://github.com/gaearon/redux)?

It's ["Atomic Flux with hot reloading"](http://youtube.com/watch?v=xsSnOQynTHs), a next-generation take on the [Flux pattern](http://facebook.github.io/flux/) with a few core [philosophical design differences](https://github.com/gaearon/redux#philosophy--design-goals), including:

> * Preserves the benefits of Flux, but adds other nice properties thanks to its functional nature.
> * Prevents some of the anti-patterns common in Flux code.
> * Works great in universal (aka "isomorphic") apps because it doesn't use singletons and the data can be rehydrated.
...

### What is [REACT](https://github.com/facebook/react)

React is a JavaScript library for building user interfaces.

* **Just the UI:** Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
* **Virtual DOM:** React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using [React Native](https://facebook.github.io/react-native/).
* **Data flow:** React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.


### Features include in this Generator:
- [x] Redux-based application architecture
- [x] React for rad components
- [x] [WebPack](http://webpack.github.io/) for build pipeline and dev server awesomeness
- [x] [Babel](https://babeljs.io/) transpiler so you can use [bleeding edge language features](https://babeljs.io/docs/usage/experimental/)
- [x] PostCSS preprocessor with autoprefixer support
- react-router and redux-router ( comming soon redux-simple-router )

### Prerequisites

You must have [Node.js w/NPM](http://nodejs.org/) installed. I recommend installing via [homebrew](http://brew.sh/), but you should be able to use the [pre-built installers](http://nodejs.org/download/) if you prefer.

Also, `generator-remoox` is a [Yeoman](http://yeoman.io/) generator. If you do not have Yeoman installed, first run:

```bash
$ npm install -g yo
```

### Installing the generator

To install generator-remoox from npm, run:

```bash
$ npm install -g generator-remoox
```

Finally, initiate the generator:

```bash
$ yo remoox
```

### How to run it on dev

You must clone this repo and then go into the directory and link it using npm

```bash
$ npm link
```

Then you can just:

```bash
$ yo remoox
```



## License

MIT
