import {Component, OnInit} from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project'
  constructor(private dataStorageService: DataStorageService, private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.fetchIngredients();  // i put this here to load from database - not in lecture!
    this.dataStorageService.fetchRecipes();  // same as above

    firebase.initializeApp({
      apiKey: 'AIzaSyCM_5f2J8Shgylb5jQIxyCQRWiXW-uFXQ0',
      authDomain: 'angular7-udemy-project.firebaseapp.com'
    });
  }
}

