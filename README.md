<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

[![][fly-badge]][fly] ![][mit-badge]

> [Fly][fly] plugin for [ESLint](http://eslint.org/)

## Usage
To learn about what options are available, check out the ESLint [CLI options](http://eslint.org/docs/user-guide/command-line-interface) and linting [rules](http://eslint.org/docs/rules/).

### Install

```a
npm install -D fly-eslint
```

### Example

```js
exports.test = function* () {
  yield this
    .source("src/**/*.js").eslint()
}
```

# License

[MIT](http://opensource.org/licenses/MIT) © [Jorge Bucaran][author] [et all](https://github.com/bucaran/fly-eslint/graphs/contributors)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bucaran/fly/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


[author]: http://about.bucaran.me

[fly]: https://www.github.com/bucaran/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square

[npm-pkg-link]: https://www.npmjs.org/package/fly-eslint
