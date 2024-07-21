import React, { useContext } from "react";
import { RecipeContext } from "../App";
import RecipeDetail from "./RecipeDetail";

const RecipeList = () => {
  const { state } = useContext(RecipeContext);
  const { recipes, searchQuery } = state;

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <RecipeDetail key={recipe.id} recipeId={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
