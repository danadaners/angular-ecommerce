/**
 * This file is to better organize our components/modules.
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'checkout', component: CartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //redirect path
  {path: '**', component: ErrorPageComponent} //wildcard route- checks all routes in router states and if the prompt route doesnt exist, it routes to error page
];

export class AppRoutingModule { }
