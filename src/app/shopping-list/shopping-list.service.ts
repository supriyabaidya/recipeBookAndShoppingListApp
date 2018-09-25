import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>(); // changed from EventEmitter to Subject
  // allIngredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('egg', 2),
    new Ingredient('milk', 100),
    new Ingredient('butter', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  add(ingregient: Ingredient) {
    console.log('add');
    this.ingredients.push(ingregient);
    this.ingredientsChanged.next(this.ingredients.slice()); // changed from emit to next
  }

  addAll(ingregients: Ingredient[]) {
    console.log('addAll');
    console.log(this.ingredients);
    this.ingredients.push(...ingregients);

    console.log('after Add');
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice()); // changed from emit to next
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
