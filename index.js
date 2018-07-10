const Redis = require('ioredis')

class RateLimiter {
  constructor({
    redisUrl,
    rate,
    unit
  } = {}) {
    this._redis = new Redis(redisUrl)
    this.rate = rate
    this.unit = unit
  }

  async payload(key, weight = 1) {
    const now = await this._redis.incrby(key, weight)
    if (now === 1 || now === weight) {
      await this._redis.expire(key, this.unit)
    }
    if (now > this.rate) {
      return true
    }
    return false
  }
}

module.exports = RateLimiter
