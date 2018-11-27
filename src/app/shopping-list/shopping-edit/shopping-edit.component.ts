import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newListItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submitNewItem() {
       const name = this.nameRef.nativeElement.value;
       const amount = this.amountRef.nativeElement.value;
       const newIngredient = new Ingredient(name, amount);
       this.newListItem.emit(newIngredient);
  }

}
