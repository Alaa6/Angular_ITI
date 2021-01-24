import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/viewModel/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  productId : string | null = '' ;
  product :IProduct |undefined

  constructor(private activatedRoute : ActivatedRoute ,private productService :ProductServiceService   ) { }

  ngOnInit(): void {


   this.productId = this.activatedRoute.snapshot.paramMap.get('pID') ;
   this.product = this.productService.getProductByID(Number( this.productId))

  }

}
