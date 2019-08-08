import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { PresentationModule } from './presentation/presentation.module';
import { SharedService } from './services/sharedService/shared.service';
import { DogsService } from './services/dogsService/dogs.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PresentationModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [SharedService, DogsService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
