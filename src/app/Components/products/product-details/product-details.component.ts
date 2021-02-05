import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'src/app/viewModel/iproduct';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnDestroy {

  // productId: string | null = '';
  productId: number = 0;

  product: IProduct | undefined
  productList: IProduct[]
  productCount: string | null = ''
  subscriptionList: Subscription[] = []


  constructor(private activatedRoute: ActivatedRoute,  // route service
    private productService: ProductService,
    private location: Location,
    private router: Router) {

    this.productList = []

  }

  ngOnInit(): void {

    this.productService.getAllProduct().subscribe((response) => {  // de 8lt a7na m7gen l length bs 
      this.productList = response

      console.log(response);
      

    }, (err) => console.log(err) 
    )

    // this.productId = this.activatedRoute.snapshot.paramMap.get('pID');         //if  the route parameter value  does not changes 
    //   this.product = this.productService.getProductByID(Number( this.productId))

    //this.activatedRoute.paramMap.subscribe( fun1 , fun2)
  let routeSubscription :Subscription =  this.activatedRoute.paramMap.subscribe((params: ParamMap) => {    //if  the route parameter value  changes  (Observable) 
      // 3ayz 7aga tnbhny an l data at8yrt 
      this.productId = +Number(params.get('pID'))
      // this.productCount = +Number(params.get('pCount'))
      this.productCount = params.get('pCount')

      console.log(this.productCount);

    let productByIDSubscription =  this.productService.getProductByID(Number(this.productId)).subscribe((response) => {
        this.product  = response
        console.log(response);
      }, (err) => console.log(err)  
      )

      this.subscriptionList.push(productByIDSubscription)

    },
      (err) => console.log(err)

    )   // return 7aga mn no3 subscription


    this.subscriptionList.push(routeSubscription)




  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptionList){
       subscription.unsubscribe()
    }
  }




  goBack() {
    this.location.back();
  }

  previous() {
    if (Number(this.productId) <= 1) {
      this.productId = 1
    } else {
      this.productId = Number(this.productId) - 1
    }
    this.router.navigate([`/order/productDetails/${this.productId}/${this.productCount}`])
  }


  next() {
    if (Number(this.productId) >= this.productList?.length) {
      this.productId = this.productList?.length
    } else {
      this.productId = Number(this.productId) + 1
    }
    this.router.navigate([`/order/productDetails/${this.productId}/${this.productCount}`])

  }


}
