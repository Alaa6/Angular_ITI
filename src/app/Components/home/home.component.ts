import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../viewModel/discount-offers.enum'
import { Store } from '../../viewModel/store'
import { IProduct } from '../../viewModel/iproduct'
import { ICategory } from '../../viewModel/icategory';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { IProductCards } from 'src/app/viewModel/iproduct-cards';
import { ProductData } from 'src/app/viewModel/product-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  Discount: DiscountOffers;
  // store: Store;
  ClientName: string;
  ProductList: ProductData[];
  CategoryList: ICategory[] | undefined;
  IsPurshased: boolean;
  selectedValue: number;
  selectedValue2: number;
  credit : string ;
  creditPipe : number ;
  nationalID : number ;
  pName : string ;
 

 
 

  constructor(private productserve: ProductServiceService , 
                private orderServe : OrderService , 
                private productService :ProductService) {
    this.Discount = DiscountOffers.Low 
    // this.store = new Store("TestStoreName", ['pr1', 'pr2'], '../../../assets/shop.png');
    this.ProductList = []
    this.ClientName = 'alaa'
    this.CategoryList = []

    this.IsPurshased = true
    this.selectedValue = 1 
    this.selectedValue2 = 1

    this.credit = ''
    this.creditPipe = 0
    this.nationalID = 0
    this.pName = 'test product 6'
   
     

  }
  ngOnInit(): void {
    // this.ProductList = this.productserve.getAllProducts()
    // this.CategoryList = this.orderServe.getAllCateories()
    this.productService.getAllProductCards().subscribe((res) =>{
      console.log(res);
      this.ProductList =  res.data
   

      

    } ,(err)=>console.log(err)
    )
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

    // this.ProductList.forEach(product => {

    //     if (product.id == id) {
    //       product.Quantity -- ;
          
    //     }
      
       
    //  });

     
  }



  
}


