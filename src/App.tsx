// src/App.tsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import FavoriteRecipes from './components/FavoriteRecipes';
import recipesData from './data/recipes.json';

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

interface State {
  recipes: Recipe[];
  favorites: string[];
}

const convertRecipes = (data: any[]): Recipe[] => {
  return data.map(item => ({
    ...item,
    preparationTime: item.preparationTime ? Number(item.preparationTime) : undefined,
    servings: item.servings ? Number(item.servings) : undefined,
  }));
};

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    recipes: convertRecipes(recipesData),
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const addRecipe = (recipe: Recipe) => {
    setState(prevState => ({
      ...prevState,
      recipes: [...prevState.recipes, recipe],
    }));
  };

  const toggleFavorite = (id: string) => {
    setState(prevState => ({
      ...prevState,
      favorites: prevState.favorites.includes(id)
        ? prevState.favorites.filter(favId => favId !== id)
        : [...prevState.favorites, id],
    }));
  };

  return (
    <Router>
      <Header recipes={state.recipes} />
      <Routes>
        <Route path="/" element={<RecipeList recipes={state.recipes} />} />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail
              recipes={state.recipes}
              toggleFavorite={toggleFavorite}
              favorites={state.favorites} // Pass favorites here
            />
          }
        />
        <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} />
        <Route
          path="/favorites"
          element={<FavoriteRecipes recipes={state.recipes} favorites={state.favorites} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
