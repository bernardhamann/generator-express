# Yebobase Generator
[![Build Status](https://img.shields.io/travis/petecoop/generator-express.svg)](https://www.npmjs.com/package/generator-yebobase)
[![NPM Version](https://img.shields.io/badge/version-1.0.1-green.svg)](https://www.npmjs.com/package/generator-yebobase)




A nodejs express generator for Yeoman based on generator-express. This just adds some customisations that I needed, I recommend using the original package"

## Features

- Basic or MVC style file structure
- CoffeeScript Support
- Gulp or Grunt build tools with file watching and livereload
- .editorconfig for consistent coding styles within text editors
- Support View engines:
  - Jade
  - Handlebars
  - Swig
  - EJS
  - Marko
- Supported CSS pre-processors
  - SASS (both node-sass and ruby sass)
  - LESS
  - Stylus
- Supported Databases (with MVC structure):
 - MongoDB
 - MySQL
 - PostgreSQL
 - RethinkDB
 - SQLite

## Getting started

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **globally**: `npm install -g generator-express`
- Run: `yo express` and select Basic. Add `--coffee` if you require CoffeeScript.
- Run: `grunt` or `gulp` to run the local server at `localhost:3000`, the grunt/gulp tasks include live reloading for views, css in public/css and restarting the server for changes to app.js or js in routes/

## MVC apps

A generator for creating MVC style apps in express. Giving you the choice between the supported databases.

To get going:

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-express`
- Run: `yo express`, select MVC and select your database of choice. Add `--coffee` if you require CoffeeScript.
- Ensure that the selected database is running on your machine, if running elsewhere the connection string can be changed in `config/config.js`
- Run: `grunt` or `gulp` to run the local server - defaults to `localhost:3000` - port can be changed in `config/config.js`. The grunt/gulp tasks include live reloading as before.

## Options

- `--coffee`

  Uses CoffeeScript.

- `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## Testing
Tests are written with mocha.
- Install: `npm install -g mocha`
- Run: `mocha` or `npm test`

## Contributing
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
