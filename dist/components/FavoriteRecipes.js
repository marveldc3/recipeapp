// src/components/FavoriteRecipes.tsx 
import React, { useContext } from "react";
import { RecipeContext } from "../App";
import RecipeDetail from "./RecipeDetail";
var FavoriteRecipes = function () {
    var state = useContext(RecipeContext).state;
    var favorites = state.favorites, recipes = state.recipes;
    var favoriteRecipes = recipes.filter(function (recipe) { return favorites.includes(recipe.id); });
    return (React.createElement("div", null,
        React.createElement("h2", null, "Favorite Recipes"),
        favoriteRecipes.length === 0 && React.createElement("p", null, "No favorite recipes yet."),
        favoriteRecipes.map(function (recipe) { return (React.createElement(RecipeDetail, { key: recipe.id, recipeId: recipe.id })); })));
};
export default FavoriteRecipes;
