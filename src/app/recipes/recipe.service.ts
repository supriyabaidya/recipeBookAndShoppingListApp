import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('First recipe', 'This is a test/dummy recipe.', './assets/recipe_images/first_recipe.jpg', [
      new Ingredient('egg', 2),
      new Ingredient('oil', 1),
      new Ingredient('salt', 1)
    ]),
    new Recipe('Second recipe', 'This is a test recipe.', './assets/recipe_images/first_recipe.jpg', [
      new Ingredient('potato', 4),
      new Ingredient('oil', 3),
      new Ingredient('salt', 1)
    ]),
    new Recipe('3rd recipe', 'This is a dummy recipe.', './assets/recipe_images/first_recipe.jpg', [
      new Ingredient('egg', 2),
      new Ingredient('salt', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
