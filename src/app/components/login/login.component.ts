import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  loginUser : User ;
  
  constructor(private formBuilder : FormBuilder) {
    this.loginform = this.formBuilder.group({
      username : "",
      password: ""
    })
   }

  ngOnInit(): void {
  }
  userInfo(){
    this.loginUser = this.loginform.value;
     console.log(`Form Data = ${this.loginUser.username}`);
    //console.log("check the submit");
    
    
  }

}
