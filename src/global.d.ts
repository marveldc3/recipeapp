declare module '@vercel/kv' {
  export const kv: {
    set: <T>(key: string, value: T, ttl?: number | null) => Promise<void>;
    get: <T>(key: string) => Promise<T | null>;
    del: (key: string) => Promise<void>;
    incr: (key: string, amount?: number) => Promise<number>;
    expire: (key: string, ttl: number) => Promise<void>;
    reset: () => Promise<void>;
    keys: (prefix?: string) => Promise<string[]>;
    ttl: (key: string) => Promise<number | null>;
  };
}