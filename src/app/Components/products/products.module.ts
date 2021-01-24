import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [ 
  {path :"products" , component : OrderComponent}  ,
  {path :"productDetails/:pID/:pCount" , component : ProductDetailsComponent} ,
  
 ]


@NgModule({
  declarations: [ 
    OrderComponent ,
    ProductDetailsComponent,
    ProductComponent
    
  ],
  imports: [
    CommonModule ,
    NgbModule ,
    MatButtonModule ,
    MatDialogModule ,
    MatCardModule ,
    FormsModule ,
    ReactiveFormsModule ,
    RouterModule.forChild (routes)
  ]
})
export class ProductsModule { }
