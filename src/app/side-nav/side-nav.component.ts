import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../service/common-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  screenWidth: number;
  pageTitle: any;
  showHeader = true;
  isAuthenticated = false;

  constructor(public route: ActivatedRoute, public commonService: CommonService) {
    this.initHome();
  }

  ngOnInit() {
    this.commonService.isAuthenticated.subscribe((res) => {
      this.isAuthenticated = res;
    });
  }

  private initHome() {
    this.route.data.subscribe((result) => {
      this.pageTitle = result;
    });
  }

  toggleState(e) {
    if (e === 'open') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

}
