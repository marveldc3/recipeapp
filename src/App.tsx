// src/App.tsx
import React, { createContext, useContext, useReducer } from "react";
import { kv } from "@vercel/kv";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import FavoriteRecipes from "./components/FavoriteRecipes";
import Header from "./components/Header"; // Removed .tsx extension

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
}

const RecipeContext = createContext<{
  state: RecipeState;
  dispatch: React.Dispatch<RecipeAction>;
}>({
  state: {
    recipes: [],
    favorites: [],
    searchQuery: "",
    loading: false,
    error: "",
  },
  dispatch: () => null,
});

const recipeReducer = (state: RecipeState, action: RecipeAction) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "LOAD_RECIPES":
      return { ...state, loading: true, error: "" };
    case "SET_RECIPES":
      return { ...state, loading: false, recipes: action.payload };
    case "ERROR_RECIPES":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(recipeReducer, {
    recipes: [],
    favorites: [],
    searchQuery: "",
    loading: false,
    error: "",
  });

  const setSearchQuery = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const setFavorite = async (recipeId: string, isFavorite: boolean) => {
    try {
      const favorites = isFavorite
        ? [...state.favorites, recipeId]
        : state.favorites.filter((id: string) => id !== recipeId);
      await kv.set("user_favorites", JSON.stringify(favorites));
      dispatch({ type: "SET_FAVORITES", payload: favorites });
    } catch (error) {
      console.error("Error setting favorite:", error);
    }
  };

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      <Header setSearchQuery={setSearchQuery} />
      <RecipeList />
      <RecipeDetail />
      <RecipeForm />
      <FavoriteRecipes />
    </RecipeContext.Provider>
  );
};

export default App;
export { RecipeContext };