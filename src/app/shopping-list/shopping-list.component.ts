import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {forEach} from '@angular/router/src/utils/collection';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.ingredientAdded.subscribe(
    //   (ingredient: Ingredient) => {
    //     this.shoppingListService.add(ingredient);
    //     // this.ingredients.push(ingredient);
    //   }
    // );
    this.shoppingListService.ingredientCleared.subscribe(
      () => {
        this.ingredients = [];
      }
    );

    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
