import { DogBreedsModel } from '../domain/dog-breeds-model';
import { DogBreedsRepository } from './../repositories/dog-breeds.repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from './../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class DogBreedsUseCase implements UseCase<void, DogBreedsModel[]> {
	constructor(private dogsRepository: DogBreedsRepository) { }

	execute(params: void): Observable<DogBreedsModel[]> {
		return this.dogsRepository.getBreedsList();
	}
}
