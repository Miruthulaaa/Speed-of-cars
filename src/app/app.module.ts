import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SpeedofcarsComponent } from './speedofcars/speedofcars.component';
import { ToggleInputComponent } from './toggle-input/toggle-input.component';
import { speedReducer } from './store/speed.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SpeedofcarsComponent,
    ToggleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({speedState: speedReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [ToggleInputComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
