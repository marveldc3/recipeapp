// src/components/Header.tsx
import React from "react";
var Header = function (_a) {
    var setSearchQuery = _a.setSearchQuery;
    return (React.createElement("header", null,
        React.createElement("h1", null, "Recipe App"),
        React.createElement("input", { type: "text", placeholder: "Search recipes...", onChange: function (e) { return setSearchQuery(e.target.value); } })));
};
export default Header;
