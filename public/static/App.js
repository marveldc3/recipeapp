"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeContext = void 0;
// src/App.tsx
var react_1 = __importStar(require("react"));
var kv_1 = require("@vercel/kv");
var checkDatabase_1 = require("./components/checkDatabase"); // Import the checkDatabase function
var RecipeList_1 = __importDefault(require("./components/RecipeList"));
var RecipeDetail_1 = __importDefault(require("./components/RecipeDetail"));
var RecipeForm_1 = __importDefault(require("./components/RecipeForm"));
var FavoriteRecipes_1 = __importDefault(require("./components/FavoriteRecipes"));
var Header_1 = __importDefault(require("./components/Header"));
var RecipeContext = react_1.createContext({
    state: {
        recipes: [],
        favorites: [],
        searchQuery: "",
        loading: false,
        error: "",
    },
    dispatch: function () { return null; },
});
exports.RecipeContext = RecipeContext;
var recipeReducer = function (state, action) {
    switch (action.type) {
        case "SET_SEARCH_QUERY":
            return __assign(__assign({}, state), { searchQuery: action.payload });
        case "SET_FAVORITES":
            return __assign(__assign({}, state), { favorites: action.payload });
        case "LOAD_RECIPES":
            return __assign(__assign({}, state), { loading: true, error: "" });
        case "SET_RECIPES":
            return __assign(__assign({}, state), { loading: false, recipes: action.payload });
        case "ERROR_RECIPES":
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case "SET_FAVORITE":
            var updatedFavorites = action.isFavorite
                ? __spreadArrays(state.favorites, [action.payload]) : state.favorites.filter(function (id) { return id !== action.payload; });
            return __assign(__assign({}, state), { favorites: updatedFavorites });
        default:
            return state;
    }
};
var App = function () {
    react_1.default.useEffect(function () {
        var checkDatabaseAndDispatch = function () { return __awaiter(void 0, void 0, void 0, function () {
            var databasePopulated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, checkDatabase_1.checkDatabase()];
                    case 1:
                        databasePopulated = _a.sent();
                        dispatch({
                            type: "LOAD_RECIPES",
                            payload: databasePopulated,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        checkDatabaseAndDispatch();
    }, []);
    var _a = react_1.useReducer(recipeReducer, {
        recipes: [],
        favorites: [],
        searchQuery: "",
        loading: false,
        error: "",
    }), state = _a[0], dispatch = _a[1];
    var setSearchQuery = function (query) {
        dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    };
    var setFavorite = function (recipeId, isFavorite) { return __awaiter(void 0, void 0, void 0, function () {
        var favorites, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    favorites = isFavorite
                        ? __spreadArrays(state.favorites, [recipeId]) : state.favorites.filter(function (id) { return id !== recipeId; });
                    return [4 /*yield*/, kv_1.kv.set("user_favorites", JSON.stringify(favorites))];
                case 1:
                    _a.sent();
                    dispatch({ type: "SET_FAVORITES", payload: favorites });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error setting favorite:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<RecipeContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Header_1.default setSearchQuery={setSearchQuery}/>
      <RecipeList_1.default />
      <RecipeDetail_1.default recipeId={"some_recipe_id"}/>
      <RecipeForm_1.default />
      <FavoriteRecipes_1.default />
    </RecipeContext.Provider>);
};
exports.default = App;
