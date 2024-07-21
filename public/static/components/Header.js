"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Header.tsx
var react_1 = __importDefault(require("react"));
var Header = function (_a) {
    var setSearchQuery = _a.setSearchQuery;
    return (<header>
      <h1>Recipe App</h1>
      <input type="text" placeholder="Search recipes..." onChange={function (e) { return setSearchQuery(e.target.value); }}/>
    </header>);
};
exports.default = Header;
