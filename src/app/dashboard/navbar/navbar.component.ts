import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<boolean>(false);
  @Input() sidebar!:boolean;
  constructor( private router: Router) {
    // if(window.innerWidth<=800){
      
    // }
  }

  hideSidebar(){
    this.openSidebar.emit(!this.sidebar)
  }

  ngOnInit(): void {
  }

  Logout() {
    localStorage.removeItem('token')
    this.router.navigate(["logout"])
  }

}
