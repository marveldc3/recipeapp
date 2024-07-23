# Application de Recettes

## Description

Cette application de recettes permet aux utilisateurs de consulter, ajouter, et gérer leurs recettes préférées. Elle est construite en utilisant React et TypeScript. L'application offre une interface utilisateur conviviale pour explorer différentes recettes, voir les détails d'une recette, ajouter de nouvelles recettes, et visualiser les recettes marquées comme favorites.

## Fonctionnalités

- **Liste des Recettes :** Affiche toutes les recettes disponibles avec options de filtrage par catégorie, cuisine, et recherche par titre.
- **Détails de la Recette :** Affiche les détails complets d'une recette spécifique, incluant les ingrédients, les instructions, le temps de préparation, et plus encore.
- **Ajouter une Recette :** Permet à l'utilisateur d'ajouter une nouvelle recette en remplissant un formulaire.
- **Recettes Favorites :** Permet à l'utilisateur de voir toutes les recettes marquées comme favorites.
- **Recherche et Suggestions :** Une barre de recherche avec suggestions pour faciliter la recherche de recettes.

## Installation et Lancement du Projet

1. **Clonez le Répertoire :**

   ```bash
   git clone https://github.com/marveldc3/recipeapp.git
   cd recipeapp
   ```

2. **Installez les Dépendances :**

   Assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, installez les dépendances nécessaires en exécutant :

   ```bash
   npm install
   ```

3. **Lancez l'Application :**

   Pour démarrer l'application en mode développement, utilisez :

   ```bash
   npm start
   ```

   Cela lancera l'application sur [http://localhost:3000](http://localhost:3000) par défaut.

## Description des Composants

- **`App.tsx`** : Composant principal de l'application qui gère l'état global des recettes et des favoris. Configure les routes pour les différentes pages de l'application.

- **`Header.tsx`** : Affiche l'en-tête avec la barre de navigation et une barre de recherche avec suggestions de recettes.

- **`RecipeList.tsx`** : Affiche la liste des recettes avec des options de filtrage et une barre de recherche.

- **`RecipeDetail.tsx`** : Affiche les détails d'une recette individuelle, y compris un bouton pour ajouter ou retirer la recette des favoris.

- **`RecipeForm.tsx`** : Formulaire pour ajouter une nouvelle recette, avec validation des champs.

- **`FavoriteRecipes.tsx`** : Affiche toutes les recettes marquées comme favorites par l'utilisateur.

## Explications Techniques et Architecture

- **React et TypeScript :** Utilisation de React pour construire l'interface utilisateur avec TypeScript pour ajouter une vérification de type statique, ce qui améliore la robustesse et la maintenabilité du code.

- **Gestion de l'État :** L'état des recettes et des favoris est géré par le composant `App.tsx` à l'aide du hook `useState`. Les modifications de favoris sont synchronisées avec le `localStorage` pour persistance entre les sessions.

- **Routage :** Utilisation de `react-router-dom` pour gérer la navigation entre les différentes pages de l'application.

- **Formulaires et Validation :** Les formulaires utilisent le hook `useState` pour gérer les champs de saisie et la validation est effectuée avant l'envoi des données.

- **Styling :** Le styling est géré par le fichier CSS `index.css`, offrant une mise en page simple et responsive.

### **Charte Graphique de RecipeApp**

#### **1. Typographie**
- **Police principale :** Arial, sans-serif
  - Utilisée pour le texte principal et les labels des formulaires.
- **Police secondaire :** Verdana, sans-serif
  - Utilisée pour les titres et sous-titres, si nécessaire.

#### **2. Couleurs**
- **Couleur de fond principale :** #f0f8ff (Blanc Azur)
  - Utilisée pour le fond de la page et les zones principales.
- **Couleur d’accentuation :** #00ffff (Cyan)
  - Utilisée pour les éléments interactifs tels que les boutons, les liens, et les bordures.
- **Couleur de texte principal :** #000000 (Noir)
  - Utilisée pour le texte principal.
- **Couleur de texte secondaire :** #555555 (Gris foncé)
  - Utilisée pour le texte secondaire et les descriptions.
- **Couleur des erreurs :** #ff0000 (Rouge)
  - Utilisée pour les messages d'erreur dans les formulaires.
- **Couleur de fond des cartes de recette :** #ffffff (Blanc)
  - Utilisée pour le fond des cartes de recette afin de les mettre en valeur contre le fond de la page.

#### **3. Espacements**
- **Marge intérieure des éléments :** 20px
  - Appliquée aux formulaires, cartes, et conteneurs pour une meilleure lisibilité.
- **Marge extérieure des éléments :** 10px
  - Appliquée pour l’espacement entre les cartes et autres éléments.

#### **4. Boutons**
- **Boutons principaux :**
  - **Couleur de fond :** #00ffff (Cyan)
  - **Couleur du texte :** #ffffff (Blanc)
  - **Bordure :** Aucun
  - **Effet au survol :** Changement de couleur à #00cccc (Cyan plus foncé)
  - **Bordure-radius :** 50px
  - **Dimensions :** Largeur pleine du conteneur, avec un padding de 20px pour plus de clarté.
- **Boutons secondaires (supprimer, ajouter) :**
  - **Couleur de fond :** #ff4c4c (Rouge clair)
  - **Couleur du texte :** #ffffff (Blanc)
  - **Bordure :** Aucun
  - **Effet au survol :** Changement de couleur à #cc0000 (Rouge foncé)
  - **Bordure-radius :** 50px
  - **Dimensions :** Largeur automatique, avec un padding de 20px.

#### **5. Liens**
- **Couleur des liens :** #00ffff (Cyan)
- **Couleur des liens au survol :** #00cccc (Cyan plus foncé)
- **Style :** Aucun soulignement, sauf au survol.

#### **6. Formulaires**
- **Champs de saisie :**
  - **Couleur de fond :** #ffffff (Blanc)
  - **Couleur du texte :** #000000 (Noir)
  - **Bordure :** 1px solide #00ffff (Cyan)
  - **Bordure-radius :** 50px
  - **Padding :** 15px
- **Messages d'erreur :**
  - **Couleur du texte :** #ff0000 (Rouge)
  - **Taille de police :** 20px
  - **Marges :** 10px autour des messages d'erreur pour plus de visibilité.

#### **7. Cartes de Recettes**
- **Bordure :** 1px solide #00ffff (Cyan)
- **Bordure-radius :** 8px
- **Ombre portée :** 0 4px 10px rgba(0, 0, 0, 0.2)
- **Padding :** 20px
- **Image :**
  - **Dimensions :** 100% de la largeur de la carte, hauteur de 200px.
  - **Mode de couverture :** Couverture pour éviter les déformations.

#### **8. Disposition**
- **Barre de filtre et catégories :**
  - **Largeur :** 100% du conteneur
  - **Disposition :** Flexbox pour un alignement horizontal et vertical.
  - **Bordure :** Aucun
  - **Padding :** 20px

#### **9. Media Queries**
- **Tablettes (≥ 768px) :**
  - **Cartes de recette :** Deux cartes par ligne.
  - **Formulaires :** Ajuster les champs pour qu'ils soient plus adaptés aux écrans plus larges.

- **Téléphones (≤ 767px) :**
  - **Cartes de recette :** Une carte par ligne.
  - **Formulaires :** Champs de saisie et boutons en largeur pleine.
  - **En-tête :** Réduire la taille de la police pour les titres et les liens de navigation pour une meilleure lisibilité sur les petits écrans.

