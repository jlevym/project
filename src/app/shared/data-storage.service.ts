import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService, private httpClient: HttpClient , private authService: AuthService) {}


  saveRecipes() {
    const token = this.authService.getToken();
    /*return this.httpClient.put('https://angular7-udemy-project.firebaseio.com/recipes.json',  this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
      });*/
    const req =  new HttpRequest('PUT', 'https://angular7-udemy-project.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {reportProgress: true, params: new HttpParams().set('auth', token)})
      return this.httpClient.request(req);

  }
  fetchRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://angular7-udemy-project.firebaseio.com/recipes.json',
      {
      observe: 'body',
      params: new HttpParams().set('auth', token)
    })
    // implement pipe(map to check that each recipe has ingredietns.....
      .pipe(map(
        (recipes) => {
         for (const recipe of recipes) {
           if (!recipe['ingredients']) {
             console.log(recipe.name);
             recipe['ingredients'] = [];
            /* recipe['ingredients'] = [{'amount': 0, 'name': ''}];*/
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
