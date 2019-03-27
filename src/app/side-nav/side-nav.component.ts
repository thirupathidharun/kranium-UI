import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

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

  constructor(public route: ActivatedRoute) {
    this.initHome();
  }

  ngOnInit() {
    // console.log(this.events);
    // console.log(this.opened);
  }

  private initHome() {
    this.route.data.subscribe((res) => {
      this.pageTitle = res;
    });
  }

}
