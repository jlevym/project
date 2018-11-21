import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe', ' a description', '../../../../assets/eagle.jpg'),
    new Recipe('new recipe', 'new description', '../../../../assets/squirrel.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
