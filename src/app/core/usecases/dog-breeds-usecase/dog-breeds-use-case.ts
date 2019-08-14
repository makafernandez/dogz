import { DogBreedsModel } from '../../domain/dog-breeds.model';
import { IDogBreedsRepository } from '../../repositories/idog-breeds.repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class DogBreedsUseCase implements UseCase<void, DogBreedsModel[]> {
	constructor(private dogsRepository: IDogBreedsRepository) { }

	execute(params: void): Observable<DogBreedsModel[]> {
		return this.dogsRepository.getBreedsList();
	}
}
