import { DogBreedsModel } from '../domain/dog-breeds.model';
import { DogSubBreedsModel } from '../domain/dog-sub-breeds.model';
import { Observable } from 'rxjs';

export abstract class IDogBreedsRepository {
	abstract getBreedsList(): Observable<DogBreedsModel[]>;
	abstract getSubBreedsList(breed: string): Observable<DogSubBreedsModel[]>;
}
