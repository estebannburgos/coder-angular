import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { FormErrorHelperModule } from '../shared/components/form-error-helper/form-error-helper.module';
import { MatTableModule } from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PageWrapperComponent } from '../page-wrapper/page-wrapper.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    ToolbarComponent,
    SidebarComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    DirectivesModule
  ],
  exports: [
    HomeComponent,
    ToolbarComponent
  ]
})
export class HomeModule { }
