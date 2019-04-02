import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../service/common-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public commonService: CommonService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((result) => {
      // if (result) {
      //   debugger
      this.commonService.pageTitle.next(result.pageName);
      // this.pageTitle = result;
      // }
    });
  }

}
