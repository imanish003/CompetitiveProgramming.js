# CompetitiveProgramming.js

[![Build Status](https://travis-ci.org/Gr8manish/CompetitiveProgramming.js.svg?branch=master)](https://travis-ci.org/Gr8manish/CompetitiveProgramming.js) [![dependencies Status](https://david-dm.org/Gr8manish/CompetitiveProgramming.js/status.svg)](https://david-dm.org/Gr8manish/CompetitiveProgramming.js) [![devDependencies Status](https://david-dm.org/Gr8manish/CompetitiveProgramming.js/dev-status.svg)](https://david-dm.org/Gr8manish/CompetitiveProgramming.js?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

*No more boilerplate code to participate in Competitive Programming contests in Node.js* ✨

This project will help the Node.js Competitive programmers

# Project Structure

## Used technologies :

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

## Commands :
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License

MIT © Manish Menaria
