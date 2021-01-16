import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DiscountOffers } from '../../viewModel/discount-offers.enum'
import { Store } from '../../viewModel/store'
import { IProduct } from '../../viewModel/iproduct'
import { ICategory } from '../../viewModel/icategory';
import { ThrowStmt } from '@angular/compiler';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'] ,
  // providers :[ProductServiceService]
})

export class ProductComponent  implements OnChanges {


  @Input() inputCatID: number;  

  @Output() TotalPriceChange: EventEmitter<number>;

  @ViewChild ('itemsCount') productCount : ElementRef  = new ElementRef('input')

  @Input() countProductTest !: string ;



  Discount: DiscountOffers;
  // store: Store;
  ClientName: string;
  // CategoryList: ICategory[];
  IsPurshased: boolean;

  selectedValue2: number;
  credit: string;
  creditPipe: number;
  nationalID: number;
  pName: string;
  TotalPrice: number = 0;

  boughtProductsList: object[] ;

  count : string

  productList : IProduct[] |undefined

  





  constructor(private productserve : ProductServiceService  , private router : Router) {
    this.Discount = DiscountOffers.Low
    // this.store = new Store("TestStoreName", ['pr1', 'pr2'], '../../../assets/shop.png');
   
    this.ClientName = 'alaa'
    // this.CategoryList = [
    //   {
    //     ID: 1, Name: 'test Category 1',
    //   },
    //   {
    //     ID: 2, Name: 'test Category 2'
    //   },
    //   {
    //     ID: 3, Name: 'test Category 3'
    //   }
    // ]


    this.IsPurshased = true
    this.count = ''
    this.selectedValue2 = 1

    this.credit = ''
    this.creditPipe = 0
    this.nationalID = 0
    this.pName = 'test product 6'
    this.inputCatID = 1  // @input

    this.TotalPriceChange = new EventEmitter<number>()   //@output

    this.boughtProductsList = []

    console.log(this.count ,'constractor');



  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productList = this.productserve.getProductByCatID(this.inputCatID)

  }







  // getProductByCatID(): IProduct[] {

  //   return this.ProductList.filter(product => {
  //     return product.CateogryID == this.inputCatID;
  //   })

  // }






  CalcTotalPrice(price: number, count: string, item: string) {


    this.TotalPrice = 0;
    this.TotalPrice += (price * Number(count))
    this.boughtProductsList.push({ product :item , count :count})
    // this.count = count

    console.log(this.count ,'llll');
    

    console.log(count);
    
  
    
    // fire event
    this.TotalPriceChange.emit(this.TotalPrice);

  }


  returnValue(quantity: string) {
    return Number(quantity)

  }

  viewProduct (pID : number){
     this.router.navigate(['productDetails' , pID])    // return  promise
    //  this.router.navigate([`productDetails/${pID}` ])

  }




}
