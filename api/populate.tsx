import { KV } from '@vercel/kv';

const kvUrl ='redis://default:AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI@helping-reptile-47272.upstash.io:6379';
const kvRestApiUrl = 'https://helping-reptile-47272.upstash.io';
const kvRestApiToken = 'AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI';

const kv = new KV(kvUrl);

async function populateKV() {
  const appId = '782a8c61';
  const appKey = 'a1942b18ea7db3be941b03c4050b6b85';
  const apiEndpoint = 'https://api.edamam.com/api/recipes/v2';

  const headers = {
    'Content-Type': 'application/json',
    'App-Id': appId,
    'App-Key': appKey,
  };

  let offset = 0;
  const limit = 100; // adjust the limit according to the API's pagination rules
  while (true) {
    const response = await fetch(`${apiEndpoint}?type=public&beta=true&offset=${offset}&limit=${limit}`, { headers });
    const recipes = await response.json();

    // Store recipes in KV database
    for (const recipe of recipes.hits) {
      await kv.set(`recipe:${recipe.uri}`, JSON.stringify(recipe));
    }

    // Check if there are more recipes to fetch
    if (recipes.hits.length < limit) {
      break;
    }

    offset += limit;
  }
}

populateKV().catch((error) => console.error(error));