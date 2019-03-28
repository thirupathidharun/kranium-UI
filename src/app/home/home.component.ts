import { Component, OnInit } from '@angular/core';

import { CommonService } from '../service/common-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public commonService: CommonService) {
   }

  ngOnInit() {
  }

}
