import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ICategory } from '../../viewModel/icategory';
import { IProduct } from '../../viewModel/iproduct';

import {ProductComponent} from '../product/product.component'
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'] ,
  // providers :[ProductServiceService]

})
export class OrderComponent implements OnInit , AfterViewInit {

 

  // @ViewChild ('testViewChild') viewChildVame : ElementRef |undefined
  @ViewChild ('testViewChild') viewChildVame : ElementRef  = new ElementRef('input')

  @ViewChild ('selectItem') selectItem : ElementRef  = new ElementRef('select')

  @ViewChild (ProductComponent) productComponent : any  ;


 
  CategoryList: ICategory[];
  SelectedCategory: number;
  TotalPriceOrder : number ;
  boughtProducts : object[] 
  count : string ;

  
  constructor(private productserve : ProductServiceService) { 
    this.CategoryList = [
      { ID: 1, Name: 'test Category 1' },
      { ID: 2, Name: 'test Category 2' },
      { ID: 3, Name: 'test Category 3' }
    ]
 


    this.SelectedCategory = 1 
    this.TotalPriceOrder = 0
    this.count = '1'
    // this.productComponent = new ProductComponent()
    this.boughtProducts =[]

    // console.log(productserve.ProductList);
    

   
    
    
  }
  ngAfterViewInit(): void {

    console.log(this.viewChildVame?.nativeElement.value);
    this.viewChildVame.nativeElement.style.backgroundColor = '#eee'


    this.selectItem.nativeElement.style.color = 'blue'
    this.selectItem.nativeElement.style.fontStyle = 'italic'
    

    let productRef  = this.productComponent
    this.boughtProducts = productRef.boughtProductsList

  }


  ngOnInit(): void {
  }


  onTotalPriceChage (totalPrice : number){
    this.TotalPriceOrder = totalPrice ;


  }

  



}
