import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HomeModule } from './home/home.module';
import { FormErrorHelperComponent } from './shared/components/form-error-helper/form-error-helper.component';
import { FullnamePipe } from './shared/pipes/fullname.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  //  ToolbarComponent,
  //  SidebarComponent,
  //  HomeComponent,
  //  PageWrapperComponent,
  //  FullnamePipe,
  //  LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
