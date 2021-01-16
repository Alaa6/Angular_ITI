import { Injectable } from '@angular/core';
import { IProduct } from '../viewModel/iproduct';

@Injectable({
  providedIn: 'root'  // el scope bta3 l services // root y3ni mtshafa 3la mstwa l project kolo  // momken ta5od bdl root => asm l mdule aw asm l component
})
export class ProductServiceService {

  ProductList: IProduct[];

  constructor() { 
    this.ProductList = [
      { ID: 1, Name: "test product 1", Quantity: 1, Price: 10000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 1 },
      { ID: 2, Name: "test product 6", Quantity: 3, Price: 10000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 1 },

      { ID: 3, Name: "test product 2", Quantity: 3, Price: 20000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 2 },
      { ID: 4, Name: "test product 5", Quantity: 4, Price: 20000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 2 },

      { ID: 5, Name: "test product 3", Quantity: 103, Price: 30000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 3 },
      { ID: 6, Name: "test product 7", Quantity: 3, Price: 20000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 3 },
      { ID: 7, Name: "test product 4", Quantity: 0, Price: 40000, Img: '../../../assets/ppb.png', _Date: new Date(), CateogryID: 3 },


    ]
  }

  getAllProducts () : IProduct[]{
    return this.ProductList

  }


  getProductByCatID(categoryID: number): IProduct[] {

    return this.ProductList.filter(product => {
      return product.CateogryID == categoryID;
    })

  }


  getProductByID(ID: number): IProduct |undefined{

    return this.ProductList.find( product => product.ID == ID)
}


}