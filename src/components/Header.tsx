import React from "react";

const Header = ({ setSearchQuery }: { setSearchQuery: (query: string) => void }) => {
  return (
    <header>
      <h1>Recipe App</h1>
      <input type="text" placeholder="Search recipes..." onChange={(e) => setSearchQuery(e.target.value)} />
    </header>
  );
};

export default Header;
