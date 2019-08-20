import { DogBreedsModel } from '../../../core/domain/dog-breeds.model';
import { DogBreedsWebEntity } from './dog-breeds-web-entity';
import { DogBreedsWebRepositoryMapper } from './dog-breeds-web-repository-mapper';
import { DogSubBreedsModel } from 'src/app/core/domain/dog-sub-breeds.model';
import { DogSubBreedsWebRepositoryMapper } from './dog-sub-breeds-web-repository-mapper';
import { GetUrl } from '../get-url';
import { HttpClient } from '@angular/common/http';
import { IDogBreedsRepository } from '../../../core/repositories/idog-breeds.repository';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DogBreedsWebRepository extends IDogBreedsRepository {

	breedMapper = new DogBreedsWebRepositoryMapper();
	subBreedMapper = new DogSubBreedsWebRepositoryMapper();

	constructor(private http: HttpClient) {
		super();
	}

	getBreedsList(): Observable<DogBreedsModel[]> {
		return this.http
			.get<DogBreedsWebEntity>(GetUrl.generateBreedListUrl())
			.pipe(take(1), map(response => Object.keys(response.message).map(name => this.breedMapper.mapFrom(name))));
	}

	getSubBreedsList(breed: string): Observable<DogSubBreedsModel[]> {
		return this.http
			.get<DogBreedsWebEntity>(GetUrl.generateSubBreedListUrl(breed))
			.pipe(take(1), map(response => Object.values(response.message).map(sub => this.subBreedMapper.mapFrom({ sub, breed }))));
	}
}
