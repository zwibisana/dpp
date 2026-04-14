"use client";

import RecipeArticle from "./RecipeArticle";
import { karedokRecipe } from "../data/recipes";

export default function KaredokRecipe() {
  return <RecipeArticle recipe={karedokRecipe} />;
}
