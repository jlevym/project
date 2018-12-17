import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import {DataStorageService} from './shared/data-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<any> {

  constructor(private  dataStorageService: DataStorageService) { }

  resolve() {
    return this.dataStorageService.fetchRecipes();
    }
  }
