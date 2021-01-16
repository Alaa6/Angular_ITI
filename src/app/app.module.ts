import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ShadowDirective } from './Directive/shadow.directive';
import {MatCardModule} from '@angular/material/card';
import { InputFormatDirective } from './Directive/input-format.directive';
import { CreditFromatPipe } from './Pipes/credit-fromat.pipe';
import { NationalIDDatePipe } from './Pipes/national-iddate.pipe';
import { OrderComponent } from './Components/order/order.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';



@NgModule({  // for components
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    SideBarComponent,
    ShadowDirective,
    InputFormatDirective,
    CreditFromatPipe,
    NationalIDDatePipe,
    OrderComponent,
    CategoriesComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,

  
 
  ],
  imports: [  // for Module
    BrowserModule,
    AppRoutingModule , // for Routing
    FormsModule,  //  for ngModel
    NoopAnimationsModule ,
    MatButtonModule,
    MatDialogModule ,
    MatCardModule ,
  ],
  providers: [  // for Services
    // ProductServiceService
  ],   // services 
  
  bootstrap: [AppComponent]
})
export class AppModule { }
