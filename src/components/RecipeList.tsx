// src/components/RecipeList.tsx
import React, { useContext } from "react";
  import { RecipeContext } from "../App.tsx";

  const RecipeList = () => {
    const { state } = useContext(RecipeContext);
    const { recipes, searchQuery, favorites, loading, error } = state;

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const favoriteRecipes = filteredRecipes.filter((recipe) => favorites.includes(recipe.id));
    const nonFavoriteRecipes = filteredRecipes.filter((recipe) => !favorites.includes(recipe.id));

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {favoriteRecipes.length > 0 && (
          <>
            <h2>Favorites</h2>
            <ul>
              {favoriteRecipes.map((recipe) => (
                <li key={recipe.id}>
                  {recipe.title} - {recipe.category} - {recipe.cuisine}
                </li>
              ))}
            </ul>
          </>
        )}
        {nonFavoriteRecipes.length > 0 && (
          <>
            <h2>Non-favorites</h2>
            <ul>
              {nonFavoriteRecipes.map((recipe) => (
                <li key={recipe.id}>
                  {recipe.title} - {recipe.category} - {recipe.cuisine}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  export default RecipeList;