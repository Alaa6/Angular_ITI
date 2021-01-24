import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../viewModel/iuser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient :HttpClient ) { }

  getUsers() : Observable<IUser[]> {

    return this.httpClient.get<IUser[]>(`${environment.API_URL}/users`)
   
  }

  isLogged () : boolean {

    if(localStorage.getItem('accessToken')) {

      return true ;

    } else {
      
      return false ;
     

    }
    

  }



  
}
