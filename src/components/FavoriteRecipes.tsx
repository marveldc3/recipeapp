// src/components/FavoriteRecipes.tsx 0
import React, { useContext } from "react";
import { RecipeContext } from "../App";
import RecipeDetail from "./RecipeDetail";

const FavoriteRecipes = () => {
  const { state } =

 useContext(RecipeContext);
  const { favorites, recipes } = state;

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favoriteRecipes.length === 0 && <p>No favorite recipes yet.</p>}
      {favoriteRecipes.map((recipe) => (
        <RecipeDetail key={recipe.id} recipeId={recipe.id} />
      ))}
    </div>
  );
};

export default FavoriteRecipes;