import {Ingredient} from '../shared/ingredient.model';
import {Observable, Subject} from 'rxjs';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

constructor(private http: Http) {}

  /*private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];*/

  private ingredients: Ingredient[];

  /*getIngredients() {
    return this.ingredients.slice();
  }*/

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  pushIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log('spread', ...ingredients);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  saveIngredients() {
    return this.http.put('https://angular7-udemy-project.firebaseio.com/ingredients.json', this.ingredients);
  }
  fetchIngredients() {
    return this.http.get( 'https://angular7-udemy-project.firebaseio.com/ingredients.json')
      .pipe(map(
        (response) => {
          this.ingredients = response.json();
          this.ingredientsChanged.next(this.ingredients);
          return this.ingredients.slice();
        }
      ));
  }
}
