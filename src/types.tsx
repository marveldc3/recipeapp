// src/types.ts
interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  cuisine: string;
  prepTime: string;
  servings: number;
  imageUrl: string;
}