// src/components/RecipeList.tsx

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Define the Recipe type here
interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
  cuisine?: string;
  preparationTime?: number;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  // Filter recipes based on search, category, and cuisine
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
      const matchesCuisine = selectedCuisine ? recipe.cuisine === selectedCuisine : true;
      return matchesSearch && matchesCategory && matchesCuisine;
    });
  }, [recipes, search, selectedCategory, selectedCuisine]);

  // Get unique categories and cuisines for filtering
  const categories = useMemo(() => {
    const uniqueCategories = new Set(recipes.map(recipe => recipe.category).filter(Boolean));
    return Array.from(uniqueCategories);
  }, [recipes]);

  const cuisines = useMemo(() => {
    const uniqueCuisines = new Set(recipes.map(recipe => recipe.cuisine).filter(Boolean));
    return Array.from(uniqueCuisines);
  }, [recipes]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory || ''}
          onChange={e => setSelectedCategory(e.target.value || null)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cuisine">Cuisine:</label>
        <select
          id="cuisine"
          value={selectedCuisine || ''}
          onChange={e => setSelectedCuisine(e.target.value || null)}
        >
          <option value="">All Cuisines</option>
          {cuisines.map(cuisine => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.preparationTime} minutes</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
