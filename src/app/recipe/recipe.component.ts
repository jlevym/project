import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  onRecipeUploaded(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}
