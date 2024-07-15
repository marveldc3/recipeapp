// src/components/Header.tsx
import React, { useState } from "react";
import { RecipeContext } from "../App";

const Header = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search recipes..." value={searchQuery} onChange={handleChange} />
    </div>
  );
};

export default Header;