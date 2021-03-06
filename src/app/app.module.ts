import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule,
  MatIconModule, MatSnackBarModule, MatListModule, MatDialogModule, MatCardModule, MatFormFieldModule,
  MatCheckboxModule, MatSelectModule, MatRadioModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatAutocompleteModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { CommonService } from './service/common-service';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SideNavComponent,
    ToolbarComponent,
    SearchFilterComponent,
    BookAppoinmentComponent,
    AddEditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [CommonService, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
