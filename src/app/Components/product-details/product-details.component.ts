import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/viewModel/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId : string | null = '' ;
  product :IProduct |undefined
  constructor(private activatedRoute : ActivatedRoute 
     ,private productService :ProductServiceService ) { 

  }

  ngOnInit(): void {

   this.productId = this.activatedRoute.snapshot.paramMap.get('pID') ;
   this.product = this.productService.getProductByID(Number( this.productId))

   console.log( this.product );
   
   
   
  }


}
