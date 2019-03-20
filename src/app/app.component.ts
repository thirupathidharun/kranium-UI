import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {
    this.appInItHeader();
   }

  ngOnInit() {
  }

  appInItHeader() {
    this.router.navigate(['/signin']);
  }
}
