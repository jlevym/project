import {Component, EventEmitter, Input, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;


  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

  addToShoppingList() {
    const ingredients = this.recipe.ingredients;
      this.shoppingListService.addIngredients(ingredients);
  }
}
