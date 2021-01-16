import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [   // men bywdy 3la fen 

  {path :"home" , component : HomeComponent} ,
  {path :"order" , component : OrderComponent} ,
  {path :"about" , component : AboutUsComponent} ,
  {path :"contacts" , component : ContactUsComponent} ,
  {path :"productDetails/:pID" , component : ProductDetailsComponent} ,
  {path :"" , redirectTo :'order' , pathMatch : 'full'} ,  // pathMatch : 'full'  y3ni at2ked an b3d l domain klmt order bs 
  {path :"**" , component :NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
