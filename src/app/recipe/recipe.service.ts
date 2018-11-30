import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('test recipe', ' a description', '../../../../assets/eagle.jpg'),
    new Recipe('new recipe', 'new description', '../../../../assets/squirrel.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
