declare class RateLimiter {
  rate: number
  unit: number
  constructor(opts: RateLimiter.Opts)
  async payload(key: string, weight?: number = 1): Boolean
}

declare namespace RateLimiter {
  interface Opts {
    redisUrl: string
    rate: number,
    unit: number
  }
}

export = RateLimiter
