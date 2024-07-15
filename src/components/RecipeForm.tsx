// src/components/RecipeForm.tsx
import React, { useState, useContext } from "react";
import { RecipeContext } from "../App";

const RecipeForm = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const { loading, error } = state;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const newRecipe = { id: Date.now().toString(), title, description, ingredients, instructions, category, cuisine, prepTime: "N/A", servings: 0, imageUrl };
      await kv.set("recipes", JSON.stringify([...state.recipes, newRecipe]));
      dispatch({ type: "SET_RECIPES", payload: [...state.recipes, newRecipe] });
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setCategory("");
      setCuisine("");
      setImageUrl("");
      alert("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Error adding recipe. Please try again later.");
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
