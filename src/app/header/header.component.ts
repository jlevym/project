import {Component} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  onSave() {
    this.shoppingListService.saveIngredients()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.recipeService.saveRecipies()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
    onFetch() {
    this.shoppingListService.fetchIngredients()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.recipeService.fetchRecipies()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
