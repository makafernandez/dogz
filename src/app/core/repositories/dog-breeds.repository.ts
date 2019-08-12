import { DogBreedsModel } from '../domain/dog-breeds-model';
import { Observable } from 'rxjs';

export abstract class DogBreedsRepository {
	abstract getBreedsList(): Observable<DogBreedsModel[]>;
	abstract getSubBreedsList(breed: string): Observable<DogBreedsModel[]>;
}
