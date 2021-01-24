import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IProduct } from '../viewModel/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IProductCards } from '../viewModel/iproduct-cards';
import { ProductData } from '../viewModel/product-data';

@Injectable({
  providedIn: 'root'
}) 

 

export class ProductService {

  productList: IProduct[] = [];


  constructor(private httpClient: HttpClient) { }

 

  getAllProduct(): Observable<IProduct[]> {

    return this.httpClient.get<IProduct[]>(`${environment.API_URL}/products`).pipe(map((res) => res))

  }

  getProductByID (pID : number) : Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.API_URL}/products/${pID}`)


  }

  addProduct(product : IProduct): Observable<IProduct> {

    const headerObtions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json' ,
        // 'Authorization' : 'token' 

      })
    }

    return this.httpClient.post<IProduct>(`${environment.API_URL}/products` ,product ,headerObtions)

  }


  updateProduct(product : IProduct , id : number | undefined): Observable<IProduct> {


    return this.httpClient.put<IProduct>(`${environment.API_URL}/products/${id}` ,product )

  }



  delete ( id : number |undefined  )  {

    return this.httpClient.delete<IProduct>(`${environment.API_URL}/products/${id}` )


  }

 

//   getProductByCatID(categoryID: number): IProduct[] {

//     return this.productList.filter(product => {
//       return product.CateogryID == categoryID;
//     })

//   }
// }


getProductByCatID(categoryID: number):  Observable<IProduct[]> {

       return this.httpClient.get<IProduct[]>(`${environment.API_URL}/products?CategoryID=${categoryID}`)

}


getAllProductCards(): Observable<IProductCards> {

  return this.httpClient.get<IProductCards>(`https://reqres.in/api/product`).pipe(map((res) => res))

}



}
