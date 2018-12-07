import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Meat Dish',
      ' Sushi Eagle with Rice',
      '../../../../assets/eagle.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 4)
      ]),
    new Recipe('Squirrel delight',
      'Baked Squirrel on toast',
      '../../../../assets/squirrel.jpg',
      [
        new Ingredient('Squirrel', 4),
        new Ingredient('chips', 50)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
