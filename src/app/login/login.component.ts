import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "luis";
  password: string = "";
  loginerror:string = "";
  constructor(private LoginService:LoginService) { }

  login() {
    //console.log(this.username);
    //console.log(this.password);

    const user = {username: this.username, password: this.password};

    this.LoginService.login(user).subscribe( data => {
      console.log(data);
/*
      if(data==null) this.loginerror = "Error!!";


      else {
        this.loginerror = "";
        this.LoginService.setToken(data.id);
        this.router.navigate(['/productos'])
      }*/

    });

  }

  ngOnInit(): void {
  }

  }
