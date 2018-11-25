import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {isBoolean} from "util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selection = 'recipe';
  @Output() showRecipeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toSelector(selector: string) {
    this.selection = selector;
    this.showRecipeChanged.emit(this.selection);
  }
}
