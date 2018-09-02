import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>(); // changed from EventEmitter to Subject
  // allIngredientsChanged = new EventEmitter<Ingredient[]>();

  ingredientAdded = new EventEmitter<Ingredient>();
  ingredientCleared = new EventEmitter();
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
    // this.ingredients = this.ingredients.concat(ingregients);
    console.log('after Add');
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice()); // changed from emit to next
  }
}
