import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';

const routes: Routes = [{ path: 'signin', component: SignInComponent },
{ path: 'home', component: HomeComponent, data : {pageName : 'Home'} },
{ path: 'searchfilter', component: SearchFilterComponent, data : {pageName : 'Filter'} },
{ path: 'bookappoinment', component: BookAppoinmentComponent, data : {pageName : 'Book Appoinment'} },
{ path: 'addeditpatient', component: AddEditPatientComponent, data : {pageName : 'Add Patient'} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
