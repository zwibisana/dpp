"use client";

import RecipeArticle from "./RecipeArticle";
import { nasiGorengRecipe } from "../data/recipes";

export default function NasiGorengRecipe() {
  return <RecipeArticle recipe={nasiGorengRecipe} />;
}
