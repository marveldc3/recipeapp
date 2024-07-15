// src/App.tsx
import React, { createContext, useContext, useReducer } from "react";
import { kv } from "@vercel/kv";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import FavoriteRecipes from "./components/FavoriteRecipes";
import Header from "./components/Header";
import { Recipe, RecipeState, RecipeAction } from './types'; // Import the types

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
    case "SET_FAVORITE":
      const updatedFavorites = action.isFavorite
        ? [...state.favorites, action.payload]
        : state.favorites.filter((id: string) => id !== action.payload);
      return { ...state, favorites: updatedFavorites };
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
      <RecipeDetail recipeId={"some_recipe_id"} />
      <RecipeForm />
      <FavoriteRecipes />
    </RecipeContext.Provider>
  );
};

export default App;
export { RecipeContext };