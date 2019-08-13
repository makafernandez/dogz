import { DogBreedsModel } from '../../../core/domain/dog-breeds-model';
import { DogBreedsRepository } from '../../../core/repositories/dog-breeds.repository';
import { DogBreedsWebEntity } from './dog-breeds-web-entity';
import { DogBreedsWebRepositoryMapper } from './dog-breeds-web-repository-mapper';
import { DogSubBreedsWebRepositoryMapper } from './dog-sub-breeds-web-repository-mapper';
import { DogSubBreedsModel } from 'src/app/core/domain/dog-sub-breeds-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DogBreedsWebRepository extends DogBreedsRepository {
	private url = 'https://dog.ceo/api';
	private allBreeds = '/breeds/list/all';

	breedMapper = new DogBreedsWebRepositoryMapper();
	subBreedMapper = new DogSubBreedsWebRepositoryMapper();

	constructor(private http: HttpClient) {
		super();
	}

	getBreedsList(): Observable<DogBreedsModel[]> {
		return this.http
			.get<DogBreedsWebEntity>(`${this.url}${this.allBreeds}`)
			.pipe(take(1), map(response => Object.keys(response.message).map(name => this.breedMapper.mapFrom(name))));
	}

	getSubBreedsList(breed: string): Observable<DogSubBreedsModel[]> {
		return this.http
			.get<DogBreedsWebEntity>(`${this.url}/breed/${breed}/list`)
			.pipe(take(1), map(response => Object.values(response.message).map(sub => this.subBreedMapper.mapFrom({ sub, breed }))));
	}
}
