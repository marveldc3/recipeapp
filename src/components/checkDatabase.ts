import { kv } from "@vercel/kv";

export const checkDatabase = async () => {
  const keys = await kv.keys();
  return keys.length > 0;
};