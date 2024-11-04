import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SpeedofcarsComponent } from './speedofcars/speedofcars.component';
import { ToggleInputComponent } from './toggle-input/toggle-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeedofcarsComponent,
    ToggleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  exports: [ToggleInputComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
