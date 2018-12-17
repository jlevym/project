import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService, private http: Http) {}


  saveRecipes() {
    return this.http.put('https://angular7-udemy-project.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  fetchRecipes() {
    this.http.get('https://angular7-udemy-project.firebaseio.com/recipes.json')
    // implement pipe(map to check that each recipe has ingredietns.....
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
         for (const recipe of recipes) {
           if (!recipe['ingredients']) {
             recipe['ingredients'] = [];
           }
         }
         return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) =>  {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
