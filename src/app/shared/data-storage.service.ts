import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {AuthService} from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService, private http: Http, private authService: AuthService) {}


  saveRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://angular7-udemy-project.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  fetchRecipes() {

    const token = this.authService.getToken();
    this.http.get('https://angular7-udemy-project.firebaseio.com/recipes.json?auth=' + token)
    // implement pipe(map to check that each recipe has ingredietns.....
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
         for (const recipe of recipes) {
           if (!recipe['ingredients']) {
             console.log(recipe.name);
             recipe['ingredients'] = [{'amount': 0, 'name': ''}];
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
