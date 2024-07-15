// src/components/FavoriteRecipes.tsx
 import React, { useContext } from "react";
  import { RecipeContext } from "../App.tsx";
  import RecipeDetail from "./RecipeDetail.tsx"; // Ensure this import is present

  const FavoriteRecipes = () => {
    const { state } = useContext(RecipeContext);
    const { favorites } = state;

    return (
      <div>
        {favorites.length > 0 && (
          <>
            <h2>Favorites</h2>
            <ul>
              {favorites.map((recipeId) => (
                <li key={recipeId}>
                  <RecipeDetail recipeId={recipeId} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  export default FavoriteRecipes;