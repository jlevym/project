import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';
import {RecipesRoutingModule} from './recipe/recipes-routing.module';

const appRoutes: Routes = [
 /* { path: '', redirectTo: '/recipe', pathMatch: 'full' },*/
  { path: '', component: HomeComponent },
  { path: 'recipe', loadChildren:  './recipe/recipes.module#RecipesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [
    RouterModule
  ],
  providers: [RecipesRoutingModule]
})

export class AppRoutingModule {
}
