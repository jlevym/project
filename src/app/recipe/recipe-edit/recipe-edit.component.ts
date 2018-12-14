import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {RecipeService} from './../../recipe/recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode = false;
  currentRecipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        if (params['id'] != null) {
          this.editMode = true;
        }
      /*  this.editMode = params['id'] != null;*/
        this.initForm();
      });
  }
  private initForm() {
    if(!this.editMode) {
      this.recipeForm = new FormGroup({
        'name': new FormControl('', Validators.required),
        'imagePath': new FormControl(''),
        'description': new FormControl('')
      });
    } else {
      // get the recipe
      this.currentRecipe = this.recipeService.getRecipe(this.id);
      const recipeName = this.currentRecipe.name;
      const recipePath = this.currentRecipe.imagePath;
      const recipeDescription = this.currentRecipe.description;

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipePath, Validators.required),
        'description': new FormControl(recipeDescription)

      });
    }
  }

  onSave() {
    if(!this.editMode) {
      this.recipeService.addRecipe(this.recipeForm);
  } else {
      this.recipeService.updateRecipe(this.id, this.recipeForm);
    }
  }
}
