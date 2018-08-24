import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  add(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.add(new Ingredient(name.value, amount.valueAsNumber));
    // this.ingredientAdded.emit(new Ingredient(name.value, amount.valueAsNumber));
  }

  clear() {
    this.shoppingListService.ingredientCleared.emit();
    // this.ingredientCleared.emit();
  }

}
