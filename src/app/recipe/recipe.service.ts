import {Recipe} from './recipe.model';
import {Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[];

  constructor(private http: Http) {}

  /*private recipes: Recipe[] = [
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
  ];*/

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

  saveRecipies() {
    return this.http.put('https://angular7-udemy-project.firebaseio.com/recipes.json', this.recipes);
  }
  fetchRecipies() {
    return this.http.get('https://angular7-udemy-project.firebaseio.com/recipes.json')
      .pipe(map(
        (response) => {
          this.recipes = response.json();
          this.recipeChanged.next(this.recipes);
          return this.recipes.slice();
        }
      ))
      .pipe(catchError(error => {
        return throwError('something went wrong server side for fetching recipes....');

      }));
  }
}
