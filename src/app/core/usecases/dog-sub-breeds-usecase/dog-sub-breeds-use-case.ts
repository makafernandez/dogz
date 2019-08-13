import { DogSubBreedsModel } from '../../domain/dog-sub-breeds-model';
import { DogBreedsRepository } from '../../repositories/dog-breeds.repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class DogSubBreedsUseCase implements UseCase<string, DogSubBreedsModel[]> {
	constructor(private dogsRepository: DogBreedsRepository) { }

	execute(params: string): Observable<DogSubBreedsModel[]> {
		return this.dogsRepository.getSubBreedsList(params);
	}
}
