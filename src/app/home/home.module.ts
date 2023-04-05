import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
