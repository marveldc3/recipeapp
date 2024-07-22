// src/components/RecipeForm.tsx


import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the Recipe type to match the definition in App.tsx
interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  category?: string;
  cuisine?: string;
  preparationTime?: number;
}

// Define the props for the RecipeForm component
interface RecipeFormProps {
  addRecipe: (recipe: Recipe) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [preparationTime, setPreparationTime] = useState<number | ''>('');
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    imageUrl: '',
    category: '',
    cuisine: '',
    preparationTime: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Validation function for the form
  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (title.length < 3) {
      newErrors.title = 'Le titre doit faire minimum 3 caractères';
      valid = false;
    } else {
      newErrors.title = '';
    }

    if (description === '') {
      newErrors.description = 'La description est requise';
      valid = false;
    } else {
      newErrors.description = '';
    }

    if (ingredients.some(ingredient => ingredient === '')) {
      newErrors.ingredients = 'Tous les ingrédients doivent être renseignés';
      valid = false;
    } else {
      newErrors.ingredients = '';
    }

    if (instructions.some(instruction => instruction === '')) {
      newErrors.instructions = 'Toutes les étapes de préparation doivent être renseignées';
      valid = false;
    } else {
      newErrors.instructions = '';
    }

    if (imageUrl === '') {
      newErrors.imageUrl = 'L\'URL de l\'image est requise';
      valid = false;
    } else {
      newErrors.imageUrl = '';
    }

    if (category === '') {
      newErrors.category = 'La catégorie est requise';
      valid = false;
    } else {
      newErrors.category = '';
    }

    if (cuisine === '') {
      newErrors.cuisine = 'La cuisine est requise';
      valid = false;
    } else {
      newErrors.cuisine = '';
    }

    if (preparationTime === '' || isNaN(Number(preparationTime))) {
      newErrors.preparationTime = 'Le temps de préparation doit être un nombre';
      valid = false;
    } else {
      newErrors.preparationTime = '';
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      addRecipe({
        id: Date.now().toString(), // Generate a unique ID
        title,
        description,
        ingredients,
        instructions,
        imageUrl,
        category,
        cuisine,
        preparationTime: preparationTime === '' ? undefined : Number(preparationTime) // Handle optional property
      });
      // Reset form fields
      setTitle('');
      setDescription('');
      setIngredients(['']);
      setInstructions(['']);
      setImageUrl('');
      setCategory('');
      setCuisine('');
      setPreparationTime('');
      // Redirect to the homepage
      navigate('/');
    }
  };

  // Handle ingredient changes
  const handleChangeIngredients = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  // Handle instruction changes
  const handleChangeInstructions = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        {errors.description && <p>{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="ingredients">Ingrédients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleChangeIngredients(index, e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}>
                Supprimer
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => setIngredients([...ingredients, ''])}>
          Ajouter un ingrédient
        </button>
        {errors.ingredients && <p>{errors.ingredients}</p>}
      </div>

      <div>
        <label htmlFor="instructions">Instructions:</label>
        {instructions.map((instruction, index) => (
          <div key={index}>
            <textarea
              value={instruction}
              onChange={(e) => handleChangeInstructions(index, e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => setInstructions(instructions.filter((_, i) => i !== index))}>
                Supprimer
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => setInstructions([...instructions, ''])}>
          Ajouter une étape
        </button>
        {errors.instructions && <p>{errors.instructions}</p>}
      </div>

      <div>
        <label htmlFor="imageUrl">URL de l'image:</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
        />
        {errors.imageUrl && <p>{errors.imageUrl}</p>}
      </div>

      <div>
        <label htmlFor="category">Catégorie:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
        />
        {errors.category && <p>{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="cuisine">Cuisine:</label>
        <input
          id="cuisine"
          type="text"
          value={cuisine}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCuisine(e.target.value)}
        />
        {errors.cuisine && <p>{errors.cuisine}</p>}
      </div>

      <div>
        <label htmlFor="preparationTime">Temps de préparation (en minutes):</label>
        <input
          id="preparationTime"
          type="number"
          value={preparationTime === '' ? '' : preparationTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPreparationTime(e.target.value === '' ? '' : Number(e.target.value))}
        />
        {errors.preparationTime && <p>{errors.preparationTime}</p>}
      </div>

      <button type="submit">Ajouter la recette</button>
    </form>
  );
};

export default RecipeForm;
