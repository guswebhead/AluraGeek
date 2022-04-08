import 'animate.css';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
  ]
})
export class SharedModule { }
