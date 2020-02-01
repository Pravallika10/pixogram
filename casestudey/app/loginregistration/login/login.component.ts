import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage : string;
  authorized : boolean;
  constructor(public auth : AuthenticateService, public router : Router) {
    this.errorMessage = "Invalid Credentials!!!";
      this.authorized = true;
   }
   checkLogin(txtLogin : HTMLInputElement, txtPass : HTMLInputElement){
    if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        this.authorized = true;
        this.router.navigate(['/mymedia']);
    }else{
        this.authorized = false;
    }
  }

  ngOnInit() {
  }

}
