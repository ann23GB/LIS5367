import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TimesheetDetailModule } from './components/timesheet-detail/timesheet-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    TimesheetDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
