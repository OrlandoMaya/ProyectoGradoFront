import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sideBarOpen = true;

  constructor(private router: Router) {  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
    } else {
      localStorage.clear();
      this.router.navigate(["logout"])
    }
  }

}
