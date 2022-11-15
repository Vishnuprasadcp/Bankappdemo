import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  firstname:any
  lastname:any
  age:any
  pancard:any
  accountnumber:any
  aadhar:any
  creditdatabase:any={}
  dummyarray:any=[]

  constructor() { }

  ngOnInit(): void {
  }

  apply()
  {
    this.creditdatabase[this.accountnumber]={
    "fname":this.firstname,
    "lname":this.lastname,
    "Age":this.age,
    "pan":this.pancard,
    "acno":this.accountnumber,
    "adh":this.aadhar
    }
    alert("Applied Successfully")

    this.dummyarray.push({
      "fname":this.firstname,
      "lname":this.lastname,
      "Age":this.age,
      "pan":this.pancard,
      "acno":this.accountnumber,
      "adh":this.aadhar
    })

    console.log(this.creditdatabase)
    console.log(this.dummyarray)
  }

}
