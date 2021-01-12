import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../../viewModel/discount-offers.enum'
import { Store } from '../../../viewModel/store'
import { IProduct } from '../../../viewModel/iproduct'
import { ICategory } from 'src/viewModel/icategory';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  Discount: DiscountOffers;
  store: Store;
  ClientName: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  IsPurshased: boolean;
  selectedValue: number;


  constructor() {
    this.Discount = DiscountOffers.Low
    this.store = new Store("TestStoreName", ['pr1', 'pr2'], '../../../assets/shop.png');
    this.ProductList = [
      { ID: 1, Name: "test product 1", Quantity: 100, Price: 10000, Img: '../../../assets/ppb.png', CateogryID: 1 },
      { ID: 2, Name: "test product 2", Quantity: 102, Price: 20000, Img: '../../../assets/ppb.png', CateogryID: 2 },
      { ID: 3, Name: "test product 3", Quantity: 103, Price: 30000, Img: '../../../assets/ppb.png', CateogryID: 3 }

    ]
    this.ClientName = 'alaa'
    this.CategoryList = [
      { ID: 1, Name: 'test Category 1' },
      { ID: 2, Name: 'test Category 2' },
      { ID: 3, Name: 'test Category 3' }
    ]

    this.IsPurshased = true
    this.selectedValue = 1

  }

  onBuy() {
    if (this.IsPurshased == true) {
      this.IsPurshased = false
    }
    else {
      this.IsPurshased = true
    }
  }

  openDialog () {

  }


}
