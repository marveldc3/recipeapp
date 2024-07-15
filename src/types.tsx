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

interface RecipeState {
  recipes: Recipe[];
  favorites: string[];
  searchQuery: string;
  loading: boolean;
  error: string;
}

interface RecipeAction {
  type: string;
  payload?: any;
  isFavorite?: boolean; // Add this line
}