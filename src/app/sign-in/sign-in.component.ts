import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonService } from '../service/common-service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements AfterViewInit {

  @ViewChild(AppComponent)
  appauth: AppComponent;

  constructor(public router: Router, public commonService: CommonService) { }

  // ngOnInit() {
  // }

  ngAfterViewInit() {
  }

  signIn() {
    this.commonService.signIn('ip').subscribe(() => {
      this.router.navigate(['/home']);
    });
  }


}
