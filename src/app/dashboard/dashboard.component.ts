import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
accnoD:any
pswdD:any
amountD:any

accnow:any
pswdw:any
amountw:any
  constructor(private ds:AuthserviceService) { }

  ngOnInit(): void {
    // document.body.className = "dashboard"
  }

  deposit(){
    var db = this.ds.database
    var acc = this.accnoD
    var psw = this.pswdD
    var amt = this.amountD

    if(acc in db){
      if(psw == db[acc]["password"]){
        db[acc]["Balance"] = Number(db[acc]["Balance"])+Number(amt)
        db[acc]['Transaction']={
          "Mode":"Online",
          "Type":"Deposit",
          "Amount":amt
        }
        console.log("DATABASE:",db)
        alert(`Amount ${amt} added successfully,Current account balance is ${db[acc]["Balance"]}`)
      }else{
        alert("check password")
      }
    }else{
      alert("No such accounts")
    }
  }

  withdraw(){
    var db = this.ds.database
    var acc = this.accnow
    var psw = this.pswdw
    var amt = this.amountw

    if(acc in db){
      if(psw == db[acc]["password"]){
        if(Number(amt) < Number(db[acc]["Balance"] )){
          db[acc]["Balance"] = Number(db[acc]["Balance"])-Number(amt)
          db[acc]['Transaction']={
            "Mode":"Online",
            "Type":"Withdraw",
            "Amount":amt
          }
          console.log("DATABASE:",db)
          alert(`Amount ${amt} withdrawed successfully,Current account balance is ${db[acc]["Balance"]}`)
        }else{
          alert("Insufficient balance")
        }
       
      }else{
        alert("check password")
      }
    }else{
      alert("No such accounts")
    }
  }

}