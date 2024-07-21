import React, { createContext, useContext, useReducer, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import FavoriteRecipes from "./components/FavoriteRecipes";
import Header from "./components/Header";
import { Recipe, RecipeState, RecipeAction } from './types';
import initialRecipes from './data/recipes.json'; // Mock API data

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
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(recipeReducer, {
    recipes: [],
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    searchQuery: "",
    loading: false,
    error: "",
  });

  useEffect(() => {
    const loadRecipes = async () => {
      dispatch({ type: "LOAD_RECIPES" });
      try {
        const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
        const recipes = storedRecipes.length > 0 ? storedRecipes : initialRecipes;
        localStorage.setItem("recipes", JSON.stringify(recipes));
        dispatch({ type: "SET_RECIPES", payload: recipes });
      } catch (error) {
        dispatch({ type: "ERROR_RECIPES", payload: "Failed to load recipes." });
      }
    };
    loadRecipes();
  }, []);

  const setSearchQuery = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const setFavorite = (recipeId: string, isFavorite: boolean) => {
    dispatch({ type: "SET_FAVORITE", payload: recipeId, isFavorite });
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
