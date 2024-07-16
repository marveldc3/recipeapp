import axios from 'axios';
import { kv } from '@vercel/kv';

const appId = '782a8c61';
const appKey = 'a1942b18ea7db3be941b03c4050b6b85';

const fetchRecipes = async (query: string) => {
  try {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
      params: {
        q: query,
        app_id: appId,
        app_key: appKey,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

const saveRecipesToKVDatabase = async (recipes: Recipe[]) => {
  try {
    await kv.set('recipes', JSON.stringify(recipes));
    console.log('Recipes saved to KV Database.');
  } catch (error) {
    console.error('Error saving recipes to KV Database:', error);
  }
};

export const populateRecipes = async (query: string) => {
  const recipes = await fetchRecipes(query);
  await saveRecipesToKVDatabase(recipes);
};