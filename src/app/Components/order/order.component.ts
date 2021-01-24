import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from '../../../viewModel/icategory';
import {ProductComponent} from '../product/product.component'
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IBoughtProducts } from 'src/app/viewModel/ibought-products';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'] ,
  // providers :[ProductServiceService]

})
export class OrderComponent implements OnInit , AfterViewInit , OnChanges {

 

  // @ViewChild ('testViewChild') viewChildVame : ElementRef |undefined
  @ViewChild ('testViewChild') viewChildVame : ElementRef  = new ElementRef('input')
  @ViewChild ('selectItem') selectItem : ElementRef  = new ElementRef('select')
  @ViewChild (ProductComponent) productComponent : any  ;


 
  categoryList: ICategory[]  | undefined;
  SelectedCategory: number;
  TotalPriceOrder : number ;
  boughtProducts : IBoughtProducts[] 
  count : string ;
  subscriptionList: Subscription[] = []

 

  
  constructor(private orderService :OrderService , private productServe : ProductServiceService ) { 
    this.SelectedCategory = 1 
    this.TotalPriceOrder = 0
    this.count = '1'
    // this.productComponent = new ProductComponent( )
    this.boughtProducts =[]
    // console.log(productserve.ProductList);
  }



  ngOnChanges(): void {
   
  }
  
  ngAfterViewInit(): void {

    this.viewChildVame.nativeElement.style.backgroundColor = '#eee'
    this.selectItem.nativeElement.style.color = 'blue' 
    this.selectItem.nativeElement.style.fontStyle = 'italic'

    let productRef : ProductComponent = this.productComponent

    this.boughtProducts = productRef.boughtProductsList 

    this.boughtProducts  = this.productServe.getAllBoughtProducts()

    console.log(this.boughtProducts , 'view' );
    console.log(productRef , 'productRef in Order Component');
    
    console.log(  productRef.boughtProductsList  , 'boughtProductsList in Order components');

 
  }


  ngOnInit(): void {
      this.orderService.getAllCateories().subscribe((response) => {
        console.log(response);

    }, (err)=> console.log(err) ); 

    let getAllProdSubscription: Subscription = this.orderService.getAllCateories().subscribe((response) => {

      this.categoryList = response
    

  }, (err)=> console.log(err) ); 

    // this.productService.getAllProduct().pipe(map((response) => {
    //   this.allProject = response.data

    // }))

    this.subscriptionList.push(getAllProdSubscription)

  
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptionList) {
      subscription.unsubscribe()
    }

  }


  


  onTotalPriceChage (totalPrice : number){   // event
    this.TotalPriceOrder = totalPrice ;

  }



  



}
