# grunt-missing-i18n v0.0.4

> Finds unlocalized UI strings

## Getting Started
This plugin requires Grunt `~0.4.0`.

```shell
npm install grunt-missing-i18n --save-dev
```

Once the plug-in has been installed, you need to load this Grunt task in your Gruntfile like this:

```js
grunt.loadNpmTasks('grunt-missing-i18n');
```


## MissingI18n task
_Run this task with the `grunt missingI18n` command._

```js
grunt.initConfig({
  missingI18n: {
    files: ['app/**/*.{js,html,mustache}']
  }
});
```


