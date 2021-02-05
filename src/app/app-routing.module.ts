import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [   // men bywdy 3la fen 

  {path :"home" , component : HomeComponent} ,
  {path :"about" , component : AboutUsComponent} ,
  {path :"contacts" , component : ContactUsComponent} ,
  // {path :"productDetails/:pID/:pCount" , component : ProductDetailsComponent} ,
  {path :"productDetails2/:pID" , component : PopUpComponent} ,
  {path :"admin/insertproduct" ,component : AddProductComponent , canActivate : [AuthGuardGuard]} ,
  {path :"login" ,component : LoginComponent} ,
  { 
    path: 'order', 
    loadChildren: () => import('./Components/products/products.module').then(m => m.ProductsModule)
  },

  {path :"" , redirectTo :'home' , pathMatch : 'full'} ,  // pathMatch : 'full'  y3ni at2ked an b3d l domain klmt order bs 
  {path :"**" , component :NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
