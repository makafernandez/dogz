import { Injectable } from '@angular/core';
import { ISearchDogImagesRepository } from '../../repositories/isearch-dog-images.repository';
import { Observable } from 'rxjs';
import { SearchByBreedModel } from 'src/app/core/domain/search-by-breed.model';
import { UseCase } from '../../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class SearchByBreedUseCase implements UseCase<{}, SearchByBreedModel[]> {
	constructor(private searchImages: ISearchDogImagesRepository) { }

	execute(params: any): Observable<SearchByBreedModel[]> {
		const { breed, num } = params;
		return this.searchImages.getBreedImg(breed, num);
	}
}
