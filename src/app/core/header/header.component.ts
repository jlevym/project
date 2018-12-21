/* tslint:disable:max-line-length */
import {Component} from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService,
              private authService: AuthService
  ) {}

  onSave() {
    this.shoppingListService.saveIngredients()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.dataStorageService.saveRecipes()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
    onFetch() {
    this.shoppingListService.fetchIngredients();
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
