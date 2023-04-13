import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';



@NgModule({
  declarations: [
    FullnamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullnamePipe
  ]
})
export class PipesModule { }
