declare class RateLimiter {
  rate: number
  unit: number
  constructor(opts: RateLimiter.Opts)
  payload(key: string, weight?: number): Boolean
}

declare namespace RateLimiter {
  interface Opts {
    redisUrl: string
    rate: number,
    unit: number
  }
}

export = RateLimiter
