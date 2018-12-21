import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {NgModule} from '@angular/core';


const recipesRoutes: Routes = [
  { path: '', component: RecipeComponent, children: [
      /* {path: '', component: RecipeStartComponent, resolve: {recipe: RecipeResolverService}},*/
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ] }
];

@NgModule ({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class RecipesRoutingModule {

}
