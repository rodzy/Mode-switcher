
# Mode switch

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gh/rodzy/Mode-switcher)
![CircleCI](https://img.shields.io/circleci/build/github/rodzy/Mode-switcher)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/rodzy/Mode-switcher/dev/@babel/preset-react)
![npm](https://img.shields.io/npm/v/mode-switcher)
[![npm](https://img.shields.io/npm/dm/mode-switcher?logo=npm)](https://npmjs.com/package/mode-switcher)

A reusable toggle UI component for React to switch between modes.

## Installation

### Pre-requisites

1. yarn or npm.
2. A React sample project.

### Get started

Using ``yarn``:
```
yarn add mode-switcher
```
Using ``npm``:
```
npm i mode-switcher
```

## Example 👁

ES6 import:
```js
import { Switcher } from "mode-switcher"
```

Usage:
```js
function App(){
  return(
  <>
    <div className="App-container">
      <h1>  My Content here <h1>
      <Switcher emojiLight="🌞" emojiDark="🌚"/>
      <p> Hi from content </p>
    </div>
  </>
  );
};
```

## License

[MIT](https://opensource.org/licenses/MIT)
