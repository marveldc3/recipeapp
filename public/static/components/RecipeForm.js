"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/RecipeForm.tsx
var react_1 = __importStar(require("react"));
var App_1 = require("../App");
var kv_1 = require("@vercel/kv");
var RecipeForm = function () {
    var _a = react_1.useContext(App_1.RecipeContext), state = _a.state, dispatch = _a.dispatch;
    var loading = state.loading, error = state.error;
    var _b = react_1.useState(""), title = _b[0], setTitle = _b[1];
    var _c = react_1.useState(""), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState(""), ingredients = _d[0], setIngredients = _d[1];
    var _e = react_1.useState(""), instructions = _e[0], setInstructions = _e[1];
    var _f = react_1.useState(""), category = _f[0], setCategory = _f[1];
    var _g = react_1.useState(""), cuisine = _g[0], setCuisine = _g[1];
    var _h = react_1.useState(""), imageUrl = _h[0], setImageUrl = _h[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var newRecipe, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (title.trim().length < 3 ||
                        description.trim().length < 10 ||
                        ingredients.trim().length < 10 ||
                        instructions.trim().length < 10 ||
                        category.trim().length < 3 ||
                        cuisine.trim().length < 3 ||
                        imageUrl.trim().length < 5) {
                        alert("Please fill in all fields correctly.");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    newRecipe = { id: Date.now().toString(), title: title, description: description, ingredients: ingredients, instructions: instructions, category: category, cuisine: cuisine, prepTime: "N/A", servings: 0, imageUrl: imageUrl };
                    return [4 /*yield*/, kv_1.kv.set("recipes", JSON.stringify(__spreadArrays(state.recipes, [newRecipe])))];
                case 2:
                    _a.sent();
                    dispatch({ type: "SET_RECIPES", payload: __spreadArrays(state.recipes, [newRecipe]) });
                    setTitle("");
                    setDescription("");
                    setIngredients("");
                    setInstructions("");
                    setCategory("");
                    setCuisine("");
                    setImageUrl("");
                    alert("Recipe added successfully!");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error adding recipe:", error_1);
                    alert("Error adding recipe. Please try again later.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={function (event) { return setTitle(event.target.value); }}/>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={function (event) { return setDescription(event.target.value); }}/>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea id="ingredients" value={ingredients} onChange={function (event) { return setIngredients(event.target.value); }}/>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" value={instructions} onChange={function (event) { return setInstructions(event.target.value); }}/>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" value={category} onChange={function (event) { return setCategory(event.target.value); }}/>
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" id="cuisine" value={cuisine} onChange={function (event) { return setCuisine(event.target.value); }}/>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={function (event) { return setImageUrl(event.target.value); }}/>
        <button type="submit">Add Recipe</button>
      </form>
    </div>);
};
exports.default = RecipeForm;
