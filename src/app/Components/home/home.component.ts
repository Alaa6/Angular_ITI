import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../viewModel/discount-offers.enum'
import { Store } from '../../viewModel/store'
import { IProduct } from '../../viewModel/iproduct'
import { ICategory } from '../../viewModel/icategory';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent  {

  Discount: DiscountOffers;
  // store: Store;
  ClientName: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  IsPurshased: boolean;
  selectedValue: number;
  selectedValue2: number;
  credit : string ;
  creditPipe : number ;
  nationalID : number ;
  pName : string ;
 

 
 

  constructor() {
    this.Discount = DiscountOffers.Low 
    // this.store = new Store("TestStoreName", ['pr1', 'pr2'], '../../../assets/shop.png');
    this.ProductList = [
      { ID: 1, Name: "test product 1", Quantity: 1, Price: 10000, Img: '../../../assets/ppb.png', _Date :new Date() ,CateogryID: 1 },
      { ID: 2, Name: "test product 6", Quantity: 3, Price: 10000, Img: '../../../assets/ppb.png', _Date :new Date() ,CateogryID: 1 },

      { ID: 3, Name: "test product 2", Quantity: 3, Price: 20000, Img: '../../../assets/ppb.png', _Date :new Date() ,CateogryID: 2 },
      { ID: 4, Name: "test product 5", Quantity: 4, Price: 20000, Img: '../../../assets/ppb.png', _Date :new Date() ,CateogryID: 2 },

      { ID: 5, Name: "test product 3", Quantity: 103, Price: 30000, Img: '../../../assets/ppb.png',_Date :new Date() , CateogryID: 3 } ,
      { ID: 6 , Name: "test product 7", Quantity: 3, Price: 20000, Img: '../../../assets/ppb.png',_Date :new Date() , CateogryID: 3 },

      { ID: 7, Name: "test product 4", Quantity: 0, Price: 40000, Img: '../../../assets/ppb.png', _Date :new Date() , CateogryID: 3 } ,


    ]
    this.ClientName = 'alaa'
    this.CategoryList = [
      { ID: 1, Name: 'test Category 1' },
      { ID: 2, Name: 'test Category 2' },
      { ID: 3, Name: 'test Category 3' }
    ]

    this.IsPurshased = true
    this.selectedValue = 1 
    this.selectedValue2 = 1

    this.credit = ''
    this.creditPipe = 0
    this.nationalID = 0
    this.pName = 'test product 6'
   
    

  }

  onBuyToggle() {
    if (this.IsPurshased == true) {
      this.IsPurshased = false
    }
    else {
      this.IsPurshased = true
    }
  }

  onBuy ( id : any){

    this.ProductList.forEach(product => {

        if (product.ID == id) {
          product.Quantity -- ;
          
        }
      
       
     });

     
  }



  
}


