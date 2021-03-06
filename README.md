
# redis-ratelimiter

[![NPM version](https://img.shields.io/npm/v/@zcong/redis-ratelimiter.svg?style=flat)](https://npmjs.com/package/@zcong/redis-ratelimiter) [![NPM downloads](https://img.shields.io/npm/dm/@zcong/redis-ratelimiter.svg?style=flat)](https://npmjs.com/package/@zcong/redis-ratelimiter) [![CircleCI](https://circleci.com/gh/zcong1993/redis-ratelimiter/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/redis-ratelimiter/tree/master)  [![codecov](https://codecov.io/gh/zcong1993/redis-ratelimiter/branch/master/graph/badge.svg)](https://codecov.io/gh/zcong1993/redis-ratelimiter)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

## Install

```bash
$ yarn add @zcong/redis-ratelimiter
```

## Usage

```js
const Ratelimiter = require('@zcong/redis-ratelimiter')

const rlt = new Ratelimiter({
  redisUrl: process.env.REDIS_URL,
  rate: 2,
  unit: 1
})

const run = async () => {
  const key = 'test_key'
  console.log(await rlt.payload(key)) // false
  console.log(await rlt.payload(key, 2)) // true
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**redis-ratelimiter** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/redis-ratelimiter/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
