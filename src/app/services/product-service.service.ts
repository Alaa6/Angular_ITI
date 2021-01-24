import { Injectable } from '@angular/core';
import { IProduct } from '../viewModel/iproduct';
import { IBoughtProducts } from '../viewModel/ibought-products';

@Injectable({
  providedIn: 'root'  // el scope bta3 l services // root y3ni mtshafa 3la mstwa l project kolo  // momken ta5od bdl root => asm l mdule aw asm l component
})
export class ProductServiceService {

  ProductList: IProduct[] =[];
  TotalPrice : number ;
  boughtProductsList: IBoughtProducts[] ;

  constructor() {
    // this.ProductList =  [
    //   { id: 1, Name: "test product 1", Quantity: 1, Price: 10000, ImgURL: '../../../assets/1.JPG', _Date: new Date(), CateogryID: 1 },
    //   { id: 2, Name: "test product 6", Quantity: 3, Price: 10000, ImgURL: '../../../assets/2.jpg', _Date: new Date(), CateogryID: 1 },

    //   { id: 3, Name: "test product 2", Quantity: 3, Price: 20000, ImgURL: '../../../assets/3.jpg', _Date: new Date(), CateogryID: 2 },
    //   { id: 4, Name: "test product 5", Quantity: 4, Price: 20000, ImgURL: '../../../assets/4.jpg', _Date: new Date(), CateogryID: 2 },

    //   { id: 5, Name: "test product 3", Quantity: 103, Price: 30000, ImgURL: '../../../assets/5.jpg', _Date: new Date(), CateogryID: 3 },
    //   { id: 6, Name: "test product 7", Quantity: 3, Price: 20000, ImgURL: '../../../assets/6.jpg', _Date: new Date(), CateogryID: 3 },
    //   { id: 7, Name: "test product 4", Quantity: 0, Price: 40000, ImgURL: '../../../assets/7.jpg', _Date: new Date(), CateogryID: 3 },
    // ]
    this.TotalPrice = 0
    this.boughtProductsList = []
  }


  

  getAllProducts(): IProduct[] {
    return this.ProductList

  }


  // getProductByCatID(categoryID: number): IProduct[] {

  //   return this.ProductList.filter(product => {
  //     return product.CateogryID == categoryID;
  //   })

  // }
 

  getProductByID(ID: number): IProduct | undefined {

    return this.ProductList.find(product => product.id == ID)
  }



  calcTotalPrice(priceOfone: number, count: string)  :number{

    this.TotalPrice = 0;
    this.TotalPrice += (priceOfone * Number(count))
    return this.TotalPrice ;

  }


  buyProduct (_productName: string ,  _count: number) : IBoughtProducts []{

    this.boughtProductsList.push({ productName: _productName, productCount: _count })
    return  this.boughtProductsList

  }

  getAllBoughtProducts(): IBoughtProducts[] {
    return this.boughtProductsList 

  }




}