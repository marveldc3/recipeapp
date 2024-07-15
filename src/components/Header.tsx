// src/components/Header.tsx
import React, { useState, useContext } from "react";
import { RecipeContext } from "../App";

interface HeaderProps {
  setSearchQuery: (query: string) => void; // Define the prop type
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const [searchQuery, setSearchQueryLocal] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryLocal(event.target.value);
    setSearchQuery(event.target.value); // Call the prop function
  };

  return (
    <div>
      <input type="text" placeholder="Search recipes..." value={searchQuery} onChange={handleChange} />
    </div>
  );
};

export default Header;
