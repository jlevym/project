import {Component, OnInit} from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project'
  shouldShowRecipe = 'recipe';
  constructor(private dataStorageService: DataStorageService, private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.fetchIngredients();
    this.dataStorageService.fetchRecipes();
  }

  onRoutingChange(shouldShowRecipe: string) {
    this.shouldShowRecipe = shouldShowRecipe;
  }
}

