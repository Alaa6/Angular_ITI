import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ICategory } from 'src/app/viewModel/icategory';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from '../contact-us/contact-us.component';
// import '~bootstrap/scss/bootstrap';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  categoryList : ICategory[] |undefined
  colors : Object [] 
  constructor(private orderServe : OrderService , private modalService: NgbModal) { 
    this.colors =[
      {bg : '#3a4c54'  , color :  '#fff'} ,
      {bg : '#4b6270'  , color :  '#fff'} ,
      {bg : '#9aafba'  , color :  '#212121'} ,

      {bg : '#dde4e7'  , color :  '#212121'} ,

      {bg : '#f4f7f8'  , color :  '#212121'}

    ]
  }

  ngOnInit(): void {
    // this.categoryList = this.orderServe.getAllCateories()
  }

  open() {
    const modalRef = this.modalService.open(ContactUsComponent);
    // modalRef.componentInstance.name = 'World';
  }

}
