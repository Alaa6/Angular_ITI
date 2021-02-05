import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { DiscountOffers } from '../../../viewModel/discount-offers.enum'
import { IProduct } from '../../../viewModel/iproduct'

import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { IBoughtProducts } from 'src/app/viewModel/ibought-products';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // providers :[ProductServiceService]
})

export class ProductComponent implements OnChanges, OnInit, OnDestroy {
 

  @Input() inputCatID: number;
  @Output() TotalPriceChange: EventEmitter<number>;
  @ViewChild('itemsCount') productCount: ElementRef = new ElementRef('input')
  @Input() countProductTest !: string;



  Discount: DiscountOffers;
  ClientName: string;
  IsPurshased: boolean;
  selectedValue2: number;
  credit: string;
  creditPipe: number;
  nationalID: number;
  pName: string;
  totalPrice: number = 0;
  boughtProductsList: IBoughtProducts[];
  count: string
  productGategoryList: IProduct[] | undefined;
  subscriptionList: Subscription[] = []
 







  constructor(private productserve: ProductServiceService,
    private router: Router,
    private productService: ProductService) {

    this.Discount = DiscountOffers.Low
    this.ClientName = 'alaa'
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

  }


  ngOnInit(): void {
  
  }




  ngOnChanges(): void {
    // this.productGategoryList = this.productserve.getProductByCatID(this.inputCatID)

    let CatProdSubscription: Subscription = this.productService.getProductByCatID(this.inputCatID).subscribe((response) => {
      this.productGategoryList = response

      console.log(response);
      

    }, (err) => console.log(err) 
    )

    this.subscriptionList.push(CatProdSubscription)


    
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptionList) {
      subscription.unsubscribe()
    }

  }



  buyBroduct(priceOfone: number, count: string, productName: string) {

    this.totalPrice = this.productserve.calcTotalPrice(priceOfone, count);
    this.boughtProductsList = this.productserve.buyProduct(productName, Number(count));
    // this.boughtProductsList.push({ productName: productName, productCount: Number(count) })

    // fire event
    this.TotalPriceChange.emit(this.totalPrice);

    console.log(this.boughtProductsList, 'boughtProductsList in Product components');

 
  }




  returnValue(quantity: string) {
    return Number(quantity)

  }

  viewProduct(pID: number) {
    this.router.navigate(['productDetails', pID])    // return  promise // route service
    //  this.router.navigate([`productDetails/${pID}` ])

  }






}
