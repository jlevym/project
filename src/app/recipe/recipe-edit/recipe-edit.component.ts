import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {RecipeService} from './../../recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }
  private initForm() {
    this.recipeForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagePath': new FormControl(''),
      'description': new FormControl('')
    });
  }

  onSave() {
    this.recipeService.addRecipe(this.recipeForm);
    console.log(this.recipeForm);
  }
}
