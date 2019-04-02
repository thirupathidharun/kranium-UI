import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../service/common-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() title: string;
  events: string[] = [];
  opened: boolean;
  screenWidth: number;
  pageTitle: any;
  showHeader = true;
  isAuthenticated = false;

  constructor(public route: ActivatedRoute,
              public commonService: CommonService,
              private detectChangeRef: ChangeDetectorRef) {
    this.initHome();
  }

  ngOnInit() {
    this.commonService.isAuthenticated.subscribe((res) => {
      this.isAuthenticated = res;
    });
    this.commonService.pageTitle.subscribe((result) => {
      this.pageTitle = result;
      this.detectChangeRef.detectChanges();
    });
  }

  private initHome() {
    // this.route.data.subscribe((result) => {
    //   console.log(result);
    //   debugger;
    //   if (result) {
    //     debugger;
    //     this.pageTitle = result;
    //   }
    // });
  }

  toggleState(e) {
    if (e === 'open') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

}
