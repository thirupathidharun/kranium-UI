import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from '../service/common-service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  options = ['red', 'green', 'blue'];
  buttonColor = 'white';
  isSelect = false;

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

  genderSelect() {
    if (this.buttonColor === 'white') {
      this.buttonColor = '#43A0C6';
      this.isSelect = true;
    } else if (this.buttonColor === '#43A0C6') {
      this.buttonColor = 'white';
      this.isSelect = false;
    }
  }

  applyFilter() {
    console.log('fill');
  }

}
