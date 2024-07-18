// src/types.ts 
export interface Recipe {
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

export interface RecipeState {
  recipes: Recipe[];
  favorites: string[];
  searchQuery: string;
  loading: boolean;
  error: string;
}

export interface RecipeAction {
  type: string;
  payload?: any;
  isFavorite?: boolean; // Add this line
}