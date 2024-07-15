// src/components/RecipeDetail.tsx
import React, { useContext } from "react";
  import { RecipeContext } from "../App";

  const RecipeDetail = ({ recipeId }: { recipeId: string }) => {
    const { state, dispatch } = useContext(RecipeContext);
    const { recipes } = state;

    const recipe = recipes.find((recipe) => recipe.id === recipeId);

    const isFavorite = state.favorites.includes(recipeId);
    const toggleFavorite = () => dispatch({ type: "SET_FAVORITE", payload: recipeId, isFavorite: !isFavorite });

    return (
      <div>
        {recipe && (
          <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <p>Category: {recipe.category}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Servings: {recipe.servings}</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <button onClick={toggleFavorite}>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        )}
      </div>
    );
  };

  export default RecipeDetail;