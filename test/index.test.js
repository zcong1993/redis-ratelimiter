const RedisRatelimiter = require('../')

const delay = n => new Promise(resolve => setTimeout(resolve, n))

test('rate limit shoule work well', async () => {
  const rlt = new RedisRatelimiter({
    redisUrl: process.env.REDIS_URL,
    rate: 2,
    unit: 1
  })
  const key = 'test_case_1'
  const first = await rlt.payload(key)
  expect(first).toBeFalsy()
  const second = await rlt.payload(key)
  expect(second).toBeFalsy()
  const third = await rlt.payload(key)
  expect(third).toBeTruthy()

  await delay(rlt.unit * 1000) // to millseconds
  const retry = await rlt.payload(key)
  expect(retry).toBeFalsy()

  const key2 = 'test_case_2'
  expect(await rlt.payload(key2)).toBeFalsy()
  expect(await rlt.payload(key2, 2)).toBeTruthy()

  rlt._redis.disconnect()
})
