import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isBoolean} from "util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showRecipe = false;
  @Output() showRecipeChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toRecipe() {
    this.showRecipe = true;
    this.showRecipeChanged.emit(this.showRecipe);
  }

  toShoppingList() {
    this.showRecipe = false;
    this.showRecipeChanged.emit(this.showRecipe);
  }
}
