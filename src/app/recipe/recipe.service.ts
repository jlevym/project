import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

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
  addRecipe(form: FormGroup) {
    const name = form.value.name;
    const imagePath = form.value.imagePath;
    const discription = form.value.description;
    const recipe = new Recipe( name, discription, imagePath, []);
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());

    console.log(this.recipes);
  }
}
