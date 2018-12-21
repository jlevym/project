import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
 /* { path: '', redirectTo: '/recipe', pathMatch: 'full' },*/
  { path: '', component: HomeComponent },
  { path: 'recipe', loadChildren:  './recipe/recipes.module#RecipesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
