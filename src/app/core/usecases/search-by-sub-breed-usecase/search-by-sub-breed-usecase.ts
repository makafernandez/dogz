import { Injectable } from '@angular/core';
import { ISearchDogImagesRepository } from '../../repositories/isearch-dog-images.repository';
import { Observable } from 'rxjs';
import { SearchBySubBreedModel } from 'src/app/core/domain/search-by-sub-breed.model';
import { UseCase } from '../../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class SearchBySubBreedUseCase implements UseCase<{}, SearchBySubBreedModel[]> {
	constructor(private searchImages: ISearchDogImagesRepository) { }

	execute(params: any): Observable<SearchBySubBreedModel[]> {
		const { breed, subBreed, num } = params;
		return this.searchImages.getSubBreedImg(breed, subBreed, num);
	}
}
