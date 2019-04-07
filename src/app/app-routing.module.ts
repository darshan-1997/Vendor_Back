import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {dashboard} from './dashboard/dashboard.component';
import {profile} from './Profile/profile.component';
import {MenuComponent} from './menu/menu.component';
import {UsersComponent} from './users/users.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { templateJitUrl } from '@angular/compiler';
import {AuthGuard} from './login/auth.guard';
import {booker} from '../app/Booker/booker.component'
//import { OrderDisplay } from './orders/ordersdisplay/displayall/orders.display.component';
import { KitchenApp } from './kitchen/kitchen.component';
import {OrderMainComponent} from './orders/ordersdisplay/ordermain.component';
const routes: Routes = [

   { path:'dashboard', component:dashboard, canActivate:[AuthGuard]},
   { path:'profile', component:profile, canActivate:[AuthGuard]},
   { path:'users', component:UsersComponent, canActivate:[AuthGuard]},
   { path: 'menu', component:MenuComponent, canActivate:[AuthGuard]},
   { path: 'main-nav', component:MainNavComponent, canActivate:[AuthGuard]},
   { path :'login',component:LoginComponent},
   { path: 'booker', component:booker},
   {path: 'kitchen',component:KitchenApp, canActivate:[AuthGuard]},
   
   { path: 'orders', component:OrderMainComponent},
   { path :'**',redirectTo:'login'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const  routingcomponents=[dashboard,profile,MenuComponent,UsersComponent,MainNavComponent];
