import { Injectable } from '@angular/core';
import { ICategory } from '../viewModel/icategory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  categoryList: ICategory[]| undefined;

  constructor(private httpClient: HttpClient) {  

    // this.categoryList = [
    //   { ID: 1, Name: 'Samsung' },
    //   { ID: 2, Name: 'huawei' },
    //   { ID: 3, Name: 'iPhone' }
    // ]
  }

  // getAllCateories(): ICategory[] |undefined {
  //   return this.categoryList
  // }

 
  getAllCateories(): Observable<ICategory[]> {

    return this.httpClient.get<ICategory[]>(`${environment.API_URL}/categories`)

  }


  
}

