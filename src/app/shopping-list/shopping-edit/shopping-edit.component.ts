import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }


  submitNewItem(form: NgForm) {
    const listname = form.value.listname;
    const listamount = form.value.listamount
    const newIngredient = new Ingredient(listname, listamount);
    this.shoppingListService.pushIngredients(newIngredient);
    console.log(form);
    form.reset();
  }

}
