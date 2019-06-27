import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedService } from './services/sharedService/shared.service';
import { DogsService } from './services/dogsService/dogs.service';

// Angular/Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Components
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { DisplayResultsComponent } from './components/display-results/display-results.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToolBarComponent,
    ToolsComponent,
    DisplayResultsComponent,
    ResultsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [SharedService, DogsService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
