import { DogBreedsModel } from '../../../core/domain/dog-breeds-model';
import { DogBreedsRepository } from '../../../core/repositories/dog-breeds.repository';
import { DogBreedsWebEntity } from './dog-breeds-web-entity';
import { DogBreedsWebRepositoryMapper } from './dog-breeds-web-repository-mapper';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DogBreedsWebRepository extends DogBreedsRepository {
	private url = 'https://dog.ceo/api';
	private allBreeds = '/breeds/list/all';

	mapper = new DogBreedsWebRepositoryMapper();

	constructor(private http: HttpClient) {
		super();
	}

	getBreedsList(): Observable<DogBreedsModel[]> {
		return this.http
			.get<DogBreedsWebEntity>(`${this.url}${this.allBreeds}`)
			.pipe(take(1), map(response => Object.keys(response.message).map(name => this.mapper.mapFrom(name))));
	}

	getSubBreedsList(breed: string): Observable<any> {
		return this.http
			.get<DogBreedsWebEntity[]>(`${this.url}/breed/${breed}/list`)
			.pipe(take(1));
	}
}
