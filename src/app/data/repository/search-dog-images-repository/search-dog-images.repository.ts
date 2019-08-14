import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchDogImagesRepository } from 'src/app/core/repositories/isearch-dog-images.repository';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchByBreedEntity } from './search-by-breed-entity';
import { SearchByBreedMapper } from './search-by-breed-mapper';
import { SearchByBreedModel } from 'src/app/core/domain/search-by-breed.model';
import { SearchBySubBreedModel } from 'src/app/core/domain/search-by-sub-breed.model';

@Injectable({
	providedIn: 'root'
})

export class SearchDogImagesRepository extends ISearchDogImagesRepository {
	private url = 'https://dog.ceo/api';

	searchByBreedMapper = new SearchByBreedMapper();

	constructor(private http: HttpClient) {
		super();
	}

	getBreedImg(breed: string, num = 10): Observable<SearchByBreedModel[]> {
		return this.http
			.get<SearchByBreedEntity>(`${this.url}/breed/${breed}/images/random/${num}`)
			.pipe(take(1), map(response => Object.values(response.message).map(url => this.searchByBreedMapper.mapFrom({ breed, url }))));
	}

	/*map(img => {
					const { message } = img as any;
					return {
						name: breed,
						url: message
					};
				}) */

	getSubBreedImg(breed: string, subBreed: string, num?: number): Observable<SearchBySubBreedModel> {
		return this.http
			.get(`${this.url}/breed/${breed}/${subBreed}/images/random/${num}`)
			.pipe(
				take(1),
				map(img => {
					const { message } = img as any;
					return {
						name: subBreed,
						breed,
						url: message
					};
				})
			);
	}
}