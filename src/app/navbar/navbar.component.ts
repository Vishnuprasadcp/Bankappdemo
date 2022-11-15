import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: any
  constructor(private root: Router) {
    this.name = JSON.parse(localStorage.getItem('usname') || '')
  }

  ngOnInit(): void {
  }
  logout() {
    this.root.navigateByUrl("")
  }

}
