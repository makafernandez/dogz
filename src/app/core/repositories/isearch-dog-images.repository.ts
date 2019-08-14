import { Observable } from 'rxjs';
import { SearchByBreedModel } from '../domain/search-by-breed.model';
import { SearchBySubBreedModel } from '../domain/search-by-sub-breed.model';

export abstract class ISearchDogImagesRepository {
	abstract getBreedImg(breed: string, num?: number): Observable<SearchByBreedModel[]>;
	abstract getSubBreedImg(breed: string, subBreed: string, num?: number): Observable<SearchBySubBreedModel[]>;
}
