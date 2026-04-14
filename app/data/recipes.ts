export type IngredientGroup = {
  title: string;
  items: string[];
};

export type RecipeContent = {
  /** `data-name` on the root layout wrapper */
  dataName: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  ingredientGroups: IngredientGroup[];
  /** Ordered direction steps (rendered as a numbered list) */
  directions: string[];
};

export const karedokRecipe: RecipeContent = {
  dataName: "Karedok Recipe",
  title: "Karedok",
  imageSrc: "/Karedok.png",
  imageAlt: "Karedok",
  ingredientGroups: [
    {
      title: "Sauce",
      items: [
        "(50g) Peanuts",
        "Tamarind paste",
        "Birds eye chilli",
        "Salt, to taste",
      ],
    },
    {
      title: "Salad",
      items: ["(50g) Long Bean", "(50g) Beansprouts", "1 cucumber"],
    },
  ],
  directions: [
    "Recipe preservation within Indonesia functions as far more than a practical effort to simply record cooking instructions; in truth, it operates as an enduring cultural practice embedded in enculturation, memory, and identity formation.",
    "Across generations, recipes are transmitted orally, through observation, and through shared labor in kitchens, where techniques such as grinding fresh bumbu using an ulek (mortar and pestle), wrapping foods in banana leaves, or balancing sweet, salty, and spicy flavors are learned through participation rather than written measurement.",
    "In this way, preservation is inseparable from socialization: to learn a recipe is simultaneously to learn when it is served, who prepares it, and what meanings it carries within family and ritual life.",
    "These practices reflect broader Indonesian food habits shaped by geography, trade history, and religious influence, as seen in the continued use of indigenous ingredients alongside techniques introduced through centuries of cultural exchange.",
  ],
};

export const nasiGorengRecipe: RecipeContent = {
  dataName: "Nasi Goreng Recipe",
  title: "Nasi goreng",
  imageSrc: "/NasiGoreng.png",
  imageAlt: "Nasi goreng",
  ingredientGroups: [
    {
      title: "Rice & aromatics",
      items: [
        "Day-old cooked rice, about 400g",
        "2 shallots, finely chopped",
        "2 garlic cloves, minced",
        "1 red chilli, sliced (optional)",
      ],
    },
    {
      title: "Seasoning & finish",
      items: [
        "1–2 tbsp kecap manis",
        "1 tbsp soy sauce",
        "Salt and white pepper",
        "Fried shallots and cucumber pickle, to serve",
      ],
    },
  ],
  directions: [
    "Heat a little oil in a wok over high heat. Fry shallots and garlic until fragrant without browning too deeply.",
    "Push aromatics aside, add beaten egg if using, scramble briefly, then mix through.",
    "Add rice, breaking up clumps. Stir-fry until every grain is hot and lightly separate.",
    "Season with kecap manis, soy sauce, salt, and pepper. Toss until evenly coloured. Serve topped with fried shallots and pickles.",
  ],
};

export const kolakBijiSalakRecipe: RecipeContent = {
  dataName: "Kolak Biji Salak Recipe",
  title: "Kolak biji salak",
  imageSrc: "/KolakBijiSalak.png",
  imageAlt: "Kolak biji salak",
  ingredientGroups: [
    {
      title: "Biji salak (sweet potato balls)",
      items: [
        "About 300g orange or yellow sweet potato, steamed until very soft",
        "50–80g tapioca starch (sagu tani), plus extra if needed",
        "Pinch of salt",
      ],
    },
    {
      title: "Syrup & coconut",
      items: [
        "200g palm sugar (gula merah), finely chopped or grated",
        "500ml water",
        "2 pandan leaves, knotted",
        "400ml coconut milk",
        "½ tsp salt, or to taste",
      ],
    },
  ],
  directions: [
    "Mash the steamed sweet potato until completely smooth. While still warm, mix in salt and tapioca starch a little at a time until you have a soft, non-sticky dough that holds its shape; rest 10 minutes.",
    "Roll into small balls (biji salak). Boil plenty of water, drop in the balls, and simmer gently until they float and feel chewy; drain and set aside.",
    "In a pot, dissolve palm sugar in water with pandan. Simmer until lightly thickened and fragrant, then stir in salt.",
    "Pour in coconut milk; heat gently without boiling vigorously so the coconut does not split. Add the cooked balls and simmer briefly to coat. Serve warm or chilled in bowls.",
  ],
};
