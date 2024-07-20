// src/components/RecipeDetail.tsx
import React, { useContext } from "react";
import { RecipeContext } from "../App";
var RecipeDetail = function (_a) {
    var recipeId = _a.recipeId;
    var _b = useContext(RecipeContext), state = _b.state, dispatch = _b.dispatch;
    var recipes = state.recipes;
    var recipe = recipes.find(function (recipe) { return recipe.id === recipeId; });
    var isFavorite = state.favorites.includes(recipeId);
    var toggleFavorite = function () {
        dispatch({ type: "SET_FAVORITE", payload: recipeId, isFavorite: !isFavorite });
    };
    return (React.createElement("div", null, recipe && (React.createElement("div", null,
        React.createElement("h2", null, recipe.title),
        React.createElement("img", { src: recipe.imageUrl, alt: recipe.title }),
        React.createElement("p", null,
            "Category: ",
            recipe.category),
        React.createElement("p", null,
            "Cuisine: ",
            recipe.cuisine),
        React.createElement("p", null,
            "Prep Time: ",
            recipe.prepTime),
        React.createElement("p", null,
            "Servings: ",
            recipe.servings),
        React.createElement("ul", null, recipe.ingredients.map(function (ingredient, index) { return (React.createElement("li", { key: index }, ingredient)); })),
        React.createElement("ol", null, recipe.instructions.map(function (instruction, index) { return (React.createElement("li", { key: index }, instruction)); })),
        React.createElement("button", { onClick: toggleFavorite }, isFavorite ? "Remove from Favorites" : "Add to Favorites")))));
};
export default RecipeDetail;
