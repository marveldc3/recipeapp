// src/components/RecipeDetail.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

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

interface RecipeDetailProps {
  recipes: Recipe[];
  toggleFavorite: (id: string) => void;
  favorites: string[]; // Ensure this prop is defined
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipes, toggleFavorite, favorites }) => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <div>Recipe not found</div>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Tips:</strong> {recipe.tips?.join(', ')}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetail;
	