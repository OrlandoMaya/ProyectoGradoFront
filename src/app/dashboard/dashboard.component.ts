import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sideBarOpen = true;

  constructor(private cookieService: CookieService, private router: Router) {  }

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
    } else {
      this.cookieService.deleteAll();
      this.router.navigate(["logout"])
    }
  }

}
