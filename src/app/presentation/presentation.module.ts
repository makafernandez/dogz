import { CommonModule } from '@angular/common';
import { DataModule } from './../data/data.module';
import { DisplayResultsComponent } from './components/display-results/display-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { SharedService } from '../services/sharedService/shared.service';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

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
		DataModule,
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
	providers: [SharedService],
})
export class PresentationModule { }
