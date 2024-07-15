// src/components/Header.tsx
import React, { useState, useContext } from "react";
  import { RecipeContext } from "../App.tsx";

  const Header = () => {
    const { state, dispatch } = useContext(RecipeContext);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
      dispatch({ type: "SET_SEARCH_QUERY", payload: event.target.value });
    };

    return (
      <div>
        <input type="text" placeholder="Search recipes..." value={searchQuery} onChange={handleChange} />
      </div>
    );
  };

  export default Header;
