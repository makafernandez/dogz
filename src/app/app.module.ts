import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { IDogBreedsRepository } from './core/repositories/idog-breeds.repository';
import { ISearchDogImagesRepository } from './core/repositories/isearch-dog-images.repository' ;
import { DogBreedsWebRepository } from './data/repository/dog-breeds-repository/dog-breeds-web-repository';
import { SearchDogImagesRepository } from './data/repository/search-dog-images-repository/search-dog-images.repository';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PresentationModule } from './presentation/presentation.module';
import { SharedService } from './services/sharedService/shared.service';



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
		MatToolbarModule,
		DataModule,
		CoreModule
	],
	providers: [
		SharedService,
		{ provide: IDogBreedsRepository, useClass: DogBreedsWebRepository },
		{ provide: ISearchDogImagesRepository, useClass: SearchDogImagesRepository }],
	bootstrap: [AppComponent],
	exports: []
})
export class AppModule { }
