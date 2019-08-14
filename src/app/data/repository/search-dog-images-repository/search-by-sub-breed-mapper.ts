import { Mapper } from '../../../core/base/mapper';
import { SearchByBreedEntity } from './search-by-breed-entity';
import { SearchBySubBreedModel } from '../../../core/domain/search-by-sub-breed.model';

export class SearchBySubBreedMapper extends Mapper <SearchByBreedEntity, SearchBySubBreedModel> {
	mapFrom(param): SearchBySubBreedModel {
		const { subBreed, breed, url } = param;
		return {
			name: subBreed,
			breed,
			url
		};
	}
}
