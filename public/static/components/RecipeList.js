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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/RecipeList.tsx
var react_1 = __importStar(require("react"));
var App_1 = require("../App");
var RecipeDetail_1 = __importDefault(require("./RecipeDetail"));
var RecipeList = function () {
    var state = react_1.useContext(App_1.RecipeContext).state;
    var recipes = state.recipes, searchQuery = state.searchQuery;
    var filteredRecipes = recipes.filter(function (recipe) {
        return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (<div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map(function (recipe) { return (<RecipeDetail_1.default key={recipe.id} recipeId={recipe.id}/>); })}
    </div>);
};
exports.default = RecipeList;
