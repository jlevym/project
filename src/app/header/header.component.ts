import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selection = 'recipe';
  @Output() showRecipeChanged = new EventEmitter<string>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.changeViewToShoppingList.subscribe(
      () => {
        this.showRecipeChanged.emit('shopping-list');
      }
    );
  }

  toSelector(selector: string) {
    this.selection = selector;
    this.showRecipeChanged.emit(this.selection);
  }
}
