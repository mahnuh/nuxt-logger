# nuxt-logger

[![npm](https://img.shields.io/npm/dt/nuxt-logger.svg?style=flat-square)](https://npmjs.com/package/nuxt-logger)
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-logger/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-logger)
[![npm (scoped with tag)](https://img.shields.io/npm/l/nuxt-logger.svg?style=flat-square)](https://npmjs.com/package/nuxt-logger)

> A small but helpful logging module for nuxt projects.

## Setup

- Add `nuxt-logger` to your project using yarn or npm
- Add `nuxt-logger` to the `modules` section of your project's `nuxt.config.js`

```js
{
  modules: [
   'nuxt-logger',
  ],

  logger: {
   // (optional) custom configuration
  }
}
```

## Custom configuration

```js
logger: {
  isEnabled: true, // true or false, defaults to true
  logLevel: 'debug', // debug, info, warn or error, defaults to debug
}
```

## Usage

There are 4 methods available, one for each log level (debug, info, warn, error) which accept one or more arguments of any kind.

```js
export default {
   methods:{
     foo() {
        this.$log.debug('foo')
        this.$log.info({foo: 'bar'})
        this.$log.warn('warning!')
        this.$log.error('Error', 500)
     }
   }
}
```

<p algin="center">
	<img src="https://www.dropbox.com/s/drb2u6pxbptn326/screenshot.png?dl=1">
</p>

## To do

- [ ] Better support for server side rendering
- [ ] Better support for Safari and Firefox (method name missing)