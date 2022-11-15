import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
accno:any
name:any
pswd:any

registerForm = this.fb.group({
  accno:['',[Validators.required,Validators.pattern("[0-9]*")]],
  uname:['',[Validators.required,Validators.pattern("[A-Za-z]*")]],
  pswd:['',[Validators.required,Validators.pattern("[0-9]*")]]
})
  constructor(private ds:AuthserviceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registerfun(){
    var acno = this.registerForm.value.accno
    var username = this.registerForm.value.uname
    var password = this.registerForm.value.pswd

    if(this.registerForm.valid){

    const result = this.ds.register(acno,password,username)

    if(result){
      alert("Register successfull")
      this.router.navigateByUrl('')
    }else{
      alert("Register failed")
    }
  }else{
    alert("not a valid form")
  }


  }

}