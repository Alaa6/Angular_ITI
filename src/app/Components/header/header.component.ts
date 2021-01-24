import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accessToken  : string | null;
 


  constructor( private router : Router) { 
    this.accessToken =  localStorage.getItem('accessToken')
  }

  ngOnInit(): void {

  }
  

  logout ()  {
    localStorage.removeItem("accessToken");
    this.router.navigate(['home']) ;
    window.location.reload(); 


   
  }

  reload () {
    window.location.reload(); 

  }

}
