import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule,
  MatIconModule, MatSnackBarModule, MatListModule, MatDialogModule, MatCardModule, MatFormFieldModule,
  MatCheckboxModule, MatSelectModule, MatRadioModule, MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
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
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
