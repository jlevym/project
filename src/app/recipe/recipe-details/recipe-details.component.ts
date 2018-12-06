import {Component, EventEmitter, Input, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

 recipe: Recipe;


  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);
  }

  addToShoppingList() {
    const ingredients = this.recipe.ingredients;
      this.shoppingListService.addIngredients(ingredients);
  }
}
