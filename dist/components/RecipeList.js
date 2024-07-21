// src/components/RecipeList.tsx
import React, { useContext } from "react";
import { RecipeContext } from "../App";
import RecipeDetail from "./RecipeDetail";
var RecipeList = function () {
    var state = useContext(RecipeContext).state;
    var recipes = state.recipes, searchQuery = state.searchQuery;
    var filteredRecipes = recipes.filter(function (recipe) {
        return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (React.createElement("div", null,
        React.createElement("h2", null, "Recipes"),
        filteredRecipes.length === 0 && React.createElement("p", null, "No recipes found."),
        filteredRecipes.map(function (recipe) { return (React.createElement(RecipeDetail, { key: recipe.id, recipeId: recipe.id })); })));
};
export default RecipeList;
