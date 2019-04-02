import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../service/common-service';
@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.scss']
})
export class BookAppoinmentComponent implements OnInit {

  constructor(public commonService: CommonService, public route: ActivatedRoute) { }

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
