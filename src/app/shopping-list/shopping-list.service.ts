import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

constructor(private http: Http, private authService: AuthService) {}

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

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
    const token = this.authService.getToken();
    return this.http.put('https://angular7-udemy-project.firebaseio.com/ingredients.json?auth=' + token, this.ingredients);
  }
  fetchIngredients() {
    const token = this.authService.getToken();
    return this.http.get('https://angular7-udemy-project.firebaseio.com/ingredients.json?auth=' + token)
      .subscribe(
        (response) => {
          this.setIngredients(response.json());
        });
  }
}
