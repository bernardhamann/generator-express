# Yebobase Generator
[![NPM Version](https://img.shields.io/badge/version-1.0.6-green.svg)](https://www.npmjs.com/package/generator-yebobase)


A nodejs express generator for Yeoman based on generator-express. This just adds some customisations that I needed like support for stylus with Jeet, Rupture and Nib. If you dont need these changes I recommend using the original package

## Instalation

npm install -g generator-yebobase

## Features

- Basic or MVC style file structure
- Gulp build tool with file watching and livereload
- .editorconfig for consistent coding styles within text editors
- Support View engines:
  - Jade
  - Handlebars
  - Swig
  - EJS
  - Marko
- Supported CSS pre-processors
  - Stylus (with Jeet, Rupture and Nib)
- Supported Databases (with MVC structure):
  - MongoDB

## Getting started

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **globally**: `npm install -g generator-express`
- Run: `yo express` and select Basic.
- Run: `gulp` to run the local server at `localhost:3000`, the gulp tasks include live reloading for views, css in public/css and restarting the server for changes to app.js or js in routes/

## MVC apps

A generator for creating MVC style apps in express. Giving you the choice between the supported databases.

To get going:

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-express`
- Run: `yo express`, select MVC and select your database of choice. Add `--coffee` if you require CoffeeScript. (not supported)
- Ensure that the selected database is running on your machine, if running elsewhere the connection string can be changed in `config/config.js`
- Run: `gulp` to run the local server - defaults to `localhost:3000` - port can be changed in `config/config.js`. The gulp tasks include live reloading as before.

## Options

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
