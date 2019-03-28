import { Component, OnInit } from '@angular/core';
import { CommonService } from './service/common-service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet><app-side-nav></app-side-nav>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router, public commonService: CommonService) {
    this.appInItHeader();
  }

  ngOnInit() {
  }

  appInItHeader() {
    this.router.navigate(['/signin']);
  }
}
