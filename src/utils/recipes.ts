export interface Recipe {
  recipeName: string;
  author: string;
  description: string;
  cuisine: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  totalServings: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  imageURL: string;
  vegan: boolean;
  vegetarian: boolean;
  _id?: string;
}

export const recipes: Recipe[] = [
  {
    recipeName: "Spaghetti Carbonara",
    author: "Giulia Scarpaleggia",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    cuisine: "Italian",
    difficulty: "Intermediate",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    totalServings: 4,
    ingredients: [
      "320g spaghetti",
      "150g pancetta or guanciale, diced",
      "3 large eggs",
      "100g Pecorino Romano cheese, grated",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish (optional)",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water, then drain spaghetti.",
      "While spaghetti is cooking, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes. Remove from heat and set aside.",
      "In a mixing bowl, whisk together eggs, grated Pecorino Romano cheese, and a pinch of black pepper.",
      "Add cooked spaghetti to the skillet with the pancetta. Pour the egg and cheese mixture over the hot spaghetti and quickly toss to coat, adding reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately, garnished with additional grated cheese, black pepper, and fresh parsley if desired.",
    ],
    tags: ["pasta", "Italian", "carbonara", "egg-based"],
    imageURL: "https://example.com/spaghetti_carbonara.jpg",
    vegan: false,
    vegetarian: false,
  },
  {
    recipeName: "Vegetable Stir Fry",
    author: "Jennifer Smith",
    description:
      "A quick and easy stir-fry recipe packed with colorful vegetables and flavorful sauce.",
    cuisine: "Asian",
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    totalServings: 4,
    ingredients: [
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 green bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, sliced",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1/4 cup soy sauce",
      "2 tablespoons sesame oil",
      "1 tablespoon cornstarch",
      "2 tablespoons water",
      "Cooked rice for serving",
    ],
    instructions: [
      "In a small bowl, whisk together soy sauce, sesame oil, cornstarch, and water to make the sauce. Set aside.",
      "Heat a large skillet or wok over medium-high heat. Add a splash of oil and sauté garlic until fragrant.",
      "Add sliced bell peppers, broccoli, carrot, and onion to the skillet. Stir-fry for 5-7 minutes until vegetables are tender-crisp.",
      "Pour the sauce over the vegetables and toss to coat. Cook for another 2-3 minutes until the sauce has thickened.",
      "Serve hot over cooked rice.",
    ],
    tags: ["stir-fry", "Asian", "vegetarian", "vegan", "quick", "easy"],
    imageURL: "https://example.com/vegetable_stir_fry.jpg",
    vegan: true,
    vegetarian: true,
  },
  {
    recipeName: "Mushroom Risotto",
    author: "Sophia Johnson",
    description:
      "A creamy and comforting Italian rice dish made with Arborio rice, mushrooms, white wine, and Parmesan cheese.",
    cuisine: "Italian",
    difficulty: "Intermediate",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    totalServings: 4,
    ingredients: [
      "1 cup Arborio rice",
      "4 cups vegetable broth, heated",
      "1/2 cup white wine",
      "2 tablespoons olive oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "8 ounces mushrooms (button or cremini), sliced",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons butter",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish (optional)",
    ],
    instructions: [
      "In a large skillet or saucepan, heat olive oil over medium heat. Add chopped onion and garlic, and sauté until softened, about 5 minutes.",
      "Add sliced mushrooms to the skillet and cook until they release their juices and become golden brown, about 8-10 minutes.",
      "Add Arborio rice to the skillet and cook for 2-3 minutes, stirring constantly, until the rice is well-coated with oil.",
      "Pour in the white wine and cook until it is absorbed by the rice, stirring frequently.",
      "Gradually add the heated vegetable broth, one ladleful at a time, stirring constantly and allowing the rice to absorb the liquid before adding more. Continue this process until the rice is creamy and tender, about 20-25 minutes.",
      "Stir in grated Parmesan cheese and butter until melted and creamy. Season with salt and black pepper to taste.",
      "Garnish with fresh parsley if desired, and serve hot.",
    ],
    tags: ["risotto", "Italian", "mushrooms", "creamy", "comfort food"],
    imageURL: "https://example.com/mushroom_risotto.jpg",
    vegan: false,
    vegetarian: true,
  },
];
