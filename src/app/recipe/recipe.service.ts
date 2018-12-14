import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Meat Dish',
      ' Sushi Eagle with Rice',
      'https://images.freeimages.com/images/large-previews/362/food-1-1323947.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 4)
      ]),
    new Recipe('Squirrel delight',
      'Baked Squirrel on toast',
      'https://images.freeimages.com/images/large-previews/110/spaghetti-plate-1-1321302.jpg',
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
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteItem(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
