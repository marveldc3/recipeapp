// src/components/FavoriteRecipes.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the Recipe type here
interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  category?: string;
  cuisine?: string;
  preparationTime?: number;
  servings?: number;
  tips?: string[];
}

interface FavoriteRecipesProps {
  recipes: Recipe[];
  favorites: string[];
}

const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({ recipes, favorites }) => {
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <div className="recipe-list">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.preparationTime} mins</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
