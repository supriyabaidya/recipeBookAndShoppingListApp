import {Subject} from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
