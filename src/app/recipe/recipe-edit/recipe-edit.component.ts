import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

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
    let recipeName = '';
    let recipePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      // get the clicked recipe and override the default values
      const currentRecipe = this.recipeService.getRecipe(this.id);
      recipeName = currentRecipe.name;
      recipePath = currentRecipe.imagePath;
      recipeDescription = currentRecipe.description;
      if (currentRecipe['ingredients']) {
        for (const ingredient of currentRecipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients
      });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,
          [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }



  onSave() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
  } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['/recipe']);
  }

  onCancel() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(''),
      'imagePath': new FormControl(''),
      'description': new FormControl(''),
      'ingredients': new FormArray([])
    });
    this.router.navigate(['/recipe']);
  }
}
