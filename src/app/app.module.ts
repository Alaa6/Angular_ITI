import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ShadowDirective } from './Directive/shadow.directive';
import {MatCardModule} from '@angular/material/card';
import { InputFormatDirective } from './Directive/input-format.directive';
import { CreditFromatPipe } from './Pipes/credit-fromat.pipe';
import { NationalIDDatePipe } from './Pipes/national-iddate.pipe';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductCardListComponent } from './Components/product-card-list/product-card-list.component';
import { LoginComponent } from './Components/login/login.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component'




@NgModule({  // for components
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    ShadowDirective,
    InputFormatDirective,
    CreditFromatPipe,
    NationalIDDatePipe,
    CategoriesComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    PopUpComponent,
    AddProductComponent,
    ProductCardListComponent,
    LoginComponent,
    UpdateProductComponent,

  
 
  ],
  imports: [  // for Module
    BrowserModule,
    AppRoutingModule , // for Routing
    FormsModule,  //  for ngModel // templete forms
    ReactiveFormsModule ,  // reactive forms
    NoopAnimationsModule ,
    MatButtonModule,
    MatDialogModule ,
    MatCardModule,
    NgbModule ,
    HttpClientModule ,
  ],
  providers: [  // for Services
    // ProductServiceService
  ],   // services 
  
  bootstrap: [AppComponent]
})
export class AppModule { }
