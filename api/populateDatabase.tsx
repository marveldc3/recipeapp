// populateDatabase.ts
import fetch from 'node-fetch';
import { kv } from '@vercel/kv';

const EDAMAN_APP_ID = '782a8c61';
const EDAMAN_APP_KEY = 'a1942b18ea7db3be941b03c4050b6b85';
const BASE_EDAMAN_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}`;
const UPSTASH_KV_URL = 'https://helping-reptile-47272.upstash.io';
const UPSTASH_KV_REST_API_TOKEN = 'AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI';

async function main() {
  try {
    const response = await fetch(BASE_EDAMAN_URL);
    const data = await response.json();

    for (const item of data.hits) {
      await kv.set(`edamam::${item.recipe.uri}`, JSON.stringify(item.recipe), {
        url: `${UPSTASH_KV_URL}/set/edamam::${item.recipe.uri}`,
        token: UPSTASH_KV_REST_API_TOKEN,
      });
    }

    console.log('Edamam data successfully stored in UpStash KV.');
  } catch (error) {
    console.error('Failed to populate Edamam data in UpStash KV.', error);
  }
}

main();