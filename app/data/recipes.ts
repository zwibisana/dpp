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
      title: "Vegetables",
      items: [
        "1 large cucumber, diced into 1/2 inch pieces",
        "1/4 medium-sized cabbage, shredded",
        "1 cup long beans, blanched and cut into 1/2 inch pieces",
        "2 cups bean sprouts",
      ],
    },
    {
      title: "Peanut Dressing",
      items: [
        "1 cup red-skin peanuts",
        "1/2 inch ginger",
        "1 birds eye chili",
        "5 cloves garlic, minced",
        "1 tbsp tamarind juice",
        "1/4 cup palm sugar",
        "2 tsp salt",
      ],
    },
  ],
  directions: [
    "Mix all the vegetables and set aside.",
    "In a pan, heat 1/2 tbsp of oil and toast peanuts.",
    "If using a food processor, blend in the toasted peanuts and the rest of the peanut dressing ingredients together. You may need extra water to get the desired consistency.",
    "If using a mortar and pestle, start by grinding the roasted peanuts, then add the rest of the ingredients in. Add in water as necessary to achieve the desired consistency.",
    "Add fried red onions or fried shallots for an extra crunch!",
  ],
};

export const nasiGorengRecipe: RecipeContent = {
  dataName: "Nasi Goreng Recipe",
  title: "Nasi goreng",
  imageSrc: "/NasiGoreng.png",
  imageAlt: "Nasi goreng",
  ingredientGroups: [
    {
      title: "Rice",
      items: [
        "4 garlic cloves",
        "1 inch ginger",
        "1 shallot",
        "1 inch green onion stem",
        "1 birds eye chili",
        "2 tsp shrimp paste",
        "1/2 white onion, diced",
        "2 eggs",
        "3 cups cold, cooked white rice",
        "2 tbsp kecap manis",
        "1/3 cup bean sprouts",
      ],
    },
    {
      title: "Garnish",
      items: ["Fried shallots", "Green onion", "Tomato and cucumber"],
    },
  ],
  directions: [
    "Heat 1 tbsp vegetable oil in a pan or wok over medium-high heat. Add garlic, ginger, shallot, green onion stems, and chili, and sauté until fragrant, about 1 minute. Add onion and cook until slightly softened, then stir in the shrimp paste.",
    "Push everything to one side of the pan and crack in the eggs. Scramble until just cooked, then mix everything.",
    "Add the rice, breaking up any clumps, and stir-fry on high heat until heated through. Pour in kecap manis and toss to evenly coat.",
    "Add bean sprouts at the end and cook briefly, just until slightly wilted but still crisp.",
    "Serve warm, topped with fried shallots, sliced green onion, tomato, and cucumber.",
  ],
};

export const kolakBijiSalakRecipe: RecipeContent = {
  dataName: "Kolak Biji Salak Recipe",
  title: "Kolak biji salak",
  imageSrc: "/Kolak.png",
  imageAlt: "Kolak biji salak",
  ingredientGroups: [
    {
      title: "Sweet Potato Balls",
      items: [
        "2 medium sized sweet potatoes",
        "1/3 cup tapioca flour",
        "1/6 tsp salt",
      ],
    },
    {
      title: "Palm Sugar Porridge",
      items: [
        "1/3 cup palm sugar",
        "1/8 cup granulated sugar",
        "1 1/3 cups water",
        "1/6 tsp salt",
        "2 small pandan leaves",
      ],
    },
    {
      title: "Coconut Milk Sauce",
      items: [
        "1/3 cup thick coconut milk",
        "2 small pandan leaves, knotted",
        "1/6 tsp salt",
      ],
    },
  ],
  directions: [
    "Cut the peeled sweet potatoes into large chunks. Steam for 15 to 20 minutes or microwave for 5 minutes, until tender.",
    "While the sweet potatoes cook, combine water, palm sugar, granulated sugar, pandan leaves, and salt in a medium pot. Bring to a boil, then turn off the heat. Strain to remove the pandan leaves and any residue from the palm sugar, then set aside.",
    "In a small saucepan, add coconut milk, salt, and pandan leaves. Simmer over low heat, stirring constantly. Turn off the heat and set aside.",
    "Once the sweet potatoes are cooked, transfer them to a bowl and mash until smooth while still warm. Add tapioca flour and salt, then knead until fully combined. Roll the dough into long, thin logs, cut into small pieces, and shape into balls about an inch each.",
    "Fill a medium pot halfway with water and bring to a boil. Add the sweet potato balls and cook until they float to the surface. Use a strainer to transfer them into the palm sugar syrup.",
    "Bring the palm sugar syrup to a boil. In a small bowl, mix 1 tablespoon tapioca flour with 2 tablespoons water until smooth. Pour this into the syrup and cook until it thickens and begins to bubble. Remove from heat.",
    "To serve, spoon the sweet potato balls with the syrup into a bowl and drizzle generously with coconut milk.",
  ],
};
