# colondebug

colondebug is a debug tool with console.xxx

[![npm version](https://badge.fury.io/js/colondebug.svg)](http://badge.fury.io/js/colondebug)

## Install

    $ npm install --save colondebug

## Usage 

此种情况，colondebug就是debug模块。

```js
const debug = require("colondebug")("ts-junit");
  
debug(Object.keys(console))
```

当不想加入`DEBUG=xx`的时候，可以在key后面加入console.xxx

```js
const debug = require("colondebug")("ts-junit:dir");
  
debug(Object.keys(console))
```

其中冒号后面，可以接入的参数有如下。

```
[
  'log',            'warn',
  'dir',            'time',
  'timeEnd',        'timeLog',
  'trace',          'assert',
  'clear',          'count',
  'countReset',     'group',
  'groupEnd',       'table',
  'debug',          'info',
  'dirxml',         'error',
  'groupCollapsed', 'Console',
  'profile',        'profileEnd',
  'timeStamp',      'context'
]
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
