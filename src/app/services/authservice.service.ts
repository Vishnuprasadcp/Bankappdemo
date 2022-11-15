import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  database: any = {
    1000: { acno: 1000, uname: "Vignesh", password: 1000, Balance: 10000 }
  }
  username: any
  constructor() { }

  register(acno: any, pswd: any, uname: any) {
    var database: any = this.database
    if (acno in database) {
      return false
    } else {
      database[acno] = {
        acno,
        'password': pswd,
        uname,
        Balance: 0
      }

      //car['value']=90
      console.log("database", this.database)
      return true
    }
  }


  servicelogin(acno: any, password: any) {
    let db = this.database
    if (acno in db) {
      if (password == db[acno]['password']) {
        this.username = db[acno]['uname']                                        //03-11-22
        localStorage.setItem('usname', JSON.stringify(this.username))
      return true
      } else {
        alert('Incorrect password')
        return false
      }
    } else {
      alert("User does not exists")
      return false
    }
  }
}