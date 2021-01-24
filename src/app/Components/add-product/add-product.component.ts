import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/viewModel/iproduct';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ICategory } from 'src/app/viewModel/icategory';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  product : IProduct ;
  categoryList : ICategory[] = [] ;
  categoryID : number ;
  allProject: IProduct[] = []
  subscriptionList: Subscription[] = []


  constructor( private productService: ProductService ,
               private router: Router ,
               private orderService : OrderService ,
               public dialog: MatDialog) {


    this.product = {Name : '' ,Price : 0  , Quantity : 0 , CategoryID : 1 , ImgURL :'../../../assets/2.jpg'  }
    this.categoryID =  1

   }

  ngOnInit(): void {
    this.orderService.getAllCateories().subscribe ((res)=>{
      console.log(res);
      
      this.categoryList = res

    } , 
    (err)=> console.log(err)
    )

    let getAllProdSubscription: Subscription = this.productService.getAllProduct().subscribe((response) => {
      this.allProject = response
      console.log(response);
    }, (err) => console.log(err) 
    )

    // this.productService.getAllProduct().pipe(map((response) => {
    //   this.allProject = response.data

    // }))

    this.subscriptionList.push(getAllProdSubscription)
  }

  addProduct () {
    this.productService.addProduct(this.product).subscribe((response) => {
      console.log(response);
      this.router.navigate(['order']) 
    
    }, (err) => console.log(err) 
    )  
  }

  delete ( id : number |undefined ) {

      const dialogRef = this.dialog.open(PopUpComponent);

  
      dialogRef.afterClosed().subscribe(result => {

        this.productService.delete(id).subscribe ((response) => {
          console.log(response);
          this.router.navigate(['admin/insertproduct']) 
          window.location.reload(); 
        
        }, (err) => console.log(err) 
        )  
      });

      
    }

    updateProduct (product : IProduct , id : number | undefined) {

      this.product = product

      const dialogRef = this.dialog.open(UpdateProductComponent  );

   

    
      dialogRef.afterClosed().subscribe(result => {
        console.log(' show name :' , result);
        
        // this.productService.updateProduct(product , id).subscribe((response) => {
        //   console.log(response);
        //   // this.router.navigate(['admin/insertproduct']) 
        //   // window.location.reload(); 
        //   // this.router.navigate(['order']) 
        
        // }, (err) => console.log(err) 
        // ) 
  
       
      });
     
    }
  

   

  

  

}
