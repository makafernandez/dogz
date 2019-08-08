import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { DisplayResultsComponent } from './components/display-results/display-results.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { SharedService } from '../services/sharedService/shared.service';
import { DogsService } from '../services/dogsService/dogs.service';

// Angular/Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WelcomeComponent,
    ToolBarComponent,
    ToolsComponent,
    DisplayResultsComponent,
    ResultsItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [SharedService, DogsService],
})
export class PresentationModule { }
