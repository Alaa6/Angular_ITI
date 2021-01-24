import { Component, OnInit, Inject, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/viewModel/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICategory } from 'src/app/viewModel/icategory';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'] 
})
export class UpdateProductComponent implements OnInit  , AfterViewInit {

  // @ViewChild (AddProductComponent) addProduct : any ;

  // new commponent (navigation) |

  product : IProduct ;
  categoryList : ICategory[] = [] ;
  categoryID : number ;

  form = this.fb.group({

    // email: ['' ,[Validators.email , Validators.required] ],
    name: ['' ,[ Validators.required] ],
    price  : [''] ,
    quantity : [''] ,
    catID : [1]
    
    
  });

  constructor( private productService : ProductService ,
             private router : Router ,
             public dialog: MatDialog ,
             private orderService : OrderService ,
             private fb : FormBuilder  ,
             private dialogRef: MatDialogRef<UpdateProductComponent> ,
            //  @Inject(MAT_DIALOG_DATA) data 
             ) {

    this.product = {Name : this.form.value.name ,Price : 0  , Quantity : 0 , CategoryID : 1 , ImgURL :'../../../assets/2.jpg'  }
    this.categoryID =  1

   }
  ngAfterViewInit(): void {

    // let AddProductRef : AddProductComponent = this.addProduct
    // this.product = AddProductRef.product
  }


  ngOnInit(): void {
    this.orderService.getAllCateories().subscribe ((res)=>{
      console.log(res);
      
      this.categoryList = res

    } , 
    (err)=> console.log(err)
    )
  }

  

   save() {
        this.dialogRef.close(this.product);
    }

    close() {
        this.dialogRef.close();
    }





  



  

}
