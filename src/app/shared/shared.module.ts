import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import 'animate.css';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class SharedModule { }
