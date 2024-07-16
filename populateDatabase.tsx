import { KV } from "@vercel/kv";
import axios from "axios";

const kv = new KV();

const APP_ID = "782a8c61";
const APP_KEY = "a1942b18ea7db3be941b03c4050b6b85";
const KV_REST_API_TOKEN = "AbioAAIncDFhZmRhN2I0MTNhODQ0ZDNiYTUzOTZiYzFlZjJjNmU2NHAxNDcyNzI";
const KV_REST_API_URL = "https://helping-reptile-47272.upstash.io";

async function populateDatabase() {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=chicken`
  );

  const recipes = response.data.hits;

  for (const recipe of recipes) {
    await kv.hset("recipes", recipe.recipe.label, JSON.stringify(recipe.recipe));
  }
}

// Call the function only once during deployment
if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_DEPLOYMENT_ID) {
  populateDatabase().catch((error) => console.error(error));
}
