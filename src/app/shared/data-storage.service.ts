import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Recipe} from '../recipe/recipe.model';

import {RecipeService} from '../recipe/recipe.service';


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
      .subscribe(
        (response) => {
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
