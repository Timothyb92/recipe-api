import mongoose, { mongo } from "mongoose";

export const recipeSchema = new mongoose.Schema({ 
  recipeName:
  { 
    type: String,
    required: true
  },
  author:
  { 
    type: String,
    required: true
  },
  description:
  { 
    type: String,
    required: true
  },
  cuisine:
  { 
    type: String,
    required: true
  },
  difficulty:
  { 
    type: String,
    required: true
  },
  prepTime:
  { 
    type: String,
    required: true
  },
  cookTime:
  { 
    type: String,
    required: true
  },
  totalServings:
  { 
    type: Number,
    required: true
  },
  ingredients:
  { 
    type: [String],
    required: true
  },
  instructions:
  { 
    type: [String],
    required: true
  },
  tags:

  { type: [String],
    required: true
  },
  imageURL:
  { 
    type: String,
    required: true
  },
  vegan: 
  {
    type: Boolean,
    required: true
  },
  vegetarian: {
    type: Boolean,
    required: true
  }
})

export const recipes = mongoose.model('Recipe', recipeSchema);
