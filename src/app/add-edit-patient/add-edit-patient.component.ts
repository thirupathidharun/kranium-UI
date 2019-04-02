import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.scss']
})
export class AddEditPatientComponent implements OnInit {

  country = [
    {value: 'ind', viewValue: 'India'},
    {value: 'aus', viewValue: 'Australia'},
    {value: 'italy', viewValue: 'Italy'}
  ];

  constructor() { }

  ngOnInit() {
  }

  scan() {
    alert('scan');
  }
}
