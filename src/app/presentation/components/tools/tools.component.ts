import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogBreedsModel } from 'src/app/core/domain/dog-breeds.model';
import { DogBreedsUseCase } from '../../../core/usecases/dog-breeds-usecase/dog-breeds-use-case';
import { DogSubBreedsModel } from 'src/app/core/domain/dog-sub-breeds.model';
import { DogSubBreedsUseCase } from 'src/app/core/usecases/dog-sub-breeds-usecase/dog-sub-breeds-use-case';
import { SearchByBreedModel } from 'src/app/core/domain/search-by-breed.model';
import { SearchByBreedUseCase } from 'src/app/core/usecases/search-by-breed-usecase/search-by-breed-usecase';
import { SearchBySubBreedUseCase } from 'src/app/core/usecases/search-by-sub-breed-usecase/search-by-sub-breed-usecase';
import { SharedService } from 'src/app/services/sharedService/shared.service';
import { tap } from 'rxjs/operators';

/**
 * Implements checkboxes functionality.
 */
@Component({
	selector: 'app-tools',
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {
	@Output() eventClicked = new EventEmitter<Event>();
	panelOpenState = false;
	breeds = [];
	subBreeds = [];
	imgList = [];
	subImgList = [];
	filteredList = [];
	loading = false;
	selected = {
		breed: [],
		subBreed: []
	};

	/**
	 * Creates an instance of ToolsComponent.
	 */
	constructor(
		private sharedService: SharedService,
		private dogBreedsList: DogBreedsUseCase,
		private dogSubBreedsList: DogSubBreedsUseCase,
		private searchByBreed: SearchByBreedUseCase,
		private searchBySubBreed: SearchBySubBreedUseCase
	) { }

	ngOnInit() {
		this.loadBreedList();
	}

	/**
	 * Subscribes to DogBreedsUsecase, and returns a list with all the breeds.
	 */
	loadBreedList() {
		this.dogBreedsList
			.execute(null)
			.pipe(
				tap(() => {
					this.loading = true;
				})
			)
			.subscribe((response: DogBreedsModel[]) => {
				this.breeds = response;
				this.loading = false;
			});
	}

	/**
	 * Subscribes to DogSubBreedsUsecase, and returns a list with all the sub-breeds of a given breed
	 */
	loadSubBreedList(breed: string) {
		this.dogSubBreedsList
			.execute(breed)
			.pipe(
				tap(() => {
					this.loading = true;
				})
			)
			.subscribe((response: DogSubBreedsModel[]) => {
				const obj = response;
				this.subBreeds.push(obj);
				this.loading = false;
			});
	}

	// FILTER USE CASE
	/**
	 * Listens to change events in checkboxes, if a checkbox is checked
	 * calls the search methods. If a checkbox is unchecked, it will call
	 * the uncheck method.
	 *
	 */
	onChange(event: any, breed: string, subBreed: string) {
		if (event.checked) {
			if (subBreed) {
				this.selected.subBreed.push(subBreed);
				this.searchImagesBySubBreed(breed, subBreed, 10);
			} else {
				this.selected.breed.push(breed);
				this.searchImagesByBreed(breed, 10);
				this.loadSubBreedList(breed);
			}
		} else if (!event.checked) {
			if (subBreed) {
				this.uncheck(subBreed, 'subBreed');
			} else {
				this.uncheck(breed, 'breed');
			}
		}
	}
	/**
	 * Filters the results when a checkbox is unchecked.
	 *
	 */
	uncheck(breedName: string, type: string) {
		if (type === 'breed') {
			this.filteredList = this.imgList.filter(breed => breed.name !== breedName);
			this.imgList = this.filteredList;
		} else if (type === 'subBreed') {
			this.filteredList = this.subImgList.filter(breed => breed.name !== breedName);
			this.subImgList = this.filteredList;
		}
		this.addSharedImgList(this.filteredList);
	}

	// SEARCH BY BREED USE CASE
	/**
	 * Subscribes to Dogs Service and returns a list of images urls of a particular breed.
	 *
	 */
	searchImagesByBreed(breed: string, num?: number) {
		this.searchByBreed
			.execute({ breed, num })
			.pipe(
				tap(() => {
					this.loading = true;
				})
			)
			.subscribe((response: SearchByBreedModel[]) => {
				this.subImgList = [];
				this.imgList.push(response);
				this.loading = false;
				this.addSharedImgList(this.imgList);
			});
	}
	/**
	 * Subscribes to Dogs Service and returns a list of images urls of a particular sub-breed.
	 *
	 */
	searchImagesBySubBreed(breed: string, subBreed: string, num: number) {
		this.searchBySubBreed
			.execute({ breed, subBreed, num })
			.pipe(
				tap(() => {
					this.loading = true;
				})
			)
			.subscribe(response => {
				this.imgList = [];
				this.subImgList.push(response);
				this.loading = false;
				this.addSharedImgList(this.subImgList);
			});
	}
	/**
	 * Stores data in the Shared Service, to become available for other components.
	 *
	 */
	addSharedImgList(data: any) {
		this.sharedService.setImageList(data);
	}
}
