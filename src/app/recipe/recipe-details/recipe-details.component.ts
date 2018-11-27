import {Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  isOpen = false;
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onOpen() {
    console.log('onOpen clicked');

  }

}
