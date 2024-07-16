import { VercelRequest, VercelResponse } from '@vercel/node/mjs';
import { kv } from '@vercel/kv/mjs';
import fetch from 'node-fetch';

const APP_ID = '782a8c61';
const APP_KEY = 'a1942b18ea7db3be941b03c4050b6b85';
const EDAMAM_API_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;

const KV_URL ='redis://default:AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI@helping-reptile-47272.upstash.io:6379';
const KV_REST_API_URL = 'https://helping-reptile-47272.upstash.io';
const KV_REST_API_TOKEN = 'AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (process.env.VERCEL_ENV === 'production') {
    const res = await fetch(EDAMAM_API_URL);
    const data = await res.json();

    for (const recipe of data.hits) {
      await kv.set(recipe.recipe.uri, JSON.stringify(recipe.recipe));
    }

    response.status(200).json({ message: 'Database populated successfully' });
  }
}