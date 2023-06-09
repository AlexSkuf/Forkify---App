import { API_URL } from './config.js';
import { getJson } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function(id) { 
  try {
    const data = await getJson(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      peblisher: recipe.publisher,
      souceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log(state.recipe);
  } catch(err) {
    // Temp err handling
    console.error(`${err} !7!7!7!7!7!7!7!7!7!`);
    throw err;
  }
}