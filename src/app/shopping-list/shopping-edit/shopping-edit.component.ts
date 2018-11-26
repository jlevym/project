import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newListItem = new EventEmitter<{nameInput: string, amountInput: string}>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  submitNewItem() {
    this.newListItem.emit({
      nameInput: this.nameInput.nativeElement.value,
      amountInput: this.amountInput.nativeElement.value
    });
  }

}
