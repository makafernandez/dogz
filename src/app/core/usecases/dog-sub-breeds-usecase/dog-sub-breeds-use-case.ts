import { DogSubBreedsModel } from '../../domain/dog-sub-breeds.model';
import { IDogBreedsRepository } from '../../repositories/idog-breeds.repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';

@Injectable({
	providedIn: 'root'
})
export class DogSubBreedsUseCase implements UseCase<string, DogSubBreedsModel[]> {
	constructor(private dogsRepository: IDogBreedsRepository) { }

	execute(params: string): Observable<DogSubBreedsModel[]> {
		return this.dogsRepository.getSubBreedsList(params);
	}
}
