import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUser } from 'src/app/viewModel/iuser';
import { Router } from '@angular/router';
import { Guid } from "guid-typescript";
import { OrderComponent } from '../products/order/order.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , AfterViewInit {

  @ViewChild (HeaderComponent) header : any  ;

  loginForm = this.fb.group({

    // email: ['' ,[Validators.email , Validators.required] ],
    username: ['' ,[ Validators.required] ], 
    password: ['' ,[ Validators.required , Validators.pattern('[A-Za-z]{6,20}')]]
    // list : this.fb.group({
    //   item1 : [''] ,
    //   item2 : [''] 
    // })
    
  });

  // username : string = '' 
  pass : string = ''

  users : IUser[] = []
  userId : any 

   orderComp :  OrderComponent  |undefined

  constructor(private fb : FormBuilder ,
            private auth : AuthenticationService ,
            private router : Router) { 
              
            }


  ngAfterViewInit(): void {
   
  }

  ngOnInit( ): void {
    this.auth.getUsers().subscribe ((res)=>{

      this.users = res 


    } , (err)=> console.log(err)
    )

   
  }  

  login (_username : string , _password : string){

  let getUser =    this.users.find(user => user.username == _username && user.password == _password)


      if(getUser)  {
        this.userId = Guid.create(); 
        // this.router.navigate(['order']) 
        localStorage.setItem('accessToken', this.userId.value);
        // alert(localStorage.getItem('accessToken'));
        this.router.navigate(['order/products'])
        // window.location.reload(); 

        this.header?.reload()
        
        
      } else {
     alert(' Not authenticated user.')


      }
      
    
    // console.log(this.loginForm.value);
    // console.log(this.loginForm.errors);
    // console.log(this.loginForm.status);

    
    
  

 



    
  }

}
