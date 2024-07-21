import React, { useState, useContext } from "react";
import { RecipeContext } from "../App";

const RecipeForm = () => {
  const { state, dispatch } = useContext(RecipeContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      title.trim().length < 3 ||
      description.trim().length < 10 ||
      ingredients.trim().length < 10 ||
      instructions.trim().length < 10 ||
      category.trim().length < 3 ||
      cuisine.trim().length < 3 ||
      imageUrl.trim().length < 5
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newRecipe = {
      id: Date.now().toString(),
      title,
      description,
      ingredients: ingredients.split(","),
      instructions: instructions.split("."),
      category,
      cuisine,
      prepTime: "N/A",
      servings: 0,
      imageUrl,
    };

    const updatedRecipes = [...state.recipes, newRecipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    dispatch({ type: "SET_RECIPES", payload: updatedRecipes });

    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("");
    setCategory("");
    setCuisine("");
    setImageUrl("");
    alert("Recipe added successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea id="ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
        <label htmlFor="category">Category</label>
        <input type="text" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" id="cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)} />
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
