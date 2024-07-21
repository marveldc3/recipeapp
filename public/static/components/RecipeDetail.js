"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/RecipeDetail.tsx
var react_1 = __importStar(require("react"));
var App_1 = require("../App");
var RecipeDetail = function (_a) {
    var recipeId = _a.recipeId;
    var _b = react_1.useContext(App_1.RecipeContext), state = _b.state, dispatch = _b.dispatch;
    var recipes = state.recipes;
    var recipe = recipes.find(function (recipe) { return recipe.id === recipeId; });
    var isFavorite = state.favorites.includes(recipeId);
    var toggleFavorite = function () {
        dispatch({ type: "SET_FAVORITE", payload: recipeId, isFavorite: !isFavorite });
    };
    return (<div>
      {recipe && (<div>
          <h2>{recipe.title}</h2>
          <img src={recipe.imageUrl} alt={recipe.title}/>
          <p>Category: {recipe.category}</p>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Servings: {recipe.servings}</p>
          <ul>
            {recipe.ingredients.map(function (ingredient, index) { return (<li key={index}>{ingredient}</li>); })}
          </ul>
          <ol>
            {recipe.instructions.map(function (instruction, index) { return (<li key={index}>{instruction}</li>); })}
          </ol>
          <button onClick={toggleFavorite}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>)}
    </div>);
};
exports.default = RecipeDetail;
