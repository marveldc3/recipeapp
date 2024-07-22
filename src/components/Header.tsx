// src/components/Header.tsx

import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the Recipe type directly in this file
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

interface HeaderProps {
  recipes: Recipe[];
}

const Header: React.FC<HeaderProps> = ({ recipes }) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearch(query);
      if (query) {
        const filteredSuggestions = recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    },
    [recipes]
  );

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/add-recipe">Add Recipe</a>
        <a href="/favorites">Favorites</a>
      </nav>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {suggestions.map(recipe => (
          <li key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
