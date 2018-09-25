import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
  // {path: 'not-found', redirectTo: '/recipes'},
  // {path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
